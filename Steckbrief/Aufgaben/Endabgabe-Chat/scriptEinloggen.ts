namespace EndabgabeChat {

    let buttonEinloggen: HTMLButtonElement = document.getElementById("chatting") as HTMLButtonElement;
    buttonEinloggen.addEventListener("click", handleUser);

    let buttonMIBChat: HTMLButtonElement = document.getElementById("mib") as HTMLButtonElement;
    buttonMIBChat.addEventListener("click", handleChatAuswahl);

    let buttonHFUChat: HTMLButtonElement = document.getElementById("hfu") as HTMLButtonElement;
    buttonHFUChat.addEventListener("click", handleChatAuswahl);

    async function handleUser(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);


        let params: URLSearchParams = new URL("https://stackoverflow.com?" + query.toString()).searchParams;

        localStorage.setItem("username", params.get("username")!.toString());
        localStorage.setItem("password", params.get("password")!.toString());

        //let url: string = "http://localhost:8100";
        let url: string = "https://kartoffel-ist-best.herokuapp.com";
        url += "/logIn";


        url += "?" + query.toString();


        console.log("fetch-Url: " + url);

        let response: Response = await fetch(url);

        response.toString();

        if (response.toString() == "true") {
            console.log("Einloggen erfolgreich");
        }
        else if ((response.toString() == "false")) {
            console.log("Einloggen fehlgeschlagen");
            let fieldset: HTMLFieldSetElement = document.getElementById("fieldset")! as HTMLFieldSetElement;
            let errorMsg: HTMLDivElement = document.createElement("div");
            errorMsg.innerHTML = "Falsche Einlogg daten! Bitte Versuche es erneut. <br> Falls du dich noch nicht Registriert hast, dann tu es hier: lul";
            fieldset.appendChild(errorMsg);
        }
        else {
            console.log("Failed to fetch");
            console.log(response);
            console.log(response.toString());

        }

        console.log("Einloggen");

        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
        formular.reset();

    }

    function handleChatAuswahl(_event: Event): void {
        let target: HTMLInputElement = (<HTMLInputElement>_event.target);
        let chat: string = target.getAttribute("id")!;
        if (chat == "mib") {
            localStorage.setItem("chat", "mib");
        }
        else if (chat == "hfu") {
            localStorage.setItem("chat", "hfu");
        }
    }

}