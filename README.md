# Uncommon JavaScript Bug: Stack Overflow Error in Recursive Function

This repository demonstrates a stack overflow error in a recursive JavaScript function. The bug arises from insufficient base cases in the recursive function, leading to infinite recursion for certain inputs.

## Bug Description

The `foo()` function is designed to return `true` or `false` based on the input `x`. However, the base cases only handle `x == 1` and `x == 2`.  If the input is an even number greater than 2, or a number less than 0, then infinite recursion results. This results in a stack overflow error, halting the program's execution.

## Bug Reproduction

1. Clone this repository.
2. Run `bug.js` in your JavaScript environment (Node.js, browser console, etc.).
3. Observe that `foo(3)` and `foo(5)` work correctly while `foo(0)` and others cause a stack overflow error.

## Solution

The `bugSolution.js` file provides a corrected version of the `foo()` function with improved base cases that address the infinite recursion issue. This ensures the function terminates gracefully for all valid inputs.