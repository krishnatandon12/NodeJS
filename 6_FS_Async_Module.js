const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return "";
    }
    const first = result;

    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        const second = result;

        writeFile("./content/result-async.txt", `Merged - ${first} and ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return err;
            }
            console.log(result); //writeFile callback.
        });
    }); //second.txt callback ends.

}); //first.txt callback ends.