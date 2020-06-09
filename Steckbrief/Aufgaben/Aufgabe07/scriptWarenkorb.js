"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    //#region Einfügen in Die Kategorien
    // Bin einfach nur am testen und rumprobieren
    //For-schleife für die Einsortierung in die Kategorie
    let productCounter = document.createElement("div");
    productCounter.setAttribute("id", "productCounter");
    document.getElementById("konto")?.appendChild(productCounter);
    let gesamtPreis = 0;
    let counter = Aufgabe07.warenkorb.length;
    productCounter.style.display = "block";
    for (let i = 0; i < Aufgabe07.warenkorb.length; i++) {
        console.log(Aufgabe07.warenkorb[i].Name, Aufgabe07.warenkorb[i].imgSrc, Aufgabe07.warenkorb[i].price1, Aufgabe07.warenkorb[i].price2);
        //Estellen von Div Elementen 
        let newDiv = document.createElement("div");
        //Div id zuweisen
        newDiv.setAttribute("articleIndex", "i");
        //Element hinzufügen
        document.getElementById("Angebot")?.appendChild(newDiv);
        //Bild hinzufügen
        let newImg = document.createElement("img");
        newImg.src = Aufgabe07.warenkorb[i].imgSrc;
        newImg.setAttribute("alt", Aufgabe07.warenkorb[i].Art);
        newDiv.appendChild(newImg);
        //Label hinzufügen
        let newL = document.createElement("label");
        newL.setAttribute("for", Aufgabe07.warenkorb[i].Name);
        newL.innerHTML = "Kilogramm:";
        newDiv.appendChild(newL);
        //Dropdownmenu hinzufügen
        let newSelect = document.createElement("select");
        newSelect.setAttribute("class", "option");
        newSelect.name = Aufgabe07.warenkorb[i].Name;
        newSelect.id = Aufgabe07.warenkorb[i].Name + "select";
        newDiv.appendChild(newSelect);
        //Option vom Dropdownmenu
        let newOp1 = document.createElement("option");
        newOp1.value = "2.5";
        newOp1.innerHTML = "5 kg | " + Aufgabe07.warenkorb[i].price1 + "€";
        let newOp2 = document.createElement("option");
        newOp2.value = "5";
        newOp2.innerHTML = "5 kg | " + Aufgabe07.warenkorb[i].price2 + "€";
        newSelect.appendChild(newOp1);
        newSelect.appendChild(newOp2);
        //Name hinzugefügt 
        let newName = document.createElement("p");
        newName.setAttribute("class", "Name");
        newName.innerText = Aufgabe07.warenkorb[i].Name;
        newDiv.appendChild(newName);
        //Beschreibung hinzugefügt 
        let newP = document.createElement("p");
        newP.setAttribute("class", "beschreibung");
        newP.innerHTML = Aufgabe07.warenkorb[i].Description;
        newDiv.appendChild(newP);
        //Button hinzugefügt 
        let newB = document.createElement("input");
        newB.addEventListener("click", handlerWarenkorb);
        newB.setAttribute("class", "button");
        newB.value = "entfernen";
        newB.type = "button";
        newB.setAttribute("articleIndex", i.toString());
        newDiv.appendChild(newB);
        productCounter.style.display = "block";
    }
    function handlerWarenkorb(_kaufen) {
        if (counter > 0)
            counter -= 1;
        let target = _kaufen.target;
        let artIndex = parseInt(target.getAttribute("articleIndex"));
        gesamtPreis -= Aufgabe07.warenkorb[artIndex].price1;
        console.log("Nehme " + Aufgabe07.warenkorb[artIndex].Name.toString() + " aus dem Warenkorb");
        console.log("Aktueller Preis des Warenkorbs: " + gesamtPreis.toFixed(2) + "€");
        productCounter.style.display = "block";
        productCounter.innerHTML = "" + counter;
    }
    console.log("Fertig geladen");
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=scriptWarenkorb.js.map