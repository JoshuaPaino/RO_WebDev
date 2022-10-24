window.addEventListener('load', function () {
    let block = this.document.getElementById('block');
    //pos y manip
    let posY = this.document.getElementById('pos-y');
    posY.addEventListener('input', function () {
        block.style.top = posY.value + 'px';
    })
    // pos X manip
    let posX = this.document.getElementById('pos-x');
    posX.addEventListener('input', function () {
        block.style.left = posX.value + 'px';

    })
    // Size Manip
    let size = this.document.getElementById('size');
    size.addEventListener('input', function () {
        block.style.transform = `scale(${size.value})`;
    })
    // Opacity manip
    let opacity = this.document.getElementById('opacity');
    opacity.addEventListener('input', function () {
        block.style.opacity = opacity.value;
    })
    // SHape
})