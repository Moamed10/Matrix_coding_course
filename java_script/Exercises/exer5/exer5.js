let car = {
    make: "Senad",
    model: "Camry",
    year: 2021,

    start: function() {
        console.log(`Starting the ${this.year} ${this.make} ${this.model}...`);
    },

    drive: function() {
        console.log(`Driving the ${this.year} ${this.make} ${this.model}...`);
    }
};

car.start();
car.drive();
