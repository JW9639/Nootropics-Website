// Wait for the video to be ready
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("bg-video");
    video.play();
});

// Handle resizing the video
window.addEventListener("resize", function () {
    const video = document.getElementById("bg-video");
    video.style.minHeight = window.innerHeight + "px";
    video.style.minWidth = window.innerWidth + "px";
});

  