document.addEventListener('DOMContentLoaded', function() {
    var videoDetails = {
        fileName: 'ntvid.mp4',
        duration: '0.13', 
        fileSize: '22 MB' 
    };
    function displayVideoDetails() {
        document.getElementById('videoFileName').textContent = videoDetails.fileName;
        document.getElementById('videoDurationValue').textContent = videoDetails.duration;
        document.getElementById('videoFileSize').textContent = videoDetails.fileSize;
    }
    displayVideoDetails();
});
