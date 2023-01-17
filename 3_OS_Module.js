//Using built-in Methods.

const os = require("os");

console.log(os.hostname());
console.log(os.userInfo());

//Method returing system uptime in seconds.
console.log(`The system uptime is : ${os.uptime()}`);

//Printing the system details
const systemInfo = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(systemInfo);