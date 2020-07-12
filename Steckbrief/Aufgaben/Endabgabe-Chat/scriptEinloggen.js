"use strict";
var EndabgabeChat;
(function (EndabgabeChat) {
    let buttonEinloggen = document.getElementById("chatting");
    buttonEinloggen.addEventListener("click", handleUser);
    let buttonMIBChat = document.getElementById("mib");
    buttonMIBChat.addEventListener("click", handleChatAuswahl);
    let buttonHFUChat = document.getElementById("hfu");
    buttonHFUChat.addEventListener("click", handleChatAuswahl);
    async function handleUser(_event) {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let params = new URL("https://stackoverflow.com?" + query.toString()).searchParams;
        localStorage.setItem("username", params.get("username").toString());
        localStorage.setItem("password", params.get("password").toString());
        //let url: string = "http://localhost:8100";
        let url = "https://kartoffel-ist-best.herokuapp.com";
        url += "/logIn";
        url += "?" + query.toString();
        console.log("fetch-Url: " + url);
        let response = await fetch(url);
        response.toString();
        if (response.toString() == "true") {
            console.log("Einloggen erfolgreich");
        }
        else if ((response.toString() == "false")) {
            console.log("Einloggen fehlgeschlagen");
            let fieldset = document.getElementById("fieldset");
            let errorMsg = document.createElement("div");
            errorMsg.innerHTML = "Falsche Einlogg daten! Bitte Versuche es erneut. <br> Falls du dich noch nicht Registriert hast, dann tu es hier: lul";
            fieldset.appendChild(errorMsg);
        }
        else {
            console.log("Failed to fetch");
            console.log(response);
            console.log(response.toString());
        }
        console.log("Einloggen");
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