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
};

// Stack to track navigation history
let historyStack = [];

// Event listener for clicking a bubble
bubbleContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("bubble")) {
        const topic = event.target.dataset.topic; // Get topic from data-topic
        if (topics[topic]) {
            historyStack.push(topic); // Save current state
            loadSubtopics(topic); // Load subtopics
        }
    }
});

// Event listener for the back button
backButton.addEventListener("click", () => {
    historyStack.pop(); // Remove the current topic from history
    const previousTopic = historyStack[historyStack.length - 1];
    if (previousTopic) {
        loadSubtopics(previousTopic); // Go back to the previous subtopics
    } else {
        loadMainTopics(); // Load the main topics
    }
});

// Load main topics (initial view)
function loadMainTopics() {
    bubbleContainer.innerHTML = ""; // Clear existing bubbles
    Object.keys(topics).forEach((topic) => {
        const bubble = createBubble(topic, topic); // Use topic as data-topic
        bubbleContainer.appendChild(bubble);
    });
    backButton.hidden = true; // Hide back button
    bubbleContainer.classList.remove("zoom-in"); // Reset zoom effect
}

// Load subtopics for a given topic
function loadSubtopics(topic) {
    bubbleContainer.innerHTML = ""; // Clear existing bubbles
    topics[topic].forEach((subtopic) => {
        const bubble = createBubble(subtopic); // Subtopics don't need data-topic
        bubble.classList.add("active"); // Mark as active for visibility
        bubbleContainer.appendChild(bubble);
    });
    backButton.hidden = false; // Show back button
    bubbleContainer.classList.add("zoom-in"); // Apply zoom effect
}

// Create a bubble element
function createBubble(label, topic = null) {
    const div = document.createElement("div");
    div.className = "bubble";
    div.textContent = label;
    if (topic) {
        div.dataset.topic = topic; // Assign data-topic for clickable bubbles
    }
    return div;
}

// Initial load
loadMainTopics();
