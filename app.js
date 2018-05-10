var sorting = function(number) {
    var entry = [];
    var numbers = Math.sqrt(number);
    var output = [];

    for (var i = 0; i < number; i++) {
        entry.push(true);
    }

    for (var i = 2; i <= numbers; i++) {
        if (entry[i]) {
            for (var j = i * i; j < number; j += i) {
                entry[j] = false;
            }
        }
    }

    for (var i = 2; i < number; i++) {
        if(entry[i]) {
            output.push(i);
        }
    }

    return output;
};

document.getElementById("numbers").innerHTML = sorting(1000000).join(", ");