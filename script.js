// Zoom in to a subject
function zoomIn(subject) {
    const container = document.querySelector('.bubble-container');
    container.innerHTML = '';  // Clear existing bubbles

    // Set topics based on the subject clicked
    let topics;
    if (subject === 'Math') {
        topics = ['PreCalc', 'Algebra', 'Geometry', 'Calculus'];
    } else if (subject === 'Biology') {
        topics = ['Cells', 'DNA', 'Ecology', 'Evolution'];
    } else if (subject === 'Chemistry') {
        topics = ['Organic Chemistry', 'Atoms', 'Chemical Reactions'];
    } else if (subject === 'Physics') {
        topics = ['Mechanics', 'Electricity', 'Optics', 'Thermodynamics'];
    }

    // Create a bubble for each topic
    topics.forEach(topic => {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.textContent = topic;
        bubble.onclick = () => zoomIn(topic);  // Recursive zoom for subtopics
        container.appendChild(bubble);
    });

    // Show the back button
    const backButton = document.getElementById('back-button');
    backButton.style.display = 'block';

    // Add zoom effect by modifying the body class
    document.body.classList.add('zoomed');
}

// Zoom out (back to main bubbles)
function zoomOut() {
    // Reset the container to the main bubbles
    const container = document.querySelector('.bubble-container');
    container.innerHTML = `
        <div class="bubble" onclick="zoomIn('Math')">Math</div>
        <div class="bubble" onclick="zoomIn('Biology')">Biology</div>
        <div class="bubble" onclick="zoomIn('Chemistry')">Chemistry</div>
        <div class="bubble" onclick="zoomIn('Physics')">Physics</div>
    `;
    
    // Hide the back button
    const backButton = document.getElementById('back-button');
    backButton.style.display = 'none';

    // Remove zoom effect
    document.body.classList.remove('zoomed');
}
