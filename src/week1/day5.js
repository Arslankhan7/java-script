// Anonymous Functions:

let anonFunction = function (){

}

// Arrow functions:

let fun =  () => {
    
}

// Function Scope and Block Scope:


function functionScope() {

    var name = "Ali";
    console.log("my name is " , name);
    
    if (true) {
        var last_name = "Karim"
        console.log("my last name is " , last_name);
    }
    if (true) {
        var full_name = "saima akhtar";
        console.log(full_name ,last_name);
    }
    console.log(name,full_name );
    
}
functionScope()


function  blockScope(){
    let name1 = "daniyal";
    console.log(name1);

    if (true) {
        let name2 = "umar"  ;
        console.log(name2, name1);
    }
    console.log(name1);

}