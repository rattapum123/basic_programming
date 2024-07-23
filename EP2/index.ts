//function add(a: number, b: number) {
    //return a+b
//}
//console.log(add(2, 2))

//function down(a: number, b: number) {
   //return a-b
//}
//console.log(down(2, 2))

//function twin(a: number, b: number, c: number, d: number) {
   // return a*b*c*d
//}
//console.log(twin(1, 2, 3, 4))

//function grade(homework: number, midterm: number, final: number) {
    //let score: number = homework + midterm + final

    //if (score < 50) {
       // return 'สอบตก'
    //} else {
        //return 'สอบผ่าน'
    //}
//}
//console.log(grade(8, 20, 30))

function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final

    if (score < 50) {
        return 'เกรด F'
    } else if(score < 60) {
        return 'เกรด D'
    } else if(score < 70) {
        return 'เกรด C'
    } else if(score < 80) {
        return 'เกรด B'
    } else {
        return 'เกรด A'
    }
}
console.log(grade(20, 19, 35))