---
title: Methods (Intro to Java)
---

# Methods

Methods are essentially blocks of code which you can run any time you want in any place you want (within reason). Just like any other concept, They have a variety of benefits, as well as caveats. The good very much outweighs the bad, though, and learning these will change the way you program. 

*(You may know these as "functions" in languages like Javascript, and the distinction comes from Java's **object oriented** nature).*

---

## So, what's the point?
A very good question! What's the point of just writing the same code just in a different place? Well, it mainly comes down to two things: *Reusability*, and *modularity*.

---

Don't believe me? Take a look at this program:

```
// This program will take two sides A and B of a right triangle, and calculate the perimeter

import java.util.Scanner;

public class Main{
	// Instantiate Scanner object sc (you'll learn what this means later when we cover Object Oriented Programming)
	public static Scanner sc = new Scanner(System.in);
	
	public static void main(String[] args){
		// Get sides A and B of the right triangle from the user
		System.out.print("Please enter side A: ");
		double sideA = sc.nextDouble();
		System.out.print("Please enter side B: ");
		double sideB = sc.nextDouble();
		sc.close();
		
		// Find the perimeter of the triangle
		double sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
		double perimeter = sideA + sideB + sideC;

		// Prints out the perimeter
		System.out.println("The perimeter is: " + perimeter);
	}
}
```

---

As you probably gathered, this program takes sides A and B of a right triangle, and prints out the perimeter to the user.

##### Do you notice any issues with this program
Well, of course, the program compiles. Heck, it even does what it's supposed to. You will soon learn, or may have already figured out, though, that a **good** program goes beyond *just working.* When you write a piece of code, you will want to ask yourself *"How can I make this not only function, but be as reusable, modular, readable, and useful to anyone else as possible?"* This is exactly the point of concepts like methods.

Let's take a look at another example:

---

```
import java.util.Scanner;

public class Main{
	// Instantiate Scanner object sc
	public static Scanner sc = new Scanner(System.in);

	public static void main(String[] args){
		// Get side lengths from user
		double sideA = getLength('A');
		double sideB = getLength('B');

		// Calculate perimeter
		double perimeter = calcPerimeter(sideA, sideB);
		// Print it out
		System.out.println("The perimeter is: " + perimeter);
	}
	// This is a JavaDoc comment. It's just a fancier version of comments like this.
	// If you plan on collaborating on big projects, consider learning this.
	/**
	* <h1>getLength()</h1>
	* Requests a side length from the user and returns their input
	* @param side Modifies which side is requested. This only effects the print statement
	* @return User input for the side length
	*/
	public static double getLength(char side){
		System.out.print("Please enter side length for " + side + ": ");
		return sc.nextDouble();
	}
	/**
	* <h1>Calculate perimeter</h1>
	* Calculates the perimeter of a right triangle given two side lengths A and B
	* @param sideA Side A of the triangle
	* @param sideB Side B of the triangle
	* @return The perimeter of the triangle
	*/
	public static double calcPerimeter(double sideA, double sideB){
		return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
	}
}
```

---

Now, you may be thinking: *"Hey, that's way more lines than the other one! In what world is this MORE simple?"* 

I can sort of agree for a simple program like this, but you can still see how this would be beneficial at scale. 

I mainly direct your attention to the main function. See how it looks more like a list of chores than a bunch of random numbers?

Now I can't keep ranting on about how great methods are without you actually understanding how to use them, so lets go over the key concepts

---

## How to write a method
When you create a method, it looks something like this:


```
// blahblahblah method does this
public static [return type] [name]([parameters]){
	// Do stuff
	return [some return value] // This is only required if there is a return type
}
```


Let's break this down

1) First and foremost, ***You should always write a comment about what the method does, even if it's small.*** It's important for you just as it is everybody else, comments only help you.
2) Second, take a look at that "public static." This tells Java how the method can be used in other *scopes.* Don't worry about that right now, just know you need it there for our purposes.

---

3) A *return type* tells Java what type the method will return. I will go over returning in a minute.
4) The name is pretty self explanatory. Just make sure it's in camelCase, and that it *makes sense*
5) Parameters are variables which you can pass into a method. You specify them the same that you initialize variables, for example "int x." Please note, though, that you do not initialize parameters with a value, as that defeats the purpose. You will use parameters to refer to values which are passed to the method. This will be more clear when I show you how to call a method.

---

6) Inside the curly bracket's you'll write the stuff you actually want the method to do.
That "return" statement basically means to take whatever result from the method you got, and to set a variable to that result. Again, this will be more clear when I go over calling methods. Speaking of which...

---

## How to call a method
This is pretty straightforward. It looks like this:

```
public static void main(String[] args){
	int x = 6;
	someMethod(x); // Method call
	double y = 4.2;
	double z = someOtherMethod(x, y); // Method call

	double sqrtOfFour = Math.sqrt(4); // Method call, returns square root of param
}
```

---

Here's the cliff notes:
- A method can be called by just writing its name with brackets next to it.
- You can also pass in parameters if you specify any. This will basically just take the value from that variable you passed in and use it as you specified.

---

- You can also return a value. That's what the second method call is doing. It may look like it's setting the variable equal to the method, but what it's actually doing is setting the variable equal to the *returned value.*
- You can also call methods from other *classes,* as you can see when the "sqrt" method is called from the Math class. This is another reason methods are powerful, it allows you to easily avoid implementing a rudimentary feature by simply using someone else's code.

---

**And that's about it for actually using methods.**

<br>If at all this feels overwhelming, just know that this is a brief overview, and understanding comes with practice.

