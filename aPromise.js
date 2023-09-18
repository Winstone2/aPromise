// Create a Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation
        setTimeout(() => {
            const data = {
                userId: 1,
                id: 101,
                title: "Sample Post",
                body: "This is the body of the post.",
            };

            // Simulate success
            resolve(data);

            // Simulate an error
            // reject("Failed to fetch data");
        }, 2000); // Simulate a 2-second delay
    });
};

// Using the Promise
fetchData()
    .then((data) => {
        console.log("Data fetched successfully:", data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
