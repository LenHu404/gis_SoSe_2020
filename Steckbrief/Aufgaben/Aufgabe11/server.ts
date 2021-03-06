import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe11 {
  let mongoDaten: Mongo.Collection;
  let databaseUrl: string;

  //databaseUrl = "mongodb://localhost:27017";
  databaseUrl = "mongodb+srv://dbUser:1234@spacy-nobwa.mongodb.net/Aufgabe11?retryWrites=true&w=majority";

  // mongodb+srv://dbUser:1234@spacy-nobwa.mongodb.net/Aufgabe11?retryWrites=true&w=majority

  connectToDatabase(databaseUrl);

  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.listen(port);

  async function connectToDatabase(_url: string): Promise<void> {
    let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    mongoDaten = mongoClient.db("Aufgabe11").collection("Daten");
  } 

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");

    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      let path: string | null = url.pathname;
      if (path == "/retrieve") {
        mongoDaten.find({}).toArray(function(exception: Mongo.MongoError, result: string[]): void {
        if (exception)
          throw exception;
        
        let resultString: string = "";
        for (let i: number = 0; i < result.length; i++) {
          resultString += JSON.stringify(result[i]) + " <br>";
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
}

