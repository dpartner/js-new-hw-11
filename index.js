import{S as d,i as u}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function m(o){return fetch(`https://pixabay.com/api/?key=13230076-6d393faca736dd5a90699a632&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function f(o){return o.map(({webformatURL:r,largeImageURL:i,tags:l,likes:e,views:t,comments:s,downloads:c})=>`<li class="gallery-item">
          <a class="gallery-item-link" href="${i}">
            <img class="gallery-item-img" src="${r}" alt="${l}" />
          </a>
          <div class="gallery-item-desc-wrap">
            <div class="info-box">
              <h3 class="gallery-item-title">Likes</h3>
              <p class="gallery-item-text">${e}</p>
            </div>
            <div class="info-box">
              <h3 class="gallery-item-title">Views</h3>
              <p class="gallery-item-text">${t}</p>
            </div>
            <div class="info-box">
              <h3 class="gallery-item-title">Comments</h3>
              <p class="gallery-item-text">${s}</p>
            </div>
            <div class="info-box">
              <h3 class="gallery-item-title">Downloads</h3>
              <p class="gallery-item-text">${c}</p>
            </div>
          </div>
        </li>
  `).join("")}const h=document.querySelector(".form"),a=document.querySelector(".gallery-list"),g=new d(".gallery-list a"),n=document.querySelector(".loader");h.addEventListener("submit",p);function p(o){o.preventDefault(),a.innerHTML="",n.classList.add("shown");const r=o.target.search.value.trim().toString();r!==""&&m(r).then(i=>i.hits).then(i=>{if(i.length===0)return u.show(y);n.classList.remove("shown"),a.innerHTML=f(i),g.refresh()}).catch(i=>console.log(i))}const y={theme:"dark",icon:"icon-person",title:"Sorry, ",message:"there are no images matching your search query. Please try again!!",position:"topRight"};
//# sourceMappingURL=index.js.map
