const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let generatePasswordButton = document.getElementById("password-btn");

generatePasswordButton.addEventListener("click", function() {
    password1El.textContent = ""
    password2El.textContent = ""
    for (let i = 0; i < 16; i++)
    {
        password1El.textContent += getPassword()
        password2El.textContent += getPassword()
    }
})

function getPassword () {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

password1El.addEventListener("click", function () {
    if (password1El.textContent !== "") {
        navigator.clipboard.writeText(password1El.textContent).then(() => {
            alert("Text copied to clipboard!")
        }).catch (err=> {
            console.error("Failed to copy text", err)
        })
    }
})

password2El.addEventListener("click", function () {
    if (password2El.textContent !== "") {
        navigator.clipboard.writeText(password2El.textContent).then(() => {
            alert("Text copied to clipboard!")
        }).catch (err=> {
            console.error("Failed to copy text", err)
        })
    }
})