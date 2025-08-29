console.log(document);

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const callbtns = document.getElementsByClassName("call-btn");
console.log(callbtns);
let coins = 100;
const coinDisplay = document.getElementById("coin-count");

for (let callbtn of callbtns) {
  callbtn.addEventListener("click", function () {
    if (coins >= 20) {
      coins -= 20;
      coinDisplay.innerText = coins;

      const serviceName =
        callbtn.parentNode.parentNode.children[1].children[0].innerText;
      const serviceNumber =
        callbtn.parentNode.parentNode.children[1].children[2].innerText;

      alert(`Calling ${serviceName} at ${serviceNumber}`);

      const date = new Date().toLocaleTimeString();
      const historyContainer = getElement("History-container");

      const newHistory = document.createElement("div");

      newHistory.innerHTML = `
        <div class="bg-gray-100 rounded-xl flex justify-between p-3 m-2">
                <div>
                    <h2 class="font-semibold text-sm">${serviceName}</h2>
                    <p class="font-bold">${serviceNumber}</h2>
                  </div>
                   <div>
                    <h1 class="text-sm">${date}</h1>
                   </div>
                 </div>
        `;
      historyContainer.append(newHistory);

      if (coins < 20) {
        for (let callbtn of callbtns) {
          alert("Not enough coins.Please recharge");
          return;
        }
      }
    }
  });
}
document.getElementById("clear-btn").addEventListener("click", function () {
  const historyContainer = getElement("History-container");
  historyContainer.innerHTML = "";
});

const loveCounts = document.getElementsByClassName("love-count-1");
console.log(loveCounts);

for (let loveCount of loveCounts) {
  loveCount.addEventListener("click", function () {
    const lifeCount = getElement("life-count").innerText;
    const newLifeCount = Number(lifeCount) + 1;
    getElement("life-count").innerText = newLifeCount;
  });
}

const copytexts = document.getElementsByClassName("copy-btn");
const textToCopy = document.getElementsByClassName("to-copy");
console.log(copytexts, textToCopy);

for (let copytext of copytexts) {
  copytext.addEventListener("click", function () {
    const copyButton = getElement("copy-button").innerText;
    const newCopyButton = Number(copyButton) + 1;
    getElement("copy-button").innerText = newCopyButton;

    alert("Increase the copy count");
  });
}
