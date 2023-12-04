let x = document.getElementById("button");
x.addEventListener("click", toggleDiv);
// x.addEventListener("click", displayAlert);

//   function displayAlert(){
//     alert("We are about to tickle your fancies");
// }


function toggleDiv() {
    // Get the reference to the div
    let third = document.getElementById('third');

    // Toggle the display property
    if (third.style.display === 'none') {
        
        third.style.display = 'block';
    } else {
        
        third.style.display = 'none';
    }
  }
  
// changinh the HTML text of the test id
  document.getElementById("test").innerHTML = '"In the world of bread and pastries, magic happens. Indulging in the simplicity and beauty of freshly baked goodness. A bakery is where dreams rise and delicious memories are made."'


// adding 2 elements then removing one
  document.getElementById("beforeFooter").classList.add("newStyle1", "newStyle2")
  document.getElementById("beforeFooter").classList.remove("newStyle2")

// Create a new element and add it to the page 
let myNewElement = document.createElement("ul");

sponser = ["UberEats", "Shoppers", "Walmart"]

// create list element and map it to the content of the list(sponser)
sponser.forEach(name => {
    let liElement = document.createElement("li");
    liElement.textContent = name;
    myNewElement.appendChild(liElement);
});

let footerElement = document.querySelector("footer");

footerElement.parentNode.insertBefore(myNewElement, footerElement)


