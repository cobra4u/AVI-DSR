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

for (val in dj){
    console.log(`${val } = ${dj[val]}`);
}

for (val in dj){
    console.log(`${this.age}`)
}


for (val in dj){
    console.log(dj.agecal())
}
