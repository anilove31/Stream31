https://anilove31.github.io/Stream31/


# Java Basics

## Math Methods

### Description
Math methods in Java provide various functionalities for performing mathematical operations such as finding square roots, absolute values, trigonometric functions, and more.

### Syntax
```java
double result = Math.sqrt(number);
```

### Example
```java
double number = 25.0;
double squareRoot = Math.sqrt(number);
System.out.println("Square root of " + number + " is " + squareRoot);
```

### List of Math Methods
1. **Math.abs(x)**: Returns the absolute value of x.
2. **Math.sqrt(x)**: Returns the square root of x.
3. **Math.pow(x, y)**: Returns the value of x raised to the power of y.
4. **Math.ceil(x)**: Returns the smallest integer that is greater than or equal to x.
5. **Math.floor(x)**: Returns the largest integer that is less than or equal to x.
6. **Math.round(x)**: Returns the closest integer to x.
7. **Math.max(x, y)**: Returns the greater of two values, x and y.
8. **Math.min(x, y)**: Returns the smaller of two values, x and y.
9. **Math.sin(x)**: Returns the sine of x (x is in radians).
10. **Math.cos(x)**: Returns the cosine of x (x is in radians).
11. **Math.tan(x)**: Returns the tangent of x (x is in radians).
12. **Math.log(x)**: Returns the natural logarithm (base e) of x.
13. **Math.log10(x)**: Returns the base 10 logarithm of x.
14. **Math.exp(x)**: Returns the value of e raised to the power of x.

## If Else

### Description
The if-else statement in Java allows the execution of different blocks of code based on the evaluation of a condition.

### Syntax
```java
if (condition) {
    // code block to be executed if condition is true
} else {
    // code block to be executed if condition is false
}
```

### Example
```java
int x = 10;
if (x > 0) {
    System.out.println("x is positive");
} else {
    System.out.println("x is non-positive");
}
```

### Output
```
x is positive
```

## Switch

### Description
The switch statement in Java is used for decision-making based on the value of an expression. It provides a more concise way to handle multiple conditions compared to using multiple if-else statements.

### Syntax
```java
switch (expression) {
    case value1:
        // code block to be executed if expression equals value1
        break;
    case value2:
        // code block to be executed if expression equals value2
        break;
    default:
        // code block to be executed if expression doesn't match any case
}
```

### Example
```java
int day = 3;
String dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Invalid day";
}
System.out.println("Day is: " + dayName);
```

### Output
```
Day is: Wednesday
```