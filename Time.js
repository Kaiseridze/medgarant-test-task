import Converter from "./Converter.js";

class Time {
    /* Constructor includes working hours object, 
    which means a key-value pait and array of busy hours, 
    that contains key-value pair of start and end busy time
    */
    constructor(workingHours, busyHours) {
        this.workingHours = workingHours;
        this.busyHours = busyHours;
        this.start = this.workingHours.start;
        this.stop = this.workingHours.stop;
        this.convertedBusy = this.busyHours.map((element) => {
            return {
                start: element.start,
                stop: element.stop,
            };
        });
    }

    // final array of generated slots
    generatedSlots = [];
    freeSlotsInfo() {
        console.log(this.generatedSlots);
    }

    // Implied as a private method that generates objects with a start and end at a certain interval
    generateTimeSlots = (interval) => {
        const slots = [];
            let currentTime = Converter.timeToMinutes(this.workingHours.start);
            const endTime = Converter.timeToMinutes(this.workingHours.stop);
            while (currentTime + interval <= endTime) {
                slots.push({
                    start: Converter.minutesToTime(currentTime),
                    stop: Converter.minutesToTime(currentTime + interval),
                });
                currentTime = currentTime + interval;
            }
            return slots;
    };
    // Implied as public method to generate an free time slots
    generateFreeTimeSlots = () => {
        const slots = this.generateTimeSlots(30);
            const freeSlots = slots.filter((slot) =>
                !this.busyHours.some((busySlot) => {
                    return (
                        Converter.timeToMinutes(slot.start) < Converter.timeToMinutes(busySlot.stop) &&
                        Converter.timeToMinutes(slot.stop) > Converter.timeToMinutes(busySlot.start)
                    );
                })
            );
            this.generatedSlots = JSON.parse(JSON.stringify(freeSlots));
            return freeSlots;
    };
}

export default Time;
