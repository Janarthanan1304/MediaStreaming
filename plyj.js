document.addEventListener('DOMContentLoaded', function() {
    function getVideoFileNameFromURL() {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        return urlParams.get('video');
    }
    function initializeVideoPlayer() {
        var videoFileName = getVideoFileNameFromURL();
        if (videoFileName) {
            var videoElement = document.getElementById('videoPlayer');
            videoElement.src = videoFileName;
            videoElement.play(); // Autoplay the video (if allowed by browser settings)
        } else {
            console.error('No video file specified.');
        }
    }
    initializeVideoPlayer();
});
