namespace Aufgabe07 {
    export let productCounter: HTMLDivElement = document.createElement("div");
    productCounter.setAttribute("id", "productCounter");
    document.getElementById("konto")?.appendChild(productCounter);

    export function preisBerechnung(): number {
        let preis: number = 0;
        for (let i: number = 0; i < warenkorb.length; i++) {

            preis += warenkorb[i].price1;
        }
        return preis;

    }

    export async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        imVerkauf = await response.json();
        console.log(imVerkauf[0].Name.toString());
        //return myJSONArray;

    }
}