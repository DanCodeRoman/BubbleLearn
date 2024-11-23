// Subtopics for each subject
const topics = {
    math: ["Algebra", "Geometry", "Calculus", "Trigonometry", "Statistics", "Linear Algebra", "Differential Equations", "Logic", "Combinatorics", "Number Theory"],
    chemistry: ["Organic Chemistry", "Inorganic Chemistry", "Biochemistry", "Physical Chemistry", "Thermodynamics", "Chemical Reactions", "Stoichiometry", "Electrochemistry", "Periodic Table", "Acid-Base Chemistry"],
    biology: ["Genetics", "Cell Biology", "Evolution", "Ecology", "Anatomy", "Physiology", "Botany", "Microbiology", "Biochemistry", "Molecular Biology"],
    physics: ["Mechanics", "Electromagnetism", "Thermodynamics", "Optics", "Quantum Physics", "Fluid Mechanics", "Nuclear Physics", "Astrophysics", "Acoustics", "Relativity"],
    history: ["World History", "American History", "European History", "Ancient Civilizations", "Modern History", "Political Revolutions", "World Wars", "Colonialism", "Historical Geography", "Cultural History"]
};

let currentSubject = null;

// Show Subtopics when a bubble is clicked
function showSubject(subject) {
    currentSubject = subject;

    // Change Background
    let color = "";
    if (subject === "math") color = "linear-gradient(135deg, #7a5353, #c24e5a)";
    else if (subject === "chemistry") color = "linear-gradient(135deg, #5e7f8d, #8d99b3)";
    else if (subject === "biology") color = "linear-gradient(135deg, #6a994e, #a7c7d6)";
    else if (subject === "physics") color = "linear-gradient(135deg, #f0f0f0, #ffffff)";
    else if (subject === "history") color = "linear-gradient(135deg, #7a4b3b, #c1a89b)";
    document.body.style.background = color;

    // Hide Bubbles
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.style.display = "none";
    });

    // Show the clicked bubble and the rays
    const bubble = document.getElementById(subject);
    bubble.style.transform = "scale(1.5)";
    bubble.style.position = "absolute";
    bubble.style.top = "50%";
    bubble.style.left = "50%";
    bubble.style.transform = "translate(-50%, -50%)";

    // Create the rays
    const raysContainer = document.createElement('div');
    raysContainer.classList.add('rays');

    topics[subject].forEach((topic, index) => {
        const ray = document.createElement('div');
        ray.classList.add('ray');
        const angle = (index * 36) - 90;
        const length = 200;
        ray.style.transform = `rotate(${angle}deg)`;
        ray.style.height = `${length}px`;

        const subBubble = document.createElement('div');
        subBubble.classList.add('bubble');
        subBubble.textContent = topic;
        ray.appendChild(subBubble);
        raysContainer.appendChild(ray);
    });

    document.body.appendChild(raysContainer);

    // Show back button
    document.getElementById('backButton').style.display = "block";
}

// Go back to the homepage
function goBack() {
    // Reset bubbles and background
    document.body.style.background = "linear-gradient(135deg, #5e7f8d, #8d99b3)";
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.style.display = "block";
        bubble.style.position = "relative";
        bubble.style.transform = "scale(1)";
    });

    // Hide subtopic rays and back button
    document.querySelectorAll('.rays').forEach(ray => {
        ray.remove();
    });
    document.getElementById('backButton').style.display = "none";
    currentSubject = null;
}

// Add event listeners to each bubble
document.getElementById('math').addEventListener('click', () => showSubject('math'));
document.getElementById('chemistry').addEventListener('click', () => showSubject('chemistry'));
document.getElementById('biology').addEventListener('click', () => showSubject('
