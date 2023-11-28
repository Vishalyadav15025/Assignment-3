let h2Element = document.getElementById("Food");
h2Element.childNodes[0].nodeValue = 'The Get Methods'
h2Element.style.color = "blue";

let pElements = document.getElementsByTagName('p'); //HTML collection
    for (let pElement of pElements) {
            pElement.style.color = 'brown'
            };

let customDivs = document.getElementsByClassName('custom-bg');
    for (let element of customDivs){
        element.style.backgroundColor = 'yellow'
        };

let pElementsInDiv = document.querySelectorAll("div p")
        for(let para of pElementsInDiv){
            para.style.fontWeight = 'bold'
        }
let specialP = document.querySelector('#shoes');
specialP.style.textDecoration = 'underline'