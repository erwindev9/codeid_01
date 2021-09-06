function fareinheitToKelvin(fahrenheit) {
    if (typeof fahrenheit === 'string') {
        return 'Fareinheit must an number'
    } else {
        let kelvin = parseInt(Number(fahrenheit) + 459.67) / 1.8
        return `Convert Fareinheit (${fahrenheit}) = ${kelvin}`
    }
}
console.log(fareinheitToKelvin(45))