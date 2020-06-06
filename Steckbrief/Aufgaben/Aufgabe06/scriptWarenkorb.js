"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    //#region Einfügen in Die Kategorien
    // Tut mir leid wer sich das hier anschauen muss
    //For-schleife für die Einsortierung in die Kategorie
    let productCounter = document.createElement("div");
    productCounter.setAttribute("id", "productCounter");
    document.getElementById("konto")?.appendChild(productCounter);
    document.getElementById("prio")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("top")?.addEventListener("click", auswahlEinschreanken);
    let gesamtPreis = 0;
    let counter = 0;
    for (let i = 0; i < Aufgabe06.warenkorb.length; i++) {
        productCounter.style.display = "none";
        console.log(Aufgabe06.warenkorb[i].Name, Aufgabe06.warenkorb[i].imgSrc, Aufgabe06.warenkorb[i].price1, Aufgabe06.warenkorb[i].price2);
        //Estellen von Div Elementen 
        let newDiv = document.createElement("div");
        //Div id zuweisen
        newDiv.setAttribute("articleIndex", "i");
        //Element hinzufügen
        document.getElementById("kartoffel1")?.appendChild(newDiv);
        //Bild hinzufügen
        let newImg = document.createElement("img");
        newImg.src = Aufgabe06.warenkorb[i].imgSrc;
        newImg.setAttribute("alt", Aufgabe06.warenkorb[i].Art);
        newDiv.appendChild(newImg);
        //Label hinzufügen
        let newL = document.createElement("label");
        newL.setAttribute("for", Aufgabe06.warenkorb[i].Name);
        newL.innerHTML = "Kilogramm:";
        newDiv.appendChild(newL);
        //Dropdownmenu hinzufügen
        let newSelect = document.createElement("select");
        newSelect.name = Aufgabe06.warenkorb[i].Name;
        newSelect.id = Aufgabe06.warenkorb[i].Name + "select";
        newDiv.appendChild(newSelect);
        //Option vom Dropdownmenu
        let newOp1 = document.createElement("option");
        newOp1.value = "2.5";
        newOp1.innerHTML = "5 kg | " + Aufgabe06.warenkorb[i].price1 + "€";
        let newOp2 = document.createElement("option");
        newOp2.value = "5";
        newOp2.innerHTML = "5 kg | " + Aufgabe06.warenkorb[i].price2 + "€";
        newSelect.appendChild(newOp1);
        newSelect.appendChild(newOp2);
        //Name hinzugefügt 
        let newName = document.createElement("p");
        newName.setAttribute("class", "Name");
        newName.innerText = Aufgabe06.warenkorb[i].Name;
        newDiv.appendChild(newName);
        //Beschreibung hinzugefügt 
        let newP = document.createElement("p");
        newP.setAttribute("class", "beschreibung");
        newP.innerHTML = Aufgabe06.warenkorb[i].Description;
        newDiv.appendChild(newP);
        //Button hinzugefügt 
        let newB = document.createElement("input");
        newB.addEventListener("click", handlerWarenkorb);
        newB.value = "entfernen";
        newB.type = "button";
        newB.setAttribute("articleIndex", i.toString());
        newDiv.appendChild(newB);
    }
    function handlerWarenkorb(_kaufen) {
        counter += 1;
        let target = _kaufen.target;
        let artIndex = parseInt(target.getAttribute("articleIndex"));
        gesamtPreis += Aufgabe06.warenkorb[artIndex].price2;
        console.log("Lege " + Aufgabe06.warenkorb[artIndex].Name.toString() + " in den Warenkorb");
        console.log("Aktueller Preis des Warenkorbs: " + gesamtPreis.toFixed(2) + "€");
        productCounter.style.display = "block";
        productCounter.innerHTML = "" + counter;
    }
    function auswahlEinschreanken(_event) {
        let target = _event.target;
        let kategorie = target.getAttribute("href");
        switch (kategorie) {
            case "#1kartoffel": {
                document.getElementById("kartoffel1")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : none");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : none");
                document.getElementById("showAll")?.setAttribute("style", "display : block");
                break;
            }
            case "#2kartoffel": {
                document.getElementById("kartoffel1")?.setAttribute("style", "display : none");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : none");
                document.getElementById("showAll")?.setAttribute("style", "display : block");
                break;
            }
            case "#3kartoffel": {
                document.getElementById("kartoffel1")?.setAttribute("style", "display : none");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : none");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : block");
                document.getElementById("showAll")?.setAttribute("style", "display : block");
                break;
            }
            default: {
                document.getElementById("kartoffel1")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : block");
                document.getElementById("showAll")?.setAttribute("style", "display : none");
                break;
            }
        }
    }
    console.log("Fertig geladen");
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=scriptWarenkorb.js.map