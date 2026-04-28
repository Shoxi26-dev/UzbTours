import{i as e,n as t,r as n,t as r}from"./language-BC7Zw5Zd-BDnQ--tp.js";function i(e,t){return e.map((e,n)=>{if(n===0)return{...e,titleKey:`${t}-title`,descKey:`${t}-desc`};{let n=`${t}-day${e.day}`;return{...e,titleKey:`${n}-title`,descKey:`${n}-desc`}}})}function a(e,t){e.slice(1).forEach(e=>{let n=document.createElement(`div`);n.classList.add(`card`),n.innerHTML=`
            <div class="card-img">
                <img src="${e.img}" alt="">
            </div>
            <div class="card-text">
                <h4 data-key="${e.titleKey}">${e.title}</h4>
                <h3><span data-key="day">День</span> ${e.day}</h3>
                <p data-key="${e.descKey}">${e.description}</p>
              
            </div>
        `,t.appendChild(n)})}function o(o,s,c){function l(e){return/^(classic-7-days|1001-nights|samarkand-3-days|silk-road-heart)(-day\d+-(title|desc)|-title|-desc)?$/.test(e)}function u(e,i){if(t!==`ru`&&l(e))return n&&n.addResource(t,`translation`,e,i),r[t]||(r[t]={}),r[t][e]=i,i;let a=n?n.t(e,{defaultValue:i}):void 0;if(a&&a!==e)return a;if(t!==`ru`){let n=r[t]?r[t][e]:void 0;if(n&&!n.startsWith(`[${t}]`))return n}return i}let d=u(`${c}-title`,s.title),f=u(`${c}-desc`,s.description);function p(e,t,n){return!n||!n.length?``:`<div class="tour-section"><h3 data-key="${e}">${u(e,t)}</h3><ul>${n.map(e=>`<li>${e}</li>`).join(``)}</ul></div>`}function m(e){return e?`<div class="tour-section"><h3 data-key="tour-hotels-title">Гостиницы по маршруту</h3>${Object.entries(e).map(([e,t])=>`<b>${e}:</b> ${t.join(`, `)}`).join(`<br>`)}</div>`:``}function h(e){return!e||!e.length?``:`<div class="tour-section"><h3 data-key="tour-prices-title">Стоимость тура</h3><table class="tour-prices"><thead><tr><th>Чел.</th><th>Цена</th><th>Валюта</th></tr></thead><tbody>${e.map(e=>`<tr><td>${e.people}</td><td>${e.price}</td><td>${e.currency||``}</td></tr>`).join(``)}</tbody></table></div>`}function g(e){return e?Object.entries(e).map(([e,t])=>p(e===`details`?`tour-details-title`:`tour-booking-title`,e===`details`?`Детали тура`:`Бронирование`,t)).join(``):``}function _(e){if(!e||!e.length)return``;let t=u(`daily-schedule-title`,`Краткая программа по дням`),n=u(`day`,`День`);return`<div class="tour-section"><h3 data-key="daily-schedule-title">${t}</h3><div class="tour-daily-schedule">${e.map(e=>{let t=u(`${c}-day${e.day}-title`,e.title),r=u(`${c}-day${e.day}-desc`,e.description);return`<div class="tour-day-card"><img src="${e.img||``}" alt=""><div><b data-key="${c}-day${e.day}-title">${t}</b><h3><span data-key="day">${n}</span> ${e.day}</h3><p data-key="${c}-day${e.day}-desc">${r}</p></div></div>`}).join(``)}</div></div>`}function v(e){return!e||!e.length?``:`<div class="tour-section"><h3 data-key="tour-program-title">Программа тура</h3><ol>${e.map(e=>`<li>${e}</li>`).join(``)}</ol></div>`}let y=document.createElement(`div`);y.classList.add(`tour`),y.innerHTML=`
      <header>
         <div class="container">
             <nav aria-label="Breadcrumb">
                 <a href="/pages/tours.html" data-key="nav-home">← Туры</a>
             </nav>
             <div class="title-list">
                 <div class="flex-box">
                     <div class="elem">
                         <div class="title-text">
                             <h1 data-key="${c}-title">${d}</h1>
                             <div class="line-wraper">
                                 <div class="mini-line"></div>
                             </div>
                             <p data-key="${c}-desc">${f}</p>
                         </div>
                     </div>
                     <div class="elem">
                         <img src="${s.img||``}" alt="${s.title}">
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
                ${v(s.program)}
                ${_(s.dailySchedule)}
                ${p(`tour-include-title`,`В стоимость включено`,s.included)}
                ${p(`tour-not-include-title`,`Не включено`,s.notIncluded)}
                ${m(s.hotels)}
                ${h(s.prices)}
                ${g(s.info)}
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
`,o.appendChild(y);let b=y.querySelector(`.days-box`);b&&(s.dailySchedule&&Array.isArray(s.dailySchedule)?s.dailySchedule.forEach(e=>{let t=document.createElement(`div`);t.classList.add(`card`),t.innerHTML=`
                    <div class="card-img">
                        <img src="${e.img}" alt="">
                    </div>
                    <div class="card-text">
                        <h4 data-key="${c}-day${e.day}-title">${e.title}</h4>
                        <h3><span data-key="day">День</span> ${e.day}</h3>
                        <p data-key="${c}-day${e.day}-desc">${e.description}</p>
                    </div>
                `,b.appendChild(t)}):Array.isArray(s.program)&&a(i(s,c),b)),e()}export{o as t};