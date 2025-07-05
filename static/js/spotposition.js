const tree = document.querySelector('.tree');
const container = document.querySelector('.imagecontainer');

const baseWidth = 2248;
const baseHeight = 4000;

const spotData = {
  circle01: { x: 1028, y: 3550, w: 360 },
  circle02: { x: 1013, y: 2890, w: 360 },
};

function updateSpotPositions() {
  if (!tree || !container) return;

  const treeRect = tree.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const renderedTreeWidth = treeRect.width;
  const renderedTreeHeight = treeRect.height;

  const offsetX = (treeRect.left - containerRect.left);
  const offsetY = (treeRect.top - containerRect.top);

  for (const [id, { x, y, w }] of Object.entries(spotData)) {
    const el = document.getElementById(id);
    if (!el) continue;

    const left = offsetX + (x / baseWidth) * renderedTreeWidth;
    const top = offsetY + (y / baseHeight) * renderedTreeHeight;
    const width = (w / baseWidth) * renderedTreeWidth;

    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
    el.style.width = `${width}px`;

    el.classList.add('visible');
  }
}

window.addEventListener('resize', updateSpotPositions);
window.addEventListener('load', updateSpotPositions);
