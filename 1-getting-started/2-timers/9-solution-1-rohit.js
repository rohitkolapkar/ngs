const hello=delay=>{
    setTimeout(()=>{
        console.log('Hello World after '+delay+' seconds');
        hello(delay+1);
    },delay*1000);
};

hello(1)