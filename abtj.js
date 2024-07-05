document.addEventListener('DOMContentLoaded', function() {
    function adjustFontSize() {
        var creatorsList = document.getElementById('creatorsList');
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            creatorsList.style.fontSize = '1.2rem';
        } else {
            creatorsList.style.fontSize = '1.5rem';
        }
    }
    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);
});
