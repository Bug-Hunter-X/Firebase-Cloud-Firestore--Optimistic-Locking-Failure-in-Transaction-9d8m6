# Firebase Cloud Firestore Optimistic Locking Bug
This repository demonstrates an uncommon error in Firebase Cloud Firestore related to optimistic locking during concurrent transactions.  The `bug.js` file contains code that attempts to increment a counter using a transaction. If multiple clients try to increment the counter simultaneously, the transaction may fail due to optimistic locking.

The `bugSolution.js` file provides a solution to handle the optimistic locking failure by retrying the transaction until it succeeds.  This ensures data consistency while handling concurrent updates.

## How to Reproduce
1.  Clone this repository.
2.  Initialize a Firebase project and configure the necessary credentials.
3.  Run `bug.js` concurrently from multiple terminals to simulate concurrent updates.
4.  Observe the console output for optimistic locking failure messages.   

## Solution
The `bugSolution.js` file demonstrates how to implement retry logic to handle the optimistic locking failure and ensure data consistency.