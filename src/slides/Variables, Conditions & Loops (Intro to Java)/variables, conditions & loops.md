---
title: Variables, Conditions & Loops (Intro to Java)
marp: true
---


# Intro to Java 
---
# Variables, Conditions & Loops
---
# Variables
---
## What are variables?
Variables are elements used to store data so we can manipulate and use them in our program.
---
## What are the types of variables?
Unlike JavaScript and Python where the program can just figure it out, we have to be more specific in Java.  
Types include: `String`, `int`, `boolean`, `double`, `char`
---
## String
This variable is used for text like words or sentences.  

**How do you declare a String variable?**
```java
String greeting = "Hello, world!";
```

**NOTE:**  
You must use **double quotes** for strings.  
And **end every line with a semicolon (;)**.

---
## Integer (`int`)
This variable type is used to store **whole numbers** (no decimals).  

**How do you declare an `int` variable?**
```java
int age = 16;
```

---
## Boolean (True / False)
This type of variable is used to store `true` or `false` values.  

**How do you declare a `boolean` variable?**
```java
boolean isStudent = true;
```

---
## Double
This type of variable is used to store **decimal numbers**  
Examples: 3.14, 9.81, 2.718  

**How do you declare a `double` variable?**
```java
double pi = 3.14159;
```

---
## Char (Characters)
This type is used to store a **single character**.  
Characters must be enclosed in **single quotes (' ')**.

**How do you declare a `char` variable?**
```java
char grade = 'A';
```

---
## Summary Table

| Type     | Description               | Example                     |
|----------|---------------------------|-----------------------------|
| `String` | Text, words, sentences    | `String name = "Alice";`   |
| `int`    | Whole numbers             | `int score = 100;`         |
| `boolean`| True/false values         | `boolean passed = false;`  |
| `double` | Decimal numbers           | `double temp = 36.6;`      |
| `char`   | Single characters         | `char initial = 'B';`      |

---
# Conditions (if statements)
---
## What are conditionals?
conditionals are statements that control the flow of a program's execution based on whether a condition is true or false.

---
## if Statement

**Basic if structure:**
```java
if (condition) {
    // code to run if condition is true
}
```

**Example:**
```java
int age = 18;

if (age >= 18) {
    System.out.println("You can vote!");
}
```

---
## if-else Statement

**Structure:**
```java
if (condition) {
    // runs if true
} else {
    // runs if false
}
```
---
**Example:**
```java
int score = 45;

if (score >= 50) {
    System.out.println("You passed!");
} else {
    System.out.println("You failed.");
}
```
---
## if - else if - else  Statement

**Structure:**
```java
if (condition1) {
    // runs if condition1 is true
} else if (condition2) {
    // runs if condition2 is true
} else {
    // runs if neither is true
}
```
---
**Example:**
```java
int grade = 85;

if (grade >= 90) {
    System.out.println("A");
} else if (grade >= 80) {
    System.out.println("B");
} else {
    System.out.println("C or lower");
}
```

---
## Relational Operators

| Operator | Meaning               | Example        |
|----------|------------------------|----------------|
| `==`     | Equal to               | `a == b`       |
| `!=`     | Not equal to           | `a != b`       |
| `>`      | Greater than           | `a > b`        |
| `<`      | Less than              | `a < b`        |
| `>=`     | Greater than or equal  | `a >= b`       |
| `<=`     | Less than or equal     | `a <= b`       |

---
# Loops
---
## What are loops?
Loops are used to repeat a block of code multiple times until a condition is met.

Types:
- `for` loop
- `while` loop


---
## for Loop

**Structure:**
```java
for (initialization; condition; update) {
    // code to repeat
}
```

**Example:**
```java
for (int i = 0; i < 5; i++) {
    System.out.println("i is: " + i); // Output is: 0 1 2 3 4
}
```

---
## while Loop

**Structure:**
```java
while (condition) {
    // code to repeat
}
```

**Example:**
```java
int i = 0;
while (i < 5) {
    System.out.println("i is: " + i);
    i++;
}
```

---


## Loop Use Case Example

Print even numbers from 2 to 10 using a loop:
```java
for (int i = 2; i <= 10; i += 2) {
    System.out.println(i);
}
```

---
