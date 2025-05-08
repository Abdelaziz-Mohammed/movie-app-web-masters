let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  if (navbar.classList.contains('max-lg:top-[-578px]')) {
    navbar.classList.remove('max-lg:top-[-578px]');
    navbar.classList.add('max-lg:top-full');
  }
  else {
    navbar.classList.remove('max-lg:top-full');
    navbar.classList.add('max-lg:top-[-578px]');
  }
}

window.onscroll = () => {
  navbar.classList.remove('max-lg:top-full');
  navbar.classList.add('max-lg:top-[-578px]');
}

window.addEventListener('scroll', () => {
  header.classList.toggle("shadow", window.scrollY > 0);
  if (window.scrollY > 0) {
    header.classList.add(
      'bg-white',
      'shadow-[0_0_4px_rgba(14,55,54,0.15)]'
    );
    Array.from(document.querySelectorAll('.navbar a')).map(link =>
      link.classList.add('text-[#020307]')
    );
    menuIcon.classList.remove("text-white");
    menuIcon.classList.add("text-[#020307]");
    document.querySelector('.logo').classList.add('text-[#020307]');
  }
  else {
    header.classList.remove(
      'bg-white'
    );
    Array.from(document.querySelectorAll('.navbar a')).map(link =>
      link.classList.remove('text-[#020307]')
    );
    menuIcon.classList.remove("text-[#020307]");
    menuIcon.classList.add("text-white");
    document.querySelector('.logo').classList.remove('text-[#020307]');
  }
});
