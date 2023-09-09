
const editor = document.getElementById("editor");
editor.addEventListener("input", function () {
  
  localStorage.setItem("editorContent", editor.value);
});


const savedContent = localStorage.getItem("editorContent");


if (savedContent) {
  editor.value = savedContent;
}