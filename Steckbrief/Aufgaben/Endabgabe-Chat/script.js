"use strict";
var EndabgabeChat;
(function (EndabgabeChat) {
    let buttonSend = document.getElementById("senden");
    buttonSend.addEventListener("click", handleClickStore);
    let buttonRefresh = document.getElementById("refresh");
    buttonRefresh.addEventListener("click", handleClickRetrieve);
    let formData;
    async function handleClickRetrieve() {
        //let url: string = "http://localhost:8100";
        let url = "https://kartoffel-ist-best.herokuapp.com";
        url += "/retrieve";
        let response = await fetch(url);
        console.log(response);
        let responseText = await response.json();
        let ausgabe = document.getElementById("Ausgabefeld");
        ausgabe.setAttribute("style", "display: block");
        ausgabe.innerHTML = responseText;
        console.log(responseText);
    }
    async function handleClickStore() {
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url = "https://kartoffel-ist-best.herokuapp.com";
        url += "/store";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + "user=" + localStorage.getItem("user") + "&" + query.toString();
        let formular = document.getElementById("formular");
        formular.reset();
        console.log("fetch-Url: " + url);
        await fetch(url);
        handleClickRetrieve();
    }
    console.log("Fertig geladen");
})(EndabgabeChat || (EndabgabeChat = {}));
//# sourceMappingURL=script.js.map