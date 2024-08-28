const buton = document.getElementById('kacanButon');

// Fare butonun üzerine geldiğinde çalışacak
buton.addEventListener('mouseover', () => {
    // Ekran sınırlarını hesaplayarak butonun görünür kalmasını sağlarız
    const maxX = window.innerWidth - buton.clientWidth; // Yatay sınır
    const maxY = window.innerHeight - buton.clientHeight; // Dikey sınır

    // Butonun yeni konumunu rastgele belirle
    const x = Math.random() * maxX;
    const y = Math.random() * maxX;

    // Butonu yeni konuma taşı
    buton.style.transform = `translate(${1000}px, ${500}px)`;
});
