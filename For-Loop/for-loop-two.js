var text = "";
var total = 0;

for(var i = 0; i < 6; i++) {
    if(i == 3) {
        text = "finished";
        break;
        // continue;
    } else if(i == 5) {
        i++;
    } else {
        //
    }
    total += 1;
}

console.log(text + " at the number " + i + " with a total of " + total);