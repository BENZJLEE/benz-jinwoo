const trims = {
  avantgarde: {title: 'AVANTGARDE', description: '그릴 중앙의 커다란 스타와 깔끔한 실루엣. 모던한 E-Class의 인상을 선호한다면 먼저 살펴볼 디자인입니다.', facts: [['익스테리어', '중앙 스타 · 아방가르드 그릴'], ['헤드업 디스플레이', '유상 옵션'], ['부메스터 4D 사운드', '유상 옵션']]},
  exclusive: {title: 'EXCLUSIVE', description: '보닛 위에 자리한 스타와 크롬 라디에이터 그릴. 클래식한 메르세데스-벤츠의 분위기를 원하는 분께 어울립니다.', facts: [['익스테리어', '보닛 스타 · 크롬 라디에이터 그릴'], ['헤드업 디스플레이', '기본 사양'], ['부메스터 4D 사운드', '적용 여부 상담 확인']]},
  amg: {title: 'AMG Line', description: 'AMG 프런트 에이프런과 스포츠 스티어링 휠. 외관부터 실내까지 스포티한 분위기를 선호한다면 살펴보세요.', facts: [['익스테리어', 'AMG 프런트 에이프런'], ['헤드업 디스플레이', '기본 사양'], ['부메스터 4D 사운드', '유상 옵션']]}
};
const buttons = [...document.querySelectorAll('[data-trim]')];
buttons.forEach(button => button.addEventListener('click', () => {
  const trim = trims[button.dataset.trim];
  buttons.forEach(item => {const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active));});
  document.getElementById('trim-title').textContent = trim.title;
  document.getElementById('trim-description').textContent = trim.description;
  document.getElementById('trim-facts').replaceChildren(...trim.facts.map(([label, value]) => {
    const row = document.createElement('div'), dt = document.createElement('dt'), dd = document.createElement('dd');
    dt.textContent = label; dd.textContent = value; row.append(dt, dd); return row;
  }));
}));
