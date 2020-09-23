type employee= {
    id:number
    name:string;
}

let emp1:employee = ({id:101,name:"ravi"}); 

console.log(emp1);

//emp1.designation ="teacher";
// console.log(emp1);

class Student{
    name:string;
    age:number;

    display(){
        console.log(this.name+" "+this.age);
    }
}
