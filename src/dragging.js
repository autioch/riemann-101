export default function applyDragging(canvasEl, ctx, dragCallback) {
  let startPos;
  let currentX = 0;
  let currentY = 0;
  let storedX = 0;
  let storedY = 0;

  function updateDrag(ev) {
    currentX = storedX + ev.pageX - startPos.x;
    currentY = storedY + ev.pageY - startPos.y;

    dragCallback(currentX, currentY);
  }

  function stopDrag() {
    window.removeEventListener('mousemove', updateDrag);
    window.removeEventListener('mouseleave', stopDrag);
    canvasEl.removeEventListener('mouseup', stopDrag);

    storedX = currentX;
    storedY = currentY;
  }

  function startDrag(ev) {
    window.addEventListener('mousemove', updateDrag);
    window.addEventListener('mouseleave', stopDrag);
    canvasEl.addEventListener('mouseup', stopDrag);

    startPos = {
      x: ev.pageX,
      y: ev.pageY
    };
  }

  canvasEl.addEventListener('mousedown', startDrag);

  return function removeDrag() {
    canvasEl.removeEventListener('mousedown', startDrag);
  };
}
