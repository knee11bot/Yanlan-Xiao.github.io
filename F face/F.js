// script.js
document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById("videoPlayer");
    const defaultGif = document.getElementById("defaultGif");
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if (videoPlayer.classList.contains("playing")) {
                return;
            }

            // 获取按钮对应的视频和音效
            const videoSrc = this.getAttribute("data-video");
            const audioSrc1 = this.getAttribute("data-sound1");
            const audioSrc2 = this.getAttribute("data-sound2");

            // 播放音效
            const audio1 = new Audio(audioSrc1);
            const audio2 = new Audio(audioSrc2);
            audio1.loop = true; // 循环播放音效
            audio2.loop = true;

            audio1.play();
            audio2.play();

            // 播放视频
            videoPlayer.src = videoSrc;
            videoPlayer.classList.add("playing");
            videoPlayer.classList.remove("hidden");
            defaultGif.classList.add("hidden");
            videoPlayer.play();

            // 为其他按钮添加 inactive 类
            buttons.forEach(btn => {
                if (btn !== this) {
                    btn.classList.add("inactive");
                } else {
                    btn.classList.add("active");
                }
            });

            // 当视频播放结束时
            videoPlayer.onended = function() {
                videoPlayer.classList.remove("playing");
                videoPlayer.classList.add("hidden");
                defaultGif.classList.remove("hidden");

                // 停止音效
                audio1.pause();
                audio2.pause();
                audio1.currentTime = 0;
                audio2.currentTime = 0;

                // 重新启用所有按钮
                buttons.forEach(btn => {
                    btn.classList.remove("inactive");
                    btn.classList.remove("active");
                });
            };
        });
    });
});
