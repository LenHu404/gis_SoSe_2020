"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    //#region Produkte
    //Festkochende
    Aufgabe06.linda = {
        Name: "Linda",
        Description: "1 Kartoffel",
        price1: 4.55,
        price2: 7.98,
        imgSrc: "Bilder/Linda.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };
    Aufgabe06.annabel = {
        Name: "Annabel",
        Description: "Werden Annabels nach der Kartoffel benannt oder die Kartoffel nach Annabels?",
        price1: 3.55,
        price2: 7.54,
        imgSrc: "Bilder/Annabel.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };
    Aufgabe06.marabel = {
        Name: "Marabel",
        Description: "Eine weitere wunderbare Kartoffel",
        price1: 4.85,
        price2: 8.99,
        imgSrc: "Bilder/marabel.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };
    Aufgabe06.laratta = {
        Name: "La Ratta",
        Description: "Perfekt für Ratatouille",
        price1: 4.98,
        price2: 8.88,
        imgSrc: "Bilder/Laratte.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };
    Aufgabe06.glorietta = {
        Name: "Glorietta",
        Description: "Eine wirklich glorreiche Kartoffel!",
        price1: 4.55,
        price2: 9.99,
        imgSrc: "Bilder/glorietta.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };
    Aufgabe06.allians = {
        Name: "Allians",
        Description: "Sie ist kein Allien!",
        price1: 4.98,
        price2: 8.99,
        imgSrc: "Bilder/allians.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };
    Aufgabe06.trenner = {
        Name: "Geschenk: Meh-lige Kartoffel",
        Description: "... meh",
        price1: 0,
        price2: 0,
        imgSrc: "Bilder/meh-lig.png",
        Art: "Kartoffel",
        Kategorie: "mehligkochend"
    };
    //Mehligkochend
    Aufgabe06.augusta = {
        Name: "Augusta",
        Description: "Kann auch außerhalb vom August gegessen werden",
        price1: 4.55,
        price2: 9.45,
        imgSrc: "Bilder/augusta.jpg",
        Art: "Kartoffel",
        Kategorie: "mehligkochend"
    };
    Aufgabe06.adretta = {
        Name: "Adretta",
        Description: "Eine ganz adrette Kartoffel",
        price1: 4.55,
        price2: 8.99,
        imgSrc: "Bilder/adretta.jpg",
        Art: "Kartoffel",
        Kategorie: "mehligkochend"
    };
    Aufgabe06.mehlig = {
        Name: "Meh-lige Kartoffel",
        Description: "... meh",
        price1: 9.55,
        price2: 19.99,
        imgSrc: "Bilder/meh-lig.png",
        Art: "Kartoffel",
        Kategorie: "mehligkochend"
    };
    Aufgabe06.ackersegen = {
        Name: "Ackersegen",
        Description: "Auch ein Segen für ihr Gericht",
        price1: 4.55,
        price2: 8.99,
        imgSrc: "Bilder/ACKERSEGEN.jpg",
        Art: "Kartoffel",
        Kategorie: "mehligkochend"
    };
    //Exoten
    Aufgabe06.roteemmalie = {
        Name: "Rote Emmaile",
        Description: "Der Name sagt alles",
        price1: 4.55,
        price2: 8.99,
        imgSrc: "Bilder/roteemmalie.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
    Aufgabe06.violetta = {
        Name: "Violetta",
        Description: "Keine Ahnung wie man nur auf diesen Namen kam",
        price1: 5.99,
        price2: 10.45,
        imgSrc: "Bilder/violetta.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
    Aufgabe06.blauerschwede = {
        Name: "Blauer Schwede",
        Description: "Mit vielleicht ein bisschen Violett im Blau",
        price1: 6.45,
        price2: 11.45,
        imgSrc: "Bilder/congo-blauer-schwede.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
    Aufgabe06.heiderot = {
        Name: "Heiderot",
        Description: "Sehr sehr Kartoffelig",
        price1: 4.55,
        price2: 8.90,
        imgSrc: "Bilder/heiderot.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
    Aufgabe06.laura = {
        Name: "Laura",
        Description: "Man sollte nicht von der Schale auf das innere schließen",
        price1: 5.65,
        price2: 9.98,
        imgSrc: "Bilder/laura.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
    Aufgabe06.tannenzapfen = {
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
    Aufgabe06.imVerkauf = [Aufgabe06.linda, Aufgabe06.annabel, Aufgabe06.marabel, Aufgabe06.laratta, Aufgabe06.glorietta, Aufgabe06.allians, Aufgabe06.augusta, Aufgabe06.mehlig, Aufgabe06.adretta, Aufgabe06.mehlig, Aufgabe06.ackersegen, Aufgabe06.mehlig, Aufgabe06.roteemmalie, Aufgabe06.violetta, Aufgabe06.blauerschwede, Aufgabe06.heiderot, Aufgabe06.laura, Aufgabe06.tannenzapfen];
    Aufgabe06.warenkorb = [Aufgabe06.trenner];
    //#endregion
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script_Inhalt.js.map