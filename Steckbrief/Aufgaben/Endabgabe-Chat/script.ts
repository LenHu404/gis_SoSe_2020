namespace EndabgabeChat {

    let buttonSend: HTMLButtonElement = document.getElementById("senden") as HTMLButtonElement;
    buttonSend.addEventListener("click", handleClickStore);

    let buttonRefresh: HTMLButtonElement = document.getElementById("refresh") as HTMLButtonElement;
    buttonRefresh.addEventListener("click", handleClickRetrieve);



    


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
        url += "?" + "user=" + localStorage.getItem("user") +  "&" + query.toString();

        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
        formular.reset();

        console.log("fetch-Url: " + url)

        await fetch(url);

        handleClickRetrieve();
    }

    console.log("Fertig geladen");
}




