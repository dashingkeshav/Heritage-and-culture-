// --- FAKE PAYMENT MODAL ---
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('payment-modal');
    const buyBtn = document.getElementById('buy-now-btn');
    const closeBtn = document.querySelector('.close-btn');
    const paymentFlowDiv = document.getElementById('payment-flow');

    // Show the modal when "Buy Now" is clicked
    buyBtn.onclick = function() {
        modal.style.display = 'block';
        
        // Reset to initial state
        paymentFlowDiv.innerHTML = `
            <h2>Complete Your Purchase</h2>
            <p>Scan the QR code with your UPI app</p>
            <img src="assests/images/qr.jpg" alt="Fake UPI QR Code" width="200">
            <p class="processing-text">Waiting for payment...</p>
        `;

        // Simulate payment processing after 3 seconds
        setTimeout(() => {
            paymentFlowDiv.innerHTML = `
                <h2>Payment Successful! ✅</h2>
                <p>Thank you for your purchase.</p>
                <p>Your artwork will be commissioned shortly.</p>
            `;
        }, 3000);
    }

    // Hide the modal
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});