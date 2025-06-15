import{a as d,S as p,i as a}from"./assets/vendor-Bz4lgVUE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="50828766-d4c68cffebe8589d5ede8282a",y="https://pixabay.com/api/";function h(n){const o={key:m,q:n,per_page:9,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(y,{params:o}).then(e=>e.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){const o=n.map(e=>`<li class="gallery-item">
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
  `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){l.innerHTML=""}function v(){u.classList.add("visible")}function c(){u.classList.remove("visible")}const f=document.querySelector(".form"),w=f.querySelector('input[name="search-text"]');f.addEventListener("submit",function(n){n.preventDefault();const o=w.value.trim();if(!o){a.warning({message:"Please enter a search term."});return}L(),v(),h(o).then(e=>{if(c(),e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(e.hits)}).catch(e=>{a.error({message:"Something went wrong. Please try again later."}),console.error(e)}).finally(()=>{c()})});
//# sourceMappingURL=index.js.map
