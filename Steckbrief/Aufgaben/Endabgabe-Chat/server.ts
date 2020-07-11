import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace EndabgabeChat {
  let databaseUrl: string;
  databaseUrl = "mongodb+srv://dbUser:1234@spacy-nobwa.mongodb.net/Chat?retryWrites=true&w=majority";
  let mongoDaten: Mongo.Collection;
  let options: Mongo.MongoClientOptions;
  let mongoClient: Mongo.MongoClient;

  //databaseUrl = "mongodb://localhost:27017";
  databaseUrl = "mongodb+srv://dbUser:1234@spacy-nobwa.mongodb.net/Chat?retryWrites=true&w=majority";

  // mongodb+srv://dbUser:1234@spacy-nobwa.mongodb.net/Aufgabe11?retryWrites=true&w=majority

  connectToDatabase(databaseUrl, "user");

  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.listen(port);

  async function connectToDatabase(_url: string, _collection: string): Promise<void> {
    options = { useNewUrlParser: true, useUnifiedTopology: true };
    mongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    console.log("Verbindung zur Datenbank mit Kollekion:" + _collection);
    mongoDaten = mongoClient.db("Chat").collection(_collection);
  }

  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

    console.log("I hear voices!");

    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");

    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      let path: string | null = url.pathname;

      switch (path) {
        case "/retrieve/hfu": {
          mongoDaten = mongoClient.db("Chat").collection("hfu");
          await connectToDatabase(databaseUrl, "hfu");
          mongoDaten.find({}).toArray(function (exception: Mongo.MongoError, result: string[]): void {
            if (exception)
              throw exception;

            let resultString: string = "";
            for (let i: number = 0; i < result.length; i++) {
              resultString += JSON.stringify(result[i]) + ",";
            }

            console.log(resultString);
            _response.write(JSON.stringify(resultString));
            _response.end();
            console.log("Nachrichten aus dem Chat hfu geholt");
          });
          break;
        }
        case "/retrieve/mib": {
          mongoDaten = mongoClient.db("Chat").collection("mib");
          connectToDatabase(databaseUrl, "hfu");
          mongoDaten.find({}).toArray(function (exception: Mongo.MongoError, result: string[]): void {
            if (exception)
              throw exception;

            let resultString: string = "";
            for (let i: number = 0; i < result.length; i++) {
              resultString += JSON.stringify(result[i]) + ",";
            }

            console.log(resultString);
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
          console.log("Nachricht an den Chat hfu geschickt");
          break;
        }
        case "/store/mib": {
          mongoDaten = mongoClient.db("Chat").collection("mib");
          connectToDatabase(databaseUrl, "mib");
          mongoDaten.insertOne(url.query);
          console.log("Nachricht an den Chat mib geschickt");
          break;
        }

        case "/logIn": {
          let username: string | undefined | string[] = url.query[0];
          let password: string | undefined | string[] = url.query[1];
          mongoDaten = mongoClient.db("Chat").collection("user");
          await connectToDatabase(databaseUrl, "user");
          if (mongoDaten.findOne({ user: username, password: password })) {
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
          mongoDaten = mongoClient.db("Chat").collection("user");
          connectToDatabase(databaseUrl, "user");
          mongoDaten.insertOne(url.query);
          console.log("Benutzer in Kollektion 'user' gespeicher");

          break;
        }
        default: {
          _response.write("exception 404: path not found");
          _response.end();
          console.log("Path wurde nicht gefunden");
          break;
        }
      }

      /* if (path == "/retrieve") {
        mongoDaten.find({}).toArray(function (exception: Mongo.MongoError, result: string[]): void {
          if (exception)
            throw exception;

          let resultString: string = "";
          for (let i: number = 0; i < result.length; i++) {
            resultString += JSON.stringify(result[i]) + ",";
          }

          console.log(resultString);
          _response.write(JSON.stringify(resultString));
          _response.end();
        });
      }

      else if (path == "/store")
        mongoDaten.insertOne(url.query); */


    }
  }
}

