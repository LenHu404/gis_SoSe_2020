"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let buttonSignIn = document.getElementById("buttonSignIn");
    buttonSignIn.addEventListener("click", addUrl);
    let buttonLogIn = document.getElementById("buttonLogIn");
    buttonLogIn.addEventListener("click", addUrl);
    let logIn = document.getElementById("LogIn");
    logIn.addEventListener("click", handleUser);
    let signIn = document.getElementById("SignIn");
    signIn.addEventListener("click", handleUser);
    document.getElementById("FormSingIn")?.setAttribute("style", "display: none");
    document.getElementById("FormLogIn")?.setAttribute("style", "display: none");
    console.log("Fertig geladen");
    async function addUrl(_event) {
        let target = _event.target;
        let form = target.getAttribute("id");
        let formZaehler = 0;
        if (form == "buttonLogIn") {
            formZaehler = 0;
        }
        else if (form == "buttonSignIn") {
            formZaehler = 1;
        }
        let formData = new FormData(document.forms[formZaehler]);
        let url = "http://localhost:8100";
        //let url: string = "https://kartoffel-ist-best.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        //let antwortUrl: string = antwort.url;
        let antwortText = await antwort.text();
        //let antwortfürHTML: String[] = await antwort.;
        console.log("lol: " + antwortText);
        let ausgabe = document.getElementById("Ausgabefeld");
        ausgabe.innerHTML = antwortText;
    }
    function handleUser(_event) {
        let target = _event.target;
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
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map