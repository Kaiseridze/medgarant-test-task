import Time from "./Time.js";
// Object of work time
const workingHours = { start: "09:00", stop: "21:00" };

// Array of objects, that contains busy slots
const busy = [
    { start: "10:30", stop: "10:50" },
    { start: "18:40", stop: "18:50" },
    { start: "14:40", stop: "15:50" },
    { start: "16:40", stop: "17:20" },
    { start: "20:05", stop: "20:20" },
];

// Create an instance of Time class
const time = new Time(workingHours, busy);

// For clarity purposes, the method is called about the free time before the array is created
time.freeSlotsInfo()

// Creating an array of free slots during working hours
time.generateFreeTimeSlots()

// Showing an info again
time.freeSlotsInfo()
