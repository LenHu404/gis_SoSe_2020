import * as Http from "http";
import * as Url from "url";
import { ParsedUrlQuery } from "querystring";


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
    
    console.log("https://kartoffel-ist-best.herokuapp.com" + `${_request.url}`);

    let myData: Url.UrlWithParsedQuery = Url.parse(`${_request.url}`, true);
    let myQuery: ParsedUrlQuery = myData.query;
    let requestType: string = (<string>_request.url).slice(0, 5);
    let myJsonString: string = JSON.stringify(myQuery);
    let rueckgabe: string = "";
    let adresse: string = _request.url!;
    let url: Url.UrlWithParsedQuery = Url.parse(adresse, true);

    if (requestType == "/html") {
      _response.setHeader("content-type", "text/html");
      _response.setHeader("Access-Control-Allow-Origin", "*");
      rueckgabe = "Host: " + url.host + "; Pathname: " + url.pathname + " <br> Inhalt des Formulars: <br> ";
      //console.log(url);
      for (let key in url.query) {
        rueckgabe += key + ": " + url.query[key] + ", <br>";
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
}