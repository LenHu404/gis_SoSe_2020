"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
const Url = require("url");
var A08Server;
(function (A08Server) {
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    console.log("Starting server on port: " + port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("https://kartoffel-ist-best.herokuapp.com" + `${_request.url}`);
        let myData = Url.parse(`${_request.url}`, true);
        let myQuery = myData.query;
        let requestType = _request.url.slice(0, 5);
        let myJsonString = JSON.stringify(myQuery);
        let rueckgabe = "";
        let adresse = _request.url;
        let url = Url.parse(adresse, true);
        if (requestType == "/html") {
            _response.setHeader("content-type", "text/html");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            rueckgabe = "Host: " + url.hostname + "; Pathname: " + url.pathname + " <br> <b> Inhalt des Formulars: </b>" + " <br> ";
            //console.log(url);
            for (let key in url.query) {
                rueckgabe += "<b>" + key + ": </b> " + url.query[key] + "; ";
                rueckgabe += "<br>";
            }
            //rueckgabe += "Benutzername: " + myQuery.username;
        }
        else if (requestType == "/json") {
            _response.setHeader("content-type", "application/json");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            console.log(myJsonString);
            rueckgabe = myJsonString;
        }
        _response.write(rueckgabe);
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map