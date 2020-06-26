import * as Http from "http";
//import * as Url from "url";

export namespace A08Server {
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  console.log("Starting server on port: " + port);




  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

    // Fügt die Informationen zur eientlichen Nachricht
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    // Schreiben der eigentichen Nachricht
    _response.write(_request.url);

    //Konsolenausgabe der eigehenden bzw. ausgehenden Nachricht
    console.log(_request.url);



    _response.end();
  }
}