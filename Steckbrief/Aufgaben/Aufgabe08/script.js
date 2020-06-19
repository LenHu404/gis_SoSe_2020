"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    window.addEventListener("load", init);
    let submitButton;
    async function onClickButton(_click) {
        //Form-Element aus der HTML Datei ziehen
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100/";
        //alle Zeichen nach dem "?"
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let urlEmpfangen = await fetch(url);
        let urlAusgeben = await urlEmpfangen.url;
        //urlAusgeben = urlAusgeben.replace("https://compaktdisk.herokuapp.com/", "");
        console.log(urlAusgeben);
    }
    async function init(_event) {
        //Der Button mit der Klasse "button" werden in dem Element submitButton eingespeichert
        submitButton = document.querySelector(".button");
        //onClickButton wird bei einem Click auf den Button ausgeführt
        submitButton.addEventListener("click", onClickButton.bind(submitButton));
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map