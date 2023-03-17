const name = {
    name: 'dj',
    name2:'singh',
}

const name1 = {
    address: 'sainik colony'
}



 function message(){
    console.log(`${this.name} ${this.address}`)
}

fullinfo=name.bind(name1)
message(fullinfo)



