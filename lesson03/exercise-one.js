let fiveString = ['zero','one','two','three','four'];
console.log(fiveString);

fiveString.push('five');
console.log(fiveString);

fiveString.splice(1, 1);
console.log(fiveString);

let commaSep = fiveString.join(', ');
console.log(commaSep);