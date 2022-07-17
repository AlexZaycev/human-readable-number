module.exports = function toReadable (number) {
    const one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozen = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let string = String(number);

    if (string.length === 1) {
        return one[string];


    } else if (string.length === 2) {
        if (string > 10 && string < 20) {
            return dozen[string[1]];

        } else if (string[1] == 0) {
            return tens[string[0]];
        } else {
            return tens[string[0]] + ' ' + one[string[1]];
        }


    } else if (string.length === 3) {
        if (string[1] == 0 && string[2] == 0) {
            return one[string[0]] + ' hundred';
        } else if ( string[1] == 0 && string[2] !=0) {
            return one[string[0]] + ' hundred ' + one[string[2]];
        } else if (string[1] != 0 && string[2] == 0) {
            return one[string[0]] + ' hundred ' + tens[string[1]]
        } else if (string[1] == 1) {
            return one[string[0]] + ' hundred ' + dozen[string[2]];
        } else if (string[1] > 1) {
            return one[string[0]]  + ' hundred ' + tens[string[1]] + ' ' + one[string[2]];
        }
    }
  
}
