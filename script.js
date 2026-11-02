document.getElementById('year').textContent=new Date().getFullYear();
const header=document.querySelector('.header'),menuButton=document.querySelector('.menu-button');
menuButton.addEventListener('click',()=>{const open=header.classList.toggle('open');document.body.classList.toggle('menu-open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기')});
document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>{header.classList.remove('open');document.body.classList.remove('menu-open');menuButton.setAttribute('aria-expanded','false')}));
const filterButtons=[...document.querySelectorAll('.tabs button')],modelItems=[...document.querySelectorAll('.model-item')],searchInput=document.getElementById('model-search'),noResults=document.querySelector('.no-results');let activeFilter='all';
function filterModels(){const query=searchInput.value.trim().toLowerCase();let visible=0;modelItems.forEach(item=>{const show=(activeFilter==='all'||item.dataset.category.includes(activeFilter))&&(!query||item.dataset.model.toLowerCase().includes(query));item.classList.toggle('hidden',!show);if(show)visible++});noResults.hidden=visible!==0}
filterButtons.forEach(button=>button.addEventListener('click',()=>{filterButtons.forEach(item=>item.classList.remove('active'));button.classList.add('active');activeFilter=button.dataset.filter;filterModels()}));searchInput.addEventListener('input',filterModels);
modelItems.forEach(item=>item.addEventListener('click',()=>window.open('https://open.kakao.com/o/sKl7ZhEi','_blank','noopener')));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));

const offers=[
{year:'MY26',name:'A 220 Hatch',price:52700000,discount:10,category:'sedan'},
{year:'MY26',name:'A 220 Sedan',price:50500000,discount:5,category:'sedan'},
{year:'MY26',name:'CLA 250 4MATIC AMG Line',price:64500000,discount:7,category:'sedan'},
{year:'MY26',name:'GLA 250 4MATIC AMG Line',price:70000000,discount:9,category:'suv'},
{year:'MY26',name:'GLB 250 4MATIC',price:72000000,discount:13,category:'suv'},
{year:'MY26',name:'Mercedes-AMG GLB 35 4MATIC',price:79500000,discount:9,category:'suv performance'},
{year:'MY26',name:'C 200 AVANTGARDE',price:65000000,discount:10,category:'sedan'},
{year:'MY26',name:'C 200 AMG Line',price:68300000,discount:10,category:'sedan'},
{year:'MY26',name:'E 200 AVANTGARDE',price:77500000,discount:16,category:'sedan'},
{year:'MY26',name:'E 200 EXCLUSIVE',price:77500000,discount:15,category:'sedan'},
{year:'MY26',name:'E 200 AMG Line',price:81000000,discount:15,category:'sedan'},
{year:'MY26',name:'E 220 d 4MATIC AVANTGARDE',price:87500000,discount:12,category:'sedan'},
{year:'MY26',name:'E 300 4MATIC EXCLUSIVE',price:94800000,discount:10,category:'sedan'},
{year:'MY26',name:'E 300 4MATIC AMG Line',price:99000000,discount:10,category:'sedan'},
{year:'MY26',name:'E 350 e 4MATIC EXCLUSIVE',price:101000000,discount:14,category:'sedan'},
{year:'MY26',name:'E 450 4MATIC AMG Line',price:116000000,discount:11,category:'sedan'},
{year:'MY26',name:'Mercedes-AMG E 53 HYBRID 4MATIC+',price:143000000,discount:10,category:'sedan performance'},
{year:'MY26',name:'S 350 d 4MATIC',price:154000000,discount:10,category:'sedan'},
{year:'MY26',name:'S 450 4MATIC SWB',price:161000000,discount:7,category:'sedan'},
{year:'MY26',name:'S 450 4MATIC Long',price:193000000,discount:10,category:'sedan'},
{year:'MY26',name:'S 500 4MATIC Long',price:215000000,discount:10,category:'sedan'},
{year:'MY26',name:'S 580 4MATIC Long',price:260000000,discount:10,category:'sedan'},
{year:'MY26',name:'Mercedes-AMG S 63 E Performance',price:299000000,discount:10,category:'sedan performance'},
{year:'MY26',name:'Mercedes-Maybach S 580',price:317000000,discount:9,category:'sedan performance'},
{year:'MY26',name:'Mercedes-Maybach S 680',price:403000000,discount:9,category:'sedan performance'},
{year:'MY26',name:'GLC 220 d 4MATIC',price:82200000,discount:10,category:'suv'},
{year:'MY26',name:'GLC 300 4MATIC AVANTGARDE',price:82500000,discount:7,category:'suv'},
{year:'MY26',name:'GLC 300 4MATIC AMG Line',price:92500000,discount:12,category:'suv'},
{year:'MY26',name:'GLC 300 4MATIC Coupé AVANTGARDE',price:86600000,discount:7,category:'suv'},
{year:'MY26',name:'GLC 300 4MATIC Coupé AMG Line',price:96900000,discount:9,category:'suv'},
{year:'MY26',name:'GLE 300 d 4MATIC',price:119200000,discount:8,category:'suv'},
{year:'MY26',name:'GLE 350 4MATIC',price:118000000,discount:10,category:'suv'},
{year:'MY26',name:'GLE 450 4MATIC',price:129000000,discount:12,category:'suv'},
{year:'MY26',name:'GLE 450 4MATIC AMG Line',price:139000000,discount:12,category:'suv'},
{year:'MY26',name:'GLE 450 4MATIC Coupé AMG Line',price:142500000,discount:15,category:'suv'},
{year:'MY26',name:'Mercedes-AMG GLE 53 4MATIC+',price:166000000,discount:8,category:'suv performance'},
{year:'MY26',name:'GLS 450 4MATIC AMG Line',price:154000000,discount:8,category:'suv'},
{year:'MY26',name:'GLS 580 4MATIC AMG Line',price:193400000,discount:9,category:'suv'},
{year:'MY26',name:'Mercedes-Maybach GLS 600',price:295000000,discount:5,category:'suv performance'},
{year:'MY26',name:'EQA 250 Progressive',price:70000000,discount:10,category:'electric'},
{year:'MY26',name:'EQB 300 4MATIC Progressive',price:78800000,discount:10,category:'electric'},
{year:'MY26',name:'EQE 350+ SUV',price:106000000,discount:10,category:'electric suv'},
{year:'MY26',name:'EQE 350+',price:110000000,discount:10,category:'electric sedan'},
{year:'MY26',name:'EQS 450 4MATIC SUV',price:166000000,discount:10,category:'electric suv'}
];

