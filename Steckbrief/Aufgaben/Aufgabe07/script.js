"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    //#region Einfügen in Die Kategorien
    // Tut mir leid wer sich das hier anschauen muss
    //For-schleife für die Einsortierung in die Kategorie
    let _kategorie = "festkochend";
    let productCounter = document.createElement("div");
    productCounter.setAttribute("id", "productCounter");
    //Eventlistener zu den einzelnen Elementen hinzufügen
    document.getElementById("konto")?.appendChild(productCounter);
    document.getElementById("zuKartoffel1")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("zuKartoffel2")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("zuKartoffel3")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("homeKartoffel")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("prio")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("top")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("navbarKartoffel1")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("navbarKartoffel2")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("navbarKartoffel3")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("showAll")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("zumWarenkorb")?.addEventListener("click", warenkorbAufbauen);
    document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");
    //Variablen deklarieren und initialisieren
    let gesamtPreis = 0;
    let counter = 0;
    //Produkte, zum Verkauf stehen erstellen
    for (let i = 0; i < Aufgabe07.imVerkauf.length; i++) {
        productCounter.style.display = "none";
        //Einsortierung in die passende Kategorie
        if (Aufgabe07.imVerkauf[i].Kategorie == "festkochend") {
            _kategorie = "festkochend";
        }
        else if (Aufgabe07.imVerkauf[i].Kategorie == "mehligkochend") {
            _kategorie = "mehligkochend";
        }
        else {
            _kategorie = "exoten";
        }
        //Estellen von Div Elementen 
        let newDiv = document.createElement("div");
        //Div id zuweisen
        newDiv.id = "artikel" + i;
        newDiv.setAttribute("kategorie", _kategorie.toString());
        //Element hinzufügen
        document.getElementById(_kategorie)?.appendChild(newDiv);
        //Bild hinzufügen
        let newImg = document.createElement("img");
        newImg.src = Aufgabe07.imVerkauf[i].imgSrc;
        newImg.setAttribute("alt", Aufgabe07.imVerkauf[i].Art);
        newDiv.appendChild(newImg);
        //Label hinzufügen
        let newL = document.createElement("label");
        newL.setAttribute("for", Aufgabe07.imVerkauf[i].Name);
        newL.innerHTML = "Kilogramm: ";
        newDiv.appendChild(newL);
        //Dropdownmenu hinzufügen
        let newSelect = document.createElement("select");
        newSelect.setAttribute("class", "option");
        newSelect.name = Aufgabe07.imVerkauf[i].Name;
        newSelect.id = Aufgabe07.imVerkauf[i].Name + "select";
        newDiv.appendChild(newSelect);
        //Option vom Dropdownmenu
        let newOp1 = document.createElement("option");
        newOp1.value = "2.5";
        newOp1.innerHTML = "5 kg | " + Aufgabe07.imVerkauf[i].price1 + "€";
        let newOp2 = document.createElement("option");
        // newOp2.setAttribute("class", "option");
        newOp2.value = "5";
        newOp2.innerHTML = "10 kg | " + Aufgabe07.imVerkauf[i].price2 + "€";
        newSelect.appendChild(newOp1);
        newSelect.appendChild(newOp2);
        //Name hinzugefügt 
        let newName = document.createElement("p");
        newName.setAttribute("class", "Name");
        newName.innerText = Aufgabe07.imVerkauf[i].Name;
        newDiv.appendChild(newName);
        //Beschreibung hinzugefügt 
        let newP = document.createElement("p");
        newP.setAttribute("class", "beschreibung");
        newP.innerHTML = Aufgabe07.imVerkauf[i].Description;
        newDiv.appendChild(newP);
        //Button hinzugefügt 
        let newB = document.createElement("input");
        newB.addEventListener("click", handlerWarenkorb);
        newB.setAttribute("class", "button");
        newB.value = "In den Warenkorb";
        newB.type = "button";
        newB.setAttribute("articleIndex", i.toString());
        newDiv.appendChild(newB);
    }
    //Funktion um Preis des Warenkorbs zu berechnen,
    // klappt aber nur Teilweise, da sie manchmal auf einen Index im Array zugreifen will der nicht mehr da ist
    function preisBerechnung() {
        let preis = 0;
        for (let i = 0; i < Aufgabe07.warenkorb.length; i++) {
            preis += Aufgabe07.warenkorb[i].price1;
        }
        return preis;
    }
    //Funktion um den Elemente dem Warenkorb hinzu zu fügen
    function handlerWarenkorb(_kaufen) {
        counter += 1;
        let target = _kaufen.target;
        let artIndex = parseInt(target.getAttribute("articleIndex"));
        Aufgabe07.warenkorb[counter] = Aufgabe07.imVerkauf[artIndex];
        gesamtPreis = 0;
        for (let i = 1; i < Aufgabe07.warenkorb.length; i++) {
            gesamtPreis += Aufgabe07.warenkorb[i].price1;
        }
        console.log("Lege " + Aufgabe07.imVerkauf[artIndex].Name.toString() + " in den Warenkorb");
        try {
            console.log("Aktueller Preis des Warenkorbs: " + preisBerechnung().toFixed(2) + "€");
        }
        catch (error) {
            console.log("Aktueller Preis des Warenkorbs: " + gesamtPreis.toFixed(2) + "€");
        }
        productCounter.style.display = "block";
        productCounter.innerHTML = "" + counter;
    }
    //Filtert die anderen Kategorien aus bzw. lässt Kategorien aus- und einblenden
    function auswahlEinschreanken(_event) {
        if (counter == 0) {
            productCounter.style.display = "none";
        }
        let target = _event.target;
        let kategorie = target.getAttribute("href");
        for (let i = 0; i < Aufgabe07.imVerkauf.length; i++) {
            let artikelKategorie = document.getElementById("artikel" + i)?.getAttribute("kategorie");
            if (kategorie == "#" + artikelKategorie) {
                document.getElementById("artikel" + i)?.setAttribute("style", "display : block");
            }
            else {
                document.getElementById("artikel" + i)?.setAttribute("style", "display : none");
            }
            if (kategorie == null) {
                document.getElementById("artikel" + i)?.setAttribute("style", "display : block");
            }
        }
        switch (kategorie) {
            case "#festkochend":
                document.getElementById("1kartoffel")?.setAttribute("style", "display : block");
                document.getElementById("2kartoffel")?.setAttribute("style", "display : none");
                document.getElementById("3kartoffel")?.setAttribute("style", "display : none");
                document.getElementById("showAll")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel1")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : block");
                document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");
                break;
            case "#mehligkochend":
                document.getElementById("1kartoffel")?.setAttribute("style", "display : none");
                document.getElementById("2kartoffel")?.setAttribute("style", "display : block");
                document.getElementById("3kartoffel")?.setAttribute("style", "display : none");
                document.getElementById("showAll")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel1")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : block");
                document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");
                break;
            case "#exoten":
                document.getElementById("1kartoffel")?.setAttribute("style", "display : none");
                document.getElementById("2kartoffel")?.setAttribute("style", "display : none");
                document.getElementById("3kartoffel")?.setAttribute("style", "display : block");
                document.getElementById("showAll")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel1")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : block");
                document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");
                break;
            default:
                document.getElementById("1kartoffel")?.setAttribute("style", "display : block");
                document.getElementById("2kartoffel")?.setAttribute("style", "display : block");
                document.getElementById("3kartoffel")?.setAttribute("style", "display : block");
                document.getElementById("showAll")?.setAttribute("style", "display : none");
                document.getElementById("kartoffel1")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : block");
                document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");
                break;
        }
    }
    //Warenkorb aufbauen und updaten 
    function warenkorbAufbauen() {
        document.getElementById("kartoffel1")?.setAttribute("style", "display : none");
        document.getElementById("kartoffel2")?.setAttribute("style", "display : none");
        document.getElementById("kartoffel3")?.setAttribute("style", "display : none");
        document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : block");
        for (let i = 0; i < Aufgabe07.warenkorb.length; i++) {
            if (!document.getElementById("WarenkorbItem" + i.toString())) {
                if (Aufgabe07.warenkorb[i] != null) {
                    //Estellen von Div Elementen 
                    let newDiv = document.createElement("div");
                    //Div id zuweisen
                    newDiv.setAttribute("articleIndex", i.toString());
                    newDiv.setAttribute("id", "WarenkorbItem" + i.toString());
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
                    newOp2.innerHTML = "10 kg | " + Aufgabe07.warenkorb[i].price2 + "€";
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
                    newB.addEventListener("click", handlerWarenkorbEntfernen);
                    newB.setAttribute("class", "button");
                    newB.value = "entfernen";
                    newB.type = "button";
                    newB.setAttribute("articleIndex", i.toString());
                    newDiv.appendChild(newB);
                    productCounter.style.display = "block";
                }
            }
            try {
                document.getElementById("4kartoffel").innerHTML = "Aktueller Betrag: " + preisBerechnung().toFixed(2).toString() + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'>";
            }
            catch (error) {
                document.getElementById("4kartoffel").innerHTML = "Aktueller Betrag: " + gesamtPreis.toFixed(2).toString() + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'>";
            }
        }
        // Produkte aus dem Warenkorb nehmen und aktuellen Preis berechnen
    }
    function handlerWarenkorbEntfernen(_kaufen) {
        if (counter > 0)
            counter -= 1;
        let target = _kaufen.target;
        let artIndex = parseInt(target.getAttribute("articleIndex"));
        console.log("Nehme " + Aufgabe07.warenkorb[artIndex].Name.toString() + " aus dem Warenkorb");
        if (gesamtPreis - Aufgabe07.warenkorb[artIndex].price1 <= 0)
            gesamtPreis = 0;
        if (gesamtPreis > 0)
            gesamtPreis -= Aufgabe07.warenkorb[artIndex].price1;
        else
            gesamtPreis = 0;
        document.getElementById("WarenkorbItem" + artIndex)?.remove();
        productCounter.style.display = "block";
        productCounter.innerHTML = "" + counter;
        Aufgabe07.warenkorb.splice(artIndex, 1);
        try {
            console.log("Aktueller Preis des Warenkorbs: " + preisBerechnung().toFixed(2) + "€");
        }
        catch (error) {
            console.log("Aktueller Preis des Warenkorbs: " + gesamtPreis.toFixed(2) + "€");
        }
        try {
            document.getElementById("4kartoffel").innerHTML = "Aktueller Betrag: " + preisBerechnung().toFixed(2).toString() + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'>";
        }
        catch (error) {
            document.getElementById("4kartoffel").innerHTML = "Aktueller Betrag: " + gesamtPreis.toFixed(2).toString() + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'>";
        }
        for (let i = 0; i < Aufgabe07.warenkorb.length; i++) {
            document.getElementById("WarenkorbItem" + i)?.remove();
        }
        warenkorbAufbauen();
    }
    console.log("Fertig geladen");
    console.log(JSON.stringify(Aufgabe07.imVerkauf));
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map