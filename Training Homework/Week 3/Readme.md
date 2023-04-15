# classList() in JS: 
This is a way to add or remove a class from an element to change its visual appearance.

a. `add(className)`: Adds a single class name to the element's list of classes.

b. `remove(className)`: Removes a single class name from the element's list of classes.

c. `toggle(className)`: Toggles the presence of a single class name on the element's list of classes. 
If the class is present, it will be removed; if it is not present, it will be added.

d. `contains(className)`: Returns true if the element's list of classes contains the specified class name; otherwise, returns false.a

# textContent() in JS: 
This is a way to change the text content of an element

Example: ==> card.textContent = ''; - This instruction sets the textContent property of an element with the card identifier to an empty string.

In JavaScript, you can change the text of an HTML element by manipulating its `textContent` or `innerHTML` properties.  

# setTimeout() in JS: 
==> The code inside the setTimeout function is a callback function that will execute after the specified delay has elapsed. 

# Math.random() in JS:
==> Example of random a number in 1-9:

  ==> const randomNumber = Math.floor(Math.random() * 9) + 1;


# Grid网络格子布局 in JS
grid-template-columns: repeat(3, 1fr);
       grid-template-rows: repeat(3, 1fr);

`grid-template-columns: repeat(3, 1fr)`; sets the width of each of the 3 columns to be equal, and each column will take up an equal amount of space (1fr) using the repeat function. 

`grid-template-rows: repeat(3, 1fr)`; sets the height of each of the 3 rows to be equal, and each row will take up an equal amount of space (1fr) using the repeat function. 

# getElementById() and querySelector() in JS

`getElementById()`:  getElementById is a method that allows you to select an HTML element based on its id attribute. 

This method takes a single argument, which is the id of the element you want to select.

==> const element = document.getElementById('myElement');

`querySelector()`: querySelector is a method that allows you to select an HTML element using any CSS selector.  

This method takes a single argument, which is the CSS selector you want to use to select the element(s). 

==> const element = document.querySelector('.myClass');
