"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 100] = "Sunday";
    WeekDays[WeekDays["Monday"] = 101] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 102] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 103] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 104] = "Thursday";
    WeekDays[WeekDays["Friday"] = 105] = "Friday";
    WeekDays[WeekDays["Saturday"] = 106] = "Saturday";
})(WeekDays || (WeekDays = {}));
var day = WeekDays.Friday;
console.log(WeekDays);
