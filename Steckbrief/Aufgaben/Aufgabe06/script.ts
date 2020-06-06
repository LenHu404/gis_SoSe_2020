namespace Aufgabe06 {

    //#region Einfügen in Die Kategorien
    // Tut mir leid wer sich das hier anschauen muss

    //For-schleife für die Einsortierung in die Kategorie

    let _kategorie: string = "festkochend";
    let productCounter: HTMLDivElement = document.createElement("div");
    productCounter.setAttribute("id", "productCounter");
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
    let gesamtPreis: number = 0;
    let counter: number = 0;

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

        console.log(imVerkauf[i].Name, imVerkauf[i].imgSrc, imVerkauf[i].price1, imVerkauf[i].price2);

        //Estellen von Div Elementen 
        let newDiv: HTMLDivElement = document.createElement("div");

        //Div id zuweisen
        newDiv.id = "artikel" + _kategorie + i;
        newDiv.setAttribute("articleIndex", "i");

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
        newL.innerHTML = "Kilogramm:";
        newDiv.appendChild(newL);

        //Dropdownmenu hinzufügen
        let newSelect: HTMLSelectElement = document.createElement("select");
        newSelect.name = imVerkauf[i].Name;
        newSelect.id = imVerkauf[i].Name + "select";
        newDiv.appendChild(newSelect);

        //Option vom Dropdownmenu
        let newOp1: HTMLOptionElement = document.createElement("option");
        newOp1.value = "2.5";
        newOp1.innerHTML = "5 kg | " + imVerkauf[i].price1 + "€";
        let newOp2: HTMLOptionElement = document.createElement("option");
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
        newB.value = "In den Warenkorb";
        newB.type = "button";
        newB.setAttribute("articleIndex", i.toString());
        newDiv.appendChild(newB);

    }

    function handlerWarenkorb(_kaufen: Event): void {
        counter += 1;
        let target: HTMLInputElement = (<HTMLInputElement>_kaufen.target);
        let artIndex: number = parseInt(target.getAttribute("articleIndex")!);
        warenkorb[counter] = imVerkauf[artIndex];
        gesamtPreis += imVerkauf[artIndex].price2;
        console.log("Lege " + imVerkauf[artIndex].Name.toString() + " in den Warenkorb");
        console.log("Aktueller Preis des Warenkorbs: " + gesamtPreis.toFixed(2) + "€");
        productCounter.style.display = "block";
        productCounter.innerHTML = "" + counter;
    }

    function auswahlEinschreanken(_event: Event): void {
        let target: HTMLElement = (<HTMLElement>_event.target);
        let kategorie: string = target.getAttribute("href")!;
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
}
