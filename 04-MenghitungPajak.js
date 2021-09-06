function getSalesTax(price, tax) {

    if (typeof price === 'string' || typeof tax === 'string') {
        return 'Price dan Pajak harus dalam angka'
    } else {
        let pajak = price * (tax / 100)
        let total = price + pajak
        return `Total sales: ${price}
    Pajak : ${tax}
    TotalHarga + Pajak : ${total}`
    }
}

console.log(getSalesTax('ff', 5));