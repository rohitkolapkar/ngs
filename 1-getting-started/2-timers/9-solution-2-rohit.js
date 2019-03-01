let counter=0,lastIntervalId;
const newHello=delay=>{
    
    lastIntervalId=setInterval(()=>{
        console.log("Hello world."+delay+'ms');
        counter++;

        if(counter===5){
            clearInterval(lastIntervalId);
            counter =0;
            newHello(delay+100);
        }
        
    },delay)


};
newHello(100);