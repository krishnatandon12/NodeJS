//const fs = require("fs");
//fs.readFileSync()
//Alternatively, we destructure it directly as follows:

const { readFileSync, writeFileSync } = require("fs");

//readFileSync works when we want to read a file.
//readFileSync will accept 2 parameters => 
// 1. path, where the file is stored
// 2. Encoding, usually we opt for UTF-8 as utf8.

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//Create a new file using writeFileSync
// 1. When we use writeFileSync, if the file is not present, node will create the file.
// 2. We pass the content to be written in that file.

writeFileSync("./content/result-sync.txt", `Here is the merge of 2 files - ${first} and ${second}`);

//Appending the content by appending to new/existing file
writeFileSync("./content/result-sync.txt",
    `This is new text appended everytime we run this file. \n`,
    {
        encoding: "utf8",
        flag: "a"
    }
);
