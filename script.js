// Tham chiếu đến các phần tử HTML
const heroSection = document.querySelector('.hero');
const heroHeading = document.querySelector('.hero h1');
const heroDescription = document.querySelector('.hero p');

// Hiệu ứng chữ chạy
const headingText = heroHeading.textContent;
let headingIndex = 0;

function typeHeading() {
  heroHeading.textContent = headingText.slice(0, headingIndex);
  headingIndex++;
  if (headingIndex > headingText.length) {
    clearInterval(headingInterval);
    heroDescription.style.opacity = 1; // Hiển thị mô tả sau khi chữ chạy xong
  }
}

const headingInterval = setInterval(typeHeading, 100);

// Hiệu ứng nền di chuyển
window.addEventListener('mousemove', (e) => {
  const xPos = e.clientX / window.innerWidth - 0.5;
  const yPos = e.clientY / window.innerHeight - 0.5;
  heroSection.style.transform = `translate(${xPos * 20}px, ${yPos * 20}px)`;
});

// Hiệu ứng cuộn xuống
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const heroHeight = heroSection.offsetHeight;
  const opacity = Math.max(0, 1 - scrollPosition / heroHeight);
  heroSection.style.opacity = opacity;
});