function darkmode() {
  const body = document.body;
  const blocks = document.getElementById("dark");
  const darks = document.getElementById("dark-works");
  const text = document.getElementById("dark-text");
  const icons1 = document.getElementById("i-twit");
  const icons2 = document.getElementById("i-yout");
  const icons3 = document.getElementById("i-git");
  const aside = document.getElementById("link");
  const aside2 = document.getElementById("prog");
  const aside3 = document.getElementById("exp");
  const aside4 = document.getElementById("lan");
  aside.classList.toggle('dark-blocks')
  aside2.classList.toggle('dark-blocks')
  aside3.classList.toggle('dark-blocks')
  aside4.classList.toggle('dark-blocks')
  icons1.classList.toggle("dark-icon");
  icons2.classList.toggle("dark-icon");
  icons3.classList.toggle("dark-icon");
  blocks.classList.toggle("dark-blocks");
  darks.classList.toggle("dark-blocks");
  text.classList.toggle("dark-blocks");
  body.classList.toggle("dark-mode");
  //   aside.classList.toggle("dark-blocks");
}

document.querySelector(".btn").addEventListener("click", darkmode);
