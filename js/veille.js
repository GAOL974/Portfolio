// veille.js
document.addEventListener('DOMContentLoaded', function () {
    // Récupérer l'élément de tri
    var sortSelect = document.getElementById('sortSelect');

    // Ajouter un écouteur d'événements pour le changement de tri
    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            sortVideos(sortSelect.value);
        });
    }
});

function sortVideos(sortBy) {
    // Récupérer le conteneur des vidéos
    var videosContainer = document.querySelector('.hero-text');

    // Récupérer toutes les vidéos
    var videos = videosContainer.getElementsByClassName('video-container');

    // Convertir la liste d'éléments en un tableau
    var videosArray = Array.from(videos);

    videosArray.sort(function (a, b) {
        var aValue, bValue;

        switch (sortBy) {
            case 'date':
                aValue = a.querySelector('.note p:nth-child(2)').textContent.toLowerCase();
                bValue = b.querySelector('.note p:nth-child(2)').textContent.toLowerCase();
                break;
            case 'note':
                aValue = a.querySelector('.note p:nth-child(1)').textContent.toLowerCase();
                bValue = b.querySelector('.note p:nth-child(1)').textContent.toLowerCase();
                break;
            case 'nom':
                aValue = a.querySelector('h2').textContent.toLowerCase();
                bValue = b.querySelector('h2').textContent.toLowerCase();
                break;
            default:
                return 0;
        }

        // Comparaison des valeurs en fonction du type de tri
        if (aValue > bValue) {
            return -1;
        } else if (aValue < bValue) {
            return 1;
        } else {
            return 0;
        }
    });

    // Vider le conteneur des vidéos
    videosContainer.innerHTML = '';

    // Réorganiser les vidéos dans l'ordre trié
    videosArray.forEach(function (video) {
        videosContainer.appendChild(video);
    });
}