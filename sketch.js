"use strict";

let MonVid;
let playing = false;


function setup() {
  MonVid = createVideo(['assets/project3.mp4', 'assets/project3.webm']);;
  MonVid.size(600, 600);
}

function draw() {

}

function mousePressed() {
    if (playing == false) {
      MonVid.loop();
      playing = true;
    } else if (playing == true) {
      MonVid.pause();
      playing = false;
    }
  }
