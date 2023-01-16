// __dirname = prints the current directory
console.log(__dirname);

// __filename = prints the filename
console.log(__filename);

//require - function to use modules (CommonJS)
console.log(require);

//module - info about current module
console.log(module);

//process - info. about env. where the program is executed.
console.log(process);

//setInterval - executes the callback fn. everytime after the defined time in ms.
setInterval(() => {
    console.log("Hello Node World!");
}, 1000);