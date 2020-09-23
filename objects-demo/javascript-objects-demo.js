
// // JSON - JavaScript Object Notation
// let userRaviInstance = {
//     name:"ravi",
//     age:25,
//     marks:[89,87,69]
// };

// console.log(userRaviInstance);

// let userKiranInstance = {
//     name:"kiran",
//     age:35,
//     marks:[67,8,90]
// };

// console.log(userKiranInstance);

// let userSamsonInstance = {
//     name:"samson",
//     age: 45,
//     designation:"Financer",
//     display(){
//         console.log(this.name,this.age,this.designation);
//     }
// };

// console.log(userSamsonInstance);

// userSamsonInstance.display();

// // function - local,global,instance variables
// function User(){
//     this.name;
//     this.age;
//     this.marks;
//     this.display = function(){
//         console.log(this.name+" "+this.age+" "+this.marks);
//     }
// }

// let geetha = new User();
// geetha.name="geetha";
// geetha.age= 29;
// geetha.marks = [89,76,47];
// geetha.dateOfBirth ="13-05-1995";

// console.log(geetha);// if it is a definate structure, User{name="",age:0,marks:undefined}
// geetha.display();