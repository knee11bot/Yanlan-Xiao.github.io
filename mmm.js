<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>一个有趣的鬼魂动画</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
<link rel="stylesheet" href="./style.css">

// mmm.js
function initializeMMM(container) {
    // Your initialization code here
    container.innerHTML = '<p>MMM Effect initialized</p>';
    // Add more effects or functionalities
}

// Expose the function to the global scope
window.initializeMMM = initializeMMM;


</head>
<body>
<div class="scene-container stars-out" tabindex="1">
  <div class="ghost-container">
    <div class="ghost">
      <!-- 鬼魂的头部、眼睛、嘴、腮红 -->
      <div class="ghost-head">
        <div class="ghost-face">
          <div class="eyes-row">
            <div class="eye left"></div>
            <div class="eye right"></div>
          </div>
          <div class="mouth-row">
            <div class="cheek left"></div>
            <div class="mouth">
              <div class="mouth-top"></div>
              <div class="mouth-bottom"></div>
            </div>
            <div class="cheek right"></div>
          </div>
        </div>
      </div>

      <!-- 鬼魂的身体 -->
      <div class="ghost-body">
        <div class="ghost-hand hand-left"></div>
        <div class="ghost-hand hand-right"></div>
        <div class="ghost-skirt">
          <div class="pleat down"></div>
          <div class="pleat up"></div>
          <div class="pleat down"></div>
          <div class="pleat up"></div>
          <div class="pleat down"></div>
        </div>
      </div>
    </div>

    <!-- 装饰部分 -->
    <div class="stars">
      <div class="star orange pointy star-1"><div class="star-element"></div></div>
      <div class="star orange pointy star-2"><div class="star-element"></div></div>
      <div class="star yellow pointy star-3"><div class="star-element"></div></div>
      <div class="star yellow pointy star-4"><div class="star-element"></div></div>
      <div class="star blue round star-5"><div class="star-element"></div></div>
      <div class="star blue round star-6"><div class="star-element"></div></div>
    </div>
  </div>

  <!-- 阴影 -->
  <div class="shadow-container">
    <div class="shadow"></div>
    <div class="shadow-bottom"></div>
  </div>
</div>
<!-- partial -->
  <script src="./script.js"></script>

</body>
</html>