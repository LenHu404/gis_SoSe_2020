"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    //#region Einfügen in Die Kategorien
    // Bin einfach nur am testen und rumprobieren
    //For-schleife für die Einsortierung in die Kategorie
    let productCounter = document.createElement("div");
    productCounter.setAttribute("id", "productCounter");
    document.getElementById("konto")?.appendChild(productCounter);
    //let gesamtPreis: number = 0;
    Aufgabe07.warenkorb = [Aufgabe07.trenner];
    productCounter.style.display = "block";
    Aufgabe07.counter = parseInt(localStorage.getItem("counter"));
    console.log(Aufgabe07.counter);
    warenkorbAufbauen2();
    async function warenkorbAufbauen2() {
        console.log("Tester");
        await communicate("https://lenhu404.github.io/gis_SoSe_2020/Steckbrief/Aufgaben/Aufgabe07/artikel.json");
        for (let i = 0; i < Aufgabe07.counter; i++) {
            console.log("Tester 2");
            productCounter.innerHTML = "" + Aufgabe07.counter;
            if (Aufgabe07.counter == 0) {
                productCounter.style.display = "none";
            }
            else
                productCounter.style.display = "block";
            let artIndex = parseInt(localStorage.getItem("Artikel" + i));
            //console.log(imVerkauf[artIndex].Name, imVerkauf[artIndex].imgSrc, imVerkauf[artIndex].price1, imVerkauf[artIndex].price2);
            //Estellen von Div Elementen 
            let newDiv = document.createElement("div");
            //Div id zuweisen
            newDiv.setAttribute("articleIndex", artIndex.toString());
            newDiv.setAttribute("id", "WarenkorbItem" + i);
            newDiv.setAttribute("counter", i.toString());
            //Element hinzufügen
            document.getElementById("Angebot")?.appendChild(newDiv);
            //Bild hinzufügen
            let newImg = document.createElement("img");
            newImg.src = Aufgabe07.imVerkauf[artIndex].imgSrc;
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
            newB.addEventListener("click", handlerWarenkorb);
            newB.setAttribute("class", "button");
            newB.value = "entfernen";
            newB.type = "button";
            newB.setAttribute("articleIndex", artIndex.toString());
            newB.setAttribute("counter", i.toString());
            newDiv.appendChild(newB);
            if (Aufgabe07.counter >= 0)
                document.getElementById("Entleeren")?.setAttribute("style", "display : inline");
            else
                document.getElementById("Entleeren")?.setAttribute("style", "display : hidden");
            console.log("Aktueller Preis des Warenkorbs: " + preisBerechnung().toFixed(2) + "€");
            document.getElementById("3kartoffel").innerHTML = "Aktueller Preis: " + preisBerechnung().toFixed(2) + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'> <br> <input type='button' id='Entleeren' value='Alles Entfernen'>";
        }
        function handlerWarenkorb(_kaufen) {
            if (Aufgabe07.counter > 0)
                Aufgabe07.counter -= 1;
            let target = _kaufen.target;
            let artIndex = parseInt(target.getAttribute("articleIndex"));
            let artikelCounter = parseInt(target.getAttribute("counter"));
            console.log("Nehme " + Aufgabe07.imVerkauf[artIndex].Name.toString() + " aus dem Warenkorb");
            //Warum bekomme ich hier null? 
            productCounter.style.display = "block";
            productCounter.innerHTML = "" + Aufgabe07.counter;
            //Testing
            console.log(artikelCounter);
            console.log(artIndex);
            //Funktioniert nicht solange artikelCounter null ist
            document.getElementById("WarenkorbItem" + artikelCounter)?.remove();
            localStorage.removeItem("Artikel" + artikelCounter);
            localStorage.setItem("counter", Aufgabe07.counter.toString());
            document.getElementById("3kartoffel").innerHTML = "Aktueller Preis: " + preisBerechnung().toFixed(2) + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'> <br> <input type='button' id='Entleeren' value='Alles Entfernen'>";
            console.log("Aktueller Preis des Warenkorbs: " + preisBerechnung().toFixed(2) + "€");
            if (Aufgabe07.counter >= 0)
                document.getElementById("Entleeren")?.setAttribute("style", "display : inline");
            else
                document.getElementById("Entleeren")?.setAttribute("style", "display : hidden");
        }
        async function communicate(_url) {
            let response = await fetch(_url);
            Aufgabe07.imVerkauf = await response.json();
            console.log(Aufgabe07.imVerkauf[0].Name.toString());
        }
        function preisBerechnung() {
            let preiscounter = parseInt(localStorage.getItem("counter"));
            let preis = 0;
            for (let i = 0; i < preiscounter; i++) {
                if (parseInt(localStorage.getItem("Artikel" + i)))
                    preis += Aufgabe07.imVerkauf[parseInt(localStorage.getItem("Artikel" + i))].price1;
            }
            return preis;
        }
        function handleWarenkorbEntleeren(_kaufen) {
            Aufgabe07.counter = parseInt(localStorage.getItem("counter"));
            console.log("Counter: " + Aufgabe07.counter);
            for (let i = 0; i < Aufgabe07.counter; i++) {
                document.getElementById("WarenkorbItem" + i)?.remove();
                localStorage.removeItem("Artikel" + i);
                console.log("HAaaaaaaaaaaaaaalollllooooo");
            }
            localStorage.setItem("counter", "0");
            productCounter.style.display = "block";
            productCounter.innerHTML = "" + Aufgabe07.counter;
            console.log("Entleere Warenkorb");
            console.log("Aktueller Preis des Warenkorbs: " + preisBerechnung().toFixed(2) + "€");
            document.getElementById("Entleeren")?.setAttribute("style", "display : hidden");
        }
        document.getElementById("Entleeren")?.addEventListener("click", handleWarenkorbEntleeren);
        console.log("Fertig geladen");
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=scriptWarenkorb.js.map