import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            name: "URL",
            message: "Type The URL: ",
        },
    ])
    .then((answers) => {
        console.info("Status: ", "Recieved Sucessfully!");
        const url = answers.URL;
        var qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream("image.png"));

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The File Has Been Saved!");
        });

        fs.readFile("URL.txt", "utf-8", (err, data) => {
            if (err) throw err;
            console.log(`The URL is ${data}`);
        });
    });
