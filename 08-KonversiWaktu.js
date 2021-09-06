function elapsedTime(seconds) {
    let hari = parseInt(seconds / 86400);
    let sisa = seconds % 86400;

    let jam = parseInt(sisa / 3600);
    sisa = sisa % 3600

    let menit = parseInt(sisa / 60);
    sisa = sisa % 60

    return `${hari} hari ${jam} jam  ${menit} menit ${sisa} detik`;
}

console.log(elapsedTime(700005))