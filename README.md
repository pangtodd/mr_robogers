# Mr. Roboson's Neighborhood

#### By Todd Pangilinan

A website that generates a sequence of numbers, and substitues messages for specific numbers. 

## Technologies used:

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* markdown

## Description:
 Website that takes user input (as a number) and returns a sequence of number. However, anytime in the sequence if there is a 1, 2, or 3, it will output a string instead of the number(s). 1 will be replaced with "Beep!", 2 with "Boop!" and 3 with "Won't you be my neighbor?". The numbers have a heirarchy, if a number includes two or more of these numbers, the highest value number over-rides lower value number (exampe: "123" would equal "won't you be my neighbor").


## Setup/Installation Requirements

* If you don't have git installed on your machine, follow these [instructions.](https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/git-and-github)
* Via your terminmal, navigate to the directory you want to store my files in.
* Clone my git hub directory by typing or cutting pasting: "git clone https://github.com/pangtodd/mr_robogers.git" into your terminal
* open files in browswer or code editor of your choice.
* you can also view this website [here](https://pangtodd.github.io/mr_robogers) or you can cut and paste this into your browser: https://pangtodd.github.io/mr_robogers

## Tests:

#### Describe: mrRoboto()

- Test: "It will take the input of a number and produce a sequence of numbers (array) from zero up to and including the inputted number."
- Code: number = "3"; mrRoboto(number);
- Expected Output: 0, 1, 2, 3
---
- Test: "It can identify a specific number within the array."
- code: Array: [0, 1, 2, 3]; mrRoboto(number);
- Expected output: 1
---
- Test: "It can identify two specific numbers within the array."
- code: Array: [0, 1, 2, 3]; mrRoboto(number);
- expected output: 1, 2
---
- Test: "It can identify a number, regardless of which digit/position it is located"
- code: Array: [0, 1, 11]; mrRoboto(number);
- expected output: 1, 11
---
- Test: "It can generate an array in sequence/order, and replace any numbner that contains 1, 2, or 3, with a string.
- code: Array: [0, 1, 2, 3, through 13]; mrRoboto(number);
- expected output: "0, Beep!, Boop!, Won't you be my neighbor, 4, 5, 6, 7, 8, 9, 10, Beep! Boop! Won't you be my neighbor"

## Known Bugs

* As of 2/12/22, no known bugs.
* If you notice mistakes or bugs, please email pang.todd@gmail.com

## License

[MIT](https://opensource.org/licenses/MIT)
Copyright (c) Todd Pangilinan 