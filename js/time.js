    function updateClock() {
        const now = new Date();
        const date = now.toLocaleDateString();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${date}  ${hours}:${minutes}:${seconds}`;
        
        document.getElementById('clock').textContent = timeString;
    }

    setInterval(updateClock, 1000);
    updateClock(); // initial call to display clock immediately