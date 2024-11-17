"use strict";var x=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=x(function(I,z){
var m=require('@stdlib/strided-base-reinterpret-complex128/dist');function g(r,e,u,o,a,p,q){var t,s,n,y,d,i,v,f;if(r<=0)return a;for(t=m(e,0),s=m(a,0),y=u*2,d=p*2,i=o*2,v=q*2,f=0;f<r;f++)n=t[i],t[i]=s[v],s[v]=n,n=t[i+1],t[i+1]=s[v+1],s[v+1]=n,i+=y,v+=d;return a}z.exports=g
});var R=x(function(J,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),h=c();function k(r,e,u,o,a){var p=j(r,u),q=j(r,a);return h(r,e,u,p,o,a,q)}l.exports=k
});var O=x(function(K,E){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),B=c();A(_,"ndarray",B);E.exports=_
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=O(),w,b=D(C(__dirname,"./native.js"));F(b)?w=G:w=b;module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
