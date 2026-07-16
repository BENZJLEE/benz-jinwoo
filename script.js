// 아래 연락처와 채널 주소가 사이트 전체에 자동으로 반영됩니다.
const SITE_CONFIG = {
  phone: '010-6396-9342',
  email: 'jwlee@kyohakmotors.kr',
  kakao: 'https://open.kakao.com/o/sKl7ZhEi',
  youtube: 'https://youtube.com/@DDONGbye_BENZhi'
};

const digits = SITE_CONFIG.phone.replace(/[^0-9+]/g, '');
const setHref = (id, href) => {
  const el = document.getElementById(id);
  if (el && href) el.href = href;
};

if (SITE_CONFIG.phone) {
  document.getElementById('phone-text').textContent = SITE_CONFIG.phone;
  setHref('phone-link', `tel:${digits}`);
  setHref('mobile-phone', `tel:${digits}`);
}
if (SITE_CONFIG.email) {
  document.getElementById('email-text').textContent = SITE_CONFIG.email;
  setHref('email-link', `mailto:${SITE_CONFIG.email}`);
}
setHref('kakao-link', SITE_CONFIG.kakao);
setHref('youtube-link', SITE_CONFIG.youtube);
setHref('footer-youtube', SITE_CONFIG.youtube);
document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
document.querySelector('.menu-toggle').addEventListener('click', event => {
  header.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', header.classList.contains('open'));
});
document.querySelectorAll('.desktop-nav a').forEach(link => {
  link.addEventListener('click', () => header.classList.remove('open'));
});

document.querySelectorAll('.model-tabs button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.model-tabs button').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.model-card').forEach(card => {
      const hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      card.classList.toggle('hidden', hidden);
    });
  });
});

document.querySelectorAll('.model-card').forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.contact-panel').animate(
      [{ outlineColor: 'rgba(185,161,122,.8)' }, { outlineColor: 'transparent' }],
      { duration: 1200 }
    );
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
