namespace EndabgabeChat {

    let buttonSignInJson: HTMLButtonElement = document.getElementById("senden") as HTMLButtonElement;
    buttonSignInJson.addEventListener("click", handleClickStore);



    let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
    let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
    ausgabe.setAttribute("style", "display: none");



    let formData: FormData;

    async function handleClickRetrieve(): Promise<void> {
        //let url: string = "http://localhost:8100";
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
        //let url: string = "http://localhost:8100";
        let url: string = "https://kartoffel-ist-best.herokuapp.com";
        url += "/store";

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
        formular.reset();

        await fetch(url);

        handleClickRetrieve();
    }

    console.log("Fertig geladen");
}




