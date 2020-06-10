namespace Aufgabe07 {
    //#region Einfügen in Die Kategorien
    // Bin einfach nur am testen und rumprobieren

    //For-schleife für die Einsortierung in die Kategorie
    let productCounter: HTMLDivElement = document.createElement("div");
    productCounter.setAttribute("id", "productCounter");
    document.getElementById("konto")?.appendChild(productCounter);
    let gesamtPreis: number = 0;
    export let warenkorb: Product[] = [trenner];
    productCounter.style.display = "block";
    console.log(Storage.length);
    warenkorbAufbauen2();
    console.log(Storage.length);


    function warenkorbAufbauen(): void {
        for (let i: number = 0; i < counter; i++) {

            warenkorb[i + 1] = imVerkauf[parseInt(localStorage.getItem("lastname")!)];

            console.log(warenkorb[i].Name, warenkorb[i].imgSrc, warenkorb[i].price1, warenkorb[i].price2);

            //Estellen von Div Elementen 
            let newDiv: HTMLDivElement = document.createElement("div");

            //Div id zuweisen
            newDiv.setAttribute("articleIndex", "i");

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
            newOp2.innerHTML = "10 kg | " + warenkorb[i].price2 + "€";
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
            // newB.addEventListener("click", handlerWarenkorb);
            newB.setAttribute("class", "button");
            newB.value = "entfernen";
            newB.type = "button";
            newB.setAttribute("articleIndex", i.toString());
            newDiv.appendChild(newB);

            productCounter.style.display = "block";

        }
    }

    function warenkorbAufbauen2(): void {



        for (let i: number = 0; i < Storage.length; i++) {

            if (warenkorb[i] != null) {

                warenkorb[i + 1] = imVerkauf[parseInt(localStorage.getItem("lastname")!)];

                console.log(warenkorb[i].Name, warenkorb[i].imgSrc, warenkorb[i].price1, warenkorb[i].price2);

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
                newOp2.innerHTML = "10 kg | " + warenkorb[i].price2 + "€";
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
                // newB.addEventListener("click", handlerWarenkorbEntfernen);
                newB.setAttribute("class", "button");
                newB.value = "entfernen";
                newB.type = "button";
                newB.setAttribute("articleIndex", i.toString());
                newDiv.appendChild(newB);

                productCounter.style.display = "block";
            }

            try {
                //document.getElementById("4kartoffel")!.innerHTML = "Aktueller Betrag: " + preisBerechnung().toFixed(2).toString() + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'>";
            } catch (error) {
                //document.getElementById("4kartoffel")!.innerHTML = "Aktueller Betrag: " + gesamtPreis.toFixed(2).toString() + "€" + "<br> <input type='button' id='Bestellen' value='Bestellen'>";
            }

        }

        function handlerWarenkorb(_kaufen: Event): void {
            if (counter > 0)
                counter -= 1;
            let target: HTMLInputElement = (<HTMLInputElement>_kaufen.target);
            let artIndex: number = parseInt(target.getAttribute("articleIndex")!);

            gesamtPreis -= warenkorb[artIndex].price1;
            console.log("Nehme " + warenkorb[artIndex].Name.toString() + " aus dem Warenkorb");
            console.log("Aktueller Preis des Warenkorbs: " + gesamtPreis.toFixed(2) + "€");
            productCounter.style.display = "block";
            productCounter.innerHTML = "" + counter;
        }



        console.log("Fertig geladen");
    }
}
