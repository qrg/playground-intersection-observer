import '../styles/main.css';

console.log('test');

const intersection = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      const target = e.target as HTMLElement;
      if (e.isIntersecting) {
        console.log(target.innerText, e);
      }
    });
  },
  {
    rootMargin: '0px 0px -50% 0px',
    threshold: [1]
  }
);

const headings = document.querySelectorAll('h2, h3');

headings.forEach(h => intersection.observe(h));

