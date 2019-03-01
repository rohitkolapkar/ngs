// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let counter=0;
const interval=setInterval(()=>{
    console.log('Hello world');
    counter++;
    if(counter===5){
        console.log('Done');
        clearInterval(interval);
    }
},
1*1000
);