// Topics for each subject
const topics = {
    math: ["Algebra", "Calculus", "Geometry", "Statistics", "Trigonometry", "Linear Algebra", "Differential Equations", "Pre-Calculus", "Probability", "Mathematical Proofs"],
    chemistry: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Biochemistry", "Analytical Chemistry", "Environmental Chemistry", "Thermodynamics", "Chemical Bonding", "Stoichiometry", "Atomic Theory"],
    biology: ["Genetics", "Cell Biology", "Ecology", "Evolution", "Anatomy", "Physiology", "Biochemistry", "Botany", "Microbiology", "Zoology"],
    physics: ["Mechanics", "Electromagnetism", "Thermodynamics", "Optics", "Quantum Mechanics", "Relativity", "Fluid Dynamics", "Nuclear Physics", "Waves", "Astrophysics"],
    history: ["World History", "U.S. History", "European History", "Ancient Civilizations", "Modern History", "History of Science", "Military History", "Political History", "Cultural History", "Economic History"]
};

// Function to handle bubble click
document.querySelectorAll('.bubble').forEach(bubble => {
    bubble.addEventListener('click', function () {
        zoomIn(bubble);
    });
});

// Function to zoom in and show topics
function zoomIn(bubble) {
    const subject = bubble.id;
    
    // Hide the original bubbles and show the back button
    document.querySelector('.container').style.display = 'none';
    document.getElementById('backButton').style.display = 'block';
    
    // Change background color based on subject
    const backgrounds = {
        math: 'linear-gradient(135deg, #b0b0b0, #ff4d4d)', // Grey Red
        chemistry: 'linear-gradient(135deg, #b0b0b0, #4d88d7)', // Grey Blue
        biology: 'linear-gradient(135deg, #b0b0b0, #4d9e7e)', // Grey Green
        physics: 'linear-gradient(135deg, #b0b0b0, #e1e1e1)', // Grey White
        history: 'linear-gradient(135deg, #b0b0b0, #7e4d28)' // Grey Brown
    };

    // Apply new background gradient
    document.body.style.background = backgrounds[subject];

    // Make the clicked bubble larger
    bubble.classList.add('expanded');

    // Create spider lines and subtopics
    createSpiderLines(subject);
}

// Function to create spider lines and subtopics
function createSpiderLines(subject) {
    const spider = document.getElementById('spider');
    spider.style.display = 'block';
    spider.innerHTML = ''; // Clear previous lines

    const bubble = document.querySelector(`#${subject}`);

    // Create 10 lines extending from the clicked bubble
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

        // Position the line and subBubble
        const angleRad = angle * (Math.PI / 180);
        const x = 200 * Math.cos(angleRad);
        const y = 200 * Math.sin(angleRad);

        line.style.transform = `rotate(${angle}deg)`;
        subBubble.style.transform = `translate(${x}px, ${y}px)`;

        // Set the line height and subBubble opacity
        setTimeout(() => {
            line.style.height = '200px';
            subBubble.style.opacity = 1;
        }, 50);
    }
}

// Function to handle the back button click
function goBack() {
    // Reset everything to original state
    document.querySelector('.container').style.display = 'flex';
    document.getElementById('backButton').style.display = 'none';
    document.body.style.background = 'linear-gradient(135deg, #d3d3d3, #6e7f80)'; // Grey-Blue

    // Remove the expanded class and reset spider lines
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.classList.remove('expanded');
    });
    document.getElementById('spider').style.display = 'none';
}
