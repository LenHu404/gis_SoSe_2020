"use strict";
var EndabgabeChat;
(function (EndabgabeChat) {
    let buttonEinloggen = document.getElementById("einloggen");
    buttonEinloggen.addEventListener("click", handleUser);
    let buttonMIBChat = document.getElementById("mib");
    buttonMIBChat.addEventListener("click", handleChatAuswahl);
    let buttonHFUChat = document.getElementById("hfu");
    buttonHFUChat.addEventListener("click", handleChatAuswahl);
    function handleUser(_event) {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        localStorage.setItem("user", query.toString());
        console.log("Einloggen");
    }
    function handleChatAuswahl(_event) {
        let target = _event.target;
        let chat = target.getAttribute("id");
        if (chat == "mib") {
            localStorage.setItem("chat", "mib");
            console.log("Chat: MIB");
        }
        else if (chat == "hfu") {
            localStorage.setItem("chat", "hfu");
            console.log("Chat: HFU");
        }
    }
})(EndabgabeChat || (EndabgabeChat = {}));
//# sourceMappingURL=scriptEinloggen.js.map