"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndabgabeChat = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var EndabgabeChat;
(function (EndabgabeChat) {
    let databaseUrl;
    databaseUrl = "mongodb+srv://dbUser:1234@spacy-nobwa.mongodb.net/Chat?retryWrites=true&w=majority";
    let mongoDaten;
    let options;
    let mongoClient;
    //databaseUrl = "mongodb://localhost:27017";
    databaseUrl = "mongodb+srv://dbUser:1234@spacy-nobwa.mongodb.net/Chat?retryWrites=true&w=majority";
    // mongodb+srv://dbUser:1234@spacy-nobwa.mongodb.net/Aufgabe11?retryWrites=true&w=majority
    connectToDatabase(databaseUrl, "user");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.listen(port);
    async function connectToDatabase(_url, _collection) {
        options = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        console.log("Verbindung zur Datenbank mit Kollekion: " + _collection);
        mongoDaten = mongoClient.db("Chat").collection(_collection);
    }
    async function handleRequest(_request, _response) {
        console.log("Anfrage bekommen");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            switch (path) {
                case "/retrieve/hfu": {
                    mongoDaten = mongoClient.db("Chat").collection("hfu");
                    await connectToDatabase(databaseUrl, "hfu");
                    mongoDaten.find({}).toArray(function (exception, result) {
                        if (exception)
                            throw exception;
                        let resultString = "";
                        for (let i = 0; i < result.length; i++) {
                            resultString += JSON.stringify(result[i]) + ",";
                        }
                        //console.log(resultString);
                        _response.write(JSON.stringify(resultString));
                        _response.end();
                        console.log("Nachrichten aus dem Chat hfu geholt");
                    });
                    break;
                }
                case "/retrieve/mib": {
                    mongoDaten = mongoClient.db("Chat").collection("mib");
                    connectToDatabase(databaseUrl, "mib");
                    mongoDaten.find({}).toArray(function (exception, result) {
                        if (exception)
                            throw exception;
                        let resultString = "";
                        for (let i = 0; i < result.length; i++) {
                            resultString += JSON.stringify(result[i]) + ",";
                        }
                        //console.log(resultString);
                        _response.write(JSON.stringify(resultString));
                        _response.end();
                        console.log("Nachrichten aus dem Chat mib geholt");
                    });
                    break;
                }
                case "/store/hfu": {
                    mongoDaten = mongoClient.db("Chat").collection("hfu");
                    connectToDatabase(databaseUrl, "mib");
                    mongoDaten.insertOne(url.query);
                    console.log("Nachricht an den Chat hfu geschickt" + url.query);
                    console.log("url.query: " + url.query);
                    console.log("url.query.toString(): " + url.query.toString());
                    console.log("JSON.stringify: " + JSON.stringify(url.query));
                    _response.write("Message stored in hfu-chat");
                    _response.end();
                    break;
                }
                case "/store/mib": {
                    mongoDaten = mongoClient.db("Chat").collection("mib");
                    connectToDatabase(databaseUrl, "mib");
                    mongoDaten.insertOne(url.query);
                    console.log("Nachricht an den Chat mib geschickt");
                    _response.write("Message stored in mib-chat");
                    _response.end();
                    break;
                }
                case "/logIn": {
                    /* let _username: string = url.query;
                    let _password: string = url.query[1]?.toString;
          
                    console.log("Login-Versuch mit username:" + _username + " und password:" +  _password);
          
                    mongoDaten = mongoClient.db("Chat").collection("user");
                    await connectToDatabase(databaseUrl, "user");
                    console.log("findOne Ausgabe: " + mongoDaten.findOne({ username: _username }));
                    if (mongoDaten.findOne({ username: _username }) ) {
                      _response.write("true");
                      console.log("Log In gefunden");
                    }
          
                    else {
                      _response.write("false");
                      console.log("Log In nicht gefunden");
                    }
                    _response.end(); */
                    break;
                }
                case "/signIn": {
                    let _username = url.query[0];
                    let _password = url.query[1];
                    console.log("SignIn-Versuch mit username:" + _username + " und password:" + _password);
                    mongoDaten = mongoClient.db("Chat").collection("user");
                    connectToDatabase(databaseUrl, "user");
                    mongoDaten.insertOne(url.query);
                    console.log(mongoDaten.findOne({ username: _username }));
                    if (mongoDaten.findOne({ username: _username })) {
                        console.log("Benutzer konnte nicht in Kollektion 'user' gespeichert werden, da sie schon voranden waren.");
                        _response.write("Benutzer konnte nicht registriert werden");
                    }
                    else {
                        mongoDaten.insertOne(url.query);
                        console.log("Benutzer in Kollektion 'user' gespeicher");
                        _response.write("Benutzer" + _username + " hat sich registriert");
                    }
                    _response.end();
                    break;
                }
                default: {
                    _response.write("exception 404: path not found");
                    _response.end();
                    console.log("Path wurde nicht gefunden");
                    break;
                }
            }
        }
    }
})(EndabgabeChat = exports.EndabgabeChat || (exports.EndabgabeChat = {}));
//mongodb-win32-x86_64-2012plus-4.2.8
//# sourceMappingURL=server.js.map