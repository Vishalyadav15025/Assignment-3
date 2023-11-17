/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const gymBag = {
    name : "LosAngeles",
    size : "medium",
    color : "blue",
    zipper : true,
    handles : 3,
    strapSize : 15,
    newStrapLenth : function (length){
        this.strapSize = length;
    },
    shoeBag :{
        left : "addidas",
        right : "puma",
    }
    

}

console.log("This are properties of the gymbag: ", gymBag);
console.log ("Here is its color: ", gymBag.color);