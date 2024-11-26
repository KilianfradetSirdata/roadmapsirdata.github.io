// script.js

// Prétraitement : supprimer le chevron et désactiver les éléments sans sous-liste
document.querySelectorAll('.quarter ul li').forEach(item => {
    const hasSubItems = item.querySelector('.sub-items');
    if (!hasSubItems) {
        // Ajouter une classe pour style spécifique
        item.classList.add('no-chevron');
        // Désactiver les clics
        item.style.pointerEvents = 'none';
        item.style.cursor = 'default';
    }
});

// Sélectionne tous les éléments de la liste
document.querySelectorAll('.quarter ul li').forEach(item => {
    item.addEventListener('click', function () {
        // Toggle la classe 'open' pour gérer la rotation du chevron
        this.classList.toggle('open');
        
        // Affiche ou masque les sous-éléments avec une animation fluide
        const subItems = this.querySelector('.sub-items');
        if (subItems) {
            if (subItems.style.maxHeight) {
                // Si l'élément est ouvert, on le ferme
                subItems.style.maxHeight = null;
            } else {
                // Sinon, on définit une hauteur pour l'ouvrir
                subItems.style.maxHeight = subItems.scrollHeight + "px";
            }
        }
    });
});

