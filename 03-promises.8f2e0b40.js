function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const u={inputDelay:document.querySelector('[name="delay"]'),inputStep:document.querySelector('[name="step"]'),inputAmount:document.querySelector('[name="amount"]'),promiseForm:document.querySelector(".form"),promiseBtn:document.querySelector("button")};function l(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}u.promiseForm.addEventListener("submit",(function(t){t.preventDefault(),u.promiseBtn.disabled=!0;let o=Number(u.inputDelay.value),n=Number(u.inputStep.value),r=Number(u.inputAmount.value);for(let t=1;t<=r;t+=1)l(t,o).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),o+=n;u.promiseForm.reset(),setTimeout((()=>{u.promiseBtn.disabled=!1}),o)}));
//# sourceMappingURL=03-promises.8f2e0b40.js.map