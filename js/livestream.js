// --- FAKE LIVESTREAM CHAT ---
const fakeUsers = ['Aarav', 'Priya', 'Rohan', 'Sneha', 'Vikram'];
const fakeMessages = [
    'This is amazing!',
    'What colors are you using?',
    'I love the details. 🎨',
    'How long have you been painting?',
    'Beautiful work!',
    'Can you explain that technique again?'
];

const chatBox = document.getElementById('chat-box');

function addFakeMessage() {
    const user = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
    const message = fakeMessages[Math.floor(Math.random() * fakeMessages.length)];

    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.innerHTML = `<span>${user}:</span> ${message}`;

    chatBox.appendChild(messageElement);
    // Auto-scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Add a new fake message every 2-4 seconds
setInterval(addFakeMessage, Math.random() * 2000 + 2000);