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
    storedX = currentX;
    storedY = currentY;
  }

  function startDrag(ev) {
    startPos = {
      x: ev.pageX,
      y: ev.pageY
    };

    window.addEventListener('mousemove', updateDrag);
  }

  canvasEl.addEventListener('mousedown', startDrag);
  canvasEl.addEventListener('mouseup', stopDrag);

  return function removeDrag() {
    canvasEl.removeEventListener('mousedown', startDrag);
    canvasEl.removeEventListener('mouseup', stopDrag);
  };
}
