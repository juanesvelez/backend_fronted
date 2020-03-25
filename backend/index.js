const server = require("./server");
const {PORT} = require("./config");

server.listen(PORT, ()=>{
    console.log(`Codingapp backend running on port ${PORT}`);
    
})


