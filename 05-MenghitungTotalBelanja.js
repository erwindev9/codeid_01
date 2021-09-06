function getSalesDiscount(price, tax, discount) {
    if (typeof price === 'string' || typeof tax === 'string' || typeof discount === 'string') {
        reurn `Price, Tax & Discount harus dalam angka`
    } else {
        let disc = price * (discount / 100)
        let priceAfterDiscount = price - disc
        let pajak = priceAfterDiscount * (tax / 100)
        let totalPayment = priceAfterDiscount + pajak

        return `Total Sales : ${price}
        Discount (${discount} %) : ${disc}
        Price After Discount : ${priceAfterDiscount}
        Pajak (${tax} %) : ${pajak}
        ------------------------------
        Total Payment : ${totalPayment}`
    }


}

console.log(getSalesDiscount(4500, 10, 5));