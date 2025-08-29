console.log(document)

function getElement(id){
    const element = document.getElementById(id)
    return element;
}

const callbtns = document.getElementsByClassName("call-btn")
console.log(callbtns)

for(let callbtn of callbtns){
    callbtn.addEventListener("click",function(){
        
        const serviceName = callbtn.parentNode.parentNode.children[1].children[0].innerText
        const serviceNumber =callbtn.parentNode.parentNode.children[1].children[2].innerText 

        alert(`Calling ${serviceName} at ${serviceNumber}`)
        
        const date = new Date().toLocaleTimeString()
        const historyContainer = getElement("History-container")

        const newHistory = document.createElement("div")

        newHistory.innerHTML= `
        <div class="bg-gray-100 rounded-xl flex justify-between p-3 m-2">
                <div>
                    <h2 class="font-semibold text-sm">${serviceName}</h2>
                    <p class="font-bold">${serviceNumber}</h2>
                  </div>
                   <div>
                    <h1 class="text-sm">${date}</h1>
                   </div>
                 </div>
        `
        historyContainer.append(newHistory)

    })
}
 document.getElementById("clear-btn").addEventListener("click",function(){
    const historyContainer = getElement("History-container")
    historyContainer.innerHTML = ""
 })
