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
        let formZaehler = parseInt(target.getAttribute("zaehler"));
        let formData = new FormData(document.forms[formZaehler]);
        //let url: string = "http://localhost:8100";
        let url = "https://kartoffel-ist-best.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwortUrl = await antwort.url;
        let antwortText = await antwort.text();
        console.log(antwortUrl + " " + antwortText);
        for (let entry of formData) {
            // console.log(entry);
            console.log(entry[0] + ": " + entry[1]);
        }
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