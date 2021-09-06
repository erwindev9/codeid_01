function totalGaji(gaji1, gaji2, gaji3) {
    let emp1 = gaji1 * 0.02
    let total1 = emp1 + gaji1
    let emp2 = gaji2 * 0.05
    let total2 = gaji2 + emp2
    let emp3 = gaji3 * 0.10
    let total3 = gaji3 + emp3
    let totalSemua = total1 + total2 + total3

    return `Total gaji yang harus dibayar : 
    Emp1 : ${total1}
    Emp2 : ${total2}
    Emp3 : ${total3}
    Total : ${totalSemua}`

}

console.log(totalGaji(500, 2000, 12000));