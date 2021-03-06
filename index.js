const fs = require('fs');
const sharp = require('sharp');


let fileNameArray = [];
function readImage() {
    fs.readdirSync(__dirname + '/original').forEach(filename =>  {
        fileNameArray.push(filename);
    });
}

async function transformImage() {
    try {
        for (let file in fileNameArray) {
             await sharp(`./original/${fileNameArray[file]}`)
                .resize(250, 250)
                .webp()
                .toBuffer()
                .then((data) => {
                    let target = `/transform/`;
                    let modFileName = fileNameArray[file].split(".")[0];
                    fs.writeFile(__dirname+target+`${modFileName}.webp`, data, 'binary', function (err) {
                        if (err) throw err;
                    })
                });
        }
    } catch (e) {
        console.log(e)
    }
}
readImage();
transformImage().then(() => console.log("Tada"));
