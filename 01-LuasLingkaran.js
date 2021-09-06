let phi = 3.14159

function getAreaCircles(radius) {
    if (radius <= 0) {
        return "Try Higher"
    } else if (typeof radius == 'string') {
        return "Inputan harus dalam angka"
    } else {
        return phi * radius;
    }
}

console.log(getAreaCircles("a"));