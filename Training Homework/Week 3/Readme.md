# addEventListener in JS
在 JavaScript 中，`addEventListener()` 是一种允许您将事件侦听器添加到 HTML 元素的方法。

==> 也就是当元素上发生特定事件（例如单击或按键）时将被调用的函数。

==> For example: element.addEventListener(event, function, useCapture);

    ==> `element` 是你要添加事件监听器的 HTML 元素 
    
    ==> `event` 是代表你要监听的事件的字符串（例如"click"或"keydown"）
    
    ==> `function` 是当事件发生时将被调用的函数。
    
    ==> `useCapture` 是一个可选的布尔值，指定是否应在事件传播阶段捕获事件。
    
# flex-warp in CSS:
`flex-wrap` flex-wrap 是一个 CSS 属性，用于控制当没有足够的空间将它们放在一行中时，flex 项目如何在 flex 容器中布局。

==> 当水平空间不够时，flex 项目会垂直堆叠，避免溢出。

The flex-wrap property accepts three possible values:

a. `nowrap` (default): all flex items will be laid out on a single line, even if it means they overflow the container.

b. `wrap`: flex items will be laid out in multiple lines if necessary. If there are more items than can fit on one line, the remaining items will wrap to a new line.

==> 窗口缩小时，先显示左侧的元素块

c. `wrap-reverse`: flex items will be laid out in multiple lines as in wrap but the lines will be laid out in reverse order.

==> 窗口缩小时，先显示右侧侧的元素块

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

# setTimeout() and setInterval()  in JS: 
`setTimeout()`: The code inside the setTimeout function is a callback function that will execute after the specified delay has elapsed. 

==> 允许您在经过指定的时间量后, 执行一次函数。 也就是可以延迟一些时间，然后执行当中的函数

`setInterval()`:  `setInterval()` instead of executing a function once after a delay, it repeatedly executes the function at a specified interval.

==> `setInterval()` 类似于 `setTimeout()`， 但`setInterval()`不是在延迟后执行一次函数，而是以指定的时间间隔重复执行该函数。

相同点: setInterval() 和 setTimeout() 都返回一个唯一的 ID 值，可用于分别使用 clearInterval() 和 clearTimeout() 方法取消函数的执行。

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
