"use strict";
var EndabgabeChat;
(function (EndabgabeChat) {
    let buttonSignInJson = document.getElementById("senden");
    buttonSignInJson.addEventListener("click", handleClickStore);
    let ausgabe = document.getElementById("Ausgabefeld");
    let formular = document.getElementById("formular");
    ausgabe.setAttribute("style", "display: none");
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
        url += "?" + query.toString();
        let formular = document.getElementById("formular");
        formular.reset();
        await fetch(url);
        handleClickRetrieve();
    }
    console.log("Fertig geladen");
})(EndabgabeChat || (EndabgabeChat = {}));
//# sourceMappingURL=script.js.map