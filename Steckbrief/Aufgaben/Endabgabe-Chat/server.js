"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndabgabeChat = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var EndabgabeChat;
(function (EndabgabeChat) {
    let mongoDaten;
    let databaseUrl;
    //databaseUrl = "mongodb://localhost:27017";
    databaseUrl = "mongodb+srv://dbUser:1234@spacy-nobwa.mongodb.net/Chat?retryWrites=true&w=majority";
    // mongodb+srv://dbUser:1234@spacy-nobwa.mongodb.net/Aufgabe11?retryWrites=true&w=majority
    connectToDatabase(databaseUrl);
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.listen(port);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        mongoDaten = mongoClient.db("Chat").collection("WorldChat");
    }
    function handleRequest(_request, _response) {
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/retrieve") {
                mongoDaten.find({}).toArray(function (exception, result) {
                    if (exception)
                        throw exception;
                    let resultString = "";
                    for (let i = 0; i < result.length; i++) {
                        resultString += JSON.stringify(result[i]);
                    }
                    console.log(resultString);
                    _response.write(JSON.stringify(resultString));
                    _response.end();
                });
            }
            else if (path == "/store")
                mongoDaten.insertOne(url.query);
        }
    }
})(EndabgabeChat = exports.EndabgabeChat || (exports.EndabgabeChat = {}));
//# sourceMappingURL=server.js.map