document.addEventListener('DOMContentLoaded', function () {
  var coll = document.getElementsByClassName("collapsible");
  var sefiinfo = document.querySelector(".sefiinfo"); // select the single element

  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");

      if (sefiinfo) {
        sefiinfo.classList.toggle("active");
      }

      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});