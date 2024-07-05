document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('uploadAndPlayButton').addEventListener('click', function() {
        var selectedFile = document.getElementById('videoInput').files[0];
        if (selectedFile) {
            alert('Uploading and playing: ' + selectedFile.name);
            window.location.href = 'play.html?video=' + encodeURIComponent(selectedFile.name);
        } else {
            alert('Please choose a file first.'); 
        }
    });
});
