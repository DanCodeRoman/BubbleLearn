// JavaScript to handle bubble clicks and back functionality
document.querySelectorAll('.bubble').forEach(bubble => {
    bubble.addEventListener('click', function() {
        zoomIn(bubble);
    });
});

function zoomIn(bubble) {
    // Hide all bubbles and show the back button
    document.querySelector('.container').style.display = 'none';
    document.getElementById('backButton').style.display = 'block';

    // Create new bubbles based on the clicked bubble
    const topics = getTopics(bubble.id);
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear the existing bubbles

    topics.forEach(topic => {
        const newBubble = document.createElement('div');
        newBubble.classList.add('bubble');
        newBubble.innerText = topic;
        newBubble.addEventListener('click', function() {
            zoomIn(newBubble);
        });
        container.appendChild(newBubble);
    });
}

function goBack() {
    // Show the original bubbles and hide the back button
    document.querySelector('.container').style.display = 'grid';
    document.getElementById('backButton').style.display = 'none';
}

function getTopics(bubbleId) {
    // Return topics based on the clicked subject
    const topics = {
        'math': ['PreCalc', 'Algebra', 'Geometry', 'Calculus'],
        'biology': ['Cell Biology', 'Genetics', 'Evolution', 'Ecology'],
        'chemistry': ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry'],
        'physics': ['Mechanics', 'Thermodynamics', 'Electromagnetism']
    };
    return topics[bubbleId] || [];
}
