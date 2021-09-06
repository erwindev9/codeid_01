function calculateDistance(a, t) {
    if (typeof a == 'string' || typeof t == 'string') {
        return 'Input mus an number'
    } else if (a <= 0 || t <= 0) {
        return 'Accelaration or time mus be >= 0'
    } else {
        let jarak = 0.5 * a * Math.pow(t, 2)
        return `Jarak yang ditempuh adalah ${jarak}`
    }
}

console.log(calculateDistance(-50, 'a'))