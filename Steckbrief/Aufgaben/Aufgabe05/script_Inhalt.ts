namespace Aufgabe05 {
    //Produkte Vorgabe
    console.log("Ich werde auch geladen");
    export interface Product {
        Name: string;
        Description: string;
        price1: number;
        price2: number;
        imgSrc: string;
        Art: string;
        Kategorie: string;
    }

    //#region Produkte
    //Festkochende

    export let linda: Product = {
        Name: "Linda",
        Description: "1 Kartoffel",
        price1: 4.55,
        price2: 7.98,
        imgSrc: "Bilder/Linda.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };

    export let annabel: Product = {
        Name: "Annabel",
        Description: "Werden Annabels nach der Kartoffel benannt oder die Kartoffel nach Annabels?",
        price1: 3.55,
        price2: 7.54,
        imgSrc: "Bilder/Annabel.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };

    export let marabel: Product = {
        Name: "Marabel",
        Description: "Eine weitere wunderbare Kartoffel",
        price1: 4.85,
        price2: 8.99,
        imgSrc: "Bilder/marabel.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };

    export let laratta: Product = {
        Name: "La Ratta",
        Description: "Perfekt für Ratatouille",
        price1: 4.98,
        price2: 8.88,
        imgSrc: "Bilder/Laratte.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };

    export let glorietta: Product = {
        Name: "Glorietta",
        Description: "Eine wirklich glorreiche Kartoffel!",
        price1: 4.55,
        price2: 9.99,
        imgSrc: "Bilder/glorietta.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };

    export let allians: Product = {
        Name: "Allians",
        Description: "Sie ist kein Allien!",
        price1: 4.98,
        price2: 8.99,
        imgSrc: "Bilder/allians.jpg",
        Art: "Kartoffel",
        Kategorie: "festkochend"
    };
    /*
    let trenner: Product = {
        Name: "",
        Description: "",
        price1: 0,
        price2: 0,
        imgSrc: "",
        Art: "trenner"
    }  */

    //Mehligkochend

    export let augusta: Product = {
        Name: "Augusta",
        Description: "Kann auch außerhalb vom August gegessen werden",
        price1: 4.55,
        price2: 9.45,
        imgSrc: "Bilder/augusta.jpg",
        Art: "Kartoffel",
        Kategorie: "mehligkochend"
    };

    export let adretta: Product = {
        Name: "Adretta",
        Description: "Eine ganz adrette Kartoffel",
        price1: 4.55,
        price2: 8.99,
        imgSrc: "Bilder/adretta.jpg",
        Art: "Kartoffel",
        Kategorie: "mehligkochend"
    };
    
    export let mehlig: Product = {
        Name: "Meh-lige Kartoffel",
        Description: "... meh",
        price1: 9.55,
        price2: 19.99,
        imgSrc: "Bilder/meh-lig.png",
        Art: "Kartoffel",
        Kategorie: "mehligkochend"
    };
    
    export let ackersegen: Product = {
        Name: "Ackersegen",
        Description: "Auch ein Segen für ihr Gericht",
        price1: 4.55,
        price2: 8.99,
        imgSrc: "Bilder/ACKERSEGEN.jpg",
        Art: "Kartoffel",
        Kategorie: "mehligkochend"
    };

    //Exoten

    export let roteemmalie: Product = {
        Name: "Rote Emmaile",
        Description: "Der Name sagt alles",
        price1: 4.55,
        price2: 8.99,
        imgSrc: "Bilder/roteemmalie.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
   
    export let violetta: Product = {
        Name: "Violetta",
        Description: "Keine Ahnung wie man nur auf diesen Namen kam",
        price1: 5.99,
        price2: 10.45,
        imgSrc: "Bilder/violetta.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
   
    export let blauerschwede: Product = {
        Name: "Blauer Schwede",
        Description: "Mit vielleicht ein bisschen Violett im Blau",
        price1: 6.45,
        price2: 11.45,
        imgSrc: "Bilder/congo-blauer-schwede.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
   
    export let heiderot: Product = {
        Name: "Heiderot",
        Description: "Sehr sehr Kartoffelig",
        price1: 4.55,
        price2: 8.90,
        imgSrc: "Bilder/heiderot.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
  
    export let laura: Product = {
        Name: "Laura",
        Description: "Man sollte nicht von der Schale auf das innere schließen",
        price1: 5.65,
        price2: 9.98,
        imgSrc: "Bilder/laura.jpg",
        Art: "Kartoffel",
        Kategorie: "exoten"
    };
   
    export let tannenzapfen: Product = {
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

    export let imVerkauf: Product[] = [linda, linda, mehlig,   annabel, marabel, laratta, glorietta, allians, augusta, mehlig, adretta, mehlig, ackersegen, mehlig, roteemmalie, violetta, blauerschwede, heiderot, laura, tannenzapfen];

    //#endregion


}