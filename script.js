//modules
const https = require('node:https');

//variables
let data;

//CORE
getRequest();

//CORE


//FUNCTIONS
function getRequest(){
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
        });
        }).end();
}
