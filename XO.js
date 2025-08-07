
const but = document.getElementById("start")
const container = document.querySelector(".container")
const items = document.querySelectorAll(".items")
let randomStart = Math.floor(Math.random()*2)+1
const select = [1,2,3,4,5,6,7,8,9]
const winCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let board = [
    "","","",
    "","","",
    "","","",
]
const refresh = () =>{
    location.reload() 
}
but.addEventListener("click", () => {
    container.style.display = "grid"
    alert(`Player ${randomStart} turn`)
    but.remove()
    let newButton = document.createElement("button")
    newButton.id = "refresh"
    newButton.innerText = "Refresh"
    newButton.onclick = refresh
    document.body.appendChild(newButton)
})

document.addEventListener(
    "keyup", 
    (event) => {
        const selected = Number(event.key)
        if(!select.includes(selected))return;
        if(items[selected-1].innerText !== ""){
            alert("Cell already filled")
            return
        }
        if(randomStart === 1){
            items[selected-1].innerText = "X"
            board[selected-1] = items[selected-1].innerText
            randomStart = 2
        } else {
            items[selected-1].innerText = "O"
            board[selected-1] = items[selected-1].innerText
            randomStart = 1
        }
        if(checkWinner(board, "X")) {
            alert("X wins")
        }
        if(checkWinner(board, "O")) {
            alert("O wins")
        }
    }
)
function checkWinner(board, player) {
    return winCombo.some(combination => {
        return(combination.every(index => board[index] === player))
    })
}



    
        
