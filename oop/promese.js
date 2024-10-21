function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = { name: 'Alice', age: 25 }; // Simulated data
            resolve(data); // Operation succeeded
        }, 2000); // Simulating 2-second delay
    });
}

fetchData()
    .then(data => {
        console.log(data); // Output: { name: 'Alice', age: 25 }
    })
    .catch(error => {
        console.error('Error:', error);
    });
