var x = document.getElementById("button");
x.addEventListener("click", toggleDiv);
// x.addEventListener("click", displayAlert);

//   function displayAlert(){
//     alert("We are about to tickle your fancies");
// }


function toggleDiv() {
    // Get the reference to the div
    var third = document.getElementById('third');

    // Toggle the display property
    if (third.style.display === 'none') {
        
        third.style.display = 'block';
    } else {
        
        third.style.display = 'none';
    }
  }
