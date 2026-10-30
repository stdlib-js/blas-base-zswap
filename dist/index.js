"use strict";var x=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var c=x(function(I,z){
var m=require('@stdlib/strided-base-reinterpret-complex128/dist');function g(e,r,a,o,i,p,q){var s,u,n,y,d,v,t,f;if(e<=0)return i;for(s=m(r,0),u=m(i,0),y=a*2,d=p*2,v=o*2,t=q*2,f=0;f<e;f++)n=s[v],s[v]=u[t],u[t]=n,n=s[v+1],s[v+1]=u[t+1],u[t+1]=n,v+=y,t+=d;return i}z.exports=g
});var R=x(function(J,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),h=c();function k(e,r,a,o,i){var p=j(e,a),q=j(e,i);return h(e,r,a,p,o,i,q)}l.exports=k
});var O=x(function(K,E){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),B=c();A(_,"ndarray",B);E.exports=_
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=O(),w,b=D(C(__dirname,"./native.js"));F(b)?w=G:w=b;module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
