import{i as m,S as d}from"./assets/vendor-De63neY_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f=i=>{const t=new URLSearchParams({key:"48213456-ebc0266b477643e50c8486310",q:i.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${t.toString()}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>o.total===0?[]:o.hits)},h=({webformatURL:i,largeImageURL:t,tags:o,likes:l,views:e,comments:r,downloads:n})=>`<li class="gallery-item">
    <a class="gallery-link" href=${t}>
      <img class="gallery-image" src="${i}" alt="${o}" loading="lazy" />
      <ul class="gallery-item-info">
        <li>
          <p>Likes</p>
          <p>${l}</p>
        </li>
        <li>
          <p>Views</p>
          <p>${e}</p>
        </li>
        <li>
          <p>Comments</p>
          <p>${r}</p>
        </li>
        <li>
          <p>Downloads</p>
          <p>${n}</p>
        </li>
      </ul>
    </a>
  </li>`,s=(i,t)=>{i.innerHTML=t.map(o=>h(o)).join("")},a=i=>{m.error({message:i,position:"topRight"})},p=document.querySelector(".search-form"),c=document.querySelector(".loader"),u=document.querySelector(".gallery"),y=new d(".gallery a.gallery-link",{captionDelay:250,overlayOpacity:.8}),g=i=>{i.preventDefault(),c.classList.remove("hidden"),s(u,[]),f(i.target.elements.search.value).then(t=>{t.length?(s(u,t),y.refresh()):a("Sorry, there are no images matching your search query. Please try again!")}).catch(()=>{a("Sorry, something went wrong. Please try again later!")}).finally(()=>{p.reset(),c.classList.add("hidden")})};p.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
