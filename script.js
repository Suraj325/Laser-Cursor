const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  //   cursor.setAttribute(
  //     "style",
  //     "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  //   );
  let x = e.pageX;
  let y = e.pageY;
  cursor.style.top = y - 15 + "px";
  cursor.style.left = x - 15 + "px";
  cursor.style.display = "block";
});

document.addEventListener("mouseout", (e) => {
  cursor.style.display = "none";
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
