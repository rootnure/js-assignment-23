# js-assignment-23

## Problems To Solve

### Problem #1
- You are given a function named <b>cubeNumber()</b> that take a number input.<br><b>Task:</b>
    - Function will return the cube value of that number
    - <b>Bonus:</b> If the input type is not a number then the function will return a meaningful message
    - <b>Note:</b> Ignore validation for negative or 0 (zero) value. Means, if these are the input then return the cube of them.
    - <b>Function Signature:</b> <em>`function cubeNumber(number) { /* function body */ }`</em>
    - <b>Sample Input-Output Table:</b>
    <table border="1" align="center" width=75%><tr><th style="text-align:center;">Input</th><th style="text-align:center;">Output</th></tr><tr><td>3</td><td>27</td></tr><tr><td>4</td><td>64</td></tr></table>

### Problem #2
- You will be given a function called <b>matchFinder()</b> that will take two string as input.<br><b>Task:</b>
    - The function will return the Boolean value <b>true</b> if any part of the first string matches the second string exactly.
    - And if no exact match is found then the function will return Boolean <b>false</b>
    - <b>Bonus:</b> You need to validate both input types as strings. If both or any one is not given as a string then you will return a meaningful message.
    - <b>Function Signature:</b> <em>`function matchFinder(string1, string2) { /* Function Body */ }`</em>
    - <b>Sample Input-Output Table:</b>
    <table border="1" align="center" width=75%><tr><th style="text-align:center;">Input</th><th style="text-align:center;">Output</th></tr><tr><td>"John Doe","ohn"</td><td>true</td></tr><tr><td>"JavaScript","Code"</td><td>false</td></tr><tr><td>"Peter Parker","Pen"</td><td>false</td></tr><tr><td>"Peter Parker", "pet"</td><td>false</td></tr></table>

### Problem #3
- You need to write a function that name will be <b>sortMaker()</b>. The function parameter will be an array and this array will always contain only two elements.<br><b>Task:</b>
    - If two elements of that array is positive then you will sort the array in descending order and return the array.
    - If two elements are exactly the same then you will return this string: "<b>equal</b>"
    - <b>Bonus:</b> If any or both elements are negative number then you will return "<b>Invalid Input</b>" this time
    - <b>Note:</b> You can skip <b>0</b>. Means, if array is like <b>[0, 1]</b>, you can return <b>[1, 0]</b> (like this) as this is optional
    - <b>Function Signature:</b> <em>`function sortMaker(arr) { /* Function Body */ }`</em>
    - <b>Sample Input-Output Table:</b>
    <table border="1" align="center" width=75%><tr><th style="text-align:center;">Input</th><th style="text-align:center;">Output</th></tr><tr><td>[2,3]</td><td>[3,2]</td></tr><tr><td>[4,2]</td><td>[4,2]</td></tr><tr><td>[4,4]</td><td>equal</td></tr><tr><td>[1,2]</td><td>[2,1]</td></tr><tr><td>[4,-2]</td><td>Invalid Input</td></tr></table>


### Problem #4
- You will be given a function called <b>findAddress()</b> that will take an object as input. Object will have three property.<br><b>Task:</b>
    - You have to return exactly like the <b>sample output</b> exactly like <b>1st format</b>
    - <b>Bonus:</b> If the object is missing any property that will replaced by <em>double underscore</em> for that place (as like <b>2nd or 3rd output format</b>)
    - <b>Function Signature:</b> <em>`function findAddress(obj) { /* Function Body */ }`</em>
    - <b>Sample Input-Output Table:</b>
    <table border="1" align="center" width=75%><tr><th style="text-align:center;">Input</th><th style="text-align:center;">Output</th></tr><tr><td>{street:10,house:"15A",society:"Earth Perfect"}</td><td>10,15A,Earth Perfect</td></tr><tr><td>{street:10,society:"Earth Perfect"}</td><td>10,__,Earth Perfect</td></tr><tr><td>{street:10}</td><td>10,__,__</td></tr></table>

### Problem #5
- Imagine you went to a shop with some retail currency note to buy chips. Make <b>canPlay()</b> named function that take two inputs: one is array and another is number.
    - Each elements of array indicates retail currency<br>1 taka<br>2 taka<br>5 taka
    - Second input indicates chips price
- <b>Task:</b>
    - If the addition of retail notes is equal to or greater than the chips price then return Boolean <b>true</b>
    - And if the addition is less than chips price the return Boolean <b>false</b>
    - <b>Bonus:</b> Check if the fist input is an <b>empty</b> array or not. If <b>empty</b> then return a meaningful message
    - <b>Function Signature:</b> <em>`function canPay(changeArray, totalDue) { /* Function Body */ }`</em>
    - <b>Sample Input-Output Table:</b>
    <table border="1" align="center" width=75%><tr><th style="text-align:center;">Input</th><th style="text-align:center;">Output</th></tr><tr><td>[1,2,5],10</td><td>false</td></tr><tr><td>[1,5,5],10</td><td>true</td></tr></table>