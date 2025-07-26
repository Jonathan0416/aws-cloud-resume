// Find the HTML element where the counter will be displayed
const counter = document.querySelector(".counter-number");

// Define an asynchronous function to fetch the data
async function updateCounter() {
    console.log("1. updateCounter function has been called.");

    try {
        let response = await fetch("https://5rf4l7hrq6oip64hks7ssyiq7a0gbdqp.lambda-url.us-east-1.on.aws");
        
        console.log("2. Fetch response received:", response);

        if (!response.ok) {
            console.error("Response status was not OK:", response.status);
        }

        let data = await response.json();
        
        console.log("3. Data parsed from response:", data);

        // Check if the 'views' property exists in the data object
        if (data.views !== undefined) {
            counter.innerHTML = `👀 Views: ${data.views}`;
            console.log("4. Successfully updated the counter HTML.");
        } else {
            console.error("Error: 'views' property not found in the data object.");
            counter.innerHTML = "👀 Views: Error";
        }

    } catch (error) {
        // This will catch network errors or errors from response.json() if the body isn't valid JSON
        console.error("Error fetching or parsing data:", error);
        counter.innerHTML = "👀 Views: Error";
    }
}

// Call the function to run it when the page loads
updateCounter();