document.addEventListener("DOMContentLoaded", function() {
    const btnEntreprise = document.getElementById('btn_entreprise');
    const btnFormation = document.getElementById('btn_formation');
    const btnTout = document.getElementById('btn_tout');

    const divsEntreprise = document.querySelectorAll('.entrep');
    const divsEcole = document.querySelectorAll('.ecole');

    btnEntreprise.addEventListener('click', function() {
        hideAll();
        divsEntreprise.forEach(div => div.style.display = 'block');
    });

    btnFormation.addEventListener('click', function() {
        hideAll();
        divsEcole.forEach(div => div.style.display = 'block');
    });

    btnTout.addEventListener('click', function() {
        showAll();
    });

    function hideAll() {
        divsEntreprise.forEach(div => div.style.display = 'none');
        divsEcole.forEach(div => div.style.display = 'none');
    }

    function showAll() {
        divsEntreprise.forEach(div => div.style.display = 'block');
        divsEcole.forEach(div => div.style.display = 'block');
    }
});
