//*----------------------- Button -----------------------*//
let container = document.querySelector(".container");
let Btn = document.querySelector(".btn");

Btn.onclick = () => {
  Btn.getAttribute("style") === "margin-left:17px;"
    ? Btn.removeAttribute("style", "margin-left:17px;")
    : Btn.setAttribute("style", "margin-left:17px;");
  Btn.innerHTML === "Open"
    ? (Btn.innerHTML = "Close")
    : (Btn.innerHTML = "Open");
  container.classList.toggle("active");
};

//*----------------------- Loading Round -----------------------*//
let loadingRound = document.querySelector(".loadingRound");
let BtnLR = document.querySelector(".btnLRound");
let color = document.querySelector(".color");

BtnLR.onclick = () => {
  loadingRound.setAttribute(
    "style",
    `filter: drop-shadow(${color.value} 0px 0px 10px);`
  );
  loadingRound.style.stroke = color.value;
};

//*----------------------- Like Func -----------------------*//
let heart = document.querySelector(".heart");
let likeInd = document.querySelector(".likeInd");

heart.onclick = () => {
  if (heart.classList.contains("like")) {
    heart.classList.remove("like");
    heart.classList.add("unlike");
    likeInd.innerHTML = "Like";
  } else {
    heart.classList.remove("unlike");
    heart.classList.add("like");
    likeInd.innerHTML = "Unlike";
  }
};

//*----------------------- Flip Card -----------------------*//
let flip = document.querySelector(".FlipOut");

const Flip = () => {
  flip.classList.toggle("active");
};

//*-----------------------------

document.querySelector("body").addEventListener("mousemove", eyeball);
function eyeball() {
  let eye = document.querySelectorAll(".eye i");
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (188 / Math.PI) * -1 + 270;
    eye.style.transform = "rotate(" + rot + "deg)";
  });
}
