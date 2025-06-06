// Shared JavaScript for faux_sierra_music

function generateRandomCode() {
    const snippets = [
        "function start() {",
        "let track = play(beat);",
        "const sound = mix(channel);",
        "if (loop) { fade(inout); }",
        "system.render(track);",
        "export { vibe };",
        "waveform.amplify();",
        "delay.effect = true;",
        "for (i = 0; i < infinite; i++) {",
        "return frequency(440);",
        "track.mixdown();",
        "import module from 'vibes';"
    ];
    return snippets[Math.floor(Math.random() * snippets.length)];
}

function generateVerticalText() {
    const snippets = [
        "real music",
        "ethical ai",
        "amazing plug-ins",
        "music licensing"
    ];
    return snippets[Math.floor(Math.random() * snippets.length)];
}

function populateCodeLines() {
    const container = document.getElementById('code-container');
    if (!container) return;

    const numVerticalLines = 1000;
    const numHorizontalLines = 25;
    const numVerticalScrollLines = 50;

    for (let i = 0; i < numVerticalLines; i++) {
        const line = document.createElement('div');
        line.className = 'code-line';
        line.textContent = generateRandomCode();
        line.style.left = `${Math.random() * 100}vw`;
        line.style.animationDuration = `${10 + Math.random() * 15}s`;
        line.style.setProperty('--animation-delay', `${Math.random() * 10}s`);
        container.appendChild(line);
    }

    for (let i = 0; i < numHorizontalLines; i++) {
        const line = document.createElement('div');
        line.className = 'code-line horizontal';
        line.textContent = generateRandomCode();
        line.style.top = `${Math.random() * 100}vh`;
        line.style.animationDuration = `${10 + Math.random() * 20}s`;
        line.style.setProperty('--animation-delay', `${Math.random() * 10}s`);
        container.appendChild(line);
    }

    for (let i = 0; i < numVerticalScrollLines; i++) {
        const line = document.createElement('div');
        line.className = 'code-line vertical';
        line.textContent = generateVerticalText();
        line.style.left = `${Math.random() * 100}vw`;
        line.style.top = `${Math.random() * 100}vh`;
        line.style.animationDuration = `${10 + Math.random() * 20}s`;
        line.style.setProperty('--animation-delay', `${Math.random() * 10}s`);
        container.appendChild(line);
    }
}

function animateLoadingDots() {
    const dotsElement = document.getElementById('dots');
    if (!dotsElement) return;

    let dots = 0;
    setInterval(() => {
        dots = (dots + 1) % 4;
        dotsElement.textContent = '.'.repeat(dots);
    }, 500);
}
