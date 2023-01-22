const { writeFileSync } = require("fs");
const http = require("http");

//Create a new server by using createServer() method
const server = http.createServer((req, res) => {
    //TODO
    // writeFileSync("./content/sub/req-obj.txt", JSON.stringify(req), {
    //     encoding: "utf8"
    // });
    // console.log(req);
    //Node does not allow printing of circular objects. RESEARCH more on this.
    console.log("req data");
    console.log(req);

    if (req.url === "/") {
        res.end("Welcome to our Node JS homepage");
        //The above line is a combination for
        //res.write() and res.end()
        return;
    }
    //res.write("Welcome to our Node JS homepage");
    //After we send the response, as of now no "req" is made
    //we have to end the response.
    //res.end();

    if (req.url === "/about") {
        res.end("Here is our short history");
        return;
    }

    if (req.url === "/contact") {
        res.end("Contact us : testingNode@js.com")
        return;
    }

    res.end(`<h1>Oops !!!! It's something we can't find.</h1>
        <p>Error 404</p>
        <a href="/">Home</a>
    `);
});

server.listen(5000);

//Accessing the URL.
