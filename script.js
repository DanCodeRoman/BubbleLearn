// Zoom in to a subject
function zoomIn(subject) {
    const container = document.querySelector('.bubble-container');
    container.innerHTML = '';  // Clear existing bubbles

    // Create a new set of bubbles based on the subject
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

    // Add new bubbles for the selected subject
    topics.forEach(topic => {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.textContent = topic;
        bubble.onclick = () => zoomIn(topic);  // Zoom into next topic
        container.appendChild(bubble);
    });

    // Show the back button
    const backButton = document.getElementById('back-button');
    backButton.style.display = 'block';

    // Apply zoom class to body for the zoom effect
    document.body.classList.add('zoomed');
}

// Zoom out (go back)
function zoomOut() {
    // Reset the content and return to main bubbles
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
