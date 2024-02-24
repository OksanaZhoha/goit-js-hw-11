import{S as b,a as p,n}from"./assets/vendor-0f54b3be.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",v="42494915-f1925227b1d4f602df08c38a4",a={params:{key:v,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:40}},m=document.querySelector(".gallery"),u=document.querySelector('input[name="searchQuery"'),E=document.getElementById("search-form"),L=new b(".lightbox",{captionsData:"alt",captionDelay:250});let l=0,f=!1;function y(o){const t=o.map(({webformatURL:s,largeImageURL:c,tags:e,likes:r,views:i,comments:h,downloads:g})=>`
              <a href="${c}" class="lightbox">
                  <div class="photo-card">
                      <img src="${s}" alt="${e}" loading="lazy" />
                      <div class="info">
                          <p class="info-item">
                              <b>Likes</b>
                              ${r}
                          </p>
                          <p class="info-item">
                              <b>Views</b>
                              ${i}
                          </p>
                          <p class="info-item">
                              <b>Comments</b>
                              ${h}
                          </p>
                          <p class="info-item">
                              <b>Downloads</b>
                              ${g}
                          </p>
                      </div>
                  </div>
              </a>
              `).join("");m.insertAdjacentHTML("beforeend",t),a.params.page*a.params.per_page>=l&&(f||(n.Notify.info("We're sorry, but you've reached the end of search results."),f=!0)),L.refresh()}async function N(o){if(o.preventDefault(),a.params.q=u.value.trim(),a.params.q!==""){a.params.page=1,m.innerHTML="",f=!1;try{const t=await p.get(d,a);l=t.data.totalHits;const{hits:s}=t.data;console.log(s),s.length===0?n.Notify.failure("Sorry, there are no images matching your search query. Please try again."):(n.Notify.success(`Hooray! We found ${l} images.`),y(s)),u.value=""}catch(t){n.Notify.failure(t)}}}E.addEventListener("submit",N);async function S(){a.params.page+=1;try{const t=(await p.get(d,a)).data.hits;y(t)}catch(o){n.Notify.failure(o)}}function w(){const{scrollTop:o,scrollHeight:t,clientHeight:s}=document.documentElement;o+s>=t&&S()}window.addEventListener("scroll",w);
//# sourceMappingURL=commonHelpers.js.map
