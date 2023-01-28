const http = require('http');
const app = require("./backend/app");

// const server = http.createServer((req,res)=>{
//     res.end("Hola mundo 2")
//   }
// );

// server.listen(process.env.PORT || 3000);

const port = process.env.PORT || 3000;
app.set('port',)
const server = http.createServer(app);
server.listen(port);
