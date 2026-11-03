// 상세 항목 바로가기는 내용을 함께 펼쳐 보여줍니다.
function openLinkedDetail(hash) {
  if (!hash || !/^#[a-z-]+$/.test(hash)) return;
  const target = document.querySelector(hash);
  if (target && target.tagName === 'DETAILS') {
    document.querySelectorAll('.details details').forEach(detail => {
      if (detail !== target) detail.open = false;
    });
    target.open = true;
  }
}
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (link) openLinkedDetail(link.getAttribute('href'));
});
window.addEventListener('hashchange', () => openLinkedDetail(window.location.hash));
openLinkedDetail(window.location.hash);

// 스크롤 중에는 상담창을 작게 접고, 멈추면 다시 펼칩니다.
const floatingAdvisor = document.querySelector('.floating-advisor');
if (floatingAdvisor) {
  let scrollTimer;
  window.addEventListener('scroll', () => {
    if (!floatingAdvisor.contains(document.activeElement)) {
      floatingAdvisor.classList.add('is-scrolling');
    }
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => floatingAdvisor.classList.remove('is-scrolling'), 500);
  }, { passive: true });
  floatingAdvisor.addEventListener('focusin', () => floatingAdvisor.classList.remove('is-scrolling'));
}
// Preserve existing shared section links.
const legacySections = {contact:'advisor', offers:'benefits', models:'model-guides', guide:'model-guides', news:'model-guides'};
function resolveLegacySection(){ const id=legacySections[location.hash.slice(1)]; if(id){ const section=document.getElementById(id); if(section) section.scrollIntoView(); } }
window.addEventListener('load', resolveLegacySection);
window.addEventListener('hashchange', resolveLegacySection);

