namespace Aufgabe05 {

    //#region Einfügen in Die Kategorien
    // Tut mir leid wer sich das hier anschauen muss

    //For-schleife für die Einsortierung in die Kategorie

    let _kategorie: string = "festkochend";

    for (let i: number = 0; i < imVerkauf.length; i++) {

        //Einsortierung in die passende Kategorie
        if (imVerkauf[i].Kategorie == "festkochend") {
            _kategorie = "festkochend";
        } else if (imVerkauf[i].Kategorie == "mehligkochend") {
            _kategorie = "mehligkochend";
        } else {
            _kategorie = "exoten";
        }

        console.log(imVerkauf[i].Name, imVerkauf[i].imgSrc, imVerkauf[i].price1, imVerkauf[i].price2);

        //Estellen von Div Elementen 
        let newDiv: HTMLDivElement = document.createElement("div");
        //Div id zuweisen
        newDiv.id = "artikel" + _kategorie + i;
        //Element hinzufügen
        document.getElementById(_kategorie)?.appendChild(newDiv);
        //Bild hinzufügen
        let newImg: HTMLImageElement = document.createElement("img");
        newImg.src = imVerkauf[i].imgSrc;
        newImg.setAttribute("alt", imVerkauf[i].Art);
        document.getElementById("artikel" + _kategorie + i)?.appendChild(newImg);
        //Label hinzufügen
        let newL: HTMLLabelElement = document.createElement("label");
        newL.setAttribute("for", imVerkauf[i].Name);
        newL.innerHTML = "Kilogramm:";
        document.getElementById("artikel" + _kategorie + i)?.appendChild(newL);
        //Dropdownmenu hinzufügen
        let newSelect: HTMLSelectElement = document.createElement("select");
        newSelect.name = imVerkauf[i].Name;
        newSelect.id = imVerkauf[i].Name + "select";
        document.getElementById("artikel" + _kategorie + i)?.appendChild(newSelect);
        //Option vom Dropdownmenu
        let newOp1: HTMLOptionElement = document.createElement("option");
        newOp1.value = "2.5";
        newOp1.innerHTML = "5 kg | " + imVerkauf[i].price1 + "€";
        let newOp2: HTMLOptionElement = document.createElement("option");
        newOp2.value = "5";
        newOp2.innerHTML = "5 kg | " + imVerkauf[i].price2 + "€";
        document.getElementById(imVerkauf[i].Name + "select")?.appendChild(newOp1);
        document.getElementById(imVerkauf[i].Name + "select")?.appendChild(newOp2);
        //Name hinzugefügt 
        let newName: HTMLParagraphElement = document.createElement("p");
        newName.setAttribute("class", "Name");
        newName.innerText = imVerkauf[i].Name;
        document.getElementById("artikel" + _kategorie + i)?.appendChild(newName);
        //Beschreibung hinzugefügt 
        let newP: HTMLParagraphElement = document.createElement("p");
        newP.setAttribute("class", "beschreibung");
        newP.innerHTML = imVerkauf[i].Description;
        document.getElementById("artikel" + _kategorie + i)?.appendChild(newP);
        //Button hinzugefügt 
        let newB: HTMLInputElement = document.createElement("input");
        newB.value = "In den Warenkorb";
        newB.type = "button";
        document.getElementById("artikel" + _kategorie + i)?.appendChild(newB);

    }
    
    console.log("Fertig geladen");
}
