class Converter {

    // Converting hours to minutes
    timeToMinutes(time) {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    }

    // Converting minutes to HH:MM view
    minutesToTime(minutes) {
            const hours = Math.floor(minutes / 60)
                .toString()
                .padStart(2, "0");
            const mins = (minutes % 60).toString().padStart(2, "0");
            return `${hours}:${mins}`;
    }
}

export default new Converter()