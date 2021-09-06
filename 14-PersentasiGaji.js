function getPersentase(income1, income2) {
    let selisihIncome = income2 - income1;
    let rasio = selisihIncome / income1;
    let persentase = rasio * 100

    return `Total kenaikan income ${persentase} %`
}

console.log(getPersentase(750000, 900000))