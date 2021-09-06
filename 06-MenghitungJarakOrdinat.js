function getCordinates(x1, y1, x2, y2) {
    let r1 = Math.pow(x1 - x2, 2)
    let r2 = Math.pow(y1 - y2, 2)
    let r3 = r1 + r2
    let koordinat = Math.sqrt(r3)

    return koordinat;
}

console.log(getCordinates(3, 4, -4, -5));