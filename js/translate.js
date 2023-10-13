let day = prompt("Enter a day of the week to translate");
let dayFinal = day.toLowerCase();

switch (dayFinal) {
    case "monday":
        alert("Montag");
        break;
    case "tuesday":
        alert("Dienstag");
        break;
    case "wednesday":
        alert("Mittwoch");
        break;
    case "thursday":
        alert("Donnerstag");
        break;
    case "friday":
        alert("Freitag");
        break;
    case "saturday":
        alert("Samstag");
        break;
    case "sunday":
        alert("Sonntag");
        break;
    default:
        alert("Invalid day");
        break;
}






let dayIf = prompt("Enter a day of the week to translate");
let dayIfFinal = dayIf.toLowerCase();

if (dayIfFinal === "Monday") {
    alert("Montag");
} else if (dayIfFinal === "Tuesday") {
    alert("Dienstag");
} else if (dayIfFinal === "Wednesday") {
    alert("Mittwoch");
} else if (dayIfFinal === "Thursday") {
    alert("Donnerstag");
} else if (dayIfFinal === "Friday") {
    alert("Freitag");
} else if (dayIfFinal === "Saturday") {
    alert("Samstag");
} else if (dayIfFinal === "Sunday") {
    alert("Sonntag");
} else {
    alert("Invalid day");
}
