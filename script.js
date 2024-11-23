// Zoom in to a subject when clicked
function zoomIn(subject) {
    const container = document.querySelector('.bubble-container');
    container.innerHTML = '';  // Clear existing bubbles

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

    // Add new bubbles for the selected topic
    topics.forEach(topic => {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.textContent = topic;
        bubble.onclick = () => zoomIn(topic);  // Click on a topic to zoom in further
        container.appendChild(bubble);
    });

    // Show the back button
    const backButton = document.getElementById('back-button');
    backButton.style.display = 'block';

    // Apply zoom effect by modifying the body class
    document.body.classList.add('zoomed');
}

// Zoom out (back to main bubbles)
function zoomOut() {
    // Reset to the main bubbles (Math, Biology, etc.)
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

    // Remove the zoom effect
    document.body.classList.remove('zoomed');
}
