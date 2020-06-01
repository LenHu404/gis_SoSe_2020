"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    //#region Einfügen in Die Kategorien
    // Tut mir leid wer sich das hier anschauen muss
    //For-schleife für die Einsortierung in die Kategorie
    let _kategorie = "festkochend";
    for (let i = 0; i < Aufgabe05.imVerkauf.length; i++) {

        //Einsortierung in die passende Kategorie
        if (Aufgabe05.imVerkauf[i].Kategorie == "festkochend") {
            _kategorie = "festkochend";
        }
        else if (Aufgabe05.imVerkauf[i].Kategorie == "mehligkochend") {
            _kategorie = "mehligkochend";
        }
        else {
            _kategorie = "exoten";
        }
        console.log(Aufgabe05.imVerkauf[i].Name, Aufgabe05.imVerkauf[i].imgSrc, Aufgabe05.imVerkauf[i].price1, Aufgabe05.imVerkauf[i].price2);
       
        //Estellen von Div Elementen 
        let newDiv = document.createElement("div");
      
        //Div id zuweisen
        newDiv.id = "artikel" + _kategorie + i;
      
        //Element hinzufügen
        document.getElementById(_kategorie)?.appendChild(newDiv);
      
        //Bild hinzufügen
        let newImg = document.createElement("img");
        newImg.src = Aufgabe05.imVerkauf[i].imgSrc;
        newImg.setAttribute("alt", Aufgabe05.imVerkauf[i].Art);
        newDiv.appendChild(newImg);
      
        //Label hinzufügen
        let newL = document.createElement("label");
        newL.setAttribute("for", Aufgabe05.imVerkauf[i].Name);
        newL.innerHTML = "Kilogramm:";
        newDiv.appendChild(newL);
      
        //Dropdownmenu hinzufügen
        let newSelect = document.createElement("select");
        newSelect.name = Aufgabe05.imVerkauf[i].Name;
        newSelect.id = Aufgabe05.imVerkauf[i].Name + "select";
        newDiv.appendChild(newSelect);
        
        //Option vom Dropdownmenu
        let newOp1 = document.createElement("option");
        newOp1.value = "2.5";
        newOp1.innerHTML = "5 kg | " + Aufgabe05.imVerkauf[i].price1 + "€";
        let newOp2 = document.createElement("option");
        newOp2.value = "5";
        newOp2.innerHTML = "5 kg | " + Aufgabe05.imVerkauf[i].price2 + "€";
        newSelect.appendChild(newOp1);
        newSelect.appendChild(newOp2);
     
        //Name hinzugefügt 
        let newName = document.createElement("p");
        newName.setAttribute("class", "Name");
        newName.innerText = Aufgabe05.imVerkauf[i].Name;
        newDiv.appendChild(newName);
      
        //Beschreibung hinzugefügt 
        let newP = document.createElement("p");
        newP.setAttribute("class", "beschreibung");
        newP.innerHTML = Aufgabe05.imVerkauf[i].Description;
        newDiv.appendChild(newP);
     
        //Button hinzugefügt 
        let newB = document.createElement("input");
        newB.value = "In den Warenkorb";
        newB.type = "button";
        newDiv.appendChild(newB);
    }
    
    console.log("Fertig geladen");
    
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map