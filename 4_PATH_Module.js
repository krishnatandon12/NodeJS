const os = require("os");
const path = require("path");

//Find the username using os module.
const osType = os.type();
console.log(osType);
const details = os.userInfo();
console.log(details);
console.log(details.username);
const pathDetails = details.homedir;

const filePath = path.join(pathDetails, "TestServer", "John");
console.log(filePath);

const textFilePath = path.join("/test", "subTest", "test.txt");
console.log(textFilePath);

//Print the basename - last in the selected path
const base = path.basename(textFilePath);
console.log(base);

//Return an absolute path
const absolute = path.resolve(__dirname, "test", "subTest", "test.txt");
console.log(absolute);