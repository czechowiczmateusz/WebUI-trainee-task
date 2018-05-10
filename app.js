let sorting = (number) => {
    let entry = [];
    let numbers = Math.sqrt(number);
    let output = [];

    for (let i = 0; i < number; i++) {
        entry.push(true);
    }

    for (let i = 2; i <= numbers; i++) {
        if (entry[i]) {
            for (let j = i * i; j < number; j += i) {
                entry[j] = false;
            }
        }
    }

    for (let i = 2; i < number; i++) {
        if(entry[i]) {
            output.push(i);
        }
    }

    return output;
};

document.getElementById("numbers").innerHTML = sorting(1000000).join(", ");