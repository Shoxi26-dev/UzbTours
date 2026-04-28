import"./language-cuagsy1t-BqeNELpu.js";import{i as e,n as t,r as n,t as r}from"./language-BC7Zw5Zd-BDnQ--tp.js";import{t as i}from"./db-CZQlFadT-cNWH_53A.js";function a(e){let i=`${e.id}-title`,a=`${e.id}-desc`,o=n?n.t(`duration`,{defaultValue:r[t].duration||`Длительность`}):r[t].duration||`Длительность`,s=n?n.t(`details`,{defaultValue:r[t].details||`Подробнее`}):r[t].details||`Подробнее`,c=document.createElement(`div`);c.classList.add(`tour-card`);let l=n?n.t(i,{defaultValue:r[t][i]||e.title}):r[t][i]||e.title,u=n?n.t(a,{defaultValue:r[t][a]||e.description}):r[t][a]||e.description,d=n?n.t(`days`,{defaultValue:r[t].days||`дней`}):r[t].days||`дней`;return c.innerHTML=`
        <div class="tour-card-img-wrap">
            <img src="${e.img}" alt="${e.title}">
        </div>
        <div class="tour-card-content">
            <h3 data-key="${i}">${l}</h3>
            <p data-key="${a}">${u}</p>
            <div class="days"><span data-key="duration">${o}</span>: <span class="tour-days-num">${e.days}</span> <span data-key="days">${d}</span></div>
            <button data-tour-id="${e.id}" data-key="details">${s}</button>
        </div>
    `,c.querySelector(`button`).addEventListener(`click`,t=>{t.stopPropagation(),console.log(`Button clicked for tour:`,e.id),sessionStorage.setItem(`selectedTourId`,e.id);let n={"silk-road":`/pages/tours-info.html`,"classic-7-days":`/pages/classic-7-days.html`,"1001-nights":`/pages/1001-nights.html`,"samarkand-3-days":`/pages/samarkand-3-days.html`,"silk-road-heart":`/pages/silk-road-heart.html`};window.location.href=n[e.id]||`/pages/tours-info.html`}),c}function o(){let t=document.getElementById(`tours-container`);t.innerHTML=``,i.forEach(e=>{let n=a(e);t.appendChild(n)}),e()}document.addEventListener(`DOMContentLoaded`,o);