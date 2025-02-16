```javascript
const incrementCounter = async (counterId) => {
  let success = false;
  while (!success) {
    try {
      await db.runTransaction(async (transaction) => {
        const docRef = db.collection('counters').doc(counterId);
        const doc = await transaction.get(docRef);
        if (!doc.exists) {
          throw new Error('Counter does not exist');
        }

        const newValue = doc.data().count + 1;
        transaction.update(docRef, { count: newValue });
      });
      success = true;
    } catch (error) {
      console.error('Transaction failed:', error);
      if (error.code === 6) {
        console.error('Optimistic locking failure. Retrying...');
        await new Promise(resolve => setTimeout(resolve, 100)); // Wait before retrying
      } else {
        throw error; // Re-throw non-optimistic locking errors
      }
    }
  }
};
```