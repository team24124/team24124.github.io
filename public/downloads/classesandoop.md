---
title: Classes & Intro to Object Oriented Programming (Intro to Java)
---


# Intro to Java

---

# Classes & Object Oriented Programming

---

## At a glance
- Understand the purpose of classes, objects and object-oriented programming
- Understand and utilize Java access modifiers 
- Recognize the use cases of getters and setters 
- Write your own Java classes 

These are more advanced topics usually taught in Computer Science 30. If you don't retain some information that's okay!

---

You've learnt that repetitive sequences of code can be reused as **methods**.

But even with methods... our code files can still become very hard to navigate. <!-- .element: class="fragment" data-fragment-index="1" -->

And even with methods... our code can still deal with LOTS of different unrelated logic <!-- .element: class="fragment" data-fragment-index="2" -->


Robot-specific examples: a single code file could contain logic for: <!-- .element: class="fragment" data-fragment-index="3" -->
- getting input from gamepads <!-- .element: class="fragment" data-fragment-index="4" -->
- writing information to telemetry <!-- .element: class="fragment" data-fragment-index="5" -->
- controlling many different motors, servos, etc. <!-- .element: class="fragment" data-fragment-index="6" -->

---

# That's where **classes** come in

Classes are a collection of data (variables) and actions that can modify that data (methods). We can create new classes in __different files__ and have them be imported to be used in our main logic!

```java
Triangle.java
public class Triangle {
    int base = 2; // <-- we call base and height, "attributes"
    int height = 3;

    public double getArea(){
        return base * height / 2;
    }
}
```

This allows us to group similar data into a common class<!-- .element: class="fragment" data-fragment-index="2" -->

Classes are written using the "class" keyword followed by a name and a set of { } brackets <!-- .element: class="fragment" data-fragment-index="2" -->

---

We can then *instantiate* these classes into **objects**
```java
public class Main {
    public static void main(String[] args){
        Triangle t = new Triangle(); // <-- The "new" keyword instantiates a new object
        t.getArea() // Returns 3.0!
    }
}
```

By using the "new" keyword we can create new objects of a specified type. Think of this as a<!-- .element: class="fragment" data-fragment-index="2" --> **method returning a value that is your created object**<!-- .element: class="fragment" data-fragment-index="2" -->

---

But what is this "method"?

It is called a **constructor**. <!-- .element: class="fragment" data-fragment-index="2" -->

```java[0|5-8] 
public class Triangle {
    int base;
    int height;

    public Triangle(int b, int h) {
        base = b;
        height = h;
    }
}
```
<!-- .element: class="fragment" data-fragment-index="2" -->

Constructors are different <!-- .element: class="fragment" data-fragment-index="3" -->
- They do not have an explicit return type <!-- .element: class="fragment" data-fragment-index="3" -->
- Have the same name as the class it is creating <!-- .element: class="fragment" data-fragment-index="3" -->

But also similar <!-- .element: class="fragment" data-fragment-index="4" -->
- You can change their access modifier. (Though you will usually want to keep them public)<!-- .element: class="fragment" data-fragment-index="4" -->
- You can pass parameters in for when you create an object <!-- .element: class="fragment" data-fragment-index="4" -->

---

```java[0|5-8]
public class Triangle {
    int base;
    int height;

    public Triangle(int b, int h) {
        base = b;
        height = h;
    }
}
```

```java[0|5]
public class Main {
    public static void main(String[] args){
        // Creates a new triangle with base 3 and height 5
        // and assigns it to the variable, "t"
        Triangle t = new Triangle(3, 5);
    }
}
```

---

We use classes to group our data but we also want to protect it!

```java
public class Triangle {
    public int base;
    public int height;

    ...
}
```

Currently anyone can change the values of base and height on our triangles.

Which is something we may not want!

---

We can use access modifiers to hide our data, then write methods called **getters** and **setters** to change values as we need.

In object-oriented programming we call this **encapsulation.** <!-- .element: class="fragment" data-fragment-index="2" -->

---

```public``` and ```private``` are the two main access modifiers (but there are [more](https://www.w3schools.com/java/java_modifiers.asp)).



- ```public``` allows an attribute/method to be modified/used by anyone

- ```private``` only allows the object iself to modify/use/access the attribute/method

---

And if we want others access to these private attributes we use getters and setters.

```java[0|10-16|18-22]
public class Triangle {
    private int base; // <-- our private attributes
    private int height;

    public class Triangle(int b, int h){
        base = b;
        height = h;
    }

    public int getBase(){
        return base;
    }

    public int getHeight(){
        return height;
    }

    public void setHeight(int newHeight){
        if(newHeight > 0) { // <-- This allows allows you to validate the data
            height = newHeight
        }
    }
}
```

---

Altogether our new encapsulated triangle class looks like this:

```java
public class Triangle {
    // Attributes
    private int base, height;
    
    // Constructor
    public Triangle(int b, int h){
        base = b;
        height = h;
    }

    // Getters
    public int getBase(){
        return base;
    }

    public int getHeight(){
        return height;
    }

    // Methods
    public int getArea(){
        return base * height / 2;
    }
}
```
