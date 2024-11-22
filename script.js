// Main bubble container
const bubbleContainer = document.getElementById("bubble-container");
// Back button
const backButton = document.getElementById("back-button");

// Data for topics and subtopics
const topics = {
    Math: ["PreCalc", "Algebra", "Geometry", "Calculus", "Statistics"],
    Biology: ["Cells", "Genetics", "Ecology", "Anatomy", "Evolution"],
    Chemistry: ["Organic", "Inorganic", "Physical", "Biochemistry", "Analytical"],
    Physics: ["Mechanics", "Thermodynamics", "Optics", "Electromagnetism", "Quantum"],
    History: ["Ancient", "Medieval", "Modern", "World Wars", "Contemporary"],
    Geography: ["Continents", "Oceans", "Climate", "Landforms", "Maps"]
};

// Stack to track navigation history
let historyStack = [];

// Event listener for clicking a bubble
bubbleContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("bubble")) {
        const topic = event.target.dataset.topic; // Get the topic
        if (topics[topic]) {
            historyStack.push(topic); // Save current state
            loadSubtopics(topic); // Load its subtopics
        }
    }
});

// Event listener for the back button
backButton.addEventListener("click", () => {
    historyStack.pop(); // Go back to the previous state
    const previousTopic = historyStack[historyStack.length - 1];
    if (previousTopic) {
        loadSubtopics(previousTopic); // Load the previous topic's subtopics
    } else {
        loadMainTopics(); // Load the main topics
    }
});

// Load main topics (initial view)
function loadMainTopics() {
    bubbleContainer.innerHTML = ""; // Clear existing bubbles
    Object.keys(topics).forEach((topic) => {
        const bubble = createBubble(topic, topic); // Create bubble with a data-topic
        bubbleContainer.appendChild(bubble);
    });
    backButton.hidden = true; // Hi
