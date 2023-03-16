const dj={
    name : 'Divjot',
    yearOB : 2002,
    phoneno:7051011995,
    // Age: 21,
    email:'dj@gmail.com',
    agecal: function(){
        return 2023-this.yearOB;
    }
};
console.log(dj.agecal());

const dj3={
    name : 'Divjot',
    yearOB : 2002,
    phoneno:7051011995,
    // Age: 21,
    email:'dj@gmail.com',
    agecal: function(){
        return 2023-this.yearOB;
    }
};

console.log(dj3===dj);

console.log(dj3==dj);


const djy={
    name : 'Divjot',
    yearOB : 2002,
    phoneno:7051011995,

    xx : {
          year :33000
    },

    email:'dj@gmail.com',

    agecal: function(){
        return 2023-this.yearOB;
    }

};

