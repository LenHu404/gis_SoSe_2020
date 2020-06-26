import * as Http from "http";
import * as Url from "url";
import { ParsedUrlQuery } from "querystring";

export namespace A08Server {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;
  
  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  let adresse: string = 'http://localhost:8080/default.htm?jahr=2017&monat=february';

  //Adresse umwandel (parsen):
  let q = Url.parse(adresse, true);
  // q enthält nun die einzelnen Bestandteile von der Url die man nun seperat abrufen kann

  /*Die parse Methode gibt ein Objekt zurück, dass die URL Eigenschaften enthält. So können die fest definierten Eigenschaften einer URL ausgelesen werden:*/
  console.log(q.host);
  console.log(q.pathname);
  console.log(q.search);

  /*Die query Eigenschaft gibt ein Ojekt zurück, dass alle query-string Parameter als Eigenschaften besitzt. So können beliebig gesendete Attribute ausgelesen werden:*/
  var qdata: ParsedUrlQuery = q.query;
  console.log(qdata.monat);
  
  
  function handleListen(): void {
    console.log("Listening");
  }
  
  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    
    //Erstellt des Html-Dokument mit den nötigen Angaben
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    
    //Gibt die query als Text im body des Html-Dokuments aus
    _response.write(_request.url);
    

    _response.end();
  }
}