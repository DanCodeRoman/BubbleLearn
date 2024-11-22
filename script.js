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
        const topic = event.target.dataset.topic;
        if (topics[topic]) {
            historyStack.push(topic); // Save current state
            loadSubtopics(topic);
        }
    }
});

// Event listener for the back button
backButton.addEventListener("click", () => {
    historyStack.pop(); // Go back to previous state
    const previousTopic = historyStack[historyStack.length - 1];
    if (previousTopic) {
        loadSubtopics(previousTopic);
    } else {
        loadMainTopics();
    }
});

// Load main topics (initial view)
function loadMainTopics() {
    bubbleContainer.innerHTML = ""; // Clear existing bubbles
    Object.keys(topics).forEach((topic) => {
        const bubble = createBubble(topic);
        bubbleContainer.appendChild(bubble);
    });
    backButton.hidden = true; // Hide back button
}

// Load subtopics for a given topic
function loadSubtopics(topic) {
    bubbleContainer.innerHTML = ""; // Clear existing bubbles
    topics[topic].forEach((subtopic) => {
        const bubble = createBubble(subtopic);
        bubbleContainer.appendChild(bubble);
    });
    backButton.hidden = false; // Show back button
}

// Create a bubble element
function createBubble(label) {
    const div = document.createElement("div");
    div.className = "bubble";
    div.textContent = label;
    return div;
}

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
        const topic = event.target.dataset.topic;
        if (topics[topic]) {
            historyStack.push(topic); // Save current state
            loadSubtopics(topic);
        }
    }
});

// Event listener for the back button
backButton.addEventListener("click", () => {
    historyStack.pop(); // Go back to previous state
    const previousTopic = historyStack[historyStack.length - 1];
    if (previousTopic) {
        loadSubtopics(previousTopic);
    } else {
        loadMainTopics();
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
    bubbleContainer.classList.remove("zoom-in"); // Reset zoom
}

// Load subtopics for a given topic
function loadSubtopics(topic) {
    bubbleContainer.innerHTML = ""; // Clear existing bubbles
    topics[topic].forEach((subtopic) => {
        const bubble = createBubble(subtopic, ""); // Subtopics don't need data-topic
        bubble.classList.add("active"); // Mark as active
        bubbleContainer.appendChild(bubble);
    });
    backButton.hidden = false; // Show back button
    bubbleContainer.classList.add("zoom-in"); // Add zoom effect
}

// Create a bubble element
function createBubble(label, topic) {
    const div = document.createElement("div");
    div.className = "bubble";
    div.textContent = label;
    if (topic) {
        div.dataset.topic = topic; // Add data-topic for clickable topics
    }
    return div;
}

// Initial load
loadMainTopics();
