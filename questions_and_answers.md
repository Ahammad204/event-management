<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The answer is A: {}.

Here declare a variable called "greeting," but then it mistakenly assign an empty object to a variable called "greetign". "greeting" and "greetign" are treated as two different variables. The correct variable to log is "greetign," which contains an empty object, and that's why the output is "{}"</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

<i>The answer is D: 3. 

    Here 2 is a string ...thats why it will not 1+2 = 3; it will add the string with 1; Thats why Ans will be "12"

   </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The answer is A: ['🍕', '🍫', '🥑', '🍔'].

In the code, info.favoriteFood is initially set to the first element of the food array, which is "🍕". However, when it later assign "🍝" to info.favoriteFood, it does not change the food array itself. So, food remains unchanged, and the console.log(food) statement will output the original food array, which is `['🍕', '🍫', '🥑', '🍔']`.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The answer is B: "Hi there, undefined."

In the sayHi function, it expects a name parameter to be passed when calling the function.  when It call sayHi() without passing any arguments, the name parameter inside the function is undefined. Therefore, the function returns "Hi there, undefined" </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The answer to the question is C: 3.

This is because the forEach method is called on the nums array, which contains four elements. The forEach method iterates over each element of the array and passes it as an argument to the callback function. 

In this case, the callback function checks if the current element is truthy ,the count variable is incremented by 1 for each element except 0. 

</i>

</p>
</details>
