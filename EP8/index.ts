const aboutmee = {
    firsname: 'intwo',
    lastname: 'ontwo',
    age: 600,
    phonenumber: '951357',
    gender: 'man',
    address: '00/01',
    village: 341245654796,
    Road: 'xxxxx',
    district: 'xxxxx',
    province: 'vvvvv',
    postalcode: 12345,
    mail: 'zzzzzzzz@gmail.com',
    fan:{
        firsname: 'ji',
    lastname: 'ro',
    age: 69,
    phonenumber: '9456782',
    gender: 'man',
    address: '70/1',
    village: 45347896125,
    Road: 'xxxxx',
    district: 'xxxxx',
    
    }
}

const aboutme = {
    firsname: 'intwo',
    lastname: 'ontwo',
    age: 600,
    phonenumber: '951357',
    gender: 'man',
    address: '00/01',
    village: 341245654796,
    Road: 'xxxxx',
    district: 'xxxxx',
    province: 'vvvvv',
    postalcode: 12345,
    mail: 'zzzzzzzz@gmail.com',
    bf:{
       fname:'toy',
       lname:'li',
       btitle:'ququ', 
    }
}

console.log(aboutme.bf.btitle)

const myfriends = [{
    fname:'a',
    lname:'b',
    aka:'tutu',
    age:45
},{
    fname:'c',
    lname:'d',
    aka:'ruru',
    age:28
},{
    fname:'e',
    lname:'f',
    aka:'dada',
    age:36
},{
    fname:'g',
    lname:'h',
    aka:'jiji',
    age:69
}]

const myfriendsaka = myfriends.map(function(element, index) {
    return ({
        fname: element.fname,
        aka: element.aka
    })
})

console.log(myfriendsaka)

const myfriends = [{
    fname:'a',
    lname:'b',
    aka:'tutu',
    age:45
},{
    fname:'c',
    lname:'d',
    aka:'ruru',
    age:28
},{
    fname:'e',
    lname:'f',
    aka:'dada',
    age:36
},{
    fname:'g',
    lname:'h',
    aka:'jiji',
    age:69
}]

const myfriendsaka = myfriends.map(function(element, index) {
    return ({
        fname: element.fname,
        aka: element.aka
    })
})

const myfriendsmorethan = myfriends.filter(function(element, index) {
    return element.age > 40 && element.lname === 'b'
})

console.log(myfriendsmorethan)