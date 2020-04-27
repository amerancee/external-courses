"use strict";

class HomeDevice {
    constructor(devName, devPower) {
        this.devName = devName;
        this.devPower = devPower;
        this.isOn = false;
    }

    switchDevStatus(newState) {
        this.isOn = newState;
        return this.isOn;
    }

    getDevStatus() {
        let result = this.devName;
        if (this.isOn) {
            result += " is on";
        } else {
            result += " is off";
        }
        return result;
    }
}

class Fridge extends HomeDevice {
    constructor(devName, devPower, devNoise) {
        super(devName, devPower);
        this.devNoise = devNoise;
    }

    getDevStatus() {
        return super.getDevStatus() + `, noise: ${this.devNoise}dB`;
    }
}

class Lamp extends HomeDevice {
    constructor(devName, devPower, devBrightness) {
        super(devName, devPower)
        this.devBrightness = devBrightness;
    }

    getDevStatus() {
        return super.getDevStatus() + `, brightness: ${this.devBrightness}%`;
    }
}

class TV extends HomeDevice {
    constructor(devName, devPower) {
        super(devName, devPower)
    }

    getDevStatus() {
        return super.getDevStatus();
    }
}

class Home {
    constructor(devs) {
        this.devs = devs;
    }

    getFullUsedPower() {
        let fullPower = 0;
        for (let dev of devs) {
            if (dev.isOn) {
                fullPower += dev.devPower;
            }
        }
        return `${fullPower}W`;
    }

    findDev(name) {
        for (let dev of devs) {
            if(dev.name === name) {
                return dev;
            }
        }
        return null;
    }

    turnOnDev(...devNames) {
        for (let name of devNames) {
            let dev = this.findDev(name);
            if (dev) {
                dev.switchDevStatus(true);
            }
        }
    }

    turnOffDev(...devNames) {
        for (let name of devNames) {
            let dev = this.findDev(name);
            if (dev) {
                dev.switchDevStatus(false);
            }
        }
    }
}

let devs = [
    new HomeDevice("game console", 500),
    new HomeDevice("PC", 750),
    new Fridge("small fridge", 600, 10),
    new Fridge("big fridge", 1300, 17),
    new Lamp("nightlight", 45, 40),
    new Lamp("chandelier", 90, 80),
    new Lamp("room lamp", 75, 70),
    new Lamp("bathroom lamp", 60, 50),
    new TV("TV", 420)
];

let home = new Home(devs);

home.turnOnDev("PC", "TV", "small fridge", "room lamp");
let userPower = home.getFullUsedPower();
let dev = home.findDev("chandelier");