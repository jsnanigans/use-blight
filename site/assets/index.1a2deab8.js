var g=Object.defineProperty;var s=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var u=(e,t,o)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))E.call(t,o)&&u(e,o,t[o]);if(s)for(var o of s(t))h.call(t,o)&&u(e,o,t[o]);return e};import{r as i,R as n,a as y}from"./vendor.34a88bde.js";const v=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}};v();function d(e){const t=i.exports.useState(e);return i.exports.useMemo(()=>new Proxy(e,{get(a,r,l){return Reflect.get(a,r,l)},set(a,r,l,c){const[,f]=t,p=Reflect.set(a,r,l,c);return f(m({},e)),p}}),[])}const x=()=>{const e=d({x:0}),t=()=>++e.x;return n.createElement("button",{onClick:t},'Increment: "',e.x,'"')},b=()=>{const e=d({name:"",email:"",message:""});return n.createElement("div",null,n.createElement("form",{onSubmit:console.log},n.createElement("input",{type:"text",placeholder:"Name",value:e.name,onChange:({target:t})=>e.name=t.value}),n.createElement("br",null),n.createElement("input",{type:"text",placeholder:"Email",value:e.email,onChange:({target:t})=>e.email=t.value}),n.createElement("br",null),n.createElement("input",{type:"text",placeholder:"Message",value:e.message,onChange:({target:t})=>e.message=t.value})),n.createElement("div",null,'Name: "',e.name,'"'),n.createElement("div",null,'Email: "',e.email,'"'),n.createElement("div",null,'Message: "',e.message,'"'))},C=()=>n.createElement(n.Fragment,null,n.createElement("h2",null,"Increment Button"),n.createElement(x,null),n.createElement("hr",null),n.createElement("h2",null,"Form"),n.createElement(b,null),n.createElement("hr",null));y.render(n.createElement(C,null),document.getElementById("root"));
