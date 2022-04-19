$(function () {
    const date = new Litepicker({
        element: document.getElementById('date'),
        hotelMode: 1,
        disallowBookedDaysInRange: 0,
        selectForward: 0,
        minDays: 1,
        singleMode: false,
        minDate: new Date(),
        tooltipText: {
            one: "ночь",
            few: "ночи",
            other: "ночей",
            many: "ночей",
        },
    });
});