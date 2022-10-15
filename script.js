//modules
const https = require('node:https');
const fs = require("node:fs");

//variables
let data='';

//CORE
getRequest(saveDataToFile);

//CORE


//FUNCTIONS
function saveDataToFile(filename,content) {
      fs.writeFile(filename, content, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
    
  }
function getRequest(save){
    const options = {
        hostname: 'api.alternative.me',
        port: 443,
        path: '/fng/?limit=2',
        method: 'GET'
      };

      https.request(options, (res)=>{

        res.on('data', (chunk)=> {
          data += chunk;
        });
      
        res.on('end', () => {
          console.log(data);
          save('data',data);//save data to file
        });
        }).end();
}
