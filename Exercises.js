//Same keys and values ES2015

function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName,
}
}


//Computed Property Names

let favoriteNumber = 42;

const instructor = {
firstName: "Colt",
[favoriteNumber]: "That is my favorite!"
}


//Object Methods


let instructor = {
  firstName: "Colt",
  sayHi(){
      return "HI!";
  },
  sayBye(){
      return this.firstName + "says bye!";
  }
}

//createAnimal function
//Write a function which generates an animal object. The function should accepts 3 arguments:


function createAnimal(species, verb, noise){
return {
  species,
  [verb](){
    return noise;
  }
}
}