const won=value=>new Intl.NumberFormat('ko-KR').format(Math.round(value/10000))+'만원';
const offerBody=document.getElementById('offer-table-body');
const offerSearch=document.getElementById('offer-search');
const offerEmpty=document.getElementById('offer-empty');
const offerButtons=[...document.querySelectorAll('[data-offer-filter]')];
let offerFilter='all';
function renderOffers(){
 const query=offerSearch.value.trim().toLowerCase();
 const rows=offers.filter(item=>(offerFilter==='all'||item.category.includes(offerFilter))&&(!query||item.name.toLowerCase().includes(query)));
 offerBody.innerHTML=rows.map(item=>{const amount=item.price*item.discount/100;const final=item.price-amount;return `<tr><td>${item.year}</td><td>${item.name}</td><td>${won(item.price)}</td><td class="discount">${item.discount}%</td><td>${won(amount)}</td><td class="final">${won(final)}</td><td><a href="https://open.kakao.com/o/sKl7ZhEi" target="_blank" rel="noopener">견적 받기</a></td></tr>`}).join('');
 offerEmpty.hidden=rows.length!==0;
}
offerButtons.forEach(button=>button.addEventListener('click',()=>{offerButtons.forEach(item=>item.classList.remove('active'));button.classList.add('active');offerFilter=button.dataset.offerFilter;renderOffers()}));
offerSearch.addEventListener('input',renderOffers);
document.getElementById('offer-highlights').innerHTML=[offers.find(x=>x.name==='E 200 AVANTGARDE'),offers.find(x=>x.name==='GLE 450 4MATIC Coupé AMG Line'),offers.find(x=>x.name==='GLB 250 4MATIC')].map(item=>`<article class="offer-highlight"><span>11월 기본 현금 할인</span><h3>${item.name}</h3><p>${won(item.price)} → ${won(item.price*(1-item.discount/100))}</p><strong>${item.discount}%</strong><small>예상 할인액 ${won(item.price*item.discount/100)}</small></article>`).join('');
renderOffers();
