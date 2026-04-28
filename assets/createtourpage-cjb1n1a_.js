import{u as L,c as l,i as $,t as o}from"./language-BC7Zw5Zd.js";function T(r,i){return r.map((a,c)=>{if(c===0)return{...a,titleKey:`${i}-title`,descKey:`${i}-desc`};{const n=`${i}-day${a.day}`;return{...a,titleKey:`${n}-title`,descKey:`${n}-desc`}}})}function K(r,i){r.slice(1).forEach(a=>{const c=document.createElement("div");c.classList.add("card"),c.innerHTML=`
            <div class="card-img">
                <img src="${a.img}" alt="">
            </div>
            <div class="card-text">
                <h4 data-key="${a.titleKey}">${a.title}</h4>
                <h3><span data-key="day">День</span> ${a.day}</h3>
                <p data-key="${a.descKey}">${a.description}</p>
              
            </div>
        `,i.appendChild(c)})}function A(r,i,a){function c(t){return/^(classic-7-days|1001-nights|samarkand-3-days|silk-road-heart)(-day\d+-(title|desc)|-title|-desc)?$/.test(t)}function n(t,e){if(l!=="ru"&&c(t))return $&&$.addResource(l,"translation",t,e),o[l]||(o[l]={}),o[l][t]=e,e;const s=$?$.t(t,{defaultValue:e}):void 0;if(s&&s!==t)return s;if(l!=="ru"){const d=o[l]?o[l][t]:void 0;if(d&&!d.startsWith(`[${l}]`))return d}return e}const p=n(`${a}-title`,i.title),m=n(`${a}-desc`,i.description);function v(t,e,s){if(!s||!s.length)return"";const d=n(t,e);return`<div class="tour-section"><h3 data-key="${t}">${d}</h3><ul>${s.map(h=>`<li>${h}</li>`).join("")}</ul></div>`}function b(t){return t?`<div class="tour-section"><h3 data-key="tour-hotels-title">Гостиницы по маршруту</h3>${Object.entries(t).map(([e,s])=>`<b>${e}:</b> ${s.join(", ")}`).join("<br>")}</div>`:""}function f(t){return!t||!t.length?"":`<div class="tour-section"><h3 data-key="tour-prices-title">Стоимость тура</h3><table class="tour-prices"><thead><tr><th>Чел.</th><th>Цена</th><th>Валюта</th></tr></thead><tbody>${t.map(e=>`<tr><td>${e.people}</td><td>${e.price}</td><td>${e.currency||""}</td></tr>`).join("")}</tbody></table></div>`}function g(t){return t?Object.entries(t).map(([e,s])=>v(e==="details"?"tour-details-title":"tour-booking-title",e==="details"?"Детали тура":"Бронирование",s)).join(""):""}function k(t){if(!t||!t.length)return"";const e=n("daily-schedule-title","Краткая программа по дням"),s=n("day","День");return`<div class="tour-section"><h3 data-key="daily-schedule-title">${e}</h3><div class="tour-daily-schedule">${t.map(d=>{const h=n(`${a}-day${d.day}-title`,d.title),x=n(`${a}-day${d.day}-desc`,d.description);return`<div class="tour-day-card"><img src="${d.img||""}" alt=""><div><b data-key="${a}-day${d.day}-title">${h}</b><h3><span data-key="day">${s}</span> ${d.day}</h3><p data-key="${a}-day${d.day}-desc">${x}</p></div></div>`}).join("")}</div></div>`}function j(t){return!t||!t.length?"":`<div class="tour-section"><h3 data-key="tour-program-title">Программа тура</h3><ol>${t.map(e=>`<li>${e}</li>`).join("")}</ol></div>`}const u=document.createElement("div");u.classList.add("tour"),u.innerHTML=`
      <header>
         <div class="container">
             <nav aria-label="Breadcrumb">
                 <a href="/pages/tours.html" data-key="nav-home">← Туры</a>
             </nav>
             <div class="title-list">
                 <div class="flex-box">
                     <div class="elem">
                         <div class="title-text">
                             <h1 data-key="${a}-title">${p}</h1>
                             <div class="line-wraper">
                                 <div class="mini-line"></div>
                             </div>
                             <p data-key="${a}-desc">${m}</p>
                         </div>
                     </div>
                     <div class="elem">
                         <img src="${i.img||""}" alt="${i.title}">
                     </div>
                 </div>
             </div>
         </div>
     </header>

     <section>
         <div class="container">
             <div class="about-tour">
                 <div class="days-text">
                     <h2 data-key="journey-title">Путешествие по Узбекистану</h2>
                     <p data-key="journey-desc">Исследуйте богатую культуру и историю Узбекистана с нашей программой туров</p>
                 </div>
                 <div class="days-box"></div>
             </div>
         </div>
     </section>

     <section>
        <div class="container">
            <div class="tour-details">
                ${j(i.program)}
                ${k(i.dailySchedule)}
                ${v("tour-include-title","В стоимость включено",i.included)}
                ${v("tour-not-include-title","Не включено",i.notIncluded)}
                ${b(i.hotels)}
                ${f(i.prices)}
                ${g(i.info)}
            </div>
        </div>
    </section>

    <footer>
        <div class="links">
            <div class="btn-box">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    </footer>
`,r.appendChild(u);const y=u.querySelector(".days-box");if(y){if(i.dailySchedule&&Array.isArray(i.dailySchedule))i.dailySchedule.forEach(t=>{const e=document.createElement("div");e.classList.add("card"),e.innerHTML=`
                    <div class="card-img">
                        <img src="${t.img}" alt="">
                    </div>
                    <div class="card-text">
                        <h4 data-key="${a}-day${t.day}-title">${t.title}</h4>
                        <h3><span data-key="day">День</span> ${t.day}</h3>
                        <p data-key="${a}-day${t.day}-desc">${t.description}</p>
                    </div>
                `,y.appendChild(e)});else if(Array.isArray(i.program)){const t=T(i,a);K(t,y)}}L()}export{A as c};
