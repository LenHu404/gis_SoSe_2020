namespace Aufgabe07 {
    export let productCounter: HTMLDivElement = document.createElement("div");
    productCounter.setAttribute("id", "productCounter");
    document.getElementById("konto")?.appendChild(productCounter);

    /* export function preisBerechnung(): number {
        console.log("funktionierts?");
        let preiscounter: number = parseInt(localStorage.getItem("counter")!);
        let preis: number = 0;
        for (let i: number = 0; i < preiscounter; i++) {

            preis += imVerkauf[parseInt(localStorage.getItem("Artikel" + i)!)].price1;
        }
        return preis;

    } */

    export async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        imVerkauf = await response.json();
        console.log(imVerkauf[0].Name.toString());
    }
}