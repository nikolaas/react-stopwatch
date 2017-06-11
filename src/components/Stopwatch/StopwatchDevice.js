export class StopwatchDevice {

    constructor(interval) {
        this.interval = interval;
        this.tickCallback = undefined;
        this.stopwatchProcess = undefined;
    }

    onTick(tickCallback) {
        this.tickCallback = tickCallback;
    }

    start() {
        this.stopwatchProcess = setInterval(() => this.tick(), this.interval);
    }

    stop() {
        if (this.stopwatchProcess !== undefined) {
            clearInterval(this.stopwatchProcess);
            this.stopwatchProcess = undefined;
        }
    }

    tick() {
        if (this.tickCallback !== undefined) {
            this.tickCallback();
        }
    }
}