"use strict";
var EndabgabeChat;
(function (EndabgabeChat) {
    let nachrichtenZaehler = 0;
    let chatAnzeige1 = document.getElementById("chatAnzeige1");
    let chatAnzeige2 = document.getElementById("chatAnzeige2");
    chatAnzeige1.addEventListener("click", chatAendern);
    chatAnzeige2.addEventListener("click", chatAendern);
    let errorDiv = document.getElementById("error");
    let buttonSend = document.getElementById("senden");
    buttonSend.addEventListener("click", handleClickStore);
    let buttonRefresh = document.getElementById("refresh");
    buttonRefresh.addEventListener("click", handleClickRetrieve);
    let buttonLennyEmote = document.getElementById("lennyEmote");
    buttonLennyEmote.addEventListener("click", handleClickEmote);
    let buttonIDKEmote = document.getElementById("idkEmote");
    buttonIDKEmote.addEventListener("click", handleClickEmote);
    let ausgabe = document.getElementById("Ausgabefeld");
    ausgabe.setAttribute("style", "display: none");
    handleClickRetrieve();
    let formData;
    async function handleClickRetrieve() {
        let url = "https://kartoffel-ist-best.herokuapp.com/logIn?username=" + localStorage.getItem("username") + "&password=" + localStorage.getItem("password");
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(responseText);
        if (responseText == "false") {
            console.log("Du bist nicht richtig eingeloggt");
            errorDiv.style.display = "block";
            let ausgabe = document.getElementById("Ausgabefeld");
            ausgabe.innerHTML = "";
        }
        else {
            errorDiv.style.display = "none";
            let neuNachrichtenZaehler = 0;
            if (localStorage.getItem("chat") == "mib") {
                chatAnzeige1.innerHTML = "MIB-Chat";
                chatAnzeige2.innerHTML = "HFU-Chat";
            }
            else if (localStorage.getItem("chat") == "hfu") {
                chatAnzeige1.innerHTML = "HFU-Chat";
                chatAnzeige2.innerHTML = "MIB-Chat";
            }
            //let url: string = "http://localhost:8100";
            let url = "https://kartoffel-ist-best.herokuapp.com";
            url += "/retrieve/" + localStorage.getItem("chat");
            let response = await fetch(url);
            console.log(url);
            console.log(response);
            let responseText = await response.json();
            let splitted = responseText.split("},");
            let ausgabe = document.getElementById("Ausgabefeld");
            ausgabe.innerHTML = "";
            ausgabe.setAttribute("style", "display: block");
            for (let i = 0; i < splitted.length - 1; i++) {
                splitted[i] = splitted[i] + "}";
                // tslint:disable-next-line: no-any
                let splittedJson = JSON.parse(splitted[i]);
                let newDiv = document.createElement("div");
                if (localStorage.getItem("username") == splittedJson.user) {
                    newDiv.className = "sprechblase3";
                }
                else {
                    newDiv.className = "bubble";
                }
                let nameTag = document.createElement("div");
                nameTag.className = "nameTag";
                if (!(localStorage.getItem("username") == splittedJson.user)) {
                    nameTag.innerHTML = splittedJson.user + ":";
                }
                let messageBody = document.createElement("div");
                messageBody.className = "messageBody";
                messageBody.innerHTML = splittedJson.message;
                let dateDiv = document.createElement("div");
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
    async function handleClickStore() {
        let date = new Date().toLocaleString();
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url = "https://kartoffel-ist-best.herokuapp.com";
        url += "/store/" + localStorage.getItem("chat");
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?user=" + localStorage.getItem("username") + "&" + query.toString() + "&" + "date=" + date;
        let formular = document.getElementById("formular");
        formular.reset();
        console.log("fetch-Url: " + url);
        handleClickRetrieve();
        let response = await fetch(url);
        console.log("Server: " + response.json());
    }
    function handleClickEmote(_event) {
        let target = _event.target;
        let emote = target.getAttribute("id");
        let messageBox = document.getElementById("message");
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
    function chatAendern() {
        let aktuellerchat = localStorage.getItem("chat");
        if (aktuellerchat == "mib")
            localStorage.setItem("chat", "hfu");
        else if (aktuellerchat == "hfu")
            localStorage.setItem("chat", "mib");
        handleClickRetrieve();
    }
    setInterval(function () {
        handleClickRetrieve();
    }, 60000);
    console.log("Fertig geladen");
})(EndabgabeChat || (EndabgabeChat = {}));
//# sourceMappingURL=script.js.map