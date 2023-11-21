//an alert to welcome you to the page
window.alert("Welcome to my World!!");
// console.log(Math.abs(-6.7))
// let myString = "Hey Rodney";
//console.log(myString.toUpperCase())

// using document.write to print out the heading (H1 and H3)
document.write("<h1 class=thisOnly> Welcome to Rodney's page</h1>")

document.write("<h3>About Rodney</h3>")

//using document.write to print out the paragraph
document.write('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad omnis adipisci necessitatibus magnam? Debitis quam esse a vitae qui repudiandae voluptatibus eveniet eaque corporis impedit nostrum, soluta, alias beatae assumenda.</p>')

//using document.write to print out the image
document.write('<img id="hockey" src="rodney_bio.jpg" alt="Picture not found" width="600" height="300">');

//using document.write to print out the paragraph under thr article tag
document.write("<article> <p> Rodney is a dedicated and passionate individual who has found his love for the sport of hockey at the Greensharks Hockey Club in Kenya. With a strong sense of commitment to the game, Rodney has become an integral part of the club's hockey community. His skills on the field are commendable, showcasing not only his athleticism but also his strategic thinking and teamwork. As a member of the Greensharks Hockey Club, Rodney actively contributes to the vibrant and competitive hockey scene in Kenya. Whether it's sprinting down the field with the ball or defending the goal with determination, Rodney's presence on the hockey pitch is both inspiring and uplifting for his teammates. Off the field, he embodies the spirit of sportsmanship, fostering camaraderie within the club. Rodney's journey with Greensharks Hockey Club is a testament to the power of sports in building character, fostering friendships, and creating memorable experiences on and off the field.</p></article>")

// using for loop to print out the names in a list. Also introduced the names array andused the document.write to output the result  
const names = ["Rodney", "Debra", "Brian", "Ankit", "Aman", "Yash", "Vishal", "Arya", "Chux"];
let text = "<ol>";
for (let i = 0; i < names.length; i++) {
    text += "<li>" + names[i] + "</li>";
 }
text +="</ol>"
document.write(text)

//creating the GoodSchool function and gave it several properties. I also used the constructor method to lay out the properties.
class GoodSchool {
    constructor (
        course, 
        yearOfStudy, 
        studentsInClass, 
        bestCourse,
        daysSinceClassStarted
    ){
        this.course = course;
        this.yearOfStudy = yearOfStudy;
        this.studentsInClass = studentsInClass;
        this.bestCourse = bestCourse;
        this.daysSinceClassStarted = daysSinceClassStarted;
    }
// using the Math.medod and a global method Date to calculate the amount of days since I joined school.
    classPeriod(){
        let thisDay = new Date;
        let startingDate = new Date(this.daysSinceClassStarted);
        let elapsed = thisDay - startingDate;
        let daysSinceClassStarted = Math.floor(elapsed/(1000 * 3600 * 24));
        return daysSinceClassStarted;
    }
    
};
//Created a new object and gave it the properties corresponing to the GoodSchool function
const nscc = new GoodSchool
(
   "IT programming in IoT",
   1,
   9,
   "introToJavaScript", 
   "September 4, 2023 10:00:00 PST"
);
// used template literals to output data 
const mySchool = `
<ul>
          <li>My course: ${nscc.course}</li>
          <li>Length of the course : ${nscc.yearOfStudy}</li>
          <li>Students in class : ${nscc.studentsInClass}</li>
          <li>Best Subject in the course :${nscc.bestCourse}</li>
          <li>Days since I started my classes : ${nscc.classPeriod()}</li>
</ul>
`;
document.write (mySchool);

    