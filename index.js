function scrollPageTo(id) {
  document.getElementById(id).scrollIntoView();
}

function openNewTab(url) {
  window.open(url);
}

function TypeWriter(elementHTML, delay) {
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
      }
    }, 50);
  }
}

const elements = document.getElementsByClassName("TypeWriter");

function startTypewriter(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      TypeWriter(entry.target);
    }
  }
}

const observer = new IntersectionObserver(startTypewriter);

Array.from(elements).forEach((element) => {
  observer.observe(element);
});
