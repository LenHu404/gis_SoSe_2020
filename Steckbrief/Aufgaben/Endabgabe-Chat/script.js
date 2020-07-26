"use strict";
var EndabgabeChat;
(function (EndabgabeChat) {
    let nachrichtenZaehler = 0;
    let chatAnzeige1 = document.getElementById("chatAnzeige1");
    let chatAnzeige2 = document.getElementById("chatAnzeige2");
    chatAnzeige1.addEventListener("click", chatAendern);
    chatAnzeige2.addEventListener("click", chatAendern);
    let abmelden = document.getElementById("abmelden");
    abmelden.addEventListener("click", handleAbmelden);
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
    //Funktion um die Nachrichten aus der Datenbank zu holen
    async function handleClickRetrieve() {
        //Url erstellen mit username und passwort um zu überprüfen ob man richtig eingelogt ist
        let url = "https://kartoffel-ist-best.herokuapp.com/logIn?username=" + localStorage.getItem("username") + "&password=" + localStorage.getItem("password");
        let response = await fetch(url);
        let responseText = await response.text();
        console.log("Eingeloggt: " + responseText);
        // Falls die Daten falsch sind, dann werden keine Nachrichten geladen
        if (responseText == "false") {
            console.log("Du bist nicht richtig eingeloggt");
            errorDiv.style.display = "block";
            let ausgabe = document.getElementById("Ausgabefeld");
            ausgabe.innerHTML = "";
        }
        else {
            errorDiv.style.display = "none";
            let neuNachrichtenZaehler = 0;
            // Im welchen chat befinden man sich gerade
            if (localStorage.getItem("chat") == "mib") {
                chatAnzeige1.innerHTML = "MIB-Chat";
                chatAnzeige2.innerHTML = "HFU-Chat";
            }
            else if (localStorage.getItem("chat") == "hfu") {
                chatAnzeige1.innerHTML = "HFU-Chat";
                chatAnzeige2.innerHTML = "MIB-Chat";
            }
            // Url zum lokalen bzw. Online-Server
            //let url: string = "http://localhost:8100";
            let url = "https://kartoffel-ist-best.herokuapp.com";
            // Anhängen des Paths für die Anfragefunktion + chat
            url += "/retrieve/" + localStorage.getItem("chat");
            let response = await fetch(url);
            console.log("fetch-Url: " + url);
            //console.log(response);
            let responseText = await response.json();
            // Antwort vom Server als String um ihn dann an den Zeichen }, zu zerteilen
            let splitted = responseText.split("},");
            //Ausgabefeld finden und zurücksetzten
            let ausgabe = document.getElementById("Ausgabefeld");
            ausgabe.innerHTML = "";
            ausgabe.setAttribute("style", "display: block");
            //Schleife um die Einzelnen Nachrichten zu erstellen
            for (let i = 0; i < splitted.length - 1; i++) {
                splitted[i] = splitted[i] + "}";
                // tslint:disable-next-line: no-any
                let splittedJson = JSON.parse(splitted[i]);
                let newDiv = document.createElement("div");
                if (localStorage.getItem("username") == splittedJson.user) {
                    newDiv.className = "bubbleMe";
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
            //Nach unten scrollen falls eine Nachricht da ist
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
    // Funktion um Nchrichten an den Server/ die Datenbank zu schicken
    async function handleClickStore() {
        // Überprüfen ob man eingeloggt ist
        let url = "https://kartoffel-ist-best.herokuapp.com/logIn?username=" + localStorage.getItem("username") + "&password=" + localStorage.getItem("password");
        let formular = document.getElementById("formular");
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let response = await fetch(url);
        let responseText = await response.text();
        if (responseText == "false") {
            console.log("Du bist nicht richtig eingeloggt");
            formular.reset();
        }
        else {
            // if-Abfrage um zu schauen ob eine Nachricht eingegeben wurde
            if (query.toString() != "message=") {
                let date = new Date().toLocaleString();
                //let url: string = "http://localhost:8100";
                let url = "https://kartoffel-ist-best.herokuapp.com";
                url += "/store/" + localStorage.getItem("chat");
                // tslint:disable-next-line: no-any
                // let query: URLSearchParams = new URLSearchParams(<any>formData);
                url += "?user=" + localStorage.getItem("username") + "&" + query.toString() + "&" + "date=" + date;
                formular.reset();
                console.log("fetch-Url: " + url);
                // Alle Nachrichten neu laden mit der neuen Nachricht dabei
                handleClickRetrieve();
                let response = await fetch(url);
                let responseText = await response.text();
                console.log(responseText);
            }
        }
    }
    // Funktion für die Emotes
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
    // Funktion um den Chat zu änder und die Nachrichten neu zu laden
    function chatAendern() {
        let aktuellerchat = localStorage.getItem("chat");
        if (aktuellerchat == "mib")
            localStorage.setItem("chat", "hfu");
        else if (aktuellerchat == "hfu")
            localStorage.setItem("chat", "mib");
        handleClickRetrieve();
    }
    // Abmelden und zurück zur Einloggseite
    function handleAbmelden() {
        localStorage.clear();
        location.assign("https://lenhu404.github.io/gis_SoSe_2020/Steckbrief/Aufgaben/Endabgabe-Chat/EinlogFenster.html");
    }
    // Die Funktion zum neu laden alle 60 Sekunden ausführen um nach neuen Nachrichten zu schauen
    setInterval(function () {
        handleClickRetrieve();
    }, 60000);
    console.log("Fertig geladen");
})(EndabgabeChat || (EndabgabeChat = {}));
//# sourceMappingURL=script.js.map