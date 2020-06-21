namespace Aufgabe08 {

    let buttonSignIn: HTMLButtonElement = document.getElementById("buttonSignIn") as HTMLButtonElement;
    buttonSignIn.addEventListener("click", addUrl);
    let buttonLogIn: HTMLButtonElement = document.getElementById("buttonLogIn") as HTMLButtonElement;
    buttonLogIn.addEventListener("click", addUrl);


    let logIn: HTMLButtonElement = document.getElementById("LogIn") as HTMLButtonElement;
    logIn.addEventListener("click", handleUser);
    let signIn: HTMLButtonElement = document.getElementById("SignIn") as HTMLButtonElement;
    signIn.addEventListener("click", handleUser);


    document.getElementById("FormSingIn")?.setAttribute("style", "display: none");
    document.getElementById("FormLogIn")?.setAttribute("style", "display: none");


    console.log("Fertig geladen");

    async function addUrl(_event: Event): Promise<void> {

        let target: HTMLInputElement = (<HTMLInputElement>_event.target);
        let form: String = target.getAttribute("id")!;
        let formZaehler: number = 0;
        if (form == "buttonLogIn") {
            formZaehler = 0;
        }
        else if (form == "buttonSignIn") {
            formZaehler = 1;
        }

        let formData: FormData = new FormData(document.forms[formZaehler]);
        //let url: string = "http://localhost:8100";
        let url: string = "https://kartoffel-ist-best.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let antwort: Response = await fetch(url);
        let antwortUrl: String = await antwort.url;
        let antwortText: String = await antwort.text();

        console.log(antwortUrl + " " + antwortText);
        for (let entry of formData) {
           // console.log(entry);
            console.log(entry[0] + ": " + entry[1]);
        }
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