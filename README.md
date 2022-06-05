# My JavaScript Working Space and Notes

I take notes for the [JavaScript for Total Beginners](https://www.youtube.com/playlist?list=PLpn6J6RoTigg3V4GpouzbUTDmhtDLNWms) workshop.

```js
typeof variable // returns the type of variable

/_ comment line _/ // returns the same comment line

number ** 2 // returns the square a number

// Ctrl + L clear the console

var name = "emir"
name[0] = "a" /* we expect the first character of the name variable to be changed
with "a" character, but the contents of primitive variables cannot be changed */

[] == '' /* we expect a false result but the result is true because js is doing
type casting, String([]) == '' */

// the contents of primitive variables cannot be changed

'b' + 'a' + 0/0 + 'a' // returns 'baNaNa'
'b' + 'a' +  + 'a' // returns 'baNaN', ( + 'a') -> 'NaN'

if (truthy) // the inside of the if condition must be truthy
// NaN, undefined, null, '', 0, -0 -> these are falsy values

// anonymous functions cannot be used without passing them to a variable

// we cannot pass arguments in the scope of an anonymous function

/* the values of non-primitive constant variables can be changed,
but their reference cannot be changed */

// [], {}, function, class, RegExp, Date -> these are non-primitive data types

// if we use "use strict"; we cannot use a variable before it defined

/* we should use the forEach loop when we want to manipulate an array,
and we don't want to return any value */

// we should use the map method when we want to return a new array

// we should use the filter method when we want to return a new array with conditional values

// map and filter methods are high order functions

`
```
