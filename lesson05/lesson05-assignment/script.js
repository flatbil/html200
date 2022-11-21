let account = {
    name: "Johnny Nighttrain Monfriez",
    balance: 35000
}

welcome();
function welcome(newValue){
    let myWelcome = '';
    if(newValue == null){
        myWelcome = prompt("Welcome "+ account.name +" to the 1st UW JavaScript Bank \nWhat can we do for you today?" + 
            "\nTell me if you would like to: "+
            "\nWithdraw (W)"+
            "\nDeposit (D)" +
            "\nView Balance (B)" +
            "\nor Quit (Q)"
        );
    } else {    
        myWelcome = newValue;
    }

    decisionLoop(myWelcome);
      
}
function decisionLoop() {
    decisionLoop(' ');
}

function decisionLoop(value){
    let myValue = value;
    // alert(myValue);
    switch(myValue){
        case 'Q':
        case 'q':
            goodbye();
            break;
        case 'W':
        case 'w':
            widthdrawl();
            break;
        case 'D':
        case 'd':
            deposit();
            break;
        case 'B':
        case 'b':
            viewBalance();
            break;
        default:
            let newValue = prompt("Please select one of the letters W, D, B or Q.");
            decisionLoop(newValue);
    } 
}

function widthdrawl() {
    let amount = prompt("What amount would you like to Withdrawl today?" +
    "\nEnter any amount or you can enter (Q) to quit")

        let newAmount = Number(amount);
        if(isNaN(newAmount)){
            decisionLoop(amount);
        } else if(negative(newAmount)){
            alert("Think you found the unlimited money hack? Sorry not this time." +
            "\nNegative numbers are not legal.");
            widthdrawl();
        }else {
            if(lastCheck(newAmount)){
                if(safetyCheck(newAmount)){
                    continueWithdrawl(newAmount);
                } else {
                    let conf = confirm("Looks like your balance will be less than $300, Would you like to proceded?");
                    if(conf){
                        continueWithdrawl(newAmount);
                    } else {
                        widthdrawl();
                    }
                }

            } else {
                alert("Insuficient Funds");
                widthdrawl();
            }


                // deposit();
        }
}
function deposit() {
    let amount = prompt("What amount would you like to deposit today?" +
    "\nEnter any amount or you can enter (Q) to quit")

        let newAmount = Number(amount);
        if(isNaN(newAmount)){
            decisionLoop(amount);
        } else if(negative(newAmount)){
            alert("No Negative numbers please. Try again.");
            deposit();
        } 
        else {
            if(!upperCheck(newAmount)){
                account.balance += newAmount;
                let value = prompt("Thank you for your deposit of: $"+ newAmount
                +"\nWhat else can we do for you?" +
                    "\nWithdraw (W)"+
                    "\nDeposit (D)" +
                    "\nView Balance (B)" +
                    "\nor Quit (Q)")
                decisionLoop(value);
            } else {
                alert("There is a deposit limit of $50,000.");
                deposit();
            }


                // deposit();
        }
            // alert("That amount is not a value that we could parse." +
            // "\nLet's try this again.");
            // deposit();
    

}
function viewBalance() {
    alert(account.name + "\nCurrent Balance: " + account.balance);
    decisionLoop();
}
function continueWithdrawl(newAmount){
    account.balance -= newAmount;
    let value = prompt("Thank you for your Withdrawl of: $"+ newAmount
    +"\nWhat else can we do for you?" +
        "\nWithdraw (W)"+
        "\nDeposit (D)" +
        "\nView Balance (B)" +
        "\nor Quit (Q)")
    decisionLoop(value);
}
function negative(number){
    return number < 0;
}
function safetyCheck(number){
    let result = 300 < account.balance - number;
    alert("safetyCheck " + result);
    return result;
}
function lastCheck(number){
    let result = 0 < account.balance - number;
    alert("lastCheck " + result);
    return result;
}
function upperCheck(number){
    let result = number > 50000;
    return result;
}

function goodbye(){
    alert("Thanks for using 1st UW JavaScript Bank \nGoodbye!");
    window.close();
    
}


