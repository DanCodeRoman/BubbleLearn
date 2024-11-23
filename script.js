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

    // Apply the background gradient for the clicked subject
    document.body.style.background = backgrounds[subject];
    

    // Make the clicked bubble larger
    bubble.classList.add('expanded');

    // Create spider lines and sub-bubbles
    createSpiderLines(subject);
};

// Create spider lines and subtopics
function createSpiderLines(subject) {
    const spider = document.getElementById('spider');
    spider.style.display = 'block';  // Make the spider container visible
    

    const bubble = document.querySelector(`#${subject}`);

    const bubbleRect = bubble.getBoundingClientRect();
    const bubbleCenterX = bubbleRect.left + bubbleRect.width / 2;
    const bubbleCenterY = bubbleRect.top + bubbleRect.height / 2;

    // Create 10 spider lines extending from the clicked bubble
    const angleIncrement = 360 / 10;
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
        const radius = 200;  // Distance from center
        const x = 200 * Math.cos(angleRad);
        const y = 200 * Math.sin(angleRad);

        subBubble.style.position = 'absolute';
        subBubble.style.left = `calc(${bubbleCenterX + x - 50}px)`; // Subtract half the size of subBubble to center it
        subBubble.style.top = `calc(${bubbleCenterY + y - 50}px)`; // Subtract half the size of subBubble to center it
        

        line.style.transform = `rotate(${angle}deg)`;
        subBubble.style.transform = `translate(${x}px, ${y}px)`;
        line.style.transition = 'height 0.5s ease-in-out, opacity 0.5s ease';
        line.style.height = '200px';  // Set the height of the lines
        line.style.opacity = 1;  // Ensure lines are visible
        

        // Set the line height and subBubble opacity
        setTimeout(() => {
            line.style.height = '200px'; // Set line height after animation starts
            subBubble.style.opacity = 1;  // Make subBubble appear smoothly
            subBubble.style.position = 'absolute';

        }, 50);
    };
};

// Go back to the main page
function goBack() {
    // Reset everything to the original state
    document.querySelector('.container').style.display = 'flex';
    document.getElementById('backButton').style.display = 'none';
    document.body.style.background = 'linear-gradient(135deg, #d3d3d3, #6e7f80)'; // Default Grey-Blue gradient
  
    // Remove the expanded class from all bubbles and hide spider lines
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.classList.remove('expanded');
    });
    document.getElementById('spider').style.display = 'none';
};

window.onload = function() {
    // Now the page is fully loaded, and the script can be run
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.addEventListener('click', function () {
            zoomIn(bubble);
        });
    });
    
    // Ensure back button functionality
    document.getElementById('backButton').addEventListener('click', goBack);
};
