namespace EndabgabeChat {

    let buttonSend: HTMLButtonElement = document.getElementById("senden") as HTMLButtonElement;
    buttonSend.addEventListener("click", handleClickStore);

    let buttonRefresh: HTMLButtonElement = document.getElementById("refresh") as HTMLButtonElement;
    buttonRefresh.addEventListener("click", handleClickRetrieve);

    let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
    ausgabe.setAttribute("style", "display: none");




    let formData: FormData;

    async function handleClickRetrieve(): Promise<void> {
        //let url: string = "http://localhost:8100";
        let url: string = "https://kartoffel-ist-best.herokuapp.com";

        url += "/retrieve";

        let response: Response = await fetch(url);
        console.log(response);
        let responseText: string = await response.json();

        let splitted: string[] = responseText.split("}", 10);

        let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
        ausgabe.innerHTML = responseText;

        ausgabe.setAttribute("style", "display: block");
        for (let i: number = 0; i < splitted.length; i++) {
            splitted[i] += "}";

            let splittedJson: any = JSON.parse(splitted[i]);
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.className = "message";
            newDiv.innerHTML = splittedJson.user + ": <br> " + splittedJson.message;
            document.getElementById("Ausgabefeld")?.appendChild(newDiv);
        }

        console.log(responseText);
    }

    async function handleClickStore(): Promise<void> {
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url: string = "https://kartoffel-ist-best.herokuapp.com";
        url += "/store";

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + "user=" + localStorage.getItem("user") + "&" + query.toString();

        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
        formular.reset();

        console.log("fetch-Url: " + url)

        await fetch(url);

        handleClickRetrieve();
    }

    console.log("Fertig geladen");
}




