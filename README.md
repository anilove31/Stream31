
https://anilove31.github.io/Stream31/

# Java Control Flow: Break and Continue Statements

## Break Statement

### Description
The `break` statement in Java is used to terminate the execution of a loop or switch statement. It is primarily used to exit from the loop or switch block prematurely based on certain conditions.

### Syntax
```java
break;
```

### Example
```java
for (int i = 0; i < 5; i++) {
    if (i == 3) {
        break; // terminates the loop when i equals 3
    }
    System.out.println(i);
}
```

### Output
```
0
1
2
```

## Continue Statement

### Description
The `continue` statement in Java is used to skip the current iteration of a loop and continue with the next iteration. It is often used to bypass certain iterations based on specific conditions without terminating the loop entirely.

### Syntax
```java
continue;
```

### Example
```java
for (int i = 0; i < 5; i++) {
    if (i == 2 || i == 3) {
        continue; // skips iteration when i equals 2 or 3
    }
    System.out.println(i);
}
```

### Output
```
0
1
4
```

The `break` and `continue` statements provide control flow within loops in Java, allowing developers to manage loop execution based on specific conditions.