"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    //Produkte Vorgabe
    console.log("Hallo Welt");
    //#region Produkte
    //Festkochende
    let linda = {
        Name: "Linda",
        Description: "1 Kartoffel",
        price1: 4.55,
        price2: 7.98,
        imgSrc: "Bilder/Linda.jpg",
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
    let marabel = {
        Name: "Marabel",
        Description: "Eine weitere wunderbare Kartoffel",
        price1: 4.85,
        price2: 8.99,
        imgSrc: "Bilder/marabel.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };
    let laratta = {
        Name: "La Ratta",
        Description: "Perfekt für Ratatouille",
        price1: 4.98,
        price2: 8.88,
        imgSrc: "Bilder/Laratte.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };
    let glorietta = {
        Name: "Glorietta",
        Description: "Eine wirklich glorreiche Kartoffel!",
        price1: 4.55,
        price2: 9.99,
        imgSrc: "Bilder/glorietta.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };
    let allians = {
        Name: "Allians",
        Description: "Sie ist kein Allien!",
        price1: 4.98,
        price2: 8.99,
        imgSrc: "Bilder/allians.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };
    /*let trenner: Product = {
        Name: "",
        Description: "",
        price1: 0,
        price2: 0,
        imgSrc: "",
        Art: "trenner"
    } */
    //Mehligkochend
    let augusta = {
        Name: "Augusta",
        Description: "Kann auch außerhalb vom August gegessen werden",
        price1: 4.55,
        price2: 9.45,
        imgSrc: "Bilder/augusta.jpg",
        Art: "Kartoffel",
        Kategorie: "mehligkochend"
    };
    let adretta = {
        Name: "Adretta",
        Description: "Eine ganz adrette Kartoffel",
        price1: 4.55,
        price2: 8.99,
        imgSrc: "Bilder/adretta.jpg",
        Art: "Kartoffel",
        Kategorie: "mehligkochend"
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
    let ackersegen = {
        Name: "Ackersegen",
        Description: "Auch ein Segen für ihr Gericht",
        price1: 4.55,
        price2: 8.99,
        imgSrc: "Bilder/ACKERSEGEN.jpg",
        Art: "Kartoffel",
        Kategorie: "mehligkochend"
    };
    //Exoten
    let roteemmalie = {
        Name: "Rote Emmaile",
        Description: "Der Name sagt alles",
        price1: 4.55,
        price2: 8.99,
        imgSrc: "Bilder/roteemmalie.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
    let violetta = {
        Name: "Violetta",
        Description: "Keine Ahnung wie man nur auf diesen Namen kam",
        price1: 5.99,
        price2: 10.45,
        imgSrc: "Bilder/violetta.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
    let blauerschwede = {
        Name: "Blauer Schwede",
        Description: "Mit vielleicht ein bisschen Violett im Blau",
        price1: 6.45,
        price2: 11.45,
        imgSrc: "Bilder/congo-blauer-schwede.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
    let heiderot = {
        Name: "Heiderot",
        Description: "Sehr sehr Kartoffelig",
        price1: 4.55,
        price2: 8.90,
        imgSrc: "Bilder/heiderot.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
    let laura = {
        Name: "Laura",
        Description: "Man sollte nicht von der Schale auf das innere schließen",
        price1: 5.65,
        price2: 9.98,
        imgSrc: "Bilder/laura.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
    let tannenzapfen = {
        Name: "Rosa Tannenzapfen",
        Description: "Der Namensgeber hatte wohl kein Brille auf",
        price1: 4.55,
        price2: 8.98,
        imgSrc: "Bilder/kartoffelnrosatannenzapfen.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
    //#endregion
    //#region Einsortierung
    //Produktarrays
    let imVerkauf = [linda, annabel, marabel, laratta, glorietta, allians, augusta, adretta, mehlig, ackersegen, roteemmalie, violetta, blauerschwede, heiderot, laura, tannenzapfen];
    //#endregion
    //#region Einfügen in Die Kategorien
    // Tut mir leid wer sich das hier anschauen muss
    //For-schleife für Sektion: Festkochend
    let kategorie = "festkochend";
    for (let i = 0; i < imVerkauf.length; i++) {
        if (imVerkauf[i].Kategorie == "festkochend") {
            kategorie = "festkochend";
        }
        else if (imVerkauf[i].Kategorie == "mehligkochend") {
            kategorie = "mehligkochend";
        }
        else {
            kategorie = "exoten";
        }
        console.log(imVerkauf[i].Name, imVerkauf[i].imgSrc, imVerkauf[i].price1, imVerkauf[i].price2);
        //Estellen von Div Elementen 
        let newDiv = document.createElement("div");
        //Div id zuweisen
        newDiv.id = "artikel" + kategorie + i;
        //Element hinzufügen
        document.getElementById(kategorie)?.appendChild(newDiv);
        //Bild hinzufügen
        let newImg = document.createElement("img");
        newImg.src = imVerkauf[i].imgSrc;
        newImg.setAttribute("alt", imVerkauf[i].Art);
        document.getElementById("artikel" + kategorie + i)?.appendChild(newImg);
        //Label hinzufügen
        let newL = document.createElement("label");
        newL.setAttribute("for", imVerkauf[i].Name);
        newL.innerHTML = "Kilogramm:";
        document.getElementById("artikel" + kategorie + i)?.appendChild(newL);
        //Dropdownmenu hinzufügen
        let newSelect = document.createElement("select");
        newSelect.name = imVerkauf[i].Name;
        newSelect.id = imVerkauf[i].Name + "select";
        document.getElementById("artikel" + kategorie + i)?.appendChild(newSelect);
        //Option vom Dropdownmenu
        let newOp1 = document.createElement("option");
        newOp1.value = "2.5";
        newOp1.innerHTML = "5 kg | " + imVerkauf[i].price1 + "€";
        let newOp2 = document.createElement("option");
        newOp2.value = "5";
        newOp2.innerHTML = "5 kg | " + imVerkauf[i].price2 + "€";
        document.getElementById(imVerkauf[i].Name + "select")?.appendChild(newOp1);
        document.getElementById(imVerkauf[i].Name + "select")?.appendChild(newOp2);
        //Name hinzugefügt 
        let newName = document.createElement("p");
        newName.setAttribute("class", "Name");
        newName.innerText = imVerkauf[i].Name;
        document.getElementById("artikel" + kategorie + i)?.appendChild(newName);
        //beschreibung hinzugefügt 
        let newP = document.createElement("p");
        newP.setAttribute("class", "beschreibung");
        newP.innerHTML = imVerkauf[i].Description;
        document.getElementById("artikel" + kategorie + i)?.appendChild(newP);
        //Button hinzugefügt 
        let newB = document.createElement("input");
        newB.value = "In den Warenkorb";
        newB.type = "button";
        document.getElementById("artikel" + kategorie + i)?.appendChild(newB);
    }
    console.log("Fertig geladen");
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map