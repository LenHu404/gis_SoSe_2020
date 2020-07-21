namespace EndabgabeChat {

    let nachrichtenZaehler: number = 0;

    let chatAnzeige1: HTMLElement = document.getElementById("chatAnzeige1")!;
    let chatAnzeige2: HTMLElement = document.getElementById("chatAnzeige2")!;

    chatAnzeige1.addEventListener("click", chatAendern);
    chatAnzeige2.addEventListener("click", chatAendern);

    let errorDiv: HTMLElement = document.getElementById("error") as HTMLElement;



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
        let url: string = "https://kartoffel-ist-best.herokuapp.com/logIn?username=" + localStorage.getItem("username") + "&password=" + localStorage.getItem("password");


        let response: Response = await fetch(url);
        let responseText: string = await response.text();

        console.log(responseText);



        if (responseText == "false") {
            console.log("Du bist nicht richtig eingeloggt");
            errorDiv.style.display = "block";
            let ausgabe: HTMLElement = document.getElementById("Ausgabefeld") as HTMLElement;
            ausgabe.innerHTML = "";

        }
        else {

            errorDiv.style.display = "none";
            let neuNachrichtenZaehler: number = 0;



            if (localStorage.getItem("chat") == "mib") {
                chatAnzeige1.innerHTML = "MIB-Chat";
                chatAnzeige2.innerHTML = "HFU-Chat";
            }
            else if (localStorage.getItem("chat") == "hfu") {
                chatAnzeige1.innerHTML = "HFU-Chat";
                chatAnzeige2.innerHTML = "MIB-Chat";
            }


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
                if (localStorage.getItem("username") == splittedJson.user) {
                    newDiv.className = "bubbleMe";
                }
                else {
                    newDiv.className = "bubble";
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

    function handleClickEmote(_event: Event): void {
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

    function chatAendern(): void {
        let aktuellerchat: string = localStorage.getItem("chat")!;
        if (aktuellerchat == "mib")
            localStorage.setItem("chat", "hfu");
        else if (aktuellerchat == "hfu")
            localStorage.setItem("chat", "mib");

        handleClickRetrieve();
    }


    setInterval(
        function (): void {
            handleClickRetrieve();
        },
        60000);


    console.log("Fertig geladen");
}




