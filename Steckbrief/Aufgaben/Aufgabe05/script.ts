//Ich würds nicht kopieren, ist nicht wirklich ausgereift
namespace Aufgabe05 {
//Produkteinführung
    console.log("Hallo Welt");
    interface Product {
        Name: String;
        Description: String;
        price1: number;
        price2: number;
        imgSrc: String;
        Art: String;
    }

    //Festkochende

    let linda: Product = {
        Name: "Linda",
        Description: "1 Kartoffel",
        price1: 4.55,
        price2: 7.98,
        imgSrc: "Bilder/Linda.jpg",
        Art: "Kartoffel"
    };

    let annabel: Product = {
        Name: "Annabel",
        Description: "Werden Annabels nach der Kartoffel benannt oder die Kartoffel nach Annabels?",
        price1: 3.55,
        price2: 7.54,
        imgSrc: "Bilder/Annabel.jpg",
        Art: "Kartoffel"
    };

    let marabel: Product = {
        Name: "Marabel",
        Description: "Eine weitere wunderbare Kartoffel",
        price1: 4.85,
        price2: 8.99,
        imgSrc: "Bilder/marabel.jpg",
        Art: "Kartoffel"
    };

    let laratta: Product = {
        Name: "La Ratta",
        Description: "Perfekt für Ratatouille",
        price1: 4.98,
        price2: 8.88,
        imgSrc: "Bilder/Laratte.jpg",
        Art: "Kartoffel"
    };

    let glorietta: Product = {
        Name: "Glorietta",
        Description: "Eine wirklich glorreiche Kartoffel!",
        price1: 4.55,
        price2: 9.99,
        imgSrc: "Bilder/glorietta.jpg",
        Art: "Kartoffel"
    };

