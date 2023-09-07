
const clickerCounter = document.getElementById("clicker__counter");
const cookieImage = document.getElementById("cookie");


let isCookieExpanded = true;


let clickCount = 0;


cookieImage.addEventListener("click", () => {
  
  clickCount++;
  clickerCounter.textContent = clickCount;

  
  if (isCookieExpanded) {
    cookieImage.style.width = "150px";
    cookieImage.style.height = "150px";
  } else {
    cookieImage.style.width = "200px";
    cookieImage.style.height = "200px";
  }

  
  isCookieExpanded = !isCookieExpanded;
});

//мое первое задание