"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    //#region Einfügen in Die Kategorien
    // Tut mir leid wer sich das hier anschauen muss
    //For-schleife für die Einsortierung in die Kategorie
    let _kategorie = "festkochend";
    let productCounter = document.createElement("div");
    productCounter.setAttribute("id", "productCounter");
    document.getElementById("konto")?.appendChild(productCounter);
    document.getElementById("zuKartoffel1")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("zuKartoffel2")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("zuKartoffel3")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("homeKartoffel")?.addEventListener("click", auswahlEinschreanken);
    let gesamtPreis = 0;
    let counter = 0;
    for (let i = 0; i < Aufgabe06.imVerkauf.length; i++) {
        productCounter.style.display = "none";
        //Einsortierung in die passende Kategorie
        if (Aufgabe06.imVerkauf[i].Kategorie == "festkochend") {
            _kategorie = "festkochend";
        }
        else if (Aufgabe06.imVerkauf[i].Kategorie == "mehligkochend") {
            _kategorie = "mehligkochend";
        }
        else {
            _kategorie = "exoten";
        }
        console.log(Aufgabe06.imVerkauf[i].Name, Aufgabe06.imVerkauf[i].imgSrc, Aufgabe06.imVerkauf[i].price1, Aufgabe06.imVerkauf[i].price2);
        //Estellen von Div Elementen 
        let newDiv = document.createElement("div");
        //Div id zuweisen
        newDiv.id = "artikel" + _kategorie + i;
        newDiv.setAttribute("articleIndex", "i");
        //Element hinzufügen
        document.getElementById(_kategorie)?.appendChild(newDiv);
        //Bild hinzufügen
        let newImg = document.createElement("img");
        newImg.src = Aufgabe06.imVerkauf[i].imgSrc;
        newImg.setAttribute("alt", Aufgabe06.imVerkauf[i].Art);
        newDiv.appendChild(newImg);
        //Label hinzufügen
        let newL = document.createElement("label");
        newL.setAttribute("for", Aufgabe06.imVerkauf[i].Name);
        newL.innerHTML = "Kilogramm:";
        newDiv.appendChild(newL);
        //Dropdownmenu hinzufügen
        let newSelect = document.createElement("select");
        newSelect.name = Aufgabe06.imVerkauf[i].Name;
        newSelect.id = Aufgabe06.imVerkauf[i].Name + "select";
        newDiv.appendChild(newSelect);
        //Option vom Dropdownmenu
        let newOp1 = document.createElement("option");
        newOp1.value = "2.5";
        newOp1.innerHTML = "5 kg | " + Aufgabe06.imVerkauf[i].price1 + "€";
        let newOp2 = document.createElement("option");
        newOp2.value = "5";
        newOp2.innerHTML = "5 kg | " + Aufgabe06.imVerkauf[i].price2 + "€";
        newSelect.appendChild(newOp1);
        newSelect.appendChild(newOp2);
        //Name hinzugefügt 
        let newName = document.createElement("p");
        newName.setAttribute("class", "Name");
        newName.innerText = Aufgabe06.imVerkauf[i].Name;
        newDiv.appendChild(newName);
        //Beschreibung hinzugefügt 
        let newP = document.createElement("p");
        newP.setAttribute("class", "beschreibung");
        newP.innerHTML = Aufgabe06.imVerkauf[i].Description;
        newDiv.appendChild(newP);
        //Button hinzugefügt 
        let newB = document.createElement("input");
        newB.addEventListener("click", handlerWarenkorb);
        newB.value = "In den Warenkorb";
        newB.type = "button";
        newB.setAttribute("articleIndex", i.toString());
        newDiv.appendChild(newB);
    }
    function handlerWarenkorb(_kaufen) {
        counter += 1;
        let target = _kaufen.target;
        let artIndex = parseInt(target.getAttribute("articleIndex"));
        gesamtPreis += Aufgabe06.imVerkauf[artIndex].price2;
        console.log("Lege " + Aufgabe06.imVerkauf[artIndex].Name.toString() + " in den Warenkorb");
        console.log("Aktueller Preis des Warenkorbs: " + gesamtPreis.toFixed(2) + "€");
        productCounter.style.display = "block";
        productCounter.innerHTML = "" + counter;
        document.getElementById("kartoffel1")?.setAttribute("style", "display : none");
    }
    function auswahlEinschreanken(_event) {
        let target = _event.target;
        let kategorie = target.getAttribute("href");
        switch (kategorie) {
            case "#1kartoffel": {
                document.getElementById("kartoffel1")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : none");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : none");
                break;
            }
            case "#2kartoffel": {
                document.getElementById("kartoffel1")?.setAttribute("style", "display : none");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : none");
                break;
            }
            case "#3kartoffel": {
                document.getElementById("kartoffel1")?.setAttribute("style", "display : none");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : none");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : block");
                break;
            }
            default: {
                document.getElementById("kartoffel1")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : block");
                break;
            }
        }
    }
    console.log("Fertig geladen");
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map