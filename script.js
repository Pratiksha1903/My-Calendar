// Java script code!!!
// Window onload function for taking real time date 
window.onload = function() {
        var D = new Date();
        var get_month = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "Auctober", "November", "December"];
        var month = D.getMonth();
        var year = D.getFullYear();
        var first_date = get_month[month] + " " + year; //showing current month and year
        var temp = new Date(first_date).toDateString();
        var first_day = temp.substring(0, 3);
        var get_day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var day_no = get_day.indexOf(first_day); //getting first date of the current month
        var day = new Date(year, month + 1, 0).getDate();
        var calendar = get_calender(day_no, day); //passing first date and current date to function
        document.getElementById("calendar-month-year").innerHTML = get_month[month] + " " + year; //writing current date and year at heading 
        document.getElementById("calendar-dates").appendChild(calendar); // Putting  calender at html file 
    }
    //getting whole table for the dates
function get_calender(day_no, day) {

    var table = document.createElement("table");
    var tr = document.createElement("tr");
    for (var i = 0; i <= 6; i++) {
        var td = document.createElement("td");
        td.innerHTML = "SMTWTFS" [i];
        tr.appendChild(td);
    }
    table.appendChild(tr); //appending each row into calendar body.
    tr = document.createElement("tr");
    for (var i = 0; i <= 6; i++) {
        if (i == day_no) { break; }
        var td = document.createElement("td");
        td.innerHTML = "";
        tr.appendChild(td); //appending each data into table row
    }
    var count = 1;
    for (; i <= 6; i++) {
        var td = document.createElement("td");
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    for (var j = 0; j <= 6; j++) {
        tr = document.createElement("tr");
        for (var k = 0; k <= 6; k++) {
            if (count > day) {
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement("td");
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

}