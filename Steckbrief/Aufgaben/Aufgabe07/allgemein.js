"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    Aufgabe07.productCounter = document.createElement("div");
    Aufgabe07.productCounter.setAttribute("id", "productCounter");
    document.getElementById("konto")?.appendChild(Aufgabe07.productCounter);
    function preisBerechnung() {
        console.log("at least he tried");
        Aufgabe07.counter = parseInt(localStorage.getItem("counter"));
        let preis = 0;
        for (let i = 0; i < Aufgabe07.counter; i++) {
            preis += Aufgabe07.imVerkauf[parseInt(localStorage.getItem("Artikel" + i))].price1;
        }
        return preis;
    }
    Aufgabe07.preisBerechnung = preisBerechnung;
    async function communicate(_url) {
        let response = await fetch(_url);
        Aufgabe07.imVerkauf = await response.json();
        console.log(Aufgabe07.imVerkauf[0].Name.toString());
    }
    Aufgabe07.communicate = communicate;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=allgemein.js.map