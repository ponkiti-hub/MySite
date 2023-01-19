
'use strict';

const sections = document.querySelectorAll('section');


const observer = new IntersectionObserver(callback);


function callback(entries) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.remove('hidden');
      observer.unobserve(entry.target);
    }
  });
}

sections.forEach(img => {
  observer.observe(img);
});

