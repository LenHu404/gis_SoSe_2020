"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndabgabeChat = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var EndabgabeChat;
(function (EndabgabeChat) {
    let databaseUrl;
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
    // Verbindung mit Datenbank aufbauen
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
                // Unterscheiden der Funktionen anhand des Paths
                case "/retrieve/hfu": {
                    mongoDaten = mongoClient.db("Chat").collection("hfu");
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
                    mongoDaten.insertOne(url.query);
                    console.log("Nachricht an den Chat hfu geschickt");
                    _response.write("Message stored in hfu");
                    _response.end();
                    break;
                }
                case "/store/mib": {
                    mongoDaten = mongoClient.db("Chat").collection("mib");
                    mongoDaten.insertOne(url.query);
                    console.log("Nachricht an den Chat mib geschickt");
                    _response.write("Message stored in mib");
                    _response.end();
                    break;
                }
                case "/logIn": {
                    let _username = url.query.username;
                    let _password = url.query.password;
                    //console.log(url.query.username);
                    //console.log(url.query);
                    console.log("Login-Versuch mit username:" + _username + " und password:" + _password);
                    mongoDaten = mongoClient.db("Chat").collection("user");
                    console.log("FindOne-Ausgabe:");
                    console.log(await mongoDaten.findOne(url.query));
                    if (await mongoDaten.findOne(url.query)) {
                        _response.write("true");
                        console.log("Log In gefunden");
                    }
                    else {
                        _response.write("false");
                        console.log("Log In nicht gefunden");
                    }
                    _response.end();
                    break;
                }
                case "/signIn": {
                    let _username = url.query.username;
                    let _password = url.query.password;
                    console.log("SignIn mit username:" + _username + " und password:" + _password);
                    mongoDaten = mongoClient.db("Chat").collection("user");
                    if (await mongoDaten.findOne(url.query)) {
                        _response.write("false");
                        console.log("Registrierung fehlgeschlagen, Daten schon vorhanden");
                    }
                    else {
                        mongoDaten.insertOne(url.query);
                        _response.write("true");
                        console.log("Registrierung erfolgreich");
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
//# sourceMappingURL=server.js.map