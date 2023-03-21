const person = {
    fullName: function() {
      console.log(this.firstName + " " + this.lastName);
    }
  }

  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }

  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
 
  person.fullName.call(person2);
  
    