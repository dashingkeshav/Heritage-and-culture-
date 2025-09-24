document.addEventListener('DOMContentLoaded', () => {

    // --- UPDATED ARTWORK DATA ---
    // We've added a 'largeImage' and 'description' for the modal.
    const artworks = [
        {
            id: 1,
            title: 'Madhubani Fish',
            artist: 'Sita Devi',
            style: 'Madhubani',
            image: 'assests/images/Madhubani.jpg',
            largeImage: 'assests/images/Madhubani.jpg',
            description: 'A classic representation of aquatic life in Madhubani art, symbolizing wealth and prosperity. The intricate line work and vibrant patterns are hallmarks of this ancient style from the Mithila region of India.'
        },
        {
            id: 2,
            title: 'Warli Village Life',
            artist: 'Jivya Soma Mashe',
            style: 'Warli',
            image: 'assests/images/warli.jpg',
            largeImage: 'assests/images/warli.jpg',
            description: 'This piece captures the essence of community and celebration in a Warli tribe. Using simple geometric shapes like circles, triangles, and squares, the artist depicts scenes of farming, dancing, and daily rituals.'
        },
        {
            id: 3,
            title: 'Pattachitra Krishna',
            artist: 'Raghurajpur Artists',
            style: 'Pattachitra',
            image: 'assests/images/pattachitra.jpg',
            largeImage: 'assests/images/pattachitra.jpg',
            description: 'A traditional Pattachitra scroll painting from Odisha, depicting a scene from the life of Lord Krishna. This art form is known for its rich colors, creative motifs, and mythological narratives.'
        }
    ];

    const galleryContainer = document.querySelector('.gallery-container');

    // Function to populate the gallery
    function populateGallery() {
        if (!galleryContainer) return;

        galleryContainer.innerHTML = artworks.map(art => `
            <div class="art-card" data-id="${art.id}">
                <img src="${art.image}" alt="${art.title}">
                <div class="art-card-info">
                    <h3>${art.title}</h3>
                    <p>${art.style} by ${art.artist}</p>
                </div>
            </div>
        `).join('');
    }

    // --- FAKE AI RECOGNIZER ---
    window.recognizeArt = function() {
        const uploader = document.getElementById('art-uploader');
        const resultDiv = document.getElementById('ai-result');

        if (!uploader || uploader.files.length === 0) {
            resultDiv.textContent = 'Please upload an image first!';
            resultDiv.style.color = '#dc3545';
            return;
        }

        resultDiv.textContent = 'Analyzing...';
        resultDiv.style.color = '#ffc107';

        setTimeout(() => {
            const styles = ['Madhubani', 'Warli', 'Pattachitra', 'Kalamkari'];
            const randomStyle = styles[Math.floor(Math.random() * styles.length)];
            const confidence = (Math.random() * (99 - 85) + 85).toFixed(2);

            resultDiv.textContent = `Style Detected: ${randomStyle} (Confidence: ${confidence}%)`;
            resultDiv.style.color = '#28a745';
        }, 2000);
    }

    // --- NEW MODAL LOGIC ---
    const modal = document.getElementById('artwork-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalArtist = document.getElementById('modal-artist');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close-btn');

    // Function to open the modal with specific artwork data
    function openModal(artwork) {
        modalImg.src = artwork.largeImage;
        modalImg.alt = artwork.title;
        modalTitle.textContent = artwork.title;
        modalArtist.textContent = `${artwork.style} by ${artwork.artist}`;
        modalDescription.textContent = artwork.description;
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event listener for clicks within the gallery
    if (galleryContainer) {
        galleryContainer.addEventListener('click', (event) => {
            const card = event.target.closest('.art-card');
            if (card) {
                const artId = card.dataset.id;
                const selectedArt = artworks.find(art => art.id == artId);
                if (selectedArt) {
                    openModal(selectedArt);
                }
            }
        });
    }
    
    // Event listeners for closing the modal
    if (modal) {
        closeBtn.addEventListener('click', closeModal);
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                closeModal();
            }
        });
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        });
    }

    // --- INITIALIZE THE PAGE ---
    populateGallery();
});