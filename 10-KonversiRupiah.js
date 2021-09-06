function convertToRupiah(value, currencyType) {
    if (currencyType = 'yen') {
        let yen = value * 1301.2
        return `${value} yen = Rp. ${yen}`
    } else if (currencyType = 'usd') {
        let usd = value * 14382.5
        return `${value} yen = Rp. ${usd}`
    } else if (currencyType = 'euro') {
        let euro = value * 16000
        return `${value} yen = Rp. ${euro}`
    }
}

console.log(convertToRupiah(100, 'yen'))