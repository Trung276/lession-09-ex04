function month() {
    let month = parseFloat(document.getElementById("month").value);
    let result = "";
    switch (month) {
        case 1:
            result = "JJanuary - 31 days";
            break;
        case 2:
            result = "February - 28 days in a common year and 29 days in leap years";
            break;
        case 3:
            result = "March - 31 days";
            break;
        case 4:
            result = "April - 30 days";
            break;
        case 5:
            result = "May - 31 days";
            break;
        case 6:
            result = "June - 30 days";
            break;
        case 7:
            result = "July - 31 days";
            break;
        case 8:
            result = "August - 31 days";
            break;
        case 9:
            result = "September - 30 days";
            break;
        case 10:
            result = "October - 31 days";
            break;
        case 11:
            result = "November - 30 days";
            break;
        case 12:
            result = "December - 31 days";
            break;
        default:
            result = "Please enter again the month you want to know.";
            break;
    }
    document.getElementById("result").innerHTML = result;
}
