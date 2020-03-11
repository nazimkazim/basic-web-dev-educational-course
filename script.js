import lesson from "./lesson_obj.js";

/* const el = document.getElementById("openModal");

el.addEventListener("click", function() {
  document.querySelector(".modal").className += "is-active";
}); */

console.log(lesson);

const lessonPlateNumber = document.querySelector(".lesson-plate-number");
lessonPlateNumber.innerText += `${lesson.header.number}`;

const lessonPlateTitle = document.querySelector(".lesson-plate-title");
lessonPlateTitle.innerText += `${lesson.header.title}`;
