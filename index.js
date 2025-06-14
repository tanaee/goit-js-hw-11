import{a as m,S as p,i}from"./assets/vendor-frHSA4Lh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const y="50828766-d4c68cffebe8589d5ede8282a",g="https://pixabay.com/api/";l();function l(n){const o={key:y,q:n,per_page:9};return m.get(g,{params:o}).then(e=>e.data)}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){const o=n.map(e=>`<li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e.likes}</p>
        <p><b>Views:</b> ${e.views}</p>
        <p><b>Comments:</b> ${e.comments}</p>
        <p><b>Downloads:</b> ${e.downloads}</p>
      </div>
    </li>
  `).join("");u.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){u.innerHTML=""}function v(){f.classList.add("visible")}function c(){f.classList.remove("visible")}const d=document.querySelector(".form"),w=d.querySelector('input[name="search-text"]');d.addEventListener("submit",function(n){n.preventDefault();const o=w.value.trim();if(!o){i.warning({message:"Please enter a search term."});return}L(),v(),l(o).then(e=>{if(c(),e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(e.hits)}).catch(e=>{i.error({message:"Something went wrong. Please try again later."}),console.error(e)}).finally(()=>{c()})});
//# sourceMappingURL=index.js.map
