var _=Object.defineProperty;var v=(r,e,t)=>e in r?_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var h=(r,e,t)=>(v(r,typeof e!="symbol"?e+"":e,t),t),P=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var u=(r,e,t)=>(P(r,e,"read from private field"),t?t.call(r):e.get(r)),d=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)};import{S as L,a as S,N as y}from"./assets/vendor-e62dda51.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();function p(r){return r.map(({largeImageURL:e,webformatURL:t,tags:o,likes:a,views:s,comments:n,downloads:b})=>`<div class="gallery-card">
    
            <a class="gallery-card__link" href="${e}">
                <img class="gallery-card__img" src="${t}" alt="${o}"  loading="lazy" />
            </a>
        
    <div class="gallery-card__info">
      <p class="gallery-card__info--item">
        <b>Likes: ${a}</b>
      </p>
      <p class="gallery-card__info--item">
        <b>Views: ${s}</b>
      </p>
      <p class="gallery-card__info--item">
        <b>Comments: ${n}</b>
      </p>
      <p class="gallery-card__info--item">
        <b>Downloads: ${b}</b>
      </p>
    </div>
  </div>`).join("")}let g=new L(".gallery-card__link",{captionDelay:250});var l,f;class q{constructor(){d(this,l,"42494915-f1925227b1d4f602df08c38a4");d(this,f,"https://pixabay.com/api/");h(this,"baseSearchParams",{key:u(this,l),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40});this.query="",this.page=1}async fetchHits(){const e=new URLSearchParams({...this.baseSearchParams,q:this.query,page:this.page});return await S.get(`${u(this,f)}?${e}`)}restPage(){this.page=1}}l=new WeakMap,f=new WeakMap;const c={searchForm:document.querySelector("#search-form"),divGalleryContainer:document.querySelector(".gallery")},m=document.querySelector(".js-guard"),w=40,i=new q;let $={root:null,rootMargin:"300px",threshold:1},I=new IntersectionObserver(x,$);function x(r,e){r.forEach(async t=>{if(t.isIntersecting){i.page+=1;const a=(await i.fetchHits()).data.hits;c.divGalleryContainer.insertAdjacentHTML("beforeend",p(a)),g.refresh(),a.length<=w*i.page&&(y.Notify.failure("We`re sorry, but you`ve reached the end of search results."),e.unobserve(m))}})}async function E(r){r.preventDefault(),c.divGalleryContainer.innerHTML="";const e=r.target.firstElementChild.value.trim();if(i.query=e,i.restPage(),i.query==="")return y.Notify.failure("Sorry, there are no images matching your search query. Please try again!");try{const t=await i.fetchHits(),o=t.data.hits,a=t.data.totalHits;a!==0&&y.Notify.success(`Hooray! We found ${a} images.`),c.divGalleryContainer.innerHTML=p(o),g.refresh(),I.observe(m)}catch(t){console.log(t)}}c.searchForm.addEventListener("submit",E);
//# sourceMappingURL=commonHelpers.js.map
