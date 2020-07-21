namespace EndabgabeChat {

    let nachrichtenZaehler: number = 0;

    let buttonSend: HTMLButtonElement = document.getElementById("senden") as HTMLButtonElement;
    buttonSend.addEventListener("click", handleClickStore);

    let buttonRefresh: HTMLButtonElement = document.getElementById("refresh") as HTMLButtonElement;
    buttonRefresh.addEventListener("click", handleClickRetrieve);

    let buttonLennyEmote: HTMLButtonElement = document.getElementById("lennyEmote") as HTMLButtonElement;
    buttonLennyEmote.addEventListener("click", handleClickEmote);

    let buttonIDKEmote: HTMLButtonElement = document.getElementById("idkEmote") as HTMLButtonElement;
    buttonIDKEmote.addEventListener("click", handleClickEmote);

    let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
    ausgabe.setAttribute("style", "display: none");

    handleClickRetrieve();




    let formData: FormData;

    async function handleClickRetrieve(): Promise<void> {

        let neuNachrichtenZaehler: number = 0;

        let chatAnzeige: HTMLElement = document.getElementById("chatAnzeige")!;
        chatAnzeige.innerHTML = localStorage.getItem("chat") + "-Chat";

        //let url: string = "http://localhost:8100";
        let url: string = "https://kartoffel-ist-best.herokuapp.com";

        url += "/retrieve/" + localStorage.getItem("chat");

        let response: Response = await fetch(url);

        console.log(url);
        console.log(response);

        let responseText: string = await response.json();

        let splitted: string[] = responseText.split("},");

        let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
        ausgabe.innerHTML = "";

        ausgabe.setAttribute("style", "display: block");
        for (let i: number = 0; i < splitted.length - 1; i++) {

            splitted[i] = splitted[i] + "}";

            // tslint:disable-next-line: no-any
            let splittedJson: any = JSON.parse(splitted[i]);
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.className = "sprechblase7";
            if (localStorage.getItem("username") == splittedJson.user) {
                newDiv.className = "sprechblase3";
            }
            else {
                newDiv.className = "sprechblase7";
            }

            let nameTag: HTMLDivElement = document.createElement("div");
            nameTag.className = "nameTag";
            if (!(localStorage.getItem("username") == splittedJson.user)) {
                nameTag.innerHTML = splittedJson.user + ":";
            }


            let messageBody: HTMLDivElement = document.createElement("div");
            messageBody.className = "messageBody";
            messageBody.innerHTML = splittedJson.message;

            let dateDiv: HTMLDivElement = document.createElement("div");
            dateDiv.className = "date";
            dateDiv.innerHTML = splittedJson.date;

            if (localStorage.getItem("username") == splittedJson.user) {
                newDiv.style.textAlign = "right";
            }

            document.getElementById("Ausgabefeld")?.appendChild(newDiv);
            newDiv.appendChild(nameTag);
            newDiv.appendChild(messageBody);
            newDiv.appendChild(dateDiv);

            neuNachrichtenZaehler++;

        }
        if (!(neuNachrichtenZaehler == nachrichtenZaehler)) {
            window.scroll({
                top: ausgabe.offsetHeight,
                left: 0,
                behavior: "smooth"
            });
            nachrichtenZaehler = neuNachrichtenZaehler;
        }

    }

    async function handleClickStore(): Promise<void> {
        let date: string = new Date().toLocaleString();
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url: string = "https://kartoffel-ist-best.herokuapp.com";
        url += "/store/" + localStorage.getItem("chat");

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?user=" + localStorage.getItem("username") + "&" + query.toString() + "&" + "date=" + date;

        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
        formular.reset();

        console.log("fetch-Url: " + url);

        handleClickRetrieve();

        let response: Response = await fetch(url);
        console.log("Server: " + response.json());

    }

    async function handleClickEmote(_event: Event): Promise<void> {
        let target: HTMLElement = (<HTMLElement>_event.target);
        let emote: string = target.getAttribute("id")!;

        let messageBox: HTMLInputElement = document.getElementById("message") as HTMLInputElement;
        

        switch (emote) {
            case "lennyEmote": {
                messageBox.value += " ( ͡° ͜ʖ ͡°)";
                break;
            }
            case "idkEmote": {
                messageBox.value += " ¯|_(ツ)_/¯";
                break;
            }
            default: {
                messageBox.value += " ¯|_(ツ)_/¯";
                break;
            }
        }

    }


    setInterval(
        function (): void {
            handleClickRetrieve();
        },
        60000);


    console.log("Fertig geladen");
}




