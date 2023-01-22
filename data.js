const { writeFile } = require("fs");

(async () => {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    console.log(result);

    writeFile("./content/data.json", JSON.stringify(result), (err, result) => {
        if (err) {
            return err;
        }
        return result;
    });
})();

