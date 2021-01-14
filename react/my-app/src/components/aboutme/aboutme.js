import React from "react";

class AboutMe extends React.Component {
  state = {};

  // typeWriter() {
  //   let cursor = document.querySelector(`.cursor${count}`);
  //   cursor.style.display = "inline";
  //   cursor.classList.add("typing");
  //   if (count === texts.length) {
  //     count = 0;
  //   }

  //   currentText = texts[count];
  //   letter = currentText.slice(0, ++typeWriterIndex);
  //   document.querySelector(`.text-section-${count}`).textContent = letter;

  //   if (letter.length === currentText.length) {
  //     cursor.classList.remove("typing");
  //     if (count !== 2) {
  //       let buttonDiv = document.createElement("div");
  //       buttonDiv.className = "button-div";
  //       buttonDiv.innerHTML = '<button id="continue"> Continue </button> ';
  //       document
  //         .querySelector(`.text-content-buttons-${count}`)
  //         .appendChild(buttonDiv);

  //       document
  //         .querySelector("#continue")
  //         .addEventListener("click", function () {
  //           if (count === 0) {
  //             buttonDiv.parentNode.removeChild(buttonDiv);
  //             let img = document.createElement("img");
  //             img.classList.add("explosion");
  //             img.src = "../img/explosion.gif";
  //             document
  //               .querySelector(`.text-content-buttons-${count}`)
  //               .appendChild(img);
  //             setTimeout(function () {
  //               count++;
  //               typeWriterIndex = 0;
  //               typeWriter();
  //               cursor.parentNode.removeChild(cursor);
  //               img.parentNode.removeChild(img);
  //             }, 500);
  //           }
  //           if (count === 1) {
  //             let img = document.createElement("img");
  //             img.classList.add("explosion");
  //             img.src = "../img/mario.gif";
  //             document
  //               .querySelector(`.text-content-buttons-${count}`)
  //               .appendChild(img);
  //             buttonDiv.classList.add("mario");
  //             img.style.marginTop = "-5px";
  //             setTimeout(function () {
  //               buttonDiv.parentNode.removeChild(buttonDiv);
  //               count++;
  //               typeWriterIndex = 0;
  //               typeWriter();
  //               cursor.parentNode.removeChild(cursor);
  //               img.parentNode.removeChild(img);
  //             }, 700);
  //           }
  //         });
  //     } else {
  //       cursor.parentNode.removeChild(cursor);
  //     }
  //   } else {
  //     setTimeout(typeWriter, 100);
  //   }
  // }

  render() {
    return <>About</>;
  }
}

export default AboutMe;
