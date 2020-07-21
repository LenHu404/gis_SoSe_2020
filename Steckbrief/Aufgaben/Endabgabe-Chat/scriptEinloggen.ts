namespace EndabgabeChat {


    let buttonSignIn: HTMLButtonElement = document.getElementById("signIn") as HTMLButtonElement;
    buttonSignIn.addEventListener("click", handleUser);

    let buttonLogIn: HTMLButtonElement = document.getElementById("logIn") as HTMLButtonElement;
    buttonLogIn.addEventListener("click", handleUser);

    let buttonMIBChat: HTMLButtonElement = document.getElementById("mib") as HTMLButtonElement;
    buttonMIBChat.addEventListener("click", handleChatAuswahl);

    let buttonHFUChat: HTMLButtonElement = document.getElementById("hfu") as HTMLButtonElement;
    buttonHFUChat.addEventListener("click", handleChatAuswahl);

    let fieldset: HTMLFieldSetElement = document.getElementById("fieldset")! as HTMLFieldSetElement;
    let errorMsg: HTMLDivElement = document.createElement("div");

    async function handleUser(_event: Event): Promise<void> {
        let target: HTMLElement = (<HTMLElement>_event.target);
        let type: string = target.getAttribute("id")!;

        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);


        let params: URLSearchParams = new URL("https://stackoverflow.com?" + query.toString()).searchParams;

        localStorage.setItem("username", params.get("username")!.toString());
        localStorage.setItem("password", params.get("password")!.toString());

        //let url: string = "http://localhost:8100/";
        let url: string = "https://kartoffel-ist-best.herokuapp.com/";
        url += type;


        url += "?" + query.toString();


        console.log("fetch-Url: " + url);

        let response: Response = await fetch(url);
        let responseText: string = await response.text();

        console.log(responseText);



        if (responseText == "true") {
            if (type == "signIn") {
                console.log("Einloggen erfolgreich");
            }
            else if (type == "logIn")
                console.log("Registrieren erfolgreich");

            location.assign("https://lenhu404.github.io/gis_SoSe_2020/Steckbrief/Aufgaben/Endabgabe-Chat/formularSeite.html");
        }
        else if ((responseText == "false")) {
            if (type == "signIn") {
                console.log("Einloggen fehlgeschlagen");
            }
            else if (type == "logIn") {
                console.log("Registrieren fehlgeschlagen");
            }



            if (type == "logIn") {
                errorMsg.innerHTML = "Falsche Einloggdaten! Bitte Versuche es erneut. <br> Hast du dich schon Registriert?";
            }
            else if (type == "signIn") {
                errorMsg.innerHTML = "Registrieren fehlgeschlagen, Daten sind schon vergeben. <br> Bitte versuche es erneut.";
            }


            fieldset.appendChild(errorMsg);
        }
        else {
            console.log("Failed to fetch");
            console.log(response);
            console.log(response);

        }

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