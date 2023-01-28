const webSocket=require("ws");
const wss=new webSocket.Server({port:8085});
let data=[];
wss.on("connection",ws => {

    ws.on("message",(element)=>{
        //if battery is low generate alert to the client side
        if(element.tdata.substring(114,116)<20){
            alert("Battery is under 20%");
        }
        //adding time of the received data
        let t={
            time:new Date()
        };
        //concatenating the object with the timestamp
    data.push(Object.assign(element,t));
    });
    ws.on("close",function(){
        //storing in the database 
        let myDataString=JSON.stringify(data);
        localStorage.setItem("myData",myDataString);
    });
})


