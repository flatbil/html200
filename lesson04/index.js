function myClick(){
    let box = prompt("Find the square of a number" ) ;
    let num = 2;

    if(!isNaN(box)){
        alert(Math.pow(box, num));
    } else {
        alert("Your entry is not a number, please try again.");
    }
    
}

