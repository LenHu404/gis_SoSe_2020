"use strict";
var EndabgabeChat;
(function (EndabgabeChat) {
    let buttonSend = document.getElementById("senden");
    buttonSend.addEventListener("click", handleClickStore);
    let buttonRefresh = document.getElementById("refresh");
    buttonRefresh.addEventListener("click", handleClickRetrieve);
    let ausgabe = document.getElementById("Ausgabefeld");
    ausgabe.setAttribute("style", "display: none");
    let formData;
    async function handleClickRetrieve() {
        //let url: string = "http://localhost:8100";
        let url = "https://kartoffel-ist-best.herokuapp.com";
        url += "/retrieve";
        let response = await fetch(url);
        // console.log(response);
        let responseText = await response.json();
        let splitted = responseText.split("},");
        let ausgabe = document.getElementById("Ausgabefeld");
        ausgabe.innerHTML = "";
        //ausgabe.innerHTML = responseText;
        ausgabe.setAttribute("style", "display: block");
        for (let i = 1; i < splitted.length - 1; i++) {
            //if (!(i == 0))
            splitted[i] = splitted[i] + "}";
            let splittedJson = JSON.parse(splitted[i]);
            let newDiv = document.createElement("div");
            newDiv.className = "message";
            if (localStorage.getItem("user") == splittedJson.user) {
                newDiv.className = "selfSend";
            }
            let nameTag = document.createElement("div");
            nameTag.className = "nameTag";
            if (!(localStorage.getItem("user") == splittedJson.user)) {
                nameTag.innerHTML = splittedJson.user + ":";
            }
            let messageBody = document.createElement("div");
            messageBody.className = "messageBody";
            messageBody.innerHTML = splittedJson.message;
            let dateDiv = document.createElement("div");
            dateDiv.className = "date";
            dateDiv.innerHTML = splittedJson.date;
            if (localStorage.getItem("user") == splittedJson.user) {
                newDiv.style.textAlign = "right";
            }
            document.getElementById("Ausgabefeld")?.appendChild(newDiv);
            newDiv.appendChild(nameTag);
            newDiv.appendChild(messageBody);
            newDiv.appendChild(dateDiv);
        }
        console.log(responseText);
    }
    async function handleClickStore() {
        let date = new Date().toLocaleString();
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url = "https://kartoffel-ist-best.herokuapp.com";
        url += "/store";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + "user=" + localStorage.getItem("user") + "&" + query.toString() + "&" + "date=" + date;
        let formular = document.getElementById("formular");
        formular.reset();
        console.log("fetch-Url: " + url);
        await fetch(url);
        console.log("Nachricht gesendet und neu laden" + handleClickRetrieve());
    }
    console.log("Fertig geladen");
})(EndabgabeChat || (EndabgabeChat = {}));
//# sourceMappingURL=script.js.map