"use strict";var c=function(t,n){return function(){return n||t((n={exports:{}}).exports,n),n.exports}};var z=c(function(I,l){
var j=require('@stdlib/strided-base-reinterpret-complex128/dist');function h(t,n,q,w,p){var i,v,e,o,f,u,s,r,a;if(t<=0)return w;if(i=j(n,0),v=j(w,0),q===1&&p===1){for(r=0;r<t*2;r+=2)e=i[r],i[r]=v[r],v[r]=e,a=r+1,e=i[a],i[a]=v[a],v[a]=e;return w}for(q<0?u=2*(1-t)*q:u=0,p<0?s=2*(1-t)*p:s=0,o=q*2,f=p*2,r=0;r<t;r++)e=i[u],i[u]=v[s],v[s]=e,e=i[u+1],i[u+1]=v[s+1],v[s+1]=e,u+=o,s+=f;return w}l.exports=h
});var _=c(function(J,R){
var y=require('@stdlib/strided-base-reinterpret-complex128/dist');function k(t,n,q,w,p,i,v){var e,o,f,u,s,r,a,x;if(t<=0)return p;for(e=y(n,0),o=y(p,0),u=q*2,s=i*2,r=w*2,a=v*2,x=0;x<t;x++)f=e[r],e[r]=o[a],o[a]=f,f=e[r+1],e[r+1]=o[a+1],o[a+1]=f,r+=u,a+=s;return p}R.exports=k
});var b=c(function(K,O){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=z(),B=_();A(E,"ndarray",B);O.exports=E
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=b(),m,g=D(C(__dirname,"./native.js"));F(g)?m=G:m=g;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
