function Stopwatch() {
    let startTime, endTime, running, duration;

    this.start = function() {
        if(running) {
            throw new Error('Stopwatch has already started');
        }
        running = true;
        startTime = new Date();
    }

    this.stop = function() {
        if(!running) {
            throw new Error('Stopwatch is not started');
        }
        running = false;
        endTime = new Date();
        duration = (endTime.getTime() - startTime.getTime()) / 1000;
    }

    Object.defineProperty(this, 'getduration', {
        get: function() {
            return duration;
        }
    })
}

const stopwatch = new Stopwatch();
