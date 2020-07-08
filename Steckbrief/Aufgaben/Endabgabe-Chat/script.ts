namespace EndabgabeChatServer {

    let buttonSignInJson: HTMLButtonElement = document.getElementById("buttonSignInJson") as HTMLButtonElement;
    buttonSignInJson.addEventListener("click", json);
    let buttonSignInHtml: HTMLButtonElement = document.getElementById("buttonSignInHtml") as HTMLButtonElement;
    buttonSignInHtml.addEventListener("click", html);
    let buttonLogInJson: HTMLButtonElement = document.getElementById("buttonLogInJson") as HTMLButtonElement;
    buttonLogInJson.addEventListener("click", json);
    let buttonLogInHtml: HTMLButtonElement = document.getElementById("buttonLogInHtml") as HTMLButtonElement;
    buttonLogInHtml.addEventListener("click", html);

    let formZaehler: number = 0;

    let logIn: HTMLButtonElement = document.getElementById("LogIn") as HTMLButtonElement;
    logIn.addEventListener("click", handleUser);
    let signIn: HTMLButtonElement = document.getElementById("SignIn") as HTMLButtonElement;
    signIn.addEventListener("click", handleUser);


    document.getElementById("FormSingIn")?.setAttribute("style", "display: none");
    document.getElementById("FormLogIn")?.setAttribute("style", "display: none");

    let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
    ausgabe.setAttribute("style", "display: none");

    console.log("Fertig geladen");

    async function communicate(_format: string): Promise<void> {


        let formData: FormData = new FormData(document.forms[formZaehler]);
        //let url: string = "http://localhost:8100/" + _format;
        let url: string = "https://kartoffel-ist-best.herokuapp.com/" + _format;

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = url + "?" + query.toString();
        let antwort: Response = await fetch(url);


        

        if (_format == "html") {

            let antwortText: string = await antwort.text();

            console.log("html: " + antwortText);

            ausgabe.setAttribute("style", "display: block");
            ausgabe.innerHTML = antwortText;
            

        }

        else if (_format == "json") {

            let antwortJson: string = await antwort.json();
            console.log(query.toString());
            console.log("json: " + JSON.stringify(antwortJson));
            ausgabe.innerHTML = "";
            ausgabe.setAttribute("style", "display: none");

        }




    }

    function json(_event: Event): void {
        let target: HTMLInputElement = (<HTMLInputElement>_event.target);
        let form: String = target.getAttribute("id")!;
        if (form == "buttonLogInJson" || form == "buttonLogInHtml") {
            formZaehler = 0;
        }
        else if (form == "buttonSignInJson" || form == "buttonSignInHtml") {
            formZaehler = 1;
        }
        communicate("json");
    }

    function html(_event: Event): void {
        let target: HTMLInputElement = (<HTMLInputElement>_event.target);
        let form: String = target.getAttribute("id")!;
        if (form == "buttonLogInJson" || form == "buttonLogInHtml") {
            formZaehler = 0;
        }
        else if (form == "buttonSignInJson" || form == "buttonSignInHtml") {
            formZaehler = 1;
        }
        communicate("html");
    }

    function handleUser(_event: Event): void {
        let target: HTMLInputElement = (<HTMLInputElement>_event.target);
        if (target.getAttribute("id") == "SignIn") {
            document.getElementById("FormSingIn")?.setAttribute("style", "display: block");
            document.getElementById("FormLogIn")?.setAttribute("style", "display: none");
            document.getElementById("decide")?.setAttribute("style", "display: none");
        }
        else if (target.getAttribute("id") == "LogIn") {
            document.getElementById("FormSignIn")?.setAttribute("style", "display: none");
            document.getElementById("FormLogIn")?.setAttribute("style", "display: block");
            document.getElementById("decide")?.setAttribute("style", "display: none");
        }
    }

}