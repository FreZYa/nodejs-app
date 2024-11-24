const fs = require("fs");
const qs = require("querystring")

const routeHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader("Content-Type", "text/html");
    if (url === "/") {
        res.write(`
        <html>
            <head>
                <title>Enter Message</title>
            </head>
            <body>
                <form method="POST" action="/log">
                    <input type="text" name="message">
                    <button type="submit">Save</button>
                </form>
            </body>
        </html>
        `
        );
        return res.end();
    }

    if (url === "/log" && method === "POST") {

        // body parsing (bodyParser)
        const body = [];

        req.on("data", (chunk) => {
            body.push(chunk);
            console.log(chunk);
        });

        req.on("end", () => {
            const bodyParsed = Buffer.concat(body).toString();
            const message = bodyParsed.split("=")[1];
            console.log(qs.parse(bodyParsed));
            fs.appendFile("message.txt", message + "\n", (err) => {
                if (err) {
                    console.error("Dosyaya yazma hatası:", err);
                }
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });

            // console.log(bodyParsed);
        })

        // fs.appendFileSync("message.txt", "\ndeneme");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
}

module.exports = routeHandler;