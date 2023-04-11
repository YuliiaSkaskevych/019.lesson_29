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
        console.log(`Successfully added resident: ${resident.name}`);
    }
}

class House {
    flats = new Array();
    constructor (maxCountFlats){
     this.maxCountFlats = maxCountFlats;
     }
    addFlat(flat){
    if (this.flats.length<this.maxCountFlats){
        this.flats.push(flat);
        console.log("Successfully added new flat!");
        console.log(`Count of flats: ${this.flats.length}`);
    } else {
        console.log("Error! Count of flats is full!");
        console.log(`Max count of flats: ${this.maxCountFlats}`);
    }
    }
}

let person1 = new Person ("John", 'male');
let person2 = new Person ("Maria", 'female');
let person3 = new Person ("Alex", 'male');
let person4 = new Person ("Nancy", 'female');


let flat1 = new Flat ();
let flat2 = new Flat ();
let flat3 = new Flat ();

flat1.addResident(person1);
flat1.addResident(person2);
flat2.addResident(person3);
flat3.addResident(person4);

let house = new House (2);

house.addFlat(flat1);
house.addFlat(flat2);
house.addFlat(flat3);
