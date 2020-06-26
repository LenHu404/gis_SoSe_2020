"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
//import * as Url from "url";
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
        // Fügt die Informationen zur eientlichen Nachricht
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // Schreiben der eigentichen Nachricht
        _response.write(_request.url);
        //Konsolenausgabe der eigehenden bzw. ausgehenden Nachricht
        console.log(_request.url);
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map