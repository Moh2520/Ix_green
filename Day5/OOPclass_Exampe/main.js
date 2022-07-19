
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.age = -1;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}
// new instance of person
    const person = new Person("Mohamed","Mohamed", "12162002")
    const person2 = new Person("Ali","Mohamed", "12162002")

    console.log(person)

class Customer extends person{

    constructor(firstName, lastName, dob, phone, memebership) {

        super(firstName, lastName, dob)
        this.phone = phone;
        this.memebership = memebership;


    }
    static memeberCost(){
        return '$1000000'
    }
    

}
const customer = new Customer('Joe','map', '094940', '1233423', 'Gold');
const customer2 = new Customer('filmer','map', '094940', '1233423', 'platnium');

const people = [

    person,
    person2,
    customer,
    customer2,

]
//
for(let i=0; i< people.length; i++){
    const person2 = people(i)
    console.log(person.getFullName())
}

for(let person of people){
    console.log(person2.getFullName())
}
