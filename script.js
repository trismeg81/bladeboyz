// Image rollover example
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const originalSrc = img.src;
        img.addEventListener('mouseover', () => {
            img.src = 'hovered-image.gif'; // Swap to a rad hovered GIF
        });
        img.addEventListener('mouseout', () => {
            img.src = originalSrc;
        });
    });
    
    // Falling stars or snow effect (add canvas or divs for this)
    // Search for "90s javascript snow" for code snippets to paste in
});
