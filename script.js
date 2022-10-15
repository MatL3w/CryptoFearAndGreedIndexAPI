//modules
const https = require("node:https");
const fs = require("node:fs");

//variables
let str = "";
let limit = 100;

//CORE
setLimitFromInputAgruments();
getRequest(saveDataToFile);

//CORE

//FUNCTIONS
function setLimitFromInputAgruments(){
    if(process.argv[2]) limit=Number(process.argv[2]);
}
function saveDataToFile(filename, content) {
  fs.writeFile(filename, content, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}
function getRequest(save) {
  const options = {
    hostname: "api.alternative.me",
    port: 443,
    path: `/fng/?limit=${limit}&format=json&date_format=world`,
    method: "GET",
  };
    https.request(options, (res) => {
      res.on("data", (chunk) => {
        str += chunk;
      });
      res.on("end", () => {
        save("data", str); //save data to file
      });
    }).end();
}
