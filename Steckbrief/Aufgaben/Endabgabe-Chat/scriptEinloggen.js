"use strict";
var EndabgabeChat;
(function (EndabgabeChat) {
    let buttonEinloggen = document.getElementById("chatting");
    buttonEinloggen.addEventListener("click", handleUser);
    let buttonMIBChat = document.getElementById("mib");
    buttonMIBChat.addEventListener("click", handleChatAuswahl);
    let buttonHFUChat = document.getElementById("hfu");
    buttonHFUChat.addEventListener("click", handleChatAuswahl);
    async function handleUser(_event) {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let params = new URL("https://stackoverflow.com?" + query.toString()).searchParams;
        //params.get("user"); // "1"
        localStorage.setItem("username", params.get("username").toString());
        localStorage.setItem("password", params.get("password").toString());
        //let url: string = "http://localhost:8100";
        let url = "https://kartoffel-ist-best.herokuapp.com";
        url += "/logIn";
        // tslint:disable-next-line: no-any
        url += "?" + query.toString();
        let formular = document.getElementById("formular");
        formular.reset();
        console.log("fetch-Url: " + url);
        await fetch(url);
        console.log("Einloggen");
    }
    function handleChatAuswahl(_event) {
        let target = _event.target;
        let chat = target.getAttribute("id");
        if (chat == "mib") {
            localStorage.setItem("chat", "mib");
            //console.log("Chat: MIB");
        }
        else if (chat == "hfu") {
            localStorage.setItem("chat", "hfu");
            // console.log("Chat: HFU");
        }
    }
})(EndabgabeChat || (EndabgabeChat = {}));
//# sourceMappingURL=scriptEinloggen.js.map