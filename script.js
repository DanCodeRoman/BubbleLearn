// Topics for each subject (subtopics)
const topics = {
    math: ["Algebra", "Calculus", "Geometry", "Statistics", "Trigonometry", "Linear Algebra", "Differential Equations", "Pre-Calculus", "Probability", "Mathematical Proofs"],
    chemistry: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Biochemistry", "Analytical Chemistry", "Environmental Chemistry", "Thermodynamics", "Chemical Bonding", "Stoichiometry", "Atomic Theory"],
    biology: ["Genetics", "Cell Biology", "Ecology", "Evolution", "Anatomy", "Physiology", "Biochemistry", "Botany", "Microbiology", "Zoology"],
    physics: ["Mechanics", "Electromagnetism", "Thermodynamics", "Optics", "Quantum Mechanics", "Relativity", "Fluid Dynamics", "Nuclear Physics", "Waves", "Astrophysics"],
    history: ["World History", "U.S. History", "European History", "Ancient Civilizations", "Modern History", "History of Science", "Military History", "Political History", "Cultural History", "Economic History"]
};

// Handle bubble click (zoom-in, show subtopics, change background)
document.querySelectorAll('.bubble').forEach(bubble => {
    bubble.addEventListener('click', function () {
        zoomIn(bubble);
    });
});

// Zoom-in function and show subtopics
function zoomIn(bubble) {
    const subject = bubble.id;
    
    document.body.style.transition = "background 0.5s ease";  // Add this line to ensure background transition
    document.body.style.background = backgrounds[subject]; // This already sets the new background gradient

    // Hide the original bubbles and show the back button
    document.querySelector('.container').style.display = 'none';
    document.getElementById('backButton').style.display = 'block';

    // Change background color based on the subject
    const backgrounds = {
        math: 'linear-gradient(135deg, #b0b0b0, #ff4d4d)', // Grey Red
        chemistry: 'linear-gradient(135deg, #b0b0b0, #4d88d7)', // Grey Blue
        biology: 'linear-gradient(135deg, #b0b0b0, #4d9e7e)', // Grey Green
        physics: 'linear-gradient(135deg, #b0b0b0, #e1e1e1)', // Grey White
        history: 'linear-gradient(135deg, #b0b0b0, #7e4d28)' // Grey Brown
    };

    // Apply the background gradient for the clicked subject with a smooth transition
    document.body.style.transition = 'background 0.5s ease';
    document.body.style.background = backgrounds[subject];

    // Make the clicked bubble larger and position it in the center
    bubble.classList.add('expanded');
    centerBubble(bubble);

    // Create spider lines and sub-bubbles
    createSpiderLines(subject, bubble);
}

// Center the clicked bubble on the page
function centerBubble(bubble) {
    // Get the bubble's size and position
    const bubbleRect = bubble.getBoundingClientRect();
    const bubbleWidth = bubbleRect.width;
    const bubbleHeight = bubbleRect.height;

    // Calculate the position to center the bubble in the viewport
    const xPosition = (window.innerWidth - bubbleWidth) / 2;
    const yPosition = (window.innerHeight - bubbleHeight) / 2;

    // Position the bubble at the center
    bubble.style.position = 'absolute';
    bubble.style.left = `${xPosition}px`;
    bubble.style.top = `${yPosition}px`;

    bubble.style.zIndex = "5"; // This ensures the clicked bubble stays on top
}

// Create spider lines and subtopics
function createSpiderLines(subject, bubble) {
    const spider = document.getElementById('spider');
    spider.style.display = 'block';  // Make the spider container visible
    spider.innerHTML = ''; // Clear any existing lines or bubbles

    // Get the position of the clicked bubble to calculate the center point
    const bubbleRect = bubble.getBoundingClientRect();
    const bubbleCenterX = bubbleRect.left + bubbleRect.width / 2;
    const bubbleCenterY = bubbleRect.top + bubbleRect.height / 2;

    // Create 10 spider lines extending from the clicked bubble
    const angleIncrement = 360 / 10;
    const radius = 150;  // Distance from center of clicked bubble

    for (let i = 0; i < 10; i++) {
        const angle = i * angleIncrement;
        const line = document.createElement('div');
        line.classList.add('line');
        spider.appendChild(line);

        const subBubble = document.createElement('div');
        subBubble.classList.add('subBubble');
        subBubble.innerText = topics[subject][i];
        spider.appendChild(subBubble);

        // Position the line and subBubble using angle and trigonometry
        const angleRad = angle * (Math.PI / 180);
        const x = radius * Math.cos(angleRad);  // X position from center
        const y = radius * Math.sin(angleRad);  // Y position from center

        // Position the line (from the clicked bubble center)
        line.style.transformOrigin = "0 100%";
        line.style.transform = `rotate(${angle}deg)`;

        // Position the subBubble (relative to the clicked bubble center)
        subBubble.style.position = 'absolute';
        subBubble.style.left = `calc(${bubbleCenterX + x - 30}px)`; // Adjust to center the subbubble
        subBubble.style.top = `calc(${bubbleCenterY + y - 30}px)`; // Adjust to center the subbubble
        subBubble.style.zIndex = "1"; // Ensure subbubbles don't block the main bubble

        // Animate the lines and subbubbles
        setTimeout(() => {
            line.style.height = '150px'; // Set line height after animation starts
            subBubble.style.opacity = 1;  // Make subBubble appear smoothly
        }, 50);
    };

    // Ensure main bubble stays clickable by setting a higher z-index for it
    bubble.style.zIndex = '10';
}

// Go back to the main page
function goBack() {
    // Reset everything to the original state
    document.querySelector('.container').style.display = 'flex';
    document.getElementById('backButton').style.display = 'none';
    document.body.style.background = 'linear-gradient(135deg, #d3d3d3, #6e7f80)'; // Default Grey-Blue gradient
    document.body.style.transition = "background 0.5s ease"; // Add transition for background reset
    // Remove the expanded class from all bubbles and hide spider lines
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.classList.remove('expanded');
        bubble.style.position = ''; 
    });
    document.getElementById('spider').style.display = 'none';
    

};
