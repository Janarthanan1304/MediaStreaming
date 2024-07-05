document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('resize', adjustLayout);
    adjustLayout();
    function adjustLayout() {
        const buttons = document.querySelectorAll('.option-button');
        if (window.innerWidth < 768) {
            buttons.forEach(button => {
                button.style.width = '80%';
            });
        } else if (window.innerWidth < 480) {
            buttons.forEach(button => {
                button.style.width = '90%';
                button.style.padding = '0.8rem';
            });
        } else {
            buttons.forEach(button => {
                button.style.width = '30%';
                button.style.padding = '1rem';
            });
        }
    }
});
