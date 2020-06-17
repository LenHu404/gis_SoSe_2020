namespace Aufgabe07 {
    //#region Einfügen in Die Kategorien
    // Bin einfach nur am testen und rumprobieren

    //For-schleife für die Einsortierung in die Kategorie
    let productCounter: HTMLDivElement = document.createElement("div");
    productCounter.setAttribute("id", "productCounter");
    document.getElementById("konto")?.appendChild(productCounter);
    //let gesamtPreis: number = 0;
    export let warenkorb: Product[] = [trenner];
    productCounter.style.display = "block";

    counter = parseInt(localStorage.getItem("counter")!);
    console.log(counter);

    document.getElementById("Entleeren")?.addEventListener("click", handleWarenkorbEntleeren);


    warenkorbAufbauen2();



    async function warenkorbAufbauen2(): Promise<void> {
        await communicate("https://lenhu404.github.io/gis_SoSe_2020/Steckbrief/Aufgaben/Aufgabe07/artikel.json");


        for (let i: number = 0; i < counter; i++) {
            if (localStorage.getItem("Artikel" + i)) {


                productCounter.innerHTML = "" + counter;

                if (counter == 0) {
                    productCounter.style.display = "none";
                }
                else
                    productCounter.style.display = "block";


                let artIndex: number = parseInt(localStorage.getItem("Artikel" + i)!);

                //console.log(imVerkauf[artIndex].Name, imVerkauf[artIndex].imgSrc, imVerkauf[artIndex].price1, imVerkauf[artIndex].price2);

                //Estellen von Div Elementen 
                let newDiv: HTMLDivElement = document.createElement("div");

                //Div id zuweisen
                newDiv.setAttribute("articleIndex", artIndex.toString());
                newDiv.setAttribute("id", "WarenkorbItem" + i);
                newDiv.setAttribute("counter", i.toString());

                //Element hinzufügen
                document.getElementById("Angebot")?.appendChild(newDiv);

                //Bild hinzufügen
                let newImg: HTMLImageElement = document.createElement("img");

                newImg.src = imVerkauf[artIndex].imgSrc;
                newImg.setAttribute("alt", imVerkauf[artIndex].Art);
                newDiv.appendChild(newImg);

                //Label hinzufügen
                let newL: HTMLLabelElement = document.createElement("label");
                newL.setAttribute("for", imVerkauf[artIndex].Name);
                newL.innerHTML = "Kilogramm:";
                newDiv.appendChild(newL);

                //Dropdownmenu hinzufügen
                let newSelect: HTMLSelectElement = document.createElement("select");
                newSelect.setAttribute("class", "option");
                newSelect.name = imVerkauf[artIndex].Name;
                newSelect.id = imVerkauf[artIndex].Name + "select";
                newDiv.appendChild(newSelect);

                //Option vom Dropdownmenu
                let newOp1: HTMLOptionElement = document.createElement("option");
                newOp1.value = "2.5";
                newOp1.innerHTML = "5 kg | " + imVerkauf[artIndex].price1 + "€";
                let newOp2: HTMLOptionElement = document.createElement("option");
                newOp2.value = "5";
                newOp2.innerHTML = "10 kg | " + imVerkauf[artIndex].price2 + "€";
                newSelect.appendChild(newOp1);
                newSelect.appendChild(newOp2);

                //Name hinzugefügt 
                let newName: HTMLParagraphElement = document.createElement("p");
                newName.setAttribute("class", "Name");
                newName.innerText = imVerkauf[artIndex].Name;
                newDiv.appendChild(newName);

                //Beschreibung hinzugefügt 
                let newP: HTMLParagraphElement = document.createElement("p");
                newP.setAttribute("class", "beschreibung");
                newP.innerHTML = imVerkauf[artIndex].Description;
                newDiv.appendChild(newP);

                //Button hinzugefügt 
                let newB: HTMLInputElement = document.createElement("input");
                newB.addEventListener("click", handlerWarenkorb);
                newB.setAttribute("class", "button");
                newB.value = "entfernen";
                newB.type = "button";
                newB.setAttribute("articleIndex", artIndex.toString());
                newB.setAttribute("counter", i.toString());
                newDiv.appendChild(newB);

                if (counter >= 0)
                    document.getElementById("Entleeren")?.setAttribute("style", "display : inline");
                else
                    document.getElementById("Entleeren")?.setAttribute("style", "display : hidden");


                console.log("Aktueller Preis des Warenkorbs: " + preisBerechnung().toFixed(2) + "€");
                (<HTMLElement>document.getElementById("3kartoffel")).innerHTML = "Aktueller Preis: " + preisBerechnung().toFixed(2) + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'> <br> <input type='button' id='Entleeren' value='Alles Entfernen'>";
            }
        }


    }

    function handlerWarenkorb(_kaufen: Event): void {
        if (counter > 0)
            counter -= 1;
        let target: HTMLElement = (<HTMLElement>_kaufen.target);
        let artIndex: number = parseInt(target.getAttribute("articleIndex")!);
        let artikelCounter: number = parseInt(target.getAttribute("counter")!);

        console.log("Nehme " + imVerkauf[artIndex].Name.toString() + " aus dem Warenkorb");

        productCounter.style.display = "block";
        productCounter.innerHTML = "" + counter;

        document.getElementById("WarenkorbItem" + artikelCounter)?.remove();
        localStorage.removeItem("Artikel" + artikelCounter);


        localStorage.setItem("counter", counter.toString());

        (<HTMLElement>document.getElementById("3kartoffel")).innerHTML = "Aktueller Preis: " + preisBerechnung().toFixed(2) + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'> <br> <input type='button' id='Entleeren' value='Alles Entfernen'>";
        console.log("Aktueller Preis des Warenkorbs: " + preisBerechnung().toFixed(2) + "€");

        if (counter >= 0)
            document.getElementById("Entleeren")?.setAttribute("style", "display : inline");
        else
            document.getElementById("Entleeren")?.setAttribute("style", "display : hidden");



    }

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        imVerkauf = await response.json();
    }

    function preisBerechnung(): number {
        let preiscounter: number = parseInt(localStorage.getItem("counter")!);
        let preis: number = 0;
        for (let i: number = 0; i < preiscounter; i++) {
            if (localStorage.getItem("Artikel" + i))
                preis += imVerkauf[parseInt(localStorage.getItem("Artikel" + i)!)].price1;
        }
        return preis;

    }


    function handleWarenkorbEntleeren(): void {
        counter = parseInt(localStorage.getItem("counter")!);

        console.log("Counter: " + counter);

        for (let i: number = 0; i < counter; i++) {
            if (localStorage.getItem("Artikel" + i)) {
                document.getElementById("WarenkorbItem" + i)?.remove();
                localStorage.removeItem("Artikel" + i);
            }
        }

        counter = 0;
        localStorage.setItem("counter", "0");

        productCounter.style.display = "block";
        productCounter.innerHTML = "" + counter;

        console.log("Entleere Warenkorb");
        console.log("Aktueller Preis des Warenkorbs: " + preisBerechnung().toFixed(2) + "€");
        document.getElementById("Entleeren")?.setAttribute("style", "display : hidden");

    }




    console.log("Fertig geladen");
}
