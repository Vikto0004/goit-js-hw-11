import{i as m,S as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="43795533-00e69c3734dde476e8d836fd2",p="https://pixabay.com/api/",y=s=>{const o=new URLSearchParams({key:f,q:s,orientation:"horizontal",safesearch:!0});return fetch(`${p}?${o.toString()}`).then(t=>{if(!t.ok)throw new Error;return t.json()})},g=s=>s.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:i,comments:u,downloads:h})=>`<li class="search-list-item">
                    <a class="gallery-link" href="${n}">
                      <img class="search-list-img" src="${t}" alt="${e}" />
                    </a>
                    <ul>
                      <li>
                        <h3>Likes</h3>
                        <p>${r}</p>
                      </li>
                      <li>
                        <h3>Views</h3>
                        <p>${i}</p>
                      </li>
                      <li>
                        <h3>Comments</h3>
                        <p>${u}</p>
                      </li>
                      <li>
                        <h3>Downloads</h3>
                        <p>${h}</p>
                      </li>
                    </ul>
                  </li>`).join(""),a=document.querySelector(".js-search-form"),c=document.querySelector(".js-search-list"),l=document.querySelector(".js-loader");a.addEventListener("submit",s=>{s.preventDefault();const o=a.elements.enterForSearsh.value.trim();o&&(c.innerHTML="",l.classList.add("loader-active"),y(o).then(t=>{if(!t.total){m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.reset();return}c.innerHTML=`${g(t.hits)}`,L.refresh()}).catch(t=>console.log(t)).finally(()=>l.classList.remove("loader-active")))});const L=new d(".gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
