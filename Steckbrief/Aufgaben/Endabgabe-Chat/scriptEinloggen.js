"use strict";
var EndabgabeChat;
(function (EndabgabeChat) {
    let buttonSignIn = document.getElementById("signIn");
    buttonSignIn.addEventListener("click", handleUser);
    let buttonLogIn = document.getElementById("logIn");
    buttonLogIn.addEventListener("click", handleUser);
    let buttonMIBChat = document.getElementById("mib");
    buttonMIBChat.addEventListener("click", handleChatAuswahl);
    let buttonHFUChat = document.getElementById("hfu");
    buttonHFUChat.addEventListener("click", handleChatAuswahl);
    let fieldset = document.getElementById("fieldset");
    let errorMsg = document.createElement("div");
    errorMsg.id = "errorMsg";
    async function handleUser(_event) {
        let target = _event.target;
        let type = target.getAttribute("id");
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let params = new URL("https://kartoffel-ist-best.herokuapp.com?" + query.toString()).searchParams;
        localStorage.setItem("username", params.get("username").toString());
        localStorage.setItem("password", params.get("password").toString());
        //let url: string = "http://localhost:8100/";
        let url = "https://kartoffel-ist-best.herokuapp.com/";
        url += type;
        url += "?" + query.toString();
        console.log(query.toString());
        console.log("fetch-Url: " + url);
        let response = await fetch(url);
        let responseText = await response.text();
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
        let formular = document.getElementById("formular");
        formular.reset();
    }
    function handleChatAuswahl(_event) {
        let target = _event.target;
        let chat = target.getAttribute("id");
        if (chat == "mib") {
            localStorage.setItem("chat", "mib");
        }
        else if (chat == "hfu") {
            localStorage.setItem("chat", "hfu");
        }
    }
})(EndabgabeChat || (EndabgabeChat = {}));
//# sourceMappingURL=scriptEinloggen.js.map