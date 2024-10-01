// 允许拖放
const pieces = document.querySelectorAll('.puzzle-piece');
const dropZones = document.querySelectorAll('.drop-zone');

pieces.forEach(piece => {
    piece.addEventListener('dragstart', dragStart);
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const piece = document.getElementById(data);
    if (event.target.classList.contains('drop-zone')) {
        event.target.appendChild(piece);
    }

    checkPuzzle();
}

function checkPuzzle() {
    const dropZone1 = document.getElementById('dropZone1').firstChild;
    const dropZone2 = document.getElementById('dropZone2').firstChild;
    const dropZone3 = document.getElementById('dropZone3').firstChild;
    const dropZone4 = document.getElementById('dropZone4').firstChild;

    if (dropZone1 && dropZone2 && dropZone3 && dropZone4) {
        const arrangement = [
            dropZone1.id,
            dropZone2.id,
            dropZone3.id,
            dropZone4.id
        ];

        // 拼成鲸鱼的排列顺序
        const whaleOrder = ['piece1', 'piece2', 'piece3', 'piece4'];

        // 拼成人类的排列顺序
        const humanOrder = ['piece3', 'piece4', 'piece1', 'piece2'];

        if (JSON.stringify(arrangement) === JSON.stringify(whaleOrder)) {
            document.getElementById('soundA').play();
        } else if (JSON.stringify(arrangement) === JSON.stringify(humanOrder)) {
            document.getElementById('soundB').play();
        }
    }
}
(function() {
    // 所有的交互代码都放在这个函数内部
    document.getElementById('button').addEventListener('click', function() {
        alert('Button clicked inside iframe');
    });
})();
