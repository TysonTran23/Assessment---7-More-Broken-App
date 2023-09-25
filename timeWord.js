function timeToWords(time) {
  const numbersToWords = {
    "00": "zero",
    "01": "one",
    "02": "two",
    "03": "three",
    "04": "four",
    "05": "five",
    "06": "six",
    "07": "seven",
    "08": "eight",
    "09": "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty-one",
    22: "twenty-two",
    23: "twenty-three",
    24: "twenty-four",
    25: "twenty-five",
    26: "twenty-six",
    27: "twenty-seven",
    28: "twenty-eight",
    29: "twenty-nine",
    30: "thirty",
    31: "thirty-one",
    32: "thirty-two",
    33: "thirty-three",
    34: "thirty-four",
    35: "thirty-five",
    36: "thirty-six",
    37: "thirty-seven",
    38: "thirty-eight",
    39: "thirty-nine",
    40: "forty",
    41: "forty-one",
    42: "forty-two",
    43: "forty-three",
    44: "forty-four",
    45: "forty-five",
    46: "forty-six",
    47: "forty-seven",
    48: "forty-eight",
    49: "forty-nine",
    50: "fifty",
    51: "fifty-one",
    52: "fifty-two",
    53: "fifty-three",
    54: "fifty-four",
    55: "fifty-five",
    56: "fifty-six",
    57: "fifty-seven",
    58: "fifty-eight",
    59: "fifty-nine",
  };

  //Array destructuring for Time String
  const [hour, minutes] = time.split(":");

  //Variable for AM/PM
  let suffix;

  // Turn hours/minutes into numbers
  let numericHour = parseInt(hour);

  // If hours is greater than or equal to 12, it is PM AND
  if (numericHour >= 12) {
    suffix = " PM";
    //if it is greater than 12, we minus 12 and turn it into a 12 hour clock
    if (numericHour > 12) {
      numericHour -= 12;
    }
  }
  // If this runs, it is not in PM meaning it is AM
  else {
    suffix = " AM";
    //If the hour is 00, return midnight
    if (numericHour === 0) {
      return "midnight";
    }
  }
  //Grab words according to string
  const hoursToWords = numbersToWords[numericHour.toString().padStart(2, "0")];
  const minutesInWords = numbersToWords[minutes];

  return `${hoursToWords} ${minutesInWords}${suffix}`;
}

module.exports = timeToWords;
