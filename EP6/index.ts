for (let i = 1; i <= 31; i+5) {
    sum = sum + i
}

console.log('Total: ', sum)

let sum: number = 0
let i  : number = 1

while (i <= 31) {
    sum = sum + i
    i++
}
console.log('Total: ', sum)

let sum: number = 0
let i  : number = 1

do {
    sum = sum + i
    i++
} while (i <= 31)

console.log('Total: ', sum)

let age: number = 0
for (let i = 1; i <= 20; i++) {
    age = age + i
    console.log('ฉันอายุ',i,'ปี')
}

console.log(age)

const cars: string[] = ['Toyota','Honda','Suzuki','Yamaha','Mazda']

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

const cars: string[] = ['Toyota','Honda','Suzuki','Yamaha','Mazda']

for (let i = 0; i < cars.length; i++) {
    if (cars[i] === 'Yamaha') {
    console.log('รถซื้อเเกง จะเเรงได้ไง')
    }
}

const dong: string[] = ['x','ก่อน','ฟดลี่','punn','time']

for (let i = 0; i < dong.length; i++) {
    if (dong[i] === 'ก่อน'|| dong[i]=== 'ฟดลี่') {
    console.log('ไปกินหมูกระทะกัน')
    }
}

const number: number[] = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < number.length; i++) {
    if (number[i] === 3 || number[i] === 5 || number[i] === 7) {
    console.log(0)
    }
}
console.log(number)