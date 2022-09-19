"use strict";
const log = console.log;
const imgContainer = document.querySelector(".img-container");
const imgs = document.querySelectorAll(".img-slide");
const imgController = document.querySelector(".img-controller");

imgController.addEventListener("click", e => {
  const btn = e.target;
  let img = imgs[btn.dataset.btnOrder - 1];
  let stopFunc = false;

  if (img.dataset.imgClicked) {
    for (let i = img.dataset.imgOrder; i < imgs.length; i++) {
      let nextimgs = imgs[i];
      if (nextimgs.dataset.imgClicked === "true") {
        nextimgs.dataset.showImg = "false";
        nextimgs.dataset.imgClicked = "false";
        stopFunc = true;
      }
    }
  }

  if (stopFunc) return;

  if (btn.tagName === "BUTTON") {
    for (let i = 0; i < imgs.length; i++) {
      let img = imgs[i];
      if (img.dataset.imgOrder === btn.dataset.btnOrder) {
        let index = parseInt(img.dataset.imgOrder) - 1;
        img.dataset.showImg = true;
        img.dataset.imgClicked = true;
      }
    }
  }
});