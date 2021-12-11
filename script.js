var inputText = document.querySelector("#text-inp");
var outputVal = document.querySelector("#output");
var btnRed = document.querySelector("#btn-red");
var btnBlue = document.querySelector("#btn-blue");

btnRed.addEventListener("click", redText)
//btnBlue.addEventListener("click", blueText)

function redText()
{
    
    textInput = inputText.value.toUpperCase();
    console.log(textInput)
    outputVal.textContent = textInput;
    outputVal.style.color = "red"
}
