const inputBox = document.querySelector("#inputBox");
const tabContentItems = document.querySelectorAll(".tab-pane");
const draggableTab = document.querySelectorAll(".draggable");
const tabParent = document.querySelector(".tabs");
let dragedElement = null;

// Tabs
function tabSelectItems() {
  draggableTab.forEach((item) => item.classList.remove("active"));
  tabContentItems.forEach((item) => item.classList.remove("show", "active"));

  this.classList.add("active");
  let tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show", "active");
}

draggableTab.forEach((item) => item.addEventListener("click", tabSelectItems));

// Drag n Drop
for (let dragAction of draggableTab) {
  dragAction.addEventListener("dragstart", dragStart);
  dragAction.addEventListener("dragend", dragEnd);
  dragAction.addEventListener("dragover", dragOver);
  dragAction.addEventListener("dragenter", dragEnter);
  dragAction.addEventListener("dragleave", dragLeave);
  dragAction.addEventListener("drop", dragDrop);
}

function dragStart(e) {
  e.currentTarget.classList.add("dragging");
  dragedElement = e.currentTarget;
  console.log(e.currentTarget.getBoundingClientRect());
}

function dragEnd(e) {
  e.currentTarget.classList.remove("dragging");
}

function dragOver(e) {
  e.preventDefault();
  this.classList.add("hovered");
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}

function dragLeave() {
  this.classList = "draggable";
}

function dragDrop(e) {
  this.classList = "draggable";

  let nodes = tabParent.children;
  let start = -1;
  let end = -1;
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] === dragedElement) {
      start = i;
    }

    if (nodes[i] === e.currentTarget) {
      end = i;
    }
  }
  if (start < end) {
    tabParent.insertBefore(dragedElement, e.currentTarget.nextSibling);
  } else {
    tabParent.insertBefore(dragedElement, e.currentTarget);
  }
}

// inputBox.addEventListener("keypress", () => {
//   console.log("key Press");
// });

// inputBox.addEventListener("keydown", () => {
//   console.log("keyDown");
// });

// inputBox.addEventListener("keyup", () => {
//   console.log("keyup");
// });
