"use strict";
var EndabgabeChatServer;
(function (EndabgabeChatServer) {
    let buttonSignInJson = document.getElementById("buttonSignInJson");
    buttonSignInJson.addEventListener("click", json);
    let buttonSignInHtml = document.getElementById("buttonSignInHtml");
    buttonSignInHtml.addEventListener("click", html);
    let buttonLogInJson = document.getElementById("buttonLogInJson");
    buttonLogInJson.addEventListener("click", json);
    let buttonLogInHtml = document.getElementById("buttonLogInHtml");
    buttonLogInHtml.addEventListener("click", html);
    let formZaehler = 0;
    let logIn = document.getElementById("LogIn");
    logIn.addEventListener("click", handleUser);
    let signIn = document.getElementById("SignIn");
    signIn.addEventListener("click", handleUser);
    document.getElementById("FormSingIn")?.setAttribute("style", "display: none");
    document.getElementById("FormLogIn")?.setAttribute("style", "display: none");
    let ausgabe = document.getElementById("Ausgabefeld");
    ausgabe.setAttribute("style", "display: none");
    console.log("Fertig geladen");
    async function communicate(_format) {
        let formData = new FormData(document.forms[formZaehler]);
        //let url: string = "http://localhost:8100/" + _format;
        let url = "https://kartoffel-ist-best.herokuapp.com/" + _format;
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        if (_format == "html") {
            let antwortText = await antwort.text();
            console.log("html: " + antwortText);
            ausgabe.setAttribute("style", "display: block");
            ausgabe.innerHTML = antwortText;
        }
        else if (_format == "json") {
            let antwortJson = await antwort.json();
            console.log(query.toString());
            console.log("json: " + JSON.stringify(antwortJson));
            ausgabe.innerHTML = "";
            ausgabe.setAttribute("style", "display: none");
        }
    }
    function json(_event) {
        let target = _event.target;
        let form = target.getAttribute("id");
        if (form == "buttonLogInJson" || form == "buttonLogInHtml") {
            formZaehler = 0;
        }
        else if (form == "buttonSignInJson" || form == "buttonSignInHtml") {
            formZaehler = 1;
        }
        communicate("json");
    }
    function html(_event) {
        let target = _event.target;
        let form = target.getAttribute("id");
        if (form == "buttonLogInJson" || form == "buttonLogInHtml") {
            formZaehler = 0;
        }
        else if (form == "buttonSignInJson" || form == "buttonSignInHtml") {
            formZaehler = 1;
        }
        communicate("html");
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
})(EndabgabeChatServer || (EndabgabeChatServer = {}));
//# sourceMappingURL=script.js.map