namespace Aufgabe06 {

    //#region Einfügen in Die Kategorien
    // Tut mir leid wer sich das hier anschauen muss

    //For-schleife für die Einsortierung in die Kategorie

    let _kategorie: string = "festkochend";
    let productCounter: HTMLDivElement = document.createElement("div");
    productCounter.setAttribute("id", "productCounter");

    //Eventlistener zu den einzelnen Elementen hinzufügen
    document.getElementById("konto")?.appendChild(productCounter);
    document.getElementById("zuKartoffel1")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("zuKartoffel2")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("zuKartoffel3")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("homeKartoffel")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("prio")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("top")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("navbarKartoffel1")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("navbarKartoffel2")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("navbarKartoffel3")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("showAll")?.addEventListener("click", auswahlEinschreanken);
    document.getElementById("zumWarenkorb")?.addEventListener("click", warenkorbAufbauen);
    document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");

    //Variablen deklarieren und initialisieren
    let gesamtPreis: number = 0;
    let counter: number = 0;

    //Produkte, zum Verkauf stehen erstellen
    for (let i: number = 0; i < imVerkauf.length; i++) {
        productCounter.style.display = "none";

        //Einsortierung in die passende Kategorie
        if (imVerkauf[i].Kategorie == "festkochend") {
            _kategorie = "festkochend";
        } else if (imVerkauf[i].Kategorie == "mehligkochend") {
            _kategorie = "mehligkochend";
        } else {
            _kategorie = "exoten";
        }

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
        newDiv.appendChild(newImg);

        //Label hinzufügen
        let newL: HTMLLabelElement = document.createElement("label");
        newL.setAttribute("for", imVerkauf[i].Name);
        newL.innerHTML = "Kilogramm: ";
        newDiv.appendChild(newL);

        //Dropdownmenu hinzufügen
        let newSelect: HTMLSelectElement = document.createElement("select");
        newSelect.setAttribute("class", "option");
        newSelect.name = imVerkauf[i].Name;
        newSelect.id = imVerkauf[i].Name + "select";
        newDiv.appendChild(newSelect);

        //Option vom Dropdownmenu
        let newOp1: HTMLOptionElement = document.createElement("option");
        newOp1.value = "2.5";
        newOp1.innerHTML = "5 kg | " + imVerkauf[i].price1 + "€";
        let newOp2: HTMLOptionElement = document.createElement("option");
        // newOp2.setAttribute("class", "option");
        newOp2.value = "5";
        newOp2.innerHTML = "10 kg | " + imVerkauf[i].price2 + "€";
        newSelect.appendChild(newOp1);
        newSelect.appendChild(newOp2);

        //Name hinzugefügt 
        let newName: HTMLParagraphElement = document.createElement("p");
        newName.setAttribute("class", "Name");
        newName.innerText = imVerkauf[i].Name;
        newDiv.appendChild(newName);

        //Beschreibung hinzugefügt 
        let newP: HTMLParagraphElement = document.createElement("p");
        newP.setAttribute("class", "beschreibung");
        newP.innerHTML = imVerkauf[i].Description;
        newDiv.appendChild(newP);

        //Button hinzugefügt 
        let newB: HTMLInputElement = document.createElement("input");
        newB.addEventListener("click", handlerWarenkorb);
        newB.setAttribute("class", "button");
        newB.value = "In den Warenkorb";
        newB.type = "button";
        newB.setAttribute("articleIndex", i.toString());
        newDiv.appendChild(newB);


    }


    //Funktion um Preis des Warenkorbs zu berechnen, klappt aber nicht, da Elemente nicht aus dem Array gelöscht werden können
    function preisBerechnung(): number {
        let preis: number = 0;
        for (let i: number = 0; i < warenkorb.length; i++) {

            preis += warenkorb[i].price1;
        }
        return preis;

    }

    //Funktion um den Elemente dem Warenkorb hinzu zu fügen
    function handlerWarenkorb(_kaufen: Event): void {
        counter += 1;
        let target: HTMLInputElement = (<HTMLInputElement>_kaufen.target);
        let artIndex: number = parseInt(target.getAttribute("articleIndex")!);
        warenkorb[counter] = imVerkauf[artIndex];
        gesamtPreis = 0;
        for (let i: number = 1; i < warenkorb.length; i++) {
            gesamtPreis += warenkorb[i].price1;
        }
        console.log("Lege " + imVerkauf[artIndex].Name.toString() + " in den Warenkorb");
        try {
            console.log("Aktueller Preis des Warenkorbs: " + preisBerechnung().toFixed(2) + "€");
        } catch (error) {
            console.log("Aktueller Preis des Warenkorbs: " + gesamtPreis.toFixed(2) + "€");
        }

        productCounter.style.display = "block";
        productCounter.innerHTML = "" + counter;
    }

