// Callbacks and Higher Order Functions  interview



function printName(callback){  
    callback()
    }
    
    function helloSaima(){
        console.log("hello saima are you there!");
    }
    
    
    
    printName(helloSaima)
    
    
    function sumOfTwo(callback1){
    let result = 10 + 2;
    callback1(result) //12
    }
    
    function finalResult(result){
        console.log(result);
    }
    
    sumOfTwo(finalResult);