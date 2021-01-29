# Pizza Ordering Website

#### By Dani Renner
#### Independent project that allows users to choose what kind of pizza they want and generates how much it will cost


## Technologies Used

* HTML
* CSS
* git
* Javascript
* JQuery
* Bootstrap

## Description

This project uses a forms to collect information from the user about what they want on their pizza and what size it will be. The choices are stored in an object. Then the program uses prototypal functions to calculate how much the pizza will cost.

## Setup/Installation Requirements

* You can clone the repository to your desktop
* Navigate to the root directory of the project in the terminal and type 'open index.html' to view project in browser. OR you may use your computers graphical user interface to find index.html, and double-click to open in a browser. Use Chrome for best results.
* Open the project in a text editor to view the code.

## Specifications

* Describe: Pizza()
* Test: creates an object to contain details about the desired pizza
* Expect: Pizza.toEqual(an Object for pizza size, toppings[]);

* Describe: Pizza.countToppings()
* Test: uses .length to determine how many toppings user wants
* Expect: Pizza.countToppings()toEqual(5); if user selects 5 toppings

* Describe: Pizza.costCalc()
* Test: calculates a cost based on size & number of toppings
* Expect: Pizza.costCalc()toEqual(10); if user selects medium & 3 toppings

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright © 2021 Dani Renner

All Rights Reserved

## Contact Information

Dani Renner danijrenner@gmail.com