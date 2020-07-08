namespace Aufgabe11 {

    let buttonSignInJson: HTMLButtonElement = document.getElementById("ausgeben") as HTMLButtonElement;
    buttonSignInJson.addEventListener("click", handleClickRetrieve);
    let buttonSignInHtml: HTMLButtonElement = document.getElementById("absenden") as HTMLButtonElement;
    buttonSignInHtml.addEventListener("click", handleClickStore);


    let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
    //let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
    ausgabe.setAttribute("style", "display: none");




    let formData: FormData;
    /* let buttonActionHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("store");
    buttonActionHtml.addEventListener("click", handleClickStore);

    let buttonActionJson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("retrieve");
    buttonActionJson.addEventListener("click", handleClickRetrieve); */

    async function handleClickRetrieve(): Promise<void> {
        //let url: string = "http://localhost:8100/" + _format;
        let url: string = "https://kartoffel-ist-best.herokuapp.com";

        url += "/retrieve";

        let response: Response = await fetch(url);
        console.log(response);
        let responseText: string = await response.json();

        let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
        ausgabe.setAttribute("style", "display: block");
        ausgabe.innerHTML = responseText;
        console.log(responseText);
    }

    async function handleClickStore(): Promise<void> {
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100/";
        let url: string = "https://kartoffel-ist-best.herokuapp.com";
        url += "/store";

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
        formular.reset();

        await fetch(url);
    }

    console.log("Fertig geladen");
}




