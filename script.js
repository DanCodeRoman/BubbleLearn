// JavaScript to handle bubble clicks and back functionality
document.querySelectorAll('.bubble').forEach(bubble => {
    bubble.addEventListener('click', function() {
        zoomIn(bubble);
    });
});

function zoomIn(bubble) {
    // Hide the initial bubbles and show the back button
    document.querySelector('.container').style.display = 'none';
    document.getElementById('backButton').style.display = 'block';

    // Expand the clicked bubble
    bubble.classList.add('expanded');

    // Create new interconnected bubbles
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear the existing bubbles

    const newBubble = document.createElement('div');
    newBubble.classList.add('bubble');
    newBubble.innerText = 'New Topic';  // Placeholder for a new topic

    container.appendChild(newBubble);
}

function goBack() {
    // Show the original bubbles and hide the back button
    document.querySelector('.container').style.display = 'grid';
    document.getElementById('backButton').style.display = 'none';

    // Remove the expanded class from any bubbles
    const expandedBubbles = document.querySelectorAll('.bubble.expanded');
    expandedBubbles.forEach(bubble => {
        bubble.classList.remove('expanded');
    });
}
