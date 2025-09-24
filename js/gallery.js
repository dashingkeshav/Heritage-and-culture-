document.addEventListener('DOMContentLoaded', () => {

    // --- UPDATED ARTWORK DATA with descriptions and large images ---
    const allArtworks = [
        { id: 1, title: 'Madhubani Fish', artist: 'Sita Devi', style: 'Madhubani', image: 'assests/images/Madhubani.jpg', largeImage: 'assests/images/Madhubani.jpg', description: 'A classic representation of aquatic life in Madhubani art, symbolizing wealth and prosperity.' },
        { id: 2, title: 'Warli Village Life', artist: 'Jivya Soma Mashe', style: 'Warli', image: 'assests/images/villagelife.jpg', largeImage: 'assests/images/villagelife.jpg', description: 'This piece captures the essence of community and celebration in a Warli tribe, using simple geometric shapes.' },
        { id: 3, title: 'Pattachitra Krishna', artist: 'Raghurajpur Artists', style: 'Pattachitra', image: 'assests/images/pattachitra.jpg', largeImage: 'assests/images/pattachitra.jpg', description: 'A traditional Pattachitra scroll painting from Odisha, depicting a scene from the life of Lord Krishna.' },
        { id: 4, title: 'Tree of Life', artist: 'Ganga Devi', style: 'Madhubani', image: 'assests/images/treeoflife.jpg', largeImage: 'assests/images/treeoflife.jpg', description: 'The "Tree of Life" is a central motif in Madhubani art, representing the connection between heaven, earth, and the underworld.' },
        { id: 5, title: 'The Wedding Dance', artist: 'Tribal Community', style: 'Warli', image: 'assests/images/warliwedding.jpg', largeImage: 'assests/images/warliwedding.jpg', description: 'A joyful depiction of a traditional Warli wedding ceremony, with figures dancing in a spiral.' },
        { id: 6, title: 'Gopis of Vrindavan', artist: 'Puri Artisans', style: 'Pattachitra', image: 'assests/images/gopis.jpg', largeImage: 'assests/images/gopis.jpg', description: 'This intricate artwork shows the Gopis, the cow-herding girls, in devotion to Krishna in the forests of Vrindavan.' }
    ];

    const galleryContainer = document.getElementById('full-gallery-container');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Function to display artworks in the gallery
    function displayArtworks(artworksToShow) {
        galleryContainer.innerHTML = artworksToShow.map(art => `
            <div class="art-card" data-id="${art.id}">
                <img src="${art.image}" alt="${art.title}">
                <div class="art-card-info">
                    <h3>${art.title}</h3>
                    <p>${art.style} by ${art.artist}</p>
                </div>
            </div>
        `).join('');
    }

    // --- FILTERING LOGIC ---
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            button.classList.add('active');

            const styleToFilter = button.getAttribute('data-style');
            const filteredArtworks = styleToFilter === 'all'
                ? allArtworks
                : allArtworks.filter(art => art.style === styleToFilter);
            
            displayArtworks(filteredArtworks);
        });
    });

    // --- NEW MODAL LOGIC ---
    const modal = document.getElementById('artwork-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalArtist = document.getElementById('modal-artist');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close-btn');

    function openModal(artwork) {
        if (!modal) return;
        modalImg.src = artwork.largeImage;
        modalImg.alt = artwork.title;
        modalTitle.textContent = artwork.title;
        modalArtist.textContent = `${artwork.style} by ${artwork.artist}`;
        modalDescription.textContent = artwork.description;
        modal.style.display = 'block';
    }

    function closeModal() {
        if (!modal) return;
        modal.style.display = 'none';
    }

    // Event listener for clicks within the gallery to open the modal
    if (galleryContainer) {
        galleryContainer.addEventListener('click', (event) => {
            const card = event.target.closest('.art-card');
            if (card) {
                const artId = card.dataset.id;
                const selectedArt = allArtworks.find(art => art.id == artId);
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

    // Initially display all artworks
    displayArtworks(allArtworks);
});