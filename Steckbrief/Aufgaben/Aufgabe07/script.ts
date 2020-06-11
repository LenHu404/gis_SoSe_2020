namespace Aufgabe07 {

    interface Product {
        Name: string;
        Description: string;
        price1: number;
        price2: number;
        imgSrc: string;
        Art: string;
        Kategorie: string;
    }

    //#region Einfügen in Die Kategorien
    // Tut mir leid wer sich das hier anschauen muss



    let _kategorie: string = "festkochend";
    let productCounter: HTMLDivElement = document.createElement("div");
    productCounter.setAttribute("id", "productCounter");


    //JSON-Datei laden
    export let imVerkauf: Product[] = [];
    export let gesamtPreis: number = 0;

    export let counter: number = 0;
    if (parseInt(localStorage.getItem("counter")!))
        counter = 0;
    else
        counter = parseInt(localStorage.getItem("counter")!);

    //Eventlistener zu den einzelnen Elementen hinzufügen
    function addEventListener(): void {
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
        //document.getElementById("zumWarenkorb")?.addEventListener("click", warenkorbAufbauen);
        document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");
    }



    //Globale Variablen deklarieren und initialisieren
    

    //Produkte, welche zum Verkauf stehen, erstellen
    async function init(): Promise<void> {
        await communicate("https://lenhu404.github.io/gis_SoSe_2020/Steckbrief/Aufgaben/Aufgabe07/artikel.json");
        addEventListener();
        counter = parseInt(localStorage.getItem("counter")!);

        if (!parseInt(localStorage.getItem("counter")!))
            counter = parseInt(localStorage.getItem("counter")!);

        else
            localStorage.setItem("counter", counter.toString());

        if (parseInt(localStorage.getItem("counter")!) == 0) {
            productCounter.style.display = "none";
        }
        else
            productCounter.style.display = "block";


        //For-schleife für die Einsortierung in die Kategorie
        for (let i: number = 0; i < imVerkauf.length; i++) {
            

            if (counter == 0) {
                productCounter.style.display = "none";
            }
            else
                productCounter.style.display = "block";

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
            newDiv.id = "artikel" + i;
            newDiv.setAttribute("kategorie", _kategorie.toString());

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
    }

    //Funktion um Preis des Warenkorbs zu berechnen,
    // klappt aber nur Teilweise, da sie manchmal auf einen Index im Array zugreifen will der nicht mehr da ist

    //Funktion um den Elemente dem Warenkorb hinzu zu fügen
    function handlerWarenkorb(_kaufen: Event): void {

        if (parseInt(localStorage.getItem("counter")!) >= 0)
            counter = parseInt(localStorage.getItem("counter")!);

        else
            counter = 0;

        if (parseInt(localStorage.getItem("counter")!) == 0) {
            productCounter.style.display = "none";
        }
        else
            productCounter.style.display = "block";

        let target: HTMLInputElement = (<HTMLInputElement>_kaufen.target);
        let artIndex: number = parseInt(target.getAttribute("articleIndex")!);
        gesamtPreis += imVerkauf[artIndex].price1;

        localStorage.setItem("Artikel" + counter, artIndex.toString());
        console.log(imVerkauf[parseInt(localStorage.getItem("Artikel" + counter)!)].Name);
        console.log(counter);

        console.log("Lege " + imVerkauf[artIndex].Name.toString() + " in den Warenkorb");
        try {
            console.log("Aktueller Preis des Warenkorbs: " + preisBerechnung().toFixed(2) + "€");
        } catch (error) {
            console.log("Aktueller Preis des Warenkorbs: " + gesamtPreis.toFixed(2) + "€");
        }

        counter += 1;
        localStorage.setItem("counter", counter.toString());
        productCounter.style.display = "block";
        productCounter.innerHTML = "" + counter;
    }

    //Filtert die anderen Kategorien aus bzw. lässt Kategorien aus- und einblenden
    function auswahlEinschreanken(_event: Event): void {
        if (parseInt(localStorage.getItem("counter")!) == 0) {
            productCounter.style.display = "none";
        }
        let target: HTMLElement = (<HTMLElement>_event.target);
        let kategorie: string = target.getAttribute("href")!;

        for (let i: number = 0; i < imVerkauf.length; i++) {
            let artikelKategorie: string = document.getElementById("artikel" + i)?.getAttribute("kategorie")!;
            if (kategorie == "#" + artikelKategorie) {
                document.getElementById("artikel" + i)?.setAttribute("style", "display : block");
            }
            else {
                document.getElementById("artikel" + i)?.setAttribute("style", "display : none");
            }
            if (kategorie == null) {
                document.getElementById("artikel" + i)?.setAttribute("style", "display : block");
            }
        }
        switch (kategorie) {
            case "#festkochend":
                document.getElementById("1kartoffel")?.setAttribute("style", "display : block");
                document.getElementById("2kartoffel")?.setAttribute("style", "display : none");
                document.getElementById("3kartoffel")?.setAttribute("style", "display : none");
                document.getElementById("showAll")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel1")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : block");
                document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");

                break;
            case "#mehligkochend":
                document.getElementById("1kartoffel")?.setAttribute("style", "display : none");
                document.getElementById("2kartoffel")?.setAttribute("style", "display : block");
                document.getElementById("3kartoffel")?.setAttribute("style", "display : none");
                document.getElementById("showAll")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel1")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : block");
                document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");

                break;
            case "#exoten":
                document.getElementById("1kartoffel")?.setAttribute("style", "display : none");
                document.getElementById("2kartoffel")?.setAttribute("style", "display : none");
                document.getElementById("3kartoffel")?.setAttribute("style", "display : block");
                document.getElementById("showAll")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel1")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : block");
                document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");

                break;

            default:
                document.getElementById("1kartoffel")?.setAttribute("style", "display : block");
                document.getElementById("2kartoffel")?.setAttribute("style", "display : block");
                document.getElementById("3kartoffel")?.setAttribute("style", "display : block");
                document.getElementById("showAll")?.setAttribute("style", "display : none");
                document.getElementById("kartoffel1")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel2")?.setAttribute("style", "display : block");
                document.getElementById("kartoffel3")?.setAttribute("style", "display : block");
                document.getElementById("warenkorbInhalt")?.setAttribute("style", "display : none");

                break;
        }

    }

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        imVerkauf = await response.json();

    }

    window.addEventListener("load", init);
    console.log("Fertig geladen");
}




