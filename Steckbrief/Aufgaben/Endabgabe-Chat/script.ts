namespace EndabgabeChat {

    let buttonSend: HTMLButtonElement = document.getElementById("senden") as HTMLButtonElement;
    buttonSend.addEventListener("click", handleClickStore);

    let buttonRefresh: HTMLButtonElement = document.getElementById("refresh") as HTMLButtonElement;
    buttonRefresh.addEventListener("click", handleClickRetrieve);

    let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
    ausgabe.setAttribute("style", "display: none");




    let formData: FormData;

    async function handleClickRetrieve(): Promise<void> {
        //let url: string = "http://localhost:8100";
        let url: string = "https://kartoffel-ist-best.herokuapp.com";

        url += "/retrieve";

        let response: Response = await fetch(url);
        // console.log(response);
        let responseText: string = await response.json();

        let splitted: string[] = responseText.split("},");

        let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
        ausgabe.innerHTML = "";
        //ausgabe.innerHTML = responseText;

        ausgabe.setAttribute("style", "display: block");
        for (let i: number = 1; i < splitted.length - 1; i++) {

            //if (!(i == 0))
            splitted[i] = splitted[i] + "}";


            let splittedJson: any = JSON.parse(splitted[i]);
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.className = "message";
            if (localStorage.getItem("user") == splittedJson.user) {
                newDiv.className = "selfSend";
            }

            let nameTag: HTMLDivElement = document.createElement("div");
            nameTag.className = "nameTag";
            if (!(localStorage.getItem("user") == splittedJson.user)) {
                nameTag.innerHTML = splittedJson.user + ":";
            }
            

            let messageBody: HTMLDivElement = document.createElement("div");
            messageBody.className = "messageBody";
            messageBody.innerHTML = splittedJson.message;

            let dateDiv: HTMLDivElement = document.createElement("div");
            dateDiv.className = "date";
            dateDiv.innerHTML = splittedJson.date;

            if (localStorage.getItem("user") == splittedJson.user) {
                newDiv.style.textAlign = "right";
            }

            document.getElementById("Ausgabefeld")?.appendChild(newDiv);
            newDiv.appendChild(nameTag);
            newDiv.appendChild(messageBody);
            newDiv.appendChild(dateDiv);
            
        }

        console.log(responseText);
    }

    async function handleClickStore(): Promise<void> {
        let date: string = new Date().toLocaleString();
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url: string = "https://kartoffel-ist-best.herokuapp.com";
        url += "/store";

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //url += "?" + "user=" + "Lennard+Hurst" + "&" + query.toString() + "&" + "date=" + date;
        url += "?" + "user=" + localStorage.getItem("user") + "&" + query.toString() + "&" + "date=" + date;

        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
        formular.reset();

        console.log("fetch-Url: " + url);

        await fetch(url);

        console.log("Nachricht gesendet und neu laden" + handleClickRetrieve());
    }

    console.log("Fertig geladen");
}




