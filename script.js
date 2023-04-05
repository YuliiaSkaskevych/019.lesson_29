class Person {
    constructor (name, gender){
    this.name = name;
    this.gender = gender;
    }
};

class Flat {
    residents = new Array();
    addResident(resident){
        this.residents.push(resident);
        console.log("Successfully added new resident!");
        return `Array of residents: ${this.residents}`;
    }
}

class House {
    flats = new Array();
    maxCountFlats;
    constructor (maxCountFlats){
     this.maxCountFlats = maxCountFlats;
     }
    addFlat(flat){
    if (this.flats.length<this.maxCountFlats){
        this.flats.push(flat);
        console.log("Successfully added new flat!");
        return `Count of flats: ${this.flats.length}`;
    }
    console.log("Error! Count of flats is full!");
    return `Max count of flats: ${this.maxCountFlats}`;
    }
}

let person1 = new Person ("John", 'male');
let person2 = new Person ("Maria", 'female');
let person3 = new Person ("Alex", 'male');

let resident1 = person1.name;
let resident2 = person2.name;
let resident3 = person3.name;

let flat1 = new Flat ();
let flat2 = new Flat ();

console.log(flat1.addResident(resident1));
console.log(flat1.addResident(resident2));
console.log(flat2.addResident(resident3));

let house = new House (2);

console.log(house.addFlat(flat1));
console.log(house.addFlat(flat2));
