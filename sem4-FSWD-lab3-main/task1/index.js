const fs = require('fs');
const os = require('os');
const fsp = require('fs/promises');
const path = require('path');

const totalMemory = os.totalmem();
const osType = os.type();
const freeMemory = os.freemem();
const filePath = path.join(__dirname, 'logs', "system-info.txt");
const data = `OS type : ${osType}\nTotal memory : ${totalMemory}\nFree memory : ${freeMemory}`;
fs.writeFileSync(filePath, data);
async function verify() {
    let dataFromFile = await fsp.readFile(filePath);
    console.log(dataFromFile.toString());
}
verify();