// function getAllNames() {
//     const namesDataBase = {
//         names : ["Rodney","Yash","Debra","Brian"]
//     }
//     return namesDataBase;
// };
// console.log(getAllNames())


// Async function - we need to wait for the response from the server
// async function postJSON(){
//     try {
//         const response = await fetch("URL", {
//             method: "POST",
//             // Sending JSON data to the server via body property
//             body: JSON.stringify(data)
//         })
//     // wait for the result
//         const result = await response.json();

//         // We can now use the result

//         console.log("Success: ",result);
//     } catch (error) {
//         console.error("Error: ", error);
//     }
    
// }
// // Data to be sent to the server

// const data = {reqest: 1};

// // we can call function asking data
// postJSON(data);
function myFirst(some){
    document.getElementById("test").innerHTML = some;
}
function mySecond(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback (sum);
}

mySecond(50, 200, myFirst)

// callback used togethewr with Async

setTimeout(myFunction, 3000);

function myFunction(){
    alert("I am about to get this!!")
}

// another example using the date function
setInterval(myFunction2, 1000);

function myFunction2 (){
    let d = new Date();
    document.getElementById("test2").innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
// introducing the concept of promise

let myPromise = new Promise (function (myResolve, myReject){
    setTimeout(function () {myResolve("This is getting Hard")}, 3000);
});

myPromise.then(function (value){
    document.getElementById("test3").innerHTML = value;
})





















