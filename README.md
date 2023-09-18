# aPromise
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation, and it allows you to handle the result or error when the operation finishes. Promises are used to simplify asynchronous programming and make it more readable and manageable.

A Promise can be in one of three states:

    Pending: The initial state, indicating that the asynchronous operation has not yet completed.

    Fulfilled (Resolved): The state when the asynchronous operation has successfully completed, and the Promise holds a resolved value.

    Rejected: The state when the asynchronous operation encounters an error, and the Promise holds a reason (error) for the rejection.
        We create a fetchData function that returns a new Promise. Inside the Promise constructor, we simulate an asynchronous operation using setTimeout.

    Inside the setTimeout callback, we can either call resolve(data) to fulfill the Promise with data or reject(error) to reject the Promise with an error message.

    We then use the then method to specify what should happen when the Promise is fulfilled (in the success case) and the catch method to specify what should happen when the Promise is rejected (in the error case).

    If the asynchronous operation completes successfully, the then callback will be executed, and if there's an error, the catch callback will be executed.

Promises provide a cleaner and more structured way to work with asynchronous code compared to using callbacks directly, especially when dealing with multiple asynchronous operations in a sequence or in parallel. They also enable better error handling through the catch method, making it easier to detect and handle errors in asynchronous code.
