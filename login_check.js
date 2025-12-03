// Tambahkan script ini di semua halaman kecuali unlockgpt.html dan GenerateAc.html
(function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Halaman yang memerlukan login
    const protectedPages = ['worm.html', 'index.html', 'blast.html', 'snapber.html', 'nokos.html'];
    
    if (protectedPages.includes(currentPage)) {
        if (!sessionStorage.getItem('wormgpt_logged_in')) {
            window.location.href = 'unlockgpt.html';
        }
    }
})();