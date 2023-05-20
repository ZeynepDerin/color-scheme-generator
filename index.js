let colorOne = document.getElementById("main-color-one")
let colorTwo = document.getElementById("main-color-two")
let colorThree = document.getElementById("main-color-three")
let colorFour = document.getElementById("main-color-four")
let colorFive = document.getElementById("main-color-five")
let chosenColor = document.getElementById("chosen-color")
let ChooseTheMood = document.getElementById("choose-the-mode")

let hexValue = "d7bf99"
let chosenMode = ""

function getColor(){
        fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${chosenMode}`)
        .then (res => res.json())
        .then ( data => {
            let firstElement = data.colors[0]
            document.getElementById("footer-one").innerText = firstElement.hex.value
            colorOne.style.backgroundColor =  firstElement.hex.value
            let secondElement = data.colors[1]
            document.getElementById("footer-two").innerText = secondElement.hex.value
            colorTwo.style.backgroundColor =  secondElement.hex.value
            let thirdElement = data.colors[2]
            document.getElementById("footer-three").innerText = thirdElement.hex.value
            colorThree.style.backgroundColor =  thirdElement.hex.value
            let fourthElement = data.colors[3]
            document.getElementById("footer-four").innerText = fourthElement.hex.value
            colorFour.style.backgroundColor =  fourthElement.hex.value
            let fifthElement = data.colors[4]
            document.getElementById("footer-five").innerText = fifthElement.hex.value
            colorFive.style.backgroundColor =  fifthElement.hex.value
        })
       }
       getColor()


let newHexValue

document.getElementById("btn").addEventListener("click", () => {

  const hexValueToSlice  = document.getElementById("chosen-color").value
  newHexValue = hexValueToSlice.slice(1)
  hexValue = newHexValue
  getColor()
  document.getElementById("btn").style.background = hexValueToSlice
  document.getElementById("choose-the-mode").style.background = hexValueToSlice
});


ChooseTheMood.addEventListener("change", function(){
    if (ChooseTheMood.value == "monochrome"){
        chosenMode = "monochrome"
    }   else if (ChooseTheMood.value == "monochrome-dark") {
        chosenMode = "monochrome-dark"
    }   else if (ChooseTheMood.value == "monochrome-light") {
         chosenMode = "monochrome-light"
    }   else if (ChooseTheMood.value == "analogic") {
        chosenMode = "analogic"
    }   else if (ChooseTheMood.value == "complement") {
         chosenMode = "complement"
    }   else if (ChooseTheMood.value == "analogic-complement") {
        chosenMode = "analogic-complement"
    }
        
    
})


        
         

