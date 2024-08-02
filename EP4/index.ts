function tsize(size: string) {
    switch (size) {
        case ('s'):
            console.log('ผอม')
            break
        case ('m'):
            console.log('ผอม')
            break
        case ('l'):
            console.log('ท้วม')
            break
        case ('xl'):
            console.log('อ้วน')
            break
        case ('xxl'):
            console.log('อ้วน')
            break

            default:
            console.log('you')
            break
    }
}
tsize('s')

function fixedDecimal(n: number, digit: number) {
    const x = n.tofized(digit)
    return x
}
console.log(fixedDecimal(40.67667, 10))

function tutu(n: number, digit: number) {
    const x = n.toLocaleString()
    return x
}
console.log(tutu(1000))

const str: string = "rattapum"
console.log(str.toLocaleLowerCase())

function checkStringLength(f: string) {
    console.log(f.length)
}
checkStringLength('พายุจะเข้า')

function getcharbyindex(msg: string, index: number) {
    const x = msg.charAt(index)
    return x
}
console.log(getcharbyindex('ฝนตกกกก', 2))

function ruru(msg: string, search: string) {
    if(msg.includes(search)=== true) {
        console.log(msg.indexOf(search))
    } else {
        console.log('ไม่พบคำที่ค้นหา')
    }
}
ruru('กลับบ้าน', 'f')