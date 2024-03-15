function stdGrades(marks){
    if (marks >= 40 && marks <=50) {
        return "C"
    } else if(marks > 50 && marks <= 60 ) {
        return "B"
    } else if(marks > 80 && marks <= 95 ) {
        return "A+"
    } else{
        console.log("sorry you're fail!");
    }


}

console.log(stdGrades(35));