    let allians: Product = {
        Name: "Allians",
        Description: "Sie ist kein Allien!",
        price1: 4.98,
        price2: 8.99,
        imgSrc: "Bilder/allians.jpg",
        Art: "Kartoffel"
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

    let augusta: Product = {
        Name: "Augusta",
        Description: "Kann auch außerhalb vom August gegessen werden",
        price1: 4.55,
        price2: 9.45,
        imgSrc: "Bilder/augusta.jpg",
        Art: "Kartoffel"
    };

    let adretta: Product = {
        Name: "Adretta",
        Description: "Eine ganz adrette Kartoffel",
        price1: 4.55,
        price2: 8.99,
        imgSrc: "Bilder/adretta.jpg",
        Art: "Kartoffel"
    };
    let mehlig: Product = {
        Name: "Meh-lige Kartoffel",
        Description: "... meh",
        price1: 9.55,
        price2: 19.99,
        imgSrc: "Bilder/meh-lig.png",
        Art: "Kartoffel"
    };
    let ackersegen: Product = {
        Name: "Ackersegen",
        Description: "Auch ein Segen für ihr Gericht",
        price1: 4.55,
        price2: 8.99,
        imgSrc: "Bilder/ACKERSEGEN.jpg",
        Art: "Kartoffel"
    };

    //Exoten

    let roteemmalie: Product = {
        Name: "Rote Emmaile",
        Description: "Der Name sagt alles",
        price1: 4.55,
        price2: 8.99,
        imgSrc: "Bilder/roteemmalie.jpg",
        Art: "Kartoffel"
    };
    let violetta: Product = {
        Name: "Violetta",
        Description: "Keine Ahnung wie man nur auf diesen Namen kam",
        price1: 5.99,
        price2: 10.45,
        imgSrc: "Bilder/violetta.jpg",
        Art: "Kartoffel"
    };
    let blauerschwede: Product = {
        Name: "Blauer Schwede",
        Description: "Mit vielleicht ein bisschen Violett im Blau",
        price1: 6.45,
        price2: 11.45,
        imgSrc: "Bilder/congo-blauer-schwede.jpg",
        Art: "Kartoffel"
    };
    let heiderot: Product = {
        Name: "Heiderot",
        Description: "Sehr sehr Kartoffelig",
        price1: 4.55,
        price2: 8.90,
        imgSrc: "Bilder/heiderot.jpg",
        Art: "Kartoffel"
    };
    let laura: Product = {
        Name: "Laura",
        Description: "Man sollte nicht von der Schale auf das innere schließen",
        price1: 5.65,
        price2: 9.98,
        imgSrc: "Bilder/laura.jpg",
        Art: "Kartoffel"
    };
    let tannenzapfen: Product = {
        Name: "Rosa Tannenzapfen",
        Description: "Der Namensgeber hatte wohl kein Brille auf",
        price1: 4.55,
        price2: 8.98,
        imgSrc: "Bilder/kartoffelnrosatannenzapfen.jpg",
        Art: "Kartoffel"
    };
    

    //Produktarrays

    let festkochend: Product[] = [linda, annabel, marabel, laratta, glorietta, allians, /* Trenner zw f. & m.  trenner, augusta*/];
    let mehligkochend: Product[] = [augusta, adretta, mehlig, ackersegen];
    let exoten: Product[] = [roteemmalie, violetta, blauerschwede, heiderot, laura, tannenzapfen]

    //For-schleife für Sektion: Festkochend
    let node: any = document.getElementById("festkochend");
    let childNodeHTML: String;

    for (let i: number = 0; i < festkochend.length; i++) {
        if (festkochend[i].Art == "trenner") {
            childNodeHTML = "</div>  </section>";

            childNodeHTML += "<section id='kartoffel2'>";
            childNodeHTML += "<h2 id='2kartoffel'>Mehligkochende Kartoffeln</h2>";

            childNodeHTML += "<div class='Angebot' id='mehligkochend'>";
            node.innerHTML += childNodeHTML;
            continue;
        }
        console.log(festkochend[i].Name, festkochend[i].imgSrc, festkochend[i].price1, festkochend[i].price2);

        childNodeHTML = "";
        childNodeHTML += "<div>";
        childNodeHTML += "<img src='" + festkochend[i].imgSrc + "' alt='" + festkochend[i].Art + "'>";
        childNodeHTML += "<label for=" + festkochend[i].Name + ">Kilogramm:</label>";
        childNodeHTML += "<select name=" + festkochend[i].Name + " id=" + festkochend[i].Name + ">";
        childNodeHTML += "<option value = '2.5'> 2, 5 kg | " + festkochend[i].price1 + "€ </option>";
        childNodeHTML += "<option value = '5.0'> 5, 0 kg | " + festkochend[i].price2 + " </option>";
        childNodeHTML += "</select>";
        childNodeHTML += "<p class = 'Name'>" + festkochend[i].Name + "</p>";
        childNodeHTML += "<p class='beschreibung'>" + festkochend[i].Description + "</p>";
        childNodeHTML += "<input type='button' value='In den Warenkorb'>";
        childNodeHTML += "</div>";

        node.innerHTML += childNodeHTML;

        /*    //Estellen von Div Elementen 
            let newDiv: object = document.createElement("div");
            //Div id zuweisen
            newDiv.id = "atikel" + i;
            //Element hinzufügen
            document.getElementById("Angebot1")?.appendChild(newDiv);
            //Bild hinzufügen
            let newImg: String = document.createElement("img");
            newImg.src = festkochend[i].imgSrc;
            document.getElementById("atikelH" + i)?.appendChild(newImg);
            //Name hinzugefügt 
            let newH = document.createElement("h2");
            newH.innerHTML = festkochend[i].Name;
            document.getElementById("atikelH" + i)?.appendChild(newH);
            //beschreibung hinzugefügt 
            let newP = document.createElement("p");
            newP.innerHTML = festkochend[i].Description;
            document.getElementById("atikelH" + i)?.appendChild(newP);
            //Preis hinzugefügt 
            let newPreis = document.createElement("p");
            newPreis.innerHTML = festkochend[i].price1;
            document.getElementById("atikelH" + i)?.appendChild(newPreis);
            //Button hinzugefügt 
            let newB = document.createElement("input");
            newB.value = "Kaufen";
            newB.type = "submit";
            document.getElementById("atikelH" + i)?.appendChild(newB);
    */
    }

    //For-schleife für Sektion: Mehligkochend
    let node2: any = document.getElementById("mehligkochend");
    let childNodeHTML2: String;

    for (let i: number = 0; i < mehligkochend.length; i++) {
        console.log(mehligkochend[i].Name, mehligkochend[i].imgSrc, mehligkochend[i].price1, mehligkochend[i].price2);

        childNodeHTML2 = "";
        childNodeHTML2 += "<div>";
        childNodeHTML2 += "<img src='" + mehligkochend[i].imgSrc + "' alt='" + mehligkochend[i].Art + "'>";
        childNodeHTML2 += "<label for=" + mehligkochend[i].Name + ">Kilogramm:</label>";
        childNodeHTML2 += "<select name=" + mehligkochend[i].Name + " id=" + mehligkochend[i].Name + ">";
        childNodeHTML2 += "<option value = '2.5'> 2, 5 kg | " + mehligkochend[i].price1 + "€ </option>";
        childNodeHTML2 += "<option value = '5.0'> 5, 0 kg | " + mehligkochend[i].price2 + " </option>";
        childNodeHTML2 += "</select>";
        childNodeHTML2 += "<p class = 'Name'>" + mehligkochend[i].Name + "</p>";
        childNodeHTML2 += "<p class='beschreibung'>" + mehligkochend[i].Description + "</p>";
        childNodeHTML2 += "<input type='button' value='In den Warenkorb'>";
        childNodeHTML2 += "</div>";

        node2.innerHTML += childNodeHTML2;

       
    }

    //For-schleife für Sektion: Exoten
    let node3: any = document.getElementById("exoten");
    let childNodeHTML3: String;

    for (let i: number = 0; i < festkochend.length; i++) {
        console.log(exoten[i].Name, exoten[i].imgSrc, exoten[i].price1, exoten[i].price2);

        childNodeHTML3 = "";
        childNodeHTML3 += "<div>";
        childNodeHTML3 += "<img src='" + exoten[i].imgSrc + "' alt='" + exoten[i].Art + "'>";
        childNodeHTML3 += "<label for=" + exoten[i].Name + ">Kilogramm:</label>";
        childNodeHTML3 += "<select name=" + exoten[i].Name + " id=" + exoten[i].Name + ">";
        childNodeHTML3 += "<option value = '2.5'> 2, 5 kg | " + exoten[i].price1 + "€ </option>";
        childNodeHTML3 += "<option value = '5.0'> 5, 0 kg | " + exoten[i].price2 + " </option>";
        childNodeHTML3 += "</select>";
        childNodeHTML3 += "<p class = 'Name'>" + exoten[i].Name + "</p>";
        childNodeHTML3 += "<p class='beschreibung'>" + exoten[i].Description + "</p>";
        childNodeHTML3 += "<input type='button' value='In den Warenkorb'>";
        childNodeHTML3 += "</div>";

        node3.innerHTML += childNodeHTML3;

    }
    console.log("Fertig geladen");
}
