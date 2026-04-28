import{u as y,i as a,t as e,c as s}from"./language-BC7Zw5Zd.js";import{t as g}from"./db-CZQlFadT.js";function h(t){const d=`${t.id}-title`,n=`${t.id}-desc`,o=a?a.t("duration",{defaultValue:e[s].duration||"Длительность"}):e[s].duration||"Длительность",c=a?a.t("details",{defaultValue:e[s].details||"Подробнее"}):e[s].details||"Подробнее",i=document.createElement("div");i.classList.add("tour-card");const l=a?a.t(d,{defaultValue:e[s][d]||t.title}):e[s][d]||t.title,r=a?a.t(n,{defaultValue:e[s][n]||t.description}):e[s][n]||t.description,u=a?a.t("days",{defaultValue:e[s].days||"дней"}):e[s].days||"дней";return i.innerHTML=`
        <div class="tour-card-img-wrap">
            <img src="${t.img}" alt="${t.title}">
        </div>
        <div class="tour-card-content">
            <h3 data-key="${d}">${l}</h3>
            <p data-key="${n}">${r}</p>
            <div class="days"><span data-key="duration">${o}</span>: <span class="tour-days-num">${t.days}</span> <span data-key="days">${u}</span></div>
            <button data-tour-id="${t.id}" data-key="details">${c}</button>
        </div>
    `,i.querySelector("button").addEventListener("click",p=>{p.stopPropagation(),console.log("Button clicked for tour:",t.id),sessionStorage.setItem("selectedTourId",t.id);const m={"silk-road":"/pages/tours-info.html","classic-7-days":"/pages/classic-7-days.html","1001-nights":"/pages/1001-nights.html","samarkand-3-days":"/pages/samarkand-3-days.html","silk-road-heart":"/pages/silk-road-heart.html"};window.location.href=m[t.id]||"/pages/tours-info.html"}),i}function f(){const t=document.getElementById("tours-container");t.innerHTML="",g.forEach(d=>{const n=h(d);t.appendChild(n)}),y()}document.addEventListener("DOMContentLoaded",f);
