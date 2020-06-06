"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    let ackersegen = {
        Name: "Ackersegen",
        Description: "Auch ein Segen für ihr Gericht",
        price1: 4.55,
        price2: 8.99,
        imgSrc: "Bilder/ACKERSEGEN.jpg",
        Art: "Kartoffel",
        Kategorie: "mehligkochend"
    };
    let marabel = {
        Name: "Marabel",
        Description: "Eine weitere wunderbare Kartoffel",
        price1: 4.85,
        price2: 8.99,
        imgSrc: "Bilder/marabel.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };
    let annabel = {
        Name: "Annabel",
        Description: "Werden Annabels nach der Kartoffel benannt oder die Kartoffel nach Annabels?",
        price1: 3.55,
        price2: 7.54,
        imgSrc: "Bilder/Annabel.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };
    let mehlig = {
        Name: "Meh-lige Kartoffel",
        Description: "... meh",
        price1: 9.55,
        price2: 19.99,
        imgSrc: "Bilder/meh-lig.png",
        Art: "Kartoffel",
        Kategorie: "mehligkochend"
    };
    //#region Einfügen in Die Kategorien
    // Tut mir leid wer sich das hier anschauen muss
    //For-schleife für die Einsortierung in die Kategorie
    let warenkorb = [marabel, ackersegen, annabel, mehlig];
    let productCounter = document.createElement("div");
    productCounter.setAttribute("id", "productCounter");
    document.getElementById("konto")?.appendChild(productCounter);
    let gesamtPreis = 0;
    let counter = warenkorb.length;
    productCounter.style.display = "block";
    for (let i = 0; i < warenkorb.length; i++) {
        console.log(warenkorb[i].Name, warenkorb[i].imgSrc, warenkorb[i].price1, warenkorb[i].price2);
        //Estellen von Div Elementen 
        let newDiv = document.createElement("div");
        //Div id zuweisen
        newDiv.setAttribute("articleIndex", "i");
        //Element hinzufügen
        document.getElementById("Angebot")?.appendChild(newDiv);
        //Bild hinzufügen
        let newImg = document.createElement("img");
        newImg.src = warenkorb[i].imgSrc;
        newImg.setAttribute("alt", warenkorb[i].Art);
        newDiv.appendChild(newImg);
        //Label hinzufügen
        let newL = document.createElement("label");
        newL.setAttribute("for", warenkorb[i].Name);
        newL.innerHTML = "Kilogramm:";
        newDiv.appendChild(newL);
        //Dropdownmenu hinzufügen
        let newSelect = document.createElement("select");
        newSelect.setAttribute("class", "option");
        newSelect.name = warenkorb[i].Name;
        newSelect.id = warenkorb[i].Name + "select";
        newDiv.appendChild(newSelect);
        //Option vom Dropdownmenu
        let newOp1 = document.createElement("option");
        newOp1.value = "2.5";
        newOp1.innerHTML = "5 kg | " + warenkorb[i].price1 + "€";
        let newOp2 = document.createElement("option");
        newOp2.value = "5";
        newOp2.innerHTML = "5 kg | " + warenkorb[i].price2 + "€";
        newSelect.appendChild(newOp1);
        newSelect.appendChild(newOp2);
        //Name hinzugefügt 
        let newName = document.createElement("p");
        newName.setAttribute("class", "Name");
        newName.innerText = warenkorb[i].Name;
        newDiv.appendChild(newName);
        //Beschreibung hinzugefügt 
        let newP = document.createElement("p");
        newP.setAttribute("class", "beschreibung");
        newP.innerHTML = warenkorb[i].Description;
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
        gesamtPreis -= warenkorb[artIndex].price2;
        console.log("Nehme " + warenkorb[artIndex].Name.toString() + " aus dem Warenkorb");
        console.log("Aktueller Preis des Warenkorbs: " + gesamtPreis.toFixed(2) + "€");
        productCounter.style.display = "block";
        productCounter.innerHTML = "" + counter;
    }
    console.log("Fertig geladen");
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=scriptWarenkorb.js.map