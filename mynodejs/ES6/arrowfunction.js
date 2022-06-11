//Arrow function evolution

function square(number) {
    return number * number;
}
//-------------------------
const square1 = function(number) {
    return number * number;
}

const square1_1 = (number) => {
    return number * number;
}

const square1_2 = number => { // 1 parameter can ignore ()
    return number * number;
}

const square2 = number => number * number; //single 1 line can get rid of the return keyword as well as {}
//Arrow function evolution End

//------------------------
const jobs = [
    { id : 1, isActive : true},
    { id : 2, isActive : true},
    { id : 2, isActive : false}
];

const activeJobs = jobs.filter(function(job){
    return job.isActive;
})

const activeJobs2 = jobs.filter(job => job.isActive);

//-----------------------------------------
//old day (settimeout function reference to window then fix with self)
const person =  {
    talk() {
        var self = this;
        setTimeout(function() {
            console.log("this", self);
        }, 1000);
    }
};

//now we have arrow function the we no longer need to rebind this
const person1 = {
    talk() {
        setTimeout(() => console.log("this", this), 1000);
    }
}

person1.talk();