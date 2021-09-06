function getDays(month, year) {
    if (year % 400 === 0 && year % 100 === 0 && year % 4 == 0) {
        switch (month) {
            case 1:
                console.log(`This Month has 31 days`);
                break;
            case 2:
                console.log(`This Month has 29 days, ${year} adalah tahun kabisat`);
                break;
            case 3:
                console.log(`This Month has 31 days`);
                break;
            case 4:
                console.log(`This Month has 30 days`);
                break;
            case 5:
                console.log(`This Month has 31 days`);
                break;
            case 6:
                console.log(`This Month has 30 days`);
                break;
            case 7:
                console.log(`This Month has 31 days`);
                break;
            case 8:
                console.log(`This Month has 31days`);
                break;
            case 9:
                console.log(`This Month has 30 days`);
                break;
            case 10:
                console.log(`This Month has 31 days`);
                break;
            case 11:
                console.log(`This Month has 30 days`);
                break;
            case 12:
                console.log(`This Month has 31 days`);
                break;
            default:
                console.log(`Test`);
        }

    } else {
        switch (month) {
            case 1:
                console.log(`This Month has 31 days`);
                break;
            case 2:
                console.log(`This Month has 28 days`);
                break;
            case 3:
                console.log(`This Month has 31 days`);
                break;
            case 4:
                console.log(`This Month has 30 days`);
                break;
            case 5:
                console.log(`This Month has 31 days`);
                break;
            case 6:
                console.log(`This Month has 30 days`);
                break;
            case 7:
                console.log(`This Month has 31 days`);
                break;
            case 8:
                console.log(`This Month has 31 days`);
                break;
            case 9:
                console.log(`This Month has 30 days`);
                break;
            case 10:
                console.log(`This Month has 31 days`);
                break;
            case 11:
                console.log(`This Month has 30 days`);
                break;
            case 12:
                console.log(`This Month has 31 days`);
                break;
            default:
                console.log(`Test`);
        }
    }

}



console.log(getDays(2, 2021))