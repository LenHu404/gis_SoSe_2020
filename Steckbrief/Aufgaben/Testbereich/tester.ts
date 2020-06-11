console.log("Start");
communicate("https://hs-furtwangen.github.io/GIS-SoSe-2020/L07/test.txt");
communicateJson("https://hs-furtwangen.github.io/GIS-SoSe-2020/L07/testjson.json");
console.log("End");

localStorage.setItem("test", "187");

console.log(getStorageNumber());


function getStorageNumber(): number{
  return parseInt(localStorage.getItem("test")!);
}

async function communicate(_url: RequestInfo): Promise<void> {
  let response: Response = await fetch(_url);
  console.log("Response", response);
  console.log("Response", await response.text());
}

async function communicateJson(_url: RequestInfo): Promise<void> {
  let response: Response = await fetch(_url);
  console.log("Response", response);
  console.log("Response", await response.json());

}

function clickCounter(): void {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("result")!.innerHTML = "Du hast den Button " + localStorage.clickcount + " mal geklickt.";
}