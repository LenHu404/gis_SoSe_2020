"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    Aufgabe07.productCounter = document.createElement("div");
    Aufgabe07.productCounter.setAttribute("id", "productCounter");
    document.getElementById("konto")?.appendChild(Aufgabe07.productCounter);
    /* export function preisBerechnung(): number {
        console.log("funktionierts?");
        let preiscounter: number = parseInt(localStorage.getItem("counter")!);
        let preis: number = 0;
        for (let i: number = 0; i < preiscounter; i++) {

            preis += imVerkauf[parseInt(localStorage.getItem("Artikel" + i)!)].price1;
        }
        return preis;

    } */
    async function communicate(_url) {
        let response = await fetch(_url);
        Aufgabe07.imVerkauf = await response.json();
        console.log(Aufgabe07.imVerkauf[0].Name.toString());
    }
    Aufgabe07.communicate = communicate;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=allgemein.js.map