"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let buttonSignInJson = document.getElementById("buttonSignInJson");
    buttonSignInJson.addEventListener("click", handleClickRetrieve);
    let buttonSignInHtml = document.getElementById("buttonSignInHtml");
    buttonSignInHtml.addEventListener("click", handleClickStore);
    let ausgabe = document.getElementById("Ausgabefeld");
    ausgabe.setAttribute("style", "display: none");
    let formData;
    let buttonActionHtml = document.getElementById("store");
    buttonActionHtml.addEventListener("click", handleClickStore);
    let buttonActionJson = document.getElementById("retrieve");
    buttonActionJson.addEventListener("click", handleClickRetrieve);
    async function handleClickRetrieve() {
        //let url: string = "http://localhost:8100/" + _format;
        let url = "https://kartoffel-ist-best.herokuapp.com";
        url += "/retrieve";
        let response = await fetch(url);
        console.log(response);
        let responseText = await response.json();
        let serverResponse = document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
        console.log(responseText);
    }
    async function handleClickStore() {
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100/";
        let url = "https://kartoffel-ist-best.herokuapp.com";
        url += "/store";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let formular = document.getElementById("formid");
        formular.reset();
        await fetch(url);
    }
    console.log("Fertig geladen");
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map