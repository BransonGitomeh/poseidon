google.maps.__gjsload__('stats', function(_){'use strict';var G3=function(a,b,c){var d=[];_.Ec(a,function(a,c){d.push(c+b+a)});return d.join(c)},H3=function(a,b,c,d){var e={};e.host=window.document.location&&window.document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},eea=function(a){var b={};_.Ec(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return G3(b,":",",")},fea=function(a,b,c,d){var e=_.P.b[23],f=_.P.b[22];this.D=a;this.G=
b;this.H=null!=e?e:500;this.l=null!=f?f:2;this.C=c;this.m=d;this.f=new _.hk;this.b=0;this.j=_.Ga();I3(this)},I3=function(a){window.setTimeout(function(){gea(a);I3(a)},Math.min(a.H*Math.pow(a.l,a.b),2147483647))},J3=function(a,b,c){a.f.set(b,c)},gea=function(a){var b=H3(a.G,a.C,a.m,void 0);b.t=a.b+"-"+(_.Ga()-a.j);a.f.forEach(function(a,d){a=a();0<a&&(b[d]=Number(a.toFixed(2))+(_.om()?"-if":""))});a.D.b({ev:"api_snap"},b);++a.b},K3=function(a,b,c,d,e){this.m=a;this.D=b;this.l=c;this.f=d;this.j=e;this.b=
new _.hk;this.C=_.Ga()},L3=function(a,b,c){this.l=b;this.f=a+"/maps/gen_204";this.j=c},M3=function(){this.b=new _.hk},hea=function(a){var b=0,c=0;a.b.forEach(function(a){b+=a.Ap;c+=a.Yo});return c?b/c:0},N3=function(a,b,c,d,e){this.C=a;this.D=b;this.m=c;this.j=d;this.l=e;this.f={};this.b=[]},O3=function(a,b,c,d){this.j=a;_.B.bind(this.j,"set_at",this,this.l);_.B.bind(this.j,"insert_at",this,this.l);this.C=b;this.D=c;this.m=d;this.f=0;this.b={};this.l()},P3=function(){this.j=_.sf(_.P);var a;_.cg[35]?
(a=_.jf(_.P).b[11],a=null!=a?a:""):a=_.Ey;this.b=new L3(a,_.sj,window.document);new O3(_.oj,(0,_.u)(this.b.b,this.b),_.hg,!!this.j);a=_.of(_.xf());this.D=a.split(".")[1]||a;this.G={};this.C={};this.m={};this.H={};this.I=_.rf();_.rj&&(this.l=new fea(this.b,this.D,this.I,this.j))};
K3.prototype.G=function(a){var b=_.sa(void 0)?void 0:1;this.b.isEmpty()&&window.setTimeout((0,_.u)(function(){var a=H3(this.D,this.l,this.f,this.j);a.t=_.Ga()-this.C;var b=this.b;_.ik(b);for(var e={},f=0;f<b.b.length;f++){var g=b.b[f];e[g]=b.J[g]}_.oC(a,e);this.b.clear();this.m.b({ev:"api_maprft"},a)},this),500);b=this.b.get(a,0)+b;this.b.set(a,b)};
L3.prototype.b=function(a,b){b=b||{};var c=_.Tk().toString(36);b.src="apiv3";b.token=this.l;b.ts=c.substr(c.length-6);a.cad=eea(b);a=G3(a,"=","&");a=this.f+"?target=api&"+a;this.j.createElement("img").src=a;(b=_.Jc.__gm_captureCSI)&&b(a)};M3.prototype.f=function(a,b,c){this.b.set(_.ob(a),{Ap:b,Yo:c})};N3.prototype.G=function(a){this.f[a]||(this.f[a]=!0,this.b.push(a),2>this.b.length&&_.FC(this,this.H,500))};
N3.prototype.H=function(){for(var a=H3(this.D,this.m,this.j,this.l),b=0,c;c=this.b[b];++b)a[c]="1";a.hybrid=+((_.Il()||!_.Hl())&&_.Hl());this.b.length=0;this.C.b({ev:"api_mapft"},a)};O3.prototype.l=function(){for(var a;a=this.j.removeAt(0);){var b=a.Co;a=a.timestamp-this.D;++this.f;this.b[b]||(this.b[b]=0);++this.b[b];if(20<=this.f&&!(this.f%5)){var c={};c.s=b;c.sr=this.b[b];c.tr=this.f;c.te=a;c.hc=this.m?"1":"0";this.C({ev:"api_services"},c)}}};P3.prototype.U=function(a){a=_.ob(a);this.G[a]||(this.G[a]=new N3(this.b,this.D,this.I,this.j));return this.G[a]};P3.prototype.P=function(a){a=_.ob(a);this.C[a]||(this.C[a]=new K3(this.b,this.D,1,this.j));return this.C[a]};P3.prototype.f=function(a){if(this.l){this.m[a]||(this.m[a]=new _.DD,J3(this.l,a,function(){return b.lb()}));var b=this.m[a];return b}};P3.prototype.K=function(a){if(this.l){this.H[a]||(this.H[a]=new M3,J3(this.l,a,function(){return hea(b)}));var b=this.H[a];return b}};
var iea=new P3;_.lc("stats",iea);});