// Ana sayfadan galeriyi açmaya yönlendiren işlev
document.getElementById('go-to-gallery').addEventListener('click', function() {
    document.getElementById('main-page').style.display = 'none'; // Ana sayfayı gizle
    document.getElementById('gallery-page').style.display = 'block'; // Galeri sayfasını göster
});

// Ana sayfaya geri dönme işlevi
document.getElementById('back-to-home').addEventListener('click', function() {
    document.getElementById('gallery-page').style.display = 'none'; // Galeri sayfasını gizle
    document.getElementById('main-page').style.display = 'flex'; // Ana sayfayı göster
});
