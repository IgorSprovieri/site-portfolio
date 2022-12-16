window.onload = () => {
  TypeWriter();
};

function scrollPageTo(id) {
  document.getElementById(id).scrollIntoView();
}

function openNewTab(url) {
  window.open(url);
}

function TypeWriter() {
  let elementHTML = document.getElementById("TypeWriter");
  let text = elementHTML.innerHTML;
  let index = 0;
  elementHTML.innerHTML = "";

  write();

  function write() {
    setTimeout(() => {
      elementHTML.innerHTML = elementHTML.innerHTML + text[index];
      index = index + 1;
      if (index < text.length) {
        write();
      } else {
        restart();
      }
    }, 100);
  }

  function restart() {
    setTimeout(() => {
      index = 0;
      elementHTML.innerHTML = "";
      write();
    }, 2000);
  }
}
