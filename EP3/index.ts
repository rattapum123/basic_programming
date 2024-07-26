function hellWorld() {
    console.log("สวัสดี")
}

hellWorld()

function hellWorld(name: string) {
    console.log(name)
}

hellWorld('film')

function getPi() {
    return 3.14
}

console.log(getPi())

function st(fname: string, sname: string) {
    if (fname === 'mix' && sname === 'zane') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('mix', 'zane')

function st(fname: string, sname: string, tname: string) {
    if (fname === 'mix' && sname === 'zane' && tname === 'forth') {
        console.log('พร้อมเรียน')
    } else {
        console.log('ยังไม่พร้อม')
    }
}

st('mix', 'zane', 'forth') 

function st(fname: string, sname: string, tname: string) {
    if (!(fname === 'mix' || sname === 'zane') && tname === 'forth') {
        console.log('พร้อมเรียน')
    } else {
        console.log('ยังไม่พร้อม')
    }
}

st('mix', 'zane', 'forth')

function test(gender: string, height: number, weight: number) {
    if (gender === 'ชาย' && height >170 || (weight >50 && weight <= 110)) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฆ์')
    }
}
test('ชาย', 185, 65)

function money (age: number, salary: number, deposit: number) {
    if(age >= 16 && salary < 70000 && deposit < 500000) {
        console.log('รับเงิน10000บาท')
    } else {
        console.log('อด')
    }
}
money(18,50000,356000)
    