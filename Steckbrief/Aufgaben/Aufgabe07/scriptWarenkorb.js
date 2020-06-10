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
    Aufgabe07.warenkorb = [Aufgabe07.trenner];
    productCounter.style.display = "block";
    console.log(Storage.length);
    warenkorbAufbauen2();
    console.log(Storage.length);
    /* function warenkorbAufbauen(): void {
        for (let i: number = 0; i < counter; i++) {

            warenkorb[i + 1] = imVerkauf[parseInt(localStorage.getItem("lastname")!)];

            console.log(warenkorb[i].Name, warenkorb[i].imgSrc, warenkorb[i].price1, warenkorb[i].price2);

            //Estellen von Div Elementen
            let newDiv: HTMLDivElement = document.createElement("div");

            //Div id zuweisen
            newDiv.setAttribute("articleIndex", "i");

            //Element hinzufügen
            document.getElementById("Angebot")?.appendChild(newDiv);

            //Bild hinzufügen
            let newImg: HTMLImageElement = document.createElement("img");

            newImg.src = warenkorb[i].imgSrc;
            newImg.setAttribute("alt", warenkorb[i].Art);
            newDiv.appendChild(newImg);

            //Label hinzufügen
            let newL: HTMLLabelElement = document.createElement("label");
            newL.setAttribute("for", warenkorb[i].Name);
            newL.innerHTML = "Kilogramm:";
            newDiv.appendChild(newL);

            //Dropdownmenu hinzufügen
            let newSelect: HTMLSelectElement = document.createElement("select");
            newSelect.setAttribute("class", "option");
            newSelect.name = warenkorb[i].Name;
            newSelect.id = warenkorb[i].Name + "select";
            newDiv.appendChild(newSelect);

            //Option vom Dropdownmenu
            let newOp1: HTMLOptionElement = document.createElement("option");
            newOp1.value = "2.5";
            newOp1.innerHTML = "5 kg | " + warenkorb[i].price1 + "€";
            let newOp2: HTMLOptionElement = document.createElement("option");
            newOp2.value = "5";
            newOp2.innerHTML = "10 kg | " + warenkorb[i].price2 + "€";
            newSelect.appendChild(newOp1);
            newSelect.appendChild(newOp2);

            //Name hinzugefügt
            let newName: HTMLParagraphElement = document.createElement("p");
            newName.setAttribute("class", "Name");
            newName.innerText = warenkorb[i].Name;
            newDiv.appendChild(newName);

            //Beschreibung hinzugefügt
            let newP: HTMLParagraphElement = document.createElement("p");
            newP.setAttribute("class", "beschreibung");
            newP.innerHTML = warenkorb[i].Description;
            newDiv.appendChild(newP);

            //Button hinzugefügt
            let newB: HTMLInputElement = document.createElement("input");
            // newB.addEventListener("click", handlerWarenkorb);
            newB.setAttribute("class", "button");
            newB.value = "entfernen";
            newB.type = "button";
            newB.setAttribute("articleIndex", i.toString());
            newDiv.appendChild(newB);

            productCounter.style.display = "block";

        }
    } */
    function warenkorbAufbauen2() {
        for (let i = 0; i < Aufgabe07.counter; i++) {
            let artIndex = parseInt(localStorage.getItem("Artikel" + i));
            console.log(Aufgabe07.imVerkauf[artIndex].Name, Aufgabe07.imVerkauf[artIndex].imgSrc, Aufgabe07.imVerkauf[artIndex].price1, Aufgabe07.imVerkauf[artIndex].price2);
            //Estellen von Div Elementen 
            let newDiv = document.createElement("div");
            //Div id zuweisen
            newDiv.setAttribute("articleIndex", artIndex.toString());
            newDiv.setAttribute("id", "WarenkorbItem" + artIndex.toString());
            //Element hinzufügen
            document.getElementById("Angebot")?.appendChild(newDiv);
            //Bild hinzufügen
            let newImg = document.createElement("img");
            newImg.src = Aufgabe07.imVerkauf[i].imgSrc;
            newImg.setAttribute("alt", Aufgabe07.imVerkauf[artIndex].Art);
            newDiv.appendChild(newImg);
            //Label hinzufügen
            let newL = document.createElement("label");
            newL.setAttribute("for", Aufgabe07.imVerkauf[artIndex].Name);
            newL.innerHTML = "Kilogramm:";
            newDiv.appendChild(newL);
            //Dropdownmenu hinzufügen
            let newSelect = document.createElement("select");
            newSelect.setAttribute("class", "option");
            newSelect.name = Aufgabe07.imVerkauf[artIndex].Name;
            newSelect.id = Aufgabe07.imVerkauf[artIndex].Name + "select";
            newDiv.appendChild(newSelect);
            //Option vom Dropdownmenu
            let newOp1 = document.createElement("option");
            newOp1.value = "2.5";
            newOp1.innerHTML = "5 kg | " + Aufgabe07.imVerkauf[artIndex].price1 + "€";
            let newOp2 = document.createElement("option");
            newOp2.value = "5";
            newOp2.innerHTML = "10 kg | " + Aufgabe07.imVerkauf[artIndex].price2 + "€";
            newSelect.appendChild(newOp1);
            newSelect.appendChild(newOp2);
            //Name hinzugefügt 
            let newName = document.createElement("p");
            newName.setAttribute("class", "Name");
            newName.innerText = Aufgabe07.imVerkauf[artIndex].Name;
            newDiv.appendChild(newName);
            //Beschreibung hinzugefügt 
            let newP = document.createElement("p");
            newP.setAttribute("class", "beschreibung");
            newP.innerHTML = Aufgabe07.imVerkauf[artIndex].Description;
            newDiv.appendChild(newP);
            //Button hinzugefügt 
            let newB = document.createElement("input");
            // newB.addEventListener("click", handlerWarenkorbEntfernen);
            newB.setAttribute("class", "button");
            newB.value = "entfernen";
            newB.type = "button";
            newB.setAttribute("articleIndex", artIndex.toString());
            newDiv.appendChild(newB);
            productCounter.style.display = "block";
            try {
                //document.getElementById("4kartoffel")!.innerHTML = "Aktueller Betrag: " + preisBerechnung().toFixed(2).toString() + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'>";
            }
            catch (error) {
                //document.getElementById("4kartoffel")!.innerHTML = "Aktueller Betrag: " + gesamtPreis.toFixed(2).toString() + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'>";
            }
        }
        function handlerWarenkorb(_kaufen) {
            if (Aufgabe07.counter > 0)
                Aufgabe07.counter -= 1;
            let target = _kaufen.target;
            let artIndex = parseInt(target.getAttribute("articleIndex"));
            gesamtPreis -= Aufgabe07.warenkorb[artIndex].price1;
            console.log("Nehme " + Aufgabe07.warenkorb[artIndex].Name.toString() + " aus dem Warenkorb");
            console.log("Aktueller Preis des Warenkorbs: " + gesamtPreis.toFixed(2) + "€");
            productCounter.style.display = "block";
            productCounter.innerHTML = "" + Aufgabe07.counter;
        }
        console.log("Fertig geladen");
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=scriptWarenkorb.js.map