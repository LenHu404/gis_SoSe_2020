"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    function preisBerechnung() {
        let preis = 0;
        for (let i = 0; i < Aufgabe07.warenkorb.length; i++) {
            preis += Aufgabe07.warenkorb[i].price1;
        }
        return preis;
    }
    Aufgabe07.preisBerechnung = preisBerechnung;
    async function communicate(_url) {
        let response = await fetch(_url);
        Aufgabe07.imVerkauf = await response.json();
        console.log(Aufgabe07.imVerkauf[0].Name.toString());
        //return myJSONArray;
    }
    Aufgabe07.communicate = communicate;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=allgemein.js.map