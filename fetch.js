
//this file is fetching the data
//previousData variable is created to hold the previous data and further compare with it
let previousData=[];
const ws=new WebSocket("ws://localhost:8082");

async function scrapeData(){
    try{
        //fetch the data from the url
        const response=await fetch("http://3.109.76.78:2222/xenergyData.json");
        const jsonData= await response.json();
        jsonData.records.forEach(element => {
            //comparing previous data
            if(!previousData.includes(element)){
                previousData.push(element);
                ws.addEventListener("open",e=>{
                    ws.send(element);
                });
        

            }
            

            
        });
       

    }
    catch(err){
        console.log(err);
    }
    
}
scrapeData();
