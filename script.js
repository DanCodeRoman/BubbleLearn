document.addEventListener("DOMContentLoaded", function () {
    const bubbles = document.querySelectorAll(".bubble");
    const backButton = document.getElementById("back-button");
    const container = document.getElementById("container");

    bubbles.forEach(bubble => {
        bubble.addEventListener("click", function () {
            showSubBubbles(bubble.id);
        });
    });

    backButton.addEventListener("click", function () {
        goBack();
    });

    function showSubBubbles(id) {
        backButton.style.display = "block";
        container.classList.add("expanded");
        container.innerHTML = "";

        const centerBubble = document.createElement("div");
        centerBubble.classList.add("bubble");
        centerBubble.id = id;
        centerBubble.innerText = id.charAt(0).toUpperCase() + id.slice(1);
        centerBubble.style.zIndex = 20;

        container.appendChild(centerBubble);

        const colors = {
            math: "linear-gradient(to bottom right, grey, red)",
            chemistry: "linear-gradient(to bottom right, grey, blue)",
            biology: "linear-gradient(to bottom right, grey, green)",
            physics: "linear-gradient(to bottom right, grey, white)",
            history: "linear-gradient(to bottom right, grey, brown)",
        };

        document.body.style.background = colors[id];

        const topics = {
            math: ["Geometry", "Calculus", "Algebra", "Trigonometry", "Statistics", "Probability", "Discrete Math", "Number Theory", "Linear Algebra", "Differential Equations"],
            chemistry: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry", "Biochemistry", "Environmental Chemistry", "Materials Science", "Chemical Engineering", "Medicinal Chemistry", "Polymer Chemistry"],
            biology: ["Genetics", "Microbiology", "Cell Biology", "Ecology", "Evolution", "Anatomy", "Physiology", "Botany", "Zoology", "Molecular Biology"],
            physics: ["Mechanics", "Electromagnetism", "Thermodynamics", "Optics", "Quantum Physics", "Nuclear Physics", "Astrophysics", "Condensed Matter", "Particle Physics", "Acoustics"],
            history: ["Ancient History", "Medieval History", "Renaissance", "Industrial Revolution", "Modern History", "World Wars", "Cold War", "American History", "Asian History", "European History"],
        };

        const subTopics = topics[id];

        subTopics.forEach((topic, index) => {
            const angle = (index / 10) * 2 * Math.PI;
            const x = 250 * Math.cos(angle) + window.innerWidth / 2 - 50;
            const y = 250 * Math.sin(angle) + window.innerHeight / 2 - 50;
            const subBubble = document.createElement("div");
            subBubble.classList.add("bubble");
            subBubble.innerText = topic;
            subBubble.style.position = "absolute";
            subBubble.style.left = `${x}px`;
            subBubble.style.top = `${y}px`;
            container.appendChild(subBubble);
        });
    }

    function goBack() {
        backButton.style.display = "none";
        container.classList.remove("expanded");
        container.innerHTML = `
            <div class="bubble" id="math">Math</div>
            <div class="bubble" id="chemistry">Chemistry</div>
            <div class="bubble" id="biology">Biology</div>
            <div class="bubble" id="physics">Physics</div>
            <div class="bubble" id="history">History</div>
        `;
        document.body.style.background = "linear-gradient(to bottom right, grey, blue)";
        const newBubbles = container.querySelectorAll(".bubble");
        newBubbles.forEach(bubble => {
            bubble.addEventListener("click", function () {
                showSubBubbles(bubble.id);
            });
        });
    }
});