    //Filtert die anderen Kategorien aus bzw. lässt Kategorien aus- und einblenden
    function auswahlEinschreanken(_event: Event): void {
        if (counter == 0) {
            productCounter.style.display = "none";
        }
        let target: HTMLElement = (<HTMLElement>_event.target);
        let kategorie: string = target.getAttribute("href")!;
        switch (kategorie) {
            case "#1kartoffel": {
                document.getElementById("kartoffel1")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : none");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : none");
                document.getElementById("showAll")?.setAttribute("style", "display : block");
                document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");

                break;
            }
            case "#2kartoffel": {
                document.getElementById("kartoffel1")?.setAttribute("style", "display : none");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : none");
                document.getElementById("showAll")?.setAttribute("style", "display : block");
                document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");

                break;
            }
            case "#3kartoffel": {
                document.getElementById("kartoffel1")?.setAttribute("style", "display : none");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : none");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : block");
                document.getElementById("showAll")?.setAttribute("style", "display : block");
                document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");
                break;
            }
            default: {
                document.getElementById("kartoffel1")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : block");
                document.getElementById("showAll")?.setAttribute("style", "display : none");
                document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");
                break;
            }
        }


    }

    //Warenkorb aufbauen und updaten 
    function warenkorbAufbauen(): void {
        document.getElementById("kartoffel1")?.setAttribute("style", "display : none");
        document.getElementById("kartoffel2")?.setAttribute("style", "display : none");
        document.getElementById("kartoffel3")?.setAttribute("style", "display : none");
        document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : block");
        for (let i: number = 0; i < warenkorb.length; i++) {
            if (!document.getElementById("WarenkorbItem" + i.toString())) {
                if (warenkorb[i] != null) {
                    //Estellen von Div Elementen 
                    let newDiv: HTMLDivElement = document.createElement("div");

                    //Div id zuweisen
                    newDiv.setAttribute("articleIndex", i.toString());
                    newDiv.setAttribute("id", "WarenkorbItem" + i.toString());

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
                    newOp2.innerHTML = "5 kg | " + warenkorb[i].price2 + "€";
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
                    newB.addEventListener("click", handlerWarenkorbEntfernen);
                    newB.setAttribute("class", "button");
                    newB.value = "entfernen";
                    newB.type = "button";
                    newB.setAttribute("articleIndex", i.toString());
                    newDiv.appendChild(newB);

                    productCounter.style.display = "block";
                }
            }
            try {
                document.getElementById("4kartoffel")!.innerHTML = "Aktueller Betrag: " + preisBerechnung().toFixed(2).toString() + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'>";
            } catch (error) {
                document.getElementById("4kartoffel")!.innerHTML = "Aktueller Betrag: " + gesamtPreis.toFixed(2).toString() + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'>";
            }

        }

        // Produkte aus dem Warenkorb nehmen und aktuellen Preis berechnen

    }

    function handlerWarenkorbEntfernen(_kaufen: Event): void {
        if (counter > 0)
            counter -= 1;
        let target: HTMLInputElement = (<HTMLInputElement>_kaufen.target);
        let artIndex: number = parseInt(target.getAttribute("articleIndex")!);
        console.log("Nehme " + warenkorb[artIndex].Name.toString() + " aus dem Warenkorb");

        if (gesamtPreis - warenkorb[artIndex].price1 <= 0)
            gesamtPreis = 0;
        if (gesamtPreis > 0)
            gesamtPreis -= warenkorb[artIndex].price1;
        else
            gesamtPreis = 0;

        document.getElementById("WarenkorbItem" + artIndex)?.remove();

        productCounter.style.display = "block";
        productCounter.innerHTML = "" + counter;
        warenkorb.splice(artIndex, 1);
        try {
            console.log("Aktueller Preis des Warenkorbs: " + preisBerechnung().toFixed(2) + "€");
        } catch (error) {
            console.log("Aktueller Preis des Warenkorbs: " + gesamtPreis.toFixed(2) + "€");
        }
        try {
            document.getElementById("4kartoffel")!.innerHTML = "Aktueller Betrag: " + preisBerechnung().toFixed(2).toString() + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'>";
        } catch (error) {
            document.getElementById("4kartoffel")!.innerHTML = "Aktueller Betrag: " + gesamtPreis.toFixed(2).toString() + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'>";
        }
        for (let i: number = 0; i < warenkorb.length; i++) {
            document.getElementById("WarenkorbItem" + i)?.remove();
        }
        warenkorbAufbauen();
    }
    console.log("Fertig geladen");
}




