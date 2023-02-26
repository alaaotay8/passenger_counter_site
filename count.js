
let countEl = document.getElementById("count-el") // pass in arguments
let saveEl =document.getElementById("save-el")



let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let countStr =" - " + count 
    if (saveEl.textContent=="Previous entires : ")
    {
        saveEl.textContent += count
    }
    else
    {
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
    }
}




