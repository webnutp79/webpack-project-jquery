import "../index.html";

import getDateString from "./date.js";
import $ from "jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

// Bootstrap 4
// import "bootstrap";

// Bootstrap 5
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

$(document).ready(() => {
  // Print the current time
  $(".js-content").html(`It's ${getDateString()} `);

  // Display the Bootstrap modal window
  // Bootstrap 4
  /*
  $(".js-modal").modal({
    show: true,
    keyboard: true,
  });
  */
  // Bootstrap 5
  new bootstrap.Modal($(".js-modal"), {
    keyboard: true,
  }).show();
});
