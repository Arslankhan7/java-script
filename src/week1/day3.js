let fun = ( ) => {

}

function functionscope() {
    var name = "ALI"
    console.log(" my name is" , name);

    if (true) {
        var last_name = "karim"
      console.log("my last name is" , last_name );
        
    }
    if (true) {
        var full_name = "saima akhter";
        console.log(full_name , last_name);
    }
    console.log(name,full_name);
}
functionscope()
function blockscope(){
    let name1 = "daniyal";
    console.log(name1);
    if (true) {
        let name2 = "umar" ;
        console.log(name2,name1)
    }
    console.log(name1);
}