import Backpack from "./Backpack.js";
/*
"new" is used to create a new object in this specific class that we hace imported.
remember, we can have other objects created with the same properties.
for example, we can have another object named weekendPack, and then pass in the properties we want.
*/
const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "gray",
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object: ", everydayPack);
console.log("The pocketNum value: ",everydayPack.pocketNum);
console.log("This is the date Acquired: ",everydayPack.dateAcquired);
console.log("This is the date Acquired: ", everydayPack.backpackAge());