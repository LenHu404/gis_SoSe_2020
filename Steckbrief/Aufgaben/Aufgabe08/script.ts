namespace Aufgabe08 {
    window.addEventListener("load", init);
    let submitButton: HTMLButtonElement;

    async function onClickButton(_click: MouseEvent): Promise<void> {
        //Form-Element aus der HTML Datei ziehen
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100/";

        //alle Zeichen nach dem "?"
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let urlEmpfangen: Response = await fetch(url);

        let urlAusgeben: string = await urlEmpfangen.url;
        //urlAusgeben = urlAusgeben.replace("https://compaktdisk.herokuapp.com/", "");
        console.log(urlAusgeben);
    }
    async function init(_event: Event): Promise<void> {
        //Der Button mit der Klasse "button" werden in dem Element submitButton eingespeichert
        submitButton = <HTMLButtonElement>document.querySelector(".button");
        //onClickButton wird bei einem Click auf den Button ausgeführt
        submitButton.addEventListener("click", onClickButton.bind(submitButton));
    }


}