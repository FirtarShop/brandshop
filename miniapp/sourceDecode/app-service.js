	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'actionSheetAnimation']])
Z([3,'captureMove'])
Z([3,'action-sheet-content'])
Z([[2,'!'],[[7],[3,'showActionSheet']]])
Z([[2,'>'],[[6],[[7],[3,'title']],[3,'length']],[1,0]])
Z([[7],[3,'items']])
Z([3,'content'])
Z([3,'weui-cell'])
Z([3,'action-sheet-button__hover'])
Z([[2,'?:'],[[6],[[7],[3,'item']],[3,'desc']],[1,''],[1,'padding-top: 25rpx; padding-bottom: 25rpx;']])
Z([[6],[[7],[3,'item']],[3,'desc']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'miniProgram']])
Z([[6],[[6],[[7],[3,'item']],[3,'userInfo']],[3,'appid']])
Z([3,'onClickItem'])
Z([[6],[[7],[3,'item']],[3,'content']])
Z([[6],[[7],[3,'item']],[3,'extra']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'type']])
Z([[6],[[7],[3,'item']],[3,'userInfo']])
Z([[6],[[6],[[7],[3,'item']],[3,'userInfo']],[3,'extParams']])
Z([3,'action-sheet-button'])
Z([[6],[[6],[[7],[3,'item']],[3,'userInfo']],[3,'path']])
Z([[6],[[6],[[7],[3,'item']],[3,'userInfo']],[3,'showWeAppBack']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[7],[3,'warningText']],[[7],[3,'errorTitle']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'warningText']]],[[7],[3,'errorTitle']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'image-view'])
Z([[7],[3,'hidden']])
Z([[7],[3,'imgStyle']])
Z([3,'onImageLoadError'])
Z([3,'onImageLoadFinish'])
Z([a,[3,'image-view-inner '],[[7],[3,'imgClass']]])
Z([[2,'&&'],[[7],[3,'showLoading']],[[2,'!'],[[7],[3,'loaded']]]])
Z([[7],[3,'lazyLoad']])
Z([[7],[3,'mode']])
Z([[7],[3,'localFile']])
Z([[2,'?:'],[[2,'||'],[[2,'||'],[[7],[3,'loaded']],[[7],[3,'placeholder']]],[[7],[3,'showLoading']]],[1,''],[[7],[3,'grayStyle']]])
Z([[2,'&&'],[[7],[3,'placeholder']],[[2,'!'],[[7],[3,'loaded']]]])
Z(z[6])
Z([3,'loading'])
Z([[7],[3,'loadingStyle']])
Z([[7],[3,'loadingSize']])
Z([a,[3,'width: '],z[15],[3,'px; height: '],z[15],[3,'px; '],[[7],[3,'loadingViewStyle']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onScrollToLower'])
Z([3,'true'])
Z(z[1])
Z([a,[3,'height: '],[[7],[3,'height']],[3,';']])
Z([3,'section'])
Z([[7],[3,'sections']])
Z([3,'key'])
Z([[2,'!'],[[6],[[7],[3,'section']],[3,'deleted']]])
Z([3,'r'])
Z([3,'row'])
Z([[6],[[7],[3,'section']],[3,'rows']])
Z([3,'id'])
Z([[2,'!'],[[6],[[7],[3,'row']],[3,'deleted']]])
Z([[6],[[7],[3,'row']],[3,'cell']])
Z([[2,'&&'],[[2,'!='],[[7],[3,'r']],[[2,'-'],[[6],[[6],[[7],[3,'section']],[3,'rows']],[3,'length']],[1,1]]],[[2,'!=='],[[7],[3,'seperatorStyle']],[1,'ListViewSeperatorStyleNone']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'modal-action'])
Z([[7],[3,'showCancel']])
Z([[7],[3,'appId']])
Z([3,'modal-action__item confirm'])
Z([[2,'=='],[[7],[3,'target']],[1,'miniProgram']])
Z([[7],[3,'openType']])
Z([[7],[3,'path']])
Z([a,[3,'color: '],[[7],[3,'confirmColor']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'supportCustomNavigation']])
Z([[2,'=='],[[7],[3,'type']],[1,'webview']])
Z([3,'navigation-bar'])
Z([a,[3,'background: '],[[7],[3,'backgroundColor']],[3,'; top: '],[[2,'+'],[[2,'||'],[[7],[3,'customTop']],[1,0]],[1,'px']],[3,'; padding-top: '],[[7],[3,'statusBarHeight']],[3,'px;']])
Z([[2,'!'],[[7],[3,'homeBack']]])
Z([3,'navigation-bar__left-wrap'])
Z([[7],[3,'leftTopBtnCustom']])
Z([3,'leftTopBtn'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'backAsExit']],[[2,'!=='],[[7],[3,'backSource']],[1,'h5']]],[[2,'!=='],[[7],[3,'backSource']],[1,'app']]])
Z([3,'exit'])
Z([3,'miniProgram'])
Z([[7],[3,'titleCustom']])
Z([3,'title'])
Z([[2,'!'],[[7],[3,'subTitle']]])
Z([3,'navigation-bar__title-wrap'])
Z([[7],[3,'showLoading']])
Z([3,'navigation-bar__loading'])
Z([[2,'=='],[[7],[3,'titleImg']],[1,'none']])
Z([[2,'!='],[[7],[3,'titleImg']],[1,'none']])
Z([[2,'&&'],[[2,'!'],[[2,'!'],[[7],[3,'titleRightIcon']]]],[[2,'!'],[[2,'!'],[[7],[3,'title']]]]])
Z([[2,'!'],[[2,'!'],[[7],[3,'subTitle']]]])
Z([3,'navigation-bar__subtitle-wrap'])
Z(z[17])
Z(z[17])
Z([a,[3,'navigation-bar__right-wrap '],[[7],[3,'platform']]])
Z([[7],[3,'rightTopBtn']])
Z([3,'onClickRightTopBtn'])
Z([3,'onTouchRightTopBtnEnd'])
Z(z[27])
Z([3,'onTouchRightTopBtnStart'])
Z([3,'bar-right-top-btn'])
Z([[7],[3,'showRightTopReddot']])
Z([[7],[3,'rightTopBtnCustom']])
Z([3,'rightTopBtn'])
Z([[2,'=='],[[7],[3,'type']],[1,'native']])
Z([3,'navigation-bar native'])
Z([a,[3,'background:'],[[2,'?:'],[[7],[3,'hasNativeComps']],[[7],[3,'backgroundColor']],[1,'']],z[3][5],z[3][6],z[3][7]])
Z(z[17])
Z(z[17])
Z([[2,'!'],[[7],[3,'hidePlaceholder']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'display']],[[2,'!'],[[7],[3,'isCircleWeAppJump']]]])
Z([[7],[3,'appId']])
Z([3,'onClick'])
Z([3,'inner-class'])
Z([[7],[3,'_extraData']])
Z([[7],[3,'hidden']])
Z([3,'hover-class'])
Z([[7],[3,'hoverStartTime']])
Z([[7],[3,'hoverStayTime']])
Z([[7],[3,'hoverStopPropagation']])
Z([[7],[3,'openType']])
Z([[7],[3,'_path']])
Z([[7],[3,'innerStyle']])
Z([[7],[3,'target']])
Z([[7],[3,'url']])
Z([[7],[3,'version']])
Z(z[2])
Z(z[3])
Z(z[5])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'#ededed'])
Z([1,true])
Z([3,''])
Z([3,'showTrialMark'])
Z([3,'navigation-bar-title'])
Z([3,'title'])
Z([[2,'&&'],[[7],[3,'isTrial']],[[7],[3,'trialMark']]])
Z([[2,'!'],[[7],[3,'isGroupApp']]])
Z([3,'toDebug'])
Z([3,'toUserProfile'])
Z([3,'icon-camera-wrap'])
Z([3,'rightTopBtn'])
Z([[7],[3,'showProfileRed']])
Z([3,'onRecommendListInputBlur'])
Z([3,'onRecommendListInputPop'])
Z([[7],[3,'currentComment']])
Z([[7],[3,'currentScrollTop']])
Z([a,[3,'index-scroll-view '],[[7],[3,'phoneModel']]])
Z([a,[3,'min-height:'],[[2,'+'],[[2,'-'],[[7],[3,'windowHeight']],[[7],[3,'navigationBarHeight']]],[[7],[3,'searchBarHeight']]],[3,'px;']])
Z([[2,'!'],[[7],[3,'allReqComplete']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isGroupApp']]],[[2,'||'],[[7],[3,'showMessageRed']],[[7],[3,'perMsgItemStr']]]])
Z([[6],[[7],[3,'hotGroupList']],[3,'length']])
Z([3,'hotGroupChange'])
Z([[2,'>'],[[6],[[7],[3,'hotGroupList']],[3,'length']],[1,1]])
Z([3,'position: relative; height: 170px;'])
Z([[7],[3,'hotGroupList']])
Z([[6],[[6],[[7],[3,'item']],[3,'groupattr']],[3,'id']])
Z([3,'onHotGroupTap'])
Z([[7],[3,'item']])
Z([3,'recommend-group-banner-item-wrap'])
Z([3,'recommend-group-info'])
Z([[6],[[6],[[7],[3,'item']],[3,'groupattr']],[3,'recommend_reason']])
Z([[6],[[6],[[7],[3,'item']],[3,'groupattr']],[3,'name']])
Z([[6],[[6],[[7],[3,'item']],[3,'groupattr']],[3,'topic_desc']])
Z([[6],[[6],[[7],[3,'item']],[3,'groupattr']],[3,'member_count']])
Z([[6],[[6],[[7],[3,'item']],[3,'groupattr']],[3,'head_img_url']])
Z([3,'recommend-group-avatar'])
Z([1,103])
Z(z[35])
Z([[7],[3,'closeListInfinity']])
Z([3,'section'])
Z([3,'listDataView'])
Z([[2,'=='],[[7],[3,'currentGroupId']],[[7],[3,'GROUP_ID_FRIENDS']]])
Z([[2,'?:'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'favorHasMore']]],[[7],[3,'favorComplete']]],[[2,'>'],[[7],[3,'productListLength']],[1,0]]],[1,' '],[1,' ']])
Z([[2,'?:'],[[2,'>'],[[7],[3,'productListLength']],[1,0]],[1,'加载更多...'],[1,'正在加载...']])
Z([[2,'||'],[[7],[3,'favorHasMore']],[[2,'!'],[[7],[3,'favorComplete']]]])
Z([3,'wrapper-product'])
Z(z[45])
Z([3,'index'])
Z([[7],[3,'timelineListIds']])
Z([3,'*this'])
Z([[6],[[7],[3,'timelineListToMap']],[[7],[3,'item']]])
Z([[6],[[6],[[7],[3,'timelineListToMap']],[[7],[3,'item']]],[3,'group_item']])
Z([3,'onClickGroupFolder'])
Z([[7],[3,'index']])
Z([[2,'?:'],[[12],[[6],[[7],[3,'UtilWxs']],[3,'isForwardFeed']],[[5],[[6],[[6],[[6],[[7],[3,'timelineListToMap']],[[6],[[7],[3,'timelineListIds']],[1,0]]],[3,'group_item']],[3,'group_id']]]],[1,1],[1,0]])
Z(z[51])
Z([3,'onAddFavorite'])
Z([3,'onCancelLike'])
Z([3,'onDelComment'])
Z([3,'onDeleteByItem'])
Z([3,'onDelReply'])
Z([3,'onDoComment'])
Z([3,'onDoLike'])
Z([3,'onDoReply'])
Z([3,'onFeedBackClick'])
Z([3,'onImageSwipe'])
Z([3,'onRecommendListInputShow'])
Z([3,'onOpenUserProfile'])
Z([3,'onRemoveFavorite'])
Z([3,'onShareClick'])
Z([3,'onShareOver'])
Z([3,'onShowPanel'])
Z([3,'onTapProduct'])
Z([3,'onToShareProductDetail'])
Z([3,'onToPreviewImage'])
Z([3,'onToProductDetail'])
Z([[7],[3,'timelineReasons']])
Z([[7],[3,'GROUP_ID_FRIENDS']])
Z(z[54])
Z(z[48])
Z([3,'index-recommend'])
Z(z[51])
Z(z[15])
Z(z[48])
Z([[7],[3,'timelineRenderItems']])
Z([3,'item.dataIndex'])
Z([3,'item-wrap'])
Z([[6],[[7],[3,'item']],[3,'dataIndex']])
Z([a,[3,'order:'],[[6],[[7],[3,'item']],[3,'order']],[3,'; '],[[2,'?:'],[[6],[[6],[[7],[3,'timelineDataMap']],[[6],[[7],[3,'item']],[3,'dataIndex']]],[3,'height']],[[2,'+'],[[2,'+'],[1,'height:'],[[6],[[6],[[7],[3,'timelineDataMap']],[[6],[[7],[3,'item']],[3,'dataIndex']]],[3,'height']]],[1,'px;']],[1,'']]])
Z([[6],[[6],[[7],[3,'timelineDataMap']],[[6],[[7],[3,'item']],[3,'dataIndex']]],[3,'group_item']])
Z(z[53])
Z([[6],[[7],[3,'timelineDataMap']],[[6],[[7],[3,'item']],[3,'dataIndex']]])
Z(z[57])
Z(z[58])
Z(z[59])
Z(z[60])
Z(z[61])
Z(z[62])
Z(z[63])
Z(z[64])
Z(z[65])
Z(z[66])
Z(z[67])
Z(z[68])
Z(z[69])
Z(z[70])
Z(z[71])
Z(z[73])
Z(z[74])
Z(z[75])
Z(z[76])
Z(z[77])
Z(z[78])
Z(z[54])
Z(z[81])
Z(z[92])
Z([[6],[[7],[3,'dialog']],[3,'show']])
Z([3,'onDismissDialog'])
Z([[6],[[7],[3,'dialog']],[3,'desc']])
Z([[6],[[7],[3,'dialog']],[3,'title']])
Z([[6],[[7],[3,'dialog']],[3,'userInfo']])
Z([3,'content'])
Z([[6],[[7],[3,'dialog']],[3,'customFooter']])
Z([[2,'!'],[[6],[[7],[3,'dialog']],[3,'customFooter']]])
Z([[7],[3,'showActionSheet']])
Z([3,'beforeClickActionSheet'])
Z([3,'hideActionSheet'])
Z([3,'clickActionSheet'])
Z([[7],[3,'actionSheetItems']])
Z([3,'display: block;'])
Z([[7],[3,'actionSheetTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([[7],[3,'showAuth']])
Z([3,'auth-content__head-img'])
Z([[2,'&&'],[[7],[3,'authItem']],[[2,'+'],[[6],[[7],[3,'authItem']],[3,'icon_url']],[1,'/132']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'ignore']])
Z([3,'onLongPressAction'])
Z([[7],[3,'item']])
Z([[2,'!=='],[[7],[3,'platform']],[1,'android']])
Z([3,'onScroll'])
Z([3,'onTouchEnd'])
Z(z[5])
Z([3,'onTouchStart'])
Z([[7],[3,'destScrollLeft']])
Z([1,true])
Z([[2,'!'],[[7],[3,'forbidScroll']]])
Z([a,[3,'background: '],[[7],[3,'backgroundColor']],[3,';']])
Z([3,'onClick'])
Z([3,'cell'])
Z([[2,'?:'],[[2,'==='],[[7],[3,'mode']],[1,'delete']],[[2,'+'],[[2,'+'],[1,'width: '],[[2,'+'],[[7],[3,'CELL_ORIGIN_WIDTH']],[[2,'*'],[[7],[3,'actionWidth']],[[6],[[7],[3,'actions']],[3,'length']]]]],[1,'px;']],[1,'width:100%']])
Z([[6],[[7],[3,'actions']],[3,'length']])
Z(z[1])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'btnList']],[[6],[[7],[3,'btnList']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClickOutside'])
Z([3,'dialog-ctr'])
Z([3,'onClickDialog'])
Z([3,'dialog'])
Z([3,'content'])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'categoryRecommendList']],[3,'length']])
Z([[7],[3,'categoryRecommendList']])
Z([3,'id'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'deleted']]])
Z([3,'every-recommend-item-wrap'])
Z([[7],[3,'index']])
Z([1,5])
Z(z[5])
Z([[7],[3,'item']])
Z([3,'every-buy-list'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'item-wrap '],[[2,'?:'],[[2,'==='],[[7],[3,'ref']],[1,'search']],[1,'search-item-wrap'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'fromSearch']],[1,'normal-border-radius'],[1,'']]])
Z([3,'showPanel'])
Z([a,[3,'product-wrap '],[[2,'?:'],[[7],[3,'panelShow']],[1,'hide-product'],[1,'']]])
Z([3,'every-recommend-img'])
Z([3,'aspectFill'])
Z([3,'img'])
Z([1,360])
Z([[6],[[6],[[6],[[7],[3,'item']],[3,'product']],[3,'image_list']],[1,0]])
Z([3,'status-wrap'])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'&&'],[[7],[3,'theTag']],[[7],[3,'showTag']]],[[6],[[7],[3,'item']],[3,'friend_desc']]],[[6],[[7],[3,'item']],[3,'friends_buy_num']]],[[6],[[6],[[7],[3,'item']],[3,'product']],[3,'has_buy']]])
Z([a,[3,'left-part '],[[2,'?:'],[[2,'==='],[[7],[3,'ref']],[1,'every-buy-list']],[1,'no-tag-left-part'],[1,'']],z[0][3],[[2,'?:'],[[2,'&&'],[[7],[3,'theTag']],[[7],[3,'showTag']]],[1,'has-tag-left-part'],[1,'']]])
Z([[2,'&&'],[[7],[3,'theTag']],[[7],[3,'showTag']]])
Z([[6],[[7],[3,'item']],[3,'friend_desc']])
Z([[2,'==='],[[7],[3,'ref']],[1,'every-buy-list']])
Z(z[1])
Z(z[3])
Z([3,'aspectFit'])
Z(z[5])
Z(z[6])
Z(z[7])
Z([[7],[3,'showActionSheet']])
Z([3,'hideActionSheet'])
Z([3,'clickActionSheet'])
Z([[7],[3,'actionSheetItems']])
Z([3,'display: block;'])
Z([[7],[3,'actionSheetTitle']])
Z([3,'onClickChooseReason'])
Z([[7],[3,'ignoreDialogChoices']])
Z([[7],[3,'ignoreClickPosition']])
Z([[7],[3,'showIgnoreDialog']])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onEnd'])
Z(z[0])
Z([3,'onMove'])
Z([3,'onStart'])
Z([[2,'?:'],[[7],[3,'block']],[1,'onStart'],[1,'']])
Z([3,'inner-class'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'showProductDetailActionSheet'])
Z([3,'goods-item-wrap'])
Z([3,'hover'])
Z([3,'header'])
Z([[2,'?:'],[[2,'==='],[[7],[3,'clickable']],[1,false]],[1,'onClick'],[1,'']])
Z([3,'wrap'])
Z([3,'img'])
Z([3,'aspectFit'])
Z(z[6])
Z([[2,'?:'],[[6],[[6],[[7],[3,'itemInfo']],[3,'image_cdn_list']],[1,0]],[[6],[[6],[[6],[[7],[3,'itemInfo']],[3,'image_cdn_list']],[1,0]],[3,'image_cdn_url']],[[6],[[6],[[7],[3,'itemInfo']],[3,'image_list']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'position: relative; width: '],[[7],[3,'size']],[3,'px; height: '],[[7],[3,'size']],[3,'px;']])
Z([3,'inner-box'])
Z([a,[3,'width: '],z[0][2],z[0][3],z[0][2],[3,'px; top: -'],[[2,'*'],[[7],[3,'size']],[1,0.067]],[3,'px; left: -'],[[2,'/'],[[7],[3,'size']],[1,4]],[3,'px']])
Z([[7],[3,'src']])
Z([3,'box-img'])
Z([3,'aspectFill'])
Z(z[3])
Z([3,'first'])
Z(z[1])
Z([a,z[2][1],z[0][2],z[0][3],z[0][2],z[2][5],z[2][6],z[2][7],z[2][8],z[2][9]])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[3])
Z([3,'second'])
Z(z[1])
Z([a,z[2][1],z[0][2],z[0][3],z[0][2],z[2][5],z[2][6],z[2][7],z[2][8],z[2][9]])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[3])
Z([3,'third'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'viewModel']])
Z([3,'toFeedDetail'])
Z([a,[3,'wrap group-feed-'],[[7],[3,'index']]])
Z([3,'link-hover'])
Z([[6],[[7],[3,'viewModel']],[3,'video_item']])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment']])
Z([[2,'||'],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'like_count']],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment_count']]])
Z([3,'feed-item-others-wrap'])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'like_count']])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment_count']])
Z([[7],[3,'showActionSheet']])
Z([3,'hideActionSheet'])
Z([3,'clickActionSheet'])
Z([[7],[3,'actionSheetItems']])
Z([3,'display: block;'])
Z([[7],[3,'actionSheetTitle']])
Z([[7],[3,'showCanvas']])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'guaranteeInfoMap']],[[6],[[7],[3,'guaranteeInfoMap']],[[7],[3,'appId']]]])
Z([[7],[3,'guaranteePopUpShow']])
Z([[6],[[6],[[7],[3,'guaranteeInfoMap']],[[7],[3,'appId']]],[3,'platform_logo']])
Z([3,'platform-logo'])
Z([3,'border-radius: 50%;'])
Z(z[2])
Z([[6],[[6],[[7],[3,'guaranteeInfoMap']],[[7],[3,'appId']]],[3,'title']])
Z([[2,'&&'],[[6],[[6],[[7],[3,'guaranteeInfoMap']],[[7],[3,'appId']]],[3,'official_website_title']],[[6],[[6],[[7],[3,'guaranteeInfoMap']],[[7],[3,'appId']]],[3,'official_website_url']]])
Z([[6],[[6],[[7],[3,'guaranteeInfoMap']],[[7],[3,'appId']]],[3,'phone_number']])
Z([[2,'&&'],[[6],[[6],[[7],[3,'guaranteeInfoMap']],[[7],[3,'appId']]],[3,'online_service_title']],[[6],[[6],[[7],[3,'guaranteeInfoMap']],[[7],[3,'appId']]],[3,'online_service_wxapp_id']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showIgnoreDialog']])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[3,'group-cell '],[[2,'?:'],[[2,'>'],[[7],[3,'index']],[1,0]],[1,'top-border'],[1,'']]])
Z([[6],[[6],[[7],[3,'item']],[3,'base']],[3,'id']])
Z([[7],[3,'index']])
Z([3,'hover'])
Z([3,'200'])
Z([3,'group-cell-avatar'])
Z([1,48])
Z([[2,'||'],[[6],[[6],[[7],[3,'item']],[3,'base']],[3,'head_img_url']],[1,'/assets/icon-group-default.png']])
Z([[6],[[7],[3,'item']],[3,'unread_feed_count']])
Z([3,'group-cell-content'])
Z([[6],[[7],[3,'item']],[3,'is_group_owner']])
Z([[6],[[6],[[7],[3,'item']],[3,'base']],[3,'desc']])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'compFacePanel']],[3,'panelShow']])
Z([[7],[3,'submitTxt']])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onFaceInput'])
Z([1,50])
Z(z[1])
Z([[6],[[7],[3,'compFacePanel']],[3,'maskShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'list-data-view-wrapper '],[[7],[3,'phoneModel']]])
Z([[7],[3,'hidden']])
Z([[7],[3,'showTip']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'condIf']])
Z([3,'preventPageScroll'])
Z([3,'mask-ctr'])
Z([a,[3,'z-index: '],[[7],[3,'zIndex']],[3,';']])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'msgItem']])
Z([3,'onClickCellAction'])
Z([3,'onDeleteActionSheet'])
Z([3,'delete'])
Z([[7],[3,'showActionSheet']])
Z([3,'hideActionSheet'])
Z([3,'clickActionSheet'])
Z([[7],[3,'actionSheetItems']])
Z([3,'display: block;'])
Z([[7],[3,'actionSheetTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'msgItem']],[3,'__deleted']]],[[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,'permission_msg']]])
Z([3,'onClickCellAction'])
Z([3,'onDeleteActionSheet'])
Z([3,'delete'])
Z([[2,'!'],[[6],[[7],[3,'msgItem']],[3,'__deleted']]])
Z(z[1])
Z(z[2])
Z(z[3])
Z([3,'toDetail'])
Z([3,'msg-item-inner'])
Z([[2,'?:'],[[6],[[7],[3,'msgItem']],[3,'canClick']],[1,'hover'],[1,'']])
Z([3,'msg-item-content'])
Z([[2,'&&'],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[[2,'==='],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'type']],[1,200]]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,218]])
Z([3,'msg-item-img'])
Z([1,43])
Z([3,'/assets/icon-group-invite-msg.png'])
Z([[2,'&&'],[[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'group_id']],[[12],[[6],[[7],[3,'Util']],[3,'showGroup']],[[5],[[6],[[7],[3,'msgItem']],[3,'msg_type']]]]])
Z(z[14])
Z(z[15])
Z([[2,'||'],[[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'group_head_img_url']],[1,'/assets/icon-group-default.png']])
Z([[2,'&&'],[[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'brand_icon']],[[12],[[6],[[7],[3,'Util']],[3,'showBrandIcon']],[[5],[[6],[[7],[3,'msgItem']],[3,'msg_type']]]]])
Z([3,'onFromNameTap'])
Z(z[14])
Z([3,'border-radius: 4px'])
Z([[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'brand_icon']])
Z(z[22])
Z(z[14])
Z(z[24])
Z([3,'avatar'])
Z([[6],[[7],[3,'msgItem']],[3,'item_icon_url']])
Z([3,'right-part'])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,3]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,4]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,5]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,100]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,101]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,102]])
Z([[2,'||'],[[2,'||'],[[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,201]],[[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,202]]],[[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,205]]])
Z([[2,'||'],[[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'delreply']],[[2,'!'],[[6],[[7],[3,'msgItem']],[3,'msg_status']]]])
Z([3,'msg-item-desc-friend'])
Z([[2,'&&'],[[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'to_type']],[[2,'!=='],[[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'from_openid']],[[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'to_openid']]]])
Z([[2,'&&'],[[6],[[7],[3,'msgItem']],[3,'commentArr']],[[6],[[6],[[7],[3,'msgItem']],[3,'commentArr']],[3,'length']]])
Z([[6],[[7],[3,'msgItem']],[3,'commentArr']])
Z([[2,'+'],[[6],[[7],[3,'item']],[3,'type']],[[6],[[7],[3,'item']],[3,'value']]])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'txt']],[[6],[[7],[3,'item']],[3,'value']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'face']])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,204]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,206]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,207]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,208]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,209]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,210]])
Z([a,[3,'msg-item-desc-system '],[[2,'?:'],[[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'apply_reason']],[1,'full-show'],[1,'']]])
Z([[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'apply_reason']])
Z(z[54])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,211]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,213]])
Z([3,'msg-item-desc-system'])
Z(z[54])
Z(z[54])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,214]])
Z(z[58])
Z(z[54])
Z(z[54])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,215]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,216]])
Z(z[13])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,219]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,220]])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,221]])
Z(z[40])
Z(z[42])
Z(z[43])
Z(z[44])
Z(z[45])
Z(z[46])
Z([[2,'||'],[[2,'||'],[[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,210]],[[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,213]]],[[2,'==='],[[6],[[7],[3,'msgItem']],[3,'msg_type']],[1,214]]])
Z([[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'video_thumb_url']])
Z([3,'product-img'])
Z([3,'aspectFill'])
Z(z[78])
Z([[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'recommend_item_url']])
Z(z[79])
Z([[2,'?:'],[[2,'==='],[[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'appid']],[1,'wx8a5d6f9fad07544e']],[1,'aspectFit'],[1,'aspectFill']])
Z([3,'img'])
Z(z[82])
Z([[2,'&&'],[[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'productimage']],[[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'productimage_1']]])
Z([3,'image-list-wrap'])
Z([[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'productimage']])
Z([3,'image-list-item'])
Z(z[84])
Z(z[85])
Z(z[89])
Z([[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'productimage_1']])
Z(z[90])
Z(z[84])
Z(z[85])
Z(z[94])
Z([[6],[[6],[[6],[[7],[3,'msgItem']],[3,'ext_info']],[3,'infoObj']],[3,'productimage_2']])
Z(z[90])
Z(z[84])
Z(z[85])
Z(z[99])
Z(z[89])
Z(z[79])
Z(z[84])
Z(z[85])
Z(z[89])
Z([[7],[3,'showActionSheet']])
Z([3,'hideActionSheet'])
Z([3,'clickActionSheet'])
Z([[7],[3,'actionSheetItems']])
Z([3,'display: block;'])
Z([[7],[3,'actionSheetTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([3,'capture'])
Z([3,'ux-dialog'])
Z([3,'container'])
Z([3,'dialog'])
Z([3,'ux-dialog-content'])
Z([[7],[3,'content']])
Z([[7],[3,'needInput']])
Z([[7],[3,'showCancel']])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'open']])
Z([[7],[3,'showRight']])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'appId']])
Z([[8],'wxShoppingListScene',[[7],[3,'scene']]])
Z([3,'hover'])
Z([[7],[3,'path']])
Z([1,false])
Z([[7],[3,'target']])
Z([[7],[3,'url']])
Z([[7],[3,'version']])
Z([3,'header'])
Z([[2,'?:'],[[2,'==='],[[7],[3,'clickable']],[1,false]],[1,'onClick'],[1,'']])
Z([3,'wrap'])
Z(z[0])
Z([[7],[3,'itemCode']])
Z([3,'img'])
Z([a,[3,'opacity:'],[[2,'?:'],[[7],[3,'disableState']],[1,0.3],[1,1.0]]])
Z([3,'aspectFit'])
Z([[7],[3,'thumbUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wrap '],[[7],[3,'mode']],[3,' '],[[2,'?:'],[[7],[3,'fixBottom']],[1,'fix-bottom'],[1,'']]])
Z([[7],[3,'backgroundUrl']])
Z([3,'background'])
Z([[7],[3,'backgroundMode']])
Z(z[1])
Z([a,[3,'left: '],[[7],[3,'backgroundInsetLeft']],[3,'px; bottom: '],[[7],[3,'backgroundInsetBottom']],[3,'px; width: calc(100% + '],[[2,'*'],[[2,'-'],[[7],[3,'backgroundInsetLeft']]],[1,2]],[3,'px); height: '],[[7],[3,'backgroundHeight']],[3,'px;']])
Z([[7],[3,'showMenuDetail']])
Z([[2,'?:'],[[6],[[7],[3,'product']],[3,'onlyForPreview']],[1,''],[1,'onClickMenu']])
Z([3,'product'])
Z([3,'detail'])
Z([[2,'?:'],[[6],[[7],[3,'product']],[3,'onlyForPreview']],[1,''],[1,'hover']])
Z([[6],[[7],[3,'product']],[3,'image']])
Z([3,'product-img'])
Z(z[11])
Z([[2,'||'],[[6],[[6],[[6],[[7],[3,'product']],[3,'product_item']],[3,'brand_info']],[3,'name']],[[6],[[7],[3,'product']],[3,'nickname']]])
Z([[2,'!'],[[6],[[7],[3,'product']],[3,'onlyForPreview']]])
Z([[2,'&&'],[[7],[3,'poi']],[[6],[[7],[3,'poi']],[3,'name']]])
Z(z[16])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'product']],[3,'onlyForPreview']]],[[7],[3,'showMenuDetail']]],[[2,'||'],[[2,'||'],[[2,'||'],[[7],[3,'showMenuShare']],[[7],[3,'showMenuFav']]],[[7],[3,'showMenuContact']]],[[7],[3,'showMenuArticle']]]])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'product']],[3,'onlyForPreview']]],[[2,'||'],[[2,'||'],[[2,'||'],[[7],[3,'showMenuShare']],[[7],[3,'showMenuFav']]],[[7],[3,'showMenuContact']]],[[7],[3,'showMenuArticle']]]])
Z([3,'bottom-menu'])
Z([[7],[3,'showMenuShare']])
Z([[7],[3,'showMenuFav']])
Z([[7],[3,'showMenuContact']])
Z([[7],[3,'showMenuArticle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrap'])
Z([[2,'!'],[[7],[3,'video']]])
Z([[7],[3,'video']])
Z([3,'onLongPress'])
Z([3,'onTap'])
Z([[6],[[7],[3,'video']],[3,'url']])
Z([[6],[[7],[3,'video']],[3,'duration']])
Z([1,false])
Z([1,true])
Z(z[5])
Z(z[8])
Z([[6],[[7],[3,'video']],[3,'thumb_url']])
Z([3,''])
Z([3,'onChange'])
Z([3,'onClick'])
Z(z[12])
Z(z[7])
Z([3,'swiper'])
Z([[7],[3,'current']])
Z([3,'300'])
Z([[7],[3,'imagesTouch']])
Z([3,'url'])
Z([[2,'?:'],[[2,'||'],[[6],[[7],[3,'item']],[3,'swiperActive']],[[2,'=='],[[6],[[7],[3,'item']],[3,'scale']],[1,1]]],[1,''],[1,'onReturn']])
Z([3,'swiper-wrap'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'isOverScreenHeight']]])
Z([3,'onSwiperItemChange'])
Z([3,'onSwiperItemScale'])
Z([[7],[3,'index']])
Z([3,'all'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'scale']],[1,1]])
Z([[6],[[7],[3,'item']],[3,'maxScale']])
Z([3,'1'])
Z(z[31])
Z([a,[3,'width: '],[[6],[[7],[3,'item']],[3,'width']],[3,'px; height: '],[[6],[[7],[3,'item']],[3,'height']],[3,'px; '],[[6],[[7],[3,'item']],[3,'movableViewPositionStyle']]])
Z(z[3])
Z(z[4])
Z([3,'onTouchEnd'])
Z([3,'onTouchStart'])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([3,'60'])
Z([3,'light'])
Z([3,'aspectFit'])
Z([3,'750'])
Z(z[38])
Z(z[7])
Z(z[25])
Z(z[26])
Z([3,'movable-view'])
Z(z[27])
Z([3,'horizontal'])
Z(z[8])
Z(z[30])
Z(z[31])
Z(z[31])
Z([a,z[33][1],z[33][2],z[33][3],z[33][4],[3,'px;']])
Z(z[3])
Z(z[4])
Z(z[36])
Z(z[37])
Z(z[38])
Z(z[39])
Z(z[40])
Z([a,[3,'top: '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'isOverScreenHeight']],[[2,'+'],[[2,'*'],[[7],[3,'height']],[1,0.5]],[1,'px']],[1,'50%']],[3,';']])
Z(z[41])
Z(z[42])
Z(z[38])
Z([a,z[33][1],z[33][2],z[33][3],z[33][4],z[54][5]])
Z([[2,'&&'],[[12],[[6],[[7],[3,'Util']],[3,'hasProduct']],[[5],[[5],[[7],[3,'product']]],[[7],[3,'current']]]],[[6],[[12],[[6],[[7],[3,'Util']],[3,'getProduct']],[[5],[[5],[[7],[3,'product']]],[[7],[3,'current']]]],[3,'onlyForPreview']]])
Z([[7],[3,'height']])
Z([3,'0'])
Z(z[69])
Z(z[41])
Z([[6],[[6],[[7],[3,'imagesTouch']],[[7],[3,'current']]],[3,'url']])
Z([3,'captureOutsideClick'])
Z([[2,'=='],[[7],[3,'phoneModel']],[1,'iPhoneX']])
Z([3,'dark'])
Z([[12],[[6],[[7],[3,'Util']],[3,'getProduct']],[[5],[[5],[[7],[3,'product']]],[[7],[3,'current']]]])
Z([[2,'||'],[[12],[[6],[[7],[3,'Util']],[3,'hasPoi']],[[5],[[5],[[7],[3,'product']]],[[7],[3,'current']]]],[[12],[[6],[[7],[3,'Util']],[3,'hasProduct']],[[5],[[5],[[7],[3,'product']]],[[7],[3,'current']]]]])
Z([a,[3,'attachment attachment_custom '],[[7],[3,'phoneModel']],[3,' '],[[2,'?:'],[[7],[3,'showAttachment']],[1,'show'],[1,'']]])
Z([[12],[[6],[[7],[3,'Util']],[3,'hasPoi']],[[5],[[5],[[7],[3,'product']]],[[7],[3,'current']]]])
Z([[12],[[6],[[7],[3,'Util']],[3,'hasProduct']],[[5],[[5],[[7],[3,'product']]],[[7],[3,'current']]]])
Z([3,'toShareProductDetail'])
Z([3,'slice-inner'])
Z([3,'hover'])
Z([3,'200'])
Z([[6],[[12],[[6],[[7],[3,'Util']],[3,'getProduct']],[[5],[[5],[[7],[3,'product']]],[[7],[3,'current']]]],[3,'has_buy']])
Z([[6],[[7],[3,'actionSheet']],[3,'show']])
Z([3,'hideActionSheet'])
Z([3,'clickActionSheet'])
Z([[6],[[7],[3,'actionSheet']],[3,'items']])
Z([[6],[[7],[3,'actionSheet']],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrap'])
Z([[2,'?:'],[[7],[3,'customMedia']],[1,''],[[2,'?:'],[[2,'&&'],[[7],[3,'product']],[[7],[3,'active']]],[1,'onClick'],[1,'preview']]])
Z([3,'media'])
Z([[7],[3,'customMedia']])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'uniqueImages']],[3,'length']],[1,1]],[[7],[3,'renderSwiper']]])
Z([3,''])
Z([3,'onChange'])
Z([3,'onTransition'])
Z([1,false])
Z([3,'300'])
Z([a,[3,'width: '],[[2,'?:'],[[12],[[6],[[7],[3,'Util']],[3,'isGroupFeedDetail']],[[5],[[7],[3,'sourceId']]]],[[6],[[6],[[7],[3,'uniqueImages']],[1,0]],[3,'width']],[[7],[3,'width']]],[3,'px; height: '],[[2,'?:'],[[12],[[6],[[7],[3,'Util']],[3,'isGroupFeedDetail']],[[5],[[7],[3,'sourceId']]]],[[7],[3,'swiperHeight']],[[7],[3,'height']]],[3,'px; margin: 0 auto;']])
Z([[7],[3,'uniqueImages']])
Z([3,'url'])
Z([3,'image-wrap'])
Z([a,z[10][1],[[2,'?:'],[[12],[[6],[[7],[3,'Util']],[3,'isGroupFeedDetail']],[[5],[[7],[3,'sourceId']]]],[[6],[[7],[3,'item']],[3,'width']],[[7],[3,'width']]],z[10][3],[[2,'?:'],[[12],[[6],[[7],[3,'Util']],[3,'isGroupFeedDetail']],[[5],[[7],[3,'sourceId']]]],[[6],[[7],[3,'item']],[3,'height']],[[7],[3,'height']]],[3,'px;']])
Z([[2,'||'],[[7],[3,'appid']],[1,'UNKOWN_APPID']])
Z([a,[3,'border-radius: 1px; '],[[2,'?:'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'item']],[3,'isUgc']]],[[7],[3,'fixHeight']]],[1,'padding: 48px 0 72px; box-sizing: border-box;'],[1,'']]])
Z([[2,'||'],[[2,'&&'],[[6],[[7],[3,'product']],[3,'product_item']],[[6],[[6],[[7],[3,'product']],[3,'product_item']],[3,'item_code']]],[1,'UNKOWN_PRODUCT_ITEM_CODE']])
Z([[2,'?:'],[[6],[[7],[3,'item']],[3,'isUgc']],[1,'aspectFill'],[[7],[3,'mode']]])
Z([3,'img'])
Z([3,'750'])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([3,'width: 100%; height: 100%;'])
Z([[7],[3,'waterMark']])
Z(z[13])
Z([a,z[10][1],z[10][2],z[10][3],z[10][4],z[14][5]])
Z(z[15])
Z([a,z[16][1],[[2,'?:'],[[2,'&&'],[[2,'!'],[[6],[[6],[[7],[3,'uniqueImages']],[1,0]],[3,'isUgc']]],[[7],[3,'fixHeight']]],[1,'padding: 48px 0 72px; box-sizing: border-box;'],[1,'']]])
Z(z[17])
Z([[2,'?:'],[[6],[[6],[[7],[3,'uniqueImages']],[1,0]],[3,'isUgc']],[1,'aspectFill'],[[7],[3,'mode']]])
Z(z[19])
Z(z[20])
Z([[6],[[6],[[7],[3,'uniqueImages']],[1,0]],[3,'url']])
Z(z[23])
Z([[2,'||'],[[12],[[6],[[7],[3,'Util']],[3,'hasPoi']],[[5],[[5],[[7],[3,'product']]],[[7],[3,'current']]]],[[12],[[6],[[7],[3,'Util']],[3,'hasProduct']],[[5],[[5],[[7],[3,'product']]],[[7],[3,'current']]]]])
Z([3,'attachment'])
Z([[2,'?:'],[[7],[3,'customMedia']],[1,'bottom: 56px;'],[1,'']])
Z([[12],[[6],[[7],[3,'Util']],[3,'hasPoi']],[[5],[[5],[[7],[3,'product']]],[[7],[3,'current']]]])
Z([[12],[[6],[[7],[3,'Util']],[3,'hasProduct']],[[5],[[5],[[7],[3,'product']]],[[7],[3,'current']]]])
Z([3,'toShareProductDetail'])
Z([3,'slice-inner'])
Z([3,'gray-hover'])
Z([3,'200'])
Z([[6],[[12],[[6],[[7],[3,'Util']],[3,'getProduct']],[[5],[[5],[[7],[3,'product']]],[[7],[3,'current']]]],[3,'has_buy']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'customMedia']]],[[2,'>'],[[6],[[7],[3,'uniqueImages']],[3,'length']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onCancel'])
Z([[7],[3,'show']])
Z([a,[3,'sheet-body '],[[7],[3,'phoneModel']]])
Z([a,[3,'min-height: '],[[7],[3,'minContentViewHeight']],[3,'px; max-height: '],[[7],[3,'maxContentViewHeight']],[3,'px;']])
Z([[6],[[7],[3,'product']],[3,'images']])
Z([3,'1'])
Z([[7],[3,'imageWidth']])
Z([3,'detail'])
Z([[6],[[7],[3,'product']],[3,'price']])
Z([[6],[[7],[3,'product']],[3,'appName']])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onCancel'])
Z([[7],[3,'show']])
Z([3,'preventPageScroll'])
Z([3,'sheet-ctr'])
Z([[7],[3,'query']])
Z([3,'onLoadMore'])
Z([a,[3,'max-height: '],[[7],[3,'searchContentView']],[3,'px;']])
Z([[2,'!'],[[7],[3,'searching']]])
Z([[7],[3,'productList']])
Z([3,'key'])
Z([3,'onSelectProduct'])
Z([3,'sheet-item'])
Z([[7],[3,'index']])
Z([3,'sheet-item_hover'])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'index']],[1,0]],[[2,'>'],[[7],[3,'bufferLength']],[1,0]]],[[7],[3,'title1']]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'index']],[[7],[3,'bufferLength']]],[[7],[3,'title2']]],[[2,'<'],[[7],[3,'bufferLength']],[[6],[[7],[3,'productList']],[3,'length']]]])
Z([3,'onPreview'])
Z([1,false])
Z(z[12])
Z([[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'currentProductIndex']]],[1,'light'],[1,'dark']])
Z([[7],[3,'item']])
Z([3,'preview'])
Z([[2,'>'],[[2,'-'],[[6],[[7],[3,'productList']],[3,'length']],[[7],[3,'bufferLength']]],[1,0]])
Z([[7],[3,'searchProductList']])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[16])
Z(z[12])
Z([[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'currentSearchProductIndex']]],[1,'light'],[1,'dark']])
Z(z[20])
Z([3,'search'])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onMaskHide'])
Z([[7],[3,'show']])
Z([3,'preventPageScroll'])
Z([a,[3,'sheet-ctr '],[[7],[3,'phoneModel']]])
Z([3,'max-height: 510px;'])
Z([[7],[3,'showFriend']])
Z([[7],[3,'quanzuList']])
Z([3,'id'])
Z([[2,'&&'],[[7],[3,'quanzuList']],[[6],[[7],[3,'quanzuList']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'currentComment']])
Z([3,'preventTouchMove'])
Z([3,'ask-input-ctr'])
Z([a,[3,'top: '],[[2,'||'],[[7],[3,'inputTop']],[[2,'+'],[[6],[[7],[3,'currentComment']],[3,'initTop']],[[7],[3,'currentScrollTop']]]],[3,'px; opacity: '],[[2,'?:'],[[7],[3,'inputTop']],[1,1],[1,0]],[3,';']])
Z([3,'onInputSubmit'])
Z([3,'onFaceDelete'])
Z([3,'onFaceInput'])
Z([3,'onFaceRefocus'])
Z([3,'onFacePanelShow'])
Z([3,'face-btn'])
Z([1,32])
Z(z[10])
Z([[6],[[7],[3,'compFacePanel']],[3,'maskShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'opwrapper'])
Z([[7],[3,'hasGoods']])
Z([[2,'!'],[[7],[3,'groupId']]])
Z([3,'showLikeIcons'])
Z([3,'item-like-icon-wrap'])
Z([3,'fill'])
Z([3,'100'])
Z([3,'true'])
Z([[7],[3,'showIcons']])
Z(z[8])
Z([3,'onPopWrapTouchMove'])
Z([3,'icon-pop-wrap'])
Z([[7],[3,'IconList']])
Z([3,'index'])
Z([[2,'<'],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'IconList']],[3,'length']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'foldMode']])
Z([[7],[3,'comment']])
Z([a,[3,'user-comment-content fold-mode '],[[2,'?:'],[[7],[3,'marginFor6Lines']],[1,'extra-margin'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'unfold']],[1,'unfold'],[1,'']]])
Z([a,[3,'color: '],[[7],[3,'color']],[3,'; font-size:'],[[7],[3,'fontSize']],[3,'px; line-height:'],[[7],[3,'calcLineHeight']],[3,'px; '],[[2,'?:'],[[2,'&&'],[[2,'!'],[[7],[3,'unfold']]],[[2,'>'],[[7],[3,'lineCount']],[1,0]]],[[2,'+'],[[2,'+'],[1,'max-height:'],[[2,'+'],[[2,'*'],[[7],[3,'calcLineHeight']],[[2,'+'],[[7],[3,'lineCount']],[1,1]]],[1,8]]],[1,'px;']],[1,'']],z[2][3],[[2,'?:'],[[7],[3,'unfold']],[[2,'+'],[[2,'+'],[1,'padding-bottom:'],[[2,'+'],[[7],[3,'calcLineHeight']],[1,8]]],[1,'px;']],[1,'']]])
Z([[6],[[7],[3,'commentArr']],[3,'length']])
Z([[7],[3,'commentArr']])
Z([[2,'+'],[[6],[[7],[3,'item']],[3,'type']],[[6],[[7],[3,'item']],[3,'value']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'txt']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'url']])
Z([3,'onUrlTap'])
Z([3,'url-inline'])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'face']])
Z([[2,'>'],[[7],[3,'lineCount']],[1,0]])
Z(z[1])
Z([a,[3,'user-comment-content '],[[2,'?:'],[[2,'>'],[[7],[3,'lineCount']],[1,0]],[1,'limit-line-count'],[1,'']]])
Z([a,z[3][1],z[3][2],z[3][3],z[3][4],z[3][5],z[3][6],z[3][7],[[2,'?:'],[[2,'&&'],[[2,'!'],[[7],[3,'unfold']]],[[2,'>'],[[7],[3,'lineCount']],[1,0]]],[[2,'+'],[[2,'+'],[1,'max-height:'],[[2,'*'],[[7],[3,'calcLineHeight']],[[7],[3,'lineCount']]]],[1,'px;']],[1,'']],z[2][3],[[2,'?:'],[[2,'>'],[[7],[3,'lineCount']],[1,0]],[[2,'+'],[[2,'+'],[1,'-webkit-line-clamp:'],[[7],[3,'lineCount']]],[1,';']],[1,'']]])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrap'])
Z([[2,'?:'],[[2,'||'],[[12],[[6],[[7],[3,'UtilWxs']],[3,'isForwardFeed']],[[5],[[7],[3,'groupId']]]],[[2,'!='],[[7],[3,'sourceId']],[1,'group-feed-detail']]],[1,'toOriginalFeedDetail'],[1,'']])
Z([[2,'?:'],[[2,'||'],[[12],[[6],[[7],[3,'UtilWxs']],[3,'isForwardFeed']],[[5],[[7],[3,'groupId']]]],[[2,'!='],[[7],[3,'sourceId']],[1,'group-feed-detail']]],[1,'hover_white-cell'],[1,'']])
Z([3,'200'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'comment_'],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'id']]],[1,'_']],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment_id']]],[1,'_1']])
Z([3,'padding-wrap'])
Z([[2,'=='],[[7],[3,'sourceId']],[1,'profile']])
Z([[2,'||'],[[2,'&&'],[[2,'==='],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'openid']],[[7],[3,'userOpenId']]],[[2,'==='],[[7],[3,'sourceId']],[1,'profile']]],[[2,'!'],[[12],[[6],[[7],[3,'UtilWxs']],[3,'isFriendFeed']],[[5],[[7],[3,'groupId']]]]]])
Z([[2,'&&'],[[2,'==='],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'openid']],[[7],[3,'userOpenId']]],[[2,'==='],[[7],[3,'sourceId']],[1,'profile']]])
Z([[2,'=='],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'type']],[1,4]])
Z([[12],[[6],[[7],[3,'Util']],[3,'isFromMyRecommendList']],[[5],[[7],[3,'sourceId']]]])
Z([3,'user-base-info'])
Z([3,'long-press-wrap'])
Z([3,'onAvatarLongPress'])
Z([3,'openProfile'])
Z([3,'user-avatar'])
Z([1,true])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'sender']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'inGroup']],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'sender']],[3,'is_star_member']]],[[2,'==='],[[7],[3,'pageName']],[1,'group-profile']]],[[2,'!'],[[7],[3,'restrictInteract']]]])
Z([[7],[3,'showStarPopMask']])
Z([[7],[3,'showStarPop']])
Z([[2,'==='],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'openid']],[[7],[3,'userOpenId']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[1,0],[[2,'!=='],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'openid']],[[7],[3,'userOpenId']]]],[[2,'!'],[[7],[3,'restrictInteract']]]],[[2,'!=='],[[7],[3,'sourceId']],[1,'group-feed-detail']]],[[2,'!=='],[[7],[3,'sourceId']],[1,'recommend-detail']]],[[6],[[7],[3,'groupFeedReasons']],[3,'length']]])
Z([3,'richContent'])
Z([[2,'||'],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment']],[[6],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'forward_item']],[3,'original_feed']],[3,'info']],[3,'comment']]])
Z([3,'text-content'])
Z([[6],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'forward_item']],[3,'original_feed']],[3,'info']],[3,'comment']])
Z([3,'emitGroupFeedChange'])
Z([3,'rgba(0,0,0,0.9)'])
Z(z[26])
Z([[6],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'forward_item']],[3,'original_feed']],[3,'info']],[3,'commentArr']])
Z([[2,'-'],[[7],[3,'screenWidth']],[1,32]])
Z([[2,'?:'],[[2,'!='],[[7],[3,'sourceId']],[1,'group-feed-detail']],[1,3],[1,0]])
Z([[7],[3,'upsideDown']])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment']])
Z(z[27])
Z(z[28])
Z(z[34])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'commentArr']])
Z(z[31])
Z(z[32])
Z(z[33])
Z([[2,'||'],[[12],[[6],[[7],[3,'Util']],[3,'isFromMyRecommendList']],[[5],[[7],[3,'sourceId']]]],[[2,'&&'],[[2,'&&'],[[12],[[6],[[7],[3,'UtilWxs']],[3,'isForwardFeed']],[[5],[[7],[3,'groupId']]]],[[2,'!'],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'forward_list']],[3,'length']]]],[[2,'!'],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment_list']],[3,'length']]]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[12],[[6],[[7],[3,'UtilWxs']],[3,'isFriendFeed']],[[5],[[7],[3,'groupId']]]]],[[2,'!'],[[12],[[6],[[7],[3,'UtilWxs']],[3,'isForwardFeed']],[[5],[[7],[3,'groupId']]]]]],[[7],[3,'groupInfo']]],[[12],[[6],[[7],[3,'Util']],[3,'showGroupName']],[[5],[[5],[[5],[[7],[3,'fromScene']]],[[7],[3,'sourceId']]],[[7],[3,'currentPageIndex']]]]])
Z([3,'toGroupFeedList'])
Z([3,'bottom-wrap-inner'])
Z([3,'hover_color-btn'])
Z(z[3])
Z([1,16])
Z([[6],[[7],[3,'groupInfo']],[3,'head_img_url']])
Z([[7],[3,'likeTipShow']])
Z([[7],[3,'forwardCommentTipShow']])
Z([[7],[3,'flatMode']])
Z([[12],[[6],[[7],[3,'UtilWxs']],[3,'isFriendFeed']],[[5],[[7],[3,'groupId']]]])
Z([[2,'||'],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'like_info']],[3,'length']],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment_list']],[3,'length']]])
Z([[6],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'like_info']],[3,'length']])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'like_info']])
Z([3,'openid'])
Z([[2,'>'],[[7],[3,'index']],[1,0]])
Z([[12],[[6],[[7],[3,'UtilWxs']],[3,'isForwardFeed']],[[5],[[7],[3,'groupId']]]])
Z([[2,'||'],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'forward_list']],[3,'length']],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment_list']],[3,'length']]])
Z([[6],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'forward_list']],[3,'length']])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'forward_list']])
Z(z[57])
Z(z[58])
Z([[6],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment_list']],[3,'length']])
Z([3,'commentIdx'])
Z([3,'commentItem'])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment_list']])
Z([3,'comment_id'])
Z([[2,'&&'],[[6],[[7],[3,'commentItem']],[3,'sender']],[[6],[[7],[3,'commentItem']],[3,'receiver']]])
Z([3,'toReply'])
Z([3,'reply-line'])
Z([[7],[3,'commentItem']])
Z([[7],[3,'commentIdx']])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment_id']])
Z([[6],[[7],[3,'commentItem']],[3,'request_reply_comment_id']])
Z([[2,'-'],[1,1]])
Z([[6],[[7],[3,'commentItem']],[3,'openid']])
Z([[6],[[7],[3,'commentItem']],[3,'request_to_type']])
Z([[6],[[7],[3,'ReplyType']],[[6],[[7],[3,'commentItem']],[3,'to_type']]])
Z([3,'hover_white-btn'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'comment_'],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'id']]],[1,'_']],[[6],[[7],[3,'commentItem']],[3,'comment_id']]],[1,'_']],[[6],[[7],[3,'commentItem']],[3,'request_to_type']]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'commentItem']],[3,'to_type']],[1,5]],[[2,'=='],[[6],[[7],[3,'commentItem']],[3,'to_type']],[1,2]]])
Z([[2,'&&'],[[6],[[7],[3,'commentItem']],[3,'commentArr']],[[6],[[6],[[7],[3,'commentItem']],[3,'commentArr']],[3,'length']]])
Z([[6],[[7],[3,'commentItem']],[3,'commentArr']])
Z([[2,'+'],[[6],[[7],[3,'item']],[3,'type']],[[6],[[7],[3,'item']],[3,'value']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'txt']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'url']])
Z([3,'onUrlTap'])
Z([3,'url-inline'])
Z([[6],[[7],[3,'item']],[3,'value']])
Z(z[16])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'face']])
Z([[2,'=='],[[7],[3,'sourceId']],[1,'group-feed-detail']])
Z([[2,'&&'],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'like_count']],[[12],[[6],[[7],[3,'UtilWxs']],[3,'isFriendFeed']],[[5],[[7],[3,'groupId']]]]])
Z([3,'like-list-inner'])
Z(z[56])
Z(z[57])
Z(z[58])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'like_has_more']])
Z(z[55])
Z(z[59])
Z(z[62])
Z(z[57])
Z(z[58])
Z([[2,'||'],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'like_info']],[3,'length']],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'forward_list']],[3,'length']]])
Z([[2,'||'],[[12],[[6],[[7],[3,'UtilWxs']],[3,'isForwardFeed']],[[5],[[7],[3,'groupId']]]],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment_count']]])
Z([3,'outer-comment-list'])
Z(z[59])
Z(z[66])
Z(z[67])
Z(z[68])
Z(z[69])
Z(z[70])
Z([3,'outer-comment-item'])
Z(z[14])
Z([3,'comment-item__avatar'])
Z([[6],[[7],[3,'commentItem']],[3,'sender']])
Z([3,'avatar'])
Z([[2,'&&'],[[6],[[6],[[7],[3,'commentItem']],[3,'sender']],[3,'headimgurl']],[[2,'+'],[[6],[[6],[[7],[3,'commentItem']],[3,'sender']],[3,'headimgurl']],[1,'/64']]])
Z([3,'comment-item__info'])
Z(z[71])
Z(z[72])
Z(z[73])
Z(z[74])
Z(z[75])
Z([3,'comment'])
Z(z[76])
Z(z[77])
Z(z[78])
Z(z[79])
Z([3,'reply'])
Z(z[81])
Z(z[82])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'commentItem']],[3,'to_type']],[1,2]],[[2,'=='],[[6],[[7],[3,'commentItem']],[3,'to_type']],[1,5]]])
Z(z[84])
Z(z[85])
Z(z[86])
Z(z[87])
Z(z[88])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[16])
Z(z[93])
Z([[2,'||'],[[6],[[6],[[7],[3,'commentItem']],[3,'reply']],[3,'length']],[[6],[[7],[3,'commentItem']],[3,'reply_count']]])
Z([3,'reply-list'])
Z([3,'replyIdx'])
Z([3,'replyItem'])
Z([[6],[[7],[3,'commentItem']],[3,'reply']])
Z(z[69])
Z([[2,'&&'],[[6],[[7],[3,'replyItem']],[3,'sender']],[[6],[[7],[3,'replyItem']],[3,'receiver']]])
Z(z[71])
Z(z[72])
Z([[7],[3,'replyItem']])
Z(z[74])
Z(z[75])
Z(z[127])
Z(z[76])
Z([[7],[3,'replyIdx']])
Z([[6],[[7],[3,'replyItem']],[3,'openid']])
Z([1,5])
Z([3,'reply-reply'])
Z(z[46])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'comment_'],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'id']]],[1,'_']],[[6],[[7],[3,'replyItem']],[3,'comment_id']]],[1,'_5']])
Z([[2,'=='],[[6],[[7],[3,'replyItem']],[3,'to_type']],[1,5]])
Z([[2,'&&'],[[6],[[7],[3,'replyItem']],[3,'replyArr']],[[6],[[6],[[7],[3,'replyItem']],[3,'replyArr']],[3,'length']]])
Z([[6],[[7],[3,'replyItem']],[3,'replyArr']])
Z(z[86])
Z(z[87])
Z(z[88])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[16])
Z(z[93])
Z([[6],[[7],[3,'commentItem']],[3,'reply_has_more']])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment_has_more']])
Z([[7],[3,'showActionSheet']])
Z([3,'hideActionSheet'])
Z([3,'clickActionSheet'])
Z([[7],[3,'actionSheetItems']])
Z([3,'display: block;'])
Z([[7],[3,'actionSheetTitle']])
Z([3,'onPanelAnimationFinish'])
Z([3,'closePanel'])
Z([[7],[3,'showPanel']])
Z([3,'9000'])
Z([[2,'||'],[[7],[3,'showPanel']],[[7],[3,'showPanelInner']]])
Z([3,'panel-ctr'])
Z([[2,'=='],[[7],[3,'panelType']],[1,'forward-comment']])
Z(z[187])
Z([a,[3,'height: '],[[2,'-'],[[2,'*'],[[7],[3,'screenHeight']],[1,0.75]],[1,48]],[3,'px;']])
Z([3,'onPanelScroll'])
Z([3,'onPanelReachBottom'])
Z([3,'panel-content'])
Z([[7],[3,'panelScrollTop']])
Z([a,[3,'height: calc(100% - '],[[2,'?:'],[[7],[3,'inputFocus']],[[2,'+'],[[7],[3,'keyboardHeight']],[[7],[3,'inputHeight']]],[[2,'?:'],[[2,'=='],[[7],[3,'phoneModel']],[1,'iPhoneX']],[[2,'+'],[[7],[3,'inputHeight']],[1,34]],[[7],[3,'inputHeight']]]],[3,'px);']])
Z([3,'panel-content-inner'])
Z([a,[3,'transform: translateY('],[[2,'?:'],[[7],[3,'inputFocus']],[[7],[3,'growInputOffset']],[1,0]],z[198][3]])
Z([[2,'&&'],[[12],[[6],[[7],[3,'UtilWxs']],[3,'isFriendFeed']],[[5],[[7],[3,'groupId']]]],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'like_count']]])
Z(z[96])
Z(z[56])
Z(z[57])
Z(z[58])
Z(z[100])
Z(z[55])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment_count']])
Z(z[66])
Z(z[67])
Z(z[68])
Z(z[69])
Z(z[70])
Z(z[115])
Z(z[14])
Z(z[117])
Z(z[118])
Z(z[119])
Z(z[120])
Z(z[121])
Z(z[71])
Z(z[72])
Z(z[73])
Z(z[74])
Z(z[75])
Z(z[127])
Z(z[76])
Z(z[77])
Z(z[78])
Z(z[79])
Z(z[132])
Z(z[81])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'msg_'],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'id']]],[1,'_']],[[6],[[7],[3,'commentItem']],[3,'comment_id']]])
Z(z[135])
Z(z[84])
Z(z[85])
Z(z[86])
Z(z[87])
Z(z[88])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[16])
Z(z[93])
Z(z[146])
Z(z[147])
Z(z[148])
Z(z[149])
Z(z[150])
Z(z[69])
Z(z[152])
Z(z[71])
Z(z[72])
Z(z[155])
Z(z[74])
Z(z[75])
Z(z[127])
Z(z[76])
Z(z[160])
Z(z[161])
Z(z[162])
Z(z[163])
Z(z[46])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'msg_'],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'id']]],[1,'_']],[[6],[[7],[3,'replyItem']],[3,'comment_id']]])
Z(z[166])
Z(z[167])
Z(z[168])
Z(z[86])
Z(z[87])
Z(z[88])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[16])
Z(z[93])
Z(z[177])
Z(z[178])
Z([[2,'<='],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'comment_count']],[1,0]])
Z([3,'onFaceDelete'])
Z([3,'onFaceInput'])
Z([3,'onFaceRefocus'])
Z([3,'onFacePanelShow'])
Z([3,'face-btn'])
Z([1,32])
Z([a,z[200][1],[[12],[[6],[[7],[3,'Util']],[3,'getInputBottom']],[[5],[[5],[[5],[[5],[[7],[3,'inputFocus']]],[[7],[3,'keyboardHeight']]],[[7],[3,'faceFocus']]],[[7],[3,'facePanelHeight']]]],z[198][3]])
Z(z[284])
Z([[7],[3,'faceFocus']])
Z([3,'onClickChooseReason'])
Z([[7],[3,'ignoreDialogChoices']])
Z([[7],[3,'ignoreClickPosition']])
Z([[7],[3,'showIgnoreDialog']])
Z([3,'onModalCancel'])
Z([3,'onModalConfirm'])
Z([[6],[[7],[3,'modal']],[3,'confirmText']])
Z([[6],[[7],[3,'modal']],[3,'content']])
Z([[6],[[7],[3,'modal']],[3,'inputPlaceHolder']])
Z([[6],[[7],[3,'modal']],[3,'needInput']])
Z([[6],[[7],[3,'modal']],[3,'show']])
Z([[6],[[7],[3,'modal']],[3,'showCancel']])
Z([[6],[[7],[3,'modal']],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'?:'],[[2,'||'],[[7],[3,'isGroupApp']],[[2,'>='],[[7],[3,'index']],[[7],[3,'titleIndex']]]],[1,'wrapGroupApp'],[1,'wrap']])
Z([[2,'=='],[[7],[3,'GROUP_ID_FORWARD']],[[6],[[6],[[7],[3,'viewModel']],[3,'group_item']],[3,'id']]])
Z([3,'toProfile'])
Z([3,'group-title'])
Z([3,'hover'])
Z([3,'200'])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'group_item']],[3,'unread_count']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isGroupApp']]],[[2,'>'],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'group_item']],[3,'abstract_feed']],[3,'length']],[1,0]]])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'group_item']],[3,'abstract_feed']])
Z([3,'id'])
Z([[2,'<'],[[7],[3,'index']],[1,2]])
Z(z[2])
Z([3,'image-inner'])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'hover_cover_color-btn'])
Z(z[5])
Z([3,'image'])
Z([3,'aspectFill'])
Z([3,'img'])
Z([[2,'&&'],[[6],[[6],[[6],[[7],[3,'item']],[3,'item_ext_info']],[1,0]],[3,'item_url']],[[2,'+'],[[6],[[6],[[6],[[7],[3,'item']],[3,'item_ext_info']],[1,0]],[3,'item_url']],[1,'/360']]])
Z([[2,'=='],[[7],[3,'index']],[[7],[3,'titleIndex']]])
Z(z[2])
Z([a,[3,'group-info '],[[2,'?:'],[[2,'>'],[[7],[3,'index']],[[7],[3,'titleIndex']]],[1,'has-border'],[1,'']]])
Z(z[4])
Z(z[5])
Z(z[6])
Z([1,48])
Z([[2,'||'],[[6],[[6],[[7],[3,'viewModel']],[3,'group_item']],[3,'head_img_url']],[1,'/assets/icon-group-default.png']])
Z([3,'group-info__bottom'])
Z(z[6])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'viewModel']],[3,'group_item']],[[6],[[6],[[7],[3,'viewModel']],[3,'group_item']],[3,'abstract_feed']]],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'group_item']],[3,'abstract_feed']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'viewModel']])
Z([3,'onClickShareFeedDetail'])
Z([3,'onDeleteByItem'])
Z([3,'onInputHide'])
Z([3,'onInputPop'])
Z([3,'onInputShow'])
Z([3,'onUpdateProduct'])
Z([[7],[3,'currentFocusId']])
Z([[7],[3,'fromScene']])
Z([[7],[3,'groupFeedReasons']])
Z([[7],[3,'groupId']])
Z([[7],[3,'groupInfo']])
Z([[7],[3,'groupName']])
Z([[7],[3,'inGroup']])
Z([[7],[3,'isSystemGroup']])
Z([[7],[3,'pageName']])
Z([[7],[3,'recommentIdKey']])
Z([[7],[3,'restrictInteract']])
Z([[7],[3,'sourceId']])
Z([[7],[3,'ticketParams']])
Z([[7],[3,'upsideDown']])
Z(z[0])
Z([3,'product'])
Z([3,'richContent'])
Z([[2,'||'],[[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'type']],[1,4]],[[2,'!'],[[6],[[12],[[6],[[7],[3,'Util']],[3,'getProductImages']],[[5],[[7],[3,'viewModel']]]],[3,'length']]]],[[2,'&&'],[[2,'!='],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'type']],[1,4]],[[2,'!'],[[6],[[12],[[6],[[7],[3,'Util']],[3,'getProductImages']],[[5],[[7],[3,'viewModel']]]],[3,'length']]]]])
Z([[2,'?:'],[[2,'&&'],[[2,'!='],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'type']],[1,4]],[[2,'!'],[[6],[[12],[[6],[[7],[3,'Util']],[3,'getProductImages']],[[5],[[7],[3,'viewModel']]]],[3,'length']]]],[1,'toShareProductDetail'],[1,'']])
Z([a,[3,'product-thumb '],[[2,'?:'],[[12],[[6],[[7],[3,'Util']],[3,'isFromMyRecommendList']],[[5],[[7],[3,'sourceId']]]],[1,'product-thumb-my-recommend-list'],[1,'']]])
Z([[2,'?:'],[[2,'||'],[[12],[[6],[[7],[3,'Util']],[3,'isFromMyRecommendList']],[[5],[[7],[3,'sourceId']]]],[[2,'&&'],[[2,'!='],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'type']],[1,4]],[[2,'!'],[[6],[[12],[[6],[[7],[3,'Util']],[3,'getProductImages']],[[5],[[7],[3,'viewModel']]]],[3,'length']]]]],[1,'hover_white-cell'],[1,'']])
Z([3,'200'])
Z([[2,'||'],[[12],[[6],[[7],[3,'Util']],[3,'isFromMyRecommendList']],[[5],[[7],[3,'sourceId']]]],[[2,'&&'],[[2,'!='],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'type']],[1,4]],[[2,'!'],[[6],[[12],[[6],[[7],[3,'Util']],[3,'getProductImages']],[[5],[[7],[3,'viewModel']]]],[3,'length']]]]])
Z([[2,'!'],[[12],[[6],[[7],[3,'Util']],[3,'isFromMyRecommendList']],[[5],[[7],[3,'sourceId']]]]])
Z([3,'icon-product'])
Z(z[31])
Z([3,'aspectFill'])
Z([3,'img'])
Z([[6],[[6],[[6],[[12],[[6],[[7],[3,'Util']],[3,'getProduct']],[[5],[[5],[[7],[3,'viewModel']]],[1,0]]],[3,'product_item']],[3,'image_list']],[1,0]])
Z([[2,'&&'],[1,false],[[2,'=='],[[6],[[12],[[6],[[7],[3,'Util']],[3,'getOriginalFeed']],[[5],[[7],[3,'viewModel']]]],[3,'appid']],[1,'wxada7aab80ba27074']]])
Z([[2,'&&'],[1,false],[[7],[3,'isMusic']]])
Z([[2,'=='],[[6],[[12],[[6],[[7],[3,'Util']],[3,'getOriginalFeed']],[[5],[[7],[3,'viewModel']]]],[3,'appid']],[1,'wxada7aab80ba27074']])
Z([3,'icon-product icon-product-my-recomment-list'])
Z(z[39])
Z(z[33])
Z(z[34])
Z(z[35])
Z(z[36])
Z(z[37])
Z([[2,'||'],[[2,'!='],[[7],[3,'sourceId']],[1,'group-feed-detail']],[[2,'=='],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'type']],[1,4]]])
Z([[12],[[6],[[7],[3,'Util']],[3,'getProductImages']],[[5],[[7],[3,'viewModel']]]])
Z([3,'url'])
Z([[2,'<'],[[7],[3,'index']],[1,3]])
Z([3,'forward-thumb-inner'])
Z([3,'forward-thumb'])
Z([[6],[[7],[3,'item']],[3,'url']])
Z(z[33])
Z(z[34])
Z([3,'360'])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'url']],[[2,'+'],[[6],[[7],[3,'item']],[3,'url']],[1,'/360']]])
Z([[6],[[7],[3,'item']],[3,'isVideo']])
Z([[2,'&&'],[[2,'=='],[[7],[3,'index']],[1,0]],[[2,'||'],[[12],[[6],[[7],[3,'Util']],[3,'hasProduct']],[[5],[[7],[3,'viewModel']]]],[[12],[[6],[[7],[3,'Util']],[3,'hasPoi']],[[5],[[7],[3,'viewModel']]]]]])
Z([3,'icon-tags'])
Z([[12],[[6],[[7],[3,'Util']],[3,'hasProduct']],[[5],[[7],[3,'viewModel']]]])
Z([[12],[[6],[[7],[3,'Util']],[3,'hasPoi']],[[5],[[7],[3,'viewModel']]]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'index']],[1,2]],[[2,'>'],[[6],[[12],[[6],[[7],[3,'Util']],[3,'getProductImages']],[[5],[[7],[3,'viewModel']]]],[3,'length']],[1,3]]])
Z([[6],[[7],[3,'viewModel']],[3,'video_item']])
Z([3,'toProductDetail'])
Z([3,'toShareProductDetail'])
Z([3,'onClickFav'])
Z(z[10])
Z([[6],[[7],[3,'viewModel']],[3,'is_want_buy']])
Z(z[0])
Z([[2,'!'],[[2,'!'],[[6],[[6],[[7],[3,'viewModel']],[3,'product_item']],[3,'src_wxapp_id']]]])
Z(z[70])
Z(z[18])
Z([[7],[3,'width']])
Z([[7],[3,'videoAutoDirection']])
Z([[7],[3,'videoAutoPlay']])
Z([[2,'&&'],[1,false],[[7],[3,'videoControllable']]])
Z(z[63])
Z([3,'100%'])
Z([3,'contain'])
Z(z[75])
Z([[6],[[7],[3,'viewModel']],[3,'product_item']])
Z([1,true])
Z(z[75])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'video_item']],[3,'url']])
Z([[2,'!'],[[7],[3,'videoAutoPlay']]])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'video_item']],[3,'thumb_url']])
Z(z[78])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'ugcImageList']],[3,'length']])
Z([[6],[[7],[3,'viewModel']],[3,'appid']])
Z([3,'toArticleList'])
Z([3,'toContactSeller'])
Z(z[64])
Z([3,'toGEO'])
Z([3,'toShare'])
Z(z[65])
Z(z[66])
Z(z[10])
Z(z[68])
Z([[6],[[7],[3,'viewModel']],[3,'ugcImageList']])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'product_item']],[3,'firstPoi']])
Z(z[0])
Z([[2,'&&'],[[2,'&&'],[[2,'>'],[[6],[[6],[[7],[3,'viewModel']],[3,'articleList']],[3,'length']],[1,0]],[[6],[[7],[3,'viewModel']],[3,'appid']]],[[6],[[6],[[7],[3,'viewModel']],[3,'product_item']],[3,'item_code']]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'showContact']],[[6],[[7],[3,'viewModel']],[3,'appid']]],[[6],[[6],[[7],[3,'viewModel']],[3,'product_item']],[3,'item_code']]])
Z([[2,'&&'],[[6],[[7],[3,'viewModel']],[3,'appid']],[[6],[[6],[[7],[3,'viewModel']],[3,'product_item']],[3,'item_code']]])
Z(z[104])
Z(z[104])
Z(z[18])
Z([[2,'?:'],[[2,'||'],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'item_ext_info']],[3,'length']],[[6],[[7],[3,'viewModel']],[3,'isUGC']]],[[2,'?:'],[[2,'=='],[[6],[[6],[[7],[3,'viewModel']],[3,'info']],[3,'openid']],[[7],[3,'userOpenId']]],[1,''],[1,'']],[1,'']])
Z(z[73])
Z([[7],[3,'showActionSheet']])
Z([3,'hideActionSheet'])
Z([3,'clickActionSheet'])
Z([[7],[3,'actionSheetItems']])
Z([3,'display: block;'])
Z([[7],[3,'actionSheetTitle']])
Z([[7],[3,'showCanvas']])
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onLongPress'])
Z([3,'onTap'])
Z([3,'onTouchEnd'])
Z([a,[3,'word-break: break-all; '],[[2,'?:'],[[7],[3,'isinline']],[1,'display: inline;'],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'!'],[[7],[3,'loaded']]],[[7],[3,'placeholder']]])
Z([[2,'=='],[[7],[3,'placeholder']],[1,'img']])
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'favor_item']],[3,'friend_list']],[3,'length']],[1,0]])
Z([3,'commentIdx'])
Z([3,'commentItem'])
Z([[6],[[6],[[7],[3,'viewModel']],[3,'favor_item']],[3,'friend_list']])
Z([3,'comment_id'])
Z([[2,'?:'],[[7],[3,'showMeOnly']],[[2,'=='],[[6],[[7],[3,'commentItem']],[3,'uin']],[[7],[3,'userUin']]],[1,1]])
Z([3,'product-comment-item-container'])
Z([[2,'?:'],[[7],[3,'timeline']],[1,'padding-top: 0;'],[1,'']])
Z([[2,'!'],[[7],[3,'timeline']]])
Z([[2,'!'],[[2,'&&'],[[6],[[7],[3,'commentItem']],[3,'msglist']],[[6],[[6],[[7],[3,'commentItem']],[3,'msglist']],[3,'length']]]])
Z([3,'onScroll'])
Z([3,'comment-scroll-view'])
Z([[2,'+'],[[7],[3,'currentScrollDistance']],[[7],[3,'scrollDistance']]])
Z([[2,'+'],[[2,'+'],[1,'max-height:'],[[2,'-'],[[2,'*'],[[7],[3,'screenHeight']],[1,0.7]],[1,100]]],[1,'px']])
Z([3,'comment-item-content'])
Z([[2,'?:'],[[7],[3,'timeline']],[1,''],[1,'toReply']])
Z([3,'comment-item-inner'])
Z([[7],[3,'commentItem']])
Z([[7],[3,'commentIdx']])
Z([3,'ask'])
Z([[2,'?:'],[[2,'||'],[[2,'||'],[[2,'==='],[[7],[3,'userUin']],[[6],[[7],[3,'commentItem']],[3,'uin']]],[[2,'=='],[[6],[[6],[[6],[[7],[3,'viewModel']],[3,'favor_item']],[3,'key']],[3,'type']],[1,5]]],[[7],[3,'timeline']]],[1,''],[1,'hover']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'msg_'],[[6],[[6],[[7],[3,'viewModel']],[3,'favor_item']],[3,'favor_id']]],[1,'_']],[[6],[[7],[3,'commentItem']],[3,'comment_id']]])
Z([[2,'&&'],[[6],[[7],[3,'commentItem']],[3,'comment']],[[2,'!'],[[7],[3,'timeline']]]])
Z([3,'commentSplitItem'])
Z([[6],[[7],[3,'commentItem']],[3,'commentSplit']])
Z([[2,'!'],[[2,'!'],[[7],[3,'commentSplitItem']]]])
Z([[6],[[7],[3,'showUnfoldMap']],[[2,'+'],[[6],[[6],[[7],[3,'viewModel']],[3,'favor_item']],[3,'favor_id']],[[6],[[7],[3,'commentItem']],[3,'comment_id']]]])
Z([[2,'&&'],[[6],[[7],[3,'commentItem']],[3,'item_url']],[[6],[[6],[[7],[3,'commentItem']],[3,'item_url']],[3,'length']]])
Z([3,'imgIdx'])
Z([3,'imgItem'])
Z([[6],[[7],[3,'commentItem']],[3,'item_url']])
Z([3,'*this'])
Z([[2,'<'],[[7],[3,'imgIdx']],[1,4]])
Z([3,'previewImage'])
Z([3,'image-item'])
Z(z[18])
Z([[7],[3,'imgIdx']])
Z([3,'true'])
Z([3,'width: 72px;height: 72px; min-width: 72px; position: relative;'])
Z([1,true])
Z([3,'aspectFill'])
Z([[2,'+'],[[7],[3,'imgItem']],[1,'/162']])
Z([[2,'&&'],[[2,'=='],[[7],[3,'imgIdx']],[1,3]],[[2,'>'],[[6],[[6],[[7],[3,'commentItem']],[3,'item_url']],[3,'length']],[1,4]]])
Z([[7],[3,'timeline']])
Z([3,'item-time-container'])
Z([[6],[[6],[[6],[[7],[3,'viewModel']],[3,'favor_item']],[3,'visible_friend_list']],[3,'length']])
Z([3,'showLikeIcons'])
Z([3,'item-like-icon-wrap'])
Z(z[17])
Z(z[18])
Z(z[19])
Z(z[37])
Z([[2,'==='],[[7],[3,'showIcons']],[[7],[3,'commentIdx']]])
Z(z[52])
Z([[7],[3,'IconList']])
Z([[2,'<'],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'IconList']],[3,'length']],[1,1]]])
Z([[2,'||'],[[2,'&&'],[[6],[[7],[3,'commentItem']],[3,'msglist']],[[6],[[6],[[7],[3,'commentItem']],[3,'msglist']],[3,'length']]],[[2,'&&'],[[6],[[7],[3,'commentItem']],[3,'like_info']],[[6],[[6],[[7],[3,'commentItem']],[3,'like_info']],[3,'length']]]])
Z([[2,'&&'],[[6],[[7],[3,'commentItem']],[3,'msglist']],[[6],[[6],[[7],[3,'commentItem']],[3,'msglist']],[3,'length']]])
Z([3,'replyIdx'])
Z([3,'replyItem'])
Z([[6],[[7],[3,'commentItem']],[3,'msglist']])
Z(z[4])
Z([[2,'&&'],[[6],[[7],[3,'replyItem']],[3,'sender']],[[6],[[7],[3,'replyItem']],[3,'receiver']]])
Z([3,'toReply'])
Z([3,'reply-item'])
Z(z[17])
Z(z[18])
Z([[7],[3,'replyItem']])
Z([[7],[3,'replyIdx']])
Z([3,'reply'])
Z([3,'hover'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'msg_'],[[6],[[6],[[7],[3,'viewModel']],[3,'favor_item']],[3,'favor_id']]],[1,'_']],[[6],[[7],[3,'replyItem']],[3,'comment_id']]])
Z([[2,'?:'],[[2,'==='],[[2,'-'],[[6],[[6],[[7],[3,'commentItem']],[3,'msglist']],[3,'length']],[1,1]],[[7],[3,'replyIdx']]],[1,'margin-bottom: 0;'],[1,'']])
Z([[2,'!=='],[[6],[[7],[3,'replyItem']],[3,'to_type']],[1,1]])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'replyItem']],[3,'commentSplit']]]])
Z(z[23])
Z([[6],[[7],[3,'replyItem']],[3,'commentSplit']])
Z(z[25])
Z([[2,'>'],[[7],[3,'scrollDistance']],[1,0]])
Z([[7],[3,'showFakeInput']])
Z([[7],[3,'showActionSheet']])
Z([3,'hideActionSheet'])
Z([3,'clickActionSheet'])
Z([[7],[3,'actionSheetItems']])
Z([3,'display: block;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!=='],[[7],[3,'pageScroll']],[1,'bottom']])
Z([a,[3,'wrap wrap--'],[[7],[3,'phoneModel']]])
Z([a,[3,'header '],[[2,'?:'],[[7],[3,'isMe']],[[2,'?:'],[[2,'||'],[[2,'!'],[[7],[3,'isShowEntryComplete']]],[[2,'&&'],[[7],[3,'isGetCreateGroupComplete']],[[7],[3,'canCreateGroup']]]],[1,''],[1,'border-bottom']],[[2,'?:'],[[7],[3,'signature']],[1,'border-bottom'],[1,'header-no-signature']]]])
Z([3,'onClickCoverImg'])
Z([3,'cover-img-wrap'])
Z([a,[3,'height: '],[[2,'?:'],[[2,'==='],[[7],[3,'phoneModel']],[1,'iPhoneX']],[[2,'+'],[1,229],[1,44]],[1,229]],[3,'px;']])
Z([[7],[3,'coverImageUrl']])
Z([3,'cover-img'])
Z([3,'aspectFill'])
Z([3,'750'])
Z(z[6])
Z([[7],[3,'isGetUserProfileComplete']])
Z([a,[3,'cover-img-mask show-mask linear-gradient '],[[2,'?:'],[[7],[3,'coverImageUrl']],[1,''],[1,'show-mask']]])
Z([3,'image-view-dom'])
Z([3,'width: 100%; height: 100%; z-index: 1; transform:scale(1.15);'])
Z(z[8])
Z(z[9])
Z([[6],[[7],[3,'userInfo']],[3,'headimgurl']])
Z(z[13])
Z([3,'width: 100%; height: 100%; filter: blur(10px); transform:scale(1.15);'])
Z(z[8])
Z(z[9])
Z(z[17])
Z([3,'user-wrap'])
Z([3,'aspectFit'])
Z([[2,'?:'],[[6],[[7],[3,'userInfo']],[3,'headimgurl']],[1,''],[1,'avatar']])
Z(z[17])
Z([3,'flex-shrink: 0; width:49px;height:49px;border-radius:4px;overflow: hidden;'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'isMe']]],[[7],[3,'isGetUserProfileComplete']]],[[2,'=='],[[7],[3,'inGroup']],[1,1]]],[[2,'!=='],[[7],[3,'groupId']],[[7],[3,'firendGroupId']]]])
Z([[2,'||'],[[7],[3,'signature']],[[2,'&&'],[[7],[3,'isMe']],[[12],[[6],[[7],[3,'Scene']],[3,'isFromIndex']],[[5],[[7],[3,'fromScene']]]]]])
Z([3,'onSignatureEdit'])
Z([3,'desc-wrap'])
Z([3,'signature'])
Z([[2,'?:'],[[2,'&&'],[[7],[3,'isMe']],[[12],[[6],[[7],[3,'Scene']],[3,'isFromIndex']],[[5],[[7],[3,'fromScene']]]]],[1,'opacity'],[1,'']])
Z([[2,'&&'],[[7],[3,'isMe']],[[12],[[6],[[7],[3,'Scene']],[3,'isFromIndex']],[[5],[[7],[3,'fromScene']]]]])
Z([[12],[[6],[[7],[3,'Scene']],[3,'isFromIndex']],[[5],[[7],[3,'fromScene']]]])
Z([[2,'&&'],[[7],[3,'isMe']],[[2,'||'],[[7],[3,'canCreateGroup']],[[7],[3,'hasInviteCode']]]])
Z([3,'group-wrap'])
Z([[7],[3,'canCreateGroup']])
Z([[7],[3,'hasInviteCode']])
Z([3,'toInviteCodeList'])
Z([3,'invite-code-wrap'])
Z([3,'opacity'])
Z([[7],[3,'showInviteRed']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isShowLoading']]],[[7],[3,'virtualRecommendListLen']]])
Z([3,'section bottom'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'profileShowAllFavor']]],[[7],[3,'isMe']]])
Z([[7],[3,'groupName']])
Z([[7],[3,'isShowLoading']])
Z([3,'正在加载...'])
Z([1,true])
Z([[7],[3,'virtualRecommendListLen']])
Z([[7],[3,'isGroupApp']])
Z([[7],[3,'bottomTip']])
Z([[2,'&&'],[[7],[3,'hasMore']],[[7],[3,'bottomTip']]])
Z([3,'waterfall-wrap'])
Z([[7],[3,'leftWaterfallIds']])
Z([3,'*this'])
Z([[2,'&&'],[[6],[[7],[3,'allFeedMap']],[[7],[3,'item']]],[[2,'!'],[[6],[[6],[[7],[3,'allFeedMap']],[[7],[3,'item']]],[3,'deleted']]]])
Z([[7],[3,'groupId']])
Z([3,''])
Z([[6],[[7],[3,'allFeedMap']],[[7],[3,'item']]])
Z([[7],[3,'rightWaterfallIds']])
Z(z[57])
Z(z[58])
Z(z[59])
Z(z[60])
Z(z[61])
Z(z[53])
Z(z[54])
Z([[7],[3,'allFeedIds']])
Z(z[57])
Z(z[58])
Z([3,'onApplyJoinGroup'])
Z([3,'onApplyJoinAndComment'])
Z([3,'onJoinGroup'])
Z([a,[[7],[3,'item']],[3,'}']])
Z(z[61])
Z([[2,'?:'],[[12],[[6],[[7],[3,'Util']],[3,'isFriendFeed']],[[5],[[6],[[6],[[6],[[7],[3,'allFeedMap']],[[7],[3,'item']]],[3,'info']],[3,'group_id']]]],[1,''],[[6],[[6],[[6],[[7],[3,'allFeedMap']],[[7],[3,'item']]],[3,'info']],[3,'group_id']]])
Z([[6],[[6],[[6],[[7],[3,'allFeedMap']],[[7],[3,'item']]],[3,'info']],[3,'group_name']])
Z([[7],[3,'inGroup']])
Z([[7],[3,'pageName']])
Z([[2,'&&'],[[2,'&&'],[[6],[[6],[[6],[[7],[3,'allFeedMap']],[[7],[3,'item']]],[3,'info']],[3,'group_id']],[[2,'!='],[[6],[[6],[[6],[[7],[3,'allFeedMap']],[[7],[3,'item']]],[3,'info']],[3,'group_id']],[1,'0']]],[[2,'!'],[[6],[[6],[[7],[3,'groupMap']],[[2,'+'],[[7],[3,'GROUP_ID_PREFIX']],[[6],[[6],[[6],[[7],[3,'allFeedMap']],[[7],[3,'item']]],[3,'info']],[3,'group_id']]]],[3,'self_in_group']]]])
Z([3,'profile'])
Z([[12],[[6],[[7],[3,'Ticket']],[3,'ticketParams']],[[5],[[6],[[6],[[7],[3,'groupMap']],[[2,'+'],[[7],[3,'GROUP_ID_PREFIX']],[[6],[[6],[[6],[[7],[3,'allFeedMap']],[[7],[3,'item']]],[3,'info']],[3,'group_id']]]],[3,'ticket']]]])
Z([1,false])
Z(z[61])
Z([[7],[3,'isGetFirstFeedPartcomplete']])
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
function gz$gwx_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx_54)return __WXML_GLOBAL__.ops_cached.$gwx_54
__WXML_GLOBAL__.ops_cached.$gwx_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'bShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_54);return __WXML_GLOBAL__.ops_cached.$gwx_54
}
function gz$gwx_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx_55)return __WXML_GLOBAL__.ops_cached.$gwx_55
__WXML_GLOBAL__.ops_cached.$gwx_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'custom']]])
Z([a,[3,'product '],[[7],[3,'mode']]])
Z([[2,'?:'],[[7],[3,'backgroundColor']],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,'']])
Z([3,'aspectFill'])
Z([3,'img'])
Z([[6],[[7],[3,'product']],[3,'image']])
Z([[6],[[7],[3,'product']],[3,'desc']])
})(__WXML_GLOBAL__.ops_cached.$gwx_55);return __WXML_GLOBAL__.ops_cached.$gwx_55
}
function gz$gwx_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx_56)return __WXML_GLOBAL__.ops_cached.$gwx_56
__WXML_GLOBAL__.ops_cached.$gwx_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_56);return __WXML_GLOBAL__.ops_cached.$gwx_56
}
function gz$gwx_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx_57)return __WXML_GLOBAL__.ops_cached.$gwx_57
__WXML_GLOBAL__.ops_cached.$gwx_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'currentComment']])
})(__WXML_GLOBAL__.ops_cached.$gwx_57);return __WXML_GLOBAL__.ops_cached.$gwx_57
}
function gz$gwx_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx_58)return __WXML_GLOBAL__.ops_cached.$gwx_58
__WXML_GLOBAL__.ops_cached.$gwx_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'media'])
Z([[7],[3,'fixSizeStyle']])
Z([[7],[3,'videoAutoPlay']])
Z([3,'onError'])
Z([3,'onFullScreen'])
Z([3,'onVideoPlay'])
Z([3,'video'])
Z([[7],[3,'videoShowControls']])
Z([1,false])
Z([[7],[3,'hidden']])
Z(z[8])
Z(z[6])
Z(z[8])
Z([[7],[3,'videoMuted']])
Z([[7],[3,'videoMode']])
Z([[2,'&&'],[[7],[3,'thumb']],[[2,'+'],[[7],[3,'thumb']],[1,'/750']]])
Z(z[7])
Z([[7],[3,'autoDirection']])
Z(z[7])
Z(z[7])
Z([[7],[3,'src']])
Z(z[8])
Z([3,'ext-wrap'])
Z([[2,'&&'],[[7],[3,'ext']],[[6],[[7],[3,'ext']],[3,'title']]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'ext']],[[6],[[7],[3,'ext']],[3,'poi']]],[[6],[[6],[[7],[3,'ext']],[3,'poi']],[3,'location']]])
Z([[2,'&&'],[1,false],[[7],[3,'controllable']]])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_58);return __WXML_GLOBAL__.ops_cached.$gwx_58
}
function gz$gwx_59(){
if( __WXML_GLOBAL__.ops_cached.$gwx_59)return __WXML_GLOBAL__.ops_cached.$gwx_59
__WXML_GLOBAL__.ops_cached.$gwx_59=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_59);return __WXML_GLOBAL__.ops_cached.$gwx_59
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./pages/index/index.wxml:Util":np_0,"m_./widget/every-buy-item/every-buy-item.wxml:Util":np_2,"m_./widget/goods-item/goods-item.wxml:Util":np_3,"m_./widget/group-feed-item/group-feed-item.wxml:Util":np_4,"m_./widget/message-item/message-item.wxml:Util":np_5,"m_./widget/plugin-goods-item/plugin-goods-item.wxml:Util":np_6,"m_./widget/product-img-browser/product-img-browser.wxml:Util":np_7,"m_./widget/product-img-swiper/product-img-swiper.wxml:Util":np_8,"m_./widget/range-selector/range-selector.wxml:Util":np_9,"m_./widget/recommend-comment-input/recommend-comment-input.wxml:Util":np_10,"m_./widget/recommend-group-comment/recommend-group-comment.wxml:Util":np_11,"m_./widget/recommend-group-folder/recommend-group-folder.wxml:Util":np_12,"m_./widget/recommend-group-item/recommend-group-item.wxml:Util":np_13,"m_./widget/tmp-profile/tmp-profile.wxml:Scene":np_15,"m_./widget/tmp-profile/tmp-profile.wxml:Ticket":np_14,"m_./widget/video-recommend-comment-input/video-recommend-comment-input.wxml:Util":np_16,"p_./utils/utils.wxs":np_1,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./pages/index/index.wxml']={};
f_['./pages/index/index.wxml']['UtilWxs'] =f_['./utils/utils.wxs'] || nv_require("p_./utils/utils.wxs");
f_['./pages/index/index.wxml']['UtilWxs']();
f_['./pages/index/index.wxml']['Util'] =nv_require("m_./pages/index/index.wxml:Util");
function np_0(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_filterRecommendList = (function (nv_list){return(nv_list && nv_list.nv_filter((function (nv_item){return(!nv_item.nv___ignore)})))});nv_module.nv_exports.nv_getGroupInfo = (function (nv_viewModel){return(!nv_viewModel ? null:({nv_name:nv_viewModel.nv_info.nv_group_name,nv_head_img_url:nv_viewModel.nv_info.nv_group_head_img_url,}))});return nv_module.nv_exports;}

f_['./utils/utils.wxs'] = nv_require("p_./utils/utils.wxs");
function np_1(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_getNavigatorTargetVersion = (function (nv_appid){return("release")});nv_module.nv_exports.nv_replacePlaceholder = (function (nv_str,nv_values){var nv_reg = nv_getRegExp('%s','m');if (nv_reg.nv_test(nv_str)){nv_values.nv_forEach((function (nv_item){nv_str = nv_str.nv_replace(nv_reg,nv_item)}))};return(nv_str)});nv_module.nv_exports.nv_isFriendFeed = (function (nv_groupId){return(nv_groupId == '0' || nv_groupId == '13104374716925600' || nv_groupId == '')});nv_module.nv_exports.nv_isForwardFeed = (function (nv_groupId){return(nv_groupId == '13104374716925601')});nv_module.nv_exports.nv_formatNum = (function (nv_num){if (nv_num >= 10000)return((nv_parseInt(nv_num / 1000) / 10) + '万');;if (nv_num >= 1000)return((nv_parseInt(nv_num / 100) / 10) + '千');;return(nv_num)});return nv_module.nv_exports;}

f_['./widget/every-buy-item/every-buy-item.wxml']={};
f_['./widget/every-buy-item/every-buy-item.wxml']['Util'] =nv_require("m_./widget/every-buy-item/every-buy-item.wxml:Util");
function np_2(){var nv_module={nv_exports:{}};;return nv_module.nv_exports;}

f_['./widget/goods-item/goods-item.wxml']={};
f_['./widget/goods-item/goods-item.wxml']['Util'] =nv_require("m_./widget/goods-item/goods-item.wxml:Util");
function np_3(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_fixPrice = (function (nv_num){nv_num = nv_parseInt(nv_num,10);if (typeof nv_num !== 'number' || nv_num < 0 || nv_num.nv_toString() === 'NaN'){return(' -')};return("￥" + ((nv_num / 100).nv_toFixed(2)))});function nv_fixPrice(nv_num){return("￥" + ((nv_num / 100).nv_toFixed(2)))};nv_module.nv_exports.nv_fixRangePrice = (function (nv_skuList){var nv_max = nv_skuList[(0)] && nv_skuList[(0)].nv_price || 0;var nv_min = nv_skuList[(0)] && nv_skuList[(0)].nv_price || 0;nv_skuList.nv_forEach((function (nv_sku){if (nv_sku.nv_price > nv_max){nv_max = nv_sku.nv_price};if (nv_sku.nv_price < nv_min){nv_min = nv_sku.nv_price}}));if (nv_max == nv_min){return(nv_fixPrice(nv_max))} else {return(nv_fixPrice(nv_min) + ' ~ ' + nv_fixPrice(nv_max))}});return nv_module.nv_exports;}

f_['./widget/group-feed-item/group-feed-item.wxml']={};
f_['./widget/group-feed-item/group-feed-item.wxml']['Util'] =nv_require("m_./widget/group-feed-item/group-feed-item.wxml:Util");
function np_4(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_getProduct = (function (nv_product,nv_index){if (!nv_product){return(null)};if (nv_product.nv_isUGC){if (nv_index < nv_product.nv_ugc_item.nv_info.nv_length && nv_product.nv_ugc_item.nv_info[((nt_0=(nv_index),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))].nv_product_info.nv_length){return(nv_product.nv_ugc_item.nv_info[((nt_1=(nv_index),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))].nv_product_info[(0)])};return(null)};return(nv_product)});return nv_module.nv_exports;}

f_['./widget/message-item/message-item.wxml']={};
f_['./widget/message-item/message-item.wxml']['Util'] =nv_require("m_./widget/message-item/message-item.wxml:Util");
function np_5(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_showGroup = (function (nv_msg_type){return([206,207,208,209,210,211,213,214,215,216,217,220,221].nv_indexOf(nv_msg_type) !== -1)});nv_module.nv_exports.nv_showBrandIcon = (function (nv_msg_type){return([3,4,5,100,101,102].nv_indexOf(nv_msg_type) !== -1)});return nv_module.nv_exports;}

f_['./widget/plugin-goods-item/plugin-goods-item.wxml']={};
f_['./widget/plugin-goods-item/plugin-goods-item.wxml']['Util'] =nv_require("m_./widget/plugin-goods-item/plugin-goods-item.wxml:Util");
function np_6(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_fixPrice = (function (nv_num){nv_num = nv_parseInt(nv_num,10);if (typeof nv_num !== 'number' || nv_num < 0 || nv_num.nv_toString() === 'NaN'){return(' -')};return("￥" + ((nv_num / 100).nv_toFixed(2)))});nv_module.nv_exports.nv_skuText = (function (nv_stockAttrInfo){var nv_result = "";nv_stockAttrInfo.nv_forEach((function (nv_attr){if (nv_result.nv_length > 0)nv_result += ", ";;nv_result += nv_attr.nv_value}));return(nv_result)});function nv_fixPrice(nv_num){return("￥" + ((nv_num / 100).nv_toFixed(2)))};nv_module.nv_exports.nv_fixRangePrice = (function (nv_skuList){var nv_max = nv_skuList[(0)] && nv_skuList[(0)].nv_price || 0;var nv_min = nv_skuList[(0)] && nv_skuList[(0)].nv_price || 0;nv_skuList.nv_forEach((function (nv_sku){if (nv_sku.nv_price > nv_max){nv_max = nv_sku.nv_price};if (nv_sku.nv_price < nv_min){nv_min = nv_sku.nv_price}}));if (nv_max == nv_min){return(nv_fixPrice(nv_max))} else {return(nv_fixPrice(nv_min) + '-' + nv_fixPrice(nv_max))}});return nv_module.nv_exports;}

f_['./widget/product-img-browser/product-img-browser.wxml']={};
f_['./widget/product-img-browser/product-img-browser.wxml']['Util'] =nv_require("m_./widget/product-img-browser/product-img-browser.wxml:Util");
function np_7(){var nv_module={nv_exports:{}};function nv_getProduct(nv_product,nv_index){if (!nv_product){return(null)};if (nv_product.nv_isUGC){if (nv_index < nv_product.nv_ugc_item.nv_info.nv_length && nv_product.nv_ugc_item.nv_info[((nt_0=(nv_index),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))].nv_product_info.nv_length){return(nv_product.nv_ugc_item.nv_info[((nt_1=(nv_index),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))].nv_product_info[(0)])};return(null)};return(nv_product)};nv_module.nv_exports.nv_getProduct = nv_getProduct;nv_module.nv_exports.nv_hasProduct = (function (nv_product,nv_index){return(nv_getProduct(nv_product,nv_index) != null)});nv_module.nv_exports.nv_getProductTitle = (function (nv_product,nv_index){var nv_item = nv_getProduct(nv_product,nv_index);if (!nv_item || !nv_item.nv_product_item){return('')};return(nv_item.nv_product_item.nv_title || nv_item.nv_product_item.nv_desc)});function nv_getPoi(nv_product,nv_index){if (!nv_product || !nv_product.nv_isUGC || nv_index >= nv_product.nv_ugc_item.nv_info.nv_length){return(null)};var nv_poi = nv_product.nv_ugc_item.nv_info[((nt_3=(nv_index),null==nt_3?undefined:'number'=== typeof nt_3?nt_3:"nv_"+nt_3))].nv_poi;return(nv_poi && nv_poi.nv_name ? nv_poi:null)};nv_module.nv_exports.nv_getPoi = nv_getPoi;nv_module.nv_exports.nv_hasPoi = (function (nv_product,nv_index){return(nv_getPoi(nv_product,nv_index) != null)});return nv_module.nv_exports;}

f_['./widget/product-img-swiper/product-img-swiper.wxml']={};
f_['./widget/product-img-swiper/product-img-swiper.wxml']['Util'] =nv_require("m_./widget/product-img-swiper/product-img-swiper.wxml:Util");
function np_8(){var nv_module={nv_exports:{}};function nv_getProduct(nv_product,nv_index){if (!nv_product){return(null)};if (nv_product.nv_isUGC){if (nv_index < nv_product.nv_ugc_item.nv_info.nv_length && nv_product.nv_ugc_item.nv_info[((nt_0=(nv_index),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))].nv_product_info.nv_length){return(nv_product.nv_ugc_item.nv_info[((nt_1=(nv_index),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))].nv_product_info[(0)])};return(null)};return(nv_product)};nv_module.nv_exports.nv_getProduct = nv_getProduct;nv_module.nv_exports.nv_hasProduct = (function (nv_product,nv_index){return(nv_getProduct(nv_product,nv_index) != null)});nv_module.nv_exports.nv_getProductTitle = (function (nv_product,nv_index){var nv_item = nv_getProduct(nv_product,nv_index);if (!nv_item || !nv_item.nv_product_item){return('')};return(nv_item.nv_product_item.nv_title || nv_item.nv_product_item.nv_desc)});function nv_getPoi(nv_product,nv_index){if (!nv_product || !nv_product.nv_isUGC || nv_index >= nv_product.nv_ugc_item.nv_info.nv_length){return(null)};var nv_poi = nv_product.nv_ugc_item.nv_info[((nt_3=(nv_index),null==nt_3?undefined:'number'=== typeof nt_3?nt_3:"nv_"+nt_3))].nv_poi;return(nv_poi && nv_poi.nv_name ? nv_poi:null)};nv_module.nv_exports.nv_getPoi = nv_getPoi;nv_module.nv_exports.nv_hasPoi = (function (nv_product,nv_index){return(nv_getPoi(nv_product,nv_index) != null)});nv_module.nv_exports.nv_isGroupFeedDetail = (function (nv_sourceId){return(nv_sourceId === 'group-feed-detail')});return nv_module.nv_exports;}

f_['./widget/range-selector/range-selector.wxml']={};
f_['./widget/range-selector/range-selector.wxml']['Util'] =nv_require("m_./widget/range-selector/range-selector.wxml:Util");
function np_9(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_fixRangeStr = (function (nv_arr){if (!nv_arr || nv_arr.nv_length == 0){return('对选择的朋友可见')};var nv_str = nv_arr.nv_map((function (nv_item){return(nv_item.nv_nickname || '')})).nv_join('，');return(nv_arr.nv_length + '个朋友可见：' + nv_str)});return nv_module.nv_exports;}

f_['./widget/recommend-comment-input/recommend-comment-input.wxml']={};
f_['./widget/recommend-comment-input/recommend-comment-input.wxml']['Util'] =nv_require("m_./widget/recommend-comment-input/recommend-comment-input.wxml:Util");
function np_10(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_getInitTop = (function (nv_currentScrollTop,nv_inputHeight,nv_screenHeight,nv_currentComment){nv_let;nv_pos;if (nv_currentComment.nv_top >= nv_screenHeight - nv_currentComment.nv_bottom){nv_pos = nv_currentComment.nv_top - nv_inputHeight} else {nv_pos = nv_currentComment.nv_bottom};return(nv_currentScrollTop + nv_pos)});return nv_module.nv_exports;}

f_['./widget/recommend-group-comment/recommend-group-comment.wxml']={};
f_['./widget/recommend-group-comment/recommend-group-comment.wxml']['UtilWxs'] =f_['./utils/utils.wxs'] || nv_require("p_./utils/utils.wxs");
f_['./widget/recommend-group-comment/recommend-group-comment.wxml']['UtilWxs']();
f_['./widget/recommend-group-comment/recommend-group-comment.wxml']['Util'] =nv_require("m_./widget/recommend-group-comment/recommend-group-comment.wxml:Util");
function np_11(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_getInputBottom = (function (nv_inputFocus,nv_keyboardHeight,nv_faceFocus,nv_facePanelHeight){if (nv_inputFocus && nv_keyboardHeight){return(nv_keyboardHeight)};if (nv_faceFocus && nv_facePanelHeight){return(nv_facePanelHeight)};return(0)});nv_module.nv_exports.nv_showGroupName = (function (nv_fromScene,nv_sourceId,nv_currentPageIndex){return(nv_sourceId == 'group-feed-detail' && ((nv_fromScene == 'forward') || (nv_fromScene == 'message') || (nv_fromScene == 'chat' && nv_currentPageIndex == 0) || (nv_fromScene == 'search') || (nv_fromScene == 'myRecommend')))});nv_module.nv_exports.nv_isFromMyRecommendList = (function (nv_sourceId){return(nv_sourceId === 'my-recommend-list')});return nv_module.nv_exports;}

f_['./widget/recommend-group-folder/recommend-group-folder.wxml']={};
f_['./widget/recommend-group-folder/recommend-group-folder.wxml']['Util'] =nv_require("m_./widget/recommend-group-folder/recommend-group-folder.wxml:Util");
function np_12(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_getDesc = (function (nv_viewModel){if (!nv_viewModel)return('');;var nv_user = nv_viewModel.nv_group_item.nv_abstract_feed[(0)];if (!nv_user)return('');;if (nv_user.nv_comment){return(nv_user.nv_comment)} else if (nv_user.nv_item_ext_info[(0)].nv_type === 1){return('[视频]')} else if (nv_user.nv_item_ext_info[(0)].nv_type === 2){return('[图片]')} else {var nv_result = '[物品] ';if (nv_user.nv_title){nv_result = nv_result + nv_user.nv_title};return(nv_result)}});return nv_module.nv_exports;}

f_['./widget/recommend-group-item/recommend-group-item.wxml']={};
f_['./widget/recommend-group-item/recommend-group-item.wxml']['Util'] =nv_require("m_./widget/recommend-group-item/recommend-group-item.wxml:Util");
function np_13(){var nv_module={nv_exports:{}};var nv_getOriginalFeed = (function (nv_product){if (!nv_product){return(null)};if (nv_product.nv_info.nv_type == 4){return(nv_product.nv_forward_item.nv_original_feed)};return(nv_product)});nv_module.nv_exports.nv_getOriginalFeed = nv_getOriginalFeed;var nv_getProductImages = (function (nv_product){if (!nv_product){return([])};nv_product = nv_getOriginalFeed(nv_product);var nv_arr = [];if (nv_product.nv_ugcImageList.nv_length){nv_arr = nv_arr.nv_concat(nv_product.nv_ugcImageList)};if (nv_product.nv_video_item){nv_arr.nv_push(({nv_url:nv_product.nv_video_item.nv_thumb_url,nv_isVideo:true,}))};return(nv_arr)});nv_module.nv_exports.nv_getProductImages = nv_getProductImages;var nv_getProduct = (function (nv_product,nv_index){if (!nv_product){return(null)};nv_product = nv_getOriginalFeed(nv_product);if (nv_product.nv_isUGC){if (nv_index < nv_product.nv_ugc_item.nv_info.nv_length && nv_product.nv_ugc_item.nv_info[((nt_0=(nv_index),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))].nv_product_info.nv_length){return(nv_product.nv_ugc_item.nv_info[((nt_1=(nv_index),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))].nv_product_info[(0)])};return(null)};return(nv_product)});nv_module.nv_exports.nv_getProduct = nv_getProduct;nv_module.nv_exports.nv_hasProduct = (function (nv_product){nv_product = nv_getOriginalFeed(nv_product);var nv_images = nv_getProductImages(nv_product);for(var nv_i = 0;nv_i < nv_images.nv_length;nv_i++){if (nv_getProduct(nv_product,nv_i) != null){return(true)}};return(false)});var nv_getPoi = (function (nv_product,nv_index){nv_product = nv_getOriginalFeed(nv_product);if (!nv_product || !nv_product.nv_isUGC || nv_index >= nv_product.nv_ugc_item.nv_info.nv_length){return(null)};var nv_poi = nv_product.nv_ugc_item.nv_info[((nt_3=(nv_index),null==nt_3?undefined:'number'=== typeof nt_3?nt_3:"nv_"+nt_3))].nv_poi;return(nv_poi && nv_poi.nv_name ? nv_poi:null)});var nv_hasPoi = (function (nv_product){nv_product = nv_getOriginalFeed(nv_product);var nv_images = nv_getProductImages(nv_product);for(var nv_i = 0;nv_i < nv_images.nv_length;nv_i++){if (nv_getPoi(nv_product,nv_i) != null){return(true)}};return(false)});nv_module.nv_exports.nv_hasPoi = nv_hasPoi;nv_module.nv_exports.nv_isFromMyRecommendList = (function (nv_sourceId){return(nv_sourceId === 'my-recommend-list')});return nv_module.nv_exports;}

f_['./widget/tmp-profile/tmp-profile.wxml']={};
f_['./widget/tmp-profile/tmp-profile.wxml']['Util'] =f_['./utils/utils.wxs'] || nv_require("p_./utils/utils.wxs");
f_['./widget/tmp-profile/tmp-profile.wxml']['Util']();
f_['./widget/tmp-profile/tmp-profile.wxml']['Ticket'] =nv_require("m_./widget/tmp-profile/tmp-profile.wxml:Ticket");
function np_14(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_ticketParams = (function (nv_ticket){return(({nv_scene:2,nv_ticket:nv_ticket,}))});return nv_module.nv_exports;}
f_['./widget/tmp-profile/tmp-profile.wxml']['Scene'] =nv_require("m_./widget/tmp-profile/tmp-profile.wxml:Scene");
function np_15(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_isFromIndex = (function (nv_fromScene){return(nv_fromScene === 'index-right-click')});return nv_module.nv_exports;}

f_['./widget/video-recommend-comment-input/video-recommend-comment-input.wxml']={};
f_['./widget/video-recommend-comment-input/video-recommend-comment-input.wxml']['Util'] =nv_require("m_./widget/video-recommend-comment-input/video-recommend-comment-input.wxml:Util");
function np_16(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_getInitTop = (function (nv_currentScrollTop,nv_inputHeight,nv_screenHeight,nv_currentComment){nv_let;nv_pos;if (nv_currentComment.nv_top >= nv_screenHeight - nv_currentComment.nv_bottom){nv_pos = nv_currentComment.nv_top - nv_inputHeight} else {nv_pos = nv_currentComment.nv_bottom};return(nv_currentScrollTop + nv_pos)});return nv_module.nv_exports;}

var x=['./libs/mmuxwxappdevkit/widget/action-sheet/action-sheet.wxml','./libs/mmuxwxappdevkit/widget/error-page/error-page.wxml','./libs/mmuxwxappdevkit/widget/exposure-block/exposure-block.wxml','./libs/mmuxwxappdevkit/widget/image-view/image-view.wxml','./libs/mmuxwxappdevkit/widget/list-view/list-view.wxml','./libs/mmuxwxappdevkit/widget/loading-view/loading-view.wxml','./libs/mmuxwxappdevkit/widget/modal/modal.wxml','./libs/mmuxwxappdevkit/widget/navigation-bar/navigation-bar.wxml','./libs/mmuxwxappdevkit/widget/navigator/navigator.wxml','./pages/forbid/forbid.wxml','./pages/index/index.wxml','./pages/live/live.wxml','./widget/auth-detect/auth-detect.wxml','./widget/base-cell/base-cell.wxml','./widget/brand-header/brand-header.wxml','./widget/btn-groups/btn-groups.wxml','./widget/camera-btn/camera-btn.wxml','./widget/dialog/dialog.wxml','./widget/dislike-dialog/dislike-dialog.wxml','./widget/every-buy-category/every-buy-category.wxml','./widget/every-buy-item/every-buy-item.wxml','./widget/gesture/gesture.wxml','./widget/goods-item/goods-item.wxml','./widget/group-avatar/group-avatar.wxml','./widget/group-feed-item/group-feed-item.wxml','./widget/guarantee-pop/guarantee-pop.wxml','./widget/ignore-dialog/ignore-dialog.wxml','./widget/index-group-cell/index-group-cell.wxml','./widget/input-face-btn/input-face-btn.wxml','./widget/input-tool-bar/input-tool-bar.wxml','./widget/list-data-view/list-data-view.wxml','./widget/mask/mask.wxml','./widget/message-item-permission/message-item-permission.wxml','./widget/message-item/message-item.wxml','./widget/modal/modal.wxml','./widget/permission-sheet/permission-sheet.wxml','./widget/plugin-goods-item/plugin-goods-item.wxml','./widget/product-attachment/product-attachment.wxml','./widget/product-img-browser/product-img-browser.wxml','./widget/product-img-swiper/product-img-swiper.wxml','./widget/product-preview/product-preview.wxml','./widget/product-search/product-search.wxml','./widget/range-selector/range-selector.wxml','./widget/recommend-comment-input/recommend-comment-input.wxml','./widget/recommend-comment-op/recommend-comment-op.wxml','./widget/recommend-fold-text/recommend-fold-text.wxml','./widget/recommend-group-comment/recommend-group-comment.wxml','./widget/recommend-group-folder/recommend-group-folder.wxml','./widget/recommend-group-item/recommend-group-item.wxml','./widget/selectable-view/selectable-view.wxml','./widget/simple-image/simple-image.wxml','./widget/single-recommend-comment-item/single-recommend-comment-item.wxml','./widget/tmp-profile/tmp-profile.wxml','./widget/toast/toast.wxml','./widget/ugc-product-attachment/ugc-product-attachment.wxml','./widget/video-goods-item/video-goods-item.wxml','./widget/video-recommend-comment-input/video-recommend-comment-input.wxml','./widget/video-view/video-view.wxml','./widget/welcome/welcome.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['animation',0,'catchtouchmove',1,'class',1,'hidden',2],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,4,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_mz(z,'view',['class',7,'hoverClass',1,'style',2],[],hG,cF,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,10,hG,cF,gg)){lK.wxVkey=1
}
var aL=_v()
_(oJ,aL)
if(_oz(z,11,hG,cF,gg)){aL.wxVkey=1
var tM=_mz(z,'navigator',['appId',12,'bindtap',1,'data-content',2,'data-extra',3,'data-index',4,'data-type',5,'data-userinfo',6,'extParams',7,'innerClass',8,'path',9,'showWeappBack',10],[],hG,cF,gg)
_(aL,tM)
}
else{aL.wxVkey=2
}
lK.wxXCkey=1
aL.wxXCkey=1
aL.wxXCkey=3
_(oH,oJ)
return oH
}
oD.wxXCkey=4
_2z(z,5,fE,e,s,gg,oD,'item','index','content')
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var bO=_v()
_(r,bO)
if(_oz(z,0,e,s,gg)){bO.wxVkey=1
var oP=_v()
_(bO,oP)
if(_oz(z,1,e,s,gg)){oP.wxVkey=1
}
oP.wxXCkey=1
}
bO.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var fS=_mz(z,'view',['class',0,'hidden',1,'style',1],[],e,s,gg)
var oV=_mz(z,'image',['binderror',3,'bindload',1,'class',2,'hidden',3,'lazyLoad',4,'mode',5,'src',6,'style',7],[],e,s,gg)
var cW=_n('slot')
_(oV,cW)
_(fS,oV)
var cT=_v()
_(fS,cT)
if(_oz(z,11,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(fS,hU)
if(_oz(z,12,e,s,gg)){hU.wxVkey=1
var oX=_mz(z,'loading-view',['class',13,'loadingStyle',1,'size',2,'style',3],[],e,s,gg)
_(hU,oX)
}
cT.wxXCkey=1
hU.wxXCkey=1
hU.wxXCkey=3
_(r,fS)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var aZ=_mz(z,'scroll-view',['bindscrolltolower',0,'enableBackToTop',1,'scrollY',1,'style',2],[],e,s,gg)
var t1=_v()
_(aZ,t1)
var e2=function(o4,b3,x5,gg){
var f7=_v()
_(x5,f7)
if(_oz(z,7,o4,b3,gg)){f7.wxVkey=1
var c8=_v()
_(f7,c8)
var h9=function(cAB,o0,oBB,gg){
var aDB=_v()
_(oBB,aDB)
if(_oz(z,12,cAB,o0,gg)){aDB.wxVkey=1
var eFB=_n('list-view-cell')
_rz(z,eFB,'viewModel',13,cAB,o0,gg)
_(aDB,eFB)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,14,cAB,o0,gg)){tEB.wxVkey=1
}
tEB.wxXCkey=1
}
aDB.wxXCkey=1
aDB.wxXCkey=3
return oBB
}
c8.wxXCkey=4
_2z(z,10,h9,o4,b3,gg,c8,'row','r','id')
}
f7.wxXCkey=1
f7.wxXCkey=3
return x5
}
t1.wxXCkey=4
_2z(z,5,e2,e,s,gg,t1,'section','index','key')
_(r,aZ)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var xIB=_n('view')
_rz(z,xIB,'class',0,e,s,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,1,e,s,gg)){oJB.wxVkey=1
}
var fKB=_mz(z,'navigator',['appId',2,'class',1,'display',2,'openType',3,'path',4,'style',5],[],e,s,gg)
_(xIB,fKB)
oJB.wxXCkey=1
_(r,xIB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var hMB=_v()
_(r,hMB)
if(_oz(z,0,e,s,gg)){hMB.wxVkey=1
var oNB=_v()
_(hMB,oNB)
if(_oz(z,1,e,s,gg)){oNB.wxVkey=1
var lQB=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var aRB=_v()
_(lQB,aRB)
if(_oz(z,4,e,s,gg)){aRB.wxVkey=1
var eTB=_n('view')
_rz(z,eTB,'class',5,e,s,gg)
var bUB=_v()
_(eTB,bUB)
if(_oz(z,6,e,s,gg)){bUB.wxVkey=1
var oVB=_n('slot')
_rz(z,oVB,'name',7,e,s,gg)
_(bUB,oVB)
}
else if(_oz(z,8,e,s,gg)){bUB.wxVkey=2
var xWB=_mz(z,'navigator',['openType',9,'target',1],[],e,s,gg)
_(bUB,xWB)
}
else{bUB.wxVkey=3
}
bUB.wxXCkey=1
bUB.wxXCkey=3
_(aRB,eTB)
}
else{aRB.wxVkey=2
}
var tSB=_v()
_(lQB,tSB)
if(_oz(z,11,e,s,gg)){tSB.wxVkey=1
var oXB=_n('slot')
_rz(z,oXB,'name',12,e,s,gg)
_(tSB,oXB)
}
else{tSB.wxVkey=2
var fYB=_v()
_(tSB,fYB)
if(_oz(z,13,e,s,gg)){fYB.wxVkey=1
var h1B=_n('view')
_rz(z,h1B,'class',14,e,s,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,15,e,s,gg)){o2B.wxVkey=1
var a6B=_n('loading-view')
_rz(z,a6B,'class',16,e,s,gg)
_(o2B,a6B)
}
var c3B=_v()
_(h1B,c3B)
if(_oz(z,17,e,s,gg)){c3B.wxVkey=1
}
var o4B=_v()
_(h1B,o4B)
if(_oz(z,18,e,s,gg)){o4B.wxVkey=1
}
var l5B=_v()
_(h1B,l5B)
if(_oz(z,19,e,s,gg)){l5B.wxVkey=1
}
o2B.wxXCkey=1
o2B.wxXCkey=3
c3B.wxXCkey=1
o4B.wxXCkey=1
l5B.wxXCkey=1
_(fYB,h1B)
}
var cZB=_v()
_(tSB,cZB)
if(_oz(z,20,e,s,gg)){cZB.wxVkey=1
var t7B=_n('view')
_rz(z,t7B,'class',21,e,s,gg)
var e8B=_v()
_(t7B,e8B)
if(_oz(z,22,e,s,gg)){e8B.wxVkey=1
}
var b9B=_v()
_(t7B,b9B)
if(_oz(z,23,e,s,gg)){b9B.wxVkey=1
}
e8B.wxXCkey=1
b9B.wxXCkey=1
_(cZB,t7B)
}
fYB.wxXCkey=1
fYB.wxXCkey=3
cZB.wxXCkey=1
}
var o0B=_n('view')
_rz(z,o0B,'class',24,e,s,gg)
var xAC=_v()
_(o0B,xAC)
if(_oz(z,25,e,s,gg)){xAC.wxVkey=1
var oBC=_mz(z,'view',['bindtap',26,'bindtouchcancel',1,'bindtouchend',2,'bindtouchstart',3,'class',4],[],e,s,gg)
var fCC=_v()
_(oBC,fCC)
if(_oz(z,31,e,s,gg)){fCC.wxVkey=1
}
fCC.wxXCkey=1
_(xAC,oBC)
}
else if(_oz(z,32,e,s,gg)){xAC.wxVkey=2
var cDC=_n('slot')
_rz(z,cDC,'name',33,e,s,gg)
_(xAC,cDC)
}
else{xAC.wxVkey=3
}
xAC.wxXCkey=1
_(lQB,o0B)
aRB.wxXCkey=1
aRB.wxXCkey=3
tSB.wxXCkey=1
tSB.wxXCkey=3
_(oNB,lQB)
}
var cOB=_v()
_(hMB,cOB)
if(_oz(z,34,e,s,gg)){cOB.wxVkey=1
var hEC=_mz(z,'cover-view',['class',35,'style',1],[],e,s,gg)
var oFC=_v()
_(hEC,oFC)
if(_oz(z,37,e,s,gg)){oFC.wxVkey=1
}
var cGC=_v()
_(hEC,cGC)
if(_oz(z,38,e,s,gg)){cGC.wxVkey=1
}
oFC.wxXCkey=1
cGC.wxXCkey=1
_(cOB,hEC)
}
var oPB=_v()
_(hMB,oPB)
if(_oz(z,39,e,s,gg)){oPB.wxVkey=1
}
oNB.wxXCkey=1
oNB.wxXCkey=3
cOB.wxXCkey=1
oPB.wxXCkey=1
}
hMB.wxXCkey=1
hMB.wxXCkey=3
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var lIC=_v()
_(r,lIC)
if(_oz(z,0,e,s,gg)){lIC.wxVkey=1
var aJC=_mz(z,'navigator',['appId',1,'bindtap',1,'class',2,'extraData',3,'hidden',4,'hoverClass',5,'hoverStartTime',6,'hoverStayTime',7,'hoverStopPropagation',8,'openType',9,'path',10,'style',11,'target',12,'url',13,'version',14],[],e,s,gg)
var tKC=_n('slot')
_(aJC,tKC)
_(lIC,aJC)
}
else{lIC.wxVkey=2
var eLC=_mz(z,'view',['bindtap',16,'class',1,'hidden',2,'style',3],[],e,s,gg)
var bMC=_n('slot')
_(eLC,bMC)
_(lIC,eLC)
}
lIC.wxXCkey=1
lIC.wxXCkey=3
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var fQC=_mz(z,'navigation-bar',['rightTopBtnCustom',-1,'titleCustom',-1,'backgroundColor',0,'forceShowBackButton',1,'title',1],[],e,s,gg)
var hSC=_mz(z,'view',['bindtap',3,'class',1,'slot',2],[],e,s,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,6,e,s,gg)){oTC.wxVkey=1
}
oTC.wxXCkey=1
_(fQC,hSC)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,7,e,s,gg)){cRC.wxVkey=1
var cUC=_mz(z,'view',['bindlongpress',8,'bindtap',1,'class',2,'slot',3],[],e,s,gg)
var oVC=_v()
_(cUC,oVC)
if(_oz(z,12,e,s,gg)){oVC.wxVkey=1
}
oVC.wxXCkey=1
_(cRC,cUC)
}
cRC.wxXCkey=1
_(r,fQC)
var lWC=_mz(z,'recommend-comment-input',['bind:inputhide',13,'bind:inputpop',1,'currentComment',2,'currentScrollTop',3],[],e,s,gg)
_(r,lWC)
var aXC=_mz(z,'view',['class',17,'style',1],[],e,s,gg)
var tYC=_v()
_(aXC,tYC)
if(_oz(z,19,e,s,gg)){tYC.wxVkey=1
}
else{tYC.wxVkey=2
var eZC=_v()
_(tYC,eZC)
if(_oz(z,20,e,s,gg)){eZC.wxVkey=1
}
var b1C=_v()
_(tYC,b1C)
if(_oz(z,21,e,s,gg)){b1C.wxVkey=1
var x3C=_mz(z,'swiper',['bind:change',22,'indicatorDots',1,'style',2],[],e,s,gg)
var o4C=_v()
_(x3C,o4C)
var f5C=function(h7C,c6C,o8C,gg){
var o0C=_mz(z,'swiper-item',['bindtap',27,'data-item',1],[],h7C,c6C,gg)
var lAD=_n('view')
_rz(z,lAD,'class',29,h7C,c6C,gg)
var tCD=_n('view')
_rz(z,tCD,'class',30,h7C,c6C,gg)
var eDD=_v()
_(tCD,eDD)
if(_oz(z,31,h7C,c6C,gg)){eDD.wxVkey=1
}
var bED=_v()
_(tCD,bED)
if(_oz(z,32,h7C,c6C,gg)){bED.wxVkey=1
}
var oFD=_v()
_(tCD,oFD)
if(_oz(z,33,h7C,c6C,gg)){oFD.wxVkey=1
}
var xGD=_v()
_(tCD,xGD)
if(_oz(z,34,h7C,c6C,gg)){xGD.wxVkey=1
}
eDD.wxXCkey=1
bED.wxXCkey=1
oFD.wxXCkey=1
xGD.wxXCkey=1
_(lAD,tCD)
var aBD=_v()
_(lAD,aBD)
if(_oz(z,35,h7C,c6C,gg)){aBD.wxVkey=1
var oHD=_mz(z,'group-avatar',['class',36,'size',1,'src',2],[],h7C,c6C,gg)
_(aBD,oHD)
}
aBD.wxXCkey=1
aBD.wxXCkey=3
_(o0C,lAD)
_(o8C,o0C)
return o8C
}
o4C.wxXCkey=4
_2z(z,25,f5C,e,s,gg,o4C,'item','index','{{item.groupattr.id}}')
_(b1C,x3C)
}
var o2C=_v()
_(tYC,o2C)
if(_oz(z,39,e,s,gg)){o2C.wxVkey=1
var fID=_mz(z,'view',['class',40,'id',1],[],e,s,gg)
var cJD=_v()
_(fID,cJD)
if(_oz(z,42,e,s,gg)){cJD.wxVkey=1
var oLD=_mz(z,'list-data-view',['bottomTip',43,'customLoadingTip',1,'loading',2,'observerClass',3,'showTip',4],[],e,s,gg)
var cMD=_v()
_(oLD,cMD)
var oND=function(aPD,lOD,tQD,gg){
var bSD=_v()
_(tQD,bSD)
if(_oz(z,51,aPD,lOD,gg)){bSD.wxVkey=1
var oTD=_v()
_(bSD,oTD)
if(_oz(z,52,aPD,lOD,gg)){oTD.wxVkey=1
var xUD=_mz(z,'recommend-group-folder',['bind:click',53,'index',1,'titleIndex',2,'viewModel',3],[],aPD,lOD,gg)
_(oTD,xUD)
}
else{oTD.wxVkey=2
var oVD=_mz(z,'recommend-group-item',['bind:addfavorite',57,'bind:cancellike',1,'bind:delcomment',2,'bind:deletebyitem',3,'bind:delreply',4,'bind:docomment',5,'bind:dolike',6,'bind:doreply',7,'bind:feedback',8,'bind:imageswipe',9,'bind:inputshow',10,'bind:openuserprofile',11,'bind:removefavorite',12,'bind:shareclick',13,'bind:shareover',14,'bind:showpanel',15,'bind:tapproduct',16,'bind:toShareProductDetail',17,'bind:topreviewimage',18,'bind:toproductdetail',19,'groupFeedReasons',20,'groupId',21,'index',22,'pageName',23,'sourceId',24,'viewModel',25],[],aPD,lOD,gg)
_(oTD,oVD)
}
oTD.wxXCkey=1
oTD.wxXCkey=3
oTD.wxXCkey=3
}
bSD.wxXCkey=1
bSD.wxXCkey=3
return tQD
}
cMD.wxXCkey=4
_2z(z,49,oND,e,s,gg,cMD,'item','index','*this')
_(cJD,oLD)
}
var hKD=_v()
_(fID,hKD)
if(_oz(z,83,e,s,gg)){hKD.wxVkey=1
}
cJD.wxXCkey=1
cJD.wxXCkey=3
hKD.wxXCkey=1
_(o2C,fID)
}
else{o2C.wxVkey=2
var fWD=_v()
_(o2C,fWD)
var cXD=function(oZD,hYD,c1D,gg){
var l3D=_mz(z,'view',['class',87,'id',1,'style',2],[],oZD,hYD,gg)
var a4D=_v()
_(l3D,a4D)
if(_oz(z,90,oZD,hYD,gg)){a4D.wxVkey=1
var t5D=_mz(z,'recommend-group-folder',['bind:click',91,'viewModel',1],[],oZD,hYD,gg)
_(a4D,t5D)
}
else{a4D.wxVkey=2
var e6D=_mz(z,'recommend-group-item',['bind:addfavorite',93,'bind:cancellike',1,'bind:delcomment',2,'bind:deletebyitem',3,'bind:delreply',4,'bind:docomment',5,'bind:dolike',6,'bind:doreply',7,'bind:feedback',8,'bind:imageswipe',9,'bind:inputshow',10,'bind:openuserprofile',11,'bind:removefavorite',12,'bind:shareclick',13,'bind:shareover',14,'bind:tapproduct',15,'bind:toShareProductDetail',16,'bind:topreviewimage',17,'bind:toproductdetail',18,'groupFeedReasons',19,'groupId',20,'index',21,'sourceId',22,'viewModel',23],[],oZD,hYD,gg)
_(a4D,e6D)
}
a4D.wxXCkey=1
a4D.wxXCkey=3
a4D.wxXCkey=3
_(c1D,l3D)
return c1D
}
fWD.wxXCkey=4
_2z(z,85,cXD,e,s,gg,fWD,'item','index','item.dataIndex')
}
eZC.wxXCkey=1
b1C.wxXCkey=1
b1C.wxXCkey=3
o2C.wxXCkey=1
o2C.wxXCkey=3
o2C.wxXCkey=3
}
tYC.wxXCkey=1
tYC.wxXCkey=3
_(r,aXC)
var oPC=_v()
_(r,oPC)
if(_oz(z,117,e,s,gg)){oPC.wxVkey=1
var b7D=_mz(z,'ux-dialog',['bind:dismiss',118,'desc',1,'title',2,'userInfo',3],[],e,s,gg)
var x9D=_n('view')
_rz(z,x9D,'slot',122,e,s,gg)
var o0D=_v()
_(x9D,o0D)
if(_oz(z,123,e,s,gg)){o0D.wxVkey=1
}
o0D.wxXCkey=1
_(b7D,x9D)
var o8D=_v()
_(b7D,o8D)
if(_oz(z,124,e,s,gg)){o8D.wxVkey=1
}
o8D.wxXCkey=1
_(oPC,b7D)
}
var fAE=_mz(z,'action-sheet',['bShow',125,'bindbeforeclick',1,'bindhide',2,'bindoncustomclick',3,'items',4,'style',5,'title',6],[],e,s,gg)
_(r,fAE)
oPC.wxXCkey=1
oPC.wxXCkey=3
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var cEE=_n('view')
_rz(z,cEE,'bindtap',0,e,s,gg)
var oFE=_n('slot')
_(cEE,oFE)
_(r,cEE)
var oDE=_v()
_(r,oDE)
if(_oz(z,1,e,s,gg)){oDE.wxVkey=1
var lGE=_mz(z,'image-view',['class',2,'src',1],[],e,s,gg)
_(oDE,lGE)
}
oDE.wxXCkey=1
oDE.wxXCkey=3
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var tIE=_v()
_(r,tIE)
if(_oz(z,0,e,s,gg)){tIE.wxVkey=1
var eJE=_mz(z,'slot',['bindlongpress',1,'data-item',1],[],e,s,gg)
_(tIE,eJE)
}
else if(_oz(z,3,e,s,gg)){tIE.wxVkey=2
var bKE=_mz(z,'scroll-view',['bindscroll',4,'bindtouchcancel',1,'bindtouchend',2,'bindtouchstart',3,'scrollLeft',4,'scrollWithAnimation',5,'scrollX',6,'style',7],[],e,s,gg)
var oLE=_mz(z,'view',['bindtap',12,'class',1,'style',2],[],e,s,gg)
var oNE=_n('slot')
_(oLE,oNE)
var xME=_v()
_(oLE,xME)
if(_oz(z,15,e,s,gg)){xME.wxVkey=1
}
xME.wxXCkey=1
_(bKE,oLE)
_(tIE,bKE)
}
else{tIE.wxVkey=3
var fOE=_mz(z,'slot',['catchlongpress',16,'data-item',1],[],e,s,gg)
_(tIE,fOE)
}
tIE.wxXCkey=1
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var oRE=_v()
_(r,oRE)
if(_oz(z,0,e,s,gg)){oRE.wxVkey=1
}
oRE.wxXCkey=1
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var lUE=_mz(z,'view',['catchtap',0,'class',1],[],e,s,gg)
var aVE=_mz(z,'view',['catchtap',2,'class',1],[],e,s,gg)
var tWE=_n('slot')
_rz(z,tWE,'name',4,e,s,gg)
_(aVE,tWE)
var eXE=_n('slot')
_rz(z,eXE,'name',5,e,s,gg)
_(aVE,eXE)
_(lUE,aVE)
_(r,lUE)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var x1E=_v()
_(r,x1E)
if(_oz(z,0,e,s,gg)){x1E.wxVkey=1
var o2E=_v()
_(x1E,o2E)
var f3E=function(h5E,c4E,o6E,gg){
var o8E=_v()
_(o6E,o8E)
if(_oz(z,3,h5E,c4E,gg)){o8E.wxVkey=1
var l9E=_mz(z,'every-buy-item',['class',4,'data-idx',1,'fromScene',2,'index',3,'item',4,'ref',5],[],h5E,c4E,gg)
_(o8E,l9E)
}
o8E.wxXCkey=1
o8E.wxXCkey=3
return o6E
}
o2E.wxXCkey=4
_2z(z,1,f3E,e,s,gg,o2E,'item','index','id')
}
x1E.wxXCkey=1
x1E.wxXCkey=3
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var tAF=_n('view')
_rz(z,tAF,'class',0,e,s,gg)
var eBF=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var bCF=_mz(z,'image-view',['lazyLoad',-1,'class',3,'mode',1,'placeholder',2,'size',3,'src',4],[],e,s,gg)
_(eBF,bCF)
var oDF=_n('view')
_rz(z,oDF,'class',8,e,s,gg)
var xEF=_v()
_(oDF,xEF)
if(_oz(z,9,e,s,gg)){xEF.wxVkey=1
var fGF=_n('view')
_rz(z,fGF,'class',10,e,s,gg)
var cHF=_v()
_(fGF,cHF)
if(_oz(z,11,e,s,gg)){cHF.wxVkey=1
}
var hIF=_v()
_(fGF,hIF)
if(_oz(z,12,e,s,gg)){hIF.wxVkey=1
}
cHF.wxXCkey=1
hIF.wxXCkey=1
_(xEF,fGF)
}
else{xEF.wxVkey=2
}
var oFF=_v()
_(oDF,oFF)
if(_oz(z,13,e,s,gg)){oFF.wxVkey=1
}
xEF.wxXCkey=1
oFF.wxXCkey=1
_(eBF,oDF)
_(tAF,eBF)
var oJF=_mz(z,'image-view',['lazyLoad',-1,'bindtap',14,'class',1,'mode',2,'placeholder',3,'size',4,'src',5],[],e,s,gg)
_(tAF,oJF)
_(r,tAF)
var cKF=_mz(z,'action-sheet',['bShow',20,'bindhide',1,'bindoncustomclick',2,'items',3,'style',4,'title',5],[],e,s,gg)
_(r,cKF)
var oLF=_mz(z,'ignore-dialog',['bindonClickChooseReason',26,'ignoreChoices',1,'ignoreClickPosition',2,'showIgnoreDialog',3],[],e,s,gg)
_(r,oLF)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var aNF=_mz(z,'view',['bind:touchcancel',0,'bind:touchend',1,'bind:touchmove',1,'bind:touchstart',2,'catch:touchstart',3,'class',4],[],e,s,gg)
var tOF=_n('slot')
_(aNF,tOF)
_(r,aNF)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var bQF=_mz(z,'view',['catchtap',0,'class',1,'hoverClass',1],[],e,s,gg)
var oRF=_n('slot')
_rz(z,oRF,'name',3,e,s,gg)
_(bQF,oRF)
var xSF=_mz(z,'view',['catchtap',4,'class',1],[],e,s,gg)
var oTF=_mz(z,'image-view',['class',6,'mode',1,'placeholder',2,'src',3],[],e,s,gg)
_(xSF,oTF)
_(bQF,xSF)
_(r,bQF)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var cVF=_n('view')
_rz(z,cVF,'style',0,e,s,gg)
var hWF=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var oXF=_v()
_(hWF,oXF)
if(_oz(z,3,e,s,gg)){oXF.wxVkey=1
var cYF=_mz(z,'image-view',['class',4,'mode',1,'src',2],[],e,s,gg)
_(oXF,cYF)
}
var oZF=_n('slot')
_rz(z,oZF,'name',7,e,s,gg)
_(hWF,oZF)
oXF.wxXCkey=1
oXF.wxXCkey=3
_(cVF,hWF)
var l1F=_mz(z,'view',['class',8,'style',1],[],e,s,gg)
var a2F=_v()
_(l1F,a2F)
if(_oz(z,10,e,s,gg)){a2F.wxVkey=1
var t3F=_mz(z,'image-view',['class',11,'mode',1,'src',2],[],e,s,gg)
_(a2F,t3F)
}
var e4F=_n('slot')
_rz(z,e4F,'name',14,e,s,gg)
_(l1F,e4F)
a2F.wxXCkey=1
a2F.wxXCkey=3
_(cVF,l1F)
var b5F=_mz(z,'view',['class',15,'style',1],[],e,s,gg)
var o6F=_v()
_(b5F,o6F)
if(_oz(z,17,e,s,gg)){o6F.wxVkey=1
var x7F=_mz(z,'image-view',['class',18,'mode',1,'src',2],[],e,s,gg)
_(o6F,x7F)
}
var o8F=_n('slot')
_rz(z,o8F,'name',21,e,s,gg)
_(b5F,o8F)
o6F.wxXCkey=1
o6F.wxXCkey=3
_(cVF,b5F)
_(r,cVF)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var c0F=_v()
_(r,c0F)
if(_oz(z,0,e,s,gg)){c0F.wxVkey=1
var oBG=_mz(z,'view',['catchtap',1,'class',1,'hoverClass',2],[],e,s,gg)
var cCG=_v()
_(oBG,cCG)
if(_oz(z,4,e,s,gg)){cCG.wxVkey=1
}
var oDG=_v()
_(oBG,oDG)
if(_oz(z,5,e,s,gg)){oDG.wxVkey=1
}
var lEG=_v()
_(oBG,lEG)
if(_oz(z,6,e,s,gg)){lEG.wxVkey=1
var aFG=_n('view')
_rz(z,aFG,'class',7,e,s,gg)
var tGG=_v()
_(aFG,tGG)
if(_oz(z,8,e,s,gg)){tGG.wxVkey=1
}
var eHG=_v()
_(aFG,eHG)
if(_oz(z,9,e,s,gg)){eHG.wxVkey=1
}
tGG.wxXCkey=1
eHG.wxXCkey=1
_(lEG,aFG)
}
cCG.wxXCkey=1
oDG.wxXCkey=1
lEG.wxXCkey=1
_(c0F,oBG)
}
var bIG=_mz(z,'action-sheet',['bShow',10,'bindhide',1,'bindoncustomclick',2,'items',3,'style',4,'title',5],[],e,s,gg)
_(r,bIG)
var hAG=_v()
_(r,hAG)
if(_oz(z,16,e,s,gg)){hAG.wxVkey=1
}
c0F.wxXCkey=1
hAG.wxXCkey=1
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var xKG=_v()
_(r,xKG)
if(_oz(z,0,e,s,gg)){xKG.wxVkey=1
var oLG=_v()
_(xKG,oLG)
if(_oz(z,1,e,s,gg)){oLG.wxVkey=1
}
var fMG=_n('view')
var cNG=_v()
_(fMG,cNG)
if(_oz(z,2,e,s,gg)){cNG.wxVkey=1
var lSG=_mz(z,'image-view',['class',3,'imgStyle',1,'src',2],[],e,s,gg)
_(cNG,lSG)
}
var hOG=_v()
_(fMG,hOG)
if(_oz(z,6,e,s,gg)){hOG.wxVkey=1
}
var oPG=_v()
_(fMG,oPG)
if(_oz(z,7,e,s,gg)){oPG.wxVkey=1
}
var cQG=_v()
_(fMG,cQG)
if(_oz(z,8,e,s,gg)){cQG.wxVkey=1
}
var oRG=_v()
_(fMG,oRG)
if(_oz(z,9,e,s,gg)){oRG.wxVkey=1
}
cNG.wxXCkey=1
cNG.wxXCkey=3
hOG.wxXCkey=1
oPG.wxXCkey=1
cQG.wxXCkey=1
oRG.wxXCkey=1
_(xKG,fMG)
oLG.wxXCkey=1
}
xKG.wxXCkey=1
xKG.wxXCkey=3
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var tUG=_v()
_(r,tUG)
if(_oz(z,0,e,s,gg)){tUG.wxVkey=1
}
tUG.wxXCkey=1
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var bWG=_mz(z,'view',['bindtap',0,'class',1,'data-id',1,'data-index',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var oXG=_n('view')
_rz(z,oXG,'class',6,e,s,gg)
var oZG=_mz(z,'group-avatar',['size',7,'src',1],[],e,s,gg)
_(oXG,oZG)
var xYG=_v()
_(oXG,xYG)
if(_oz(z,9,e,s,gg)){xYG.wxVkey=1
}
xYG.wxXCkey=1
_(bWG,oXG)
var f1G=_n('view')
_rz(z,f1G,'class',10,e,s,gg)
var c2G=_v()
_(f1G,c2G)
if(_oz(z,11,e,s,gg)){c2G.wxVkey=1
}
var h3G=_v()
_(f1G,h3G)
if(_oz(z,12,e,s,gg)){h3G.wxVkey=1
}
c2G.wxXCkey=1
h3G.wxXCkey=1
_(bWG,f1G)
_(r,bWG)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var c5G=_v()
_(r,c5G)
if(_oz(z,0,e,s,gg)){c5G.wxVkey=1
var o6G=_v()
_(c5G,o6G)
if(_oz(z,1,e,s,gg)){o6G.wxVkey=1
}
o6G.wxXCkey=1
}
c5G.wxXCkey=1
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var t9G=_mz(z,'input-face-btn',['bind:faceinput',0,'height',1,'width',1],[],e,s,gg)
_(r,t9G)
var a8G=_v()
_(r,a8G)
if(_oz(z,3,e,s,gg)){a8G.wxVkey=1
}
a8G.wxXCkey=1
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var bAH=_mz(z,'view',['class',0,'hidden',1],[],e,s,gg)
var xCH=_n('slot')
_(bAH,xCH)
var oBH=_v()
_(bAH,oBH)
if(_oz(z,2,e,s,gg)){oBH.wxVkey=1
}
oBH.wxXCkey=1
_(r,bAH)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var fEH=_v()
_(r,fEH)
if(_oz(z,0,e,s,gg)){fEH.wxVkey=1
var cFH=_mz(z,'view',['catchtouchmove',1,'class',1,'style',2],[],e,s,gg)
var hGH=_n('slot')
_(cFH,hGH)
_(fEH,cFH)
}
fEH.wxXCkey=1
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var cIH=_v()
_(r,cIH)
if(_oz(z,0,e,s,gg)){cIH.wxVkey=1
var oJH=_mz(z,'base-cell',['bindclickaction',1,'bindlongpressaction',1,'mode',2],[],e,s,gg)
_(cIH,oJH)
}
var lKH=_mz(z,'action-sheet',['bShow',4,'bindhide',1,'bindoncustomclick',2,'items',3,'style',4,'title',5],[],e,s,gg)
_(r,lKH)
cIH.wxXCkey=1
cIH.wxXCkey=3
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var tMH=_v()
_(r,tMH)
if(_oz(z,0,e,s,gg)){tMH.wxVkey=1
var eNH=_mz(z,'base-cell',['bindclickaction',1,'bindlongpressaction',1,'mode',2],[],e,s,gg)
_(tMH,eNH)
}
else if(_oz(z,4,e,s,gg)){tMH.wxVkey=2
var bOH=_mz(z,'base-cell',['bindclickaction',5,'bindlongpressaction',1,'mode',2],[],e,s,gg)
var oPH=_mz(z,'view',['bindtap',8,'class',1,'hoverClass',2],[],e,s,gg)
var xQH=_n('view')
_rz(z,xQH,'class',11,e,s,gg)
var oRH=_v()
_(xQH,oRH)
if(_oz(z,12,e,s,gg)){oRH.wxVkey=1
}
else{oRH.wxVkey=2
var fSH=_v()
_(oRH,fSH)
if(_oz(z,13,e,s,gg)){fSH.wxVkey=1
var hUH=_mz(z,'group-avatar',['class',14,'size',1,'src',2],[],e,s,gg)
_(fSH,hUH)
}
else if(_oz(z,17,e,s,gg)){fSH.wxVkey=2
var oVH=_mz(z,'group-avatar',['class',18,'size',1,'src',2],[],e,s,gg)
_(fSH,oVH)
}
else if(_oz(z,21,e,s,gg)){fSH.wxVkey=3
var cWH=_mz(z,'image-view',['catchtap',22,'class',1,'imgStyle',2,'src',3],[],e,s,gg)
_(fSH,cWH)
}
else{fSH.wxVkey=4
var oXH=_mz(z,'image-view',['catchtap',26,'class',1,'imgStyle',2,'placeholder',3,'src',4],[],e,s,gg)
_(fSH,oXH)
}
var lYH=_n('view')
_rz(z,lYH,'class',31,e,s,gg)
var aZH=_v()
_(lYH,aZH)
if(_oz(z,32,e,s,gg)){aZH.wxVkey=1
}
else if(_oz(z,33,e,s,gg)){aZH.wxVkey=2
}
else if(_oz(z,34,e,s,gg)){aZH.wxVkey=3
}
else if(_oz(z,35,e,s,gg)){aZH.wxVkey=4
}
else if(_oz(z,36,e,s,gg)){aZH.wxVkey=5
}
else if(_oz(z,37,e,s,gg)){aZH.wxVkey=6
}
else if(_oz(z,38,e,s,gg)){aZH.wxVkey=7
var t1H=_v()
_(aZH,t1H)
if(_oz(z,39,e,s,gg)){t1H.wxVkey=1
}
else{t1H.wxVkey=2
var e2H=_n('view')
_rz(z,e2H,'class',40,e,s,gg)
var b3H=_v()
_(e2H,b3H)
if(_oz(z,41,e,s,gg)){b3H.wxVkey=1
}
var o4H=_v()
_(e2H,o4H)
if(_oz(z,42,e,s,gg)){o4H.wxVkey=1
var x5H=_v()
_(o4H,x5H)
var o6H=function(c8H,f7H,h9H,gg){
var cAI=_v()
_(h9H,cAI)
if(_oz(z,45,c8H,f7H,gg)){cAI.wxVkey=1
}
var oBI=_v()
_(h9H,oBI)
if(_oz(z,46,c8H,f7H,gg)){oBI.wxVkey=1
}
cAI.wxXCkey=1
oBI.wxXCkey=1
return h9H
}
x5H.wxXCkey=2
_2z(z,43,o6H,e,s,gg,x5H,'item','index','{{item.type + item.value}}')
}
else{o4H.wxVkey=2
}
b3H.wxXCkey=1
o4H.wxXCkey=1
_(t1H,e2H)
}
t1H.wxXCkey=1
}
else if(_oz(z,47,e,s,gg)){aZH.wxVkey=8
}
else if(_oz(z,48,e,s,gg)){aZH.wxVkey=9
}
else if(_oz(z,49,e,s,gg)){aZH.wxVkey=10
}
else if(_oz(z,50,e,s,gg)){aZH.wxVkey=11
}
else if(_oz(z,51,e,s,gg)){aZH.wxVkey=12
}
else if(_oz(z,52,e,s,gg)){aZH.wxVkey=13
var lCI=_n('view')
_rz(z,lCI,'class',53,e,s,gg)
var aDI=_v()
_(lCI,aDI)
if(_oz(z,54,e,s,gg)){aDI.wxVkey=1
}
var tEI=_v()
_(lCI,tEI)
if(_oz(z,55,e,s,gg)){tEI.wxVkey=1
}
aDI.wxXCkey=1
tEI.wxXCkey=1
_(aZH,lCI)
}
else if(_oz(z,56,e,s,gg)){aZH.wxVkey=14
}
else if(_oz(z,57,e,s,gg)){aZH.wxVkey=15
var eFI=_n('view')
_rz(z,eFI,'class',58,e,s,gg)
var bGI=_v()
_(eFI,bGI)
if(_oz(z,59,e,s,gg)){bGI.wxVkey=1
}
var oHI=_v()
_(eFI,oHI)
if(_oz(z,60,e,s,gg)){oHI.wxVkey=1
}
bGI.wxXCkey=1
oHI.wxXCkey=1
_(aZH,eFI)
}
else if(_oz(z,61,e,s,gg)){aZH.wxVkey=16
var xII=_n('view')
_rz(z,xII,'class',62,e,s,gg)
var oJI=_v()
_(xII,oJI)
if(_oz(z,63,e,s,gg)){oJI.wxVkey=1
}
var fKI=_v()
_(xII,fKI)
if(_oz(z,64,e,s,gg)){fKI.wxVkey=1
}
oJI.wxXCkey=1
fKI.wxXCkey=1
_(aZH,xII)
}
else if(_oz(z,65,e,s,gg)){aZH.wxVkey=17
}
else if(_oz(z,66,e,s,gg)){aZH.wxVkey=18
}
else if(_oz(z,67,e,s,gg)){aZH.wxVkey=19
}
else if(_oz(z,68,e,s,gg)){aZH.wxVkey=20
}
else if(_oz(z,69,e,s,gg)){aZH.wxVkey=21
}
else if(_oz(z,70,e,s,gg)){aZH.wxVkey=22
}
else{aZH.wxVkey=23
var cLI=_n('view')
_rz(z,cLI,'class',71,e,s,gg)
var hMI=_v()
_(cLI,hMI)
if(_oz(z,72,e,s,gg)){hMI.wxVkey=1
var oNI=_v()
_(hMI,oNI)
var cOI=function(lQI,oPI,aRI,gg){
var eTI=_v()
_(aRI,eTI)
if(_oz(z,75,lQI,oPI,gg)){eTI.wxVkey=1
}
var bUI=_v()
_(aRI,bUI)
if(_oz(z,76,lQI,oPI,gg)){bUI.wxVkey=1
}
eTI.wxXCkey=1
bUI.wxXCkey=1
return aRI
}
oNI.wxXCkey=2
_2z(z,73,cOI,e,s,gg,oNI,'item','index','{{item.type + item.value}}')
}
else{hMI.wxVkey=2
}
hMI.wxXCkey=1
_(aZH,cLI)
}
aZH.wxXCkey=1
_(oRH,lYH)
var cTH=_v()
_(oRH,cTH)
if(_oz(z,77,e,s,gg)){cTH.wxVkey=1
}
else if(_oz(z,78,e,s,gg)){cTH.wxVkey=2
var oVI=_mz(z,'image-view',['class',79,'mode',1,'src',2],[],e,s,gg)
_(cTH,oVI)
}
else if(_oz(z,82,e,s,gg)){cTH.wxVkey=3
var xWI=_mz(z,'image-view',['class',83,'mode',1,'placeholder',2,'src',3],[],e,s,gg)
_(cTH,xWI)
}
else if(_oz(z,87,e,s,gg)){cTH.wxVkey=4
var oXI=_n('view')
_rz(z,oXI,'class',88,e,s,gg)
var fYI=_v()
_(oXI,fYI)
if(_oz(z,89,e,s,gg)){fYI.wxVkey=1
var o2I=_mz(z,'image-view',['class',90,'mode',1,'placeholder',2,'src',3],[],e,s,gg)
_(fYI,o2I)
}
var cZI=_v()
_(oXI,cZI)
if(_oz(z,94,e,s,gg)){cZI.wxVkey=1
var c3I=_mz(z,'image-view',['class',95,'mode',1,'placeholder',2,'src',3],[],e,s,gg)
_(cZI,c3I)
}
var h1I=_v()
_(oXI,h1I)
if(_oz(z,99,e,s,gg)){h1I.wxVkey=1
var o4I=_mz(z,'image-view',['class',100,'mode',1,'placeholder',2,'src',3],[],e,s,gg)
_(h1I,o4I)
}
fYI.wxXCkey=1
fYI.wxXCkey=3
cZI.wxXCkey=1
cZI.wxXCkey=3
h1I.wxXCkey=1
h1I.wxXCkey=3
_(cTH,oXI)
}
else if(_oz(z,104,e,s,gg)){cTH.wxVkey=5
var l5I=_mz(z,'image-view',['class',105,'mode',1,'placeholder',2,'src',3],[],e,s,gg)
_(cTH,l5I)
}
fSH.wxXCkey=1
fSH.wxXCkey=3
fSH.wxXCkey=3
fSH.wxXCkey=3
fSH.wxXCkey=3
cTH.wxXCkey=1
cTH.wxXCkey=3
cTH.wxXCkey=3
cTH.wxXCkey=3
cTH.wxXCkey=3
}
oRH.wxXCkey=1
oRH.wxXCkey=3
_(oPH,xQH)
_(bOH,oPH)
_(tMH,bOH)
}
var a6I=_mz(z,'action-sheet',['bShow',109,'bindhide',1,'bindoncustomclick',2,'items',3,'style',4,'title',5],[],e,s,gg)
_(r,a6I)
tMH.wxXCkey=1
tMH.wxXCkey=3
tMH.wxXCkey=3
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var e8I=_v()
_(r,e8I)
if(_oz(z,0,e,s,gg)){e8I.wxVkey=1
var b9I=_mz(z,'view',['catchtouchmove',1,'class',1],[],e,s,gg)
var o0I=_mz(z,'view',['class',3,'id',1],[],e,s,gg)
var oBJ=_n('view')
_rz(z,oBJ,'class',5,e,s,gg)
var fCJ=_v()
_(oBJ,fCJ)
if(_oz(z,6,e,s,gg)){fCJ.wxVkey=1
}
var cDJ=_v()
_(oBJ,cDJ)
if(_oz(z,7,e,s,gg)){cDJ.wxVkey=1
}
fCJ.wxXCkey=1
cDJ.wxXCkey=1
_(o0I,oBJ)
var xAJ=_v()
_(o0I,xAJ)
if(_oz(z,8,e,s,gg)){xAJ.wxVkey=1
}
xAJ.wxXCkey=1
_(b9I,o0I)
_(e8I,b9I)
}
e8I.wxXCkey=1
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var oFJ=_v()
_(r,oFJ)
if(_oz(z,0,e,s,gg)){oFJ.wxVkey=1
var cGJ=_v()
_(oFJ,cGJ)
if(_oz(z,1,e,s,gg)){cGJ.wxVkey=1
}
cGJ.wxXCkey=1
}
oFJ.wxXCkey=1
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var lIJ=_mz(z,'navigator',['appId',0,'extParams',1,'hoverClass',1,'path',2,'showWeappBack',3,'target',4,'url',5,'version',6],[],e,s,gg)
var aJJ=_n('slot')
_rz(z,aJJ,'name',8,e,s,gg)
_(lIJ,aJJ)
var tKJ=_mz(z,'view',['catchtap',9,'class',1,'data-appid',2,'data-item-code',3],[],e,s,gg)
var eLJ=_mz(z,'image-view',['class',13,'imgStyle',1,'mode',2,'src',3],[],e,s,gg)
_(tKJ,eLJ)
_(lIJ,tKJ)
_(r,lIJ)
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var oNJ=_n('view')
_rz(z,oNJ,'class',0,e,s,gg)
var xOJ=_v()
_(oNJ,xOJ)
if(_oz(z,1,e,s,gg)){xOJ.wxVkey=1
var cUJ=_mz(z,'image-view',['class',2,'mode',1,'src',2,'style',3],[],e,s,gg)
_(xOJ,cUJ)
}
var oPJ=_v()
_(oNJ,oPJ)
if(_oz(z,6,e,s,gg)){oPJ.wxVkey=1
var oVJ=_mz(z,'view',['catchtouchstart',7,'class',1,'data-event',2,'hoverClass',3],[],e,s,gg)
var lWJ=_v()
_(oVJ,lWJ)
if(_oz(z,11,e,s,gg)){lWJ.wxVkey=1
var eZJ=_mz(z,'image-view',['class',12,'src',1],[],e,s,gg)
_(lWJ,eZJ)
}
var aXJ=_v()
_(oVJ,aXJ)
if(_oz(z,14,e,s,gg)){aXJ.wxVkey=1
}
var tYJ=_v()
_(oVJ,tYJ)
if(_oz(z,15,e,s,gg)){tYJ.wxVkey=1
}
lWJ.wxXCkey=1
lWJ.wxXCkey=3
aXJ.wxXCkey=1
tYJ.wxXCkey=1
_(oPJ,oVJ)
}
var fQJ=_v()
_(oNJ,fQJ)
if(_oz(z,16,e,s,gg)){fQJ.wxVkey=1
}
var cRJ=_v()
_(oNJ,cRJ)
if(_oz(z,17,e,s,gg)){cRJ.wxVkey=1
}
var hSJ=_v()
_(oNJ,hSJ)
if(_oz(z,18,e,s,gg)){hSJ.wxVkey=1
}
var oTJ=_v()
_(oNJ,oTJ)
if(_oz(z,19,e,s,gg)){oTJ.wxVkey=1
var b1J=_n('view')
_rz(z,b1J,'class',20,e,s,gg)
var o2J=_v()
_(b1J,o2J)
if(_oz(z,21,e,s,gg)){o2J.wxVkey=1
}
var x3J=_v()
_(b1J,x3J)
if(_oz(z,22,e,s,gg)){x3J.wxVkey=1
}
var o4J=_v()
_(b1J,o4J)
if(_oz(z,23,e,s,gg)){o4J.wxVkey=1
}
var f5J=_v()
_(b1J,f5J)
if(_oz(z,24,e,s,gg)){f5J.wxVkey=1
}
o2J.wxXCkey=1
x3J.wxXCkey=1
o4J.wxXCkey=1
f5J.wxXCkey=1
_(oTJ,b1J)
}
xOJ.wxXCkey=1
xOJ.wxXCkey=3
oPJ.wxXCkey=1
oPJ.wxXCkey=3
fQJ.wxXCkey=1
cRJ.wxXCkey=1
hSJ.wxXCkey=1
oTJ.wxXCkey=1
_(r,oNJ)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var h7J=_mz(z,'gesture',['block',-1,'innerClass',0],[],e,s,gg)
var o8J=_v()
_(h7J,o8J)
if(_oz(z,1,e,s,gg)){o8J.wxVkey=1
}
var c9J=_v()
_(h7J,c9J)
if(_oz(z,2,e,s,gg)){c9J.wxVkey=1
var lAK=_mz(z,'video-view',['bindlongpress',3,'bindtap',1,'data-url',2,'duration',3,'muted',4,'showLoading',5,'src',6,'standalone',7,'thumb',8],[],e,s,gg)
_(c9J,lAK)
}
else{c9J.wxVkey=2
var aBK=_mz(z,'swiper',['bindanimationfinish',12,'bindchange',1,'bindtap',2,'bindtransition',3,'circular',4,'class',5,'current',6,'duration',7],[],e,s,gg)
var tCK=_v()
_(aBK,tCK)
var eDK=function(oFK,bEK,xGK,gg){
var fIK=_mz(z,'swiper-item',['catchtouchmove',22,'class',1],[],oFK,bEK,gg)
var cJK=_v()
_(fIK,cJK)
if(_oz(z,24,oFK,bEK,gg)){cJK.wxVkey=1
var hKK=_mz(z,'movable-view',['inertia',-1,'outOfBounds',-1,'scale',-1,'bindchange',25,'bindscale',1,'data-index',2,'direction',3,'disabled',4,'scaleMax',5,'scaleMin',6,'scaleValue',7,'style',8],[],oFK,bEK,gg)
var oLK=_mz(z,'image-view',['lazyLoad',-1,'showLoading',-1,'bindlongpress',34,'bindtap',1,'bindtouchend',2,'bindtouchstart',3,'data-url',4,'loadingSize',5,'loadingStyle',6,'mode',7,'size',8,'src',9],[],oFK,bEK,gg)
_(hKK,oLK)
_(cJK,hKK)
}
else{cJK.wxVkey=2
var cMK=_mz(z,'movable-view',['inertia',-1,'outOfBounds',-1,'scale',-1,'animation',44,'bindchange',1,'bindscale',2,'class',3,'data-index',4,'direction',5,'disabled',6,'scaleMax',7,'scaleMin',8,'scaleValue',9,'style',10],[],oFK,bEK,gg)
var oNK=_mz(z,'image-view',['lazyLoad',-1,'showLoading',-1,'bindlongpress',55,'bindtap',1,'bindtouchend',2,'bindtouchstart',3,'data-url',4,'loadingSize',5,'loadingStyle',6,'loadingViewStyle',7,'mode',8,'size',9,'src',10,'style',11],[],oFK,bEK,gg)
_(cMK,oNK)
_(cJK,cMK)
}
cJK.wxXCkey=1
cJK.wxXCkey=3
cJK.wxXCkey=3
_(xGK,fIK)
return xGK
}
tCK.wxXCkey=4
_2z(z,20,eDK,e,s,gg,tCK,'item','index','url')
_(c9J,aBK)
}
var o0J=_v()
_(h7J,o0J)
if(_oz(z,67,e,s,gg)){o0J.wxVkey=1
var lOK=_mz(z,'product-attachment',['showMenuDetail',-1,'backgroundHeight',68,'backgroundInsetBottom',1,'backgroundInsetLeft',2,'backgroundMode',3,'backgroundUrl',4,'catchtouchstart',5,'fixBottom',6,'mode',7,'product',8],[],e,s,gg)
_(o0J,lOK)
}
else if(_oz(z,77,e,s,gg)){o0J.wxVkey=2
var aPK=_n('view')
_rz(z,aPK,'class',78,e,s,gg)
var tQK=_v()
_(aPK,tQK)
if(_oz(z,79,e,s,gg)){tQK.wxVkey=1
}
var eRK=_v()
_(aPK,eRK)
if(_oz(z,80,e,s,gg)){eRK.wxVkey=1
var bSK=_mz(z,'view',['catchtap',81,'class',1,'hoverClass',2,'hoverStayTime',3],[],e,s,gg)
var oTK=_v()
_(bSK,oTK)
if(_oz(z,85,e,s,gg)){oTK.wxVkey=1
}
oTK.wxXCkey=1
_(eRK,bSK)
}
tQK.wxXCkey=1
eRK.wxXCkey=1
_(o0J,aPK)
}
o8J.wxXCkey=1
c9J.wxXCkey=1
c9J.wxXCkey=3
c9J.wxXCkey=3
o0J.wxXCkey=1
o0J.wxXCkey=3
_(r,h7J)
var xUK=_mz(z,'action-sheet',['bShow',86,'bindhide',1,'bindoncustomclick',2,'items',3,'title',4],[],e,s,gg)
_(r,xUK)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var fWK=_n('view')
_rz(z,fWK,'class',0,e,s,gg)
var hYK=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var oZK=_v()
_(hYK,oZK)
if(_oz(z,3,e,s,gg)){oZK.wxVkey=1
var o2K=_n('slot')
_(oZK,o2K)
}
else{oZK.wxVkey=2
var l3K=_v()
_(oZK,l3K)
if(_oz(z,4,e,s,gg)){l3K.wxVkey=1
var a4K=_mz(z,'swiper',['bindanimationfinish',5,'bindchange',1,'bindtransition',2,'circular',3,'duration',4,'style',5],[],e,s,gg)
var t5K=_v()
_(a4K,t5K)
var e6K=function(o8K,b7K,x9K,gg){
var fAL=_mz(z,'view',['class',13,'style',1],[],o8K,b7K,gg)
var hCL=_mz(z,'image-view',['lazyLoad',-1,'appid',15,'imgStyle',1,'itemCode',2,'mode',3,'placeholder',4,'size',5,'src',6,'style',7],[],o8K,b7K,gg)
_(fAL,hCL)
var cBL=_v()
_(fAL,cBL)
if(_oz(z,23,o8K,b7K,gg)){cBL.wxVkey=1
}
cBL.wxXCkey=1
_(x9K,fAL)
return x9K
}
t5K.wxXCkey=4
_2z(z,11,e6K,e,s,gg,t5K,'item','index','url')
_(l3K,a4K)
}
else{l3K.wxVkey=2
var oDL=_mz(z,'view',['class',24,'style',1],[],e,s,gg)
var oFL=_mz(z,'image-view',['lazyLoad',-1,'appid',26,'imgStyle',1,'itemCode',2,'mode',3,'placeholder',4,'size',5,'src',6],[],e,s,gg)
_(oDL,oFL)
var cEL=_v()
_(oDL,cEL)
if(_oz(z,33,e,s,gg)){cEL.wxVkey=1
}
cEL.wxXCkey=1
_(l3K,oDL)
}
l3K.wxXCkey=1
l3K.wxXCkey=3
l3K.wxXCkey=3
}
var c1K=_v()
_(hYK,c1K)
if(_oz(z,34,e,s,gg)){c1K.wxVkey=1
var lGL=_mz(z,'view',['class',35,'style',1],[],e,s,gg)
var aHL=_v()
_(lGL,aHL)
if(_oz(z,37,e,s,gg)){aHL.wxVkey=1
}
var tIL=_v()
_(lGL,tIL)
if(_oz(z,38,e,s,gg)){tIL.wxVkey=1
var eJL=_mz(z,'view',['catchtap',39,'class',1,'hoverClass',2,'hoverStayTime',3],[],e,s,gg)
var bKL=_v()
_(eJL,bKL)
if(_oz(z,43,e,s,gg)){bKL.wxVkey=1
}
bKL.wxXCkey=1
_(tIL,eJL)
}
aHL.wxXCkey=1
tIL.wxXCkey=1
_(c1K,lGL)
}
oZK.wxXCkey=1
oZK.wxXCkey=3
c1K.wxXCkey=1
_(fWK,hYK)
var cXK=_v()
_(fWK,cXK)
if(_oz(z,44,e,s,gg)){cXK.wxVkey=1
}
cXK.wxXCkey=1
_(r,fWK)
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var xML=_mz(z,'custom-mask',['bind:hidemask',0,'show',1],[],e,s,gg)
var oNL=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var fOL=_mz(z,'product-img-swiper',['images',4,'quickExit',1,'width',2],[],e,s,gg)
_(oNL,fOL)
var cPL=_n('view')
_rz(z,cPL,'class',7,e,s,gg)
var hQL=_v()
_(cPL,hQL)
if(_oz(z,8,e,s,gg)){hQL.wxVkey=1
}
var oRL=_v()
_(cPL,oRL)
if(_oz(z,9,e,s,gg)){oRL.wxVkey=1
}
hQL.wxXCkey=1
oRL.wxXCkey=1
_(oNL,cPL)
_(xML,oNL)
_(r,xML)
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var oTL=_mz(z,'custom-mask',['bind:hidemask',0,'show',1],[],e,s,gg)
var lUL=_mz(z,'view',['catchtouchmove',2,'class',1],[],e,s,gg)
var aVL=_v()
_(lUL,aVL)
if(_oz(z,4,e,s,gg)){aVL.wxVkey=1
}
var tWL=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',5,'style',1],[],e,s,gg)
var eXL=_v()
_(tWL,eXL)
if(_oz(z,7,e,s,gg)){eXL.wxVkey=1
var oZL=_v()
_(eXL,oZL)
var x1L=function(f3L,o2L,c4L,gg){
var o6L=_mz(z,'view',['catchtap',10,'class',1,'data-index',2,'hoverClass',3],[],f3L,o2L,gg)
var c7L=_v()
_(o6L,c7L)
if(_oz(z,14,f3L,o2L,gg)){c7L.wxVkey=1
}
var o8L=_v()
_(o6L,o8L)
if(_oz(z,15,f3L,o2L,gg)){o8L.wxVkey=1
}
var l9L=_mz(z,'product-attachment',['catch:preview',16,'highlightEnabled',1,'index',2,'mode',3,'product',4,'scene',5],[],f3L,o2L,gg)
_(o6L,l9L)
c7L.wxXCkey=1
o8L.wxXCkey=1
_(c4L,o6L)
return c4L
}
oZL.wxXCkey=4
_2z(z,8,x1L,e,s,gg,oZL,'item','index','key')
var bYL=_v()
_(eXL,bYL)
if(_oz(z,22,e,s,gg)){bYL.wxVkey=1
}
bYL.wxXCkey=1
}
else{eXL.wxVkey=2
var a0L=_v()
_(eXL,a0L)
var tAM=function(bCM,eBM,oDM,gg){
var oFM=_mz(z,'view',['catchtap',25,'class',1,'data-index',2,'hoverClass',3],[],bCM,eBM,gg)
var fGM=_mz(z,'product-attachment',['catch:preview',29,'index',1,'mode',2,'product',3,'scene',4],[],bCM,eBM,gg)
_(oFM,fGM)
_(oDM,oFM)
return oDM
}
a0L.wxXCkey=4
_2z(z,23,tAM,e,s,gg,a0L,'item','index','key')
}
eXL.wxXCkey=1
eXL.wxXCkey=3
eXL.wxXCkey=3
_(lUL,tWL)
aVL.wxXCkey=1
_(oTL,lUL)
_(r,oTL)
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var hIM=_mz(z,'custom-mask',['bind:hidemask',0,'show',1],[],e,s,gg)
var oJM=_mz(z,'view',['catchtouchmove',2,'class',1],[],e,s,gg)
var cKM=_mz(z,'scroll-view',['scrollY',-1,'style',4],[],e,s,gg)
var oLM=_v()
_(cKM,oLM)
if(_oz(z,5,e,s,gg)){oLM.wxVkey=1
}
var lMM=_v()
_(cKM,lMM)
var aNM=function(ePM,tOM,bQM,gg){
var xSM=_v()
_(bQM,xSM)
if(_oz(z,8,ePM,tOM,gg)){xSM.wxVkey=1
}
xSM.wxXCkey=1
return bQM
}
lMM.wxXCkey=2
_2z(z,6,aNM,e,s,gg,lMM,'item','index','id')
oLM.wxXCkey=1
_(oJM,cKM)
_(hIM,oJM)
_(r,hIM)
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var fUM=_v()
_(r,fUM)
if(_oz(z,0,e,s,gg)){fUM.wxVkey=1
var hWM=_mz(z,'view',['catchtouchmove',1,'class',1,'style',2],[],e,s,gg)
var oXM=_n('form')
_rz(z,oXM,'bindsubmit',4,e,s,gg)
var cYM=_mz(z,'input-face-btn',['bind:facedelete',5,'bind:faceinput',1,'bind:refocus',2,'bind:showpanel',3,'class',4,'height',5,'width',6],[],e,s,gg)
_(oXM,cYM)
_(hWM,oXM)
_(fUM,hWM)
}
var cVM=_v()
_(r,cVM)
if(_oz(z,12,e,s,gg)){cVM.wxVkey=1
}
fUM.wxXCkey=1
fUM.wxXCkey=3
cVM.wxXCkey=1
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var l1M=_n('view')
_rz(z,l1M,'class',0,e,s,gg)
var a2M=_v()
_(l1M,a2M)
if(_oz(z,1,e,s,gg)){a2M.wxVkey=1
}
var t3M=_v()
_(l1M,t3M)
if(_oz(z,2,e,s,gg)){t3M.wxVkey=1
}
var e4M=_mz(z,'view',['catchtap',3,'class',1,'hoverClass',2,'hoverStayTime',3,'hoverStopPropagation',4],[],e,s,gg)
var b5M=_v()
_(e4M,b5M)
if(_oz(z,8,e,s,gg)){b5M.wxVkey=1
}
var o6M=_v()
_(e4M,o6M)
if(_oz(z,9,e,s,gg)){o6M.wxVkey=1
var x7M=_mz(z,'view',['catchtouchmove',10,'class',1],[],e,s,gg)
var o8M=_v()
_(x7M,o8M)
var f9M=function(hAN,c0M,oBN,gg){
var oDN=_v()
_(oBN,oDN)
if(_oz(z,14,hAN,c0M,gg)){oDN.wxVkey=1
}
oDN.wxXCkey=1
return oBN
}
o8M.wxXCkey=2
_2z(z,12,f9M,e,s,gg,o8M,'item','index','index')
_(o6M,x7M)
}
b5M.wxXCkey=1
o6M.wxXCkey=1
_(l1M,e4M)
a2M.wxXCkey=1
t3M.wxXCkey=1
_(r,l1M)
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var aFN=_v()
_(r,aFN)
if(_oz(z,0,e,s,gg)){aFN.wxVkey=1
var tGN=_n('selectable-view')
var eHN=_v()
_(tGN,eHN)
if(_oz(z,1,e,s,gg)){eHN.wxVkey=1
var bIN=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var oJN=_v()
_(bIN,oJN)
if(_oz(z,4,e,s,gg)){oJN.wxVkey=1
var oLN=_v()
_(oJN,oLN)
var fMN=function(hON,cNN,oPN,gg){
var oRN=_v()
_(oPN,oRN)
if(_oz(z,7,hON,cNN,gg)){oRN.wxVkey=1
}
else if(_oz(z,8,hON,cNN,gg)){oRN.wxVkey=2
var lSN=_mz(z,'view',['hoverStopPropagation',-1,'catchtap',9,'class',1,'data-url',2],[],hON,cNN,gg)
var aTN=_n('selectable-view')
_(lSN,aTN)
_(oRN,lSN)
}
else if(_oz(z,12,hON,cNN,gg)){oRN.wxVkey=3
}
oRN.wxXCkey=1
oRN.wxXCkey=3
return oPN
}
oLN.wxXCkey=4
_2z(z,5,fMN,e,s,gg,oLN,'item','index','{{item.type + item.value}}')
}
else{oJN.wxVkey=2
}
var xKN=_v()
_(bIN,xKN)
if(_oz(z,13,e,s,gg)){xKN.wxVkey=1
}
oJN.wxXCkey=1
oJN.wxXCkey=3
xKN.wxXCkey=1
_(eHN,bIN)
}
eHN.wxXCkey=1
eHN.wxXCkey=3
_(aFN,tGN)
}
else{aFN.wxVkey=2
var tUN=_n('selectable-view')
var eVN=_v()
_(tUN,eVN)
if(_oz(z,14,e,s,gg)){eVN.wxVkey=1
var bWN=_mz(z,'view',['class',15,'style',1],[],e,s,gg)
var oXN=_v()
_(bWN,oXN)
if(_oz(z,17,e,s,gg)){oXN.wxVkey=1
var xYN=_v()
_(oXN,xYN)
var oZN=function(c2N,f1N,h3N,gg){
var c5N=_v()
_(h3N,c5N)
if(_oz(z,20,c2N,f1N,gg)){c5N.wxVkey=1
}
else if(_oz(z,21,c2N,f1N,gg)){c5N.wxVkey=2
var o6N=_mz(z,'view',['hoverStopPropagation',-1,'catchtap',22,'class',1,'data-url',2],[],c2N,f1N,gg)
var l7N=_n('selectable-view')
_(o6N,l7N)
_(c5N,o6N)
}
else if(_oz(z,25,c2N,f1N,gg)){c5N.wxVkey=3
}
c5N.wxXCkey=1
c5N.wxXCkey=3
return h3N
}
xYN.wxXCkey=4
_2z(z,18,oZN,e,s,gg,xYN,'item','index','{{item.type + item.value}}')
}
else{oXN.wxVkey=2
}
oXN.wxXCkey=1
oXN.wxXCkey=3
_(eVN,bWN)
}
eVN.wxXCkey=1
eVN.wxXCkey=3
_(aFN,tUN)
}
aFN.wxXCkey=1
aFN.wxXCkey=3
aFN.wxXCkey=3
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
var t9N=_n('view')
_rz(z,t9N,'class',0,e,s,gg)
var xCO=_mz(z,'view',['catchtap',1,'hoverClass',1,'hoverStayTime',2,'id',3],[],e,s,gg)
var cFO=_n('view')
_rz(z,cFO,'class',5,e,s,gg)
var hGO=_v()
_(cFO,hGO)
if(_oz(z,6,e,s,gg)){hGO.wxVkey=1
var oHO=_v()
_(hGO,oHO)
if(_oz(z,7,e,s,gg)){oHO.wxVkey=1
var cIO=_v()
_(oHO,cIO)
if(_oz(z,8,e,s,gg)){cIO.wxVkey=1
}
cIO.wxXCkey=1
}
oHO.wxXCkey=1
}
else if(_oz(z,9,e,s,gg)){hGO.wxVkey=2
}
else if(_oz(z,10,e,s,gg)){hGO.wxVkey=3
}
else{hGO.wxVkey=4
var oJO=_n('view')
_rz(z,oJO,'class',11,e,s,gg)
var aLO=_n('view')
_rz(z,aLO,'class',12,e,s,gg)
var eNO=_mz(z,'view',['hoverStopPropagation',-1,'catchlongpress',13,'catchtap',1,'class',2,'data-isopenprofile',3,'data-userinfo',4],[],e,s,gg)
var bOO=_v()
_(eNO,bOO)
if(_oz(z,18,e,s,gg)){bOO.wxVkey=1
}
var oPO=_v()
_(eNO,oPO)
if(_oz(z,19,e,s,gg)){oPO.wxVkey=1
}
var xQO=_v()
_(eNO,xQO)
if(_oz(z,20,e,s,gg)){xQO.wxVkey=1
}
bOO.wxXCkey=1
oPO.wxXCkey=1
xQO.wxXCkey=1
_(aLO,eNO)
var tMO=_v()
_(aLO,tMO)
if(_oz(z,21,e,s,gg)){tMO.wxVkey=1
}
tMO.wxXCkey=1
_(oJO,aLO)
var lKO=_v()
_(oJO,lKO)
if(_oz(z,22,e,s,gg)){lKO.wxVkey=1
}
lKO.wxXCkey=1
_(hGO,oJO)
}
hGO.wxXCkey=1
_(xCO,cFO)
var oRO=_n('slot')
_rz(z,oRO,'name',23,e,s,gg)
_(xCO,oRO)
var oDO=_v()
_(xCO,oDO)
if(_oz(z,24,e,s,gg)){oDO.wxVkey=1
var fSO=_n('view')
_rz(z,fSO,'class',25,e,s,gg)
var cTO=_v()
_(fSO,cTO)
if(_oz(z,26,e,s,gg)){cTO.wxVkey=1
var hUO=_mz(z,'recommend-fold-text',['bind:change',27,'color',1,'comment',2,'commentArr',3,'containerWidth',4,'lineCount',5,'noFold',6],[],e,s,gg)
_(cTO,hUO)
}
else if(_oz(z,34,e,s,gg)){cTO.wxVkey=2
var oVO=_mz(z,'recommend-fold-text',['bind:change',35,'color',1,'comment',2,'commentArr',3,'containerWidth',4,'lineCount',5,'noFold',6],[],e,s,gg)
_(cTO,oVO)
}
cTO.wxXCkey=1
cTO.wxXCkey=3
cTO.wxXCkey=3
_(oDO,fSO)
}
var fEO=_v()
_(xCO,fEO)
if(_oz(z,42,e,s,gg)){fEO.wxVkey=1
}
oDO.wxXCkey=1
oDO.wxXCkey=3
fEO.wxXCkey=1
_(t9N,xCO)
var e0N=_v()
_(t9N,e0N)
if(_oz(z,43,e,s,gg)){e0N.wxVkey=1
var cWO=_mz(z,'view',['hoverStopPropagation',-1,'catchtap',44,'class',1,'hoverClass',2,'hoverStayTime',3],[],e,s,gg)
var oXO=_mz(z,'group-avatar',['size',48,'src',1],[],e,s,gg)
_(cWO,oXO)
_(e0N,cWO)
}
var bAO=_v()
_(t9N,bAO)
if(_oz(z,50,e,s,gg)){bAO.wxVkey=1
var lYO=_v()
_(bAO,lYO)
if(_oz(z,51,e,s,gg)){lYO.wxVkey=1
}
lYO.wxXCkey=1
}
var oBO=_v()
_(t9N,oBO)
if(_oz(z,52,e,s,gg)){oBO.wxVkey=1
var aZO=_v()
_(oBO,aZO)
if(_oz(z,53,e,s,gg)){aZO.wxVkey=1
var e2O=_v()
_(aZO,e2O)
if(_oz(z,54,e,s,gg)){e2O.wxVkey=1
}
var b3O=_v()
_(aZO,b3O)
if(_oz(z,55,e,s,gg)){b3O.wxVkey=1
var o4O=_v()
_(b3O,o4O)
var x5O=function(f7O,o6O,c8O,gg){
var o0O=_v()
_(c8O,o0O)
if(_oz(z,58,f7O,o6O,gg)){o0O.wxVkey=1
}
o0O.wxXCkey=1
return c8O
}
o4O.wxXCkey=2
_2z(z,56,x5O,e,s,gg,o4O,'item','index','openid')
}
e2O.wxXCkey=1
b3O.wxXCkey=1
}
else if(_oz(z,59,e,s,gg)){aZO.wxVkey=2
var cAP=_v()
_(aZO,cAP)
if(_oz(z,60,e,s,gg)){cAP.wxVkey=1
}
var oBP=_v()
_(aZO,oBP)
if(_oz(z,61,e,s,gg)){oBP.wxVkey=1
var lCP=_v()
_(oBP,lCP)
var aDP=function(eFP,tEP,bGP,gg){
var xIP=_v()
_(bGP,xIP)
if(_oz(z,64,eFP,tEP,gg)){xIP.wxVkey=1
}
xIP.wxXCkey=1
return bGP
}
lCP.wxXCkey=2
_2z(z,62,aDP,e,s,gg,lCP,'item','index','openid')
}
cAP.wxXCkey=1
oBP.wxXCkey=1
}
var t1O=_v()
_(oBO,t1O)
if(_oz(z,65,e,s,gg)){t1O.wxVkey=1
var oJP=_v()
_(t1O,oJP)
var fKP=function(hMP,cLP,oNP,gg){
var oPP=_v()
_(oNP,oPP)
if(_oz(z,70,hMP,cLP,gg)){oPP.wxVkey=1
var lQP=_mz(z,'view',['catchtap',71,'class',1,'data-comment',2,'data-commentidx',3,'data-fatherid',4,'data-replyid',5,'data-replyidx',6,'data-toid',7,'data-totype',8,'data-type',9,'hoverClass',10,'id',11],[],hMP,cLP,gg)
var aRP=_n('selectable-view')
var tSP=_v()
_(aRP,tSP)
if(_oz(z,83,hMP,cLP,gg)){tSP.wxVkey=1
}
var eTP=_v()
_(aRP,eTP)
if(_oz(z,84,hMP,cLP,gg)){eTP.wxVkey=1
var bUP=_v()
_(eTP,bUP)
var oVP=function(oXP,xWP,fYP,gg){
var h1P=_v()
_(fYP,h1P)
if(_oz(z,87,oXP,xWP,gg)){h1P.wxVkey=1
}
else if(_oz(z,88,oXP,xWP,gg)){h1P.wxVkey=2
var o2P=_mz(z,'view',['catchtap',89,'class',1,'data-url',2],[],oXP,xWP,gg)
var c3P=_n('selectable-view')
_rz(z,c3P,'isinline',92,oXP,xWP,gg)
_(o2P,c3P)
_(h1P,o2P)
}
else if(_oz(z,93,oXP,xWP,gg)){h1P.wxVkey=3
}
h1P.wxXCkey=1
h1P.wxXCkey=3
return fYP
}
bUP.wxXCkey=4
_2z(z,85,oVP,hMP,cLP,gg,bUP,'item','index','{{item.type + item.value}}')
}
else{eTP.wxVkey=2
}
tSP.wxXCkey=1
eTP.wxXCkey=1
eTP.wxXCkey=3
_(lQP,aRP)
_(oPP,lQP)
}
oPP.wxXCkey=1
oPP.wxXCkey=3
return oNP
}
oJP.wxXCkey=4
_2z(z,68,fKP,e,s,gg,oJP,'commentItem','commentIdx','comment_id')
}
aZO.wxXCkey=1
t1O.wxXCkey=1
t1O.wxXCkey=3
}
else if(_oz(z,94,e,s,gg)){oBO.wxVkey=2
var o4P=_v()
_(oBO,o4P)
if(_oz(z,95,e,s,gg)){o4P.wxVkey=1
var b9P=_n('view')
_rz(z,b9P,'class',96,e,s,gg)
var xAQ=_v()
_(b9P,xAQ)
var oBQ=function(cDQ,fCQ,hEQ,gg){
var cGQ=_v()
_(hEQ,cGQ)
if(_oz(z,99,cDQ,fCQ,gg)){cGQ.wxVkey=1
}
cGQ.wxXCkey=1
return hEQ
}
xAQ.wxXCkey=2
_2z(z,97,oBQ,e,s,gg,xAQ,'item','index','openid')
var o0P=_v()
_(b9P,o0P)
if(_oz(z,100,e,s,gg)){o0P.wxVkey=1
var oHQ=_v()
_(o0P,oHQ)
if(_oz(z,101,e,s,gg)){oHQ.wxVkey=1
}
oHQ.wxXCkey=1
}
o0P.wxXCkey=1
_(o4P,b9P)
}
var l5P=_v()
_(oBO,l5P)
if(_oz(z,102,e,s,gg)){l5P.wxVkey=1
var lIQ=_v()
_(l5P,lIQ)
var aJQ=function(eLQ,tKQ,bMQ,gg){
var xOQ=_v()
_(bMQ,xOQ)
if(_oz(z,105,eLQ,tKQ,gg)){xOQ.wxVkey=1
}
xOQ.wxXCkey=1
return bMQ
}
lIQ.wxXCkey=2
_2z(z,103,aJQ,e,s,gg,lIQ,'item','index','openid')
}
var a6P=_v()
_(oBO,a6P)
if(_oz(z,106,e,s,gg)){a6P.wxVkey=1
}
var t7P=_v()
_(oBO,t7P)
if(_oz(z,107,e,s,gg)){t7P.wxVkey=1
var oPQ=_n('view')
_rz(z,oPQ,'class',108,e,s,gg)
var fQQ=_v()
_(oPQ,fQQ)
if(_oz(z,109,e,s,gg)){fQQ.wxVkey=1
}
var cRQ=_v()
_(oPQ,cRQ)
var hSQ=function(cUQ,oTQ,oVQ,gg){
var aXQ=_v()
_(oVQ,aXQ)
if(_oz(z,114,cUQ,oTQ,gg)){aXQ.wxVkey=1
var tYQ=_n('view')
_rz(z,tYQ,'class',115,cUQ,oTQ,gg)
var eZQ=_mz(z,'image-view',['catchtap',116,'class',1,'data-userinfo',2,'placeholder',3,'src',4],[],cUQ,oTQ,gg)
_(tYQ,eZQ)
var b1Q=_n('view')
_rz(z,b1Q,'class',121,cUQ,oTQ,gg)
var x3Q=_mz(z,'view',['catchtap',122,'class',1,'data-comment',2,'data-commentidx',3,'data-fatherid',4,'data-panel-type',5,'data-replyid',6,'data-replyidx',7,'data-toid',8,'data-totype',9,'data-type',10,'hoverClass',11,'id',12],[],cUQ,oTQ,gg)
var o4Q=_n('selectable-view')
var f5Q=_v()
_(o4Q,f5Q)
if(_oz(z,135,cUQ,oTQ,gg)){f5Q.wxVkey=1
}
var c6Q=_v()
_(o4Q,c6Q)
if(_oz(z,136,cUQ,oTQ,gg)){c6Q.wxVkey=1
var h7Q=_v()
_(c6Q,h7Q)
var o8Q=function(o0Q,c9Q,lAR,gg){
var tCR=_v()
_(lAR,tCR)
if(_oz(z,139,o0Q,c9Q,gg)){tCR.wxVkey=1
}
else if(_oz(z,140,o0Q,c9Q,gg)){tCR.wxVkey=2
var eDR=_mz(z,'view',['catchtap',141,'class',1,'data-url',2],[],o0Q,c9Q,gg)
var bER=_n('selectable-view')
_rz(z,bER,'isinline',144,o0Q,c9Q,gg)
_(eDR,bER)
_(tCR,eDR)
}
else if(_oz(z,145,o0Q,c9Q,gg)){tCR.wxVkey=3
}
tCR.wxXCkey=1
tCR.wxXCkey=3
return lAR
}
h7Q.wxXCkey=4
_2z(z,137,o8Q,cUQ,oTQ,gg,h7Q,'item','index','{{item.type + item.value}}')
}
else{c6Q.wxVkey=2
}
f5Q.wxXCkey=1
c6Q.wxXCkey=1
c6Q.wxXCkey=3
_(x3Q,o4Q)
_(b1Q,x3Q)
var o2Q=_v()
_(b1Q,o2Q)
if(_oz(z,146,cUQ,oTQ,gg)){o2Q.wxVkey=1
var oFR=_n('view')
_rz(z,oFR,'class',147,cUQ,oTQ,gg)
var oHR=_v()
_(oFR,oHR)
var fIR=function(hKR,cJR,oLR,gg){
var oNR=_v()
_(oLR,oNR)
if(_oz(z,152,hKR,cJR,gg)){oNR.wxVkey=1
var lOR=_mz(z,'view',['catchtap',153,'class',1,'data-comment',2,'data-commentidx',3,'data-fatherid',4,'data-panel-type',5,'data-replyid',6,'data-replyidx',7,'data-toid',8,'data-totype',9,'data-type',10,'hoverClass',11,'id',12],[],hKR,cJR,gg)
var aPR=_n('selectable-view')
var tQR=_v()
_(aPR,tQR)
if(_oz(z,166,hKR,cJR,gg)){tQR.wxVkey=1
}
var eRR=_v()
_(aPR,eRR)
if(_oz(z,167,hKR,cJR,gg)){eRR.wxVkey=1
var bSR=_v()
_(eRR,bSR)
var oTR=function(oVR,xUR,fWR,gg){
var hYR=_v()
_(fWR,hYR)
if(_oz(z,170,oVR,xUR,gg)){hYR.wxVkey=1
}
else if(_oz(z,171,oVR,xUR,gg)){hYR.wxVkey=2
var oZR=_mz(z,'view',['catchtap',172,'class',1,'data-url',2],[],oVR,xUR,gg)
var c1R=_n('selectable-view')
_rz(z,c1R,'isinline',175,oVR,xUR,gg)
_(oZR,c1R)
_(hYR,oZR)
}
else if(_oz(z,176,oVR,xUR,gg)){hYR.wxVkey=3
}
hYR.wxXCkey=1
hYR.wxXCkey=3
return fWR
}
bSR.wxXCkey=4
_2z(z,168,oTR,hKR,cJR,gg,bSR,'item','index','{{item.type + item.value}}')
}
else{eRR.wxVkey=2
}
tQR.wxXCkey=1
eRR.wxXCkey=1
eRR.wxXCkey=3
_(lOR,aPR)
_(oNR,lOR)
}
oNR.wxXCkey=1
oNR.wxXCkey=3
return oLR
}
oHR.wxXCkey=4
_2z(z,150,fIR,cUQ,oTQ,gg,oHR,'replyItem','replyIdx','comment_id')
var xGR=_v()
_(oFR,xGR)
if(_oz(z,177,cUQ,oTQ,gg)){xGR.wxVkey=1
}
xGR.wxXCkey=1
_(o2Q,oFR)
}
o2Q.wxXCkey=1
o2Q.wxXCkey=3
_(tYQ,b1Q)
_(aXQ,tYQ)
}
aXQ.wxXCkey=1
aXQ.wxXCkey=3
return oVQ
}
cRQ.wxXCkey=4
_2z(z,112,hSQ,e,s,gg,cRQ,'commentItem','commentIdx','comment_id')
fQQ.wxXCkey=1
_(t7P,oPQ)
}
var e8P=_v()
_(oBO,e8P)
if(_oz(z,178,e,s,gg)){e8P.wxVkey=1
}
o4P.wxXCkey=1
l5P.wxXCkey=1
a6P.wxXCkey=1
t7P.wxXCkey=1
t7P.wxXCkey=3
e8P.wxXCkey=1
}
e0N.wxXCkey=1
e0N.wxXCkey=3
bAO.wxXCkey=1
oBO.wxXCkey=1
oBO.wxXCkey=3
oBO.wxXCkey=3
_(r,t9N)
var o2R=_mz(z,'action-sheet',['bShow',179,'bindhide',1,'bindoncustomclick',2,'items',3,'style',4,'title',5],[],e,s,gg)
_(r,o2R)
var l3R=_mz(z,'custom-mask',['bind:animationfinish',185,'bind:hidemask',1,'show',2,'zIndex',3],[],e,s,gg)
var a4R=_v()
_(l3R,a4R)
if(_oz(z,189,e,s,gg)){a4R.wxVkey=1
var t5R=_n('view')
_rz(z,t5R,'class',190,e,s,gg)
var e6R=_v()
_(t5R,e6R)
if(_oz(z,191,e,s,gg)){e6R.wxVkey=1
var b7R=_v()
_(e6R,b7R)
if(_oz(z,192,e,s,gg)){b7R.wxVkey=1
}
b7R.wxXCkey=1
}
else{e6R.wxVkey=2
var o8R=_n('view')
_rz(z,o8R,'style',193,e,s,gg)
var o0R=_mz(z,'scroll-view',['scrollY',-1,'bindscroll',194,'bindscrolltolower',1,'class',2,'scrollTop',3,'style',4],[],e,s,gg)
var fAS=_mz(z,'view',['class',199,'style',1],[],e,s,gg)
var cBS=_v()
_(fAS,cBS)
if(_oz(z,201,e,s,gg)){cBS.wxVkey=1
var oFS=_n('view')
_rz(z,oFS,'class',202,e,s,gg)
var aHS=_v()
_(oFS,aHS)
var tIS=function(bKS,eJS,oLS,gg){
var oNS=_v()
_(oLS,oNS)
if(_oz(z,205,bKS,eJS,gg)){oNS.wxVkey=1
}
oNS.wxXCkey=1
return oLS
}
aHS.wxXCkey=2
_2z(z,203,tIS,e,s,gg,aHS,'item','index','openid')
var lGS=_v()
_(oFS,lGS)
if(_oz(z,206,e,s,gg)){lGS.wxVkey=1
var fOS=_v()
_(lGS,fOS)
if(_oz(z,207,e,s,gg)){fOS.wxVkey=1
}
fOS.wxXCkey=1
}
lGS.wxXCkey=1
_(cBS,oFS)
}
var hCS=_v()
_(fAS,hCS)
if(_oz(z,208,e,s,gg)){hCS.wxVkey=1
var cPS=_v()
_(hCS,cPS)
var hQS=function(cSS,oRS,oTS,gg){
var aVS=_v()
_(oTS,aVS)
if(_oz(z,213,cSS,oRS,gg)){aVS.wxVkey=1
var tWS=_n('view')
_rz(z,tWS,'class',214,cSS,oRS,gg)
var eXS=_mz(z,'image-view',['catchtap',215,'class',1,'data-userinfo',2,'placeholder',3,'src',4],[],cSS,oRS,gg)
_(tWS,eXS)
var bYS=_n('view')
_rz(z,bYS,'class',220,cSS,oRS,gg)
var x1S=_mz(z,'view',['catchtap',221,'class',1,'data-comment',2,'data-commentidx',3,'data-fatherid',4,'data-panel-type',5,'data-replyid',6,'data-replyidx',7,'data-toid',8,'data-totype',9,'data-type',10,'hoverClass',11,'id',12],[],cSS,oRS,gg)
var o2S=_n('selectable-view')
var f3S=_v()
_(o2S,f3S)
if(_oz(z,234,cSS,oRS,gg)){f3S.wxVkey=1
}
var c4S=_v()
_(o2S,c4S)
if(_oz(z,235,cSS,oRS,gg)){c4S.wxVkey=1
var h5S=_v()
_(c4S,h5S)
var o6S=function(o8S,c7S,l9S,gg){
var tAT=_v()
_(l9S,tAT)
if(_oz(z,238,o8S,c7S,gg)){tAT.wxVkey=1
}
else if(_oz(z,239,o8S,c7S,gg)){tAT.wxVkey=2
var eBT=_mz(z,'view',['catchtap',240,'class',1,'data-url',2],[],o8S,c7S,gg)
var bCT=_n('selectable-view')
_rz(z,bCT,'isinline',243,o8S,c7S,gg)
_(eBT,bCT)
_(tAT,eBT)
}
else if(_oz(z,244,o8S,c7S,gg)){tAT.wxVkey=3
}
tAT.wxXCkey=1
tAT.wxXCkey=3
return l9S
}
h5S.wxXCkey=4
_2z(z,236,o6S,cSS,oRS,gg,h5S,'item','index','{{item.type + item.value}}')
}
else{c4S.wxVkey=2
}
f3S.wxXCkey=1
c4S.wxXCkey=1
c4S.wxXCkey=3
_(x1S,o2S)
_(bYS,x1S)
var oZS=_v()
_(bYS,oZS)
if(_oz(z,245,cSS,oRS,gg)){oZS.wxVkey=1
var oDT=_n('view')
_rz(z,oDT,'class',246,cSS,oRS,gg)
var oFT=_v()
_(oDT,oFT)
var fGT=function(hIT,cHT,oJT,gg){
var oLT=_v()
_(oJT,oLT)
if(_oz(z,251,hIT,cHT,gg)){oLT.wxVkey=1
var lMT=_mz(z,'view',['catchtap',252,'class',1,'data-comment',2,'data-commentidx',3,'data-fatherid',4,'data-panel-type',5,'data-replyid',6,'data-replyidx',7,'data-toid',8,'data-totype',9,'data-type',10,'hoverClass',11,'id',12],[],hIT,cHT,gg)
var aNT=_n('selectable-view')
var tOT=_v()
_(aNT,tOT)
if(_oz(z,265,hIT,cHT,gg)){tOT.wxVkey=1
}
var ePT=_v()
_(aNT,ePT)
if(_oz(z,266,hIT,cHT,gg)){ePT.wxVkey=1
var bQT=_v()
_(ePT,bQT)
var oRT=function(oTT,xST,fUT,gg){
var hWT=_v()
_(fUT,hWT)
if(_oz(z,269,oTT,xST,gg)){hWT.wxVkey=1
}
else if(_oz(z,270,oTT,xST,gg)){hWT.wxVkey=2
var oXT=_mz(z,'view',['catchtap',271,'class',1,'data-url',2],[],oTT,xST,gg)
var cYT=_n('selectable-view')
_rz(z,cYT,'isinline',274,oTT,xST,gg)
_(oXT,cYT)
_(hWT,oXT)
}
else if(_oz(z,275,oTT,xST,gg)){hWT.wxVkey=3
}
hWT.wxXCkey=1
hWT.wxXCkey=3
return fUT
}
bQT.wxXCkey=4
_2z(z,267,oRT,hIT,cHT,gg,bQT,'item','index','{{item.type + item.value}}')
}
else{ePT.wxVkey=2
}
tOT.wxXCkey=1
ePT.wxXCkey=1
ePT.wxXCkey=3
_(lMT,aNT)
_(oLT,lMT)
}
oLT.wxXCkey=1
oLT.wxXCkey=3
return oJT
}
oFT.wxXCkey=4
_2z(z,249,fGT,cSS,oRS,gg,oFT,'replyItem','replyIdx','comment_id')
var xET=_v()
_(oDT,xET)
if(_oz(z,276,cSS,oRS,gg)){xET.wxVkey=1
}
xET.wxXCkey=1
_(oZS,oDT)
}
oZS.wxXCkey=1
oZS.wxXCkey=3
_(tWS,bYS)
_(aVS,tWS)
}
aVS.wxXCkey=1
aVS.wxXCkey=3
return oTS
}
cPS.wxXCkey=4
_2z(z,211,hQS,e,s,gg,cPS,'commentItem','commentIdx','comment_id')
}
var oDS=_v()
_(fAS,oDS)
if(_oz(z,277,e,s,gg)){oDS.wxVkey=1
}
var cES=_v()
_(fAS,cES)
if(_oz(z,278,e,s,gg)){cES.wxVkey=1
}
cBS.wxXCkey=1
hCS.wxXCkey=1
hCS.wxXCkey=3
oDS.wxXCkey=1
cES.wxXCkey=1
_(o0R,fAS)
_(o8R,o0R)
var oZT=_mz(z,'input-face-btn',['bind:facedelete',279,'bind:faceinput',1,'bind:refocus',2,'bind:showpanel',3,'class',4,'height',5,'panelStyle',6,'width',7],[],e,s,gg)
_(o8R,oZT)
var x9R=_v()
_(o8R,x9R)
if(_oz(z,287,e,s,gg)){x9R.wxVkey=1
}
x9R.wxXCkey=1
_(e6R,o8R)
}
e6R.wxXCkey=1
e6R.wxXCkey=3
_(a4R,t5R)
}
a4R.wxXCkey=1
a4R.wxXCkey=3
_(r,l3R)
var l1T=_mz(z,'ignore-dialog',['bindonClickChooseReason',288,'ignoreChoices',1,'ignoreClickPosition',2,'showIgnoreDialog',3],[],e,s,gg)
_(r,l1T)
var a2T=_mz(z,'modal',['bind:cancel',292,'bind:confirm',1,'confirmText',2,'content',3,'inputPlaceHolder',4,'needInput',5,'show',6,'showCancel',7,'title',8],[],e,s,gg)
_(r,a2T)
return r
}
e_[x[46]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
var e4T=_n('view')
_rz(z,e4T,'class',0,e,s,gg)
var b5T=_v()
_(e4T,b5T)
if(_oz(z,1,e,s,gg)){b5T.wxVkey=1
var x7T=_mz(z,'view',['bindtap',2,'class',1,'hoverClass',2,'hoverStayTime',3],[],e,s,gg)
var o8T=_v()
_(x7T,o8T)
if(_oz(z,6,e,s,gg)){o8T.wxVkey=1
}
o8T.wxXCkey=1
_(b5T,x7T)
var o6T=_v()
_(b5T,o6T)
if(_oz(z,7,e,s,gg)){o6T.wxVkey=1
var f9T=_v()
_(o6T,f9T)
var c0T=function(oBU,hAU,cCU,gg){
var lEU=_v()
_(cCU,lEU)
if(_oz(z,10,oBU,hAU,gg)){lEU.wxVkey=1
var aFU=_mz(z,'view',['bindtap',11,'class',1,'data-id',2,'hoverClass',3,'hoverStayTime',4],[],oBU,hAU,gg)
var tGU=_mz(z,'simple-image',['class',16,'mode',1,'placeholder',2,'src',3],[],oBU,hAU,gg)
_(aFU,tGU)
_(lEU,aFU)
}
lEU.wxXCkey=1
lEU.wxXCkey=3
return cCU
}
f9T.wxXCkey=4
_2z(z,8,c0T,e,s,gg,f9T,'item','index','id')
}
o6T.wxXCkey=1
o6T.wxXCkey=3
}
else{b5T.wxVkey=2
var eHU=_v()
_(b5T,eHU)
if(_oz(z,20,e,s,gg)){eHU.wxVkey=1
}
var bIU=_mz(z,'view',['bindtap',21,'class',1,'hoverClass',2,'hoverStayTime',3],[],e,s,gg)
var oJU=_v()
_(bIU,oJU)
if(_oz(z,25,e,s,gg)){oJU.wxVkey=1
}
var xKU=_mz(z,'group-avatar',['size',26,'src',1],[],e,s,gg)
_(bIU,xKU)
var oLU=_n('view')
_rz(z,oLU,'class',28,e,s,gg)
var fMU=_v()
_(oLU,fMU)
if(_oz(z,29,e,s,gg)){fMU.wxVkey=1
}
var cNU=_v()
_(oLU,cNU)
if(_oz(z,30,e,s,gg)){cNU.wxVkey=1
}
fMU.wxXCkey=1
cNU.wxXCkey=1
_(bIU,oLU)
oJU.wxXCkey=1
_(b5T,bIU)
eHU.wxXCkey=1
}
b5T.wxXCkey=1
b5T.wxXCkey=3
b5T.wxXCkey=3
_(r,e4T)
return r
}
e_[x[47]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
var oPU=_v()
_(r,oPU)
if(_oz(z,0,e,s,gg)){oPU.wxVkey=1
var oRU=_mz(z,'recommend-group-comment',['bindclickShareFeedDetail',1,'binddeletebyitem',1,'bindinputhide',2,'bindinputpop',3,'bindinputshow',4,'bindupdateproduct',5,'currentFocusId',6,'fromScene',7,'groupFeedReasons',8,'groupId',9,'groupInfo',10,'groupName',11,'inGroup',12,'isSystemGroup',13,'pageName',14,'recommentIdKey',15,'restrictInteract',16,'sourceId',17,'ticketParams',18,'upsideDown',19,'viewModel',20],[],e,s,gg)
var lSU=_mz(z,'view',['class',22,'slot',1],[],e,s,gg)
var aTU=_v()
_(lSU,aTU)
if(_oz(z,24,e,s,gg)){aTU.wxVkey=1
var tUU=_mz(z,'view',['catchtap',25,'class',1,'hoverClass',2,'hoverStayTime',3,'hoverStopPropagation',4],[],e,s,gg)
var eVU=_v()
_(tUU,eVU)
if(_oz(z,30,e,s,gg)){eVU.wxVkey=1
var oXU=_n('view')
_rz(z,oXU,'class',31,e,s,gg)
var f1U=_mz(z,'image-view',['class',32,'mode',1,'placeholder',2,'src',3],[],e,s,gg)
_(oXU,f1U)
var xYU=_v()
_(oXU,xYU)
if(_oz(z,36,e,s,gg)){xYU.wxVkey=1
}
var oZU=_v()
_(oXU,oZU)
if(_oz(z,37,e,s,gg)){oZU.wxVkey=1
}
xYU.wxXCkey=1
oZU.wxXCkey=1
_(eVU,oXU)
var bWU=_v()
_(eVU,bWU)
if(_oz(z,38,e,s,gg)){bWU.wxVkey=1
}
bWU.wxXCkey=1
}
else{eVU.wxVkey=2
var c2U=_n('view')
_rz(z,c2U,'class',39,e,s,gg)
var c5U=_mz(z,'image-view',['class',40,'mode',1,'placeholder',2,'src',3],[],e,s,gg)
_(c2U,c5U)
var h3U=_v()
_(c2U,h3U)
if(_oz(z,44,e,s,gg)){h3U.wxVkey=1
}
var o4U=_v()
_(c2U,o4U)
if(_oz(z,45,e,s,gg)){o4U.wxVkey=1
}
h3U.wxXCkey=1
o4U.wxXCkey=1
_(eVU,c2U)
}
eVU.wxXCkey=1
eVU.wxXCkey=3
eVU.wxXCkey=3
_(aTU,tUU)
}
else if(_oz(z,46,e,s,gg)){aTU.wxVkey=2
var o6U=_v()
_(aTU,o6U)
var l7U=function(t9U,a8U,e0U,gg){
var oBV=_v()
_(e0U,oBV)
if(_oz(z,49,t9U,a8U,gg)){oBV.wxVkey=1
var xCV=_n('view')
_rz(z,xCV,'class',50,t9U,a8U,gg)
var hGV=_mz(z,'simple-image',['class',51,'data-src',1,'mode',2,'placeholder',3,'size',4,'src',5],[],t9U,a8U,gg)
_(xCV,hGV)
var oDV=_v()
_(xCV,oDV)
if(_oz(z,57,t9U,a8U,gg)){oDV.wxVkey=1
}
var fEV=_v()
_(xCV,fEV)
if(_oz(z,58,t9U,a8U,gg)){fEV.wxVkey=1
var oHV=_n('view')
_rz(z,oHV,'class',59,t9U,a8U,gg)
var cIV=_v()
_(oHV,cIV)
if(_oz(z,60,t9U,a8U,gg)){cIV.wxVkey=1
}
var oJV=_v()
_(oHV,oJV)
if(_oz(z,61,t9U,a8U,gg)){oJV.wxVkey=1
}
cIV.wxXCkey=1
oJV.wxXCkey=1
_(fEV,oHV)
}
var cFV=_v()
_(xCV,cFV)
if(_oz(z,62,t9U,a8U,gg)){cFV.wxVkey=1
}
oDV.wxXCkey=1
fEV.wxXCkey=1
cFV.wxXCkey=1
_(oBV,xCV)
}
oBV.wxXCkey=1
oBV.wxXCkey=3
return e0U
}
o6U.wxXCkey=4
_2z(z,47,l7U,e,s,gg,o6U,'item','index','url')
}
else if(_oz(z,63,e,s,gg)){aTU.wxVkey=3
var lKV=_mz(z,'product-img-swiper',['customMedia',-1,'bind:detail',64,'bind:sharedetail',1,'catch:fav',2,'groupId',3,'hasFav',4,'product',5,'showMenuDetail',6,'showMenuFav',7,'sourceId',8,'width',9],[],e,s,gg)
var aLV=_mz(z,'video-view',['autoDirection',74,'autoplay',1,'controllable',2,'ext',3,'height',4,'mode',5,'muted',6,'product',7,'showControls',8,'showLoading',9,'src',10,'standalone',11,'thumb',12,'width',13],[],e,s,gg)
_(lKV,aLV)
_(aTU,lKV)
}
else if(_oz(z,88,e,s,gg)){aTU.wxVkey=4
var tMV=_mz(z,'product-img-swiper',['appid',89,'bind:article',1,'bind:contact',2,'bind:detail',3,'bind:geo',4,'bind:share',5,'bind:sharedetail',6,'catch:fav',7,'groupId',8,'hasFav',9,'images',10,'poi',11,'product',12,'showMenuArticle',13,'showMenuContact',14,'showMenuDetail',15,'showMenuFav',16,'showMenuShare',17,'sourceId',18,'waterMark',19,'width',20],[],e,s,gg)
_(aTU,tMV)
}
aTU.wxXCkey=1
aTU.wxXCkey=3
aTU.wxXCkey=3
aTU.wxXCkey=3
aTU.wxXCkey=3
_(oRU,lSU)
_(oPU,oRU)
}
var eNV=_mz(z,'action-sheet',['bShow',110,'bindhide',1,'bindoncustomclick',2,'items',3,'style',4,'title',5],[],e,s,gg)
_(r,eNV)
var cQU=_v()
_(r,cQU)
if(_oz(z,116,e,s,gg)){cQU.wxVkey=1
}
oPU.wxXCkey=1
oPU.wxXCkey=3
cQU.wxXCkey=1
return r
}
e_[x[48]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
var oPV=_mz(z,'view',['bindlongpress',0,'bindtap',1,'bindtouchend',1,'style',2],[],e,s,gg)
var xQV=_n('slot')
_(oPV,xQV)
_(r,oPV)
return r
}
e_[x[49]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
var fSV=_v()
_(r,fSV)
if(_oz(z,0,e,s,gg)){fSV.wxVkey=1
var cTV=_v()
_(fSV,cTV)
if(_oz(z,1,e,s,gg)){cTV.wxVkey=1
}
cTV.wxXCkey=1
}
fSV.wxXCkey=1
return r
}
e_[x[50]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
var oVV=_v()
_(r,oVV)
if(_oz(z,0,e,s,gg)){oVV.wxVkey=1
var cWV=_v()
_(oVV,cWV)
var oXV=function(aZV,lYV,t1V,gg){
var b3V=_v()
_(t1V,b3V)
if(_oz(z,5,aZV,lYV,gg)){b3V.wxVkey=1
var o4V=_mz(z,'view',['class',6,'style',1],[],aZV,lYV,gg)
var x5V=_v()
_(o4V,x5V)
if(_oz(z,8,aZV,lYV,gg)){x5V.wxVkey=1
}
var o6V=_v()
_(o4V,o6V)
if(_oz(z,9,aZV,lYV,gg)){o6V.wxVkey=1
}
else{o6V.wxVkey=2
var c8V=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'bindscroll',10,'class',1,'scrollTop',2,'style',3],[],aZV,lYV,gg)
var o0V=_n('view')
_rz(z,o0V,'class',14,aZV,lYV,gg)
var oBW=_mz(z,'view',['catchtap',15,'class',1,'data-comment',2,'data-commentidx',3,'data-type',4,'hoverClass',5,'id',6],[],aZV,lYV,gg)
var lCW=_v()
_(oBW,lCW)
if(_oz(z,22,aZV,lYV,gg)){lCW.wxVkey=1
var bGW=_v()
_(lCW,bGW)
var oHW=function(oJW,xIW,fKW,gg){
var hMW=_v()
_(fKW,hMW)
if(_oz(z,25,oJW,xIW,gg)){hMW.wxVkey=1
}
hMW.wxXCkey=1
return fKW
}
bGW.wxXCkey=2
_2z(z,24,oHW,aZV,lYV,gg,bGW,'commentSplitItem','index','')
}
var aDW=_v()
_(oBW,aDW)
if(_oz(z,26,aZV,lYV,gg)){aDW.wxVkey=1
}
var tEW=_v()
_(oBW,tEW)
if(_oz(z,27,aZV,lYV,gg)){tEW.wxVkey=1
var oNW=_v()
_(tEW,oNW)
var cOW=function(lQW,oPW,aRW,gg){
var eTW=_v()
_(aRW,eTW)
if(_oz(z,32,lQW,oPW,gg)){eTW.wxVkey=1
var bUW=_mz(z,'view',['catchtap',33,'class',1,'data-commentidx',2,'data-imgidx',3,'hoverStopPropagation',4],[],lQW,oPW,gg)
var oVW=_mz(z,'image-view',['imgStyle',38,'lazyLoad',1,'mode',2,'src',3],[],lQW,oPW,gg)
var xWW=_v()
_(oVW,xWW)
if(_oz(z,42,lQW,oPW,gg)){xWW.wxVkey=1
}
xWW.wxXCkey=1
_(bUW,oVW)
_(eTW,bUW)
}
eTW.wxXCkey=1
eTW.wxXCkey=3
return aRW
}
oNW.wxXCkey=4
_2z(z,30,cOW,aZV,lYV,gg,oNW,'imgItem','imgIdx','*this')
}
var eFW=_v()
_(oBW,eFW)
if(_oz(z,43,aZV,lYV,gg)){eFW.wxVkey=1
var oXW=_n('view')
_rz(z,oXW,'class',44,aZV,lYV,gg)
var fYW=_v()
_(oXW,fYW)
if(_oz(z,45,aZV,lYV,gg)){fYW.wxVkey=1
}
var cZW=_mz(z,'view',['catchtap',46,'class',1,'data-comment',2,'data-commentidx',3,'data-type',4,'hoverStopPropagation',5],[],aZV,lYV,gg)
var h1W=_v()
_(cZW,h1W)
if(_oz(z,52,aZV,lYV,gg)){h1W.wxVkey=1
}
var o2W=_v()
_(cZW,o2W)
if(_oz(z,53,aZV,lYV,gg)){o2W.wxVkey=1
var c3W=_v()
_(o2W,c3W)
var o4W=function(a6W,l5W,t7W,gg){
var b9W=_v()
_(t7W,b9W)
if(_oz(z,55,a6W,l5W,gg)){b9W.wxVkey=1
}
b9W.wxXCkey=1
return t7W
}
c3W.wxXCkey=2
_2z(z,54,o4W,aZV,lYV,gg,c3W,'item','index','')
}
h1W.wxXCkey=1
o2W.wxXCkey=1
_(oXW,cZW)
fYW.wxXCkey=1
_(eFW,oXW)
}
lCW.wxXCkey=1
aDW.wxXCkey=1
tEW.wxXCkey=1
tEW.wxXCkey=3
eFW.wxXCkey=1
_(o0V,oBW)
var cAW=_v()
_(o0V,cAW)
if(_oz(z,56,aZV,lYV,gg)){cAW.wxVkey=1
var o0W=_v()
_(cAW,o0W)
if(_oz(z,57,aZV,lYV,gg)){o0W.wxVkey=1
var xAX=_v()
_(o0W,xAX)
var oBX=function(cDX,fCX,hEX,gg){
var cGX=_v()
_(hEX,cGX)
if(_oz(z,62,cDX,fCX,gg)){cGX.wxVkey=1
var oHX=_mz(z,'view',['catchtap',63,'class',1,'data-comment',2,'data-commentidx',3,'data-reply',4,'data-replyidx',5,'data-type',6,'hoverClass',7,'id',8,'style',9],[],cDX,fCX,gg)
var lIX=_v()
_(oHX,lIX)
if(_oz(z,73,cDX,fCX,gg)){lIX.wxVkey=1
}
var aJX=_v()
_(oHX,aJX)
if(_oz(z,74,cDX,fCX,gg)){aJX.wxVkey=1
var tKX=_v()
_(aJX,tKX)
var eLX=function(oNX,bMX,xOX,gg){
var fQX=_v()
_(xOX,fQX)
if(_oz(z,77,oNX,bMX,gg)){fQX.wxVkey=1
}
fQX.wxXCkey=1
return xOX
}
tKX.wxXCkey=2
_2z(z,76,eLX,cDX,fCX,gg,tKX,'commentSplitItem','index','')
}
else{aJX.wxVkey=2
}
lIX.wxXCkey=1
aJX.wxXCkey=1
_(cGX,oHX)
}
cGX.wxXCkey=1
return hEX
}
xAX.wxXCkey=2
_2z(z,60,oBX,aZV,lYV,gg,xAX,'replyItem','replyIdx','comment_id')
}
o0W.wxXCkey=1
}
cAW.wxXCkey=1
_(c8V,o0V)
var h9V=_v()
_(c8V,h9V)
if(_oz(z,78,aZV,lYV,gg)){h9V.wxVkey=1
}
h9V.wxXCkey=1
_(o6V,c8V)
}
var f7V=_v()
_(o4V,f7V)
if(_oz(z,79,aZV,lYV,gg)){f7V.wxVkey=1
}
x5V.wxXCkey=1
o6V.wxXCkey=1
o6V.wxXCkey=3
f7V.wxXCkey=1
_(b3V,o4V)
}
b3V.wxXCkey=1
b3V.wxXCkey=3
return t1V
}
cWV.wxXCkey=4
_2z(z,3,oXV,e,s,gg,cWV,'commentItem','commentIdx','comment_id')
}
var cRX=_mz(z,'action-sheet',['bShow',80,'bindhide',1,'bindoncustomclick',2,'items',3,'style',4],[],e,s,gg)
_(r,cRX)
oVV.wxXCkey=1
oVV.wxXCkey=3
return r
}
e_[x[51]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m52=function(e,s,r,gg){
var z=gz$gwx_53()
var oTX=_v()
_(r,oTX)
if(_oz(z,0,e,s,gg)){oTX.wxVkey=1
}
var cUX=_n('view')
_rz(z,cUX,'class',1,e,s,gg)
var lWX=_n('view')
_rz(z,lWX,'class',2,e,s,gg)
var tYX=_mz(z,'view',['catchtap',3,'class',1,'style',2],[],e,s,gg)
var eZX=_v()
_(tYX,eZX)
if(_oz(z,6,e,s,gg)){eZX.wxVkey=1
var b1X=_mz(z,'image-view',['class',7,'mode',1,'size',2,'src',3],[],e,s,gg)
_(eZX,b1X)
}
else if(_oz(z,11,e,s,gg)){eZX.wxVkey=2
var o2X=_n('view')
_rz(z,o2X,'class',12,e,s,gg)
var x3X=_mz(z,'image-view',['class',13,'imgStyle',1,'mode',2,'size',3,'src',4],[],e,s,gg)
_(o2X,x3X)
var o4X=_mz(z,'image-view',['class',18,'imgStyle',1,'mode',2,'size',3,'src',4],[],e,s,gg)
_(o2X,o4X)
_(eZX,o2X)
}
eZX.wxXCkey=1
eZX.wxXCkey=3
eZX.wxXCkey=3
_(lWX,tYX)
var f5X=_n('view')
_rz(z,f5X,'class',23,e,s,gg)
var h7X=_mz(z,'image-view',['mode',24,'placeholder',1,'src',2,'style',3],[],e,s,gg)
_(f5X,h7X)
var c6X=_v()
_(f5X,c6X)
if(_oz(z,28,e,s,gg)){c6X.wxVkey=1
}
c6X.wxXCkey=1
_(lWX,f5X)
var aXX=_v()
_(lWX,aXX)
if(_oz(z,29,e,s,gg)){aXX.wxVkey=1
var o8X=_mz(z,'view',['bindtap',30,'class',1,'data-type',2,'hoverClass',3],[],e,s,gg)
var c9X=_v()
_(o8X,c9X)
if(_oz(z,34,e,s,gg)){c9X.wxVkey=1
}
c9X.wxXCkey=1
_(aXX,o8X)
}
aXX.wxXCkey=1
_(cUX,lWX)
var oVX=_v()
_(cUX,oVX)
if(_oz(z,35,e,s,gg)){oVX.wxVkey=1
var o0X=_v()
_(oVX,o0X)
if(_oz(z,36,e,s,gg)){o0X.wxVkey=1
var lAY=_n('view')
_rz(z,lAY,'class',37,e,s,gg)
var aBY=_v()
_(lAY,aBY)
if(_oz(z,38,e,s,gg)){aBY.wxVkey=1
}
var tCY=_v()
_(lAY,tCY)
if(_oz(z,39,e,s,gg)){tCY.wxVkey=1
var eDY=_mz(z,'view',['bindtap',40,'class',1,'hoverClass',2],[],e,s,gg)
var bEY=_v()
_(eDY,bEY)
if(_oz(z,43,e,s,gg)){bEY.wxVkey=1
}
bEY.wxXCkey=1
_(tCY,eDY)
}
aBY.wxXCkey=1
tCY.wxXCkey=1
_(o0X,lAY)
}
o0X.wxXCkey=1
}
else{oVX.wxVkey=2
var oFY=_n('view')
var xGY=_v()
_(oFY,xGY)
if(_oz(z,44,e,s,gg)){xGY.wxVkey=1
var fIY=_n('view')
_rz(z,fIY,'class',45,e,s,gg)
var cJY=_v()
_(fIY,cJY)
if(_oz(z,46,e,s,gg)){cJY.wxVkey=1
}
var hKY=_v()
_(fIY,hKY)
if(_oz(z,47,e,s,gg)){hKY.wxVkey=1
}
cJY.wxXCkey=1
hKY.wxXCkey=1
_(xGY,fIY)
}
var oHY=_v()
_(oFY,oHY)
if(_oz(z,48,e,s,gg)){oHY.wxVkey=1
var oLY=_mz(z,'list-data-view',['customLoadingTip',49,'loading',1],[],e,s,gg)
_(oHY,oLY)
}
else if(_oz(z,51,e,s,gg)){oHY.wxVkey=2
var cMY=_v()
_(oHY,cMY)
if(_oz(z,52,e,s,gg)){cMY.wxVkey=1
var oNY=_mz(z,'list-data-view',['bottomTip',53,'loading',1],[],e,s,gg)
var lOY=_n('view')
_rz(z,lOY,'class',55,e,s,gg)
var aPY=_v()
_(lOY,aPY)
var tQY=function(bSY,eRY,oTY,gg){
var oVY=_v()
_(oTY,oVY)
if(_oz(z,58,bSY,eRY,gg)){oVY.wxVkey=1
var fWY=_mz(z,'group-feed-item',['groupId',59,'profileTicket',1,'viewModel',2],[],bSY,eRY,gg)
_(oVY,fWY)
}
oVY.wxXCkey=1
oVY.wxXCkey=3
return oTY
}
aPY.wxXCkey=4
_2z(z,56,tQY,e,s,gg,aPY,'item','index','*this')
var cXY=_v()
_(lOY,cXY)
var hYY=function(c1Y,oZY,o2Y,gg){
var a4Y=_v()
_(o2Y,a4Y)
if(_oz(z,64,c1Y,oZY,gg)){a4Y.wxVkey=1
var t5Y=_mz(z,'group-feed-item',['groupId',65,'profileTicket',1,'viewModel',2],[],c1Y,oZY,gg)
_(a4Y,t5Y)
}
a4Y.wxXCkey=1
a4Y.wxXCkey=3
return o2Y
}
cXY.wxXCkey=4
_2z(z,62,hYY,e,s,gg,cXY,'item','index','*this')
_(oNY,lOY)
_(cMY,oNY)
}
else{cMY.wxVkey=2
var e6Y=_mz(z,'list-data-view',['bottomTip',68,'loading',1],[],e,s,gg)
var b7Y=_v()
_(e6Y,b7Y)
var o8Y=function(o0Y,x9Y,fAZ,gg){
var hCZ=_v()
_(fAZ,hCZ)
if(_oz(z,72,o0Y,x9Y,gg)){hCZ.wxVkey=1
var oDZ=_mz(z,'recommend-group-item',['bind:applyjoingroup',73,'bind:joinandapplycomment',1,'bind:joingroup',2,'data-id',3,'data-item',4,'groupId',5,'groupName',6,'inGroup',7,'pageName',8,'restrictInteract',9,'sourceId',10,'ticketParams',11,'videoAutoPlay',12,'viewModel',13],[],o0Y,x9Y,gg)
_(hCZ,oDZ)
}
hCZ.wxXCkey=1
hCZ.wxXCkey=3
return fAZ
}
b7Y.wxXCkey=4
_2z(z,70,o8Y,e,s,gg,b7Y,'item','index','*this')
_(cMY,e6Y)
}
cMY.wxXCkey=1
cMY.wxXCkey=3
cMY.wxXCkey=3
}
else if(_oz(z,87,e,s,gg)){oHY.wxVkey=3
}
xGY.wxXCkey=1
oHY.wxXCkey=1
oHY.wxXCkey=3
oHY.wxXCkey=3
_(oVX,oFY)
}
oVX.wxXCkey=1
oVX.wxXCkey=3
_(r,cUX)
oTX.wxXCkey=1
return r
}
e_[x[52]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
var m53=function(e,s,r,gg){
var z=gz$gwx_54()
var oFZ=_v()
_(r,oFZ)
if(_oz(z,0,e,s,gg)){oFZ.wxVkey=1
}
oFZ.wxXCkey=1
return r
}
e_[x[53]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx_55()
var aHZ=_v()
_(r,aHZ)
if(_oz(z,0,e,s,gg)){aHZ.wxVkey=1
var tIZ=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var bKZ=_mz(z,'image-view',['lazyLoad',-1,'mode',3,'placeholder',1,'src',2],[],e,s,gg)
_(tIZ,bKZ)
var eJZ=_v()
_(tIZ,eJZ)
if(_oz(z,6,e,s,gg)){eJZ.wxVkey=1
}
eJZ.wxXCkey=1
_(aHZ,tIZ)
}
else{aHZ.wxVkey=2
var oLZ=_n('slot')
_(aHZ,oLZ)
}
aHZ.wxXCkey=1
aHZ.wxXCkey=3
return r
}
e_[x[54]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
var m55=function(e,s,r,gg){
var z=gz$gwx_56()
return r
}
e_[x[55]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
var m56=function(e,s,r,gg){
var z=gz$gwx_57()
var fOZ=_v()
_(r,fOZ)
if(_oz(z,0,e,s,gg)){fOZ.wxVkey=1
}
fOZ.wxXCkey=1
return r
}
e_[x[56]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx_58()
var hQZ=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oTZ=_mz(z,'video',['showMuteBtn',-1,'autoplay',2,'binderror',1,'bindfullscreenchange',2,'bindplay',3,'class',4,'controls',5,'enableProgressGesture',6,'hidden',7,'hls',8,'id',9,'loop',10,'muted',11,'objectFit',12,'poster',13,'showCenterPlayBtn',14,'showFullscreenBtn',15,'showPlayBtn',16,'showProgress',17,'src',18,'vslideGestureInFullscreen',19],[],e,s,gg)
var lUZ=_n('slot')
_(oTZ,lUZ)
_(hQZ,oTZ)
var aVZ=_n('view')
_rz(z,aVZ,'class',22,e,s,gg)
var tWZ=_v()
_(aVZ,tWZ)
if(_oz(z,23,e,s,gg)){tWZ.wxVkey=1
}
var eXZ=_v()
_(aVZ,eXZ)
if(_oz(z,24,e,s,gg)){eXZ.wxVkey=1
}
tWZ.wxXCkey=1
eXZ.wxXCkey=1
_(hQZ,aVZ)
var oRZ=_v()
_(hQZ,oRZ)
if(_oz(z,25,e,s,gg)){oRZ.wxVkey=1
}
var cSZ=_v()
_(hQZ,cSZ)
if(_oz(z,26,e,s,gg)){cSZ.wxVkey=1
}
oRZ.wxXCkey=1
cSZ.wxXCkey=1
_(r,hQZ)
return r
}
e_[x[57]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[58]]={}
var m58=function(e,s,r,gg){
var z=gz$gwx_59()
return r
}
e_[x[58]]={f:m58,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['libs/mmuxwxappdevkit/widget/action-sheet/action-sheet.json'] = {"component":true,"usingComponents":{"navigator":"../navigator/navigator"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['libs/mmuxwxappdevkit/widget/action-sheet/action-sheet.wxml'] = [$gwx, './libs/mmuxwxappdevkit/widget/action-sheet/action-sheet.wxml'];else __wxAppCode__['libs/mmuxwxappdevkit/widget/action-sheet/action-sheet.wxml'] = $gwx( './libs/mmuxwxappdevkit/widget/action-sheet/action-sheet.wxml' );
		__wxAppCode__['libs/mmuxwxappdevkit/widget/error-page/error-page.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['libs/mmuxwxappdevkit/widget/error-page/error-page.wxml'] = [$gwx, './libs/mmuxwxappdevkit/widget/error-page/error-page.wxml'];else __wxAppCode__['libs/mmuxwxappdevkit/widget/error-page/error-page.wxml'] = $gwx( './libs/mmuxwxappdevkit/widget/error-page/error-page.wxml' );
		__wxAppCode__['libs/mmuxwxappdevkit/widget/exposure-block/exposure-block.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['libs/mmuxwxappdevkit/widget/exposure-block/exposure-block.wxml'] = [$gwx, './libs/mmuxwxappdevkit/widget/exposure-block/exposure-block.wxml'];else __wxAppCode__['libs/mmuxwxappdevkit/widget/exposure-block/exposure-block.wxml'] = $gwx( './libs/mmuxwxappdevkit/widget/exposure-block/exposure-block.wxml' );
		__wxAppCode__['libs/mmuxwxappdevkit/widget/image-view/image-view.json'] = {"component":true,"usingComponents":{"loading-view":"../../widget/loading-view/loading-view"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['libs/mmuxwxappdevkit/widget/image-view/image-view.wxml'] = [$gwx, './libs/mmuxwxappdevkit/widget/image-view/image-view.wxml'];else __wxAppCode__['libs/mmuxwxappdevkit/widget/image-view/image-view.wxml'] = $gwx( './libs/mmuxwxappdevkit/widget/image-view/image-view.wxml' );
		__wxAppCode__['libs/mmuxwxappdevkit/widget/list-view/list-view.json'] = {"componentGenerics":{"list-view-cell":true}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['libs/mmuxwxappdevkit/widget/list-view/list-view.wxml'] = [$gwx, './libs/mmuxwxappdevkit/widget/list-view/list-view.wxml'];else __wxAppCode__['libs/mmuxwxappdevkit/widget/list-view/list-view.wxml'] = $gwx( './libs/mmuxwxappdevkit/widget/list-view/list-view.wxml' );
		__wxAppCode__['libs/mmuxwxappdevkit/widget/loading-view/loading-view.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['libs/mmuxwxappdevkit/widget/loading-view/loading-view.wxml'] = [$gwx, './libs/mmuxwxappdevkit/widget/loading-view/loading-view.wxml'];else __wxAppCode__['libs/mmuxwxappdevkit/widget/loading-view/loading-view.wxml'] = $gwx( './libs/mmuxwxappdevkit/widget/loading-view/loading-view.wxml' );
		__wxAppCode__['libs/mmuxwxappdevkit/widget/modal/modal.json'] = {"component":true,"usingComponents":{"navigator":"../navigator/navigator"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['libs/mmuxwxappdevkit/widget/modal/modal.wxml'] = [$gwx, './libs/mmuxwxappdevkit/widget/modal/modal.wxml'];else __wxAppCode__['libs/mmuxwxappdevkit/widget/modal/modal.wxml'] = $gwx( './libs/mmuxwxappdevkit/widget/modal/modal.wxml' );
		__wxAppCode__['libs/mmuxwxappdevkit/widget/navigation-bar/navigation-bar.json'] = {"component":true,"usingComponents":{"navigator":"../navigator/navigator","loading-view":"../loading-view/loading-view"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['libs/mmuxwxappdevkit/widget/navigation-bar/navigation-bar.wxml'] = [$gwx, './libs/mmuxwxappdevkit/widget/navigation-bar/navigation-bar.wxml'];else __wxAppCode__['libs/mmuxwxappdevkit/widget/navigation-bar/navigation-bar.wxml'] = $gwx( './libs/mmuxwxappdevkit/widget/navigation-bar/navigation-bar.wxml' );
		__wxAppCode__['libs/mmuxwxappdevkit/widget/navigator/navigator.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['libs/mmuxwxappdevkit/widget/navigator/navigator.wxml'] = [$gwx, './libs/mmuxwxappdevkit/widget/navigator/navigator.wxml'];else __wxAppCode__['libs/mmuxwxappdevkit/widget/navigator/navigator.wxml'] = $gwx( './libs/mmuxwxappdevkit/widget/navigator/navigator.wxml' );
		__wxAppCode__['pages/forbid/forbid.json'] = {"usingComponents":{},"backgroundColor":"#F7F7F7","navigationStyle":"default","navigationBarTitleText":""};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/forbid/forbid.wxml'] = [$gwx, './pages/forbid/forbid.wxml'];else __wxAppCode__['pages/forbid/forbid.wxml'] = $gwx( './pages/forbid/forbid.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"usingComponents":{"navigation-bar":"../../libs/mmuxwxappdevkit/widget/navigation-bar/navigation-bar","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","ux-dialog":"../../widget/dialog/dialog","list-data-view":"../../widget/list-data-view/list-data-view","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet","recommend-group-folder":"../../widget/recommend-group-folder/recommend-group-folder","recommend-group-item":"../../widget/recommend-group-item/recommend-group-item","recommend-comment-input":"../../widget/recommend-comment-input/recommend-comment-input","index-group-cell":"../../widget/index-group-cell/index-group-cell","every-buy-category":"../../widget/every-buy-category/every-buy-category","group-avatar":"../../widget/group-avatar/group-avatar","tmp-profile":"../../widget/tmp-profile/tmp-profile"},"enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTitleText":""};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/live/live.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/live/live.wxml'] = [$gwx, './pages/live/live.wxml'];else __wxAppCode__['pages/live/live.wxml'] = $gwx( './pages/live/live.wxml' );
		__wxAppCode__['widget/auth-detect/auth-detect.json'] = {"component":true,"usingComponents":{"image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/auth-detect/auth-detect.wxml'] = [$gwx, './widget/auth-detect/auth-detect.wxml'];else __wxAppCode__['widget/auth-detect/auth-detect.wxml'] = $gwx( './widget/auth-detect/auth-detect.wxml' );
		__wxAppCode__['widget/base-cell/base-cell.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/base-cell/base-cell.wxml'] = [$gwx, './widget/base-cell/base-cell.wxml'];else __wxAppCode__['widget/base-cell/base-cell.wxml'] = $gwx( './widget/base-cell/base-cell.wxml' );
		__wxAppCode__['widget/brand-header/brand-header.json'] = {"component":true,"usingComponents":{"image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/brand-header/brand-header.wxml'] = [$gwx, './widget/brand-header/brand-header.wxml'];else __wxAppCode__['widget/brand-header/brand-header.wxml'] = $gwx( './widget/brand-header/brand-header.wxml' );
		__wxAppCode__['widget/btn-groups/btn-groups.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/btn-groups/btn-groups.wxml'] = [$gwx, './widget/btn-groups/btn-groups.wxml'];else __wxAppCode__['widget/btn-groups/btn-groups.wxml'] = $gwx( './widget/btn-groups/btn-groups.wxml' );
		__wxAppCode__['widget/camera-btn/camera-btn.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/camera-btn/camera-btn.wxml'] = [$gwx, './widget/camera-btn/camera-btn.wxml'];else __wxAppCode__['widget/camera-btn/camera-btn.wxml'] = $gwx( './widget/camera-btn/camera-btn.wxml' );
		__wxAppCode__['widget/dialog/dialog.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/dialog/dialog.wxml'] = [$gwx, './widget/dialog/dialog.wxml'];else __wxAppCode__['widget/dialog/dialog.wxml'] = $gwx( './widget/dialog/dialog.wxml' );
		__wxAppCode__['widget/dislike-dialog/dislike-dialog.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/dislike-dialog/dislike-dialog.wxml'] = [$gwx, './widget/dislike-dialog/dislike-dialog.wxml'];else __wxAppCode__['widget/dislike-dialog/dislike-dialog.wxml'] = $gwx( './widget/dislike-dialog/dislike-dialog.wxml' );
		__wxAppCode__['widget/every-buy-category/every-buy-category.json'] = {"component":true,"usingComponents":{"every-buy-item":"../../widget/every-buy-item/every-buy-item"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/every-buy-category/every-buy-category.wxml'] = [$gwx, './widget/every-buy-category/every-buy-category.wxml'];else __wxAppCode__['widget/every-buy-category/every-buy-category.wxml'] = $gwx( './widget/every-buy-category/every-buy-category.wxml' );
		__wxAppCode__['widget/every-buy-item/every-buy-item.json'] = {"component":true,"usingComponents":{"image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","list-data-view":"../list-data-view/list-data-view","ignore-dialog":"../ignore-dialog/ignore-dialog","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/every-buy-item/every-buy-item.wxml'] = [$gwx, './widget/every-buy-item/every-buy-item.wxml'];else __wxAppCode__['widget/every-buy-item/every-buy-item.wxml'] = $gwx( './widget/every-buy-item/every-buy-item.wxml' );
		__wxAppCode__['widget/gesture/gesture.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/gesture/gesture.wxml'] = [$gwx, './widget/gesture/gesture.wxml'];else __wxAppCode__['widget/gesture/gesture.wxml'] = $gwx( './widget/gesture/gesture.wxml' );
		__wxAppCode__['widget/goods-item/goods-item.json'] = {"component":true,"usingComponents":{"navigator":"../../libs/mmuxwxappdevkit/widget/navigator/navigator","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/goods-item/goods-item.wxml'] = [$gwx, './widget/goods-item/goods-item.wxml'];else __wxAppCode__['widget/goods-item/goods-item.wxml'] = $gwx( './widget/goods-item/goods-item.wxml' );
		__wxAppCode__['widget/group-avatar/group-avatar.json'] = {"component":true,"usingComponents":{"image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/group-avatar/group-avatar.wxml'] = [$gwx, './widget/group-avatar/group-avatar.wxml'];else __wxAppCode__['widget/group-avatar/group-avatar.wxml'] = $gwx( './widget/group-avatar/group-avatar.wxml' );
		__wxAppCode__['widget/group-feed-item/group-feed-item.json'] = {"component":true,"usingComponents":{"image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","product-img-swiper":"../../widget/product-img-swiper/product-img-swiper","video-view":"../../widget/video-view/video-view","recommend-group-comment":"../recommend-group-comment/recommend-group-comment","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/group-feed-item/group-feed-item.wxml'] = [$gwx, './widget/group-feed-item/group-feed-item.wxml'];else __wxAppCode__['widget/group-feed-item/group-feed-item.wxml'] = $gwx( './widget/group-feed-item/group-feed-item.wxml' );
		__wxAppCode__['widget/guarantee-pop/guarantee-pop.json'] = {"component":true,"usingComponents":{"image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/guarantee-pop/guarantee-pop.wxml'] = [$gwx, './widget/guarantee-pop/guarantee-pop.wxml'];else __wxAppCode__['widget/guarantee-pop/guarantee-pop.wxml'] = $gwx( './widget/guarantee-pop/guarantee-pop.wxml' );
		__wxAppCode__['widget/ignore-dialog/ignore-dialog.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/ignore-dialog/ignore-dialog.wxml'] = [$gwx, './widget/ignore-dialog/ignore-dialog.wxml'];else __wxAppCode__['widget/ignore-dialog/ignore-dialog.wxml'] = $gwx( './widget/ignore-dialog/ignore-dialog.wxml' );
		__wxAppCode__['widget/index-group-cell/index-group-cell.json'] = {"component":true,"usingComponents":{"group-avatar":"../../widget/group-avatar/group-avatar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/index-group-cell/index-group-cell.wxml'] = [$gwx, './widget/index-group-cell/index-group-cell.wxml'];else __wxAppCode__['widget/index-group-cell/index-group-cell.wxml'] = $gwx( './widget/index-group-cell/index-group-cell.wxml' );
		__wxAppCode__['widget/input-face-btn/input-face-btn.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/input-face-btn/input-face-btn.wxml'] = [$gwx, './widget/input-face-btn/input-face-btn.wxml'];else __wxAppCode__['widget/input-face-btn/input-face-btn.wxml'] = $gwx( './widget/input-face-btn/input-face-btn.wxml' );
		__wxAppCode__['widget/input-tool-bar/input-tool-bar.json'] = {"component":true,"usingComponents":{"input-face-btn":"../input-face-btn/input-face-btn"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/input-tool-bar/input-tool-bar.wxml'] = [$gwx, './widget/input-tool-bar/input-tool-bar.wxml'];else __wxAppCode__['widget/input-tool-bar/input-tool-bar.wxml'] = $gwx( './widget/input-tool-bar/input-tool-bar.wxml' );
		__wxAppCode__['widget/list-data-view/list-data-view.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/list-data-view/list-data-view.wxml'] = [$gwx, './widget/list-data-view/list-data-view.wxml'];else __wxAppCode__['widget/list-data-view/list-data-view.wxml'] = $gwx( './widget/list-data-view/list-data-view.wxml' );
		__wxAppCode__['widget/mask/mask.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/mask/mask.wxml'] = [$gwx, './widget/mask/mask.wxml'];else __wxAppCode__['widget/mask/mask.wxml'] = $gwx( './widget/mask/mask.wxml' );
		__wxAppCode__['widget/message-item-permission/message-item-permission.json'] = {"component":true,"usingComponents":{"base-cell":"../../widget/base-cell/base-cell","list-data-view":"../../widget/list-data-view/list-data-view","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet","group-avatar":"../../widget/group-avatar/group-avatar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/message-item-permission/message-item-permission.wxml'] = [$gwx, './widget/message-item-permission/message-item-permission.wxml'];else __wxAppCode__['widget/message-item-permission/message-item-permission.wxml'] = $gwx( './widget/message-item-permission/message-item-permission.wxml' );
		__wxAppCode__['widget/message-item/message-item.json'] = {"component":true,"usingComponents":{"base-cell":"../../widget/base-cell/base-cell","list-data-view":"../../widget/list-data-view/list-data-view","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet","group-avatar":"../../widget/group-avatar/group-avatar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/message-item/message-item.wxml'] = [$gwx, './widget/message-item/message-item.wxml'];else __wxAppCode__['widget/message-item/message-item.wxml'] = $gwx( './widget/message-item/message-item.wxml' );
		__wxAppCode__['widget/modal/modal.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/modal/modal.wxml'] = [$gwx, './widget/modal/modal.wxml'];else __wxAppCode__['widget/modal/modal.wxml'] = $gwx( './widget/modal/modal.wxml' );
		__wxAppCode__['widget/permission-sheet/permission-sheet.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/permission-sheet/permission-sheet.wxml'] = [$gwx, './widget/permission-sheet/permission-sheet.wxml'];else __wxAppCode__['widget/permission-sheet/permission-sheet.wxml'] = $gwx( './widget/permission-sheet/permission-sheet.wxml' );
		__wxAppCode__['widget/plugin-goods-item/plugin-goods-item.json'] = {"component":true,"usingComponents":{"navigator":"../../libs/mmuxwxappdevkit/widget/navigator/navigator","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/plugin-goods-item/plugin-goods-item.wxml'] = [$gwx, './widget/plugin-goods-item/plugin-goods-item.wxml'];else __wxAppCode__['widget/plugin-goods-item/plugin-goods-item.wxml'] = $gwx( './widget/plugin-goods-item/plugin-goods-item.wxml' );
		__wxAppCode__['widget/product-attachment/product-attachment.json'] = {"component":true,"usingComponents":{"image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/product-attachment/product-attachment.wxml'] = [$gwx, './widget/product-attachment/product-attachment.wxml'];else __wxAppCode__['widget/product-attachment/product-attachment.wxml'] = $gwx( './widget/product-attachment/product-attachment.wxml' );
		__wxAppCode__['widget/product-img-browser/product-img-browser.json'] = {"component":true,"usingComponents":{"video-view":"../../widget/video-view/video-view","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet","product-attachment":"../../widget/product-attachment/product-attachment","gesture":"../../widget/gesture/gesture"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/product-img-browser/product-img-browser.wxml'] = [$gwx, './widget/product-img-browser/product-img-browser.wxml'];else __wxAppCode__['widget/product-img-browser/product-img-browser.wxml'] = $gwx( './widget/product-img-browser/product-img-browser.wxml' );
		__wxAppCode__['widget/product-img-swiper/product-img-swiper.json'] = {"component":true,"usingComponents":{"image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","product-attachment":"../../widget/product-attachment/product-attachment"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/product-img-swiper/product-img-swiper.wxml'] = [$gwx, './widget/product-img-swiper/product-img-swiper.wxml'];else __wxAppCode__['widget/product-img-swiper/product-img-swiper.wxml'] = $gwx( './widget/product-img-swiper/product-img-swiper.wxml' );
		__wxAppCode__['widget/product-preview/product-preview.json'] = {"component":true,"usingComponents":{"custom-mask":"../mask/mask","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","product-img-swiper":"../../widget/product-img-swiper/product-img-swiper"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/product-preview/product-preview.wxml'] = [$gwx, './widget/product-preview/product-preview.wxml'];else __wxAppCode__['widget/product-preview/product-preview.wxml'] = $gwx( './widget/product-preview/product-preview.wxml' );
		__wxAppCode__['widget/product-search/product-search.json'] = {"component":true,"usingComponents":{"custom-mask":"../mask/mask","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet","product-attachment":"../ugc-product-attachment/ugc-product-attachment"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/product-search/product-search.wxml'] = [$gwx, './widget/product-search/product-search.wxml'];else __wxAppCode__['widget/product-search/product-search.wxml'] = $gwx( './widget/product-search/product-search.wxml' );
		__wxAppCode__['widget/range-selector/range-selector.json'] = {"component":true,"usingComponents":{"custom-mask":"../mask/mask","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/range-selector/range-selector.wxml'] = [$gwx, './widget/range-selector/range-selector.wxml'];else __wxAppCode__['widget/range-selector/range-selector.wxml'] = $gwx( './widget/range-selector/range-selector.wxml' );
		__wxAppCode__['widget/recommend-comment-input/recommend-comment-input.json'] = {"component":true,"usingComponents":{"navigator":"../../libs/mmuxwxappdevkit/widget/navigator/navigator","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet","input-face-btn":"../input-face-btn/input-face-btn"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/recommend-comment-input/recommend-comment-input.wxml'] = [$gwx, './widget/recommend-comment-input/recommend-comment-input.wxml'];else __wxAppCode__['widget/recommend-comment-input/recommend-comment-input.wxml'] = $gwx( './widget/recommend-comment-input/recommend-comment-input.wxml' );
		__wxAppCode__['widget/recommend-comment-op/recommend-comment-op.json'] = {"component":true,"usingComponents":{"navigator":"../../libs/mmuxwxappdevkit/widget/navigator/navigator","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/recommend-comment-op/recommend-comment-op.wxml'] = [$gwx, './widget/recommend-comment-op/recommend-comment-op.wxml'];else __wxAppCode__['widget/recommend-comment-op/recommend-comment-op.wxml'] = $gwx( './widget/recommend-comment-op/recommend-comment-op.wxml' );
		__wxAppCode__['widget/recommend-fold-text/recommend-fold-text.json'] = {"component":true,"usingComponents":{"selectable-view":"../selectable-view/selectable-view"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/recommend-fold-text/recommend-fold-text.wxml'] = [$gwx, './widget/recommend-fold-text/recommend-fold-text.wxml'];else __wxAppCode__['widget/recommend-fold-text/recommend-fold-text.wxml'] = $gwx( './widget/recommend-fold-text/recommend-fold-text.wxml' );
		__wxAppCode__['widget/recommend-group-comment/recommend-group-comment.json'] = {"component":true,"usingComponents":{"navigator":"../../libs/mmuxwxappdevkit/widget/navigator/navigator","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet","ignore-dialog":"../ignore-dialog/ignore-dialog","custom-mask":"../../widget/mask/mask","group-avatar":"../../widget/group-avatar/group-avatar","modal":"../../widget/modal/modal","selectable-view":"../selectable-view/selectable-view","input-face-btn":"../input-face-btn/input-face-btn","recommend-fold-text":"../recommend-fold-text/recommend-fold-text"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/recommend-group-comment/recommend-group-comment.wxml'] = [$gwx, './widget/recommend-group-comment/recommend-group-comment.wxml'];else __wxAppCode__['widget/recommend-group-comment/recommend-group-comment.wxml'] = $gwx( './widget/recommend-group-comment/recommend-group-comment.wxml' );
		__wxAppCode__['widget/recommend-group-folder/recommend-group-folder.json'] = {"component":true,"usingComponents":{"image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","simple-image":"../simple-image/simple-image","ignore-dialog":"../ignore-dialog/ignore-dialog","group-avatar":"../../widget/group-avatar/group-avatar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/recommend-group-folder/recommend-group-folder.wxml'] = [$gwx, './widget/recommend-group-folder/recommend-group-folder.wxml'];else __wxAppCode__['widget/recommend-group-folder/recommend-group-folder.wxml'] = $gwx( './widget/recommend-group-folder/recommend-group-folder.wxml' );
		__wxAppCode__['widget/recommend-group-item/recommend-group-item.json'] = {"component":true,"usingComponents":{"image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","product-img-swiper":"../../widget/product-img-swiper/product-img-swiper","video-view":"../../widget/video-view/video-view","recommend-group-comment":"../recommend-group-comment/recommend-group-comment","simple-image":"../simple-image/simple-image","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/recommend-group-item/recommend-group-item.wxml'] = [$gwx, './widget/recommend-group-item/recommend-group-item.wxml'];else __wxAppCode__['widget/recommend-group-item/recommend-group-item.wxml'] = $gwx( './widget/recommend-group-item/recommend-group-item.wxml' );
		__wxAppCode__['widget/selectable-view/selectable-view.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/selectable-view/selectable-view.wxml'] = [$gwx, './widget/selectable-view/selectable-view.wxml'];else __wxAppCode__['widget/selectable-view/selectable-view.wxml'] = $gwx( './widget/selectable-view/selectable-view.wxml' );
		__wxAppCode__['widget/simple-image/simple-image.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/simple-image/simple-image.wxml'] = [$gwx, './widget/simple-image/simple-image.wxml'];else __wxAppCode__['widget/simple-image/simple-image.wxml'] = $gwx( './widget/simple-image/simple-image.wxml' );
		__wxAppCode__['widget/single-recommend-comment-item/single-recommend-comment-item.json'] = {"component":true,"usingComponents":{"navigator":"../../libs/mmuxwxappdevkit/widget/navigator/navigator","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/single-recommend-comment-item/single-recommend-comment-item.wxml'] = [$gwx, './widget/single-recommend-comment-item/single-recommend-comment-item.wxml'];else __wxAppCode__['widget/single-recommend-comment-item/single-recommend-comment-item.wxml'] = $gwx( './widget/single-recommend-comment-item/single-recommend-comment-item.wxml' );
		__wxAppCode__['widget/tmp-profile/tmp-profile.json'] = {"component":true,"usingComponents":{"navigation-bar":"../../libs/mmuxwxappdevkit/widget/navigation-bar/navigation-bar","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","list-data-view":"../../widget/list-data-view/list-data-view","recommend-group-item":"../../widget/recommend-group-item/recommend-group-item","group-avatar":"../../widget/group-avatar/group-avatar","group-feed-item":"../../widget/group-feed-item/group-feed-item","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/tmp-profile/tmp-profile.wxml'] = [$gwx, './widget/tmp-profile/tmp-profile.wxml'];else __wxAppCode__['widget/tmp-profile/tmp-profile.wxml'] = $gwx( './widget/tmp-profile/tmp-profile.wxml' );
		__wxAppCode__['widget/toast/toast.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/toast/toast.wxml'] = [$gwx, './widget/toast/toast.wxml'];else __wxAppCode__['widget/toast/toast.wxml'] = $gwx( './widget/toast/toast.wxml' );
		__wxAppCode__['widget/ugc-product-attachment/ugc-product-attachment.json'] = {"component":true,"usingComponents":{"image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/ugc-product-attachment/ugc-product-attachment.wxml'] = [$gwx, './widget/ugc-product-attachment/ugc-product-attachment.wxml'];else __wxAppCode__['widget/ugc-product-attachment/ugc-product-attachment.wxml'] = $gwx( './widget/ugc-product-attachment/ugc-product-attachment.wxml' );
		__wxAppCode__['widget/video-goods-item/video-goods-item.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/video-goods-item/video-goods-item.wxml'] = [$gwx, './widget/video-goods-item/video-goods-item.wxml'];else __wxAppCode__['widget/video-goods-item/video-goods-item.wxml'] = $gwx( './widget/video-goods-item/video-goods-item.wxml' );
		__wxAppCode__['widget/video-recommend-comment-input/video-recommend-comment-input.json'] = {"component":true,"usingComponents":{"navigator":"../../libs/mmuxwxappdevkit/widget/navigator/navigator","image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view","action-sheet":"../../libs/mmuxwxappdevkit/widget/action-sheet/action-sheet"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/video-recommend-comment-input/video-recommend-comment-input.wxml'] = [$gwx, './widget/video-recommend-comment-input/video-recommend-comment-input.wxml'];else __wxAppCode__['widget/video-recommend-comment-input/video-recommend-comment-input.wxml'] = $gwx( './widget/video-recommend-comment-input/video-recommend-comment-input.wxml' );
		__wxAppCode__['widget/video-view/video-view.json'] = {"component":true,"usingComponents":{"image-view":"../../libs/mmuxwxappdevkit/widget/image-view/image-view"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/video-view/video-view.wxml'] = [$gwx, './widget/video-view/video-view.wxml'];else __wxAppCode__['widget/video-view/video-view.wxml'] = $gwx( './widget/video-view/video-view.wxml' );
		__wxAppCode__['widget/welcome/welcome.json'] = {"component":true,"usingComponents":{"navigation-bar":"../../libs/mmuxwxappdevkit/widget/navigation-bar/navigation-bar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['widget/welcome/welcome.wxml'] = [$gwx, './widget/welcome/welcome.wxml'];else __wxAppCode__['widget/welcome/welcome.wxml'] = $gwx( './widget/welcome/welcome.wxml' );
	
	define("core/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";wx.nextTick||(wx.nextTick=setTimeout),module.exports=require("../libs/mmuxwxappdevkit/index.js").Api; 
 			}); 
		define("core/eventcenter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../libs/mmuxwxappdevkit/index.js").EventCenter;module.exports=e; 
 			}); 
		define("core/exceptionReporter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../libs/mmuxwxappdevkit/index.js"),r=e.Reporter,t=e.IdKey,i=require("../utils/enum.js").IDKeyDefine,o=require("../core/sys.js");module.exports={TYPE:{OPENID_ERROR:1,GROUPID_ERROR:2,INDEX_MERGE_ERROR:3,DownLoad_Language_PKG_ERROR:4},report:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=[getCurrentPages().map(function(e){return e.route}).join("|"),e.type||0,e.info||""];r.report({logId:17474,logString:n.join(","),withClientIPV6Field:!0}),t.report(o.alarmId,i.CustomException)}}; 
 			}); 
		define("core/network.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports=require("../libs/mmuxwxappdevkit/index.js").Network; 
 			}); 
		define("core/sys.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports=require("../libs/mmuxwxappdevkit/index.js").Sys; 
 			}); 
		define("devkit.config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("./libs/mmuxwxappdevkit/index.js"),r=require("./globalData.js"),o=r.isGroupApp?"shoppinglist_group":"shoppinglist";e.setup({sys:function(e){return{appName:function(){return"好物圈"},appid:function(){return"wx56c8f077de74b07c"},alarmId:112691,noNavigatorParams:function(){return!0},cgiPrefix:o,feedbackParams:{type:{order:2,fav:1,kf_phone:3,recommend:4},scene:{fav:1,order:2,recommend:3},text:{order:"投诉",fav:"投诉",recommend:"投诉"}}}},eventCenter:function(e){return{Event:{onLoginSuccess:"onLoginSuccess",onLoginFail:"onLoginFail",onReloadNavigationBar:"onReloadNavigationBar",onPaySuccess:"onPaySuccess",onIgnoreRecommend:"onIgnoreRecommend",onShowContact:"onShowContact",onSwitchIdentity:"onSwitchIdentity",onShareSelectedProducts:"onShareSelectedProducts",onShareSelectedOrders:"onShareSelectedOrders",onApplicationShow:"onApplicationShow",onSelectFriendsDone:"onSelectFriendsDone",onClearRightTopReddot:"onClearRightTopReddot",onCollect:"onCollect",onVideoStartPlaying:"onVideoStartPlaying",onEnterFullScreen:"onEnterFullScreen",onExitFullScreen:"onExitFullScreen",onKfStatusUpdate:"onKfStatusUpdate",onDeleteByItem:"onDeleteByItem",onFinishRecommend:"onFinishRecommend"}}},page:function(e){return{actionLogId:16189}},network:function(t){return{host:"https://wxa.weixin.qq.com/",cgiSet:{login:o+"/login",reportdata:o+"/reportdata",reportOss:o+"/report-oss",reportclientlog:o+"/report-savelog",batchget:o+"/storage/batchget",batchset:o+"/storage/batchset",redDotGet:o+"/message/reddot/get",redDotClear:o+"/message/reddot/clear",openproduct:o+"/openproduct/getbypage",getProductByPageV2:o+"/openproduct/v2/getbypage",getproductcategorybanner:o+"/openproduct/getcategorybanner",addopenproduct:o+"/openproduct/add",deleteopenproduct:o+"/openproduct/delete",batchGetSellerOnlineInfo:o+"/kf_user/profile/batchget-kf-status",getorderlist:o+"/openorder/getbypage",getOrderByPageV2:o+"/openorder/v2/getbypage",getordercategorybanner:o+"/openorder/getcategorybanner",getorderdetail:o+"/openorder/get",deletegoods:o+"/shoppingcart/delete-goods",deleteorder:o+"/openorder/delete",getexpressdetail:o+"/shoppingcart/get-express-detail",index:o+"/friendbuy/shopping-index",doreply:o+"/friendbuy/do_reply",orderdofavor:o+"/friendbuy/do_favor",orderdofavorIn3rd:o+"/friendbuy/set_favor_in_3rd",getorderfavor:o+"/friendbuy/get_order_favor",getfriendfavor:o+"/friendbuy/get_friend_favor",getfriendfavornew:o+"/friendbuy/v2/get_friend_favor",getEveryBuy:o+"/recommend/get_product",getMoreEveryBuy:o+"/recommend/get_more_product",geteverytag:o+"/recommend/get_tag_list",seteverytag:o+"/recommend/set_user_tag",getProductDetail:o+"/friendbuy/get_product_detail",getproductfavor:o+"/friendbuy/get_product_favor",getproductfavorbyshare:o+"/friendbuy/get_product_favor_by_share",dofavorvideo:o+"/friendbuy/do_favor_video",getmoreproduct:o+"/productsearch/get_product_by_query",getmoreproductbyofficial:o+"/productsearch/get_official_product_by_query",getquerysuggestion:o+"/productsearch/get_product_suggest_by_query",getproductbyscancode:o+"/searchproduct/scancode",gettimeline:o+"/timeline/v2/getbypage",getmsglist:o+"/message/shoppinglistmessage/queryreplybypage",getSystemMsgList:o+"/message/shoppinglistmessage/querysystembypage",deletemsg:o+"/message/deletemessage",getOrderMessage:o+"/message/shoppinglistmessage/ordermessage",getProductUnreadNum:o+"/openproduct/getnum",getOrderUnreadNum:o+"/openorder/getnum",clearProductUnreadNum:o+"/openproduct/setread",clearOrderUnreadNum:o+"/openorder/setread",getprepayinfo:o+"/shoppingcart/get-prepay-info",payorder:o+"/shoppingcart/pay-order",getfavorbyquery:o+"/friendbuy/get_favor_by_query",syncUserMsg:o+"/kf_user/msg/v2/sync-user",sendUserMsg:o+"/kf_user/msg/send-user",sendKfMsg:o+"/kf_user/msg/send-kf",syncKfMsg:o+"/kf_user/msg/v2/sync-kf",getUserId:o+"/kf_user/userid/get-app",syncUserChatList:o+"/kf_user/chatlist/sync-user",syncKfChatListV2:o+"/kf_user/chatlist/v2/sync-kf",getKfList:o+"/kf_user/userid/get-kf",getUserInfo:o+"/kf_user/profile/get-user",getKfInfo:o+"/kf_user/profile/get-kf",kfSocket:"/"+o+"/kf_user/utils/websocket-init",kfTyping:o+"/kf_user/msg/typing-kf",acceptService:o+"/kf_user/service/accept",finishService:o+"/kf_user/service/finish",getUnReadMsgCnt:o+"/kf_user/msg/unread-user",deleteChat:o+"/kf_user/chatlist/del-user",getPermissionList:o+"/userauth/get",setPermission:o+"/userauth/set",setAllPermission:o+"/userauth/set-all-auth-agree",getAllPermission:o+"/userauth/get-all-auth-agree",syncHistory:o+"/userauth/syn-his-complete",agreeToUse:o+"/userauth/set-has-agree-auth-read",deletePermission:o+"/userauth/delete",syncAppHistory:o+"/userauth/set-auth-and-syn",clearAuthUnread:o+"/userauth/set-has-unread-auth",getProductComment:o+"/friendbuy/get_product_comment",getFriendList:o+"/friendbuy/get_friend_list",doFavorByBiz:o+"/friendbuy/post-biz-product-favor",getBizList:o+"/friendbuy/biz/get-list",getArticleList:o+"/friendbuy/biz/get-article-list",deleteFavor:o+"/friendbuy/delete-favor",blockBizProductFavor:o+"/friendbuy/block-biz-product-favor",checkProductValid:o+"/friendbuy/check_account_auth",doIconLike:o+"/like/do",delIconLike:o+"/like/undo",getAboutConfig:o+"/storage/sysget",getFeedbackReason:o+"/feedback/get-reason",sendFeedback:o+"/feedback/send",uninterest:o+"/feedback/uninterested",getHotWords:o+"/friendbuy/get_hotwords",getEntryStatus:o+"/entry/get_status",setEntryStatus:o+"/entry/mod_status",getMyRecommendList:o+"/timeline/v2/get_my_recommend",getRecommendDetail:o+"/timeline/get_recommend_detail",getQuanzuListByPage:o+"/group/contact/get_base_by_page",getIndexGroup:o+"/group/contact/v2/get_rich_by_page",getUserGroupInfo:o+"/group/contact/get_others_by_page",getIndexTimeline:o+"/group/feed/get_mix_feed_by_page",getGroupFeed:o+"/group/feed/get_by_page",getGroupFeedDetail:o+"/group/feed/get_detail",doGroupRecommend:o+"/group/favor/do",undoGroupRecommend:o+"/group/favor/undo",doGroupFeedLike:o+"/group/like/do",undoGroupFeedLike:o+"/group/like/undo",doGroupFeedReply:o+"/group/reply/do",undoGroupFeedReply:o+"/group/reply/undo",getGroupMember:o+"/group/member/get_member_by_page",getGroupFriends:o+"/group/info/get_group_friends_list",getGroupRecommendMember:o+"/group/privilege/get_recommend_member_by_page",getGroupCommentMember:o+"/group/privilege/get_comment_member_by_page",getGroupInfo:o+"/group/info/get_manage_info",setGroupInfo:o+"/group/info/set_info",checkInviteCode:o+"/group/info/check_invite_code",getInviteCodeList:o+"/group/info/get_invite_code_list",delMember:o+"/group/member/del_member",getInviteTicket:o+"/group/member/get_invite_ticket",getInviteInfo:o+"/group/member/get_invite_info",joinByInvite:o+"/group/member/join_by_invite",joinByGroupProfile:o+"/group/member/join_by_group_profile",joinByTicket:o+"/group/member/join_group",applyByTicket:o+"/group/member/apply_group",createGroup:o+"/group/info/create",groupProfile:o+"/group/info/get_profile_info",checkQuanzuInfo:o+"/group/info/check_info",quitGroup:o+"/group/member/quit",dissolveGroup:o+"/group/member/dissolve",uninterested:o+"/feedback/uninterested",getReason:o+"/feedback/get-reason",getReasonAll:o+"/feedback/batch-get-reason",getTypeList:o+"/recommend/get_type_list",getAllRecommendData:o+"/recommend/get_recommend_data",getProductByGroupShare:o+"/group/feed/get_by_share",checkGroupInfo:o+"/group/info/check_info",joinMessageInfo:o+"/member/info/join_message_info",acceptJoinGroup:o+"/group/member/owner_accept",rejectJoinGroup:o+"/member/info/reject_group_join",acceptGroupRecommend:o+"/group/privilege/accept_recommend_apply",acceptGroupComment:o+"/group/privilege/accept_comment_apply",getCanCreateCount:o+"/group/info/get_can_create_count",checkCanCreate:o+"/group/info/check_can_create",setOpenJoinConfirm:o+"/group/info/set_open_join_confirm",applyByInvite:o+"/group/member/apply_by_invite",applyByGroupProfile:o+"/group/member/apply_by_group_profile",getUserProfile:o+"/profile/get_user_profile",setUserProfile:o+"/profile/set_user_profile",reportRead:o+"/group/feed/report_read",getUserRecommend:o+"/profile/get_user_recommend",getNotSee:o+"/profile/get_not_see_list",addNotSee:o+"/profile/add_not_see",delNotSee:o+"/profile/del_not_see",setStarMember:o+"/group/member/set_star_member",delStarMember:o+"/group/member/del_star_member",getStarMember:o+"/group/member/get_star_member_list",getHotGroup:o+"/group/info/get_hot_group",doSubscribe:o+"/group/subscribe/do",groupTimeline:o+"/group/subscribe/get_feed_by_page",checkCanFavor:o+"/group/privilege/check_can_favor",applyRecommend:o+"/group/privilege/apply_recommend",checkCanReply:o+"/group/privilege/check_can_reply",applyComment:o+"/group/privilege/apply_comment",disableComment:o+"/group/privilege/del_comment",disableRecommend:o+"/group/privilege/del_recommend",batchGetGroupPrivilege:o+"/group/privilege/batch_get_group_privilege",getShareKey:o+"/group/feed/get_share_key",getSystemGroup:o+"/group/info/get_system_group",searchMember:o+"/group/member/search_member_by_page",ugcDetection:o+"/videodetect/detect",ugcObjectRetrieval:o+"/videodetect/getproduct",liveGetRoom:o+"/recommend/grouplive/get_all_room",liveCreateRoom:o+"/recommend/grouplive/create_room",liveDelRoom:o+"/recommend/grouplive/del_room",liveGetAudienceNum:o+"/recommend/grouplive/get_audience_num",liveEnterRoom:o+"/recommend/grouplive/enter_room",liveExitRoom:o+"/recommend/grouplive/exit_room",mixSearch:o+"/productsearch/get_product_and_feed_by_query",getMoreGroup:o+"/productsearch/get_more_group_name_by_query",getLikeByPage:o+"/group/like/get_by_page",getCommentByPage:o+"/group/reply/get_comment_by_page",getReplyByPage:o+"/group/reply/get_reply_by_page",doForward:o+"/group/forward/do",undoForward:o+"/group/forward/undo"},cgiMock:{},appid:e.Sys.appid(),baseParams:function(){return{wxapp_version_number:r.versionStr.split(".").reverse().map(function(e,r){return Number(e)*Math.pow(16,2*r)}).reduce(function(e,r){return e+r}),wxapp_version:r.versionStr,session_id:e.Sys.weappSessionId,check_auth_status:!0}},isTrial:"trial"===r.version,enableGEO:!r.isGroupApp,isTest:function(){return!0}}},imageLoader:function(e){return{host:["https://wxa.weixin.qq.com","https://mmbiz.qpic.cn","https://shp.qpic.cn","https://bs.qpic.cn"]}},model:function(e){return{version:r.versionStr}}}); 
 			}); 
		define("globalData.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={version:"release",versionStr:"1.6.2",isGroupApp:!1,path:"",scene:"",query:"",permissionWaitingList:[],hasBiz:!1,showAllRecommend:!0,allRecommendTitle:"大家买过",location:null,dicBizUin2kfStatus:{},timelineReasons:[],groupFeedReasons:[],allRecommendReasons:[],invalidGoodsAlertWhiteList:["1376101320","2234293421","857597622","2522456502"],everyBuyListTypeExpWhiteList:["1845059724","1903043882","100075","100143","112269","11458165","16900545","186011175","223772275","690559140","825563780","1308308542","1414018603","3191069997","1272830741","2234293421","857597622","113085615","1019064700","777953480","1141071701","152926","738079611","1114403000","2952056809","2232370460","2257018021","1436348241","739688481","100075","12272915","859822543","2616933020","16900545","1915580242","858686221","1097680621","2364370927","1070543381","1499179329"],internalWhiteList:["112269","100075","100143","11458165","47079825","777953480","825563780","1272830741","1656013422","858686221","113085615","1308308542","1376101320","2234293421","223772275","1114403000","2473306340","227055175","152926","1023267782","1967285441","1944790580","857597622","186011175","1414018603","690559140","1845059724","2291206100","1070543381","215721375","638631820","1610458214","1019064700","2781329820","2952056809","1097680621","16900545","12272915","726026327","2522456502","1116542641","859822543","2616933020","2232370460","1381836260","2257018021","195273315","2364370927","3192005215","3190005429","738079611","3194169268","2978731631","1567000401","2805761084"],liveRoomWhiteList:["112269","100075","152926","11458165","825563780","1610458214","223772275","1308308542","858686221","2234293421","1903043882"],ugcVideoWhiteList:["112269","100075","2234293421","11458165","113085615","777953480","857597622","1272830741","825563780","1114403000","186011175","858686221","16900545","1116542641","223772275","1097680621","1903043882","1308308542"],storageEnable:"true",readInfo:{},canSeeInfo:{isNull:!0,friend_can_see_options:[],group_friend_can_see_options:[]},showCreateGroupEntry:!1,groupInfo:{},whitePages:["/portal/content-edit/content-edit","/portal/group-manage-edit/group-manage-edit","/portal/friend-selector/friend-selector","/portal/group-member-selector/group-member-selector"]}; 
 			}); 
		define("languagePackage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},t=require("./libs/mmuxwxappdevkit/index"),r=t.IdKey,o=t.Sys,a=require("./utils/enum").IDKeyDefine,i=require("./core/exceptionReporter"),n=require("./models/getIndex"),l=require("./utils/json-diff-patch"),s=l.applyPatch,c=l.createPatch,p={},d="language_pkg_key_"+require("./globalData").versionStr,g=wx.getFileSystemManager();module.exports={languagePkg:{},setup:function(){return this.languagePkg=this.getLocalLanguagePkg(),this},getLocalLanguagePkg:function(){return{"/pages/index":{pageTitle:"好物圈",pageTitleGroupApp:"好物圈圈子",placeholderText:"搜索",placeholderTextNew:"搜索圈子、推荐、物品",placeholderTextGroupApp:"搜索圈子",dialog:{title:"进入“好物圈”",desc:"进入“发现”-“搜一搜”，即可找到“好物圈”，浏览更多朋友的推荐。",image:"../../assets/index-entry-tip-img.png",changeText:"启用新入口",ignoreText:"忽略",confirmText:"知道了"},groupNameInputHolder:"圈子名称(3-8个中文字符)",allRecommendTitle:"大家买过",hasNoneTimeline:"暂未加入圈子",hasNotMoreTimeline:"到此为止",latestUpdateGroup:"在看的圈子"},"/portal/profile":{pageTitle:"推荐",coverImgTip:"轻触设置封面",signaturePlaceholder:"填写个人介绍，让更多的人认识你。",signatureTitle:"设置个人介绍",signatureMaxTip:"个人介绍最多%s个中文字符",maxlimitWorld:30,createGroupTitle:{isMe:"创建的圈子",others:"创建的圈子"},joinGroupTitle:"加入的圈子",joinGroupTip:"（仅自己可见）",memberTxt:"%s个成员",groupRecommendTxt:"%s条推荐",confirmText:"我知道了",recommendTitle:{isMeAndShowAllFavor:"推荐仅自己可见",others:"推荐"},hasNoneRecommend:{isMe:"暂无推荐",others:"暂无推荐"},recommendTxt:"%s条推荐",useInviteCodeTxt:'你可以用邀请码<em class="highlight">创建圈子</em>。',inviteCodeQue:"邀请码是什么？",inviteCodeModalCont:"邀请码是授予用户创建圈子的资格凭证。为了营造良好的好物推荐氛围，我们会先释放少量的邀请码进行测试，部分用户会获得多个邀请码，可以邀请朋友创建圈子。",inviteCode:"%s个邀请码",showAllJoinGroupTxt:"全部",messageText:"消息",groupText:"圈子",orderText:"订单",collectText:"收藏",privateText:"隐私",tucaoText:"吐槽",linkText:"《好物圈插件功能服务协议》"},"/portal/share-product-detail":{pageTitle:{share:"好物分享",detail:"物品详情"},shareTitle:"为你推荐好物",contactSellerText:"联系卖家",toDetailText:"查看详情",poiText:"地理位置",articleText:"%s篇评测文章",shareText:"分享",collectText:"收藏",collectedText:"已收藏",recommendText:"推荐",isHasBuyText:"已购买",toMoreProductText:"前往好物圈",entry:{tip:"在“发现”-“搜一搜”可以找到好物圈",img:"../../assets/index-entry-tip-img.png",confirmText:"我知道了"}},"/search/product-list":{pageTitle:"",placeholderText:"搜索",placeholderProductText:"搜索物品"},"/search/search-new":{pageTitle:"",placeholderText:"搜索圈子、推荐、物品",placeholderTextGroupApp:"搜索圈子",placeholderGroupText:"搜索圈子",placeholderProductText:"搜索物品"},"/portal/group-profile":{pageTitle:"",quitGroupTip:"退出圈子将同时清空你在圈子中的推荐和评论",hasNoneRecommend:"暂无推荐",memberTxt:"%s个成员",groupRecommendTxt:"%s个推荐",entry:{tip:"在“发现”-“搜一搜”可以找到好物圈",img:"../../assets/index-entry-tip-img.png",confirmText:"我知道了"},forwardTitle:"朋友看好",friendRecommendTitle:"物品圈",howRecommend:"如何推荐",forwardSubTitle:"在这里可以看到朋友看好的推荐",friendRecommendSubTitle:"在这里可以看到朋友推荐的物品"},"/portal/group-manage":{pageTitle:"圈子管理",nameText:"圈子名称",avatarText:"圈子头像",descText:"圈子公告",descMaxTip:"圈子公告最多%s个中文字符",maxlimitWorld:200,modalConfirmText:"我知道了",descPlaceholder:"未填写",allowRecommendText:"允许推荐",allowCommentText:"允许评论",editNameFootTip:"3-15个中文字符，30天内限修改1次。",editNameConfirmTip:"修改后30天内将无法再次修改，确认修改圈子名称？",quit:{btn:"退出圈子",sheetTitle:"退出后不会再接收此圈子的信息",isQuit:"已退出圈子"},dissolve:{btn:"解散圈子",sheetTitle:"成员将收到通知，且解散后不能恢复。",isDissolve:"已解散圈子",isHasFeed:"需要清空推荐内容后解散圈子",modalConfirmText:"我知道了"},editTitle:{name:"设置圈子名称",desc:"设置圈子公告"}},"/portal/group-manage-edit":{pageTitle:"圈子头像"},"/portal/group-add":{pageTitle:"",cancelText:"取消",inviteCodePlaceHolder:"输入邀请码创建圈子",inviteCodeDesc:"每个邀请码仅限使用一次，圈子创建完成后即失效。",inviteCodeBtn:"下一步",uploadText:"上传头像",placeholder:{desc:"圈子公告"},descMaxTip:"圈子公告最多%s个中文字符",maxlimitWorld:200,modalConfirmText:"我知道了",confirmText:"完成"},"/portal/message-list":{},"/seller-online/portal/index":{pageTitle:"卖家消息"},"/portal/message-system-list":{},"/portal/setting":{pageTitle:"更多",messageText:"消息",groupText:"加入的圈子",orderText:"订单",collectText:"收藏",privateText:"隐私",tucaoText:"吐槽",linkText:"《好物圈插件功能服务协议》"},"/portal/group-list":{pageTitle:"圈子",groupNumText:"%s个圈子",hasNoneGroup:"还没有加入圈子",memberTxt:"%s个成员",groupRecommendTxt:"%s个推荐"},"/portal/group-feed-detail":{pageTitle:"推荐详情",entry:{tip:"在“发现”-“搜一搜”可以找到好物圈",img:"../../assets/index-entry-tip-img.png",confirmText:"我知道了"}},"/portal/recommend-detail":{pageTitle:"详情"},"/portal/order-list":{pageTitle:{neworder:"新同步订单",allorder:"订单"},newOrderText:"有新的订单动态",auth:{title:"没有同步过订单信息",subtitle:"授权小程序同步订单等购物数据以开始使用",btn:"去授权"},hasNoneCart:"暂无订单",permissionTitle:"授权以下小程序向好物圈同步订单等购物数据"},"/portal/order-detail":{},"/portal/cart-list":{pageTitle:{newcart:"新同步收藏",allcart:"收藏"},newCartText:"有新的收藏动态",auth:{title:"没有同步过购物数据",subtitle:"授权小程序同步订单等购物数据以开始使用",btn:"去授权"},hasNoneCart:"暂无收藏",permissionTitle:"授权以下小程序向好物圈同步订单等购物数据",deleteContent:"删除后将无法恢复，确定删除?",cartScene:{2:"来自 物品圈",4:"来自 搜索",5:"来自 大家买过",6:"来自 圈子推荐"}},"/portal/change-order-list":{},"/portal/change-cart-list":{},"/portal/private":{pageTitle:"隐私",auth:{allowText:"允许同步小程序购物数据",openText:"开启后，可授权小程序同步订单等购物数据。",closeText:"关闭后，小程序将不再向好物圈同步订单等购物数据，已同步的数据将被清空。",closeBtnText:"关闭"},permissionText:"授权管理",cannotSeeText:"不看他(她)",recommend:{allowText:"允许主页展示我的推荐",openText:"开启后，主页上将展示你的推荐。"}},"/portal/permission-new":{pageTitle:"授权管理",manageText:"管理",confirmText:"完成",closeAuthText:"关闭后，小程序将不再向好物圈同步订单和收藏信息，已同步的信息将同时被清空。",deleteTitle:"删除后，将停止小程序同步你的订单等数据，如有需要可以再次授权。",permissionTitle:"授权过的小程序",hasNoneAuth:"尚未授权任何小程序同步订单等购物数据",authText:"授权以下小程序向好物圈同步订单等购物数据",closeBtnText:"关闭"},"/portal/visibility":{pageTitle:"不看他(她)",confirmText:"完成",unVisibleTip:"你将看不到他(她)在好物圈的推荐。",emptyTip:"标记了“不看他(她)”的圈子成员将出现在这里。"},"/open/order-comment":{},"/portal/ugc-publish":{},"/portal/every-buy-list":{pageTitle:"",hasNoneGoods:"暂无推荐"},"/portal/faq":{pageTitle:"订单答疑",FAQ:[{question:"如何退货退款？",answer:"支付成功后，资金即被商家接收。退货退款需联系商家处理。\n操作方法：\n1. 进入订单详情页\n2. 联系品牌客服申请退款"},{question:"退款后多久会到账？",answer:"零钱支付：商家发起退款后实时退回；\n银行卡支付：商家发起退款后1-3个工作日退回。\n注：工作日指周一至周五政策工作时间，不包括周六、周日及国家法定节假日。\n退款状态核实方法：\n1. 打开【钱包】\n2. 点击右上角图标\n3. 找到该笔账单记录，即可看到退款状态，退款不会产生新的账单记录。"},{question:"商家不发货怎么办？",answer:"请先联系商家客服询问发货进展。\n操作方法：\n1. 进入订单详情页\n2. 联系商家客服询问发货进展\n若物品购买支付后超过7天，商家仍未发货，询问客服无果，可投诉商户。\n操作方法：\n1. 进入订单答疑页\n2. 点击投诉商户\n3. 选择投诉类型【其他】\n4. 提交交易记录、问题描述、联系电话和相关截图进行投诉。"},{question:"如何查询订单发货、物流信息？",answer:"操作方法：\n1. 进入订单详情页\n2. 点击配送信息模块\n未发货时暂无物流信息，可联系商家客服咨询发货进展。"},{question:"显示已发货，但是没有收到物品怎么办？",answer:"首先联系商家客服确认订单号是否正确，确认后联系物流公司查询订单状态。"},{question:"是否需要确认收货？",answer:"支付成功后，资金即被商家接收，无需确认收货。\n如需要退货退款，可参考“如何退货退款”进行操作。"}],DETAIL_FAQ:[{question:"投诉商户",answer:"如遇商户以刷单兼职、返利分销、色情赌博等方式恶意骗钱，请向微信支付投诉",url:"https://pay.weixin.qq.com/mmpaykf/createcmpl?type=business&ver=v1",wx_redirect:1}]},"/portal/add-search-entry":{title:{isAddText:"已添加好物圈到搜一搜",needAddText:"添加好物圈到搜一搜"},subtitle:"可在发现“搜一搜”页面进入好物圈",confirmAddText:"添加",cancelAddText:"取消添加"},"/portal/about":{pageTitle:"好物圈",config:{wording:["在好物圈，你可以从感兴趣的圈子中发现美好的生活方式，与朋友一起分享。","进入“发现”-“搜一搜”，即可找到“好物圈”。"],img:"https://shp.qpic.cn/wechat_bs/0/d8aaa8212e2ed45add1f9e2a17a05108/0"}},"/portal/share-success":{sucIcon:"",title:"已推荐到好物圈",tip:"进入“发现”-“搜一搜”，即可找到“好物圈”，浏览更多朋友的推荐。",friendsTip:"这些朋友也在推荐",oneFriendTip:"朋友也在推荐",confirmText:"完成",noFriendUse:{title:"如何进入好物圈",steps:["“发现”-“搜一搜”","进入好物圈"]},toIndexText:"前往好物圈"},"/portal/teach-recommend":{teachRecommendConfig:[{title:"1. 在好物圈“订单”或“收藏”中推荐",description:"进入“个人中心”-“订单”或“收藏”，选择要推荐的物品，填写推荐理由，选择“物品圈”并点击“发表”即可。",img:"https://bs.qpic.cn/mmux/dx4Y70y9XcvyqicYW5TYDPuHooFzWzNhrNS4KksHXV5qJzxowfsK6ufykhP5HZD4Aawvdac80IS8/0"},{title:"2. 在商家小程序中推荐",description:"进入小程序的商品详情页，点击“好物推荐”，填写推荐理由，选择“物品圈”并点击“发表”即可。",img:"https://bs.qpic.cn/mmux/dx4Y70y9XcvyqicYW5TYDPuHooFzWzNhrF5Fn1FkYfNIW67GCc2xyxlg6OE8cBGhNPA2r8KXd4l4/0"}]}}},getNetworkLanguagePkg:function(){var t=this;n.reload({loading:!1,useCache:!1,success:function(i,n){if(!n){var l=i.language_pkg_info,s=void 0===l?{SHOPPING_LIST_PKG_INFO_IS_NULL:!0}:l;if(s.SHOPPING_LIST_PKG_INFO_IS_NULL){r.report(o.alarmId,a.LanguagePkgInfoEmpty);var c="shopping-index缺少语言包字段: language_pkg_info";console.error(c),t.reportError(s,c)}else console.info("language_pkg_info: ",s),t.downLoadLanguagePkg(e({},s,{success:function(e){var r=e.source;t.setStorageSync(r)},fail:function(e){var r=e.errmsg;console.error(r),t.reportError(s,r)}}))}},fail:function(e){r.report(o.alarmId,a.ShoppingIndexFail),console.error("shopping-index fail: ",e)}})},reportError:function(e,t){i.report({type:i.TYPE.DownLoad_Language_PKG_ERROR,info:"language_pkg_info="+encodeURIComponent(JSON.stringify(e))+";errmsg="+encodeURIComponent(t)+";"})},clearStorageKey:function(){try{wx.setStorageSync(d,"")}catch(e){console.error("clearStorage fail: ",d,e)}},getStorage:function(){var e=this,t={SHOPPING_LIST_PKG_IS_NULL:!0};wx.getStorage({key:d,success:function(r){(t=r.data)&&!t.SHOPPING_LIST_PKG_IS_NULL&&e.createAndApplyPatch(t)},fail:function(e){r.report(o.alarmId,a.GetStorageLanguagePkgError),console.error("getStorageSync fail: ",d,e)}})},setStorageSync:function(e){try{wx.setStorageSync(d,e)}catch(e){console.error("setStorageSync fail: ",d,e)}},downLoadLanguagePkg:function(e){var t=e.url,i=void 0===t?"":t,n=e.status,l=e.md5,s=void 0===l?"":l,c=e.fail,d=void 0===c?p:c;if(0==n)if(this.getStorage(),i&&s)this.downloadJsonFile(e);else{r.report(o.alarmId,a.UrlOrMd5IsEmpty);d&&d({errmsg:"downLoadLanguagePkg error: url或者md5为空"})}else{r.report(o.alarmId,a.LanguagePkgDisabled);console.info("downLoadLanguagePkg error: 语言包不可用"),this.clearStorageKey()}},downloadJsonFile:function(t){var i=this,n=t.url,l=void 0===n?"":n,s=t.md5,c=void 0===s?"":s,d=t.success,u=void 0===d?p:d,T=t.fail,m=void 0===T?p:T;wx.downloadFile({url:l,success:function(t){if(200==t.statusCode)if(l&&c&&(l.split("hwq_config_")[1]||"").split(".json")[0]===c){var n={SHOPPING_LIST_PKG_IS_NULL:!0};try{(n=JSON.safeParse(g.readFileSync(t.tempFilePath,"utf-8"))||{})&&!n.SHOPPING_LIST_PKG_IS_NULL&&(i.createAndApplyPatch(n),u&&u(e({},t,{source:n})))}catch(e){var s="downloadFile success callback error: "+t.tempFilePath+", "+e;m&&m({errmsg:s})}}else{r.report(o.alarmId,a.FileNameIsNotEqualMd5);var p="downloadFile success callback error:  文件名:"+l+" 和md5标识符:"+c+" 不匹配";m&&m({errmsg:p})}else{r.report(o.alarmId,a.DownLoadNetworkLanguagePkgError);var d="downloadFile success callback error:  "+t.statusCode;m&&m({errmsg:d})}},fail:function(e){r.report(o.alarmId,a.DownLoadNetworkLanguagePkgError);var t="downloadFile fail, request error: "+e;m&&m({errmsg:t})}})},createAndApplyPatch:function(e){var t=this.getLocalLanguagePkg();try{var i=c(t,e);i=i.filter(function(e){return"remove"!==e.op||"remove"===e.op&&"array"===e.type}),s(t,i),this.languagePkg=t}catch(e){r.report(o.alarmId,a.CreateAndApplyPatchError),console.error("createAndApplyPatch error: ",e)}}}; 
 			}); 
		define("libs/deep-obj-diff/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e){return e instanceof Date}function r(e){return 0===Object.keys(e).length}function n(e){return null!=e&&"object"===(void 0===e?"undefined":f(e))}function o(e){return n(e)&&!e.hasOwnProperty?u({},e):e}Object.defineProperty(exports,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports.default=function f(c,i){if(c===i)return{};if(!n(c)||!n(i))return i;var a=o(c),y=o(i),l=Object.keys(a).reduce(function(t,r){return y.hasOwnProperty(r)?t:u({},t,e({},r,void 0))},{});return t(a)||t(y)?a.valueOf()==y.valueOf()?{}:y:Object.keys(y).reduce(function(o,c){if(!a.hasOwnProperty(c))return u({},o,e({},c,y[c]));var i=f(a[c],y[c]);return n(i)&&r(i)&&!t(i)?o:u({},o,e({},c,i))},l)}; 
 			}); 
		define("libs/mmuxwxappdevkit/core/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o=require("../foundation/navigate/navigator.js"),t=wx,i=!1,r={showToast:function(n){n&&n.image&&(n.image=o.BrandMallImage(n.image)),wx.showToast(n)},navigateTo:function(n){o.navigateTo(n)},navigateBack:function(n){o.navigateBack(n)},navigateToMiniProgram:function(n){o.navigateToMiniProgram(n)},navigateBackMiniProgram:function(n){o.navigateBackMiniProgram(n)}};"undefined"==typeof Proxy&&(t=Object.assign({},wx,r),i=!0),i||(i=!0,t=new Proxy(r,{get:function(o,t){var i=this;if(t in o)return o[t];if(t in wx)return function(){for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];if(1==r.length&&"object"==n(r[0])||!t.includes("Sync")&&0==r.length){0==r.length&&r.push({});var e=r[0],c=e.success,u=e.fail;return e.success=function(n){c&&c(n)},e.fail=function(n){console.error("call WXJSApi: ",t,"with options: ",e," fail: ",n),u&&u(n)},r[0]=e,wx[t].apply(i,r)}var f=null;try{f=wx[t].apply(i,r)}catch(n){console.error("call WXJSApi: ",t,"with options: ",r," fail: ",n)}return f};throw new Error({errmsg:"No such api: "+t,errcode:-1})}})),module.exports=t; 
 			}); 
		define("libs/mmuxwxappdevkit/core/category.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Array.prototype.includes=Array.prototype.includes?Array.prototype.includes:function(t){return-1!=this.indexOf(t)},Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in e)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[r]:("00"+e[r]).substr((""+e[r]).length)));return t},Object.values=Object.values?Object.values:function(t){var e,r=[];for(e in t)r.push(t[e]);return r},JSON.safeParse=function(t){if(!t||0==t.length)return{};var e=null;try{e=JSON.parse(t)}catch(r){console.error(t),e={}}return e},String.prototype.charLength=function(){for(var t=0,e=0;t<this.length;t++)this.charCodeAt(t)>255?e+=2:e+=1;return e};Object.safePropertyAt=function(t,e){if(t&&e.length>0){var r=e.split("."),n=t;try{return r.forEach(function(t){n=n[t]}),n}catch(t){console.error("safeProperty exception: "+t)}}return null},String.prototype.hashCode=function(){var t,e=0;if(0===this.length)return e;for(t=0;t<this.length;t++)e=(e<<5)-e+this.charCodeAt(t),e|=0;return e}; 
 			}); 
		define("libs/mmuxwxappdevkit/core/console.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=function(o){this.moduleName=o||""};o.prototype={doLog:function(o,n){var t=["["+this.moduleName+"]"].concat(Array.from(n));o.apply(console,t)},log:function(){this.doLog(console.log,arguments)},info:function(){this.doLog(console.info,arguments)},warn:function(){this.doLog(console.warn,arguments)},error:function(){this.doLog(console.error,arguments)}},module.exports=function(n){return new o(n)}; 
 			}); 
		define("libs/mmuxwxappdevkit/core/eventcenter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function r(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function t(e,i){r(this,t),this.obj=e,this.func=i};module.exports={setup:function(r){this.Event=r.Event},_register:{},register:function(r,e,i){r&&(r in this._register||(this._register[r]=[]),this._register[r].push(new t(e,i||r)))},unregister:function(r,t){if(r&&r in this._register){var e=[],i=!0,n=!1,o=void 0;try{for(var a,s=this._register[r][Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var l=a.value;l.obj===t&&e.push(l)}}catch(r){n=!0,o=r}finally{try{!i&&s.return&&s.return()}finally{if(n)throw o}}var f=!0,u=!1,h=void 0;try{for(var v,c=e[Symbol.iterator]();!(f=(v=c.next()).done);f=!0){var y=v.value;this._register[r].splice(this._register[r].indexOf(y),1)}}catch(r){u=!0,h=r}finally{try{!f&&c.return&&c.return()}finally{if(u)throw h}}}},unregisterAllEvents:function(r){if(r)for(var t in this._register){var e=[],i=!0,n=!1,o=void 0;try{for(var a,s=this._register[t][Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var l=a.value;l.obj===r&&e.push(l)}}catch(r){n=!0,o=r}finally{try{!i&&s.return&&s.return()}finally{if(n)throw o}}var f=!0,u=!1,h=void 0;try{for(var v,c=e[Symbol.iterator]();!(f=(v=c.next()).done);f=!0){var y=v.value;this._register[t].splice(this._register[t].indexOf(y),1)}}catch(r){u=!0,h=r}finally{try{!f&&c.return&&c.return()}finally{if(u)throw h}}}},emit:function(r,t){if((arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).noLog||console.info("eventcenter emit: ",r,t),r&&r in this._register){var e=!0,i=!1,n=void 0;try{for(var o,a=this._register[r][Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var s=o.value,l=s.obj,f=s.func;l[f]&&l[f](t)}}catch(r){i=!0,n=r}finally{try{!e&&a.return&&a.return()}finally{if(i)throw n}}}}}; 
 			}); 
		define("libs/mmuxwxappdevkit/core/file-manager.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("console.js")("file-manager"),i=require("api.js"),r=require("../foundation/oss/idkey.js"),l=require("../utils/enum.js").IDKeyDefine,t=require("sys.js");module.exports={_queue:[],_isQueueWoring:!1,_reachFullCount:0,_expiredFileCountArray:[1,3,5],saveFile:function(e){this._queue.push(e),this.checkNext()},checkNext:function(){if(0!=this._queue.length&&!this._isQueueWoring){this._isQueueWoring=!0;var a=this._queue.shift(),s=this;i.saveFile({tempFilePath:a.tempFilePath,success:function(e){a.success&&a.success(e),s.checkExpiredFiles({handleExpireFile:a.handleExpireFile,complete:function(){s._isQueueWoring=!1,s.checkNext()}})},fail:function(i){e.error("saveFile error: ",i),r.report(t.alarmId,l.LoadImageSaveFileError),a.fail&&a.fail(i),s._isQueueWoring=!1,s.checkNext(),-1!=i.errMsg.indexOf("the maximum size of the file storage limit")&&r.report(t.alarmId,l.FileManagerSaveFileExceeded)}})}},checkExpiredFiles:function(a){var s=this;i.getSavedFileList({success:function(u){try{var o=0,c=(u.fileList||[]).sort(function(e,i){return i.createTime-e.createTime});for(c.forEach(function(e){o+=e.size}),o>8388608&&r.report(t.alarmId,l.LocalFileStorageWillFull);o>8388608;){s._reachFullCount<s._expiredFileCountArray.length&&(s._reachFullCount+=1);var n=s._expiredFileCountArray[s._reachFullCount-1];e.info("file storage will be full, checking "+n+" expired files.");for(var h=0;h<n;h++)if(c.length>0){var f=c.pop();a.handleExpireFile&&a.handleExpireFile(f),i.removeSavedFile({filePath:f.filePath}),o-=f.size}}}catch(i){e.error(i)}a.success&&a.success(),a.complete&&a.complete()},fail:function(){e.error("getSavedFileList error"),r.report(t.alarmId,l.FileManagerGetSavedFileError),a.fail&&a.fail(),a.complete&&a.complete()}})}}; 
 			}); 
		define("libs/mmuxwxappdevkit/core/logger.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(Array.isArray(e)){for(var o=0,n=Array(e.length);o<e.length;o++)n[o]=e[o];return n}return Array.from(e)}var o=require("sys.js"),n=require("network.js");console._log=console.log.bind(console),console._debug=console.log.bind(console),console._info=console.info.bind(console),console._error=console.error.bind(console),console._warn=console.warn.bind(console),console.enableFlags={log:!1,debug:!1,info:!1,warn:!1,logToFile:!1},console.log_level="D",console.chunk_size=250,console.log_exptime=2592e5;var s=[],l=function(){var e=6e4*(new Date).getTimezoneOffset(),n=new Date(Date.now()-e).toISOString().replace("T"," ").slice(0,-1),l=arguments[0],t=arguments[1],c="L";if(l==console._debug?c="D":l==console._info?c="I":l==console._error?c="E":l==console._warn&&(c="W"),t.length>0){var i=Array.prototype.slice.call(t,0),r=["(",c,")"].join("");if(n=["[",n,"]"].join(""),i.splice(0,0,r),i.splice(1,0,n),"devtools"===o.platform){var a=new Error("dummy").stack.split("\n")[3].split(" "),g=a.pop().split("/").pop(),u=a.pop();i.splice(2,0,["(",u," ",g].join(""))}if(l.apply(this,i),function(e){var o=["L","D","I","W","E"];return o.indexOf(e)>=o.indexOf(console.log_level)}(c)){for(var f=0;f<i.length;f++)i[f]=JSON.stringify(i[f]);var p=i.join(" ").replace(/['"]+/g,"");s.push(p),s.length>0&&s.length%50==0&&console.sync()}}};console.log=function(){this.enableFlags.log&&l(this._log,arguments)},console.debug=function(){this.enableFlags.debug&&l(this._debug,arguments)},console.info=function(){this.enableFlags.info&&l(this._info,arguments)},console.warn=function(){this.enableFlags.warn&&l(this._warn,arguments)},console.error=function(){l(this._error,arguments)},console.sync=function(o){if(this.enableFlags.logToFile){wx.getStorageInfo({success:function(n){if(n.currentSize+JSON.stringify(s).length/1024+100>=n.limitSize){console.info("storage is full, sync log fail");var l=wx.getStorageSync("log_files")||[];l.forEach(function(e){wx.removeStorageSync(e.key)}),l.length&&wx.setStorageSync("log_files",[])}var t=new Date,c="_logger__logs__"+t.toJSON().slice(0,10).replace(/-/g,"/");wx.getStorage({key:c,complete:function(n){var l=n.data;l=l?[].concat(e(l),e(s)):s,console.info("log sync size: ",l.length),wx.getStorage({key:"log_files",complete:function(e){var o=e.data||[];o.map(function(e){return e.key}).includes(c)||(o.push({key:c,expTime:t.getTime()+console.log_exptime}),wx.setStorage({key:"log_files",data:o}))}}),wx.setStorage({key:c,data:l,complete:function(e){o&&o.complete&&o.complete(e)}}),s=[]}})}})}},module.exports={setup:function(e){console.enableFlags=e,this.clearExpLogs()},clearExpLogs:function(){wx.getStorage({key:"log_files",success:function(e){var o=e.data||[],n=(new Date).getTime(),s=[];o.forEach(function(e){n>=e.expTime?wx.removeStorage({key:e.key}):s.push(e)}),wx.setStorage({key:"log_files",data:s})}})},sync:function(e){return console.sync(e)},logs:s,getLogs:function(e){var o="_logger__logs__"+e.date;wx.getStorage({key:o,success:e.success,fail:e.fail,complete:e.complete})},upload:function(e){var n=this;n.curUploadIndex=0,n.uploadProgress=0,n.uploadState="processing";var s=parseInt((new Date).getTime()/1e3),l=[o.appid(),s].join("-");n.getLogs({date:e.date,success:function(o){var s=o.data||[],t=Math.ceil(1*s.length/console.chunk_size);n._reportLoop({logs:s,serial:l,count:t,success:e.success,fail:e.fail})}})},_reportLoop:function(e){var o=this;if(o.curUploadIndex<e.count){var n=o.curUploadIndex*console.chunk_size,s=e.logs.slice(n,n+console.chunk_size);o._postLogs({slice:s,serial:e.serial,curUploadIndex:o.curUploadIndex,count:e.count,success:function(){o.curUploadIndex+=1,o.uploadProgress=1*o.curUploadIndex/e.count,setTimeout(function(){o._reportLoop(e)},500)},fail:function(n){console.warn(n),o.uploadState="error",e.fail&&e.fail(n)}})}else o.uploadState="finished",e.success&&e.success()},_postLogs:function(e){n.request({cgi:n.cgiSet.reportclientlog,params:{report_id:[e.serial,e.curUploadIndex,e.count].join("."),log_buffer:e.slice.join("\n")},success:e.success,fail:e.fail})}}; 
 			}); 
		define("libs/mmuxwxappdevkit/core/network.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.DEFAULT;return e.commands||(e.commands=[]),e.priority=t,i.forEach(function(i){Object.defineProperty(e,i,{value:function(){e.commands.push({name:i,arguments:arguments})}})}),e}function i(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments[2];if(L.quota>0){L.quota--;var s=i.complete;return i.complete=function(e){s&&s(e),L.quota++},e&&e(i)}return v.push(t),t}var t=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},s=require("state.js"),o=require("../utils/enum.js"),n=require("../utils/url-parse.js"),r=require("sys.js"),a=require("storage.js"),c=require("eventcenter.js"),u=require("api.js"),l=require("../foundation/oss/idkey.js"),g=require("../utils/util.js"),d=require("../utils/jsencrypt.js"),h="-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArBHw7wHyPpLu4azV4Wtj\nXb7N/srw5x9mCPdy4EcwSjRvucN9a6WFWBJpsQlMiOuEZuJvmEmUJpNKFFfNcwzK\nWK2cRz1XEZQtbgSJxXOP6zegLn9W1Ld7HNBmn3voMbjBvOsc7kyzCMxaSf9Q2xsg\nF/AYvHWoBmsL3uB5b34Wzi4a8fgS9Sl6eagsjLrKHrohPg2c5yoS50g8tJs6EcrW\n/XVROVdEj74evR60E1U63ITHdA9ebKG1Vrhj/n1BX9zf1qpDs8Y7BCtUaiXNBy+N\nynHkj0n6g5Ays7PxYD1zyzJhTeFD6BYy6e51P6enzs1Y6rlP0x8LrB8EU7uD2Oo2\nmQIDAQAB\n-----END PUBLIC KEY-----",f=0,m={HIGH:750,DEFAULT:500,LOW:250},p=u.request,k=u.downloadFile,_=u.uploadFile,v=[],y=10,L=Object.defineProperty({},"quota",{get:function(){return y},set:function(e){if(y=e,e>0&&v.length>0){v.sort(function(e,i){return e.priority==i.priority?0:e.priority>i.priority?-1:1});var i=v.shift();if(i.create){var t=i.commands||[];i=i.create(),t.forEach(function(e){var t=i[e.name];t&&t.apply(i,e.arguments)})}}}});u.request=function(t){return i(p,t,e({create:function(){return u.request(t)}},["abort","onHeadersReceived","offHeadersReceived"],m.HIGH))},u.downloadFile=function(t){return i(k,t,e({create:function(){return u.downloadFile(t)}},["abort","offHeadersReceived","offProgressUpdate","onHeadersReceived","onProgressUpdate"]))},u.uploadFile=function(t){return i(_,t,e({create:function(){return u.uploadFile(t)}},["abort","offHeadersReceived","offProgressUpdate","onHeadersReceived","onProgressUpdate"]))},module.exports={setup:function(e){this.host=e.host,this.isTrial=e.isTrial,this.cgiSet=e.cgiSet,this.cgiMock=e.cgiMock,this.loginTicketKey=e.loginTicketKey||"loginTicket",this.appid=e.appid,this.__baseParams=e.baseParams,this.isTest=e.isTest,this.__baseUrlParams=e.__baseUrlParams,this.__isPlugin=e.isPlugin,this.loginCgi=this.cgiSet.login,this.enableGEO=e.enableGEO,this.setupUserInfo(u.getStorageSync(this.loginTicketKey)),this.checkSession();var i=this;e.enableGEO&&u.getLocation({type:"gcj02",success:function(e){i.latitude=e.latitude,i.longitude=e.longitude}})},request:function(e){var i=this;if(-1==Object.values(i.cgiSet).indexOf(e.cgi)&&(console.error("use cgi without register"),l.report(r.alarmId,o.IDKeyDefine.NetworkUseCgiWithoutRegister)),e.skipCheckLogin||i._state==s.login){if(!e.skipCheckLogin&&!i.checkServerSession())return console.warn("check server session expired"),void i.makeSessionTimeout(e);i.doRequest({cgi:e.cgi,method:e.method,isSocket:e.isSocket,params:e.params,baseReqParams:e.baseReqParams,header:e.header,isTest:e.isTest,urlParams:e.urlParams,skipBaseRequest:e.skipBaseRequest,options:e,success:function(i){0==i.errcode?e.success&&e.success(i):e.fail&&e.fail(i)},fail:e.fail,complete:e.complete})}else e&&i._requestQueue.push(e),i.checkSession()},ensureServerSessionValid:function(e){this.checkServerSession()?e&&e.success&&e.success():(e&&this._loginObserverQueue.push(e),this.makeSessionTimeout(),this.checkSession())},doRequest:function(e){var i=this,s=g.appendQueryObject(i.host+e.cgi,e.urlParams||{}),a=e.params,c=t({req_id:""+Date.now()+f++},i.baseParams(),e.baseReqParams);e.skipBaseRequest||(a=t({base_req:c},e.params)),a.session_key=this._ticket&&this._ticket.session_key?this._ticket.session_key:void 0;var d=this._ticket&&this._ticket.currentRandomReqKey?this._ticket.currentRandomReqKey:void 0;if(e.isSocket)i.makeRequestSuccess(e.cgi,{data:Object.assign(a,{errcode:0})},e);else{if(i.cgiMock[e.cgi]){var h=i.cgiMock[e.cgi];return console.debug("[mock]request: "+s+" complete, mockdata: ",h),void i.makeRequestSuccess(e.cgi,{data:h},e)}var m=e.header||{},p="0x"+Number(r.wechatVersion()).toString(16);void 0===m["X-WX-ClientVersion"]&&(e.isTest?m["X-WX-ClientVersion"]=p:i.isTest&&i.isTest()&&(m["X-WX-ClientVersion"]=p)),this._ticket&&this._ticket.route_header&&(m["X-WECHAT-UIN"]=this._ticket.route_header),console.info("request begin: "+e.cgi+", req_id["+c.req_id+"]"),console.log("data: ",a);var k=n(s,!0).pathname||"UNKOWN_CGI",_=(new Date).getTime();if(!k.includes("/reportdata")&&console.reportQuaility&&console.reportQuaility({t:(new Date).getTime(),quailityLogType:2,cgi_name:k,statistics_type:0,value:1}),d){m.timestamp=String(Date.now());var v=d+JSON.stringify(a)+m.timestamp+"/"+g.appendQueryObject(e.cgi,e.urlParams||{});m.sign_key=g.sha1(v)}u.request({url:s,data:a,header:m,method:e.method?e.method:"POST",success:function(t){console.info("request success: "+e.cgi+", req_id["+c.req_id+"]"),e.cgi==i.loginCgi?console.info("login resp data: ",t):console.log(e.cgi+" resp data: ",t),t&&200===t.statusCode?t.data.errcode===o.SvrErrorCode.OK?i.makeRequestSuccess(e.cgi,t,e):(l.report(r.alarmId,o.IDKeyDefine.NetworkLogicError),t.data.errcode==o.SvrErrorCode.SessionTimeout&&l.report(r.alarmId,o.IDKeyDefine.NetworkSessionTimeout),i.makeRequestFail(e.cgi,{req_id:c.req_id,errcode:t.data.errcode||o.SvrErrorCode.Unknown,errmsg:t.data.msg||"Undefined Error",options:e.options},e)):(l.report(r.alarmId,o.IDKeyDefine.NetworkHttpError),i.makeRequestFail(e.cgi,{req_id:c.req_id,errcode:t.statusCode,errmsg:"HTTP Error"},e)),!k.includes("/reportdata")&&console.reportQuaility&&console.reportQuaility({t:(new Date).getTime(),quailityLogType:2,cgi_name:k,statistics_type:1,value:1,delta_time:(new Date).getTime()-_})},fail:function(s){l.report(r.alarmId,o.IDKeyDefine.NetworkConnectError),i.makeRequestFail(e.cgi,t({req_id:c.req_id},s),e),!k.includes("/reportdata")&&console.reportQuaility&&console.reportQuaility({t:(new Date).getTime(),quailityLogType:2,cgi_name:k,statistics_type:2,value:1,delta_time:(new Date).getTime()-_})}})}},makeRequestFail:function(e,i,t){if(console.error("request fail, ",e,i),e==this.loginCgi);else if(i&&i.errcode==o.SvrErrorCode.SessionTimeout)return this.__isPlugin&&c.emit("onPluginSessionTimeout"),void(i.options.skipCheckLogin?(t.fail&&t.fail(i),t.complete&&t.complete(i)):this.makeSessionTimeout(i.options));t&&(t.fail&&t.fail(i),t.complete&&t.complete(i))},makeRequestSuccess:function(e,i,t){t&&(t.success&&t.success(i.data),t.complete&&t.complete(i.data))},makeSessionTimeout:function(e){console.info("make login status expired"),this.onLoginExpired(),e&&(console.info("wait for retrying, cgi ",e.cgi),this.request(e))},_baseParams:null,baseParams:function(){return null==this._baseParams&&(this._baseParams={client_version:r.wechatVersion(),device:r.wechatDevice(),scene:(r._scene||"")+""}),this.enableGEO&&(this._baseParams.latitude=this.latitude,this._baseParams.longitude=this.longitude),Object.assign({canvas_cookie:this._canvasCookie,session_key:this._ticket&&this._ticket.session_key?this._ticket.session_key:""},this._baseParams,this.__baseParams())},isLogin:!1,_state:s.logout,_ticket:null,_requestQueue:[],_loginObserverQueue:[],checkSession:function(){var e=this;if(e._state==s.logout){if(e.__isPlugin)return void e.getLocalTicket();e._state=s.logingin,u.checkSession({success:function(i){e.getLocalTicket()},fail:function(i){console.warn("wx.checkSession fail, need relogin, ",i),e.doWxLogin()}})}},checkServerSession:function(){return!!this._ticket&&(this._ticket._cache_time||0)+(this._ticket.expire_seconds||0)>parseInt(Date.now()/1e3)},clearLocalTicket:function(){var e=this;u.removeStorage({key:e.loginTicketKey}),console.info("clear local ticket"),e._state=s.logout,e._ticket=null,e.isLogin=!1,e.doWxLogin()},getLocalTicket:function(){var e=this;a.getData({key:e.loginTicketKey,success:function(i){i&&i.data?(i.data._cache_time||0)+(i.data.expire_seconds||0)>parseInt(Date.now()/1e3)?e.onLoginSuccess(i.data):(a.removeData({sync:!0,key:e.loginTicketKey}),console.warn("get local ticket found expired"),e.doWxLogin()):(console.warn("local ticket not found"),e.doWxLogin())},fail:function(i){console.error("getLocalTicket fail: ",i),e.doWxLogin()}})},doWxLogin:function(){var e=this;e.__isPlugin?e.markPluginNeedWxLogin():u.login({success:function(i){i&&i.code?(console.info("doWxLogin success, ",i),e.doCgiLogin(i.code)):(console.error("doWxLogin success but code not exists, ",i),e.onLoginFail("doWxLogin success but code not exists"))},fail:function(i){console.error("doWxLogin fail, ",i),e.onLoginFail("doWxLogin fail"),l.report(r.alarmId,o.IDKeyDefine.WXLoginApiError)}})},doCgiLogin:function(e,i,t){var s=this;s.appid&&0!==s.appid.length||l.report(r.alarmId,o.IDKeyDefine.LoginWithAppIdEmpty);var n=new d;n.setPublicKey((this.isTrial,h));var c=(String(Math.random()).split(".")[1]+"0000000000000000").substring(0,16),u=n.encrypt(c);console.info("加密结果："+u),s.request({cgi:s.cgiSet.login,params:{auth_code:e,authorizer_appid:s.appid,encrypt_key:u},skipCheckLogin:!0,skipBaseRequest:!0,success:function(e){var t=Object.assign({},e);t._cache_time=parseInt(Date.now()/1e3),t.currentRandomReqKey=c,a.setData({key:s.loginTicketKey,data:t}),s.onLoginSuccess(t),i&&i()},fail:function(e){s.onLoginFail("doCgiLogin fail"),t&&t(e)}})},checkRequestQueue:function(e,i){var t=this._requestQueue;if(this._requestQueue=[],0==e)for(var s=0;s<t.length;s++)this.request(t[s]);else for(var o=0;o<t.length;o++)console.error("notify fail, ",t[o]),t[o]&&t[o].fail&&t[o].fail(i),t[o]&&t[o].complete&&t[o].complete(i)},checkLoginObserverQueue:function(e){var i=this._loginObserverQueue;this._loginObserverQueue=[];var t=!0,s=!1,o=void 0;try{for(var n,r=i[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){var a=n.value;e?a&&a.success&&a.success():a&&a.fail&&a.fail(),a&&a.complete&&a.complete()}}catch(e){s=!0,o=e}finally{try{!t&&r.return&&r.return()}finally{if(s)throw o}}},onLoginSuccess:function(e){console.debug("loginTicket: ",e),this._state=s.login,this._ticket=e,this.isLogin=!0,this.setupUserInfo(e),this.checkRequestQueue(0),this.checkLoginObserverQueue(!0),r.pluginNeedWxLogin=!1,c.emit("onLoginSuccess")},onLoginFail:function(e){this._state=s.logout,this.isLogin=!1,this.checkRequestQueue(-1,e),this.checkLoginObserverQueue(!1),c.emit("onLoginFail")},onLoginExpired:function(){this._state=s.logout,this._ticket=null,this.isLogin=!1,a.removeData({sync:!0,key:this.loginTicketKey}),console.info("clear local ticket")},sessionLoginTime:function(){return this._ticket?this._ticket._cache_time:(u.getStorageSync(this.loginTicketKey)||{})._cache_time},markPluginNeedWxLogin:function(e){r.pluginNeedWxLogin=!0,console.info("emit onPluginNeedWxLogin event"),c.emit("onPluginNeedWxLogin",e)},pluginWxLoginSuccess:function(e){var i=this;e&&e.code?(console.log("doWxLogin success, ",e),i.doCgiLogin(e.code,e.success,e.fail)):i.onLoginFail("doWxLogin success but code not exists")},pluginWxLoginFail:function(e){this.onLoginFail("doWxLogin fail"),l.report(r.alarmId,o.IDKeyDefine.WXLoginApiError)},getSocketReqData:function(e){this.request(Object.assign(e,{isSocket:!0}))},setupUserInfo:function(e){e&&e.uin&&(r.userUin=e.uin,r.userInfo={uin:e.uin,openid:e.business_openid})}}; 
 			}); 
		define("libs/mmuxwxappdevkit/core/reliableLogger.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n={},r=require("../core/api.js"),t=require("../index.js").Reporter,a=r.getAccountInfoSync&&r.getAccountInfoSync().miniProgram.appId||"unknownAPPID",l=!0,i=!1,s=0,c=(new Date).getTime(),u=[],g=function(){},_=function(){return n&&n.globalData&&"true"===n.globalData.storageEnable},f=function(){return _()?r.setStorageSync.apply(null,arguments):null},I=function(){return _()?r.setStorage:function(){return null}},L=function(){return _()?r.getStorageSync.apply(null,arguments):null},E=function(){return _()?r.getStorageInfoSync.apply(null,arguments):null},p=function(){return _()?r.removeStorageSync.apply(null,arguments):null},y={CLIENT_LOG_PREFIX:"HWQ_APP_LOG ",LOG_ID:17229,QUAILITY_LOG_ID:17308,AUTO_UPLOAD_INTERVAL:11e3,AUTO_SAVE_LOGID_INVERVAL:17e3,LOG_KEY_PREFIX:"HWQ_LOG_KEY_",KEY_OF_AUTO_INCREMENT_LOG_ID:"HWQ_AUTO_INCREMENT_LOG_ID",LOG_MAX_TRY_COUNT:3,TMP_LOG_MAX_LENGTH:40,CURRENT_NET_WORK_TYPE:"4G",LOG_BLOCK_LENGTH:100,LOG_PACKAGE_SIZE:{"2G":15360,"3G":25600,"4G":51200,WIFI:51200,NONE:0},SINGLE_LOG_MAX_LENGTH:7104,LOG_TYPE:{LOG:"LOG",QUAILITY:"QUAILITY"},blackKeywords:[/Invoke event onPageScroll/i,/\/reportdata/i,/shoppinglist\/report-oss/i,/\[reportNetworkAPI\]route=/i,/Register: portal/i]},T={enableDebug:1,enableInfo:1,enableLog:1,enableWarn:1,enableError:1,sendDebug:0,sendInfo:1,sendLog:0,sendWarn:1,sendError:1},d={logPreFix:function(e){var o=new Date,n=6e4*o.getTimezoneOffset(),r=new Date(o.getTime()-n).toISOString().replace("T"," ").slice(0,-1);return T.sendInfo&&"I"===e||T.sendWarn&&"W"===e||T.sendError&&"E"===e||T.sendLog&&"L"===e||T.sendDebug&&"D"===e?"["+e+"] ("+ ++s+") "+r:"["+e+"] "+r},getLastLogStorageBlockCount:function(){var e=E();if(e||(e={keys:[]}),!Array.isArray(e.keys))return 0;if(!(e=e.keys.filter(function(e){return e.startsWith(y.LOG_KEY_PREFIX)})).length)return 0;var o=0;return e.forEach(function(e){var n=parseInt(e.split("_").pop(),10);o=Math.max(o,n)}),o},initLastLogId:function(){function e(){f(y.KEY_OF_AUTO_INCREMENT_LOG_ID,s),setTimeout(e,y.AUTO_SAVE_LOGID_INVERVAL)}s=parseInt(L(y.KEY_OF_AUTO_INCREMENT_LOG_ID)||0,10)||0,e()},stringifyLogArgs:function(e){return e.map(function(e){if("object"===(void 0===e?"undefined":o(e))){var n="";try{n=JSON.stringify(e)}catch(e){n="[Circular structure object]"}return n}return e+""}).join(" ")}};console._log=console.log.bind(console),console._debug=console.debug.bind(console),console._info=console.info.bind(console),console._error=console.error.bind(console),console._warn=console.warn.bind(console),console._keywordIsInvalid=function(e){for(var n=e.map(function(e){if("object"===(void 0===e?"undefined":o(e))){var n="";try{n=JSON.stringify(e)}catch(e){}return n}return e+""}).join(" "),r=0;r<y.blackKeywords.length;r++)if(n.match(y.blackKeywords[r]))return!0;return!1},console.debug=function(){var e=Array.from(arguments);if(T.enableDebug&&console._keywordIsInvalid(e))return-1;e=[d.logPreFix("D")].concat(e),T.enableDebug&&(console._debug.apply(console,e),g((y.CLIENT_LOG_PREFIX,d.stringifyLogArgs(e)))),T.sendDebug&&console.save(e)},console.info=function(){var e=Array.from(arguments);if(T.enableInfo&&console._keywordIsInvalid(e))return-1;e=[d.logPreFix("I")].concat(e),T.enableInfo&&(console._info.apply(console,e),g((y.CLIENT_LOG_PREFIX,d.stringifyLogArgs(e)))),T.sendInfo&&console.save(e)},console.log=function(){var e=Array.from(arguments);if(T.enableLog&&console._keywordIsInvalid(e))return-1;e=[d.logPreFix("L")].concat(e),T.enableLog&&(console._log.apply(console,e),g((y.CLIENT_LOG_PREFIX,d.stringifyLogArgs(e)))),T.sendLog&&console.save(e)},console.warn=function(){var e=Array.from(arguments);if(T.enableWarn&&console._keywordIsInvalid(e))return-1;e=[d.logPreFix("W")].concat(e),T.enableWarn&&(console._warn.apply(console,e),g((y.CLIENT_LOG_PREFIX,d.stringifyLogArgs(e)))),T.sendWarn&&console.save(e)},console.error=function(){var e=Array.from(arguments);if(console._keywordIsInvalid(e))return-1;e=[d.logPreFix("E")].concat(e),T.enableError&&(console._error.apply(console,e),g((y.CLIENT_LOG_PREFIX,d.stringifyLogArgs(e)))),T.sendError&&console.save(e)},console.j=function(){var e=Array.from(arguments);e=["💣jation💣"].concat(e),console._warn.apply(this,e)};var O={},G="undefined"!=typeof performance&&"function"==typeof performance.now;console.t=function(e){O[e]=G?performance.now():Date.now()},console.te=function(e){if(O[e]){var o=(G?performance.now():Date.now())-O[e];console.j("["+e+"] 耗时 "+o.toFixed(3)+"ms"),delete O[e]}},console.reportQuaility=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.save([e.quailityLogType||0,e])},console.save=function(e){if(e){var r=y.LOG_TYPE.LOG,t="",a=0;(e[0]+"").startsWith("[")||(r=y.LOG_TYPE.QUAILITY,a=e.shift()),t=e.map(function(e){if("object"===(void 0===e?"undefined":o(e))){var n="";try{n=JSON.stringify(e)}catch(e){n="[Circular structure object]"}return n}return e+""}).join(" "),(t=encodeURIComponent(t)).length>y.SINGLE_LOG_MAX_LENGTH&&(t=t.slice(0,y.SINGLE_LOG_MAX_LENGTH));var i={tryCount:0,type:r,logUuid:Math.random().toString(),logSize:t.length,logData:t};r===y.LOG_TYPE.QUAILITY&&(i.quailityLogType=a),u.push(i)}if(n&&n.globalData&&"true"===n.globalData.storageEnable&&(u.length>y.TMP_LOG_MAX_LENGTH||(new Date).getTime()-c>y.AUTO_UPLOAD_INTERVAL)){var g=d.getLastLogStorageBlockCount();g<0&&(g=0);var _=""+y.LOG_KEY_PREFIX+g,E=L(_)||[],p=y.LOG_BLOCK_LENGTH-E.length;if(p>0)if(u.length<=p)E=E.concat(u),f(_,E);else{var T=u.splice(0,p);I(E.concat(T)),f(""+y.LOG_KEY_PREFIX+(g+1),u)}else{var O=""+y.LOG_KEY_PREFIX+(g+1);f(O,u)}u=[],l&&console.upload(),f(y.KEY_OF_AUTO_INCREMENT_LOG_ID,s)}},console.upload=function(){if(i||!l)return 0;i=!0;var e=E();if(e||(e={keys:[]}),!Array.isArray(e.keys))return i=!1,0;if(!(e=e.keys.filter(function(e){return e.startsWith(y.LOG_KEY_PREFIX)}).sort(function(e,o){return e>o?1:-1})).length)return i=!1,0;for(var o=[],n=[],s=0,u=[],g=0;g<e.length;g++){for(var _=L(e[g])||[],I=0;I<_.length;I++){var T=_[I];if(T.tryCount<y.LOG_MAX_TRY_COUNT){if(T.tryCount++,s+=T.logSize,T.type===y.LOG_TYPE.LOG?o.push({logData:T.logData}):T.type===y.LOG_TYPE.QUAILITY&&n.push({quailityLogType:T.quailityLogType||0,logData:T.logData}),u.push(T.logUuid),s>y.LOG_PACKAGE_SIZE[y.CURRENT_NET_WORK_TYPE]){_.length?f(e[g],_):r.removeStorageSync(e[g]);break}}else _.splice(I,1)}_.length?f(e[g],_):p(e[g])}if(!o.length&&!n.length)return i=!1,0;var d=o.map(function(e){var o=0;return e.logData.startsWith(encodeURIComponent("[D]"))?o=0:e.logData.startsWith(encodeURIComponent("[I]"))?o=1:e.logData.startsWith(encodeURIComponent("[L]"))?o=2:e.logData.startsWith(encodeURIComponent("[W]"))?o=3:e.logData.startsWith(encodeURIComponent("[E]"))&&(o=4),{logId:y.LOG_ID,logString:[o,a,e.logData].join(",")}});d=d.concat(n.map(function(e){return{logId:y.QUAILITY_LOG_ID,logString:[a,e.quailityLogType,e.logData].join(",")}})),t.report({withClientIPV6Field:!0,list:d,success:function(o){i=!1,c=(new Date).getTime();for(var n=0;n<e.length;n++){for(var r=L(e[n])||[],t=0;t<r.length;t++){var a=r[t];if(a&&void 0!==a&&null!==a)for(var l=0;l<u.length;l++){var s=u[l];if(a.logUuid===s&&(r.splice(t,1),u.splice(l,1),--l,--t,!u.length)){r.length?f(e[n],r):p(e[n]);break}}}r.length?f(e[n],r):p(e[n])}u=[]},fail:function(e){i=!1,c=(new Date).getTime(),u=[],console.save()}}),t.reportNow()},module.exports={setup:function(){function t(){console.save(),setTimeout(t,y.AUTO_UPLOAD_INTERVAL)}var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e({},a,T);T=i,n=i.app,d.initLastLogId(),r.onNetworkStatusChange(function(e){l=e.isConnected;var o="NONE";switch(e.networkType+""){case"2g":o="2G";break;case"3g":case"unknown":o="3G";break;case"4g":o="4G";break;case"wifi":o="WIFI"}y.CURRENT_NET_WORK_TYPE=o,console.networkType=o,l&&console.upload()}),r.getNetworkType({success:function(e){var o="";switch(e.networkType+""){case"2g":o="2G";break;case"3g":case"unknown":o="3G";break;case"4g":o="4G";break;case"wifi":o="WIFI";break;default:o="WIFI"}y.CURRENT_NET_WORK_TYPE=o,console.networkType=o}}),(void 0===n?"undefined":o(n))&&n.globalData&&"string"!==n.globalData.storageEnable&&console.warn('[reliableLogger.js] 引入这个模块，需要在app.js的globalData里添加一个storageEnable变量，值是"true"或者"false"，注意类型是字符串，在onShow的时候设置为"false"，在onHide的时候设置为"false"'),t()},QUAILITY_LOG_TYPE:{JS_ERROR:1,CGI:2,IMAGE:3,TIMELINE_RENDER:4}}; 
 			}); 
		define("libs/mmuxwxappdevkit/core/state.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={init:"init",loading:"loading",loaded:"loaded",fail:"fail",logout:"logout",logingin:"logingin",login:"login"}; 
 			}); 
		define("libs/mmuxwxappdevkit/core/storage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={setData:function(e){if(e.sync){try{wx.setStorageSync(e.key,e.data),e.success&&e.success()}catch(s){return e.fail&&e.fail(s),!1}return!0}wx.setStorage({key:e.key,data:e.data,success:e.success,fail:e.fail})},removeData:function(e){if(e.sync){try{wx.removeStorageSync(e.key),e.success&&e.success()}catch(s){return e.fail&&e.fail(s),!1}return!0}wx.removeStorage({key:e.key,success:e.success,fail:e.fail})},getData:function(e){if(e.sync)try{var s=wx.getStorageSync(e.key);return e.success&&e.success(s),s}catch(s){return void(e.fail&&e.fail(s))}else wx.getStorage({key:e.key,success:e.success,fail:e.fail})}}; 
 			}); 
		define("libs/mmuxwxappdevkit/core/sys.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={_loaded:!1,_version:"2",_sessionId:"",_scene:0,phoneModel:function(){return this._loaded?this.screenHeight>=812&&("ios"==this.platform||"devtools"==this.platform)?"iPhoneX":this.screenWidth<=320?"iPhone5":this.screenWidth<=375?"iPhone6":this.screenWidth<=414?"iPhone6 Plus":"":""},navigationBarHeight:function(){return 44+parseInt(this.statusBarHeight||20)},shoppingcarAppid:function(){return"wx3fe7cf7850c61a2b"},selleronlineAppid:function(){return"wx09e221d492adeb7a"},appid:function(){return this.extInfo.appid},appName:function(){return this.extInfo.mallName},extStatBuffer:function(){return""},reload:function(){this._loaded=!1,this.setup(this.setupOptions)},setup:function(t){if(this._loaded)return!0;this.setupOptions=t;try{var n=wx.getSystemInfoSync(),e=wx.getExtConfigSync?wx.getExtConfigSync()||{}:{};return Object.assign(this,n,{extInfo:e},t),this.safeValueProtect(),this._loaded=!0,console.info(this),this._loaded}catch(t){return console.error(t),this.safeValueProtect(),console.error(this),!1}},_wechatVersion:null,wechatVersion:function(){if(null==this._wechatVersion&&this._loaded){for(var t=this.platform,n=("devtools"==this.platform?"7.5":this.version).split(".").concat("0");n.length<4;)n.push("0");var e="ios"==t?"1":"2";n.forEach(function(t){var n=parseInt(t).toString(16);1==n.length&&1!=e.length&&(n="0"+n),e+=n}),this._wechatVersion=parseInt(e,16)}return this._wechatVersion},wechatDevice:function(){return{devtools:-1,unknown:0,ios:1,android:2}[this.platform]},isMixProject:function(){return this.extInfo.isMixProject},debugMode:function(){return this.extInfo.isDebugging?1:this.extInfo.isExperience?2:0},userVersion:function(){return this.extInfo.userVersion||0},isDebugging:function(){return this.extInfo.isDebugging},weappSessionId:"",isPlugin:!1,pluginNeedWxLogin:!1,noNavigatorParams:function(){return!1},safeValueProtect:function(){var t=this,n={version:"0.0.0",SDKVersion:"0.0.0",brand:"unknown",model:"unknown",platform:"unknown",system:"unknown",statusBarHeight:20};Object.keys(n).forEach(function(e){t[e]=t[e]||n[e]})},userInfo:{uin:"",openid:""}}; 
 			}); 
		define("libs/mmuxwxappdevkit/foundation/base/model.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){var i=function(e){if(!e.cgi||0===e.cgi.length)return console.error("init model with cgi empty:",e),void(this._state="INVALID");this.cgi=e.cgi,this.useCache=e.useCache,this.cacheHandler=e.cacheHandler,this.header=e.header,this.isTest=e.isTest,this.useCache&&(this.cacheKey=c+(t?t+"_":"")+this.cgi),this.data=e.data||{},this.props=e.props||{}};return Object.assign(i.prototype,{load:function(e){var t=this;if("INVALID"===t._state){var c=new Error({errmsg:"load invalid model: "+e});return console.error(c),e.fail&&e.fail(c),void(e.complete&&e.complete())}var i=void 0;if(e.cacheKey?i=e.cacheKey:(i=t.cacheKey+JSON.stringify(e.params||{}),e.urlParams&&(i+=JSON.stringify(e.urlParams))),t._lastCacheKey=i,t.useCache&&!e.skipCache)if(e.loading){var r=s.getStorageSync(i);r?(Object.assign(t.data,r),e.success&&e.success({isCache:!0}),e.complete&&e.complete()):s.showLoading({title:e.loadingTitle||"加载中"})}else s.getStorage({key:i,success:function(a){Object.assign(t.data,a.data),e.success&&e.success({isCache:!0}),e.complete&&e.complete()}});else e.loading&&s.showLoading({title:e.loadingTitle||"加载中"});a.request({cgi:t.cgi,header:t.header,isTest:t.isTest,params:e.params,urlParams:e.urlParams,baseReqParams:e.baseReqParams,skipCheckLogin:e.skipCheckLogin,success:function(a){Object.assign(t.data,a),t.useCache&&!e.skipCache&&s.setStorage({key:i,data:t.cacheHandler&&t.cacheHandler(a)||a}),e.success&&e.success({isCache:!1})},fail:e.fail,complete:function(a){e.loading&&s.hideLoading(),e.complete&&e.complete(a)}})},sync:function(){s.setStorage({key:this._lastCacheKey,data:this.data})}}),e.methods&&Object.assign(i.prototype,e.methods),new i(e)}var a=require("../../core/network.js"),s=require("../../core/api.js"),t="",c="model_cache_key_";e.setup=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=String(e.version||"");var a=s.getStorageSync("cur_model_version");if(t&&a!==t){s.setStorageSync("cur_model_version",t);var i=s.getStorageInfoSync();if(i&&i.keys&&i.keys.length){var r=new RegExp("^"+c+"([^_]+)");i.keys.forEach(function(e){var a=e.match(r);a&&a[1]!==t&&(console.info("clear model key:",e),s.removeStorageSync(e))})}}},module.exports=e; 
 			}); 
		define("libs/mmuxwxappdevkit/foundation/base/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};require("../oss/aop.js");var t=require("../../utils/enum.js"),o=require("../oss/reporter.js"),n=require("../../utils/util.js"),i=require("../../core/sys.js"),r=require("../../core/network.js"),a=require("../../core/eventcenter.js"),s=require("../../foundation/oss/idkey.js"),p=t.IDKeyDefine,g=null,c=function(c){var f=c.pageProxy||Page;if("object"!==e(c.pageActionConfig))return console.error("no pageActionConfig in initData",c),f(c);if(void 0!==c.__pageAction)return console.error("do not use __pageAction in your page"),f(c);c.__pageAction=[];var u=c.pageActionConfig,l=u.pageStatBuffer||function(){};u.actionList.forEach(function(e){var o=c[e.name]||function(){};o=o.after(function(o){var n=this,r={},a=this;(e.ext||[]).forEach(function(e){var g=void 0;if(e.key){if(e.getter)try{g=e.getter.apply(a,[o])}catch(e){}else{var c=e.keyPath.split("."),f=void 0;f=e.from==t.ExtFrom.Args?o:e.from==t.ExtFrom.Property?n:n.data,c.forEach(function(e){g=(g||f)[e]})}r[e.key]=g}else s.report(i.alarmId,p.ReportExtKeyEmpty)}),console.log("new page action: ",e.type," ext:",r),e.immediately?m({actionLogArray:[{type:e.type,ext:r,ts:(new Date).getTime()}],pageStatBuffer:l.apply(this),index:0,immediately:!0}):this.__pageAction.push({type:e.type,ext:r,ts:(new Date).getTime()})}),c[e.name]=o});var d=void 0,y=!1;c.onReady=(c.onReady||function(){}).after(function(e){var t=getCurrentPages();console.log("pages: ",t),1===t.length&&(i.weappSessionId=i.weappSessionId||(new Date).getTime()+"")}),c.onShow=(c.onShow||function(){}).after(function(e){d=(new Date).getTime(),a.emit("onReloadNavigationBar"),y=!1});var m=function e(t){var a=t.actionLogArray,f=t.index,l=t.immediately,y=t.pageStatBuffer,m=a.length,S=encodeURIComponent(JSON.stringify(a));for(0==f&&S.length>7168&&s.report(i.alarmId,p.LogSlice);S.length>7168&&m>1;)console.info("page trigger log slice: size["+S.length+"] index["+f+"]"),f=e({actionLogArray:a.splice(0,parseInt(m/2)),pageStatBuffer:y,index:f,immediately:l})+1,m=a.length,S=encodeURIComponent(JSON.stringify(a));S.length>7168&&(console.error("page log oversisze["+S.length+"]"),s.report(i.alarmId,p.LogSliceFail)),void 0===d&&(d=(new Date).getTime());var h=getCurrentPages(),v=n.genKVLogString({appId:i.appid(),sessionId:i._sessionId,scene:i._scene,actionLog:S,stayTime:l?0:(new Date).getTime()-d,pageName:u.name,sessionKey:r.sessionLoginTime(),startTime:d,chunkIndex:f,debugMode:i.debugMode(),templateId:i.userVersion(),statBuffer:i.extStatBuffer(),weappSessionId:i.weappSessionId,redDot:0,pageStack:h.map(function(e){return e.route.split("/").pop()}).join("|"),pageStatBuffer:y?encodeURIComponent(JSON.stringify(y)):""}),I=c.actionLogId||g;return o.report({logId:I,logString:v}),f},S=function(e){y||(m({actionLogArray:this.__pageAction,pageStatBuffer:l.apply(this),index:0}),o.reportNow(),this.__pageAction=[]),y=!0};return c.onHide=(c.onHide||function(){}).after(S),c.onUnload=(c.onUnload||function(){}).after(S),f(c)};c.setup=function(e){g=e.actionLogId},module.exports=c; 
 			}); 
		define("libs/mmuxwxappdevkit/foundation/loader/image-loader.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../core/api.js"),a=require("../../core/file-manager.js"),s=require("../oss/idkey.js"),o=require("../../utils/enum.js").IDKeyDefine,t=require("../../core/sys.js"),r=require("../../utils/util.js"),l={};module.exports={setup:function(e){if(e&&e.host){switch(Object.prototype.toString.call(e.host)){case"[object Array]":this.safeHost=e.host;break;case"[object String]":this.safeHost=[e.host];break;default:console.error("unsupported options.host")}this.taskMap={}}else console.error("invalid setup params")},loadImageForUrl:function(a){var s=this;if(0==a.url.length)return console.log("load empty url"),void(a.fail&&a.fail());if(r.isLocalResource(a.url))return console.log("load local url"),void(a.fail&&a.fail());if(l[a.url])return console.log("hit local cache"),void(a.success&&a.success({tempFilePath:l[a.url]}));var o=s.safeUrl(a.url);if(!o||0==o.length)return console.error("url is not safe: ",a.url),void(a.fail&&a.fail());void 0===s.taskMap[o]&&(s.taskMap[o]=[]),s.taskMap[o].push(a),1==s.taskMap[o].length&&s.getCachedImageForUrl({url:o,success:function(e){(s.taskMap[o]||[]).forEach(function(a){a.success&&a.success(e)}),s.taskMap[o]=[]},fail:function(t){s.downloadImageForUrl({url:o,success:function(t){if(a.getImgaeInfo){var r=t.savedFilePath||t.tempFilePath;e.getImageInfo({src:r,success:function(e){(s.taskMap[o]||[]).forEach(function(a){a.success&&a.success({savedFilePath:t.savedFilePath,tempFilePath:t.tempFilePath,width:e.width,height:e.height})}),s.taskMap[o]=[]},fail:function(){(s.taskMap[o]||[]).forEach(function(e){e.success&&e.success(t)}),s.taskMap[o]=[]}})}else(s.taskMap[o]||[]).forEach(function(e){e.success&&e.success(t)}),s.taskMap[o]=[]},fail:function(e){(s.taskMap[o]||[]).forEach(function(a){a.fail&&a.fail(e)}),s.taskMap[o]=[]}})}})},cancelLoadImageForUrl:function(e,a){if(e&&0!=e.length)if(r.isLocalResource(e))console.log("cancel local url");else{var s=this,o=s.safeUrl(e);if(o&&0!=o.length){var t=[];(s.taskMap[o]||[]).forEach(function(e){e.key!=a&&t.push(e)}),s.taskMap[o]=t}else console.log("url is not safe: ",e)}else console.log("cancel empty url")},safeUrl:function(e){for(var a=e.replace("http://","https://"),s=0;s<this.safeHost.length;s++)if(0===a.indexOf(this.safeHost[s]))return a;return""},getCachedImageForUrl:function(a){e.getStorage({key:a.url,success:function(r){e.getImageInfo({src:r.data,success:function(e){a.success&&a.success({savedFilePath:r.data,width:e.width,height:e.height})},fail:function(){console.error("cachedImageForUrl: "+a.url+"localFilePath exist, but local file not exist or not a image!"),s.report(t.alarmId,o.LocalImagePathExitsButFileEmpty),a.fail&&a.fail()}})},fail:a.fail})},removeCachedImageForFile:function(a){e.getStorage({key:a.filePath,success:function(s){e.removeStorage({key:a.filePath}),e.removeStorage({key:s.data})}})},downloadImageForUrl:function(r){var l=this;e.downloadFile({url:r.url,success:function(i){200==i.statusCode?a.saveFile({tempFilePath:i.tempFilePath,handleExpireFile:function(e){l.removeCachedImageForFile(e)},success:function(a){e.setStorage({key:r.url,data:a.savedFilePath}),e.setStorage({key:a.savedFilePath,data:r.url}),r.success&&r.success({savedFilePath:a.savedFilePath,tempFilePath:i.tempFilePath})},fail:function(e){console.error("downloadImageForUrl error, saveTempFileError"),r.success&&r.success({tempFilePath:i.tempFilePath})}}):(console.error("downloadImageForUrl error, http error: ",i.statusCode),s.report(t.alarmId,o.LoadImageDownloadError),r.fail&&r.fail({errcode:-1,errmsg:"downloadImageForUrl error, http error: "+i.statusCode}))},fail:function(e){console.error("downloadImageForUrl error, request error: ",e),s.report(t.alarmId,o.LoadImageDownloadError),r.fail&&r.fail(e)}})},addLocalCache:function(e,a){e&&a&&(l[e]=a)}}; 
 			}); 
		define("libs/mmuxwxappdevkit/foundation/navigate/navigator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var i=require("../../core/sys.js"),e=require("../../utils/util.js"),r=require("../../core/storage.js"),t=require("../../core/eventcenter.js");module.exports={forceHideWeAppBack:!1,appStack:[],_fromAppid:null,fromAppid:function(){return null==this._fromAppid&&(this._fromAppid=r.getData({key:"fromAppid",sync:!0})),this._fromAppid},setup:function(i){this.boutiqueApp=i.boutiqueApp,this.shoppingcartApp=i.shoppingcartApp,this.appStack.push({app:{onLaunch:function(i){this.boutiqueApp().onLaunch(i)},onShow:function(i){this.boutiqueApp().onShow(i)},onHide:function(i){this.boutiqueApp().onHide(i)}}})},navigateToMiniProgram:function(i){return wx.navigateToMiniProgram(i)},navigateBackMiniProgram:function(e){if(i.isDebugging()&&i.isMixProject()){var r=this.appStack.pop(),t=this.appStack[this.appStack.length-1];wx.navigateBack({delta:getCurrentPages().length-r.page-1,success:e.success,fail:e.fail,complete:e.complete}),t&&t.app&&t.app.onShow({query:{},referrerInfo:{extraData:e.extraData}})}else wx.navigateBackMiniProgram(e)},navigateTo:function(e){if(this.fromBackAppid=void 0,this.originPath=void 0,this.originOptions=void 0,this.forceHideWeAppBack=!0,t.emit("onReloadNavigationBar"),i.isMixProject()){var r=null;if(e.url.startsWith("/portal"))r="/boutique";else{if(!e.url.startsWith("/pages"))return void(e.fail&&e.fail({errcode:-1,errmsg:"invalid app"}));r="/shopping-cart/weapp-src"}wx.navigateTo({url:r+e.url,success:e.success,fail:e.fail,complete:e.complete})}else wx.navigateTo(e)},navigateBack:function(i){this.fromBackAppid=void 0,this.originPath=void 0,this.originOptions=void 0,this.forceHideWeAppBack=!0,t.emit("onReloadNavigationBar"),wx.navigateBack(i)},handleRouteApp:function(i){var r=i.referrerInfo&&i.referrerInfo.extraData?i.referrerInfo.extraData:null;if(console.info("handleRouteApp: ",i,r),!i.query||r&&"{}"!=JSON.stringify(r)||1037!=parseInt(i.scene)?(r&&(this.fromAppName=r.originWeAppName),wx.removeStorageSync("fromAppid")):(wx.setStorageSync("fromAppid",i.query.fromAppid),this.fromAppName=i.query.fromWeAppName),this._fromAppid=null,r&&r.path){var t=r.path;t.startsWith("/")||(t="/"+t),i.referrerInfo.appId&&(console.error("set fromBackAppid"),this.fromBackAppid=i.referrerInfo.appId,this.originPath=r.originPath,this.originOptions=r.originOptions);var o=e.getCurrentPage();t.includes(o.route)?wx.redirectTo({url:t}):wx.navigateTo({url:t})}else this.fromBackAppid=void 0,this.originOptions=void 0,this.originPath=void 0},BrandMallImage:function(i){return console.log("BrandMallImage: ",i),getApp().isMixProject()?i=i.startsWith("/res")?"shoppingcart/weapp-src"+i:"boutique"+i:i}}; 
 			}); 
		define("libs/mmuxwxappdevkit/foundation/oss/aop.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Function.prototype.before=function(t){var n=this;return function(){return 0!=t.apply(this,arguments)&&n.apply(this,arguments)}},Function.prototype.after=function(t){var n=this;return function(){var r=n.apply(this,arguments);return 0!=r&&(t.apply(this,arguments),r)}}; 
 			}); 
		define("libs/mmuxwxappdevkit/foundation/oss/executor.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../core/network.js"),i=require("../../core/eventcenter.js"),t=(require("../../core/api.js"),{NONE:"none",LOGIN:"login"});module.exports={Condition:t,_init:!1,_queue:{},init:function(){this._init||(i.register("onLoginSuccess",this),i.register("onLoginSuccess",this),this._init=!0)},execute:function(e){e&&(this.init(),this.getQueue(e.condition).push(e),this.getCondition(e.condition)&&this.clearQueue(e.condition,!0))},getCondition:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.NONE)!=t.LOGIN||e.isLogin},getQueue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.NONE;return e in this._queue||(this._queue[e]=[]),this._queue[e]},clearQueue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.NONE,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.getQueue(e);this._queue[e]=[];var u=!0,o=!1,r=void 0;try{for(var s,c=n[Symbol.iterator]();!(u=(s=c.next()).done);u=!0){var h=s.value;i?h.success&&h.success():h.fail&&h.fail()}}catch(e){o=!0,r=e}finally{try{!u&&c.return&&c.return()}finally{if(o)throw r}}},onLoginSuccess:function(e){this.clearQueue(t.LOGIN,!0)},onLoginFail:function(e){this.clearQueue(t.LOGIN,!1)}}; 
 			}); 
		define("libs/mmuxwxappdevkit/foundation/oss/idkey.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={},t=function(){return e&&e.globalData&&"true"===e.globalData.storageEnable},r=function(){return t()?wx.setStorageSync.apply(null,arguments):null},n=function(){return t()?wx.getStorageSync.apply(null,arguments):null},u=function(){return t()?wx.getStorage.apply(null,arguments):null};module.exports={_interval:null,setup:function(){var t=this;t._interval||(t._interval=setInterval(function(){t.realtimeReport()},1e4)),wx.getStorageSync("__idkey_report_key__")||wx.setStorageSync("__idkey_report_key__",[]),setTimeout(function(){e=getApp()},100)},report:function(e,t,r,n){var u=this;this.getQueueFromStorage(function(o){o.push({uid:Math.random()+"",tryCount:0,id:e,key:t,value:r,type:n}),u.saveQueueToStroage(o)})},getQueueFromStorage:function(e){u({key:"__idkey_report_key__",success:function(t){var r=t.data||[];e(r)}})},saveQueueToStroage:function(e){e=e.filter(function(e){return e.tryCount<3}),r("__idkey_report_key__",e)},realtimeReport:function(){var e=this;e.getQueueFromStorage(function(t){if(t.length){var r=require("../../core/network.js"),u=[];t.forEach(function(e){e.tryCount++}),e.saveQueueToStroage(t);var o=t.filter(function(e){return e.tryCount<=3}).map(function(e){return u.push(e.uid),{oss_id:e.id,oss_key:e.key,oss_value:e.value||1,type:e.type||0}});r.request({cgi:r.cgiSet.reportOss,params:{oss_list:o},success:function(){for(var t=n("__idkey_report_key__")||[],r=0;r<t.length;r++){var o=t[r];u.includes(o.uid)&&t.splice(r,1)}e.saveQueueToStroage(t)}})}})}}; 
 			}); 
		define("libs/mmuxwxappdevkit/foundation/oss/reporter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=require("../../core/network.js"),r=require("../../core/sys.js"),n=[],t=null,i=function(){clearTimeout(t),t=null,n=[]};module.exports={report:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this,n=o.list||[],t=r.commBuffer();o.withClientIPV6Field&&(t+=",unknown_client_ipv6"),o.logId&&n.push({logId:o.logId,logString:o.logString||""}),n=n.map(function(e){return{logid:e.logId,open_id_flag:16189===o.logId,log_buffer:t+","+(e.logString||"")}}),this.enqueue(e({},o,{list:n}))},enqueue:function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.list&&o.list.length&&(n.push(o),t||(t=setTimeout(function(){e.reportNow()},3e3)))},reportNow:function(){var e=[],t=[],c=[];if(n.forEach(function(o){e=e.concat(o.list),o.success&&t.push(o.success),o.fail&&c.push(o.fail)}),e.length<=0)return i();var s={clientversion:r.wechatVersion(),device:"ios"==r.platform?1:2,item_list:e};return console.log("report ",s),o.request({cgi:o.cgiSet.reportdata,params:s,success:function(e){e&&0==e.errcode?(console.log("report success"),t.forEach(function(e){return e()})):(console.error("report fail res ",e),c.forEach(function(o){return o({errocde:e.errcode,errmsg:e.errmsg})}))},fail:function(e){console.error("report fail error ",e),c.forEach(function(o){return o(e)})}}),i()},commBuffer:function(){var e=r.system,o=r.system,n=r.system.split(" ");return n.length>=2&&(e=n[0],o=n.splice(1).join(" ")),[encodeURIComponent(r.model||""),encodeURIComponent(r.brand||""),encodeURIComponent(e||""),encodeURIComponent(o||""),encodeURIComponent(r.language||""),(new Date).getTime()/1e3|0,(new Date).getTime()/1e3|0,1].join(",")}}; 
 			}); 
		define("libs/mmuxwxappdevkit/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("./core/category.js"),require("./foundation/oss/aop.js");var e={setup:function(){},sync:function(){},clearExpLogs:function(){},getLogs:function(){},upload:function(){},_reportLoop:function(){},_postLogs:function(){}},r=require("./core/sys.js"),o=require("./core/eventcenter.js"),s=require("./core/network.js"),t=require("./core/api.js"),u=require("./foundation/base/page.js"),n=require("./foundation/base/model.js"),i=require("./foundation/loader/image-loader.js"),p=require("./foundation/oss/idkey.js"),a=require("./foundation/oss/reporter.js"),g=require("./utils/enum.js"),c=require("./utils/exposeReporter.js"),d=require("./utils/actionReporter.js");module.exports={setup:function(t){p.setup(),t.logger&&(e=require("./core/logger.js")).setup(t.logger()),t.sys&&r.setup(t.sys()),t.eventCenter&&o.setup(t.eventCenter()),t.network&&s.setup(t.network()),t.page&&(u.setup(t.page()),c.setup(t.page()),d.setup(t.page())),t.imageLoader&&i.setup(t.imageLoader()),t.model&&n.setup(t.model())},Logger:e,Sys:r,EventCenter:o,Network:s,Page:u,Model:n,ImageLoader:i,IdKey:p,Reporter:a,Api:t,Enum:g}; 
 			}); 
		define("libs/mmuxwxappdevkit/utils/actionReporter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=require("../foundation/oss/reporter.js"),t=require("../utils/util.js"),n=require("../core/sys.js"),r=require("../core/network.js"),i=require("../foundation/oss/idkey.js"),s=require("../utils/enum.js").IDKeyDefine,p="";module.exports={report:function(u,a,l){if(u&&("object"===(void 0===u?"undefined":e(u))&&(u=[u]),u.length)){var g=0,d=(u=u.map(function(e){return{type:e.type,ext:e.ext,ts:Date.now()}})).length,c=encodeURIComponent(JSON.stringify(u));for(0===g&&c.length>7168&&i.report(n.alarmId,s.LogSlice);c.length>7168&&d>1;){console.info("exposeReporter trigger log slice: size["+c.length+"] index["+g+"]");var f=u.splice(0,parseInt(d/2));g=(void 0).report({index:g,dataList:f})+1,d=u.length,c=encodeURIComponent(JSON.stringify(u))}c.length>7168&&(console.error("exposeReporter log oversisze["+c.length+"]"),i.report(n.alarmId,s.LogSliceFail));var y=getCurrentPages()||[],m=t.genKVLogString({appId:n.appid(),sessionId:n._sessionId,scene:n._scene,actionLog:encodeURIComponent(JSON.stringify(u)),stayTime:0,pageName:a||"",sessionKey:r.sessionLoginTime(),startTime:Date.now(),chunkIndex:g,debugMode:n.debugMode(),templateId:n.userVersion(),statBuffer:n.extStatBuffer(),weappSessionId:n.weappSessionId,redDot:0,pageStack:y.map(function(e){return e.route.split("/").pop()}).join("|")});o.report({logId:l||p,logString:m})}},setup:function(e){p=e.actionLogId}}; 
 			}); 
		define("libs/mmuxwxappdevkit/utils/enum.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={DetailPageScene:{Home:1},ExtFrom:{Data:0,Args:1,Property:2},PageActionType:{IndexExposure:1,IndexClick:2,DetailViewBanner:3,DetailShowSku:4,DetailShare:5,DetailExposurePage:6,AddressClickLocation:7,AddressPhoneCall:8,AddressShare:9,AddressClickContact:10,SearchDoSearch:11,SearchNextPage:12,SearchClickResult:13},IDKeyDefine:{AppScriptError:1,NetworkHttpError:2,NetworkLogicError:3,NetworkConnectError:4,LocalImagePathExitsButFileEmpty:5,LoadImageGeneralError:6,LoadImageDownloadError:7,LoadImageSaveFileError:8,WXLoginApiError:9,LoginWithAppIdEmpty:10,NetworkUseCgiWithoutRegister:11,ReportExtKeyEmpty:12,ReportExtDataEmpty:13,LocalFileStorageWillFull:14,FileManagerGetSavedFileError:15,FileManagerSaveFileExceeded:16,NetworkSessionTimeout:17,ImageViewLoadImageFinished:26,LogSlice:120,LogSliceFail:121,LoadImageFallbackDownloadSuccess:122,LoadImageFallbackDownloadFail:123},SvrErrorCode:{OK:0,SystemError:-1,SessionTimeout:-3,NotSupport:-5,Unknown:-3e4}}; 
 			}); 
		define("libs/mmuxwxappdevkit/utils/exposeReporter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../foundation/oss/reporter.js"),t=require("../utils/util.js"),r=require("../core/sys.js"),o=require("../core/network.js"),i=require("../foundation/oss/idkey.js"),s=require("../utils/enum.js").IDKeyDefine,n={logId:"",dataList:[],timerId:0,add:function(e){var t=this;this.dataList.push(e),this.dataList.length>50?this.report():this.timerId||(this.timerId=setInterval(function(){t.report()},3e3))},report:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.logId)return console.error("exposeReporter no logId"),-1;var a=n.index,d=void 0===a?0:a,l=n.dataList,p=void 0===l?this.dataList:l,c=p.length;if(!c)return-1;console.log(JSON.stringify(p));var g=encodeURIComponent(JSON.stringify(p));for(0==d&&g.length>7168&&i.report(r.alarmId,s.LogSlice);g.length>7168&&c>1;){console.info("exposeReporter trigger log slice: size["+g.length+"] index["+d+"]");var u=p.splice(0,parseInt(c/2));d=this.report({index:d,dataList:u})+1,c=p.length,g=encodeURIComponent(JSON.stringify(p))}g.length>7168&&(console.error("exposeReporter log oversisze["+g.length+"]"),i.report(r.alarmId,s.LogSliceFail));var I=getCurrentPages(),h=t.genKVLogString({appId:r.appid(),sessionId:r._sessionId,scene:r._scene,actionLog:g,stayTime:0,pageName:"",sessionKey:o.sessionLoginTime(),startTime:Date.now(),chunkIndex:d,debugMode:r.debugMode(),templateId:r.userVersion(),statBuffer:r.extStatBuffer(),weappSessionId:r.weappSessionId,redDot:0,pageStack:I.map(function(e){return e.route.split("/").pop()}).join("|")});return e.report({logId:this.logId,logString:h}),p.length=0,clearInterval(this.timerId),this.timerId=0,d}};module.exports={init:function(e){var t=(e=e||{}).self,r=e.selector,o=e.intersectionRatio||.9,i=e.data,s=e.success||function(){};if(r){var a=t.createIntersectionObserver({thresholds:[o]});return a.relativeToViewport({}).observe(r,function(t){t.intersectionRatio>=o&&((i=i||s(t))?n.add({type:i.type,ext:i.ext,ts:Date.now()}):console.error("expose item no data to report, ",e),a.disconnect())}),a}console.error("exposeReporter no selector")},reportAll:function(){n.report()},setup:function(e){n.logId=e.actionLogId}}; 
 			}); 
		define("libs/mmuxwxappdevkit/utils/firstTips.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var s=require("../core/storage.js");require("../core/api.js");module.exports={flags:{showShoppingCarTips:1},should:function(e){return!((s.getData({key:"firstTipsFlag",sync:!0})||0)&e)},done:function(e){var a=s.getData({key:"firstTipsFlag",sync:!0})||0;s.setData({key:"firstTipsFlag",data:a|e})}}; 
 			}); 
		define("libs/mmuxwxappdevkit/utils/jsencrypt.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e,i){null!=t&&("number"==typeof t?this.fromNumber(t,e,i):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}function e(){return new t(null)}function i(t){return P.charAt(t)}function s(t,e){var i=M[t.charCodeAt(e)];return null==i?-1:i}function r(t){var i=e();return i.fromInt(t),i}function n(t){var e,i=1;return 0!=(e=t>>>16)&&(t=e,i+=16),0!=(e=t>>8)&&(t=e,i+=8),0!=(e=t>>4)&&(t=e,i+=4),0!=(e=t>>2)&&(t=e,i+=2),0!=(e=t>>1)&&(t=e,i+=1),i}function o(t){this.m=t}function h(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function a(t,e){return t&e}function u(t,e){return t|e}function c(t,e){return t^e}function f(t,e){return t&~e}function p(t){if(0==t)return-1;var e=0;return 0==(65535&t)&&(t>>=16,e+=16),0==(255&t)&&(t>>=8,e+=8),0==(15&t)&&(t>>=4,e+=4),0==(3&t)&&(t>>=2,e+=2),0==(1&t)&&++e,e}function l(t){for(var e=0;0!=t;)t&=t-1,++e;return e}function d(){}function g(t){return t}function m(i){this.r2=e(),this.q3=e(),t.ONE.dlShiftTo(2*i.t,this.r2),this.mu=this.r2.divide(i),this.m=i}function y(){this.i=0,this.j=0,this.S=new Array}function b(){return new y}function T(){if(null==C){for(C=b();j<k;){var t=Math.floor(65536*Math.random());H[j++]=255&t}for(C.init(H),j=0;j<H.length;++j)H[j]=0;j=0}return C.next()}function S(){}function E(e,i){return new t(e,i)}function D(e,i){if(i<e.length+11)return console.error("Message too long for RSA"),null;for(var s=new Array,r=e.length-1;r>=0&&i>0;){var n=e.charCodeAt(r--);n<128?s[--i]=n:n>127&&n<2048?(s[--i]=63&n|128,s[--i]=n>>6|192):(s[--i]=63&n|128,s[--i]=n>>6&63|128,s[--i]=n>>12|224)}s[--i]=0;for(var o=new S,h=new Array;i>2;){for(h[0]=0;0==h[0];)o.nextBytes(h);s[--i]=h[0]}return s[--i]=2,s[--i]=0,new t(s)}function w(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}function x(t,e){for(var i=t.toByteArray(),s=0;s<i.length&&0==i[s];)++s;if(i.length-s!=e-1||2!=i[s])return null;for(++s;0!=i[s];)if(++s>=i.length)return null;for(var r="";++s<i.length;){var n=255&i[s];n<128?r+=String.fromCharCode(n):n>191&&n<224?(r+=String.fromCharCode((31&n)<<6|63&i[s+1]),++s):(r+=String.fromCharCode((15&n)<<12|(63&i[s+1])<<6|63&i[s+2]),s+=2)}return r}function B(t){var e,i,s="";for(e=0;e+3<=t.length;e+=3)i=parseInt(t.substring(e,e+3),16),s+=_.charAt(i>>6)+_.charAt(63&i);for(e+1==t.length?(i=parseInt(t.substring(e,e+1),16),s+=_.charAt(i<<2)):e+2==t.length&&(i=parseInt(t.substring(e,e+2),16),s+=_.charAt(i>>2)+_.charAt((3&i)<<4));(3&s.length)>0;)s+=z;return s}function A(t){var e,s,r="",n=0;for(e=0;e<t.length&&t.charAt(e)!=z;++e)v=_.indexOf(t.charAt(e)),v<0||(0==n?(r+=i(v>>2),s=3&v,n=1):1==n?(r+=i(s<<2|v>>4),s=15&v,n=2):2==n?(r+=i(s),r+=i(v>>2),s=3&v,n=3):(r+=i(s<<2|v>>4),r+=i(15&v),n=0));return 1==n&&(r+=i(s<<2)),r}function R(t,e){t instanceof R?(this.enc=t.enc,this.pos=t.pos):(this.enc=t,this.pos=e)}function O(t,e,i,s,r){this.stream=t,this.header=e,this.length=i,this.tag=s,this.sub=r}var V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.prototype.am=function(t,e,i,s,r,n){for(var o=16383&e,h=e>>14;--n>=0;){var a=16383&this[t],u=this[t++]>>14,c=h*a+u*o;r=((a=o*a+((16383&c)<<14)+i[s]+r)>>28)+(c>>14)+h*u,i[s++]=268435455&a}return r},t.prototype.DB=28,t.prototype.DM=268435455,t.prototype.DV=1<<28;t.prototype.FV=Math.pow(2,52),t.prototype.F1=24,t.prototype.F2=4;var N,I,P="0123456789abcdefghijklmnopqrstuvwxyz",M=new Array;for(N="0".charCodeAt(0),I=0;I<=9;++I)M[N++]=I;for(N="a".charCodeAt(0),I=10;I<36;++I)M[N++]=I;for(N="A".charCodeAt(0),I=10;I<36;++I)M[N++]=I;o.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},o.prototype.revert=function(t){return t},o.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},o.prototype.mulTo=function(t,e,i){t.multiplyTo(e,i),this.reduce(i)},o.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},h.prototype.convert=function(i){var s=e();return i.abs().dlShiftTo(this.m.t,s),s.divRemTo(this.m,null,s),i.s<0&&s.compareTo(t.ZERO)>0&&this.m.subTo(s,s),s},h.prototype.revert=function(t){var i=e();return t.copyTo(i),this.reduce(i),i},h.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var i=32767&t[e],s=i*this.mpl+((i*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[i=e+this.m.t]+=this.m.am(0,s,t,e,0,this.m.t);t[i]>=t.DV;)t[i]-=t.DV,t[++i]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},h.prototype.mulTo=function(t,e,i){t.multiplyTo(e,i),this.reduce(i)},h.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t.prototype.copyTo=function(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s},t.prototype.fromInt=function(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+this.DV:this.t=0},t.prototype.fromString=function(e,i){var r;if(16==i)r=4;else if(8==i)r=3;else if(256==i)r=8;else if(2==i)r=1;else if(32==i)r=5;else{if(4!=i)return void this.fromRadix(e,i);r=2}this.t=0,this.s=0;for(var n=e.length,o=!1,h=0;--n>=0;){var a=8==r?255&e[n]:s(e,n);a<0?"-"==e.charAt(n)&&(o=!0):(o=!1,0==h?this[this.t++]=a:h+r>this.DB?(this[this.t-1]|=(a&(1<<this.DB-h)-1)<<h,this[this.t++]=a>>this.DB-h):this[this.t-1]|=a<<h,(h+=r)>=this.DB&&(h-=this.DB))}8==r&&0!=(128&e[0])&&(this.s=-1,h>0&&(this[this.t-1]|=(1<<this.DB-h)-1<<h)),this.clamp(),o&&t.ZERO.subTo(this,this)},t.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},t.prototype.dlShiftTo=function(t,e){var i;for(i=this.t-1;i>=0;--i)e[i+t]=this[i];for(i=t-1;i>=0;--i)e[i]=0;e.t=this.t+t,e.s=this.s},t.prototype.drShiftTo=function(t,e){for(var i=t;i<this.t;++i)e[i-t]=this[i];e.t=Math.max(this.t-t,0),e.s=this.s},t.prototype.lShiftTo=function(t,e){var i,s=t%this.DB,r=this.DB-s,n=(1<<r)-1,o=Math.floor(t/this.DB),h=this.s<<s&this.DM;for(i=this.t-1;i>=0;--i)e[i+o+1]=this[i]>>r|h,h=(this[i]&n)<<s;for(i=o-1;i>=0;--i)e[i]=0;e[o]=h,e.t=this.t+o+1,e.s=this.s,e.clamp()},t.prototype.rShiftTo=function(t,e){e.s=this.s;var i=Math.floor(t/this.DB);if(i>=this.t)e.t=0;else{var s=t%this.DB,r=this.DB-s,n=(1<<s)-1;e[0]=this[i]>>s;for(var o=i+1;o<this.t;++o)e[o-i-1]|=(this[o]&n)<<r,e[o-i]=this[o]>>s;s>0&&(e[this.t-i-1]|=(this.s&n)<<r),e.t=this.t-i,e.clamp()}},t.prototype.subTo=function(t,e){for(var i=0,s=0,r=Math.min(t.t,this.t);i<r;)s+=this[i]-t[i],e[i++]=s&this.DM,s>>=this.DB;if(t.t<this.t){for(s-=t.s;i<this.t;)s+=this[i],e[i++]=s&this.DM,s>>=this.DB;s+=this.s}else{for(s+=this.s;i<t.t;)s-=t[i],e[i++]=s&this.DM,s>>=this.DB;s-=t.s}e.s=s<0?-1:0,s<-1?e[i++]=this.DV+s:s>0&&(e[i++]=s),e.t=i,e.clamp()},t.prototype.multiplyTo=function(e,i){var s=this.abs(),r=e.abs(),n=s.t;for(i.t=n+r.t;--n>=0;)i[n]=0;for(n=0;n<r.t;++n)i[n+s.t]=s.am(0,r[n],i,n,0,s.t);i.s=0,i.clamp(),this.s!=e.s&&t.ZERO.subTo(i,i)},t.prototype.squareTo=function(t){for(var e=this.abs(),i=t.t=2*e.t;--i>=0;)t[i]=0;for(i=0;i<e.t-1;++i){var s=e.am(i,e[i],t,2*i,0,1);(t[i+e.t]+=e.am(i+1,2*e[i],t,2*i+1,s,e.t-i-1))>=e.DV&&(t[i+e.t]-=e.DV,t[i+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(i,e[i],t,2*i,0,1)),t.s=0,t.clamp()},t.prototype.divRemTo=function(i,s,r){var o=i.abs();if(!(o.t<=0)){var h=this.abs();if(h.t<o.t)return null!=s&&s.fromInt(0),void(null!=r&&this.copyTo(r));null==r&&(r=e());var a=e(),u=this.s,c=i.s,f=this.DB-n(o[o.t-1]);f>0?(o.lShiftTo(f,a),h.lShiftTo(f,r)):(o.copyTo(a),h.copyTo(r));var p=a.t,l=a[p-1];if(0!=l){var d=l*(1<<this.F1)+(p>1?a[p-2]>>this.F2:0),g=this.FV/d,m=(1<<this.F1)/d,v=1<<this.F2,y=r.t,b=y-p,T=null==s?e():s;for(a.dlShiftTo(b,T),r.compareTo(T)>=0&&(r[r.t++]=1,r.subTo(T,r)),t.ONE.dlShiftTo(p,T),T.subTo(a,a);a.t<p;)a[a.t++]=0;for(;--b>=0;){var S=r[--y]==l?this.DM:Math.floor(r[y]*g+(r[y-1]+v)*m);if((r[y]+=a.am(0,S,r,b,0,p))<S)for(a.dlShiftTo(b,T),r.subTo(T,r);r[y]<--S;)r.subTo(T,r)}null!=s&&(r.drShiftTo(p,s),u!=c&&t.ZERO.subTo(s,s)),r.t=p,r.clamp(),f>0&&r.rShiftTo(f,r),u<0&&t.ZERO.subTo(r,r)}}},t.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return e=e*(2-(15&t)*e)&15,e=e*(2-(255&t)*e)&255,e=e*(2-((65535&t)*e&65535))&65535,(e=e*(2-t*e%this.DV)%this.DV)>0?this.DV-e:-e},t.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},t.prototype.exp=function(i,s){if(i>4294967295||i<1)return t.ONE;var r=e(),o=e(),h=s.convert(this),a=n(i)-1;for(h.copyTo(r);--a>=0;)if(s.sqrTo(r,o),(i&1<<a)>0)s.mulTo(o,h,r);else{var u=r;r=o,o=u}return s.revert(r)},t.prototype.toString=function(t){if(this.s<0)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var s,r=(1<<e)-1,n=!1,o="",h=this.t,a=this.DB-h*this.DB%e;if(h-- >0)for(a<this.DB&&(s=this[h]>>a)>0&&(n=!0,o=i(s));h>=0;)a<e?(s=(this[h]&(1<<a)-1)<<e-a,s|=this[--h]>>(a+=this.DB-e)):(s=this[h]>>(a-=e)&r,a<=0&&(a+=this.DB,--h)),s>0&&(n=!0),n&&(o+=i(s));return n?o:"0"},t.prototype.negate=function(){var i=e();return t.ZERO.subTo(this,i),i},t.prototype.abs=function(){return this.s<0?this.negate():this},t.prototype.compareTo=function(t){var e=this.s-t.s;if(0!=e)return e;var i=this.t;if(0!=(e=i-t.t))return this.s<0?-e:e;for(;--i>=0;)if(0!=(e=this[i]-t[i]))return e;return 0},t.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+n(this[this.t-1]^this.s&this.DM)},t.prototype.mod=function(i){var s=e();return this.abs().divRemTo(i,null,s),this.s<0&&s.compareTo(t.ZERO)>0&&i.subTo(s,s),s},t.prototype.modPowInt=function(t,e){var i;return i=t<256||e.isEven()?new o(e):new h(e),this.exp(t,i)},t.ZERO=r(0),t.ONE=r(1),d.prototype.convert=g,d.prototype.revert=g,d.prototype.mulTo=function(t,e,i){t.multiplyTo(e,i)},d.prototype.sqrTo=function(t,e){t.squareTo(e)},m.prototype.convert=function(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var i=e();return t.copyTo(i),this.reduce(i),i},m.prototype.revert=function(t){return t},m.prototype.reduce=function(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)},m.prototype.mulTo=function(t,e,i){t.multiplyTo(e,i),this.reduce(i)},m.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)};var L=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],q=(1<<26)/L[L.length-1];t.prototype.chunkSize=function(t){return Math.floor(Math.LN2*this.DB/Math.log(t))},t.prototype.toRadix=function(t){if(null==t&&(t=10),0==this.signum()||t<2||t>36)return"0";var i=this.chunkSize(t),s=Math.pow(t,i),n=r(s),o=e(),h=e(),a="";for(this.divRemTo(n,o,h);o.signum()>0;)a=(s+h.intValue()).toString(t).substr(1)+a,o.divRemTo(n,o,h);return h.intValue().toString(t)+a},t.prototype.fromRadix=function(e,i){this.fromInt(0),null==i&&(i=10);for(var r=this.chunkSize(i),n=Math.pow(i,r),o=!1,h=0,a=0,u=0;u<e.length;++u){var c=s(e,u);c<0?"-"==e.charAt(u)&&0==this.signum()&&(o=!0):(a=i*a+c,++h>=r&&(this.dMultiply(n),this.dAddOffset(a,0),h=0,a=0))}h>0&&(this.dMultiply(Math.pow(i,h)),this.dAddOffset(a,0)),o&&t.ZERO.subTo(this,this)},t.prototype.fromNumber=function(e,i,s){if("number"==typeof i)if(e<2)this.fromInt(1);else for(this.fromNumber(e,s),this.testBit(e-1)||this.bitwiseTo(t.ONE.shiftLeft(e-1),u,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(i);)this.dAddOffset(2,0),this.bitLength()>e&&this.subTo(t.ONE.shiftLeft(e-1),this);else{var r=new Array,n=7&e;r.length=1+(e>>3),i.nextBytes(r),n>0?r[0]&=(1<<n)-1:r[0]=0,this.fromString(r,256)}},t.prototype.bitwiseTo=function(t,e,i){var s,r,n=Math.min(t.t,this.t);for(s=0;s<n;++s)i[s]=e(this[s],t[s]);if(t.t<this.t){for(r=t.s&this.DM,s=n;s<this.t;++s)i[s]=e(this[s],r);i.t=this.t}else{for(r=this.s&this.DM,s=n;s<t.t;++s)i[s]=e(r,t[s]);i.t=t.t}i.s=e(this.s,t.s),i.clamp()},t.prototype.changeBit=function(e,i){var s=t.ONE.shiftLeft(e);return this.bitwiseTo(s,i,s),s},t.prototype.addTo=function(t,e){for(var i=0,s=0,r=Math.min(t.t,this.t);i<r;)s+=this[i]+t[i],e[i++]=s&this.DM,s>>=this.DB;if(t.t<this.t){for(s+=t.s;i<this.t;)s+=this[i],e[i++]=s&this.DM,s>>=this.DB;s+=this.s}else{for(s+=this.s;i<t.t;)s+=t[i],e[i++]=s&this.DM,s>>=this.DB;s+=t.s}e.s=s<0?-1:0,s>0?e[i++]=s:s<-1&&(e[i++]=this.DV+s),e.t=i,e.clamp()},t.prototype.dMultiply=function(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()},t.prototype.dAddOffset=function(t,e){if(0!=t){for(;this.t<=e;)this[this.t++]=0;for(this[e]+=t;this[e]>=this.DV;)this[e]-=this.DV,++e>=this.t&&(this[this.t++]=0),++this[e]}},t.prototype.multiplyLowerTo=function(t,e,i){var s=Math.min(this.t+t.t,e);for(i.s=0,i.t=s;s>0;)i[--s]=0;var r;for(r=i.t-this.t;s<r;++s)i[s+this.t]=this.am(0,t[s],i,s,0,this.t);for(r=Math.min(t.t,e);s<r;++s)this.am(0,t[s],i,s,0,e-s);i.clamp()},t.prototype.multiplyUpperTo=function(t,e,i){--e;var s=i.t=this.t+t.t-e;for(i.s=0;--s>=0;)i[s]=0;for(s=Math.max(e-this.t,0);s<t.t;++s)i[this.t+s-e]=this.am(e-s,t[s],i,0,0,this.t+s-e);i.clamp(),i.drShiftTo(1,i)},t.prototype.modInt=function(t){if(t<=0)return 0;var e=this.DV%t,i=this.s<0?t-1:0;if(this.t>0)if(0==e)i=this[0]%t;else for(var s=this.t-1;s>=0;--s)i=(e*i+this[s])%t;return i},t.prototype.millerRabin=function(i){var s=this.subtract(t.ONE),r=s.getLowestSetBit();if(r<=0)return!1;var n=s.shiftRight(r);(i=i+1>>1)>L.length&&(i=L.length);for(var o=e(),h=0;h<i;++h){o.fromInt(L[Math.floor(Math.random()*L.length)]);var a=o.modPow(n,this);if(0!=a.compareTo(t.ONE)&&0!=a.compareTo(s)){for(var u=1;u++<r&&0!=a.compareTo(s);)if(0==(a=a.modPowInt(2,this)).compareTo(t.ONE))return!1;if(0!=a.compareTo(s))return!1}}return!0},t.prototype.clone=function(){var t=e();return this.copyTo(t),t},t.prototype.intValue=function(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]},t.prototype.byteValue=function(){return 0==this.t?this.s:this[0]<<24>>24},t.prototype.shortValue=function(){return 0==this.t?this.s:this[0]<<16>>16},t.prototype.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1},t.prototype.toByteArray=function(){var t=this.t,e=new Array;e[0]=this.s;var i,s=this.DB-t*this.DB%8,r=0;if(t-- >0)for(s<this.DB&&(i=this[t]>>s)!=(this.s&this.DM)>>s&&(e[r++]=i|this.s<<this.DB-s);t>=0;)s<8?(i=(this[t]&(1<<s)-1)<<8-s,i|=this[--t]>>(s+=this.DB-8)):(i=this[t]>>(s-=8)&255,s<=0&&(s+=this.DB,--t)),0!=(128&i)&&(i|=-256),0==r&&(128&this.s)!=(128&i)&&++r,(r>0||i!=this.s)&&(e[r++]=i);return e},t.prototype.equals=function(t){return 0==this.compareTo(t)},t.prototype.min=function(t){return this.compareTo(t)<0?this:t},t.prototype.max=function(t){return this.compareTo(t)>0?this:t},t.prototype.and=function(t){var i=e();return this.bitwiseTo(t,a,i),i},t.prototype.or=function(t){var i=e();return this.bitwiseTo(t,u,i),i},t.prototype.xor=function(t){var i=e();return this.bitwiseTo(t,c,i),i},t.prototype.andNot=function(t){var i=e();return this.bitwiseTo(t,f,i),i},t.prototype.not=function(){for(var t=e(),i=0;i<this.t;++i)t[i]=this.DM&~this[i];return t.t=this.t,t.s=~this.s,t},t.prototype.shiftLeft=function(t){var i=e();return t<0?this.rShiftTo(-t,i):this.lShiftTo(t,i),i},t.prototype.shiftRight=function(t){var i=e();return t<0?this.lShiftTo(-t,i):this.rShiftTo(t,i),i},t.prototype.getLowestSetBit=function(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+p(this[t]);return this.s<0?this.t*this.DB:-1},t.prototype.bitCount=function(){for(var t=0,e=this.s&this.DM,i=0;i<this.t;++i)t+=l(this[i]^e);return t},t.prototype.testBit=function(t){var e=Math.floor(t/this.DB);return e>=this.t?0!=this.s:0!=(this[e]&1<<t%this.DB)},t.prototype.setBit=function(t){return this.changeBit(t,u)},t.prototype.clearBit=function(t){return this.changeBit(t,f)},t.prototype.flipBit=function(t){return this.changeBit(t,c)},t.prototype.add=function(t){var i=e();return this.addTo(t,i),i},t.prototype.subtract=function(t){var i=e();return this.subTo(t,i),i},t.prototype.multiply=function(t){var i=e();return this.multiplyTo(t,i),i},t.prototype.divide=function(t){var i=e();return this.divRemTo(t,i,null),i},t.prototype.remainder=function(t){var i=e();return this.divRemTo(t,null,i),i},t.prototype.divideAndRemainder=function(t){var i=e(),s=e();return this.divRemTo(t,i,s),new Array(i,s)},t.prototype.modPow=function(t,i){var s,a,u=t.bitLength(),c=r(1);if(u<=0)return c;s=u<18?1:u<48?3:u<144?4:u<768?5:6,a=u<8?new o(i):i.isEven()?new m(i):new h(i);var f=new Array,p=3,l=s-1,d=(1<<s)-1;if(f[1]=a.convert(this),s>1){var g=e();for(a.sqrTo(f[1],g);p<=d;)f[p]=e(),a.mulTo(g,f[p-2],f[p]),p+=2}var v,y,b=t.t-1,T=!0,S=e();for(u=n(t[b])-1;b>=0;){for(u>=l?v=t[b]>>u-l&d:(v=(t[b]&(1<<u+1)-1)<<l-u,b>0&&(v|=t[b-1]>>this.DB+u-l)),p=s;0==(1&v);)v>>=1,--p;if((u-=p)<0&&(u+=this.DB,--b),T)f[v].copyTo(c),T=!1;else{for(;p>1;)a.sqrTo(c,S),a.sqrTo(S,c),p-=2;p>0?a.sqrTo(c,S):(y=c,c=S,S=y),a.mulTo(S,f[v],c)}for(;b>=0&&0==(t[b]&1<<u);)a.sqrTo(c,S),y=c,c=S,S=y,--u<0&&(u=this.DB-1,--b)}return a.revert(c)},t.prototype.modInverse=function(e){var i=e.isEven();if(this.isEven()&&i||0==e.signum())return t.ZERO;for(var s=e.clone(),n=this.clone(),o=r(1),h=r(0),a=r(0),u=r(1);0!=s.signum();){for(;s.isEven();)s.rShiftTo(1,s),i?(o.isEven()&&h.isEven()||(o.addTo(this,o),h.subTo(e,h)),o.rShiftTo(1,o)):h.isEven()||h.subTo(e,h),h.rShiftTo(1,h);for(;n.isEven();)n.rShiftTo(1,n),i?(a.isEven()&&u.isEven()||(a.addTo(this,a),u.subTo(e,u)),a.rShiftTo(1,a)):u.isEven()||u.subTo(e,u),u.rShiftTo(1,u);s.compareTo(n)>=0?(s.subTo(n,s),i&&o.subTo(a,o),h.subTo(u,h)):(n.subTo(s,n),i&&a.subTo(o,a),u.subTo(h,u))}return 0!=n.compareTo(t.ONE)?t.ZERO:u.compareTo(e)>=0?u.subtract(e):u.signum()<0?(u.addTo(e,u),u.signum()<0?u.add(e):u):u},t.prototype.pow=function(t){return this.exp(t,new d)},t.prototype.gcd=function(t){var e=this.s<0?this.negate():this.clone(),i=t.s<0?t.negate():t.clone();if(e.compareTo(i)<0){var s=e;e=i,i=s}var r=e.getLowestSetBit(),n=i.getLowestSetBit();if(n<0)return e;for(r<n&&(n=r),n>0&&(e.rShiftTo(n,e),i.rShiftTo(n,i));e.signum()>0;)(r=e.getLowestSetBit())>0&&e.rShiftTo(r,e),(r=i.getLowestSetBit())>0&&i.rShiftTo(r,i),e.compareTo(i)>=0?(e.subTo(i,e),e.rShiftTo(1,e)):(i.subTo(e,i),i.rShiftTo(1,i));return n>0&&i.lShiftTo(n,i),i},t.prototype.isProbablePrime=function(t){var e,i=this.abs();if(1==i.t&&i[0]<=L[L.length-1]){for(e=0;e<L.length;++e)if(i[0]==L[e])return!0;return!1}if(i.isEven())return!1;for(e=1;e<L.length;){for(var s=L[e],r=e+1;r<L.length&&s<q;)s*=L[r++];for(s=i.modInt(s);e<r;)if(s%L[e++]==0)return!1}return i.millerRabin(t)},t.prototype.square=function(){var t=e();return this.squareTo(t),t},y.prototype.init=function(t){var e,i,s;for(e=0;e<256;++e)this.S[e]=e;for(i=0,e=0;e<256;++e)i=i+this.S[e]+t[e%t.length]&255,s=this.S[e],this.S[e]=this.S[i],this.S[i]=s;this.i=0,this.j=0},y.prototype.next=function(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]};var C,H,j,k=256;if(null==H){H=new Array,j=0;var F;if(window&&window.crypto&&window.crypto.getRandomValues){var K=new Uint32Array(256);for(console.log("z",K),window.crypto.getRandomValues(K),console.log("z2",K),F=0;F<K.length;++F)H[j++]=255&K[F]}var U=function t(e){if(this.count=this.count||0,this.count>=256||j>=k)window.removeEventListener?window.removeEventListener("mousemove",t,!1):window.detachEvent&&window.detachEvent("onmousemove",t);else try{var i=e.x+e.y;H[j++]=255&i,this.count+=1}catch(t){}};window&&window.addEventListener?window.addEventListener("mousemove",U,!1):window&&window.attachEvent&&window.attachEvent("onmousemove",U)}S.prototype.nextBytes=function(t){var e;for(e=0;e<t.length;++e)t[e]=T()},w.prototype.doPublic=function(t){return t.modPowInt(this.e,this.n)},w.prototype.setPublic=function(t,e){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=E(t,16),this.e=parseInt(e,16)):console.error("Invalid RSA public key")},w.prototype.encrypt=function(t){var e=D(t,this.n.bitLength()+7>>3);if(null==e)return null;var i=this.doPublic(e);if(null==i)return null;var s=i.toString(16);return 0==(1&s.length)?s:"0"+s},w.prototype.doPrivate=function(t){if(null==this.p||null==this.q)return t.modPow(this.d,this.n);for(var e=t.mod(this.p).modPow(this.dmp1,this.p),i=t.mod(this.q).modPow(this.dmq1,this.q);e.compareTo(i)<0;)e=e.add(this.p);return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)},w.prototype.setPrivate=function(t,e,i){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=E(t,16),this.e=parseInt(e,16),this.d=E(i,16)):console.error("Invalid RSA private key")},w.prototype.setPrivateEx=function(t,e,i,s,r,n,o,h){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=E(t,16),this.e=parseInt(e,16),this.d=E(i,16),this.p=E(s,16),this.q=E(r,16),this.dmp1=E(n,16),this.dmq1=E(o,16),this.coeff=E(h,16)):console.error("Invalid RSA private key")},w.prototype.generate=function(e,i){var s=new S,r=e>>1;this.e=parseInt(i,16);for(var n=new t(i,16);;){for(;this.p=new t(e-r,1,s),0!=this.p.subtract(t.ONE).gcd(n).compareTo(t.ONE)||!this.p.isProbablePrime(10););for(;this.q=new t(r,1,s),0!=this.q.subtract(t.ONE).gcd(n).compareTo(t.ONE)||!this.q.isProbablePrime(10););if(this.p.compareTo(this.q)<=0){var o=this.p;this.p=this.q,this.q=o}var h=this.p.subtract(t.ONE),a=this.q.subtract(t.ONE),u=h.multiply(a);if(0==u.gcd(n).compareTo(t.ONE)){this.n=this.p.multiply(this.q),this.d=n.modInverse(u),this.dmp1=this.d.mod(h),this.dmq1=this.d.mod(a),this.coeff=this.q.modInverse(this.p);break}}},w.prototype.decrypt=function(t){var e=E(t,16),i=this.doPrivate(e);return null==i?null:x(i,this.n.bitLength()+7>>3)},function(){w.prototype.generateAsync=function(i,s,r){var n=new S,o=i>>1;this.e=parseInt(s,16);var h=new t(s,16),a=this;setTimeout(function s(){var u=function(){if(a.p.compareTo(a.q)<=0){var e=a.p;a.p=a.q,a.q=e}var i=a.p.subtract(t.ONE),n=a.q.subtract(t.ONE),o=i.multiply(n);0==o.gcd(h).compareTo(t.ONE)?(a.n=a.p.multiply(a.q),a.d=h.modInverse(o),a.dmp1=a.d.mod(i),a.dmq1=a.d.mod(n),a.coeff=a.q.modInverse(a.p),setTimeout(function(){r()},0)):setTimeout(s,0)},c=function i(){a.q=e(),a.q.fromNumberAsync(o,1,n,function(){a.q.subtract(t.ONE).gcda(h,function(e){0==e.compareTo(t.ONE)&&a.q.isProbablePrime(10)?setTimeout(u,0):setTimeout(i,0)})})};setTimeout(function s(){a.p=e(),a.p.fromNumberAsync(i-o,1,n,function(){a.p.subtract(t.ONE).gcda(h,function(e){0==e.compareTo(t.ONE)&&a.p.isProbablePrime(10)?setTimeout(c,0):setTimeout(s,0)})})},0)},0)};t.prototype.gcda=function(t,e){var i=this.s<0?this.negate():this.clone(),s=t.s<0?t.negate():t.clone();if(i.compareTo(s)<0){var r=i;i=s,s=r}var n=i.getLowestSetBit(),o=s.getLowestSetBit();o<0?e(i):(n<o&&(o=n),o>0&&(i.rShiftTo(o,i),s.rShiftTo(o,s)),setTimeout(function t(){(n=i.getLowestSetBit())>0&&i.rShiftTo(n,i),(n=s.getLowestSetBit())>0&&s.rShiftTo(n,s),i.compareTo(s)>=0?(i.subTo(s,i),i.rShiftTo(1,i)):(s.subTo(i,s),s.rShiftTo(1,s)),i.signum()>0?setTimeout(t,0):(o>0&&s.lShiftTo(o,s),setTimeout(function(){e(s)},0))},10))};t.prototype.fromNumberAsync=function(e,i,s,r){if("number"==typeof i)if(e<2)this.fromInt(1);else{this.fromNumber(e,s),this.testBit(e-1)||this.bitwiseTo(t.ONE.shiftLeft(e-1),u,this),this.isEven()&&this.dAddOffset(1,0);var n=this;setTimeout(function s(){n.dAddOffset(2,0),n.bitLength()>e&&n.subTo(t.ONE.shiftLeft(e-1),n),n.isProbablePrime(i)?setTimeout(function(){r()},0):setTimeout(s,0)},0)}else{var o=new Array,h=7&e;o.length=1+(e>>3),i.nextBytes(o),h>0?o[0]&=(1<<h)-1:o[0]=0,this.fromString(o,256)}}}();var _="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",z="=",Z=Z||{};Z.env=Z.env||{};var G=Z,$=Object.prototype,Y=["toString","valueOf"];Z.env.parseUA=function(t){var e,i=function(t){var e=0;return parseFloat(t.replace(/\./g,function(){return 1==e++?"":"."}))},s=navigator,r={ie:0,opera:0,gecko:0,webkit:0,chrome:0,mobile:null,air:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,webos:0,caja:s&&s.cajaVersion,secure:!1,os:null},n=t||navigator&&navigator.userAgent,o=window&&window.location,h=o&&o.href;return r.secure=h&&0===h.toLowerCase().indexOf("https"),n&&(/windows|win32/i.test(n)?r.os="windows":/macintosh/i.test(n)?r.os="macintosh":/rhino/i.test(n)&&(r.os="rhino"),/KHTML/.test(n)&&(r.webkit=1),(e=n.match(/AppleWebKit\/([^\s]*)/))&&e[1]&&(r.webkit=i(e[1]),/ Mobile\//.test(n)?(r.mobile="Apple",(e=n.match(/OS ([^\s]*)/))&&e[1]&&(e=i(e[1].replace("_","."))),r.ios=e,r.ipad=r.ipod=r.iphone=0,(e=n.match(/iPad|iPod|iPhone/))&&e[0]&&(r[e[0].toLowerCase()]=r.ios)):((e=n.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))&&(r.mobile=e[0]),/webOS/.test(n)&&(r.mobile="WebOS",(e=n.match(/webOS\/([^\s]*);/))&&e[1]&&(r.webos=i(e[1]))),/ Android/.test(n)&&(r.mobile="Android",(e=n.match(/Android ([^\s]*);/))&&e[1]&&(r.android=i(e[1])))),(e=n.match(/Chrome\/([^\s]*)/))&&e[1]?r.chrome=i(e[1]):(e=n.match(/AdobeAIR\/([^\s]*)/))&&(r.air=e[0])),r.webkit||((e=n.match(/Opera[\s\/]([^\s]*)/))&&e[1]?(r.opera=i(e[1]),(e=n.match(/Version\/([^\s]*)/))&&e[1]&&(r.opera=i(e[1])),(e=n.match(/Opera Mini[^;]*/))&&(r.mobile=e[0])):(e=n.match(/MSIE\s([^;]*)/))&&e[1]?r.ie=i(e[1]):(e=n.match(/Gecko\/([^\s]*)/))&&(r.gecko=1,(e=n.match(/rv:([^\s\)]*)/))&&e[1]&&(r.gecko=i(e[1]))))),r},Z.env.ua=Z.env.parseUA(),Z.isFunction=function(t){return"function"==typeof t||"[object Function]"===$.toString.apply(t)},Z._IEEnumFix=Z.env.ua.ie?function(t,e){var i,s,r;for(i=0;i<Y.length;i+=1)r=e[s=Y[i]],G.isFunction(r)&&r!=$[s]&&(t[s]=r)}:function(){},Z.extend=function(t,e,i){if(!e||!t)throw new Error("extend failed, please check that all dependencies are included.");var s,r=function(){};if(r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t,t.superclass=e.prototype,e.prototype.constructor==$.constructor&&(e.prototype.constructor=e),i){for(s in i)G.hasOwnProperty(i,s)&&(t.prototype[s]=i[s]);G._IEEnumFix(t.prototype,i)}};var J;J||(J={}),J.asn1||(J.asn1={}),J.asn1.ASN1Util=new function(){this.integerToByteHex=function(t){var e=t.toString(16);return e.length%2==1&&(e="0"+e),e},this.bigIntToMinTwosComplementsHex=function(e){var i=e.toString(16);if("-"!=i.substr(0,1))i.length%2==1?i="0"+i:i.match(/^[0-7]/)||(i="00"+i);else{var s=i.substr(1).length;s%2==1?s+=1:i.match(/^[0-7]/)||(s+=2);for(var r="",n=0;n<s;n++)r+="f";i=new t(r,16).xor(e).add(t.ONE).toString(16).replace(/^-/,"")}return i},this.getPEMStringFromHex=function(t,e){var i=CryptoJS.enc.Hex.parse(t),s=CryptoJS.enc.Base64.stringify(i).replace(/(.{64})/g,"$1\r\n");return s=s.replace(/\r\n$/,""),"-----BEGIN "+e+"-----\r\n"+s+"\r\n-----END "+e+"-----\r\n"}},J.asn1.ASN1Object=function(){this.getLengthHexFromValue=function(){if(void 0===this.hV||null==this.hV)throw"this.hV is null or undefined.";if(this.hV.length%2==1)throw"value hex must be even length: n="+"".length+",v="+this.hV;var t=this.hV.length/2,e=t.toString(16);if(e.length%2==1&&(e="0"+e),t<128)return e;var i=e.length/2;if(i>15)throw"ASN.1 length too long to represent by 8x: n = "+t.toString(16);return(128+i).toString(16)+e},this.getEncodedHex=function(){return(null==this.hTLV||this.isModified)&&(this.hV=this.getFreshValueHex(),this.hL=this.getLengthHexFromValue(),this.hTLV=this.hT+this.hL+this.hV,this.isModified=!1),this.hTLV},this.getValueHex=function(){return this.getEncodedHex(),this.hV},this.getFreshValueHex=function(){return""}},J.asn1.DERAbstractString=function(t){J.asn1.DERAbstractString.superclass.constructor.call(this);this.getString=function(){return this.s},this.setString=function(t){this.hTLV=null,this.isModified=!0,this.s=t,this.hV=stohex(this.s)},this.setStringHex=function(t){this.hTLV=null,this.isModified=!0,this.s=null,this.hV=t},this.getFreshValueHex=function(){return this.hV},void 0!==t&&(void 0!==t.str?this.setString(t.str):void 0!==t.hex&&this.setStringHex(t.hex))},Z.extend(J.asn1.DERAbstractString,J.asn1.ASN1Object),J.asn1.DERAbstractTime=function(t){J.asn1.DERAbstractTime.superclass.constructor.call(this);this.localDateToUTC=function(t){return utc=t.getTime()+6e4*t.getTimezoneOffset(),new Date(utc)},this.formatDate=function(t,e){var i=this.zeroPadding,s=this.localDateToUTC(t),r=String(s.getFullYear());return"utc"==e&&(r=r.substr(2,2)),r+i(String(s.getMonth()+1),2)+i(String(s.getDate()),2)+i(String(s.getHours()),2)+i(String(s.getMinutes()),2)+i(String(s.getSeconds()),2)+"Z"},this.zeroPadding=function(t,e){return t.length>=e?t:new Array(e-t.length+1).join("0")+t},this.getString=function(){return this.s},this.setString=function(t){this.hTLV=null,this.isModified=!0,this.s=t,this.hV=stohex(this.s)},this.setByDateValue=function(t,e,i,s,r,n){var o=new Date(Date.UTC(t,e-1,i,s,r,n,0));this.setByDate(o)},this.getFreshValueHex=function(){return this.hV}},Z.extend(J.asn1.DERAbstractTime,J.asn1.ASN1Object),J.asn1.DERAbstractStructured=function(t){J.asn1.DERAbstractString.superclass.constructor.call(this);this.setByASN1ObjectArray=function(t){this.hTLV=null,this.isModified=!0,this.asn1Array=t},this.appendASN1Object=function(t){this.hTLV=null,this.isModified=!0,this.asn1Array.push(t)},this.asn1Array=new Array,void 0!==t&&void 0!==t.array&&(this.asn1Array=t.array)},Z.extend(J.asn1.DERAbstractStructured,J.asn1.ASN1Object),J.asn1.DERBoolean=function(){J.asn1.DERBoolean.superclass.constructor.call(this),this.hT="01",this.hTLV="0101ff"},Z.extend(J.asn1.DERBoolean,J.asn1.ASN1Object),J.asn1.DERInteger=function(e){J.asn1.DERInteger.superclass.constructor.call(this),this.hT="02",this.setByBigInteger=function(t){this.hTLV=null,this.isModified=!0,this.hV=J.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)},this.setByInteger=function(e){var i=new t(String(e),10);this.setByBigInteger(i)},this.setValueHex=function(t){this.hV=t},this.getFreshValueHex=function(){return this.hV},void 0!==e&&(void 0!==e.bigint?this.setByBigInteger(e.bigint):void 0!==e.int?this.setByInteger(e.int):void 0!==e.hex&&this.setValueHex(e.hex))},Z.extend(J.asn1.DERInteger,J.asn1.ASN1Object),J.asn1.DERBitString=function(t){J.asn1.DERBitString.superclass.constructor.call(this),this.hT="03",this.setHexValueIncludingUnusedBits=function(t){this.hTLV=null,this.isModified=!0,this.hV=t},this.setUnusedBitsAndHexValue=function(t,e){if(t<0||7<t)throw"unused bits shall be from 0 to 7: u = "+t;var i="0"+t;this.hTLV=null,this.isModified=!0,this.hV=i+e},this.setByBinaryString=function(t){var e=8-(t=t.replace(/0+$/,"")).length%8;8==e&&(e=0);for(s=0;s<=e;s++)t+="0";for(var i="",s=0;s<t.length-1;s+=8){var r=t.substr(s,8),n=parseInt(r,2).toString(16);1==n.length&&(n="0"+n),i+=n}this.hTLV=null,this.isModified=!0,this.hV="0"+e+i},this.setByBooleanArray=function(t){for(var e="",i=0;i<t.length;i++)1==t[i]?e+="1":e+="0";this.setByBinaryString(e)},this.newFalseArray=function(t){for(var e=new Array(t),i=0;i<t;i++)e[i]=!1;return e},this.getFreshValueHex=function(){return this.hV},void 0!==t&&(void 0!==t.hex?this.setHexValueIncludingUnusedBits(t.hex):void 0!==t.bin?this.setByBinaryString(t.bin):void 0!==t.array&&this.setByBooleanArray(t.array))},Z.extend(J.asn1.DERBitString,J.asn1.ASN1Object),J.asn1.DEROctetString=function(t){J.asn1.DEROctetString.superclass.constructor.call(this,t),this.hT="04"},Z.extend(J.asn1.DEROctetString,J.asn1.DERAbstractString),J.asn1.DERNull=function(){J.asn1.DERNull.superclass.constructor.call(this),this.hT="05",this.hTLV="0500"},Z.extend(J.asn1.DERNull,J.asn1.ASN1Object),J.asn1.DERObjectIdentifier=function(e){var i=function(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e},s=function(e){var s="",r=new t(e,10).toString(2),n=7-r.length%7;7==n&&(n=0);for(var o="",h=0;h<n;h++)o+="0";r=o+r;for(h=0;h<r.length-1;h+=7){var a=r.substr(h,7);h!=r.length-7&&(a="1"+a),s+=i(parseInt(a,2))}return s};J.asn1.DERObjectIdentifier.superclass.constructor.call(this),this.hT="06",this.setValueHex=function(t){this.hTLV=null,this.isModified=!0,this.s=null,this.hV=t},this.setValueOidString=function(t){if(!t.match(/^[0-9.]+$/))throw"malformed oid string: "+t;var e="",r=t.split("."),n=40*parseInt(r[0])+parseInt(r[1]);e+=i(n),r.splice(0,2);for(var o=0;o<r.length;o++)e+=s(r[o]);this.hTLV=null,this.isModified=!0,this.s=null,this.hV=e},this.setValueName=function(t){if(void 0===J.asn1.x509.OID.name2oidList[t])throw"DERObjectIdentifier oidName undefined: "+t;var e=J.asn1.x509.OID.name2oidList[t];this.setValueOidString(e)},this.getFreshValueHex=function(){return this.hV},void 0!==e&&(void 0!==e.oid?this.setValueOidString(e.oid):void 0!==e.hex?this.setValueHex(e.hex):void 0!==e.name&&this.setValueName(e.name))},Z.extend(J.asn1.DERObjectIdentifier,J.asn1.ASN1Object),J.asn1.DERUTF8String=function(t){J.asn1.DERUTF8String.superclass.constructor.call(this,t),this.hT="0c"},Z.extend(J.asn1.DERUTF8String,J.asn1.DERAbstractString),J.asn1.DERNumericString=function(t){J.asn1.DERNumericString.superclass.constructor.call(this,t),this.hT="12"},Z.extend(J.asn1.DERNumericString,J.asn1.DERAbstractString),J.asn1.DERPrintableString=function(t){J.asn1.DERPrintableString.superclass.constructor.call(this,t),this.hT="13"},Z.extend(J.asn1.DERPrintableString,J.asn1.DERAbstractString),J.asn1.DERTeletexString=function(t){J.asn1.DERTeletexString.superclass.constructor.call(this,t),this.hT="14"},Z.extend(J.asn1.DERTeletexString,J.asn1.DERAbstractString),J.asn1.DERIA5String=function(t){J.asn1.DERIA5String.superclass.constructor.call(this,t),this.hT="16"},Z.extend(J.asn1.DERIA5String,J.asn1.DERAbstractString),J.asn1.DERUTCTime=function(t){J.asn1.DERUTCTime.superclass.constructor.call(this,t),this.hT="17",this.setByDate=function(t){this.hTLV=null,this.isModified=!0,this.date=t,this.s=this.formatDate(this.date,"utc"),this.hV=stohex(this.s)},void 0!==t&&(void 0!==t.str?this.setString(t.str):void 0!==t.hex?this.setStringHex(t.hex):void 0!==t.date&&this.setByDate(t.date))},Z.extend(J.asn1.DERUTCTime,J.asn1.DERAbstractTime),J.asn1.DERGeneralizedTime=function(t){J.asn1.DERGeneralizedTime.superclass.constructor.call(this,t),this.hT="18",this.setByDate=function(t){this.hTLV=null,this.isModified=!0,this.date=t,this.s=this.formatDate(this.date,"gen"),this.hV=stohex(this.s)},void 0!==t&&(void 0!==t.str?this.setString(t.str):void 0!==t.hex?this.setStringHex(t.hex):void 0!==t.date&&this.setByDate(t.date))},Z.extend(J.asn1.DERGeneralizedTime,J.asn1.DERAbstractTime),J.asn1.DERSequence=function(t){J.asn1.DERSequence.superclass.constructor.call(this,t),this.hT="30",this.getFreshValueHex=function(){for(var t="",e=0;e<this.asn1Array.length;e++)t+=this.asn1Array[e].getEncodedHex();return this.hV=t,this.hV}},Z.extend(J.asn1.DERSequence,J.asn1.DERAbstractStructured),J.asn1.DERSet=function(t){J.asn1.DERSet.superclass.constructor.call(this,t),this.hT="31",this.getFreshValueHex=function(){for(var t=new Array,e=0;e<this.asn1Array.length;e++){var i=this.asn1Array[e];t.push(i.getEncodedHex())}return t.sort(),this.hV=t.join(""),this.hV}},Z.extend(J.asn1.DERSet,J.asn1.DERAbstractStructured),J.asn1.DERTaggedObject=function(t){J.asn1.DERTaggedObject.superclass.constructor.call(this),this.hT="a0",this.hV="",this.isExplicit=!0,this.asn1Object=null,this.setASN1Object=function(t,e,i){this.hT=e,this.isExplicit=t,this.asn1Object=i,this.isExplicit?(this.hV=this.asn1Object.getEncodedHex(),this.hTLV=null,this.isModified=!0):(this.hV=null,this.hTLV=i.getEncodedHex(),this.hTLV=this.hTLV.replace(/^../,e),this.isModified=!1)},this.getFreshValueHex=function(){return this.hV},void 0!==t&&(void 0!==t.tag&&(this.hT=t.tag),void 0!==t.explicit&&(this.isExplicit=t.explicit),void 0!==t.obj&&(this.asn1Object=t.obj,this.setASN1Object(this.isExplicit,this.hT,this.asn1Object)))},Z.extend(J.asn1.DERTaggedObject,J.asn1.ASN1Object);var W={};W.decode=function(t){var e;if(void 0===Q){var i="0123456789ABCDEF",s=" \f\n\r\t \u2028\u2029";for(Q=[],e=0;e<16;++e)Q[i.charAt(e)]=e;for(i=i.toLowerCase(),e=10;e<16;++e)Q[i.charAt(e)]=e;for(e=0;e<s.length;++e)Q[s.charAt(e)]=-1}var r=[],n=0,o=0;for(e=0;e<t.length;++e){var h=t.charAt(e);if("="==h)break;if(-1!=(h=Q[h])){if(void 0===h)throw"Illegal character at offset "+e;n|=h,++o>=2?(r[r.length]=n,n=0,o=0):n<<=4}}if(o)throw"Hex encoding incomplete: 4 bits missing";return r};var Q,X={};X.decode=function(t){var e;if(void 0===Q){var i="= \f\n\r\t \u2028\u2029";for(Q=[],e=0;e<64;++e)Q["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)]=e;for(e=0;e<i.length;++e)Q[i.charAt(e)]=-1}var s=[],r=0,n=0;for(e=0;e<t.length;++e){var o=t.charAt(e);if("="==o)break;if(-1!=(o=Q[o])){if(void 0===o)throw"Illegal character at offset "+e;r|=o,++n>=4?(s[s.length]=r>>16,s[s.length]=r>>8&255,s[s.length]=255&r,r=0,n=0):r<<=6}}switch(n){case 1:throw"Base64 encoding incomplete: at least 2 bits missing";case 2:s[s.length]=r>>10;break;case 3:s[s.length]=r>>16,s[s.length]=r>>8&255}return s},X.re=/-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,X.unarmor=function(t){var e=X.re.exec(t);if(e)if(e[1])t=e[1];else{if(!e[2])throw"RegExp out of sync";t=e[2]}return X.decode(t)};var tt={tag:function(t,e){var i=document.createElement(t);return i.className=e,i},text:function(t){return document.createTextNode(t)}};R.prototype.get=function(t){if(void 0===t&&(t=this.pos++),t>=this.enc.length)throw"Requesting byte offset "+t+" on a stream of length "+this.enc.length;return this.enc[t]},R.prototype.hexDigits="0123456789ABCDEF",R.prototype.hexByte=function(t){return this.hexDigits.charAt(t>>4&15)+this.hexDigits.charAt(15&t)},R.prototype.hexDump=function(t,e,i){for(var s="",r=t;r<e;++r)if(s+=this.hexByte(this.get(r)),!0!==i)switch(15&r){case 7:s+="  ";break;case 15:s+="\n";break;default:s+=" "}return s},R.prototype.parseStringISO=function(t,e){for(var i="",s=t;s<e;++s)i+=String.fromCharCode(this.get(s));return i},R.prototype.parseStringUTF=function(t,e){for(var i="",s=t;s<e;){var r=this.get(s++);i+=r<128?String.fromCharCode(r):r>191&&r<224?String.fromCharCode((31&r)<<6|63&this.get(s++)):String.fromCharCode((15&r)<<12|(63&this.get(s++))<<6|63&this.get(s++))}return i},R.prototype.parseStringBMP=function(t,e){for(var i="",s=t;s<e;s+=2){var r=this.get(s),n=this.get(s+1);i+=String.fromCharCode((r<<8)+n)}return i},R.prototype.reTime=/^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,R.prototype.parseTime=function(t,e){var i=this.parseStringISO(t,e),s=this.reTime.exec(i);return s?(i=s[1]+"-"+s[2]+"-"+s[3]+" "+s[4],s[5]&&(i+=":"+s[5],s[6]&&(i+=":"+s[6],s[7]&&(i+="."+s[7]))),s[8]&&(i+=" UTC","Z"!=s[8]&&(i+=s[8],s[9]&&(i+=":"+s[9]))),i):"Unrecognized time: "+i},R.prototype.parseInteger=function(t,e){var i=e-t;if(i>4){i<<=3;var s=this.get(t);if(0===s)i-=8;else for(;s<128;)s<<=1,--i;return"("+i+" bit)"}for(var r=0,n=t;n<e;++n)r=r<<8|this.get(n);return r},R.prototype.parseBitString=function(t,e){var i=this.get(t),s=(e-t-1<<3)-i,r="("+s+" bit)";if(s<=20){var n=i;r+=" ";for(var o=e-1;o>t;--o){for(var h=this.get(o),a=n;a<8;++a)r+=h>>a&1?"1":"0";n=0}}return r},R.prototype.parseOctetString=function(t,e){var i=e-t,s="("+i+" byte) ";i>100&&(e=t+100);for(var r=t;r<e;++r)s+=this.hexByte(this.get(r));return i>100&&(s+="…"),s},R.prototype.parseOID=function(t,e){for(var i="",s=0,r=0,n=t;n<e;++n){var o=this.get(n);if(s=s<<7|127&o,r+=7,!(128&o)){if(""===i){var h=s<80?s<40?0:1:2;i=h+"."+(s-40*h)}else i+="."+(r>=31?"bigint":s);s=r=0}}return i},O.prototype.typeName=function(){if(void 0===this.tag)return"unknown";var t=this.tag>>6,e=(this.tag,31&this.tag);switch(t){case 0:switch(e){case 0:return"EOC";case 1:return"BOOLEAN";case 2:return"INTEGER";case 3:return"BIT_STRING";case 4:return"OCTET_STRING";case 5:return"NULL";case 6:return"OBJECT_IDENTIFIER";case 7:return"ObjectDescriptor";case 8:return"EXTERNAL";case 9:return"REAL";case 10:return"ENUMERATED";case 11:return"EMBEDDED_PDV";case 12:return"UTF8String";case 16:return"SEQUENCE";case 17:return"SET";case 18:return"NumericString";case 19:return"PrintableString";case 20:return"TeletexString";case 21:return"VideotexString";case 22:return"IA5String";case 23:return"UTCTime";case 24:return"GeneralizedTime";case 25:return"GraphicString";case 26:return"VisibleString";case 27:return"GeneralString";case 28:return"UniversalString";case 30:return"BMPString";default:return"Universal_"+e.toString(16)}case 1:return"Application_"+e.toString(16);case 2:return"["+e+"]";case 3:return"Private_"+e.toString(16)}},O.prototype.reSeemsASCII=/^[ -~]+$/,O.prototype.content=function(){if(void 0===this.tag)return null;var t=this.tag>>6,e=31&this.tag,i=this.posContent(),s=Math.abs(this.length);if(0!==t){if(null!==this.sub)return"("+this.sub.length+" elem)";var r=this.stream.parseStringISO(i,i+Math.min(s,100));return this.reSeemsASCII.test(r)?r.substring(0,200)+(r.length>200?"…":""):this.stream.parseOctetString(i,i+s)}switch(e){case 1:return 0===this.stream.get(i)?"false":"true";case 2:return this.stream.parseInteger(i,i+s);case 3:return this.sub?"("+this.sub.length+" elem)":this.stream.parseBitString(i,i+s);case 4:return this.sub?"("+this.sub.length+" elem)":this.stream.parseOctetString(i,i+s);case 6:return this.stream.parseOID(i,i+s);case 16:case 17:return"("+this.sub.length+" elem)";case 12:return this.stream.parseStringUTF(i,i+s);case 18:case 19:case 20:case 21:case 22:case 26:return this.stream.parseStringISO(i,i+s);case 30:return this.stream.parseStringBMP(i,i+s);case 23:case 24:return this.stream.parseTime(i,i+s)}return null},O.prototype.toString=function(){return this.typeName()+"@"+this.stream.pos+"[header:"+this.header+",length:"+this.length+",sub:"+(null===this.sub?"null":this.sub.length)+"]"},O.prototype.print=function(t){if(void 0===t&&(t=""),document.writeln(t+this),null!==this.sub){t+="  ";for(var e=0,i=this.sub.length;e<i;++e)this.sub[e].print(t)}},O.prototype.toPrettyString=function(t){void 0===t&&(t="");var e=t+this.typeName()+" @"+this.stream.pos;if(this.length>=0&&(e+="+"),e+=this.length,32&this.tag?e+=" (constructed)":3!=this.tag&&4!=this.tag||null===this.sub||(e+=" (encapsulates)"),e+="\n",null!==this.sub){t+="  ";for(var i=0,s=this.sub.length;i<s;++i)e+=this.sub[i].toPrettyString(t)}return e},O.prototype.toDOM=function(){var t=tt.tag("div","node");t.asn1=this;var e=tt.tag("div","head"),i=this.typeName().replace(/_/g," ");e.innerHTML=i;var s=this.content();if(null!==s){s=String(s).replace(/</g,"&lt;");var r=tt.tag("span","preview");r.appendChild(tt.text(s)),e.appendChild(r)}t.appendChild(e),this.node=t,this.head=e;var n=tt.tag("div","value");if(i="Offset: "+this.stream.pos+"<br/>",i+="Length: "+this.header+"+",this.length>=0?i+=this.length:i+=-this.length+" (undefined)",32&this.tag?i+="<br/>(constructed)":3!=this.tag&&4!=this.tag||null===this.sub||(i+="<br/>(encapsulates)"),null!==s&&(i+="<br/>Value:<br/><b>"+s+"</b>","object"===("undefined"==typeof oids?"undefined":V(oids))&&6==this.tag)){var o=oids[s];o&&(o.d&&(i+="<br/>"+o.d),o.c&&(i+="<br/>"+o.c),o.w&&(i+="<br/>(warning!)"))}n.innerHTML=i,t.appendChild(n);var h=tt.tag("div","sub");if(null!==this.sub)for(var a=0,u=this.sub.length;a<u;++a)h.appendChild(this.sub[a].toDOM());return t.appendChild(h),e.onclick=function(){t.className="node collapsed"==t.className?"node":"node collapsed"},t},O.prototype.posStart=function(){return this.stream.pos},O.prototype.posContent=function(){return this.stream.pos+this.header},O.prototype.posEnd=function(){return this.stream.pos+this.header+Math.abs(this.length)},O.prototype.fakeHover=function(t){this.node.className+=" hover",t&&(this.head.className+=" hover")},O.prototype.fakeOut=function(t){var e=/ ?hover/;this.node.className=this.node.className.replace(e,""),t&&(this.head.className=this.head.className.replace(e,""))},O.prototype.toHexDOM_sub=function(t,e,i,s,r){if(!(s>=r)){var n=tt.tag("span",e);n.appendChild(tt.text(i.hexDump(s,r))),t.appendChild(n)}},O.prototype.toHexDOM=function(t){var e=tt.tag("span","hex");if(void 0===t&&(t=e),this.head.hexNode=e,this.head.onmouseover=function(){this.hexNode.className="hexCurrent"},this.head.onmouseout=function(){this.hexNode.className="hex"},e.asn1=this,e.onmouseover=function(){var e=!t.selected;e&&(t.selected=this.asn1,this.className="hexCurrent"),this.asn1.fakeHover(e)},e.onmouseout=function(){var e=t.selected==this.asn1;this.asn1.fakeOut(e),e&&(t.selected=null,this.className="hex")},this.toHexDOM_sub(e,"tag",this.stream,this.posStart(),this.posStart()+1),this.toHexDOM_sub(e,this.length>=0?"dlen":"ulen",this.stream,this.posStart()+1,this.posContent()),null===this.sub)e.appendChild(tt.text(this.stream.hexDump(this.posContent(),this.posEnd())));else if(this.sub.length>0){var i=this.sub[0],s=this.sub[this.sub.length-1];this.toHexDOM_sub(e,"intro",this.stream,this.posContent(),i.posStart());for(var r=0,n=this.sub.length;r<n;++r)e.appendChild(this.sub[r].toHexDOM(t));this.toHexDOM_sub(e,"outro",this.stream,s.posEnd(),this.posEnd())}return e},O.prototype.toHexString=function(t){return this.stream.hexDump(this.posStart(),this.posEnd(),!0)},O.decodeLength=function(t){var e=t.get(),i=127&e;if(i==e)return i;if(i>3)throw"Length over 24 bits not supported at position "+(t.pos-1);if(0===i)return-1;e=0;for(var s=0;s<i;++s)e=e<<8|t.get();return e},O.hasContent=function(t,e,i){if(32&t)return!0;if(t<3||t>4)return!1;var s=new R(i);if(3==t&&s.get(),s.get()>>6&1)return!1;try{var r=O.decodeLength(s);return s.pos-i.pos+r==e}catch(t){return!1}},O.decode=function(t){t instanceof R||(t=new R(t,0));var e=new R(t),i=t.get(),s=O.decodeLength(t),r=t.pos-e.pos,n=null;if(O.hasContent(i,s,t)){var o=t.pos;if(3==i&&t.get(),n=[],s>=0){for(var h=o+s;t.pos<h;)n[n.length]=O.decode(t);if(t.pos!=h)throw"Content size is not correct for container starting at offset "+o}else try{for(;;){var a=O.decode(t);if(0===a.tag)break;n[n.length]=a}s=o-t.pos}catch(t){throw"Exception while decoding undefined length content: "+t}}else t.pos+=s;return new O(e,r,s,i,n)},O.test=function(){for(var t=[{value:[39],expected:39},{value:[129,201],expected:201},{value:[131,254,220,186],expected:16702650}],e=0,i=t.length;e<i;++e){var s=new R(t[e].value,0),r=O.decodeLength(s);r!=t[e].expected&&document.write("In test["+e+"] expected "+t[e].expected+" got "+r+"\n")}},O.prototype.getHexStringValue=function(){var t=this.toHexString(),e=2*this.header,i=2*this.length;return t.substr(e,i)},w.prototype.parseKey=function(t){try{var e=0,i=0,s=/^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t)?W.decode(t):X.unarmor(t),r=O.decode(s);if(3===r.sub.length&&(r=r.sub[2].sub[0]),9===r.sub.length){e=r.sub[1].getHexStringValue(),this.n=E(e,16),i=r.sub[2].getHexStringValue(),this.e=parseInt(i,16);var n=r.sub[3].getHexStringValue();this.d=E(n,16);var o=r.sub[4].getHexStringValue();this.p=E(o,16);var h=r.sub[5].getHexStringValue();this.q=E(h,16);var a=r.sub[6].getHexStringValue();this.dmp1=E(a,16);var u=r.sub[7].getHexStringValue();this.dmq1=E(u,16);var c=r.sub[8].getHexStringValue();this.coeff=E(c,16)}else{if(2!==r.sub.length)return!1;var f=r.sub[1].sub[0];e=f.sub[0].getHexStringValue(),this.n=E(e,16),i=f.sub[1].getHexStringValue(),this.e=parseInt(i,16)}return!0}catch(t){return!1}},w.prototype.getPrivateBaseKey=function(){var t={array:[new J.asn1.DERInteger({int:0}),new J.asn1.DERInteger({bigint:this.n}),new J.asn1.DERInteger({int:this.e}),new J.asn1.DERInteger({bigint:this.d}),new J.asn1.DERInteger({bigint:this.p}),new J.asn1.DERInteger({bigint:this.q}),new J.asn1.DERInteger({bigint:this.dmp1}),new J.asn1.DERInteger({bigint:this.dmq1}),new J.asn1.DERInteger({bigint:this.coeff})]};return new J.asn1.DERSequence(t).getEncodedHex()},w.prototype.getPrivateBaseKeyB64=function(){return B(this.getPrivateBaseKey())},w.prototype.getPublicBaseKey=function(){var t={array:[new J.asn1.DERObjectIdentifier({oid:"1.2.840.113549.1.1.1"}),new J.asn1.DERNull]},e=new J.asn1.DERSequence(t);return t={array:[new J.asn1.DERInteger({bigint:this.n}),new J.asn1.DERInteger({int:this.e})]},t={hex:"00"+new J.asn1.DERSequence(t).getEncodedHex()},t={array:[e,new J.asn1.DERBitString(t)]},new J.asn1.DERSequence(t).getEncodedHex()},w.prototype.getPublicBaseKeyB64=function(){return B(this.getPublicBaseKey())},w.prototype.wordwrap=function(t,e){if(e=e||64,!t)return t;var i="(.{1,"+e+"})( +|$\n?)|(.{1,"+e+"})";return t.match(RegExp(i,"g")).join("\n")},w.prototype.getPrivateKey=function(){var t="-----BEGIN RSA PRIVATE KEY-----\n";return t+=this.wordwrap(this.getPrivateBaseKeyB64())+"\n",t+="-----END RSA PRIVATE KEY-----"},w.prototype.getPublicKey=function(){var t="-----BEGIN PUBLIC KEY-----\n";return t+=this.wordwrap(this.getPublicBaseKeyB64())+"\n",t+="-----END PUBLIC KEY-----"},w.prototype.hasPublicKeyProperty=function(t){return(t=t||{}).hasOwnProperty("n")&&t.hasOwnProperty("e")},w.prototype.hasPrivateKeyProperty=function(t){return(t=t||{}).hasOwnProperty("n")&&t.hasOwnProperty("e")&&t.hasOwnProperty("d")&&t.hasOwnProperty("p")&&t.hasOwnProperty("q")&&t.hasOwnProperty("dmp1")&&t.hasOwnProperty("dmq1")&&t.hasOwnProperty("coeff")},w.prototype.parsePropertiesFrom=function(t){this.n=t.n,this.e=t.e,t.hasOwnProperty("d")&&(this.d=t.d,this.p=t.p,this.q=t.q,this.dmp1=t.dmp1,this.dmq1=t.dmq1,this.coeff=t.coeff)};var et=function(t){w.call(this),t&&("string"==typeof t?this.parseKey(t):(this.hasPrivateKeyProperty(t)||this.hasPublicKeyProperty(t))&&this.parsePropertiesFrom(t))};(et.prototype=new w).constructor=et;var it=function(t){t=t||{},this.default_key_size=parseInt(t.default_key_size)||1024,this.default_public_exponent=t.default_public_exponent||"010001",this.log=t.log||!1,this.key=null};it.prototype.setKey=function(t){this.log&&this.key&&console.warn("A key was already set, overriding existing."),this.key=new et(t)},it.prototype.setPrivateKey=function(t){this.setKey(t)},it.prototype.setPublicKey=function(t){this.setKey(t)},it.prototype.decrypt=function(t){try{return this.getKey().decrypt(A(t))}catch(t){return!1}},it.prototype.encrypt=function(t){try{return B(this.getKey().encrypt(t))}catch(t){return!1}},it.prototype.getKey=function(t){if(!this.key){if(this.key=new et,t&&"[object Function]"==={}.toString.call(t))return void this.key.generateAsync(this.default_key_size,this.default_public_exponent,t);this.key.generate(this.default_key_size,this.default_public_exponent)}return this.key},it.prototype.getPrivateKey=function(){return this.getKey().getPrivateKey()},it.prototype.getPrivateKeyB64=function(){return this.getKey().getPrivateBaseKeyB64()},it.prototype.getPublicKey=function(){return this.getKey().getPublicKey()},it.prototype.getPublicKeyB64=function(){return this.getKey().getPublicBaseKeyB64()},it.version="2.3.1",module.exports=it; 
 			}); 
		define("libs/mmuxwxappdevkit/utils/paramChecker.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return"boolean"==typeof t}function n(t){return"string"==typeof t}function o(t){return Array.isArray(t)}Object.defineProperty(exports,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};exports.default={isNumer:function(t){return"number"==typeof t&&!Number.isNaN(t)},isBool:t,isBoolean:function(n){return t(n)},isString:n,isStringAndNotEmpty:function(t){return n(t)&&t.length},isArray:o,isArrayAndNotEmpty:function(t){return o(t)&&t.length},isObject:function(t){return"object"===(void 0===t?"undefined":r(t))&&null!==t}}; 
 			}); 
		define("libs/mmuxwxappdevkit/utils/querystringify.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function n(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch(n){return null}}var e,r=Object.prototype.hasOwnProperty;exports.stringify=function(n,t){var o,l,u=[];"string"!=typeof(t=t||"")&&(t="?");for(l in n)if(r.call(n,l)){if((o=n[l])||null!==o&&o!==e&&!isNaN(o)||(o=""),l=encodeURIComponent(l),o=encodeURIComponent(o),null===l||null===o)continue;u.push(l+"="+o)}return u.length?t+u.join("&"):""},exports.parse=function(e){for(var r,t=/([^=?&]+)=?([^&]*)/g,o={};r=t.exec(e);){var l=n(r[1]),u=n(r[2]);null===l||null===u||l in o||(o[l]=u)}return o}; 
 			}); 
		define("libs/mmuxwxappdevkit/utils/requires-port.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}; 
 			}); 
		define("libs/mmuxwxappdevkit/utils/toast.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var i=require("../core/api.js");exports.default={showErrTips:function(o){i.hideLoading(),i.showToast({title:o||"发生错误",image:"/assets/icon-error.png",duration:1500})},showSuccessTips:function(o){i.hideLoading(),i.showToast({title:o||"OK",icon:"success",duration:1500})},showLoading:function(){i.showLoading({title:"请稍候...",mask:!0})},hideLoading:function(){i.hideLoading()}}; 
 			}); 
		define("libs/mmuxwxappdevkit/utils/url-parse.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return(e||"").toString().replace(p,"")}function o(e){var o,t,r=(o="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}).location||{},a={},i=void 0===(e=e||r)?"undefined":n(e);if("blob:"===e.protocol)a=new s(unescape(e.pathname),{});else if("string"===i){a=new s(e,{});for(t in c)delete a[t]}else if("object"===i){for(t in e)t in c||(a[t]=e[t]);void 0===a.slashes&&(a.slashes=l.test(e.href))}return a}function t(o){o=e(o);var t=u.exec(o);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function r(e,o){if(""===e)return o;for(var t=(o||"/").split("/").slice(0,-1).concat(e.split("/")),r=t.length,s=t[r-1],n=!1,a=0;r--;)"."===t[r]?t.splice(r,1):".."===t[r]?(t.splice(r,1),a++):a&&(0===r&&(n=!0),t.splice(r,1),a--);return n&&t.unshift(""),"."!==s&&".."!==s||t.push(""),t.join("/")}function s(l,u,p){if(l=e(l),!(this instanceof s))return new s(l,u,p);var c,f,y,m,d,b,g=h.slice(),v=void 0===u?"undefined":n(u),w=this,x=0;for("object"!==v&&"string"!==v&&(p=u,u=null),p&&"function"!=typeof p&&(p=i.parse),u=o(u),c=!(f=t(l||"")).protocol&&!f.slashes,w.slashes=f.slashes||c&&u.slashes,w.protocol=f.protocol||u.protocol||"",l=f.rest,f.slashes||(g[3]=[/(.*)/,"pathname"]);x<g.length;x++)"function"!=typeof(m=g[x])?(y=m[0],b=m[1],y!==y?w[b]=l:"string"==typeof y?~(d=l.indexOf(y))&&("number"==typeof m[2]?(w[b]=l.slice(0,d),l=l.slice(d+m[2])):(w[b]=l.slice(d),l=l.slice(0,d))):(d=y.exec(l))&&(w[b]=d[1],l=l.slice(0,d.index)),w[b]=w[b]||(c&&m[3]?u[b]||"":""),m[4]&&(w[b]=w[b].toLowerCase())):l=m(l);p&&(w.query=p(w.query)),c&&u.slashes&&"/"!==w.pathname.charAt(0)&&(""!==w.pathname||""!==u.pathname)&&(w.pathname=r(w.pathname,u.pathname)),a(w.port,w.protocol)||(w.host=w.hostname,w.port=""),w.username=w.password="",w.auth&&(m=w.auth.split(":"),w.username=m[0]||"",w.password=m[1]||""),w.origin=w.protocol&&w.host&&"file:"!==w.protocol?w.protocol+"//"+w.host:"null",w.href=w.toString()}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=require("./requires-port.js"),i=require("./querystringify.js"),l=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,u=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,p=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+"),h=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],c={hash:1,query:1};s.prototype={set:function(e,o,t){var r=this;switch(e){case"query":"string"==typeof o&&o.length&&(o=(t||i.parse)(o)),r[e]=o;break;case"port":r[e]=o,a(o,r.protocol)?o&&(r.host=r.hostname+":"+o):(r.host=r.hostname,r[e]="");break;case"hostname":r[e]=o,r.port&&(o+=":"+r.port),r.host=o;break;case"host":r[e]=o,/:\d+$/.test(o)?(o=o.split(":"),r.port=o.pop(),r.hostname=o.join(":")):(r.hostname=o,r.port="");break;case"protocol":r.protocol=o.toLowerCase(),r.slashes=!t;break;case"pathname":case"hash":if(o){var s="pathname"===e?"/":"#";r[e]=o.charAt(0)!==s?s+o:o}else r[e]=o;break;default:r[e]=o}for(var n=0;n<h.length;n++){var l=h[n];l[4]&&(r[l[1]]=r[l[1]].toLowerCase())}return r.origin=r.protocol&&r.host&&"file:"!==r.protocol?r.protocol+"//"+r.host:"null",r.href=r.toString(),r},toString:function(e){e&&"function"==typeof e||(e=i.stringify);var o,t=this,r=t.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var s=r+(t.slashes?"//":"");return t.username&&(s+=t.username,t.password&&(s+=":"+t.password),s+="@"),s+=t.host+t.pathname,(o="object"===n(t.query)?e(t.query):t.query)&&(s+="?"!==o.charAt(0)?"?"+o:o),t.hash&&(s+=t.hash),s}},s.extractProtocol=t,s.location=o,s.trimLeft=e,s.qs=i,module.exports=s; 
 			}); 
		define("libs/mmuxwxappdevkit/utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var r=function(){function r(r,n){var t=[],e=!0,o=!1,u=void 0;try{for(var i,a=r[Symbol.iterator]();!(e=(i=a.next()).done)&&(t.push(i.value),!n||t.length!==n);e=!0);}catch(r){o=!0,u=r}finally{try{!e&&a.return&&a.return()}finally{if(o)throw u}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return r(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=function(r){return(r=r.toString())[1]?r:"0"+r};module.exports={formatTime:function(r){var t=r.getFullYear(),e=r.getMonth()+1,o=r.getDate(),u=r.getHours(),i=r.getMinutes(),a=r.getSeconds();return[t,e,o].map(n).join("/")+" "+[u,i,a].map(n).join(":")},queryStringFromUrl:function(r){var n=r.split("?");return 2!=n.length?"":n[1]},getQueryObject:function(n){return n?(/^[?#]/.test(n)?n.slice(1):n).split("&").reduce(function(n,t){var e=t.split("="),o=r(e,2),u=o[0],i=o[1];return n[u]=i?decodeURIComponent(i.replace(/\+/g," ")):"",n},{}):{}},appendQueryObject:function(r,n){if(r=r||"",!n)return r;var t=-1===r.indexOf("?")?"?":"&";return Object.keys(n).forEach(function(e,o){r+=(0===o?t:"&")+e+"="+n[e]}),r},genKVLogString:function(r){console.log("report: ",JSON.parse(decodeURIComponent(r.actionLog)));var n,t="";for(n in r)0!==t.length&&(t+=","),t+=r[n];return t},getCurrentPage:function(){var r=getCurrentPages();return r[r.length-1]},isLocalResource:function(r){return r&&r.indexOf("://")<0},compareSDKVersion:function(r,n){r=r.split("."),n=n.split(".");for(var t=Math.max(r.length,n.length);r.length<t;)r.push("0");for(;n.length<t;)n.push("0");for(var e=0;e<t;e++){var o=parseInt(r[e]),u=parseInt(n[e]);if(o>u)return 1;if(o<u)return-1}return 0},encodeUTF8:function(r){var n,t,e,o=[];for(n=0;n<r.length;n++)(t=r.charCodeAt(n))<128?o.push(t):t<2048?o.push(192+(t>>6&31),128+(63&t)):((e=55296^t)>>10==0?(t=(e<<10)+(56320^r.charCodeAt(++n))+65536,o.push(240+(t>>18&7),128+(t>>12&63))):o.push(224+(t>>12&15)),o.push(128+(t>>6&63),128+(63&t)));return o},sha1:function(r){var n,t,e=new Uint8Array(this.encodeUTF8(r)),o=16+(e.length+8>>>6<<4);for((r=new Uint8Array(o<<2)).set(new Uint8Array(e.buffer)),r=new Uint32Array(r.buffer),t=new DataView(r.buffer),s=0;s<o;s++)r[s]=t.getUint32(s<<2);r[e.length>>2]|=128<<24-8*(3&e.length),r[o-1]=e.length<<3;var u=[],i=[function(){return c[1]&c[2]|~c[1]&c[3]},function(){return c[1]^c[2]^c[3]},function(){return c[1]&c[2]|c[1]&c[3]|c[2]&c[3]},function(){return c[1]^c[2]^c[3]}],a=function(r,n){return r<<n|r>>>32-n},f=[1518500249,1859775393,-1894007588,-899497514],c=[1732584193,-271733879,null,null,-1009589776];for(c[2]=~c[0],c[3]=~c[1],s=0;s<r.length;s+=16){var l=c.slice(0);for(n=0;n<80;n++)u[n]=n<16?r[s+n]:a(u[n-3]^u[n-8]^u[n-14]^u[n-16],1),t=a(c[0],5)+i[n/20|0]()+c[4]+u[n]+f[n/20|0]|0,c[1]=a(c[1],30),c.pop(),c.unshift(t);for(n=0;n<5;n++)c[n]=c[n]+l[n]|0}t=new DataView(new Uint32Array(c).buffer);for(var s=0;s<5;s++)c[s]=t.getUint32(s<<2);return Array.prototype.map.call(new Uint8Array(new Uint32Array(c).buffer),function(r){return(r<16?"0":"")+r.toString(16)}).join("")}}; 
 			}); 
		define("libs/mmuxwxappdevkit/widget/exposure-block/model/Checker.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=new Set;module.exports={add:function(n){if(n&&"onCheck"in n){var o=e.size<=0;e.add(n),o&&this.polling()}else console.warning("Invalid obj! No 'onCheck' callback.")},polling:function(){if(!(e.size<=0)){var n=this;setTimeout(function(){var o=!0,i=!1,t=void 0;try{for(var l,r=e[Symbol.iterator]();!(o=(l=r.next()).done);o=!0){var a=l.value;a&&a.onCheck&&!1!==a.onCheck.apply(a,n.remove)||e.delete(a)}}catch(e){i=!0,t=e}finally{try{!o&&r.return&&r.return()}finally{if(i)throw t}}n.polling()},500)}},remove:function(n){e.delete(n)}}; 
 			}); 
		define("libs/westore/create.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){Object.keys(e).forEach(function(n){t.hasOwnProperty(n)&&(e[n]=t[n])})}function e(t){var e={};return n(t,e),e}function n(t,e){Object.keys(t).forEach(function(n){e[n]=!0;var r=Object.prototype.toString.call(t[n]);r===A?a(t[n],n,e):r===x&&o(t[n],n,e)})}function a(t,e,n){Object.keys(t).forEach(function(r){n[e+"."+r]=!0,delete n[e];var i=Object.prototype.toString.call(t[r]);i===A?a(t[r],e+"."+r,n):i===x&&o(t[r],e+"."+r,n)})}function o(t,e,n){t.forEach(function(t,r){n[e+"["+r+"]"]=!0,delete n[e];var i=Object.prototype.toString.call(t);i===A?a(t,e+"["+r+"]",n):i===x&&o(t,e+"["+r+"]",n)})}function r(t){t.update=function(t){var e=this.store,n=this;return new Promise(function(a){if(t)for(var o in t)p(e.data,o,t[o]);var r=(0,J.default)(e.data,e.originData),i=[];if(""==Object.keys(r)[0]&&(r=r[""]),Object.keys(r).length>0){i.push(new Promise(function(t){return n.setData(r,t)})),e.onChange&&e.onChange(r);for(var c in r)p(e.originData,c,"object"===w(r[c])?JSON.parse(JSON.stringify(r[c])):r[c])}Promise.all(i).then(function(t){return a(r)})})}}function i(t){wx.cloud.init(),_.db=wx.cloud.database({env:t})}function c(t){return new Promise(function(e,n){u(s(t),e)})}function u(t,e){var n=O(t);Object.keys(n).forEach(function(t){var a=t.split("-"),o=_.data[a[0]][parseInt(a[1])]._id,r=n[t];_.methods&&_.methods[a[0]]&&Object.keys(_.methods[a[0]]).forEach(function(t){r.hasOwnProperty(t)&&delete r[t]}),_.db.collection(a[0]).doc(o).update({data:r}).then(function(t){e(t)})})}function s(t){return new Promise(function(e){if(t)for(var n in t)p(_.data,n,t[n]);var a=(0,J.default)(_.data,N);""==Object.keys(a)[0]&&(a=a[""]);var o=f(a),r=[];if(Object.keys(a).length>0){for(var i in _.instances)_.instances[i].forEach(function(t){if(o||_.updateAll||t._updatePath){var e=l(a,t._updatePath);if(e.length){var n={};for(var i in a)e.includes(i)&&(n[i]="object"===w(a[i])?JSON.parse(JSON.stringify(a[i])):a[i]);r.push(new Promise(function(e){t.setData.call(t,n,e)}))}}});_.onChange&&_.onChange(a);for(var c in a)p(N,c,"object"===w(a[c])?JSON.parse(JSON.stringify(a[c])):a[c])}Promise.all(r).then(function(t){e(a)})})}function f(t){if(!_.globalData)return!1;for(var e in t){if(_.globalData.indexOf(e)>-1)return!0;for(var n=0,a=_.globalData.length;n<a;n++)if(d(e,_.globalData[n]))return!0}return!1}function l(t,e){var n=[];for(var a in t){e[a]&&n.push(a);for(var o in e)d(a,o)&&n.push(a)}return n}function d(t,e){if(0===t.indexOf(e)){var n=t.substr(e.length,1);if("["===n||"."===n)return!0}return!1}function h(t){t.update=s}function p(t,e,n){for(var a=e.replace(/]/g,"").replace(/\[/g,".").split("."),o=t,r=0,i=a.length;r<i;r++)r===i-1?o[a[r]]=n:o=o[a[r]]}function b(t,e){return new Promise(function(n){_.db.collection(t).where(e||{}).get().then(function(e){g(e,t),n(e)})})}function g(t,e){t.data.forEach(function(t){var n=_.methods[e];n&&Object.keys(n).forEach(function(e){Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e].call(t)},set:function(){}})})})}function y(t,e){return _.db.collection(t).add({data:e})}function v(t,e){return _.db.collection(t).doc(e).remove()}function O(t){var e={};return Object.keys(t).forEach(function(n){j(n,t[n],e)}),e}function j(t,e,n){for(var a=t.replace(/]/g,"").replace(/\[/g,".").split("."),o={},r=null,i=a.length,c=2;c<i;c++)if(3===i)o[a[c]]=e;else if(c===i-1)r[a[c]]=e;else{var u=r;r={},2===c?o[a[c]]=r:u[a[c]]=r}var s=a[0]+"-"+a[1];n[s]=Object.assign(n[s]||{},o)}function m(){_.method=function(t,e){C[t]=e;var n=P(t);Object.defineProperty(n.obj,n.key,{enumerable:!0,get:function(){return C[t].call(_.data)},set:function(){console.warn("Please using store.method to set method prop of data!")}})}}function P(t){var e=t.replace(/]/g,"").replace(/\[/g,".").split("."),n=e.length;if(n>1){for(var a=_.data[e[0]],o=1;o<n-1;o++)a=a[e[o]];return{obj:a,key:e[n-1]}}return{obj:_.data,key:e[0]}}function k(t){Object.keys(t).forEach(function(e){var n=t[e],a=D(n);a==L?E(e,n):a==A?Object.keys(n).forEach(function(t){S(n[t],e+"."+t)}):a==x&&n.forEach(function(t,n){S(t,e+"["+n+"]")})})}function S(t,e){var n=D(t);n==L?E(e,t):n==A?Object.keys(t).forEach(function(n){S(t[n],e+"."+n)}):n==x&&t.forEach(function(t,n){S(t,e+"["+n+"]")})}function E(t,e){var n=P(t);C[t]=e,Object.defineProperty(n.obj,n.key,{enumerable:!0,get:function(){return C[t].call(_.data)},set:function(){console.warn("Please using store.method to set method prop of data!")}})}function D(t){return Object.prototype.toString.call(t)}Object.defineProperty(exports,"__esModule",{value:!0});var w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};exports.default=function(n,a){var o=null;if(2===arguments.length){N||(N=JSON.parse(JSON.stringify(n.data)),_=n,n.instances={},n.update=s,n.push=c,n.pull=b,n.add=y,n.remove=v,n.originData=N,n.env&&i(n.env),m()),getApp().globalData&&(getApp().globalData.store=n);var u=a.onLoad;k(n.data),a.data&&Object.keys(a.data).length>0&&(o=e(a.data),t(n.data,a.data)),a.onLoad=function(e){this.store=n,this._updatePath=o,h(this),n.instances[this.route]=[],n.instances[this.route].push(this),u&&u.call(this,e),t(n.data,this.data),this.setData(this.data)};var f=a.onUnload;a.onUnload=function(){f&&f.call(this),n.instances[this.route]=[]},Page(a)}else{var l=n.ready,d=n.pure,p=e(n.data);n.ready=function(){d?(this.store={data:n.data||{}},this.store.originData=n.data?JSON.parse(JSON.stringify(n.data)):{},k(n.data||{}),r(this)):(this.page=getCurrentPages()[getCurrentPages().length-1],this.store=this.page.store,this._updatePath=p,t(this.store.data,n.data),k(n.data||{}),this.setData.call(this,this.store.data),h(this),this.store.instances[this.page.route].push(this)),l&&l.call(this)},Component(n)}};var J=function(t){return t&&t.__esModule?t:{default:t}}(require("./diff")),N=null,_=null,C={},x="[object Array]",A="[object Object]",L="[object Function]"; 
 			}); 
		define("libs/westore/diff.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(t,n){if(t!==n){var i=r(t),o=r(n);if(i==f&&o==f){if(Object.keys(t).length>=Object.keys(n).length)for(var l in n){var s=t[l];void 0===s?t[l]=null:e(s,n[l])}}else i==c&&o==c&&t.length>=n.length&&n.forEach(function(n,r){e(t[r],n)})}}function t(e,i,o,l){if(e!==i){var s=r(e),u=r(i);if(s==f)if(u!=f||Object.keys(e).length<Object.keys(i).length&&""!==o)n(l,o,e);else{for(var a in e)!function(s){var u=e[s],a=i[s],h=r(u),g=r(a);if(h!=c&&h!=f)u!=i[s]&&n(l,(""==o?"":o+".")+s,u);else if(h==c)g!=c?n(l,(""==o?"":o+".")+s,u):u.length<a.length?n(l,(""==o?"":o+".")+s,u):u.forEach(function(e,n){t(e,a[n],(""==o?"":o+".")+s+"["+n+"]",l)});else if(h==f)if(g!=f||Object.keys(u).length<Object.keys(a).length)n(l,(""==o?"":o+".")+s,u);else for(var b in u)t(u[b],a[b],(""==o?"":o+".")+s+"."+b,l)}(a)}else s==c?u!=c?n(l,o,e):e.length<i.length?n(l,o,e):e.forEach(function(e,n){t(e,i[n],o+"["+n+"]",l)}):n(l,o,e)}}function n(e,t,n){r(n)!=i&&(e[t]=n)}function r(e){return Object.prototype.toString.call(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(n,r){var c={};return e(n,r),t(n,r,"",c),c};var c="[object Array]",f="[object Object]",i="[object Function]"; 
 			}); 
		define("live/live-mgr.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},o=require("../core/network"),i=require("../utils/util");module.exports={GetRooms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.request({cgi:o.cgiSet.liveGetRoom,params:{group_id:e.group_id},success:e.success,fail:e.fail,complete:e.complete})},getAudienceNum:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.request({cgi:o.cgiSet.liveGetAudienceNum,params:{room_id:e.room_id},success:e.success,fail:e.fail,complete:e.complete})},createRoom:function(){var i=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};wx.showLoading(),o.request({cgi:o.cgiSet.liveCreateRoom,params:{group_id:t.group_id,room_name:t.room_name,etime:String(parseInt(Date.now()/1e3)+3600)},success:function(o){o.infos&&o.infos[0]&&i.enterRoom(e({},o.infos[0],{isActor:!0})),wx.hideLoading(),"function"==typeof t.success&&t.success(o)},fail:function(e){wx.hideLoading(),wx.showModal({content:e.errmsg||"创建失败",showCancel:!1}),"function"==typeof t.fail&&t.fail(e)},complete:t.complete})},deleteRoom:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};wx.showLoading(),o.request({cgi:o.cgiSet.liveDelRoom,params:{room_id:e.room_id},success:function(o){wx.hideLoading(),"function"==typeof e.success&&e.success(o)},fail:function(o){wx.hideLoading(),wx.showModal({content:o.errmsg||"删除失败",showCancel:!1}),"function"==typeof e.fail&&e.fail(o)},complete:e.complete})},onEnterRoom:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.request({cgi:o.cgiSet.liveEnterRoom,params:{room_id:e.room_id},success:e.success,fail:e.fail,complete:e.complete})},onExitRoom:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.request({cgi:o.cgiSet.liveExitRoom,params:{room_id:e.room_id},success:e.success,fail:e.fail,complete:e.complete})},enterRoom:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.room_info||{},t=e.user_info||{},c={roomdId:o.room_id,roomName:o.room_name,isActor:e.isActor||!1,liveUrl:e.isActor?o.push_url:o.play_url,userInfo:{openId:t.openid,nickName:t.NickName,headImgUrl:t.HeadImgUrl,sex:t.Sex}};i.navigateTo({url:"/pages/live/live?liveOption="+encodeURIComponent(JSON.stringify(c))})}}; 
 			}); 
		define("models/CVProcessor.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../core/network.js"),t=require("../core/sys.js"),n=require("../core/eventcenter.js"),o=new Map;exports.default={handle:function(i){var s=i.path,r=i.uuid;return new Promise(function(e,t){console.info("UGC - Will Compresss UUID "+r+" PATH "+s),wx.compressImage?wx.compressImage({src:s,quality:40,success:function(t){console.info("UGC - Image Compress Succ "+JSON.stringify(t)),e(t&&t.tempFilePath?t.tempFilePath:s)},fail:function(t){console.info("UGC - Image Compress Fail "+JSON.stringify(t)),e(s)}}):(console.info("UGC - Compress Not Support"),e(s))}).then(function(i){return console.info("UGC - Will Fetch Result PATH "+i),new Promise(function(n,o){wx.uploadFile({url:"https://wxa.weixin.qq.com/"+e.cgiSet.ugcObjectRetrieval,filePath:i,name:"image0",header:{"X-WECHAT-UIN":e._ticket.route_header,"X-WX-ClientVersion":"0x"+Number(t.wechatVersion()).toString(16)},formData:{session_key:e._ticket.session_key,imagecount:1,uuid:r},success:function(e){console.info("UGC - Fetch Result Succ UUID "+r+" RESP "+JSON.stringify(e));var t=JSON.safeParse(e.data);t.resp?n(t.resp):o()},fail:function(e){console.info("UGC - Fetch Result Fail UUID "+r+" ERR "+JSON.stringify(e)),o()}})}).then(function(e){console.info("UGC - Emit Event Center UUID "+r),o.set(r,e),n.emit("onCVProcessComplete",{uuid:r,data:e})}).catch(function(){console.info("UGC - Emit Event Center UUID "+r),o.set(r,{}),n.emit("onCVProcessComplete",{uuid:r,data:{}})})})},getCache:function(e){return o.get(e)},clearCache:function(){o.clear()}}; 
 			}); 
		define("models/FriendRecommendModel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),r=(require("../core/network.js"),require("./getGroupFeedList.js")),t=null,u=[],i=function(){function i(){e(this,i)}return n(i,null,[{key:"get",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.success||(e.success=function(){}),e.fail||(e.fail=function(){}),u.length)return e.success(u),0;t||(t=r({count:20,disableCache:!0,group_id:"13104374716925600"})),t.reload({seq:"",success:function(n){var r=n.self_openid,t=n.feed.map(function(e){return e.info.openid}).filter(function(e){return e!==r}),i=new Set;t.forEach(function(e){i.add(e)});var o=n.userattr;t=Array.from(i).slice(0,5).map(function(e){return o.filter(function(n){return n.openid===e}).map(function(e){return{nickname:e.nickname,headImgUrl:e.headimgurl+"/96"}})[0]}),u=t,e.success(t)}})}}]),i}();module.exports=i; 
 			}); 
		define("models/addOpenProduct.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../core/network.js");module.exports=function(c){e.request({cgi:e.cgiSet.addopenproduct,params:{appid:c.appid,product:{item_code:c.item_code,sku_info:{sku_id:0},source:c.source},from_scene:c.from_scene||2,ignore_auth:!0},success:function(e){"function"==typeof c.success&&c.success(e)},fail:function(e){"function"==typeof c.fail&&c.fail(e)},complete:function(){"function"==typeof c.complete&&c.complete()}})}; 
 			}); 
		define("models/applyComment.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=require("../core/network.js");module.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};wx.showLoading(),o.request({cgi:o.cgiSet.applyComment,params:{group_id:e.group_id,apply_reason:e.apply_reason},success:function(o){wx.hideLoading(),wx.showToast({title:"已向圈主发起申请"}),"function"==typeof e.success&&e.success(o)},fail:function(o){wx.hideLoading(),wx.showModal({content:o.errmsg||"申请失败",showCancel:!1,confirmText:"我知道了"}),"function"==typeof e.fail&&e.fail(o)},complete:function(){"function"==typeof e.complete&&e.complete()}})}; 
 			}); 
		define("models/applyRecommend.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../core/network.js");module.exports=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};wx.showLoading(),e.request({cgi:e.cgiSet.applyRecommend,params:{group_id:o.group_id,apply_reason:o.apply_reason},success:function(e){wx.hideLoading(),wx.showToast({title:"已向圈主发起申请"}),"function"==typeof o.success&&o.success(e)},fail:function(e){wx.hideLoading(),wx.showModal({content:e.errmsg||"申请失败",showCancel:!1}),"function"==typeof o.fail&&o.fail(e)},complete:function(){"function"==typeof o.complete&&o.complete()}})}; 
 			}); 
		define("models/batchGet.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../libs/mmuxwxappdevkit/foundation/base/model.js")({cgi:require("../libs/mmuxwxappdevkit/core/network.js").cgiSet.batchget,useCache:!1,methods:{get:function(e){if(e&&e.keys){var i=this;i.load({params:{collection:e.collection||"MMUxEntryRedDotInfo",key_list:e.keys},loading:e&&e.loading,success:function(){e&&e.success(i.data.doc_list)},fail:e.fail})}}}});module.exports=e; 
 			}); 
		define("models/batchGetKfStatus.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),t=require("../libs/mmuxwxappdevkit/core/network.js"),a=require("../core/eventcenter.js"),i=e({cgi:t.cgiSet.batchGetSellerOnlineInfo,useCache:!1,methods:{get:function(e){var t=(e=e||{}).params||{},i=this;this.load({params:t,loading:e.loading,success:function(){var t=Object.assign({},i.data),s=getApp().globalData.dicBizUin2kfStatus;t.status.forEach(function(e){s[e.biz_uin]=e}),e&&e.success(t),a.emit(a.Event.onKfStatusUpdate)},fail:e.fail,complete:e.complete})}}});module.exports=i; 
 			}); 
		define("models/batchSet.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=require("../libs/mmuxwxappdevkit/foundation/base/model.js")({cgi:require("../libs/mmuxwxappdevkit/core/network.js").cgiSet.batchset,useCache:!1,methods:{set:function(o){if(o&&"object"===t(o.data)){var e=Object.keys(o.data).map(function(t){return{key:t,buff:"string"==typeof o.data[t]?o.data[t]:JSON.stringify(o.data[t])}});this.load({params:{collection:o.collection||"MMUxEntryRedDotInfo",doc_list:e},loading:o&&o.loading,success:o.success,fail:o.fail})}}}});module.exports=o; 
 			}); 
		define("models/clearFavorReddot.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var s=require("./batchSet.js"),t={set:function(t){s.set({data:{ShoppingListEntryRedDotInfo:JSON.stringify({is_show:!1})},loading:t&&t.loading,success:t.success,fail:t.fail})}};module.exports=t; 
 			}); 
		define("models/deleteOpenProduct.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../core/network.js");module.exports=function(c){e.request({cgi:e.cgiSet.deleteopenproduct,params:{item_code:c.item_code,sku_id:c.sku_id,source:c.source,appid:c.appid},success:c.success,fail:c.fail,complete:c.complete})}; 
 			}); 
		define("models/deletePermission.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../core/network.js");module.exports=function(t){e.request({cgi:e.cgiSet.deletePermission,params:{appid_list:t.appid_list},success:function(e){"function"==typeof t.success&&t.success(e)},fail:function(e){"function"==typeof t.fail&&t.fail(e)},complete:function(){"function"==typeof t.complete&&t.complete()}})}; 
 			}); 
		define("models/doForward.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../core/network.js");module.exports=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.request({cgi:o.action?e.cgiSet.doForward:e.cgiSet.undoForward,params:o.params,success:function(e){"function"==typeof o.success&&o.success(e)},fail:function(e){"function"==typeof o.fail&&o.fail(e)},complete:function(){"function"==typeof o.complete&&o.complete()}})}; 
 			}); 
		define("models/doGroupFeedLike.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../core/network.js");module.exports=function(o){e.request({cgi:o.action?e.cgiSet.doGroupFeedLike:e.cgiSet.undoGroupFeedLike,params:{group_id:o.group_id,key:o.key,like:o.action?o.like:void 0},success:function(e){"function"==typeof o.success&&o.success(e)},fail:function(e){"function"==typeof o.fail&&o.fail(e)},complete:function(){"function"==typeof o.complete&&o.complete()}})}; 
 			}); 
		define("models/doGroupRecommend.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),i=require("../core/network.js"),e=require("../models/groupHelper"),t=o({cgi:i.cgiSet.doGroupRecommend,methods:{do:function(o){var i=this;(o=o||{}).group_id?(e.remove({group_id:o.group_id}),e.get({group_id:o.group_id,success:function(e){e.can_favor?i.publish(o):("function"==typeof o.fail&&o.fail({join:!e.in_group,open_join_confirm:e.open_join_confirm,apply:e.favor_need_apply,full:e.recommend_privilege_full,group_id:o.group_id}),"function"==typeof o.complete&&o.complete())},fail:function(i){"function"==typeof o.fail&&o.fail(i),"function"==typeof o.complete&&o.complete()}})):this.publish(o)},publish:function(o){var i=this,e={appid:o.appid,product_id:o.id,source:o.source,from_type:o.from_type,group_id:o.group_id||void 0,ext_info:{comment:o.comment||"",item_ext_info:o.photos||[],article_list:o.article_list||[],video_url:o.video_url,videoextinfo:o.videoextinfo,ugc_info:o.ugc_info},goods:o.goods||[]};this.load({params:e,loading:o.loading,success:function(){o.success&&o.success(i.data)},fail:o.fail,complete:o.complete})}}});module.exports=t; 
 			}); 
		define("models/doGroupRecommendForH5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),e=require("../core/network.js"),i=require("../models/groupHelper"),t=o({cgi:e.cgiSet.doGroupRecommend,methods:{do:function(o){var e=this;(o=o||{}).group_id?(i.remove({group_id:o.group_id}),i.get({group_id:o.group_id,success:function(i){i.can_favor?e.publish(o):("function"==typeof o.fail&&o.fail({join:!i.in_group,open_join_confirm:i.open_join_confirm,apply:i.favor_need_apply,full:i.recommend_privilege_full,group_id:o.group_id}),"function"==typeof o.complete&&o.complete())},fail:function(e){"function"==typeof o.fail&&o.fail(e),"function"==typeof o.complete&&o.complete()}})):this.publish(o)},publish:function(o){var e=this,i={appid:o.appid,product_id:o.id,source:o.source,from_type:o.from_type,group_id:o.group_id||void 0,ext_info:{comment:o.comment||"",item_ext_info:o.photos||[],article_list:o.article_list||[],video_url:o.video_url,videoextinfo:o.videoextinfo,ugc_info:o.ugc_info},goods:o.goods||[]},t={js_auth_check:o.js_auth_check||{}};console.info("baseReqParams.js_auth_check",t),this.load({params:i,baseReqParams:t,loading:o.loading,success:function(){o.success&&o.success(e.data)},fail:o.fail,complete:o.complete})}},header:{"H5-JS-AUTH-CHECK":1}});module.exports=t; 
 			}); 
		define("models/doOrderLike.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var i=require("../libs/mmuxwxappdevkit/foundation/base/model.js")({cgi:require("../core/network.js").cgiSet.orderdofavor,methods:{do:function(i){var e=this,o={appid:(i=i||{}).appid,product_id:i.id,source:i.source,comment:i.comment||void 0,action:i.action,is_not_favor:i.is_not_favor||!1,encrypt_visible_friend_list:i.encrypt_visible_friend_list||void 0,ext_info:{item_ext_info:i.photos||[],comment_id:i.comment_id||void 0,article_list:i.article_list||[]}};this.load({params:o,loading:i.loading,success:function(){i.success&&i.success(e.data)},fail:i.fail,complete:i.complete})}}});module.exports=i; 
 			}); 
		define("models/doOrderLikeByBiz.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var i=require("../libs/mmuxwxappdevkit/foundation/base/model.js")({cgi:require("../core/network.js").cgiSet.doFavorByBiz,methods:{do:function(i){var e=this,o={action:(i=i||{}).action,appid:i.appid,product_id:i.id,source:i.source,comment:i.comment||void 0,biz_appid:i.bizAppId,share_biz_uin:i.bizUin};this.load({params:o,loading:i.loading,success:function(){i.success&&i.success(e.data)},fail:i.fail,complete:i.complete})}}});module.exports=i; 
 			}); 
		define("models/doOrderLikeIn3rd.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../libs/mmuxwxappdevkit/foundation/base/model.js")({cgi:require("../core/network.js").cgiSet.orderdofavorIn3rd,methods:{do:function(e){var i=this,o={appid:(e=e||{}).appid,product_id:e.id,source:e.source,comment:e.comment||void 0,action:e.action,is_favor:e.is_favor,encrypt_visible_friend_list:e.encrypt_visible_friend_list||void 0,ext_info:{item_ext_info:e.photos||[],comment_id:e.comment_id||void 0,article_list:e.article_list||[]},goods:e.goods||[]},s={js_auth_check:e.js_auth_check||{}};this.load({params:o,baseReqParams:s,loading:e.loading,success:function(){e.success&&e.success(i.data)},fail:e.fail,complete:e.complete})}},header:{"H5-JS-AUTH-CHECK":1}});module.exports=e; 
 			}); 
		define("models/doReply.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),o=require("../core/network.js"),i=require("../models/groupHelper"),p=function(e){var i={group_id:e.params.group_id,appid:e.params.appid,product_id:e.params.product_id,source:e.params.source};e.action?i.ext_info=e.params.ext_info:(i.father_comment_id=e.params.father_comment_id,i.comment_id=e.params.comment_id),o.request({cgi:e.action?o.cgiSet.doGroupFeedReply:o.cgiSet.undoGroupFeedReply,params:i,success:e.success,fail:e.fail,complete:e.complete})},a=function(e){i.get({group_id:e.params.group_id,success:function(o){o.can_reply?p(e):("function"==typeof e.fail&&e.fail({join:!o.in_group,open_join_confirm:o.open_join_confirm,apply:o.reply_need_apply,group_id:e.params.group_id}),"function"==typeof e.complete&&e.complete())},fail:function(o){"function"==typeof e.fail&&e.fail(o),"function"==typeof e.complete&&e.complete()}})},r=e({cgi:o.cgiSet.doreply,methods:{do:function(e){if((e=e||{}).params.group_id&&"13104374716925600"!=e.params.group_id||e.params.isGroup)e.params.group_id&&"13104374716925600"!=e.params.group_id&&e.action?a(e):p(e);else{var o=e.params||{},i=this;this.load({params:o,loading:e.loading,success:function(){e.success&&e.success(i.data)},fail:e.fail,complete:e.complete})}}}});module.exports=r; 
 			}); 
		define("models/doVideoLike.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var i=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),o=require("../core/network.js"),e=require("./doGroupRecommend.js"),d=i({cgi:o.cgiSet.dofavorvideo,methods:{do:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(i.group_id&&"13104374716925600"!=i.group_id&&0!=i.group_id)e.do({source:4,action:i.action||0,group_id:i.group_id||void 0,video_url:i.video_url||"",videoextinfo:i.extbuf,ugc_info:i.ugc_info,loading:i.loading,success:i.success,fail:i.fail,complete:i.complete});else{var o={appid:i.appid,product_id:i.id,source:i.source,action:i.action,encrypt_visible_friend_list:i.encrypt_visible_friend_list||void 0,ext_info:{comment_id:i.comment_id,video_url:i.video_url,ugc_info:i.ugc_info,goodstitle:void 0,comment:i.comment}};i.extbuf&&(o.ext_info.videoextinfo=i.extbuf),this.load({params:o,loading:i.loading,success:i.success,fail:i.fail,complete:i.complete})}}}});module.exports=d; 
 			}); 
		define("models/favorReddot.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var s=require("./batchGet.js"),e={reload:function(e){s.get({keys:["ShoppingListEntryRedDotInfo","ShoppingListEntryShowFavorEntry"],loading:e&&e.loading,success:function(s){if(s&&s.length>0){var o=s[0].buff,t=JSON.safeParse(o),r=JSON.safeParse(s[1]&&s[1].buff);e.success&&e.success({show:t&&t.is_show,showFavorEntry:"true"==r})}else e.success&&e.success({show:!1})},fail:e.fail})}};module.exports=e; 
 			}); 
		define("models/getArticleList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function i(){var i=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.isLoading){this.isLoading=!0;var s=Object.assign({last_msgid:0,last_item_idx:0,count:20},e);this.load({params:s,loading:e.loading,success:function(e){i.success&&i.success(i.data,e.isCache)},fail:function(e){i.fail&&i.fail(e)},complete:function(){i.isLoading=!1,i.complete&&i.complete()}})}}var e=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),s=require("../core/network.js");require("../utils/util.js");module.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e({cgi:s.cgiSet.getArticleList,useCache:!1,methods:{loadNext:i,success:t.success,fail:t.fail,complete:t.complete}})}; 
 			}); 
		define("models/getBizList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.isLoading||(this.isLoading=!0,this.load({params:{},loading:i.loading,success:function(i){e.success&&e.success(e.data,i.isCache)},fail:function(i){e.fail&&e.fail(i)},complete:function(){e.isLoading=!1,e.complete&&e.complete()}}))}var i=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),s=require("../core/network.js");require("../utils/util.js");module.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i({cgi:s.cgiSet.getBizList,useCache:!0,methods:{loadNext:e,success:t.success,fail:t.fail,complete:t.complete}})}; 
 			}); 
		define("models/getCategoryBanner.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../libs/mmuxwxappdevkit/foundation/base/model.js");module.exports=function(e){var n=e.cgi;return a({cgi:n,useCache:!1,methods:{get:function(a){var e=this;a=a||{},this.load({params:a.params,loading:a.loading,success:function(n){console.log(n);var t={};e.data&&e.data.category_banner&&e.data.category_banner.banner_item&&e.data.category_banner.banner_item.length&&e.data.category_banner.banner_item.forEach(function(a,e){a.main&&((t=a).activeIdx=e)}),a.success&&a.success({rsp:e.data,activeBanner:t})},fail:a.fail,complete:a.complete})}}})}; 
 			}); 
		define("models/getCommentList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.isLoading||(this.isLoading=!0,this.load({params:i,loading:s,success:function(i){"function"==typeof e.success&&e.success(e.data,i.isCache)},fail:function(i){"function"==typeof e.fail&&e.fail(i)},complete:function(){e.isLoading=!1,"function"==typeof e.complete&&e.complete()}}))}var i=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),s=require("../core/network.js");require("../utils/util.js");module.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i({cgi:s.cgiSet.getProductComment,useCache:!1,props:t.props||{},methods:{loadNext:e,success:t.success,fail:t.fail}})}; 
 			}); 
		define("models/getFavorites.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(!this.isLoading){var t=this,s=Object.assign({offset:0,count:10},e);this.isLoading=!0;var r=this.props.mergeStore;this.load({params:s,loading:e.loading,skipCache:0!==s.offset||e.isClickTab,success:function(e){t.data.offset=s.offset,t.data.count=s.count,t.data.product_list?(t.data.storeList=i(t.data.product_list,r),delete t.data.product_list):t.data.storeList||(t.data.storeList=[]),"function"==typeof t.success&&t.success(t.data,e.isCache)},fail:function(e){"function"==typeof t.fail&&t.fail()},complete:function(){t.isLoading=!1,"function"==typeof t.complete&&t.complete()}})}}function i(e,i){var s=[],r={};return e.forEach(function(e,a){e.onShelf=1===e.status,e.showWeAppIcon=!0,e.version="release",e.update_time=e.update_time||e.create_time,e.sku_id=e.sku_info&&e.sku_info.sku_id||"",e.id=e.src_wxapp_id+"|"+e.item_code+"|"+(e.sku_info&&e.sku_info.sku_id||a),e.image_list[0]=t(e.image_list[0]),3===e.source?e.action="查看":e.action="购买";var n=["CART","WXA","SUBSCRIBE"];if(n[e.source-1]&&(e.type=n[e.source-1]),e.sku_list&&e.sku_list.length){var o=e.sku_list.filter(function(e){return e.price||(e.price=0),1===e.status});o.length?(o=o.sort(function(e,i){return e.price-i.price}),e.minPrice=o[0].price||0,e.maxPrice=o[o.length-1].price||0):e.minPrice=e.maxPrice=0,e.minPrice===e.maxPrice?0===e.minPrice?e.price_str="暂无价格":e.price_str="¥"+e.minPrice:e.price_str="¥"+e.minPrice+" - ¥"+e.maxPrice}else e.price_str="暂无价格",e.minPrice=e.maxPrice=0;var u=void 0;if(e.biz_base_info){var _=e.biz_base_info;u={app_id:e.mch_appid,biz_uin:e.biz_uin,icon_url:e.mch_logo_url,nick_name:e.mch_name,user_name:_.user_name,phone:_.phone,exist:!!_.is_exist_cs}}e.from_scene||(e.from_scene=0);var p=e.brand_info&&e.brand_info.name||e.mch_name||"",d={0:"来自 "+p,1:"来自 "+p,2:c.cartScene[2],3:"来自 "+p,4:c.cartScene[4],5:c.cartScene[5],6:c.cartScene[6]};i&&r[e.src_wxapp_id]?(e.user_update_time>r[e.src_wxapp_id].user_update_time&&(r[e.src_wxapp_id].user_update_time=e.user_update_time),r[e.src_wxapp_id].items.push(e)):s.push(r[e.src_wxapp_id]={items:[e],titleData:{src_wxapp_id:e.src_wxapp_id,src_wxapp_index:e.src_wxapp_index,mch_logo_url:e.brand_info&&e.brand_info.logo||e.mch_logo_url,mch_name:d[e.from_scene]||d[0],storeName:p,express_duration:e.express_duration,express_desc:e.express_desc},user_update_time:e.user_update_time,id:e.src_wxapp_id,unique_id:e.id,bizInfo:u,source:e.source})}),s.forEach(function(e){e.allComment=e.items.map(function(e){return!!e.has_evaluation}).reduce(function(e,i){return e&&i})}),s}function t(e){if(e&&(e.indexOf("shp.qpic.cn")>=0||e.indexOf("bs.qpic.cn")>=0)){var i=e.split("/").reverse()[0];if(i&&isNaN(+i))return e+"/162"}return e}var s=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),r=require("../core/network.js"),c=require("../languagePackage").languagePkg["/portal/cart-list"];module.exports=function(t){return t=Object.assign({useCache:!0,cacheHandler:function(e){var s=Object.assign({},e);return e.product_list?(e.storeList=i(e.product_list,t.mergeStore),delete e.product_list,delete s.product_list):e.storeList=s.storeList=[],e}},t||{}),s({cgi:r.cgiSet.openproduct,props:{mergeStore:t.mergeStore},useCache:t.useCache,cacheHandler:t.cacheHandler,methods:{loadNext:e,success:t.success,fail:t.fail}})}; 
 			}); 
		define("models/getFeedbackReason.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../core/network.js");module.exports=function(t){e.request({cgi:e.cgiSet.getFeedbackReason,params:{type:t.type},success:function(e){"function"==typeof t.success&&t.success(e)},fail:function(e){"function"==typeof t.fail&&t.fail(e)},complete:function(){"function"==typeof t.complete&&t.complete()}})}; 
 			}); 
		define("models/getFriendFavorList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){if(t=t||{},!this.isLoading){var e={};e.isgetvideo=!0,e.offset=this.offset,e.limit=t.limit||o,e.type=t.type,this.props.query&&(e.query=this.props.query,e.ts=t.timestamp||0);var a=this;this.isLoading=!0,this.load({cacheKey:t.cacheKey||void 0,params:e,skipCache:0!==e.offset,loading:!1,success:function(t){a.data.offset=e.offset,a.data.limit=e.limit,a.data.query=e.query;var i={},o=a.data.self_openid;a.data.userattr&&a.data.userattr.length&&a.data.userattr.forEach(function(t){i[t.openid]=t}),a.data.favor_product_list&&a.data.favor_product_list.forEach(function(t){s.handleProductData(t,i,o,a.data.video_product)}),a.data.__hasMore=!!a.data.has_more,t.isCache||(a.offset=a.data.next_offset||e.limit),"function"==typeof a.success&&a.success(a.data,t.isCache)},fail:function(t){"function"==typeof a.fail&&a.fail()},complete:function(){a.isLoading=!1}})}}function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.limit=this.offset,this.offset=0,this.loadNext(t)}var a=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),i=require("../core/network.js"),s=require("../utils/util.js"),o=10;module.exports=function(s){return s=s||{},a({cgi:s.query?i.cgiSet.getfavorbyquery:i.cgiSet.getfriendfavornew,useCache:void 0===s.useCache||s.useCache,props:{query:s.query,offset:0},cacheHandler:function(t){var e=Object.assign({},t);return e.favor_product_list=e.favor_product_list.slice(0,2),e},methods:{loadNext:t,reload:e,success:s.success,fail:s.fail}})}; 
 			}); 
		define("models/getFriendList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),t=require("../core/network.js"),n=null,i=[],a=new Map,r=void 0,c=[],s=e({cgi:t.cgiSet.getFriendList,methods:{get:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=!1,a=function(e){i||(i=!0,t.success&&t.success(e)),n=e};if(n&&n.length>0)a(n);else if(t.cacheOnly)try{var r=wx.getStorageSync("FRIEND_LIST");r&&a(r)}catch(e){}else wx.getStorage({key:"FRIEND_LIST",success:function(e){e&&e.data&&a(e.data)}});t.cacheOnly?i||t.fail&&t.fail():this.load({params:{},success:function(){var t=e.data.friend_list.filter(function(e){return!!e.nickname});t.forEach(function(e){e.head_img_url=(e.head_img_url||"").replace("http://wx.qlogo.cn/mmhead/","")}),a(t),wx.setStorage({key:"FRIEND_LIST",data:t})},fail:t.fail,complete:t.complete})},setDisabledFriends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];c=e},getDisabledFriends:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return c},setSelectedFriends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];i=e},getSelectedFriends:function(){return JSON.parse(JSON.stringify(i))},setSearchIndexMap:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;a=e},getSearchIndexMap:function(){return a},setHandledFriendList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];r=e},getHandledFriendList:function(){return r}}});module.exports=s; 
 			}); 
		define("models/getGroupFeedDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this.props;if(!r.isLoading){r.isLoading=!0;var c={group_id:o.group_id||r.group_id,appid:o.appid||r.appid,product_id:o.product_id||r.product_id,source:o.source||r.source,comment_id:o.comment_id||r.comment_id,scene:o.scene||r.scene,ticket:o.ticket||r.ticket,reply_flat_mode:!1};this.load({cacheKey:o.cacheKey||void 0,params:c,loading:!1,success:function(o){var r=e.data,s=r.feed||{},d={},a=n.userInfo.openid||n.userInfo&&n.userInfo.openid||"";if(r.userattr&&r.userattr.forEach(function(e){d[e.openid]=e}),d[a]&&(n.userInfo=i({},n.userInfo,d[a])),r.group_info&&((0,t.updateGroupAttr)(r.group_info),4==s.info.type)){var p=s.forward_item.original_feed;Object.assign(p.info,{groupInfo:r.group_info})}u.handleGroupProductData(s,d,a),"function"==typeof e.success&&e.success(i({},r,c),o.isCache)},fail:function(o){"function"==typeof e.fail&&e.fail(o)},complete:function(){r.isLoading=!1,"function"==typeof e.complete&&e.complete()}})}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loadNext(e)}var i=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},t=require("../utils/ticket"),r=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),c=require("../core/network.js"),u=require("../utils/util.js"),n=require("../core/sys.js"),s=require("../models/groupHelper");module.exports=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s.update({group_ids:[i.group_id]}),r({cgi:c.cgiSet.getGroupFeedDetail,useCache:!1,props:{group_id:i.group_id,appid:i.appid,product_id:i.product_id,source:i.source,comment_id:i.comment_id,scene:i.scene,ticket:i.ticket,isLoading:!1},methods:{loadNext:e,reload:o,success:i.success,fail:i.fail}})}; 
 			}); 
		define("models/getGroupFeedList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this.props;if(!r.isLoading){r.isLoading=!0;var s={group_id:o.group_id||r.group_id,seq:o.seq||r.seq,offset:o.offset||r.offset,count:o.count||r.count,type:o.type||r.type,source:o.source||r.source,recommend_uin:o.recommend_uin||r.recommend_uin,order_by_desc:!1===o.order_by_desc?o.order_by_desc:r.order_by_desc,isgetvideo:o.isgetvideo||r.isgetvideo,scene:0===o.scene?o.scene:o.scene||r.scene,ticket:""===o.ticket?o.ticket:o.ticket||r.ticket,reply_flat_mode:!1};s.whether_update_read_seq=!s.seq&&s.order_by_desc||!s.order_by_desc&&200==s.count,console.info("getGroupFeedList parmas: ",s),this.load({cacheKey:o.cacheKey||void 0,params:s,skipCache:!!s.seq,loading:!1,success:function(n){var a=e.data;r.hasMore=Boolean(!s.order_by_desc||!!a.has_more);var d=a.feed||[],f={},p=a.self_openid||c.userInfo&&c.userInfo.openid||"";a.userattr&&a.userattr.forEach(function(e){f[e.openid]=e}),f[p]&&(c.userInfo=t({},c.userInfo,f[p]));var l={};a.groupattr&&a.groupattr.forEach(function(e){l[e.id]=e}),u(a.groupattr),d.sort(function(e,o){return o.info.seq-e.info.seq}),d.forEach(function(e){if(4==e.info.type){var o=e.forward_item.original_feed,t=o.info.group_id;Object.assign(o.info,{groupInfo:l[t]})}i.handleGroupProductData(e,f,p)}),"function"==typeof e.success&&e.success(t({},a,s),n.isCache),"function"==typeof o.success&&o.success(t({},a,s),n.isCache)},fail:function(t){"function"==typeof e.fail&&e.fail(),"function"==typeof o.fail&&o.fail()},complete:function(){r.isLoading=!1,"function"==typeof e.complete&&e.complete(),"function"==typeof o.complete&&o.complete()}})}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loadNext(e)}var t=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),s=require("../core/network.js"),i=require("../utils/util.js"),c=require("../core/sys.js"),n=require("../models/groupHelper"),u=require("../utils/ticket").updateGroupAttr;module.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n.update({group_ids:[t.group_id]}),r({cgi:s.cgiSet.getGroupFeed,useCache:!t.disableCache,props:{group_id:t.group_id,seq:"",offset:0,count:t.count||20,type:t.type||0,source:t.source||0,recommend_uin:0,order_by_desc:!0,isgetvideo:!0,scene:0,isLoading:!1,hasMore:!0},methods:{loadNext:e,reload:o,success:t.success,fail:t.fail}})}; 
 			}); 
		define("models/getGroupMember.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},o=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),r=require("../core/network.js");module.exports=function(s){return o({cgi:r.cgiSet.getGroupMember,useCache:s.useCache,methods:{loadNext:function(o){var r=this,s=o.data,a=void 0===s?{}:s,t=o.loading,c=void 0!==t&&t,i=e({seq:"",count:20,order_by_desc:!1,include_owner:!1,exclude_friends:!1},a);console.info("getGroupMember params: ",i),this.load({params:i,loading:c,skipCache:i.isReflesh,success:function(o){var s=o.isCache,a=r.data.members.map(function(e){return e.openid}),t={};r.data.members.forEach(function(o){t[o.openid]=e({role:o.role},o.userattr)}),r.success&&r.success({hasMore:r.data.has_more,seq:r.data.next_seq,ids:a,map:t,isCache:s})},fail:function(e){console.error("getGroupMember fail:",e),r.fail&&r.fail(e)},complete:function(){return r.complete&&r.complete()}})},success:s.success,fail:s.fail,complete:s.complete}})}; 
 			}); 
		define("models/getGroupTimeline.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=this.props;if(!i.isLoading){i.isLoading=!0;var s={count:o.count||i.count,order_by_desc:void 0===o.order_by_desc||o.order_by_desc,seq:o.seq||""};console.info("getGroupTimeline parmas: ",s),this.load({params:s,skipCache:!0,loading:!1,success:function(o){var i=e.data,n=i.feed||[],c={},a=i.self_openid;i.userattr&&i.userattr.forEach(function(e){c[e.openid]=e}),s.order_by_desc||n.reverse(),n.forEach(function(e){r.handleGroupProductData(e,c,a)}),"function"==typeof e.success&&e.success(t({},i,s),o.isCache)},fail:function(o){"function"==typeof e.fail&&e.fail(o)},complete:function(){i.isLoading=!1,"function"==typeof e.complete&&e.complete()}})}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loadNext(e)}var t=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},i=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),s=require("../core/network.js"),r=require("../utils/util.js");require("../core/sys.js");module.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i({cgi:s.cgiSet.groupTimeline,useCache:!1,props:{count:t.count||10,isLoading:!1},methods:{loadNext:e,reload:o,success:t.success,fail:t.fail,complete:t.complete}})}; 
 			}); 
		define("models/getHotGroup.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),s=require("../core/network.js");module.exports=function(c){return e({cgi:s.cgiSet.getHotGroup,useCache:!0,methods:{loadNext:function(){var e=this,s={};this.load({params:s,loading:!1,skipCache:!1,success:function(s){var c=s.isCache;console.log(c),e.success&&e.success({rsp:e.data,isCache:c})},fail:function(s){return e.fail&&e.fail(s)},complete:function(){return e.complete&&e.complete()}})},success:c.success,fail:c.fail,complete:c.complete}})}; 
 			}); 
		define("models/getHotWords.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../libs/mmuxwxappdevkit/foundation/base/model.js")({cgi:require("../core/network.js").cgiSet.getHotWords,useCache:!0,methods:{get:function(e){e=e||{};var s=this;this.load({params:{},loading:e.loading,success:function(t){e.success&&e.success(s.data,t.isCache)},fail:e.fail,complete:e.complete})}}});module.exports=e; 
 			}); 
		define("models/getIndex.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o])}return a},t=require("../libs/mmuxwxappdevkit/foundation/base/model.js")({cgi:require("../core/network.js").cgiSet.index,useCache:!0,methods:{reload:function(t){t=t||{};var e=this;this.load({params:a({},t.params),loading:t.loading,success:function(a){e.data.want_buy||(e.data.want_buy={total_count:0}),e.data.has_buy||(e.data.has_buy={total_count:0}),e.data.worth_buy||(e.data.worth_buy={total_count:0,favor_product_list:[]}),t.success&&t.success(e.data,a.isCache)},fail:t.fail,complete:t.complete})}}});module.exports=t; 
 			}); 
		define("models/getIndexGroup.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.props;if(!t.isLoading){t.isLoading=!0;var s={seq:o.seq||t.seq,count:o.count||t.count,feed_count:o.feed_count||t.feed_count,order_by_desc:void 0===o.order_by_desc||o.order_by_desc,group_owner_type:o.group_owner_type||t.group_owner_type,need_unread_count:t.need_unread_count,include_system_group:!1};this.load({cacheKey:o.cacheKey||void 0,params:s,skipCache:!!s.seq,loading:!1,success:function(t){var r=e.data,u={};r.userattr.forEach(function(e){u[e.openid]=e});var a=i.userInfo&&i.userInfo.openid||"";u[a]&&(i.userInfo=n({},i.userInfo,u[a])),r.contact.forEach(function(e){"13104374716925600"==e.base.id&&(e.base=n({name:"物品圈",desc:"朋友的推荐将会展示在这里",head_img_url:"/assets/icon-group-friends.png"},e.base)),e.feed.forEach(function(e){e.info.sender=u[e.info.openid],e.datetime=c.formatGroupUpdateTime(1e3*e.info.timestamp)})}),"function"==typeof e.success&&e.success(n({},r,s),t.isCache),"function"==typeof o.success&&o.success(n({},r,s),t.isCache)},fail:function(n){"function"==typeof e.fail&&e.fail(),"function"==typeof o.fail&&o.fail()},complete:function(){t.isLoading=!1,"function"==typeof e.complete&&e.complete(),"function"==typeof o.complete&&o.complete()}})}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loadNext(e)}var n=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},t=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),s=require("../core/network.js"),c=require("../utils/util.js"),i=require("../core/sys.js");module.exports=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t({cgi:s.cgiSet.getIndexGroup,useCache:n.useCache||!1,props:{seq:"",count:n.count||20,feed_count:1,group_owner_type:n.group_owner_type||0,need_unread_count:void 0===n.need_unread_count||n.need_unread_count,isLoading:!1},methods:{loadNext:e,reload:o,success:n.success,fail:n.fail}})}; 
 			}); 
		define("models/getIndexTimeline.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.props;if(!t.isLoading){t.isLoading=!0;var i={seq:o.seq||"",count:o.count||t.count,order_by_desc:void 0===o.order_by_desc||o.order_by_desc};console.info("getIndexTimeline parmas: ",i),this.load({params:i,skipCache:!0,loading:!1,success:function(o){var t=e.data,a=t.feed||[],u={},d={},p=t.self_openid;t.userattr&&t.userattr.forEach(function(e){u[e.openid]=e}),t.groupattr&&t.groupattr.forEach(function(e){d[e.id]=e}),d[c]={id:c,name:"物品圈",head_img_url:"/assets/icon-shop-green.jpeg"},s(t.groupattr),i.order_by_desc||a.reverse(),a.forEach(function(e){if(e.group_item){var o=d[e.group_item.group_id]||{};e.group_item=r({},e.group_item,o),e.group_item.abstract_feed.forEach(function(e){if(e.forward_list&&e.forward_list[0]){var o=e.forward_list.slice().pop();e.forward={sender:u[o.openid],datetime:n.formatGroupUpdateTime(1e3*o.create_time)}}e.sender=u[e.openid],e.datetime=n.formatGroupUpdateTime(1e3*e.timestamp)}),e.group_item.unread_msg&&console.info("group unread_msg: "+o.id+", "+o.name+", "+e.group_item.unread_msg)}n.handleGroupProductData(e,u,p)}),"function"==typeof e.success&&e.success(r({},t,i),o.isCache)},fail:function(o){"function"==typeof e.fail&&e.fail(o)},complete:function(){t.isLoading=!1,"function"==typeof e.complete&&e.complete()}})}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loadNext(e)}function t(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}var r=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),a=require("../core/network.js"),n=require("../utils/util.js"),s=require("../utils/ticket").updateGroupAttr,c="13104374716925600";module.exports=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i({cgi:a.cgiSet.getIndexTimeline,useCache:!1,props:{seq:0,count:r.count||20,order_by_desc:r.order_by_desc||!0,isLoading:!1},methods:{loadNext:e,reload:o,cacheList:t,success:r.success,fail:r.fail,complete:r.complete}})}; 
 			}); 
		define("models/getMoreProduct.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function s(s){if(s.force||!this.isLoading){var e=Object.assign({offset:s.offset,limit:s.limit},s);this.props.query&&(e.query=this.props.query),this.props.shop_wxa_uin&&(e.shop_wxa_uin=this.props.shop_wxa_uin),this.props.extparams&&(e.extparams=this.props.extparams),this.props.official_biz_uin&&(e.official_biz_uin=this.props.official_biz_uin),this.props.abtestdyeinfo&&(e.abtestdyeinfo=this.props.abtestdyeinfo),+this.props.product_scene&&(e.product_scene=+this.props.product_scene),+this.props.search_type&&(e.search_type=+this.props.search_type),e.search_type&&1!=e.search_type&&+this.props.search_type_pos&&(e.search_type_pos=+this.props.search_type_pos),e.user_current_time=+new Date,this.isLoading=!0;var t=this;this.load({params:e,loading:s.loading,success:function(s){var i=t.data;t.data=i.result||{},t.data.custom_items=i.custom_items||[],t.data.searchid=i.searchid||"",t.data.query=e.query,t.data.offset=e.offset,"function"==typeof t.success&&t.success(t.data)},fail:function(s){"function"==typeof t.fail&&t.fail(s)},complete:function(){t.isLoading=!1}})}}var e=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),t=require("../core/network.js");module.exports=function(i){return i=i||{},e({cgi:i.shop_wxa_uin?t.cgiSet.getmoreproductbyofficial:t.cgiSet.getmoreproduct,useCache:!1,props:{query:i.query||"",shop_wxa_uin:i.shop_wxa_uin||"",abtestdyeinfo:i.abtestdyeinfo||"",extparams:i.extparams||"",official_biz_uin:i.official_biz_uin||"",product_scene:i.product_scene||"",search_type:i.search_type||"",search_type_pos:i.search_type_pos||""},methods:{loadNext:s,success:i.success,fail:i.fail}})}; 
 			}); 
		define("models/getMsgList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function i(){var i=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.isLoading){var t=Object.assign({offset:0,limit:10},e);"begin_id"in this.props&&(t.begin_id=this.props.begin_id),this.props.abtestdyeinfo&&(t.abtestdyeinfo=this.props.abtestdyeinfo),this.isLoading=!0,this.load({params:t,loading:e.loading,skipCache:0!==t.offset,success:function(e){i.data=i.data.result,i.data.message_list.forEach(function(i){var e={};i.ext_info||(i.ext_info={}),i.ext_info.info_list&&i.ext_info.info_list.forEach(function(i){e[i.key]=i.value}),e.productimage&&-1!==e.productimage.indexOf("qpic.cn")&&(e.productimage+="/0"),i.ext_info.infoObj=e,i.commentArr=s.getCommentArr(i.item_desc)}),0===t.offset&&i.data.message_list[0]&&(i.props.begin_id=i.data.message_list[0].msg_id),i.data.offset=t.offset,"function"==typeof i.success&&i.success(i.data,e.isCache)},fail:function(e){"function"==typeof i.fail&&i.fail(e)},complete:function(){i.isLoading=!1,"function"==typeof i.complete&&i.complete()}})}}var e=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),t=require("../core/network.js"),s=require("../utils/util.js");module.exports=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e({cgi:t.cgiSet.getmsglist,useCache:!0,props:s.props||{},methods:{loadNext:i,success:s.success,fail:s.fail}})}; 
 			}); 
		define("models/getMyRecommendList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},c=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),s=require("../core/network.js");module.exports=function(i){return c({cgi:s.cgiSet.getMyRecommendList,useCache:!0,methods:{loadNext:function(c){var s=this,i=c.data,t=void 0===i?{}:i,o=c.loading,a=void 0!==o&&o,n=e({limit:10,isgetvideo:!0,mode:2,timeseq:""},t);console.info("getMyRecommendList params: ",n),this.load({params:n,loading:a,skipCache:n.timeseq||n.isReflesh,success:function(e){var c=e.isCache;console.log(c),c?s.cachesuccess&&s.cachesuccess(s.data):s.cgisuccess&&s.cgisuccess(s.data)},fail:function(e){return s.fail&&s.fail(e)},complete:function(){return s.complete&&s.complete()}})},cachesuccess:i.cachesuccess,cgisuccess:i.cgisuccess,fail:i.fail,complete:i.complete}})}; 
 			}); 
		define("models/getOpenCartList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(!this.isLoading){var i=this,t=Object.assign({offset:0,count:200},e);this.isLoading=!0,this.load({params:t,loading:e.loading,success:function(o){i.data.offset=t.offset,i.data.count=e.count,i.data.product_list?(i.data.storeList=s(i.data.product_list),delete i.data.product_list):i.data.storeList||(i.data.storeList=[]),"function"==typeof i.success&&i.success(i.data,o.isCache)},fail:function(e){"function"==typeof i.fail&&i.fail()},complete:function(){i.isLoading=!1,"function"==typeof i.complete&&i.complete()}})}}function s(e){var s={},t=[];return e.forEach(function(e,o){e.onShelf=1===e.status,e.showWeAppIcon=!0,e.version="release",e.sku_id=e.sku_info.sku_id,e.id=e.src_wxapp_id+"|"+e.item_code+"|"+(e.sku_info&&e.sku_info.sku_id||o),e.image_list[0]=i(e.image_list[0]),3===e.source?e.action="查看":e.action="购买";var a=["CART","WXA","SUBSCRIBE"];a[e.source-1]&&(e.type=a[e.source-1]);var n=s[e.src_wxapp_id];if(n)n.items.push(e);else{var c=void 0;if(e.biz_base_info){var r=e.biz_base_info;c={app_id:e.mch_appid,biz_uin:e.biz_uin,icon_url:e.mch_logo_url,nick_name:e.mch_name,user_name:r.user_name,phone:r.phone,exist:!!r.is_exist_cs}}n=s[e.src_wxapp_id]={items:[e],titleData:{src_wxapp_id:e.src_wxapp_id,src_wxapp_index:e.src_wxapp_index,mch_logo_url:e.mch_logo_url,mch_name:e.mch_name,express_duration:e.express_duration,express_desc:e.express_desc},id:e.src_wxapp_id,bizInfo:c,source:e.source},t.push(n)}}),t.forEach(function(e){e.allComment=e.items.map(function(e){return!!e.has_evaluation}).reduce(function(e,s){return e&&s})}),t}function i(e){if(e&&(e.indexOf("shp.qpic.cn")>=0||e.indexOf("bs.qpic.cn")>=0)){var s=e.split("/").reverse()[0];if(s&&isNaN(+s))return e+"/162"}return e}function t(e){for(var s=0,i=[],t=0;s<10&&e[t];){var o=Object.assign({},e[t]);o.items=o.items.slice(0,10),i.push(o),s+=o.items.length,t++}return i}var o=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),a=require("../core/network.js");module.exports=function(i){return i=i||{},o({cgi:a.cgiSet.openproduct,useCache:!0,cacheHandler:i.cacheHandler||function(e){var i=Object.assign({},e);return e.product_list?(e.storeList=s(e.product_list),delete e.product_list,delete i.product_list,i.storeList=t(e.storeList)):e.storeList=i.storeList=[],i},methods:{loadNext:e,success:i.success,fail:i.fail}})}; 
 			}); 
		define("models/getOrderByPageV2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},c=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),s=require("../core/network.js");require("../core/sys.js");module.exports=function(a){return c({cgi:s.cgiSet.getOrderByPageV2,useCache:a.useCache,methods:{loadNext:function(c){var s=this,a=c.data,i=void 0===a?{}:a,t=c.loading,o=void 0!==t&&t,r=e({count:10,category_id:"",begin:""},i);this.load({params:r,loading:o,skipCache:r.begin||r.isClickTab,success:function(e){var c=e.isCache;console.log(c),c?s.cachesuccess&&s.cachesuccess(s.data):s.cgisuccess&&s.cgisuccess(s.data)},fail:function(e){return s.fail&&s.fail(e)},complete:function(){return s.complete&&s.complete()}})},cachesuccess:a.cachesuccess,cgisuccess:a.cgisuccess,fail:a.fail,complete:a.complete}})}; 
 			}); 
		define("models/getOrderFavor.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),i=require("../libs/mmuxwxappdevkit/core/network.js"),t=require("../utils/util.js"),a=e({cgi:i.cgiSet.getorderfavor,useCache:!1,methods:{get:function(e){var i=this,a={appid:(e=e||{}).appid,list:e.list,order_id:e.order_id};this.load({params:a,loading:e.loading,success:function(){var a=Object.assign({},i.data);a.favor_product_list.forEach(function(e){t.handleProductData(e)}),e&&e.success(a)},fail:e.fail,complete:e.complete})}}});module.exports=a; 
 			}); 
		define("models/getOrderList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){this.offset=0,this.count=t.size||10,this.success=t.success,this.fail=t.fail,this.model=o({cgi:s.cgiSet.getorderlist,useCache:!0}),this.isLoading=!1,this.hasMore=!0,this.targetAppid=t.targetAppid}var o=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),s=require("../core/network.js");t.prototype.load=function(t){var o=this;t=t||{offset:this.offset,count:this.count},this.isLoading||!this.hasMore&&t.offset>0||(this.isLoading=!0,this.model.load({params:{offset:t.offset,count:t.count,get_from_ux:!0,appid:o.targetAppid},loading:t.loading,success:function(s){o.offset=t.offset+t.count,o.hasMore=o.model.data.order_list.length>=t.count,Object.assign(o.model.data,t),o.model.data.hasMore=o.hasMore,"function"==typeof o.success&&o.success(o.model.data,s.isCache)},fail:function(t){"function"==typeof o.fail&&o.fail()},complete:function(){o.isLoading=!1}}))},t.prototype.reload=function(t){this.load({offset:0,count:this.count,loading:t&&t.loading})},module.exports=t; 
 			}); 
		define("models/getOrderLists.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.isLoading){var e=Object.assign({get_from_ux:!0,offset:0,count:5,appid:i.appid},i);this.props.abtestdyeinfo&&(e.abtestdyeinfo=this.props.abtestdyeinfo),this.isLoading=!0,this.load({params:e,loading:i.loading,skipCache:0!==e.offset||i.isClickTab,success:function(i){t.data.offset=e.offset,t.data.order_list.forEach(function(t){t.__amount=t.ext_info.product_info.item_list.reduce(function(t,i){return t+i.amount},0),t.ext_info.product_info.item_list.map(function(t){return t&&t.thumb_url&&(-1!==t.thumb_url.indexOf("shp.qpic.cn")||-1!==t.thumb_url.indexOf("bs.qpic.cn"))&&(t.thumb_url+="/162"),t})}),t.success&&t.success(t.data,i.isCache)},fail:function(i){t.fail&&t.fail(i)},complete:function(){t.isLoading=!1,t.complete&&t.complete()}})}}var i=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),e=require("../core/network.js");require("../utils/util.js");module.exports=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s=Object.assign({useCache:!0},s),i({cgi:e.cgiSet.getorderlist,useCache:s.useCache,methods:{loadNext:t,success:s.success,fail:s.fail}})}; 
 			}); 
		define("models/getOrderMessage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.isLoading||(this.isLoading=!0,this.load({params:{},loading:i.loading,skipCache:!0,success:function(i){"function"==typeof e.success&&e.success(e.data,i.isCache)},fail:function(i){"function"==typeof e.fail&&e.fail(i)},complete:function(){e.isLoading=!1,"function"==typeof e.complete&&e.complete()}}))}var i=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),s=require("../core/network.js");require("../utils/util.js");module.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i({cgi:s.cgiSet.getOrderMessage,useCache:!1,props:t.props||{},methods:{loadNext:e,success:t.success,fail:t.fail}})}; 
 			}); 
		define("models/getPermissionList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.isLoading||(this.isLoading=!0,this.load({params:{},loading:i.loading,success:function(i){e.success&&e.success(e.data,i.isCache)},fail:function(i){e.fail&&e.fail(i)},complete:function(){e.isLoading=!1,e.complete&&e.complete()}}))}var i=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),s=require("../core/network.js");require("../utils/util.js");module.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i({cgi:s.cgiSet.getPermissionList,useCache:!1,methods:{loadNext:e,success:t.success,fail:t.fail,complete:t.complete}})}; 
 			}); 
		define("models/getProductByPageV2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,r){var c=[],s={};return e.forEach(function(e,t){e.onShelf=1===e.status,e.showWeAppIcon=!0,e.version="release",e.update_time=e.update_time||e.create_time,e.sku_id=e.sku_info&&e.sku_info.sku_id||"",e.id=e.src_wxapp_id+"|"+e.item_code+"|"+(e.sku_info&&e.sku_info.sku_id||t),e.image_list[0]=i(e.image_list[0]),3===e.source?e.action="查看":e.action="购买";var n=["CART","WXA","SUBSCRIBE"];if(n[e.source-1]&&(e.type=n[e.source-1]),e.sku_list&&e.sku_list.length){var u=e.sku_list.filter(function(e){return e.price||(e.price=0),1===e.status});u.length?(u=u.sort(function(e,i){return e.price-i.price}),e.minPrice=u[0].price||0,e.maxPrice=u[u.length-1].price||0):e.minPrice=e.maxPrice=0,e.minPrice===e.maxPrice?0===e.minPrice?e.price_str="暂无价格":e.price_str="¥"+e.minPrice:e.price_str="¥"+e.minPrice+" - ¥"+e.maxPrice}else e.price_str="暂无价格",e.minPrice=e.maxPrice=0;var o=void 0;if(e.biz_base_info){var _=e.biz_base_info;o={app_id:e.mch_appid,biz_uin:e.biz_uin,icon_url:e.mch_logo_url,nick_name:e.mch_name,user_name:_.user_name,phone:_.phone,exist:!!_.is_exist_cs}}e.from_scene||(e.from_scene=0);var p=e.brand_info&&e.brand_info.name||e.mch_name||"",d={0:"来自 "+p,1:"来自 "+p,2:a.cartScene[2],3:"来自 "+p,4:a.cartScene[4],5:a.cartScene[5],6:a.cartScene[6]};r&&s[e.src_wxapp_id]?(e.user_update_time>s[e.src_wxapp_id].user_update_time&&(s[e.src_wxapp_id].user_update_time=e.user_update_time),s[e.src_wxapp_id].items.push(e)):c.push(s[e.src_wxapp_id]={items:[e],titleData:{src_wxapp_id:e.src_wxapp_id,src_wxapp_index:e.src_wxapp_index,mch_logo_url:e.brand_info&&e.brand_info.logo||e.mch_logo_url,mch_name:d[e.from_scene]||d[0],storeName:p,express_duration:e.express_duration,express_desc:e.express_desc},user_update_time:e.user_update_time,id:e.src_wxapp_id,unique_id:e.id,bizInfo:o,source:e.source})}),c.forEach(function(e){e.allComment=e.items.map(function(e){return!!e.has_evaluation}).reduce(function(e,i){return e&&i})}),c}function i(e){if(e&&(e.indexOf("shp.qpic.cn")>=0||e.indexOf("bs.qpic.cn")>=0)){var i=e.split("/").reverse()[0];if(i&&isNaN(+i))return e+"/162"}return e}var r=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c])}return e},c=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),s=require("../core/network.js"),a=(require("../core/sys.js"),require("../languagePackage").languagePkg["/portal/cart-list"]);module.exports=function(i){return c({cgi:s.cgiSet.getProductByPageV2,useCache:i.useCache,methods:{loadNext:function(c){var s=this,a=c.data,t=void 0===a?{}:a,n=c.loading,u=void 0!==n&&n,o=r({count:10,category_id:"",begin:""},t);this.load({params:o,loading:u,skipCache:o.begin||o.isClickTab,success:function(r){var c=r.isCache;console.log(c),s.data.storeList=e(s.data.product_list,i.mergeStore),c?s.cachesuccess&&s.cachesuccess(s.data):s.cgisuccess&&s.cgisuccess(s.data)},fail:function(e){return s.fail&&s.fail(e)},complete:function(){return s.complete&&s.complete()}})},cachesuccess:i.cachesuccess,cgisuccess:i.cgisuccess,fail:i.fail,complete:i.complete}})}; 
 			}); 
		define("models/getProductFavor.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},t=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),r=require("../libs/mmuxwxappdevkit/core/network.js"),s=require("../libs/mmuxwxappdevkit/core/sys.js"),i=require("../utils/util.js"),o=t({cgi:r.cgiSet.getproductfavor,useCache:!1,methods:{get:function(t){var r=(t=t||{}).params||{},o=this;r.list[0]&&(r.source=r.list[0].source),this.load({params:r,loading:t.loading,success:function(){var r=Object.assign({},o.data),a={},u=r.self_openid;r.userattr&&r.userattr.length&&r.userattr.forEach(function(e){a[e.openid]=e}),a[u]&&(s.userInfo=e({},a[u],{uin:r.user_uin})),r.favor_product_list.forEach(function(e){i.handleProductData(e,a,u,r.video_product)}),t&&t.success(r)},fail:t.fail,complete:t.complete})}}});module.exports=o; 
 			}); 
		define("models/getQuerySuggestion.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../core/network.js"),u=require("../utils/util.js").debounce(function(u){e.request({cgi:e.cgiSet.getquerysuggestion,useCache:!1,params:{query:u.query},success:function(e){u.success&&u.success(e)},fail:function(e){u.fail&&u.fail(e)},complete:function(){u.complete&&u.complete()}})},300,!1);module.exports=function(e){return u(e)}; 
 			}); 
		define("models/getRecommendDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},t=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),a=require("../core/network.js"),i=require("../utils/util");module.exports=function(c){return t({cgi:a.cgiSet.getRecommendDetail,useCache:!1,methods:{get:function(t){var a=this,c=t.data,o=void 0===c?{}:c,r=t.loading,s=void 0!==r&&r;this.load({params:o,loading:s,skipCache:!0,success:function(t){t.isCache;var c=a.data.recommend_list||[],o={},r=a.data.self_openid;a.data.userattr&&a.data.userattr.forEach(function(e){o[e.openid]=e}),c.forEach(function(e){i.handleTimelineProductData(e,o,r)}),a.cgisuccess&&a.cgisuccess(e({},a.data))},fail:function(e){return a.fail&&a.fail(e)},complete:function(){return a.complete&&a.complete()}})},cgisuccess:c.cgisuccess,fail:c.fail,complete:c.complete}})}; 
 			}); 
		define("models/getTimeline.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.props;if(!t.isLoading){t.isLoading=!0;var o={offset:i.offset||t.offset,limit:i.limit||t.limit,timestamp:i.timestamp||t.timestamp,type:i.type||t.type,source:i.source||t.source,mode:i.mode||t.mode,isgetvideo:i.isgetvideo||t.isgetvideo,is_refresh:i.is_refresh||t.is_refresh,use_timeseq:i.use_timeseq||t.use_timeseq,timeseq:i.timeseq||t.timeseq};o.whether_update_read_seq=!o.timeseq&&2==o.mode||1==o.mode&&200==o.limit,console.info("getTimeline parmas: ",o),this.load({cacheKey:i.cacheKey||void 0,params:o,skipCache:!0,loading:!1,success:function(i){var t=e.data,n=t.recommend_list||[],c={},m=t.self_openid;t.userattr&&t.userattr.forEach(function(e){c[e.openid]=e}),n.sort(function(e,i){return i.recommend_info.timeseq-e.recommend_info.timeseq}),n.forEach(function(e){r.handleTimelineProductData(e,c,m)}),"function"==typeof e.success&&e.success(s({},t,o),i.isCache)},fail:function(i){"function"==typeof e.fail&&e.fail()},complete:function(){t.isLoading=!1,"function"==typeof e.complete&&e.complete()}})}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loadNext(e)}function t(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}var s=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},o=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),n=require("../core/network.js"),r=require("../utils/util.js");require("../core/sys.js");module.exports=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o({cgi:n.cgiSet.gettimeline,useCache:!1,props:{offset:0,timestamp:0,limit:s.limit||10,type:s.type||0,source:s.source||0,mode:s.mode||2,isgetvideo:!0,useCache:!s.disableCache,isLoading:!1,list:[],use_timeseq:!0,timeseq:""},cacheHandler:function(e){var i=Object.assign({},e),t=i.recommend_list.slice();return t.sort(function(e,i){return i.recommend_info.timeseq-e.recommend_info.timeseq}),i.recommend_list=t.slice(0,4),i},methods:{loadNext:e,reload:i,cacheList:t,success:s.success,fail:s.fail,complete:s.complete}})}; 
 			}); 
		define("models/getUnReadMsgCnt.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../libs/mmuxwxappdevkit/foundation/base/model.js")({cgi:require("../libs/mmuxwxappdevkit/core/network.js").cgiSet.getUnReadMsgCnt,useCache:!1,methods:{get:function(e){var s=(e=e||{}).params||{},a=this;this.load({params:s,loading:e.loading,success:function(){var s=Object.assign({},a.data);e&&e.success(s)},fail:e.fail,complete:e.complete})}}});module.exports=e; 
 			}); 
		define("models/getUserCreateGroupList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},s=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),o=require("../core/network.js"),t=require("../libs/mmuxwxappdevkit/index.js").Sys;module.exports=function(i){return s({cgi:o.cgiSet.getUserGroupInfo,useCache:i.useCache,methods:{loadNext:function(s){var o=this,i=s.data,a=void 0===i?{}:i,r=s.loading,c=void 0!==r&&r,n=e({openid:t.userInfo.openid,count:50},a);console.info("get_others_by_page params: ",n),this.load({params:n,loading:c,skipCache:n.isReflesh,success:function(e){var s=e.isCache;o.success&&o.success({rsp:o.data,isCache:s})},fail:function(e){console.error("get_others_by_page fail:",e),o.fail&&o.fail(e)},complete:function(){return o.complete&&o.complete()}})},success:i.success,fail:i.fail,complete:i.complete}})}; 
 			}); 
		define("models/getUserRecommend.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o])}return e},s=require("../libs/mmuxwxappdevkit/foundation/base/model.js"),c=require("../core/network.js"),o=require("../libs/mmuxwxappdevkit/index.js").Sys,i=require("../models/groupHelper");module.exports=function(a){return s({cgi:c.cgiSet.getUserRecommend,useCache:a.useCache,methods:{loadNext:function(s){var c=this,a=s.data,r=void 0===a?{}:a,t=s.loading,n=void 0!==t&&t,u=e({openid:o.userInfo.openid,order_by_desc:!0,scene:0,seq:"",count:10,offset:0},r);console.info("getUserRecommend params: ",u),this.load({params:u,loading:n,skipCache:u.seq||u.isReflesh,success:function(e){var s=e.isCache;console.log(s),s?c.cachesuccess&&c.cachesuccess(c.data):(i.update({group_ids:c.data.feed.map(function(e){return e.info.group_id})}),c.cgisuccess&&c.cgisuccess(c.data))},fail:function(e){return c.fail&&c.fail(e)},complete:function(){return c.complete&&c.complete()}})},cachesuccess:a.cachesuccess,cgisuccess:a.cgisuccess,fail:a.fail,complete:a.complete}})}; 
 			}); 
		define("models/groupHelper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return!(!e||"0"==e||"13104374716925600"===e||"13104374716925601"==e)}var i=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},o=require("../core/network"),t=require("../core/eventcenter"),n={},c=[],r=[],s=function(){};module.exports={update:function(i){var t=this,c=i.group_ids;c=(c=c||[]).filter(function(e,i){return i==c.indexOf(e)}),(c=c.filter(function(i){return e(i)&&!r.includes(i)})).length&&(r=r.concat(c),o.request({cgi:o.cgiSet.batchGetGroupPrivilege,params:{group_id:c},success:function(e){e.group_status.forEach(function(e){n[e.group_id]=e}),r=r.filter(function(e){return!c.includes(e)}),t._callback()},fail:function(e){t._callback(e)}}))},_callback:function(e){c=c.filter(function(i){return!(i.group_id in n)||(e?i.fail(e):i.success(n[i.group_id]),!1)})},get:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e((o=i({success:s,fail:s},o)).group_id)?o.group_id in n?o.success(n[o.group_id]):(c.push(o),this.update({group_ids:[o.group_id]})):o.success({in_group:!0,can_favor:!0,can_reply:!0})},remove:function(e){var i=e.group_id;i in n&&delete n[i]},join:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.request({cgi:o.cgiSet.joinByTicket,params:{scene:i.scene,ticket:i.ticket,group_id:i.group_id},success:function(o){e.remove({group_id:o.group_id}),e.update({group_ids:[o.group_id]}),!1!==i.showToast&&wx.showToast({icon:"success",title:"已加入",duration:1500}),t.emit("onJoinGroup",{group_id:o.group_id}),"function"==typeof i.success&&i.success(o)},fail:function(e){console.error("joinByTicket fail: ",e),wx.showModal({title:"",content:e.errmsg||"加入失败",showCancel:!1,confirmText:"我知道了"}),"function"==typeof i.fail&&i.fail(e)},complete:i.complete})},apply:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};wx.showLoading({mask:!0}),o.request({cgi:o.cgiSet.applyByTicket,params:{scene:e.scene,ticket:e.ticket,apply_reason:e.apply_reason,group_id:e.group_id},success:function(i){wx.hideLoading(),wx.showToast({icon:"success",title:"已发送申请",duration:1500}),"function"==typeof e.success&&e.success(i)},fail:function(i){console.error("joinByTicket fail: ",i),wx.hideLoading(),wx.showModal({title:"",content:i.errmsg||"申请失败",showCancel:!1,confirmText:"我知道了"}),"function"==typeof e.fail&&e.fail(i)},complete:e.complete})}}; 
 			}); 
		define("models/log_17937.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),r=require("../core/sys"),t=require("../libs/mmuxwxappdevkit/index").Reporter,i=function(){function i(n){e(this,i),this.pageName=n||""}return n(i,[{key:"report",value:function(e){var n=[r._scene,this.pageName,r._sessionId,e||0,Date.now()].join(",");return console.info("page analysis: "+n),t.report({logId:17937,logString:n,withClientIPV6Field:!0}),this}}]),i}();module.exports=i; 
 			}); 
		define("models/sendFeedback.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../core/network.js");module.exports=function(n){e.request({cgi:e.cgiSet.sendFeedback,params:{type:n.type,reason_id:n.reason_id||"",scene:n.scene||0,biz_uin:n.biz_uin,content:n.content||"",image_url:n.image_url||"",ext_info:n.ext_info||{}},success:function(e){"function"==typeof n.success&&n.success(e)},fail:function(e){"function"==typeof n.fail&&n.fail(e)},complete:function(){"function"==typeof n.complete&&n.complete()}})}; 
 			}); 
		define("models/undoGroupRecommend.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=require("../core/network.js");module.exports=function(e){e.loading&&wx.showLoading(),o.request({cgi:o.cgiSet.undoGroupRecommend,params:{group_id:e.group_id,appid:e.appid,product_id:e.product_id,source:e.source,comment_id:e.comment_id},success:function(o){"function"==typeof e.success&&e.success(o)},fail:function(o){"function"==typeof e.fail&&e.fail(o)},complete:function(){"function"==typeof e.complete&&e.complete(),wx.hideLoading()}})}; 
 			}); 
		define("models/uninterest.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../core/network.js");module.exports=function(c){e.request({cgi:e.cgiSet.uninterest,params:{reason_id:c.reason_id||"",scene:c.scene||0,biz_uin:c.biz_uin,item_code:c.item_code||"",source:c.source,comment_id:c.comment_id},success:function(e){"function"==typeof c.success&&c.success(e)},fail:function(e){"function"==typeof c.fail&&c.fail(e)},complete:function(){"function"==typeof c.complete&&c.complete()}})}; 
 			}); 
		define("pages/index/index.pageaction.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../utils/enum.js");module.exports={name:"index",actionList:[{type:e.PageActionType.IndexExposureOnLoad,name:"statIndexExposureOnLoad",immediately:!0,ext:[]},{type:e.PageActionType.IndexExposureOnShow,name:"statIndexExposureOnShow",immediately:!0,ext:[]},{type:e.PageActionType.IndexEnterOrder,name:"statIndexEnterOrder",ext:[{from:e.ExtFrom.Args,key:"has_red_dot",keyPath:"has_red_dot"}]},{type:e.PageActionType.IndexEnterFavorite,name:"statIndexEnterFavorite",ext:[{from:e.ExtFrom.Args,key:"has_red_dot",keyPath:"has_red_dot"}]},{type:e.PageActionType.IndexEnterMessage,name:"statIndexEnterMessage",ext:[{from:e.ExtFrom.Args,key:"has_red_dot",keyPath:"has_red_dot"}]},{type:e.PageActionType.IndexEnterMore,name:"statIndexEnterMore",ext:[]},{type:e.PageActionType.IndexAddToFavorite,name:"statIndexAddToFavorite",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"},{from:e.ExtFrom.Args,key:"group_id",keyPath:"group_id"},{from:e.ExtFrom.Data,key:"groupId",keyPath:"currentGroupId"}]},{type:e.PageActionType.IndexRemoveFromFavorite,name:"statIndexRemoveFromFavorite",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"},{from:e.ExtFrom.Args,key:"group_id",keyPath:"group_id"},{from:e.ExtFrom.Data,key:"groupId",keyPath:"currentGroupId"}]},{type:e.PageActionType.IndexDoComment,name:"statIndexDoComment",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"},{from:e.ExtFrom.Args,key:"__open_id",keyPath:"open_id"},{from:e.ExtFrom.Args,key:"group_id",keyPath:"group_id"},{from:e.ExtFrom.Data,key:"groupId",keyPath:"currentGroupId"}]},{type:e.PageActionType.IndexDoReply,name:"statIndexDoReply",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"},{from:e.ExtFrom.Args,key:"__open_id",keyPath:"open_id"},{from:e.ExtFrom.Args,key:"group_id",keyPath:"group_id"},{from:e.ExtFrom.Data,key:"groupId",keyPath:"currentGroupId"}]},{type:e.PageActionType.IndexDelRecommend,name:"statIndexDelRecommend",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"},{from:e.ExtFrom.Args,key:"group_id",keyPath:"group_id"},{from:e.ExtFrom.Data,key:"groupId",keyPath:"currentGroupId"}]},{type:e.PageActionType.IndexDelRecommend,name:"statIndexDelGroupRecommend",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"},{from:e.ExtFrom.Data,key:"groupId",keyPath:"currentGroupId"}]},{type:e.PageActionType.IndexDelComment,name:"statIndexDelComment",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"group_id",keyPath:"group_id"},{from:e.ExtFrom.Data,key:"groupId",keyPath:"currentGroupId"}]},{type:e.PageActionType.IndexDelReply,name:"statIndexDelReply",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"},{from:e.ExtFrom.Args,key:"group_id",keyPath:"group_id"},{from:e.ExtFrom.Data,key:"groupId",keyPath:"currentGroupId"}]},{type:e.PageActionType.IndexShareClick,name:"statIndexShareClick",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"}]},{type:e.PageActionType.IndexShareOver,name:"statIndexShareOver",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"success",keyPath:"success"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"}]},{type:e.PageActionType.IndexTapProductImage,name:"statIndexToProductImage",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"},{from:e.ExtFrom.Args,key:"group_id",keyPath:"group_id"},{from:e.ExtFrom.Data,key:"groupId",keyPath:"currentGroupId"}]},{type:e.PageActionType.IndexToProductDetail,name:"statIndexToProductDetail",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"},{from:e.ExtFrom.Args,key:"__open_id",keyPath:"open_id"},{from:e.ExtFrom.Args,key:"group_id",keyPath:"group_id"},{from:e.ExtFrom.Data,key:"groupId",keyPath:"currentGroupId"}]},{type:e.PageActionType.IndexImageSwipe,name:"statIndexImageSwipe",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"},{from:e.ExtFrom.Args,key:"group_id",keyPath:"group_id"},{from:e.ExtFrom.Data,key:"groupId",keyPath:"currentGroupId"}]},{type:e.PageActionType.IndexTapProduct,name:"statIndexTapProduct",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"group_id",keyPath:"group_id"},{from:e.ExtFrom.Args,key:"__open_id",keyPath:"open_id"},{from:e.ExtFrom.Data,key:"groupId",keyPath:"currentGroupId"}]},{type:e.PageActionType.IndexDoLike,name:"statIndexDoLike",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"},{from:e.ExtFrom.Args,key:"icon_idx",keyPath:"icon_idx"},{from:e.ExtFrom.Args,key:"__open_id",keyPath:"open_id"},{from:e.ExtFrom.Args,key:"group_id",keyPath:"group_id"},{from:e.ExtFrom.Data,key:"groupId",keyPath:"currentGroupId"}]},{type:e.PageActionType.IndexCancelLike,name:"statIndexCancelLike",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"},{from:e.ExtFrom.Args,key:"group_id",keyPath:"group_id"},{from:e.ExtFrom.Data,key:"groupId",keyPath:"currentGroupId"}]},{type:e.PageActionType.ClickIndexPermission,name:"toPermissionList",ext:[{key:"clickId",keyPath:"clickId"}]},{type:e.PageActionType.ClickIndexAbout,name:"toAbout",ext:[]},{type:e.PageActionType.CloseWelcome,name:"onCloseWelcomePage",ext:[{from:e.ExtFrom.Args,key:"toAcceptCount",keyPath:"detail.toAcceptCount"},{from:e.ExtFrom.Args,key:"acceptCount",keyPath:"detail.acceptCount"}]},{type:e.PageActionType.WelcomeButDoNothing,name:"exitDoingNothing",ext:[{key:"toAcceptCount",getter:function(){return this.data.permissionWaitingList&&this.data.permissionWaitingList.length||0}}]},{type:e.PageActionType.WelcomeClickAuthList,name:"onWelcomeClickAuthList",ext:[]},{type:e.PageActionType.IndexSearchClick,name:"takeSearch",ext:[]},{type:e.PageActionType.FeedBackBtnClick,name:"statFeedBackClick",ext:[]},{type:e.PageActionType.IndexGroupExposure,name:"statIndexGroupExposure",immediately:!0,ext:[{key:"idList",from:e.ExtFrom.Args,keyPath:"idList"}]},{type:e.PageActionType.IndexGroupClick,name:"statIndexGroupClick",ext:[{key:"groupId",from:e.ExtFrom.Args,keyPath:"groupId"},{key:"index",from:e.ExtFrom.Args,keyPath:"index"}]},{type:e.PageActionType.IndexGroupRealClick,name:"statIndexGroupRealClick",ext:[{key:"id",from:e.ExtFrom.Args,keyPath:"id"},{key:"index",from:e.ExtFrom.Args,keyPath:"index"}]},{type:e.PageActionType.EveryBuyItemCardClickImg,name:"statEveryBuyItemCardClickImg",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"pos",keyPath:"pos"}]},{type:e.PageActionType.EveryBuyItemCardClickDetail,name:"statEveryBuyItemCardClickDetail",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"pos",keyPath:"pos"}]},{type:e.PageActionType.EveryBuyItemCardClickAddToFavorite,name:"statEveryBuyItemCardClickAddToFavorite",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"pos",keyPath:"pos"}]},{type:e.PageActionType.EveryBuyItemCardClickRemoveToFavorite,name:"statEveryBuyItemCardClickRemoveToFavorite",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"pos",keyPath:"pos"}]},{type:e.PageActionType.EveryBuyItemCardClickRecommend,name:"statEveryBuyItemCardClickRecommend",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"pos",keyPath:"pos"}]},{type:e.PageActionType.IndexEveryBuyMore,name:"statIndexEveryBuyMore",ext:[]},{type:e.PageActionType.EveryBuyTabClick,name:"statEveryBuyTabClick",ext:[]},{type:e.PageActionType.GroupCreateClick,name:"statGroupCreateClick",ext:[{from:e.ExtFrom.Args,key:"code",keyPath:"code"}]},{type:e.PageActionType.EnterProfile,name:"statOpenUserProfile",ext:[{from:e.ExtFrom.Args,key:"openid",keyPath:"detail.openid"},{from:e.ExtFrom.Args,key:"groupid",keyPath:"detail.groupid"}]},{type:e.PageActionType.WillUGC,name:"willUGCReport"},{type:e.PageActionType.WillTakeMedia,name:"willTakeMediaReport"},{type:e.PageActionType.DidQuitTakeMedia,name:"didQuitTakeMediaReport",ext:[{from:e.ExtFrom.Args,key:"message",keyPath:"message"}]},{type:e.PageActionType.DidTakeMedia,name:"didTakeMediaReport",ext:[{from:e.ExtFrom.Args,key:"count",keyPath:"count"},{from:e.ExtFrom.Args,key:"list",keyPath:"list"}]},{type:e.PageActionType.ChooseIgnoreReason,name:"stateChooseIgnoreReason",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"},{from:e.ExtFrom.Args,key:"reason_id",keyPath:"reason_id"},{from:e.ExtFrom.Args,key:"reason_name",keyPath:"reason_name"}]},{type:e.PageActionType.IndexEntryGuideExpose,name:"statEntryGuideExpose",ext:[]},{type:e.PageActionType.IndexEntryGuideConfirm,name:"statEntryGuideConfirm",ext:[]},{type:e.PageActionType.IndexEntryGuideIgnore,name:"statEntryGuideIgnore",ext:[]},{type:e.PageActionType.IndexEntryGuideMask,name:"statEntryGuideMask",ext:[]},{type:e.PageActionType.EnterGroupProfile,name:"statClickGroup",ext:[{from:e.ExtFrom.Args,key:"groupId",keyPath:"groupId"},{from:e.ExtFrom.Data,key:"openid",keyPath:"openid"}]},{type:e.PageActionType.IndexEntryGuideMask,name:"statEntryGuideMask",ext:[]},{type:e.PageActionType.NonTimelineTipsClick,name:"nonTimelineTipsClick",ext:[]},{type:e.PageActionType.NonMoreTimelineTipsClick,name:"nonMoreTimelineTipsClick",ext:[]},{type:e.PageActionType.NonMoreTimelineTipsExpose,name:"nonMoreTimelineTipsExpose",ext:[]},{type:e.PageActionType.NonTimelineTipsExpose,name:"nonTimelineTipsExpose",ext:[]},{type:e.PageActionType.IndexMeClick,name:"stateClickMe",ext:[]},{type:e.PageActionType.IndexGroupFolderClick,name:"statClickGroupFolder",ext:[{from:e.ExtFrom.Args,key:"group_id",keyPath:"group_id"},{from:e.ExtFrom.Args,key:"index",keyPath:"index"},{from:e.ExtFrom.Args,key:"feed_id",keyPath:"feed_id"}]},{type:e.PageActionType.ClickCommentIcon,name:"statClickCommentIcon",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"source",keyPath:"source"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"}]},{type:e.PageActionType.ClickLikeIcon,name:"statClickLikeIcon",ext:[{from:e.ExtFrom.Args,key:"appid",keyPath:"appid"},{from:e.ExtFrom.Args,key:"item_code",keyPath:"item_code"},{from:e.ExtFrom.Args,key:"source",keyPath:"source"},{from:e.ExtFrom.Args,key:"comment_id",keyPath:"comment_id"}]}]}; 
 			}); 
		define("store/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={data:{compInputToolBar:{inputPanelShow:!1,panelHeight:0},compFacePanel:{panelShow:!1,maskShow:!1}}}; 
 			}); 
		define("utils/InfinityList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,i){for(var r in e)"object"!==a(e[r])||Array.isArray(e[r])?r.includes("dataIndex")&&"string"==typeof e[r]&&i.add(e[r]):t(e[r],i)}var i=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e){return e&&e.__esModule?e:{default:e}}(require("../libs/westore/diff")),n=require("./deepCopy"),d=0,o=0,l=function(){function a(t,i){var r=i.loadMoreCallback,n=void 0===r?function(){}:r,d=i.initList,o=void 0===d?[]:d;e(this,a),this.EXCHANGE_TOP_DISTANCE=-1e3,this.page=null,this.itemCount=10,this.lastRenderTime=0,this.throttle=64,this.throttleTimeout=0,this.timeline={list:[],itemsForRender:[],itemsRendered:[],dataMap:{}},this.lastScrollTop=0,this.scrollDirection="down",this.page=t,this.timeline.list=o,this.loadMoreCallback=n,this.transform()}return i(a,[{key:"transform",value:function(){var e=this;this.timeline.list.forEach(function(t,i){t.dirty=!0,t.height=0,e.timeline.itemsForRender.push({dataIndex:t.unique_id,order:i}),e.timeline.dataMap[t.unique_id]=t})}},{key:"appendList",value:function(e){var t=this,i=this.timeline.itemsForRender.length,a=n(this.page.data.timelineDataMap);e.forEach(function(e,a){e.dirty=!0,e.height=0,t.timeline.itemsForRender.push({dataIndex:e.unique_id,order:i+a}),t.timeline.dataMap[e.unique_id]=e});var d=this.timeline.dataMap,o=(0,r.default)({timelineDataMap:d},{timelineDataMap:a});this.page.setData(o)}},{key:"pushItem",value:function(e){var t=n(e);t.dirty=!0,this.timeline.itemsForRender.push({dataIndex:t.unique_id,order:this.timeline.itemsForRender[this.timeline.itemsForRender.length-1].order+1}),this.timeline.dataMap[t.unique_id]=t}},{key:"updateItem",value:function(e){var t=e.unique_id;if(!(t in this.timeline.dataMap))return 0;var i={timelineDataMap:n(this.timeline.dataMap)};e.dirty=!0,e.height=0,this.timeline.dataMap[t]=e;var a={timelineDataMap:this.timeline.dataMap},d=(0,r.default)(a,i),o=Array.from(new Set(Object.keys(d).filter(function(e){return e.includes("timelineDataMap")}).map(function(e){var t=e.match(/ID[a-f0-9]{32}/);return t&&t[0]||""}).filter(function(e){return e.length}).map(function(e){return"#"+e})));if(!o.length)return 0;var l=this.page,s=this.timeline;l.setData(d,function(){wx.createSelectorQuery().in(l).select(o[0]).boundingClientRect(function(e){if(!e)return 0;var t={timelineDataMap:n(l.data.timelineDataMap)};s.dataMap[e.id].height=e.height,s.dataMap[e.id].dirty=!1;var i={timelineDataMap:s.dataMap},a=(0,r.default)(i,t);l.setData(a)}).exec()})}},{key:"_reCalcOrder",value:function(){this.timeline.itemsForRender.forEach(function(e,t){e.order=t})}},{key:"removeItemById",value:function(e){var t=this;if("string"==typeof e){if(!this.timeline.dataMap[e])return 0;this.timeline.dataMap[e].removed=!0,this.timeline.dataMap[e].dirty=!0;for(var i=0;i<this.timeline.itemsForRender.length;i++)if(this.timeline.itemsForRender[i].dataIndex===e){this.timeline.itemsForRender.splice(i,1);break}this._reCalcOrder(),this.renderItems()}else Array.isArray(e)&&(e.forEach(function(e){if(t.timeline.dataMap[e]){t.timeline.dataMap[e].removed=!0,t.timeline.dataMap[e].dirty=!0;for(var i=0;i<t.timeline.itemsForRender.length;i++)if(t.timeline.itemsForRender[i].dataIndex===e){t.timeline.itemsForRender.splice(i,1);break}}}),this._reCalcOrder(),this.renderItems())}},{key:"_calcAccHeight",value:function(e){for(var t=0,i=this.timeline,a=0;a<=e&&a<i.itemsForRender.length;a++)t+=i.dataMap[i.itemsForRender[a].dataIndex].height||0;return t}},{key:"_calcPaddingTop",value:function(){for(var e=this.timeline,t=e.itemsRendered,i=Number.MAX_SAFE_INTEGER,a=0;a<t.length;a++){var r=t[a];r.order<i&&(i=r.order)}for(var n=e.itemsForRender,d=0,o=0;o<e.itemsForRender.length;o++)if(i===e.itemsForRender[o].order){d=o;break}if(0===i)return 0;for(var l=0,s=0;s<d;s++){var m=e.dataMap[n[s].dataIndex];m.removed||(l+=m.height)}return l}},{key:"renderItems",value:function(){var e=this;if(Date.now()-this.lastRenderTime<this.throttle||this.throttleTimeout)return 0;this._doRender(),this.throttleTimeout=setTimeout(function(){e._doRender(),clearTimeout(e.throttleTimeout),e.throttleTimeout=0},this.throttle)}},{key:"_doRender",value:function(){var e=Date.now();this.lastRenderTime=e;var i=this.itemCount,a=this.page,l=(a.pageScrollTop||0)+this.EXCHANGE_TOP_DISTANCE,s=this.timeline;if(0===a.data.timelineRenderItems.length){s.itemsRendered=s.itemsForRender.slice(0,i).map(function(e){return{dataIndex:e.dataIndex,order:e.order}});var m={timelineDataMap:s.dataMap,timelineRenderItems:s.itemsRendered,reservePaddingTop:0};a.setData(m,function(){wx.createSelectorQuery().in(a).selectAll(".item-wrap").boundingClientRect(function(e){if(!e)return 0;var t={timelineDataMap:n(a.data.timelineDataMap)};s.itemsRendered.forEach(function(t,i){s.dataMap[s.itemsForRender[i].dataIndex].height=e[i]&&e[i].height||0,s.dataMap[t.dataIndex].dirty=!1});var i={timelineDataMap:s.dataMap},d=(0,r.default)(i,t);a.setData(d)}).exec()})}else{for(var u=0,h=s.itemsForRender.length,c=0;c<h;c++){var f=this._calcAccHeight(c);if(l<f){u=c;break}c===h-1&&f>0&&(u=c)}u+i>h&&"function"==typeof this.loadMoreCallback&&this.loadMoreCallback(),u+i>h&&(u=h-i),u<0&&(u=0),o=u;var p=s.itemsForRender.slice(u,u+i),v=[],y=Math.min(i,h);p.forEach(function(e){v[e.order%y]={dataIndex:e.dataIndex,order:e.order}});var M={timelineRenderItems:v},g={timelineRenderItems:s.itemsRendered},R=(0,r.default)(M,g);Object.keys(R).length&&(s.itemsRendered=v,R.reservePaddingTop=this._calcPaddingTop(),d=R.reservePaddingTop,a.setData(R,function(){var e=new Set;t(R,e),(e=Array.from(e).filter(function(e){return s.dataMap[e].dirty}).map(function(e){return"#"+e})).length&&wx.createSelectorQuery().in(a).selectAll(e.join(",")).boundingClientRect(function(e){if(!e)return 0;var t={timelineDataMap:n(a.data.timelineDataMap)};e.forEach(function(e){s.dataMap[e.id].height=e.height,s.dataMap[e.id].dirty=!1});var i={timelineDataMap:s.dataMap},d=(0,r.default)(i,t);a.setData(d)}).exec()}))}}},{key:"reset",value:function(e){this.timeline.list=e,this.timeline.itemsForRender=[],this.page.data.timelineRenderItems=[],this.transform(),this.renderItems()}}]),a}();module.exports=l; 
 			}); 
		define("utils/backgroundAudioManager.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n=require("../core/eventcenter"),t={play:function(){},stop:function(){},pause:function(){},ended:function(){}},e=null,u="stop",o=wx.getBackgroundAudioManager();o.onPlay(function(){u="play",t.play.apply(this,arguments)}),o.onPause(function(){u="pause",n.emit("audioPause",e),t.pause.apply(this,arguments)}),o.onStop(function(){u="stop",n.emit("audioStop",e),e=null,t.stop.apply(this,arguments)}),o.onEnded(function(){u="ended",n.emit("audioEnded",e),e=null,t.ended.apply(this,arguments)});var i={play:function(u){var i=new Promise(function(o){t.play=function(){e=u,n.emit("audioPlay",e),o()}});return o.title=u.title||"",o.singer=u.singer||"",o.coverImgUrl=u.coverImgUrl||"",o.startTime=u.startTime||0,o.src=u.src||"",i},pause:function(){var n=new Promise(function(n){t.pause=function(){n()}});return o.pause(),n},stop:function(){var n=new Promise(function(n){t.stop=function(){n()}});return o.stop(),n}};module.exports={getCurrentItem:function(){return e||null},getStatus:function(){return u},play:function(n){e&&e.id===n.id||"play"!==u&&"pause"!==u?i.play(n):i.stop().then(function(){i.play(n)})},pause:function(){i.pause()},stop:function(){i.stop()}}; 
 			}); 
		define("utils/compose.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return 0===r.length?function(e){return e}:1===r.length?r[0]:r.reduce(function(e,r){return function(){return e(r.apply(void 0,arguments))}})}; 
 			}); 
		define("utils/cropper/core/scale.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.getNewScale=function(e,t,r,o,d){var u=void 0,a=void 0,n=void 0;return u=Math.round(d.x-o.x),a=Math.round(d.y-o.y),n=Math.round(Math.sqrt(u*u+a*a)),e+.001*r*(n-t)}; 
 			}); 
		define("utils/cropper/cut.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){var t=this,e=t.width,i=t.height,s=t.cut,x=s.x,c=void 0===x?0:x,o=s.y,l=void 0===o?0:o,d=s.width,y=void 0===d?e:d,a=s.height,n=void 0===a?i:a;t.outsideBound=function(e,i){t.imgLeft=e>=c?c:t.scaleWidth+e-c<=y?c+y-t.scaleWidth:e,t.imgTop=i>=l?l:t.scaleHeight+i-l<=n?l+n-t.scaleHeight:i},t.setBoundStyle=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},x=s.color,o=void 0===x?"#04b00f":x,d=s.mask,a=void 0===d?"rgba(0, 0, 0, 0.3)":d,r=s.lineWidth,h=void 0===r?1:r,p=[{start:{x:c-h,y:l+10-h},step1:{x:c-h,y:l-h},step2:{x:c+10-h,y:l-h}},{start:{x:c-h,y:l+n-10+h},step1:{x:c-h,y:l+n+h},step2:{x:c+10-h,y:l+n+h}},{start:{x:c+y-10+h,y:l-h},step1:{x:c+y+h,y:l-h},step2:{x:c+y+h,y:l+10-h}},{start:{x:c+y+h,y:l+n-10+h},step1:{x:c+y+h,y:l+n+h},step2:{x:c+y-10+h,y:l+n+h}}];t.ctx.beginPath(),t.ctx.setFillStyle(a),t.ctx.fillRect(0,0,c,i),t.ctx.fillRect(c,0,y,l),t.ctx.fillRect(c,l+n,y,i-l-n),t.ctx.fillRect(c+y,0,e-c-y,i),t.ctx.fill(),p.forEach(function(e){t.ctx.beginPath(),t.ctx.setStrokeStyle(o),t.ctx.setLineWidth(h),t.ctx.moveTo(e.start.x,e.start.y),t.ctx.lineTo(e.step1.x,e.step1.y),t.ctx.lineTo(e.step2.x,e.step2.y),t.ctx.stroke()})}}; 
 			}); 
		define("utils/cropper/default.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t={},o=(0,require("./utils/helper").getDevice)().pixelRatio;exports.default={id:{default:"cropper",get:function(){return t.id},set:function(e){"string"!=typeof e&&console.error("id："+e+" is invalid"),t.id=e}},width:{default:750,get:function(){return t.width},set:function(e){"number"!=typeof e&&console.error("width："+e+" is invalid"),t.width=e}},height:{default:750,get:function(){return t.height},set:function(e){"number"!=typeof e&&console.error("height："+e+" is invalid"),t.height=e}},pixelRatio:{default:o,get:function(){return t.pixelRatio},set:function(e){"number"!=typeof e&&console.error("pixelRatio："+e+" is invalid"),t.pixelRatio=e}},scale:{default:2.5,get:function(){return t.scale},set:function(e){"number"!=typeof e&&console.error("scale："+e+" is invalid"),t.scale=e}},zoom:{default:5,get:function(){return t.zoom},set:function(e){"number"!=typeof e?console.error("zoom："+e+" is invalid"):(e<0||e>10)&&console.error("zoom should be ranged in 0 ~ 10"),t.zoom=e}},src:{default:"",get:function(){return t.src},set:function(e){"string"!=typeof e&&console.error("src："+e+" is invalid"),t.src=e}},cut:{default:{},get:function(){return t.cut},set:function(o){"object"!==(void 0===o?"undefined":e(o))&&console.error("cut："+o+" is invalid"),t.cut=o}},boundStyle:{default:{},get:function(){return t.boundStyle},set:function(o){"object"!==(void 0===o?"undefined":e(o))&&console.error("boundStyle："+o+" is invalid"),t.boundStyle=o}},onReady:{default:null,get:function(){return t.ready},set:function(e){t.ready=e}},onBeforeImageLoad:{default:null,get:function(){return t.beforeImageLoad},set:function(e){t.beforeImageLoad=e}},onImageLoad:{default:null,get:function(){return t.imageLoad},set:function(e){t.imageLoad=e}},onBeforeDraw:{default:null,get:function(){return t.beforeDraw},set:function(e){t.beforeDraw=e}}}; 
 			}); 
		define("utils/cropper/handle.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,e){var r=[],o=!0,n=!1,u=void 0;try{for(var c,h=t[Symbol.iterator]();!(o=(c=h.next()).done)&&(r.push(c.value),!e||r.length!==e);o=!0);}catch(t){n=!0,u=t}finally{try{!o&&h.return&&h.return()}finally{if(n)throw u}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e=require("./utils/helper");exports.default={touchStart:function(r){var o=this,n=t(r.touches,2),u=n[0],c=n[1];o.src&&((0,e.setTouchState)(o,!0,null,null),o.__oneTouchStart(u),r.touches.length>=2&&o.__twoTouchStart(u,c))},touchMove:function(r){var o=this,n=t(r.touches,2),u=n[0],c=n[1];o.src&&((0,e.setTouchState)(o,null,!0),1===r.touches.length&&o.__oneTouchMove(u),r.touches.length>=2&&o.__twoTouchMove(u,c))},touchEnd:function(t){var r=this;r.src&&((0,e.setTouchState)(r,!1,!1,!0),r.__xtouchEnd())}}; 
 			}); 
		define("utils/cropper/main.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function e(e,t){for(var r=0;r<t.length;r++){var u=t[r];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,r,u){return r&&e(t.prototype,r),u&&e(t,u),t}}(),u=require("./utils/helper"),a=e(require("./default")),n=e(require("./prepare")),o=e(require("./observer")),i=e(require("./methods")),l=e(require("./update")),c=e(require("./handle")),f=e(require("./cut")),p=__VERSION__,s=function(){function e(r){t(this,e);var n=this,o={};return(0,u.validator)(n,a.default),Object.keys(a.default).forEach(function(e){o[e]=a.default[e].default}),Object.assign(n,o,r),n.prepare(),n.attachPage(),n.createCtx(),n.observer(),n.cutt(),n.methods(),n.init(),n.update(),n}return r(e,[{key:"init",value:function(){var e=this,t=e.src;return e.version=p,"function"==typeof e.onReady&&e.onReady(e.ctx,e),t?e.pushOrign(t):e.updateCanvas(),(0,u.setTouchState)(e,!1,!1,!1),e.oldScale=1,e.newScale=1,e}}]),e}();Object.assign(s.prototype,c.default),s.prototype.prepare=n.default,s.prototype.observer=o.default,s.prototype.methods=i.default,s.prototype.cutt=f.default,s.prototype.update=l.default,exports.default=s; 
 			}); 
		define("utils/cropper/methods.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){var i=this,n=i.width,r=i.height,o=i.id,c=i.targetId,s=i.pixelRatio,u=i.cut,h=u.x,d=void 0===h?0:h,g=u.y,l=void 0===g?0:g,f=u.width,p=void 0===f?n:f,v=u.height,m=void 0===v?r:v;i.updateCanvas=function(t){return i.croperTarget&&i.ctx.drawImage(i.croperTarget,i.imgLeft,i.imgTop,i.scaleWidth,i.scaleHeight),(0,e.isFunc)(i.onBeforeDraw)&&i.onBeforeDraw(i.ctx,i),i.setBoundStyle(i.boundStyle),i.ctx.draw(!1,t),i},i.pushOrign=function(a){return i.src=a,(0,e.isFunc)(i.onBeforeImageLoad)&&i.onBeforeImageLoad(i.ctx,i),(0,t.getImageInfo)({src:a}).then(function(e){var t=e.width/e.height,a=p/m;return i.croperTarget=e.path,t<a?(i.rectX=d,i.baseWidth=p,i.baseHeight=p/t,i.rectY=l-Math.abs((m-i.baseHeight)/2)):(i.rectY=l,i.baseWidth=m*t,i.baseHeight=m,i.rectX=d-Math.abs((p-i.baseWidth)/2)),i.imgLeft=i.rectX,i.imgTop=i.rectY,i.scaleWidth=i.baseWidth,i.scaleHeight=i.baseHeight,i.update(),new Promise(function(e){i.updateCanvas(e)})}).then(function(){(0,e.isFunc)(i.onImageLoad)&&i.onImageLoad(i.ctx,i)})},i.getCropperBase64=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};a.default.convertToBMP({canvasId:o,x:d,y:l,width:p,height:m},e)},i.getCropperImage=function(a,n){var r=a,u={canvasId:o,x:d,y:l,width:p,height:m},h=function(){return Promise.resolve()};return(0,e.isPlainObject)(r)&&r.original&&(h=function(){return i.targetCtx.drawImage(i.croperTarget,i.imgLeft*s,i.imgTop*s,i.scaleWidth*s,i.scaleHeight*s),u={canvasId:c,x:d*s,y:l*s,width:p*s,height:m*s},(0,t.draw)(i.targetCtx)}),h().then(function(){(0,e.isPlainObject)(r)&&(u=Object.assign({},u,r)),(0,e.isFunc)(r)&&(n=r);var a=u.componentContext?[u,u.componentContext]:[u];return t.canvasToTempFilePath.apply(null,a)}).then(function(t){var a=t.tempFilePath;return(0,e.isFunc)(n)?n.call(i,a,null):a}).catch(function(t){if(!(0,e.isFunc)(n))throw t;n.call(i,null,t)})}};var e=require("./utils/tools"),t=require("./utils/promisify"),a=function(e){return e&&e.__esModule?e:{default:e}}(require("./utils/canvas2base64")); 
 			}); 
		define("utils/cropper/observer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){var o=this;o.on=function(i,n){return t.indexOf(i)>-1?(0,e.isFunc)(n)&&("ready"===i?n(o):o["on"+(0,r.firstLetterUpper)(i)]=n):console.error("event: "+i+" is invalid"),o}};var e=require("./utils/tools"),r=require("./utils/helper"),t=["ready","beforeImageLoad","beforeDraw","imageLoad"]; 
 			}); 
		define("utils/cropper/prepare.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){var t=this;t.attachPage=function(){var e=getCurrentPages(),n=e[e.length-1];Object.defineProperty(n,"wecropper",{get:function(){return console.warn("Instance will not be automatically bound to the page after v1.4.0\n\nPlease use a custom instance name instead\n\nExample: \nthis.mycropper = new WeCropper(options)\n\n// ...\nthis.mycropper.getCropperImage()"),t},configurable:!0})},t.createCtx=function(){var e=t.id,n=t.targetId;e?(t.ctx=t.ctx||wx.createCanvasContext(e),t.targetCtx=t.targetCtx||wx.createCanvasContext(n)):console.error("constructor: create canvas context failed, 'id' must be valuable")},t.deviceRadio=e/750};var e=(0,require("./utils/helper").getDevice)().windowWidth; 
 			}); 
		define("utils/cropper/update.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){var e=this;e.src&&(e.__oneTouchStart=function(t){e.touchX0=Math.round(t.x),e.touchY0=Math.round(t.y)},e.__oneTouchMove=function(t){var o=void 0,a=void 0;if(e.touchended)return e.updateCanvas();o=Math.round(t.x-e.touchX0),a=Math.round(t.y-e.touchY0);var c=Math.round(e.rectX+o),n=Math.round(e.rectY+a);e.outsideBound(c,n),e.updateCanvas()},e.__twoTouchStart=function(t,o){var a=void 0,c=void 0,n=void 0;e.touchX1=Math.round(e.rectX+e.scaleWidth/2),e.touchY1=Math.round(e.rectY+e.scaleHeight/2),a=Math.round(o.x-t.x),c=Math.round(o.y-t.y),n=Math.round(Math.sqrt(a*a+c*c)),e.oldDistance=n},e.__twoTouchMove=function(o,a){var c=e.oldScale,n=e.oldDistance,u=e.scale,r=e.zoom;e.newScale=(0,t.getNewScale)(c,n,r,o,a),e.newScale<=1&&(e.newScale=1),e.newScale>=u&&(e.newScale=u),e.scaleWidth=Math.round(e.newScale*e.baseWidth),e.scaleHeight=Math.round(e.newScale*e.baseHeight);var d=Math.round(e.touchX1-e.scaleWidth/2),h=Math.round(e.touchY1-e.scaleHeight/2);e.outsideBound(d,h),e.updateCanvas()},e.__xtouchEnd=function(){e.oldScale=e.newScale,e.rectX=e.imgLeft,e.rectY=e.imgTop})};var t=require("./core/scale"); 
 			}); 
		define("utils/cropper/utils/canvas2base64.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){return"data:"+t+";base64,"+e}function t(e){return"image/"+(e=e.toLowerCase().replace(/jpg/i,"jpeg")).match(/png|jpeg|bmp|gif/)[0]}function n(e){var t="";if("string"==typeof e)t=e;else for(var n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return i.default.encode(t)}function r(e,t,n,r,o,a){wx.canvasGetImageData({canvasId:e,x:t,y:n,width:r,height:o,success:function(e){a(e,null)},fail:function(e){a(null,e)}})}function o(e){var t=e.width,r=e.height,o=t*r*3,a=o+54,i=[66,77,255&a,a>>8&255,a>>16&255,a>>24&255,0,0,0,0,54,0,0,0],u=[40,0,0,0,255&t,t>>8&255,t>>16&255,t>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,1,0,24,0,0,0,0,0,255&o,o>>8&255,o>>16&255,o>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=(4-3*t%4)%4,f=e.data,d="",s=t<<2,g=r,l=String.fromCharCode;do{for(var v=s*(g-1),h="",p=0;p<t;p++){var m=p<<2;h+=l(f[v+m+2])+l(f[v+m+1])+l(f[v+m])}for(var b=0;b<c;b++)h+=String.fromCharCode(0);d+=h}while(--g);return n(i.concat(u))+n(d)}function a(n,a,i,c,f,d){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(){};void 0===d&&(d="png"),d=t(d),/bmp/.test(d)?r(n,a,i,c,f,function(t,n){var r=o(t);(0,u.isFunc)(s)&&s(e(r,"image/"+d),n)}):console.error("暂不支持生成'"+d+"'类型的base64图片")}Object.defineProperty(exports,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(require("base-64")),u=require("./tools");exports.default={convertToImage:a,convertToBMP:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a(e.canvasId,e.x,e.y,e.width,e.height,"bmp",arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){})}}; 
 			}); 
		define("utils/cropper/utils/helper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.firstLetterUpper=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},exports.setTouchState=function(e){for(var r=arguments.length,o=Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];t.forEach(function(t,r){void 0!==o[r]&&(e[t]=o[r])})},exports.validator=function(e,t){Object.defineProperties(e,t)},exports.getDevice=function(){return e||(e=wx.getSystemInfoSync()),e};var e=void 0,t=["touchstarted","touchmoved","touchended"]; 
 			}); 
		define("utils/cropper/utils/promisify.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return function(){for(var n=arguments.length,t=Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(n,o){r.success=function(e){n(e)},r.fail=function(e){o(e)},e.apply(void 0,[r].concat(t))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.wxPromise=e,exports.draw=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise(function(t){e.draw(n,t)})};exports.getImageInfo=e(wx.getImageInfo),exports.canvasToTempFilePath=e(wx.canvasToTempFilePath); 
 			}); 
		define("utils/cropper/utils/tools.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};exports.isStr=function(t){return"string"==typeof t},exports.isNum=function(t){return"number"==typeof t},exports.isArr=Array.isArray,exports.isUndef=function(t){return void 0===t},exports.isTrue=function(t){return!0===t},exports.isFalse=function(t){return!1===t},exports.isFunc=function(t){return"function"==typeof t},exports.isObj=exports.isObject=function(r){return null!==r&&"object"===(void 0===r?"undefined":t(r))};var r=Object.prototype.toString;exports.isPlainObject=function(t){return"[object Object]"===r.call(t)};var o=Object.prototype.hasOwnProperty;exports.hasOwn=function(t,r){return o.call(t,r)},exports.noop=function(t,r,o){},exports.isValidArrayIndex=function(t){var r=parseFloat(String(t));return r>=0&&Math.floor(r)===r&&isFinite(t)}; 
 			}); 
		define("utils/datetime.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={formatTime:function(e){function t(e){return e<10?"0"+e:e}e=parseInt(e,10);var r=new Date(1e3*e);return t(r.getFullYear())+"-"+t(r.getMonth()+1)+"-"+t(r.getDate())+" "+t(r.getHours())+":"+t(r.getMinutes())},formatUpdateTime:function(e){function t(e){return e<10?"0"+e:e}var r=(new Date).getTime();Math.max(parseInt((r-e)/1e3/60),1);return t((r=new Date(e)).getFullYear())+"-"+t(r.getMonth()+1)+"-"+t(r.getDate())}}; 
 			}); 
		define("utils/deepCopy.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(n,t,o){"object"===("undefined"==typeof exports?"undefined":e(exports))?module.exports=o():"function"==typeof define&&define.amd?define(o):t.dcopy=o()}(0,void 0,function(){function n(e,n,t){return e instanceof Array?(e.push(t),e[e.length-1]):e instanceof Object?(e[n]=t,e[n]):void 0}return function(t){function o(e,t){for(var i in e){var f=e[i];if(f instanceof Date)n(t,i,c=new Date(f.getTime()));else if(f instanceof Function)n(t,i,c=f);else if(f instanceof Array)o(f,r=n(t,i,c=[]));else if(f instanceof Object){var r=n(t,i,c={});o(f,r)}else{var c=f;n(t,i,c)}}}if(/number|string|boolean/.test(void 0===t?"undefined":e(t)))return t;if(t instanceof Date)return new Date(t.getTime());var i=t instanceof Array?[]:{};return o(t,i),i}}); 
 			}); 
		define("utils/define.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={OPEN_ENTRY_SCENE:{API_RECOMMEND:1,H5_RECOMMEND:2,SHARE_GROUP:3}}; 
 			}); 
		define("utils/dict.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function u(u){if(Array.isArray(u)){for(var n=0,a=Array(u.length);n<u.length;n++)a[n]=u[n];return a}return Array.from(u)}function n(u){var n=[],a=u.length>2?2:u.length;n.push(u);for(var i=1;i<a;i++)n.push(u.slice(0,i));return n}function a(u,n){for(var a=[],i=0;i<u.length;i++)for(var e=i+1;e<=u.length;e++)a.push(n?u.slice(i,e).join(""):u.slice(i,e));return a}var i={a:"阿啊腌嗄吖锕",e:"额阿俄恶鹅遏鄂厄饿峨扼娥鳄哦蛾噩愕讹锷垩婀鹗萼谔莪腭锇颚呃阏屙苊轭",ai:"爱埃艾碍癌哀挨矮隘蔼唉皑哎霭捱暧嫒嗳瑷嗌锿砹",ei:"诶",xi:"系西席息希习吸喜细析戏洗悉锡溪惜稀袭夕洒晰昔牺腊烯熙媳栖膝隙犀蹊硒兮熄曦禧嬉玺奚汐徙羲铣淅嘻歙熹矽蟋郗唏皙隰樨浠忾蜥檄郄翕阋鳃舾屣葸螅咭粞觋欷僖醯鼷裼穸饩舄禊诶菥蓰",yi:"一以已意议义益亿易医艺食依移衣异伊仪宜射遗疑毅谊亦疫役忆抑尾乙译翼蛇溢椅沂泄逸蚁夷邑怡绎彝裔姨熠贻矣屹颐倚诣胰奕翌疙弈轶蛾驿壹猗臆弋铱旖漪迤佚翊诒怿痍懿饴峄揖眙镒仡黟肄咿翳挹缢呓刈咦嶷羿钇殪荑薏蜴镱噫癔苡悒嗌瘗衤佾埸圯舣酏劓",an:"安案按岸暗鞍氨俺胺铵谙庵黯鹌桉埯犴揞",han:"汉韩含旱寒汗涵函喊憾罕焊翰邯撼瀚憨捍酣悍鼾邗颔蚶晗菡旰顸犴焓撖",ang:"昂仰盎肮",ao:"奥澳傲熬凹鳌敖遨鏖袄坳翱嗷拗懊岙螯骜獒鏊艹媪廒聱",wa:"瓦挖娃洼袜蛙凹哇佤娲呙腽",yu:"于与育余预域予遇奥语誉玉鱼雨渔裕愈娱欲吁舆宇羽逾豫郁寓吾狱喻御浴愉禹俞邪榆愚渝尉淤虞屿峪粥驭瑜禺毓钰隅芋熨瘀迂煜昱汩於臾盂聿竽萸妪腴圄谕觎揄龉谀俣馀庾妤瘐鬻欤鹬阈嵛雩鹆圉蜮伛纡窬窳饫蓣狳肀舁蝓燠",niu:"牛纽扭钮拗妞忸狃",o:"哦噢喔",ba:"把八巴拔伯吧坝爸霸罢芭跋扒叭靶疤笆耙鲅粑岜灞钯捌菝魃茇",pa:"怕帕爬扒趴琶啪葩耙杷钯筢",pi:"被批副否皮坏辟啤匹披疲罢僻毗坯脾譬劈媲屁琵邳裨痞癖陂丕枇噼霹吡纰砒铍淠郫埤濞睥芘蚍圮鼙罴蜱疋貔仳庀擗甓陴",bi:"比必币笔毕秘避闭佛辟壁弊彼逼碧鼻臂蔽拂泌璧庇痹毙弼匕鄙陛裨贲敝蓖吡篦纰俾铋毖筚荸薜婢哔跸濞秕荜愎睥妣芘箅髀畀滗狴萆嬖襞舭",bai:"百白败摆伯拜柏佰掰呗擘捭稗",bo:"波博播勃拨薄佛伯玻搏柏泊舶剥渤卜驳簿脖膊簸菠礴箔铂亳钵帛擘饽跛钹趵檗啵鹁擗踣",bei:"北被备倍背杯勃贝辈悲碑臂卑悖惫蓓陂钡狈呗焙碚褙庳鞴孛鹎邶鐾",ban:"办版半班般板颁伴搬斑扮拌扳瓣坂阪绊钣瘢舨癍",pan:"判盘番潘攀盼拚畔胖叛拌蹒磐爿蟠泮袢襻丬",bin:"份宾频滨斌彬濒殡缤鬓槟摈膑玢镔豳髌傧",bang:"帮邦旁榜棒膀镑绑傍磅蚌谤梆浜蒡",pang:"旁庞乓磅螃彷滂逄耪",beng:"泵崩蚌蹦迸绷甭嘣甏堋",bao:"报保包宝暴胞薄爆炮饱抱堡剥鲍曝葆瀑豹刨褒雹孢苞煲褓趵鸨龅勹",bu:"不部步布补捕堡埔卜埠簿哺怖钚卟瓿逋晡醭钸",pu:"普暴铺浦朴堡葡谱埔扑仆蒲曝瀑溥莆圃璞濮菩蹼匍噗氆攵镨攴镤",mian:"面棉免绵缅勉眠冕娩腼渑湎沔黾宀眄",po:"破繁坡迫颇朴泊婆泼魄粕鄱珀陂叵笸泺皤钋钷",fan:"反范犯繁饭泛翻凡返番贩烦拚帆樊藩矾梵蕃钒幡畈蘩蹯燔",fu:"府服副负富复福夫妇幅付扶父符附腐赴佛浮覆辅傅伏抚赋辐腹弗肤阜袱缚甫氟斧孚敷俯拂俘咐腑孵芙涪釜脯茯馥宓绂讣呋罘麸蝠匐芾蜉跗凫滏蝮驸绋蚨砩桴赙菔呒趺苻拊阝鲋怫稃郛莩幞祓艴黻黼鳆",ben:"本体奔苯笨夯贲锛畚坌",feng:"风丰封峰奉凤锋冯逢缝蜂枫疯讽烽俸沣酆砜葑唪",bian:"变便边编遍辩鞭辨贬匾扁卞汴辫砭苄蝙鳊弁窆笾煸褊碥忭缏",pian:"便片篇偏骗翩扁骈胼蹁谝犏缏",zhen:"镇真针圳振震珍阵诊填侦臻贞枕桢赈祯帧甄斟缜箴疹砧榛鸩轸稹溱蓁胗椹朕畛浈",biao:"表标彪镖裱飚膘飙镳婊骠飑杓髟鳔灬瘭",piao:"票朴漂飘嫖瓢剽缥殍瞟骠嘌莩螵",huo:"和活或货获火伙惑霍祸豁嚯藿锪蠖钬耠镬夥灬劐攉",bie:"别鳖憋瘪蹩",min:"民敏闽闵皿泯岷悯珉抿黾缗玟愍苠鳘",fen:"分份纷奋粉氛芬愤粪坟汾焚酚吩忿棼玢鼢瀵偾鲼",bing:"并病兵冰屏饼炳秉丙摒柄槟禀枋邴冫",geng:"更耕颈庚耿梗埂羹哽赓绠鲠",fang:"方放房防访纺芳仿坊妨肪邡舫彷枋鲂匚钫",xian:"现先县见线限显险献鲜洗宪纤陷闲贤仙衔掀咸嫌掺羡弦腺痫娴舷馅酰铣冼涎暹籼锨苋蚬跹岘藓燹鹇氙莶霰跣猃彡祆筅",fou:"不否缶",ca:"拆擦嚓礤",cha:"查察差茶插叉刹茬楂岔诧碴嚓喳姹杈汊衩搽槎镲苴檫馇锸猹",cai:"才采财材菜彩裁蔡猜踩睬",can:"参残餐灿惨蚕掺璨惭粲孱骖黪",shen:"信深参身神什审申甚沈伸慎渗肾绅莘呻婶娠砷蜃哂椹葚吲糁渖诜谂矧胂",cen:"参岑涔",san:"三参散伞叁糁馓毵",cang:"藏仓苍沧舱臧伧",zang:"藏脏葬赃臧奘驵",chen:"称陈沈沉晨琛臣尘辰衬趁忱郴宸谌碜嗔抻榇伧谶龀肜",cao:"草操曹槽糙嘈漕螬艚屮",ce:"策测册侧厕栅恻",ze:"责则泽择侧咋啧仄箦赜笮舴昃迮帻",zhai:"债择齐宅寨侧摘窄斋祭翟砦瘵哜",dao:"到道导岛倒刀盗稻蹈悼捣叨祷焘氘纛刂帱忉",ceng:"层蹭噌",zha:"查扎炸诈闸渣咋乍榨楂札栅眨咤柞喳喋铡蚱吒怍砟揸痄哳齄",chai:"差拆柴钗豺侪虿瘥",ci:"次此差词辞刺瓷磁兹慈茨赐祠伺雌疵鹚糍呲粢",zi:"资自子字齐咨滋仔姿紫兹孜淄籽梓鲻渍姊吱秭恣甾孳訾滓锱辎趑龇赀眦缁呲笫谘嵫髭茈粢觜耔",cuo:"措错磋挫搓撮蹉锉厝嵯痤矬瘥脞鹾",chan:"产单阐崭缠掺禅颤铲蝉搀潺蟾馋忏婵孱觇廛谄谗澶骣羼躔蒇冁",shan:"山单善陕闪衫擅汕扇掺珊禅删膳缮赡鄯栅煽姗跚鳝嬗潸讪舢苫疝掸膻钐剡蟮芟埏彡骟",zhan:"展战占站崭粘湛沾瞻颤詹斩盏辗绽毡栈蘸旃谵搌",xin:"新心信辛欣薪馨鑫芯锌忻莘昕衅歆囟忄镡",lian:"联连练廉炼脸莲恋链帘怜涟敛琏镰濂楝鲢殓潋裢裣臁奁莶蠊蔹",chang:"场长厂常偿昌唱畅倡尝肠敞倘猖娼淌裳徜昶怅嫦菖鲳阊伥苌氅惝鬯",zhang:"长张章障涨掌帐胀彰丈仗漳樟账杖璋嶂仉瘴蟑獐幛鄣嫜",chao:"超朝潮炒钞抄巢吵剿绰嘲晁焯耖怊",zhao:"着照招找召朝赵兆昭肇罩钊沼嘲爪诏濯啁棹笊",zhou:"调州周洲舟骤轴昼宙粥皱肘咒帚胄绉纣妯啁诌繇碡籀酎荮",che:"车彻撤尺扯澈掣坼砗屮",ju:"车局据具举且居剧巨聚渠距句拒俱柜菊拘炬桔惧矩鞠驹锯踞咀瞿枸掬沮莒橘飓疽钜趄踽遽琚龃椐苣裾榘狙倨榉苴讵雎锔窭鞫犋屦醵",cheng:"成程城承称盛抢乘诚呈净惩撑澄秤橙骋逞瞠丞晟铛埕塍蛏柽铖酲裎枨",rong:"容荣融绒溶蓉熔戎榕茸冗嵘肜狨蝾",sheng:"生声升胜盛乘圣剩牲甸省绳笙甥嵊晟渑眚",deng:"等登邓灯澄凳瞪蹬噔磴嶝镫簦戥",zhi:"制之治质职只志至指织支值知识直致执置止植纸拓智殖秩旨址滞氏枝芝脂帜汁肢挚稚酯掷峙炙栉侄芷窒咫吱趾痔蜘郅桎雉祉郦陟痣蛭帙枳踯徵胝栀贽祗豸鸷摭轵卮轾彘觯絷跖埴夂黹忮骘膣踬",zheng:"政正证争整征郑丁症挣蒸睁铮筝拯峥怔诤狰徵钲",tang:"堂唐糖汤塘躺趟倘棠烫淌膛搪镗傥螳溏帑羰樘醣螗耥铴瑭",chi:"持吃池迟赤驰尺斥齿翅匙痴耻炽侈弛叱啻坻眙嗤墀哧茌豉敕笞饬踟蚩柢媸魑篪褫彳鸱螭瘛眵傺",shi:"是时实事市十使世施式势视识师史示石食始士失适试什泽室似诗饰殖释驶氏硕逝湿蚀狮誓拾尸匙仕柿矢峙侍噬嗜栅拭嘘屎恃轼虱耆舐莳铈谥炻豕鲥饣螫酾筮埘弑礻蓍鲺贳",qi:"企其起期气七器汽奇齐启旗棋妻弃揭枝歧欺骑契迄亟漆戚岂稽岐琦栖缉琪泣乞砌祁崎绮祺祈凄淇杞脐麒圻憩芪伎俟畦耆葺沏萋骐鳍綦讫蕲屺颀亓碛柒啐汔綮萁嘁蛴槭欹芑桤丌蜞",chuai:"揣踹啜搋膪",tuo:"托脱拓拖妥驼陀沱鸵驮唾椭坨佗砣跎庹柁橐乇铊沲酡鼍箨柝",duo:"多度夺朵躲铎隋咄堕舵垛惰哆踱跺掇剁柁缍沲裰哚隳",xue:"学血雪削薛穴靴谑噱鳕踅泶彐",chong:"重种充冲涌崇虫宠忡憧舂茺铳艟",chou:"筹抽绸酬愁丑臭仇畴稠瞅踌惆俦瘳雠帱",qiu:"求球秋丘邱仇酋裘龟囚遒鳅虬蚯泅楸湫犰逑巯艽俅蝤赇鼽糗",xiu:"修秀休宿袖绣臭朽锈羞嗅岫溴庥馐咻髹鸺貅",chu:"出处础初助除储畜触楚厨雏矗橱锄滁躇怵绌搐刍蜍黜杵蹰亍樗憷楮",tuan:"团揣湍疃抟彖",zhui:"追坠缀揣椎锥赘惴隹骓缒",chuan:"传川船穿串喘椽舛钏遄氚巛舡",zhuan:"专转传赚砖撰篆馔啭颛",yuan:"元员院原源远愿园援圆缘袁怨渊苑宛冤媛猿垣沅塬垸鸳辕鸢瑗圜爰芫鼋橼螈眢箢掾",cuan:"窜攒篡蹿撺爨汆镩",chuang:"创床窗闯幢疮怆",zhuang:"装状庄壮撞妆幢桩奘僮戆",chui:"吹垂锤炊椎陲槌捶棰",chun:"春纯醇淳唇椿蠢鹑朐莼肫蝽",zhun:"准屯淳谆肫窀",cu:"促趋趣粗簇醋卒蹴猝蹙蔟殂徂",dun:"吨顿盾敦蹲墩囤沌钝炖盹遁趸砘礅",qu:"区去取曲趋渠趣驱屈躯衢娶祛瞿岖龋觑朐蛐癯蛆苣阒诎劬蕖蘧氍黢蠼璩麴鸲磲",xu:"需许续须序徐休蓄畜虚吁绪叙旭邪恤墟栩絮圩婿戌胥嘘浒煦酗诩朐盱蓿溆洫顼勖糈砉醑",chuo:"辍绰戳淖啜龊踔辶",zu:"组族足祖租阻卒俎诅镞菹",ji:"济机其技基记计系期际及集级几给积极己纪即继击既激绩急奇吉季齐疾迹鸡剂辑籍寄挤圾冀亟寂暨脊跻肌稽忌饥祭缉棘矶汲畸姬藉瘠骥羁妓讥稷蓟悸嫉岌叽伎鲫诘楫荠戟箕霁嵇觊麂畿玑笈犄芨唧屐髻戢佶偈笄跽蒺乩咭赍嵴虮掎齑殛鲚剞洎丌墼蕺彐芰哜",cong:"从丛匆聪葱囱琮淙枞骢苁璁",zong:"总从综宗纵踪棕粽鬃偬枞腙",cou:"凑辏腠楱",cui:"衰催崔脆翠萃粹摧璀瘁悴淬啐隹毳榱",wei:"为位委未维卫围违威伟危味微唯谓伪慰尾魏韦胃畏帷喂巍萎蔚纬潍尉渭惟薇苇炜圩娓诿玮崴桅偎逶倭猥囗葳隗痿猬涠嵬韪煨艉隹帏闱洧沩隈鲔軎",cun:"村存寸忖皴",zuo:"作做座左坐昨佐琢撮祚柞唑嘬酢怍笮阼胙",zuan:"钻纂攥缵躜",da:"大达打答搭沓瘩惮嗒哒耷鞑靼褡笪怛妲",dai:"大代带待贷毒戴袋歹呆隶逮岱傣棣怠殆黛甙埭诒绐玳呔迨",tai:"大台太态泰抬胎汰钛苔薹肽跆邰鲐酞骀炱",ta:"他它她拓塔踏塌榻沓漯獭嗒挞蹋趿遢铊鳎溻闼",dan:"但单石担丹胆旦弹蛋淡诞氮郸耽殚惮儋眈疸澹掸膻啖箪聃萏瘅赕",lu:"路六陆录绿露鲁卢炉鹿禄赂芦庐碌麓颅泸卤潞鹭辘虏璐漉噜戮鲈掳橹轳逯渌蓼撸鸬栌氇胪镥簏舻辂垆",tan:"谈探坦摊弹炭坛滩贪叹谭潭碳毯瘫檀痰袒坍覃忐昙郯澹钽锬",ren:"人任认仁忍韧刃纫饪妊荏稔壬仞轫亻衽",jie:"结解价界接节她届介阶街借杰洁截姐揭捷劫戒皆竭桔诫楷秸睫藉拮芥诘碣嗟颉蚧孑婕疖桀讦疥偈羯袷哜喈卩鲒骱",yan:"研严验演言眼烟沿延盐炎燕岩宴艳颜殷彦掩淹阎衍铅雁咽厌焰堰砚唁焉晏檐蜒奄俨腌妍谚兖筵焱偃闫嫣鄢湮赝胭琰滟阉魇酽郾恹崦芫剡鼹菸餍埏谳讠厣罨",dang:"当党档荡挡宕砀铛裆凼菪谠",tao:"套讨跳陶涛逃桃萄淘掏滔韬叨洮啕绦饕鼗",tiao:"条调挑跳迢眺苕窕笤佻啁粜髫铫祧龆蜩鲦",te:"特忑忒铽慝",de:"的地得德底锝",dei:"得",di:"的地第提低底抵弟迪递帝敌堤蒂缔滴涤翟娣笛棣荻谛狄邸嘀砥坻诋嫡镝碲骶氐柢籴羝睇觌",ti:"体提题弟替梯踢惕剔蹄棣啼屉剃涕锑倜悌逖嚏荑醍绨鹈缇裼",tui:"推退弟腿褪颓蜕忒煺",you:"有由又优游油友右邮尤忧幼犹诱悠幽佑釉柚铀鱿囿酉攸黝莠猷蝣疣呦蚴莸莜铕宥繇卣牖鼬尢蚰侑",dian:"电点店典奠甸碘淀殿垫颠滇癫巅惦掂癜玷佃踮靛钿簟坫阽",tian:"天田添填甜甸恬腆佃舔钿阗忝殄畋栝掭",zhu:"主术住注助属逐宁著筑驻朱珠祝猪诸柱竹铸株瞩嘱贮煮烛苎褚蛛拄铢洙竺蛀渚伫杼侏澍诛茱箸炷躅翥潴邾槠舳橥丶瘃麈疰",nian:"年念酿辗碾廿捻撵拈蔫鲶埝鲇辇黏",diao:"调掉雕吊钓刁貂凋碉鲷叼铫铞",yao:"要么约药邀摇耀腰遥姚窑瑶咬尧钥谣肴夭侥吆疟妖幺杳舀窕窈曜鹞爻繇徭轺铫鳐崾珧",die:"跌叠蝶迭碟爹谍牒耋佚喋堞瓞鲽垤揲蹀",she:"设社摄涉射折舍蛇拾舌奢慑赦赊佘麝歙畲厍猞揲滠",ye:"业也夜叶射野液冶喝页爷耶邪咽椰烨掖拽曳晔谒腋噎揶靥邺铘揲",xie:"些解协写血叶谢械鞋胁斜携懈契卸谐泄蟹邪歇泻屑挟燮榭蝎撷偕亵楔颉缬邂鲑瀣勰榍薤绁渫廨獬躞",zhe:"这者着著浙折哲蔗遮辙辄柘锗褶蜇蛰鹧谪赭摺乇磔螫",ding:"定订顶丁鼎盯钉锭叮仃铤町酊啶碇腚疔玎耵",diu:"丢铥",ting:"听庭停厅廷挺亭艇婷汀铤烃霆町蜓葶梃莛",dong:"动东董冬洞懂冻栋侗咚峒氡恫胴硐垌鸫岽胨",tong:"同通统童痛铜桶桐筒彤侗佟潼捅酮砼瞳恸峒仝嗵僮垌茼",zhong:"中重种众终钟忠仲衷肿踵冢盅蚣忪锺舯螽夂",dou:"都斗读豆抖兜陡逗窦渎蚪痘蔸钭篼",du:"度都独督读毒渡杜堵赌睹肚镀渎笃竺嘟犊妒牍蠹椟黩芏髑",duan:"断段短端锻缎煅椴簖",dui:"对队追敦兑堆碓镦怼憝",rui:"瑞兑锐睿芮蕊蕤蚋枘",yue:"月说约越乐跃兑阅岳粤悦曰钥栎钺樾瀹龠哕刖",tun:"吞屯囤褪豚臀饨暾氽",hui:"会回挥汇惠辉恢徽绘毁慧灰贿卉悔秽溃荟晖彗讳诲珲堕诙蕙晦睢麾烩茴喙桧蛔洄浍虺恚蟪咴隳缋哕",wu:"务物无五武午吴舞伍污乌误亡恶屋晤悟吾雾芜梧勿巫侮坞毋诬呜钨邬捂鹜兀婺妩於戊鹉浯蜈唔骛仵焐芴鋈庑鼯牾怃圬忤痦迕杌寤阢",ya:"亚压雅牙押鸭呀轧涯崖邪芽哑讶鸦娅衙丫蚜碣垭伢氩桠琊揠吖睚痖疋迓岈砑",he:"和合河何核盖贺喝赫荷盒鹤吓呵苛禾菏壑褐涸阂阖劾诃颌嗬貉曷翮纥盍",wo:"我握窝沃卧挝涡斡渥幄蜗喔倭莴龌肟硪",en:"恩摁蒽",n:"嗯唔",er:"而二尔儿耳迩饵洱贰铒珥佴鸸鲕",fa:"发法罚乏伐阀筏砝垡珐",quan:"全权券泉圈拳劝犬铨痊诠荃醛蜷颧绻犭筌鬈悛辁畎",fei:"费非飞肥废菲肺啡沸匪斐蜚妃诽扉翡霏吠绯腓痱芾淝悱狒榧砩鲱篚镄",pei:"配培坏赔佩陪沛裴胚妃霈淠旆帔呸醅辔锫",ping:"平评凭瓶冯屏萍苹乒坪枰娉俜鲆",fo:"佛",hu:"和护许户核湖互乎呼胡戏忽虎沪糊壶葫狐蝴弧瑚浒鹄琥扈唬滹惚祜囫斛笏芴醐猢怙唿戽槲觳煳鹕冱瓠虍岵鹱烀轷",ga:"咖嘎尬噶旮伽尕钆尜",ge:"个合各革格歌哥盖隔割阁戈葛鸽搁胳舸疙铬骼蛤咯圪镉颌仡硌嗝鬲膈纥袼搿塥哿虼",ha:"哈蛤铪",xia:"下夏峡厦辖霞虾狭吓侠暇遐瞎匣瑕唬呷黠硖罅狎瘕柙",gai:"改该盖概溉钙丐芥赅垓陔戤",hai:"海还害孩亥咳骸骇氦嗨胲醢",gan:"干感赶敢甘肝杆赣乾柑尴竿秆橄矸淦苷擀酐绀泔坩旰疳澉",gang:"港钢刚岗纲冈杠缸扛肛罡戆筻",jiang:"将强江港奖讲降疆蒋姜浆匠酱僵桨绛缰犟豇礓洚茳糨耩",hang:"行航杭巷夯吭桁沆绗颃",gong:"工公共供功红贡攻宫巩龚恭拱躬弓汞蚣珙觥肱廾",hong:"红宏洪轰虹鸿弘哄烘泓訇蕻闳讧荭黉薨",guang:"广光逛潢犷胱咣桄",qiong:"穷琼穹邛茕筇跫蛩銎",gao:"高告搞稿膏糕镐皋羔锆杲郜睾诰藁篙缟槁槔",hao:"好号毫豪耗浩郝皓昊皋蒿壕灏嚎濠蚝貉颢嗥薅嚆",li:"理力利立里李历例离励礼丽黎璃厉厘粒莉梨隶栗荔沥犁漓哩狸藜罹篱鲤砺吏澧俐骊溧砾莅锂笠蠡蛎痢雳俪傈醴栎郦俚枥喱逦娌鹂戾砬唳坜疠蜊黧猁鬲粝蓠呖跞疬缡鲡鳢嫠詈悝苈篥轹",jia:"家加价假佳架甲嘉贾驾嫁夹稼钾挟拮迦伽颊浃枷戛荚痂颉镓笳珈岬胛袈郏葭袷瘕铗跏蛱恝哿",luo:"落罗络洛逻螺锣骆萝裸漯烙摞骡咯箩珞捋荦硌雒椤镙跞瘰泺脶猡倮蠃",ke:"可科克客刻课颗渴壳柯棵呵坷恪苛咳磕珂稞瞌溘轲窠嗑疴蝌岢铪颏髁蚵缂氪骒钶锞",qia:"卡恰洽掐髂袷咭葜",gei:"给",gen:"根跟亘艮哏茛",hen:"很狠恨痕哏",gou:"构购够句沟狗钩拘勾苟垢枸篝佝媾诟岣彀缑笱鞲觏遘",kou:"口扣寇叩抠佝蔻芤眍筘",gu:"股古顾故固鼓骨估谷贾姑孤雇辜菇沽咕呱锢钴箍汩梏痼崮轱鸪牯蛊诂毂鹘菰罟嘏臌觚瞽蛄酤牿鲴",pai:"牌排派拍迫徘湃俳哌蒎",gua:"括挂瓜刮寡卦呱褂剐胍诖鸹栝呙",tou:"投头透偷愉骰亠",guai:"怪拐乖",kuai:"会快块筷脍蒯侩浍郐蒉狯哙",guan:"关管观馆官贯冠惯灌罐莞纶棺斡矜倌鹳鳏盥掼涫",wan:"万完晚湾玩碗顽挽弯蔓丸莞皖宛婉腕蜿惋烷琬畹豌剜纨绾脘菀芄箢",ne:"呢哪呐讷疒",gui:"规贵归轨桂柜圭鬼硅瑰跪龟匮闺诡癸鳜桧皈鲑刽晷傀眭妫炅庋簋刿宄匦",jun:"军均俊君峻菌竣钧骏龟浚隽郡筠皲麇捃",jiong:"窘炯迥炅冂扃",jue:"决绝角觉掘崛诀獗抉爵嚼倔厥蕨攫珏矍蹶谲镢鳜噱桷噘撅橛孓觖劂爝",gun:"滚棍辊衮磙鲧绲丨",hun:"婚混魂浑昏棍珲荤馄诨溷阍",guo:"国过果郭锅裹帼涡椁囗蝈虢聒埚掴猓崞蜾呙馘",hei:"黑嘿嗨",kan:"看刊勘堪坎砍侃嵌槛瞰阚龛戡凵莰",heng:"衡横恒亨哼珩桁蘅",mo:"万没么模末冒莫摩墨默磨摸漠脉膜魔沫陌抹寞蘑摹蓦馍茉嘿谟秣蟆貉嫫镆殁耱嬷麽瘼貊貘",peng:"鹏朋彭膨蓬碰苹棚捧亨烹篷澎抨硼怦砰嘭蟛堋",hou:"后候厚侯猴喉吼逅篌糇骺後鲎瘊堠",hua:"化华划话花画滑哗豁骅桦猾铧砉",huai:"怀坏淮徊槐踝",huan:"还环换欢患缓唤焕幻痪桓寰涣宦垸洹浣豢奂郇圜獾鲩鬟萑逭漶锾缳擐",xun:"讯训迅孙寻询循旬巡汛勋逊熏徇浚殉驯鲟薰荀浔洵峋埙巽郇醺恂荨窨蕈曛獯",huang:"黄荒煌皇凰慌晃潢谎惶簧璜恍幌湟蝗磺隍徨遑肓篁鳇蟥癀",nai:"能乃奶耐奈鼐萘氖柰佴艿",luan:"乱卵滦峦鸾栾銮挛孪脔娈",qie:"切且契窃茄砌锲怯伽惬妾趄挈郄箧慊",jian:"建间件见坚检健监减简艰践兼鉴键渐柬剑尖肩舰荐箭浅剪俭碱茧奸歼拣捡煎贱溅槛涧堑笺谏饯锏缄睑謇蹇腱菅翦戬毽笕犍硷鞯牮枧湔鲣囝裥踺搛缣鹣蒹谫僭戋趼楗",nan:"南难男楠喃囡赧腩囝蝻",qian:"前千钱签潜迁欠纤牵浅遣谦乾铅歉黔谴嵌倩钳茜虔堑钎骞阡掮钤扦芊犍荨仟芡悭缱佥愆褰凵肷岍搴箝慊椠",qiang:"强抢疆墙枪腔锵呛羌蔷襁羟跄樯戕嫱戗炝镪锖蜣",xiang:"向项相想乡象响香降像享箱羊祥湘详橡巷翔襄厢镶飨饷缃骧芗庠鲞葙蟓",jiao:"教交较校角觉叫脚缴胶轿郊焦骄浇椒礁佼蕉娇矫搅绞酵剿嚼饺窖跤蛟侥狡姣皎茭峤铰醮鲛湫徼鹪僬噍艽挢敫",zhuo:"着著缴桌卓捉琢灼浊酌拙茁涿镯淖啄濯焯倬擢斫棹诼浞禚",qiao:"桥乔侨巧悄敲俏壳雀瞧翘窍峭锹撬荞跷樵憔鞘橇峤诮谯愀鞒硗劁缲",xiao:"小效销消校晓笑肖削孝萧俏潇硝宵啸嚣霄淆哮筱逍姣箫骁枭哓绡蛸崤枵魈",si:"司四思斯食私死似丝饲寺肆撕泗伺嗣祀厮驷嘶锶俟巳蛳咝耜笥纟糸鸶缌澌姒汜厶兕",kai:"开凯慨岂楷恺揩锴铠忾垲剀锎蒈",jin:"进金今近仅紧尽津斤禁锦劲晋谨筋巾浸襟靳瑾烬缙钅矜觐堇馑荩噤廑妗槿赆衿卺",qin:"亲勤侵秦钦琴禽芹沁寝擒覃噙矜嗪揿溱芩衾廑锓吣檎螓",jing:"经京精境竞景警竟井惊径静劲敬净镜睛晶颈荆兢靖泾憬鲸茎腈菁胫阱旌粳靓痉箐儆迳婧肼刭弪獍",ying:"应营影英景迎映硬盈赢颖婴鹰荧莹樱瑛蝇萦莺颍膺缨瀛楹罂荥萤鹦滢蓥郢茔嘤璎嬴瘿媵撄潆",jiu:"就究九酒久救旧纠舅灸疚揪咎韭玖臼柩赳鸠鹫厩啾阄桕僦鬏",zui:"最罪嘴醉咀蕞觜",juan:"卷捐圈眷娟倦绢隽镌涓鹃鄄蠲狷锩桊",suan:"算酸蒜狻",yun:"员运云允孕蕴韵酝耘晕匀芸陨纭郧筠恽韫郓氲殒愠昀菀狁",qun:"群裙逡麇",ka:"卡喀咖咔咯佧胩",kang:"康抗扛慷炕亢糠伉钪闶",keng:"坑铿吭",kao:"考靠烤拷铐栲尻犒",ken:"肯垦恳啃龈裉",yin:"因引银印音饮阴隐姻殷淫尹荫吟瘾寅茵圻垠鄞湮蚓氤胤龈窨喑铟洇狺夤廴吲霪茚堙",kong:"空控孔恐倥崆箜",ku:"苦库哭酷裤枯窟挎骷堀绔刳喾",kua:"跨夸垮挎胯侉",kui:"亏奎愧魁馈溃匮葵窥盔逵睽馗聩喟夔篑岿喹揆隗傀暌跬蒉愦悝蝰",kuan:"款宽髋",kuang:"况矿框狂旷眶匡筐邝圹哐贶夼诳诓纩",que:"确却缺雀鹊阙瘸榷炔阕悫",kun:"困昆坤捆琨锟鲲醌髡悃阃",kuo:"扩括阔廓蛞",la:"拉落垃腊啦辣蜡喇剌旯砬邋瘌",lai:"来莱赖睐徕籁涞赉濑癞崃疠铼",lan:"兰览蓝篮栏岚烂滥缆揽澜拦懒榄斓婪阑褴罱啉谰镧漤",lin:"林临邻赁琳磷淋麟霖鳞凛拎遴蔺吝粼嶙躏廪檩啉辚膦瞵懔",lang:"浪朗郎廊狼琅榔螂阆锒莨啷蒗稂",liang:"量两粮良辆亮梁凉谅粱晾靓踉莨椋魉墚",lao:"老劳落络牢捞涝烙姥佬崂唠酪潦痨醪铑铹栳耢",mu:"目模木亩幕母牧莫穆姆墓慕牟牡募睦缪沐暮拇姥钼苜仫毪坶",le:"了乐勒肋叻鳓嘞仂泐",lei:"类累雷勒泪蕾垒磊擂镭肋羸耒儡嫘缧酹嘞诔檑",sui:"随岁虽碎尿隧遂髓穗绥隋邃睢祟濉燧谇眭荽",lie:"列烈劣裂猎冽咧趔洌鬣埒捩躐",leng:"冷愣棱楞塄",ling:"领令另零灵龄陵岭凌玲铃菱棱伶羚苓聆翎泠瓴囹绫呤棂蛉酃鲮柃",lia:"俩",liao:"了料疗辽廖聊寥缪僚燎缭撂撩嘹潦镣寮蓼獠钌尥鹩",liu:"流刘六留柳瘤硫溜碌浏榴琉馏遛鎏骝绺镏旒熘鹨锍",lun:"论轮伦仑纶沦抡囵",lv:"率律旅绿虑履吕铝屡氯缕滤侣驴榈闾偻褛捋膂稆",lou:"楼露漏陋娄搂篓喽镂偻瘘髅耧蝼嵝蒌",mao:"贸毛矛冒貌茂茅帽猫髦锚懋袤牦卯铆耄峁瑁蟊茆蝥旄泖昴瞀",long:"龙隆弄垄笼拢聋陇胧珑窿茏咙砻垅泷栊癃",nong:"农浓弄脓侬哝",shuang:"双爽霜孀泷",shu:"术书数属树输束述署朱熟殊蔬舒疏鼠淑叔暑枢墅俞曙抒竖蜀薯梳戍恕孰沭赎庶漱塾倏澍纾姝菽黍腧秫毹殳疋摅",shuai:"率衰帅摔甩蟀",lve:"略掠锊",ma:"么马吗摩麻码妈玛嘛骂抹蚂唛蟆犸杩",me:"么麽",mai:"买卖麦迈脉埋霾荬劢",man:"满慢曼漫埋蔓瞒蛮鳗馒幔谩螨熳缦镘颟墁鞔",mi:"米密秘迷弥蜜谜觅靡泌眯麋猕谧咪糜宓汨醚嘧弭脒冖幂祢縻蘼芈糸敉",men:"们门闷瞒汶扪焖懑鞔钔",mang:"忙盲茫芒氓莽蟒邙硭漭",meng:"蒙盟梦猛孟萌氓朦锰檬勐懵蟒蜢虻黾蠓艨甍艋瞢礞",miao:"苗秒妙描庙瞄缪渺淼藐缈邈鹋杪眇喵",mou:"某谋牟缪眸哞鍪蛑侔厶",miu:"缪谬",mei:"美没每煤梅媒枚妹眉魅霉昧媚玫酶镁湄寐莓袂楣糜嵋镅浼猸鹛",wen:"文问闻稳温纹吻蚊雯紊瘟汶韫刎璺玟阌",mie:"灭蔑篾乜咩蠛",ming:"明名命鸣铭冥茗溟酩瞑螟暝",na:"内南那纳拿哪娜钠呐捺衲镎肭",nei:"内那哪馁",nuo:"难诺挪娜糯懦傩喏搦锘",ruo:"若弱偌箬",nang:"囊馕囔曩攮",nao:"脑闹恼挠瑙淖孬垴铙桡呶硇猱蛲",ni:"你尼呢泥疑拟逆倪妮腻匿霓溺旎昵坭铌鲵伲怩睨猊",nen:"嫩恁",neng:"能",nin:"您恁",niao:"鸟尿溺袅脲茑嬲",nie:"摄聂捏涅镍孽捻蘖啮蹑嗫臬镊颞乜陧",niang:"娘酿",ning:"宁凝拧泞柠咛狞佞聍甯",nu:"努怒奴弩驽帑孥胬",nv:"女钕衄恧",ru:"入如女乳儒辱汝茹褥孺濡蠕嚅缛溽铷洳薷襦颥蓐",nuan:"暖",nve:"虐疟",re:"热若惹喏",ou:"区欧偶殴呕禺藕讴鸥瓯沤耦怄",pao:"跑炮泡抛刨袍咆疱庖狍匏脬",pou:"剖掊裒",pen:"喷盆湓",pie:"瞥撇苤氕丿",pin:"品贫聘频拼拚颦姘嫔榀牝",se:"色塞瑟涩啬穑铯槭",qing:"情青清请亲轻庆倾顷卿晴氢擎氰罄磬蜻箐鲭綮苘黥圊檠謦",zan:"赞暂攒堑昝簪糌瓒錾趱拶",shao:"少绍召烧稍邵哨韶捎勺梢鞘芍苕劭艄筲杓潲",sao:"扫骚嫂梢缫搔瘙臊埽缲鳋",sha:"沙厦杀纱砂啥莎刹杉傻煞鲨霎嗄痧裟挲铩唼歃",xuan:"县选宣券旋悬轩喧玄绚渲璇炫萱癣漩眩暄煊铉楦泫谖痃碹揎镟儇",ran:"然染燃冉苒髯蚺",rang:"让壤攘嚷瓤穰禳",rao:"绕扰饶娆桡荛",reng:"仍扔",ri:"日",rou:"肉柔揉糅鞣蹂",ruan:"软阮朊",run:"润闰",sa:"萨洒撒飒卅仨脎",suo:"所些索缩锁莎梭琐嗦唆唢娑蓑羧挲桫嗍睃",sai:"思赛塞腮噻鳃",shui:"说水税谁睡氵",sang:"桑丧嗓搡颡磉",sen:"森",seng:"僧",shai:"筛晒",shang:"上商尚伤赏汤裳墒晌垧觞殇熵绱",xing:"行省星腥猩惺兴刑型形邢饧醒幸杏性姓陉荇荥擤悻硎",shou:"收手受首售授守寿瘦兽狩绶艏扌",shuo:"说数硕烁朔铄妁槊蒴搠",su:"速素苏诉缩塑肃俗宿粟溯酥夙愫簌稣僳谡涑蔌嗉觫",shua:"刷耍唰",shuan:"栓拴涮闩",shun:"顺瞬舜吮",song:"送松宋讼颂耸诵嵩淞怂悚崧凇忪竦菘",sou:"艘搜擞嗽嗖叟馊薮飕嗾溲锼螋瞍",sun:"损孙笋荪榫隼狲飧",teng:"腾疼藤滕誊",tie:"铁贴帖餮萜",tu:"土突图途徒涂吐屠兔秃凸荼钍菟堍酴",wai:"外歪崴",wang:"王望往网忘亡旺汪枉妄惘罔辋魍",weng:"翁嗡瓮蓊蕹",zhua:"抓挝爪",yang:"样养央阳洋扬杨羊详氧仰秧痒漾疡泱殃恙鸯徉佯怏炀烊鞅蛘",xiong:"雄兄熊胸凶匈汹芎",yo:"哟唷",yong:"用永拥勇涌泳庸俑踊佣咏雍甬镛臃邕蛹恿慵壅痈鳙墉饔喁",za:"杂扎咱砸咋匝咂拶",zai:"在再灾载栽仔宰哉崽甾",zao:"造早遭枣噪灶燥糟凿躁藻皂澡蚤唣",zei:"贼",zen:"怎谮",zeng:"增曾综赠憎锃甑罾缯",zhei:"这",zou:"走邹奏揍诹驺陬楱鄹鲰",zhuai:"转拽",zun:"尊遵鳟樽撙",dia:"嗲",nou:"耨"},e={};for(var o in i)!function(u){i[u].split("").forEach(function(n){e[n]||(e[n]=u)})}(o);module.exports={pinyinDict:e,convertToPinyin:function(u){for(var n,a=(u=(u=(u=u.replace(/\s+/g," ")).replace(/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,"")).toUpperCase()).split(""),i="",o=[],g=0;g<a.length;g++)" "===(n=a[g])?i&&(o.push(i),i=""):e[n]?(i&&(o.push(i),i=""),o.push(e[n])):i+=n;return i&&o.push(i),u=o.join(" ")},comparePinyinArray:function(u,n){return u.join("")<n.join("")?1:-1},nameToWordsStructure:function(a){for(var i,o=(a=(a=(a=a.replace(/\./g," ").replace(/\s+/g," ")).replace(/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,"")).toLowerCase()).split(""),g="",h=[],r=0;r<o.length;r++)" "===(i=o[r])?g&&(h.push({key:g,values:n(g)}),g=""):e[i]?(g&&(h.push({key:g,values:n(g)}),g=""),h.push({key:i,values:[].concat(u(n(e[i])),[i])})):g+=i;return g&&h.push({key:g,values:n(g)}),h},wordsStructureToIndexes:function(u){var n=[];return u.forEach(function(u){for(var a=u.key,i=u.values[0],e=1;e<=i.length;e++)n.push(i.slice(0,e));i!==a&&n.push(a)}),Array.from(new Set(n))},nameToWordsStructureNew:function(u){for(var n,a=(u=(u=(u=u.replace(/\./g," ").replace(/\s+/g," ")).replace(/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,"")).toLowerCase()).split(""),i=[],o=[],g=[],h="",r="",s=0;s<a.length;s++)" "===(n=a[s])?h&&(i.push(h),o.push(h),g.push(h[0]),h=""):(r=e[n])?(h&&(i.push(h),o.push(h),g.push(h[0]),h=""),i.push(n),o.push(r),g.push(r[0])):h+=n;return h&&(i.push(h),o.push(h),g.push(h[0])),{origin:i,pinyin:o,initial:g}},wordsStructureToIndexesNew:function(u){var n=[];return n=n.concat(a(u.origin.join(""))),n=n.concat(a(u.pinyin,!0)),n=n.concat(a(u.initial.join(""))),Array.from(new Set(n))}}; 
 			}); 
		define("utils/emojiConfig.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o={};[{ios5:"u1F349",ios4:"uE348",cn:"西瓜",tw:"西瓜",en:"Melon"},{ios5:"u1F48A",ios4:"uE30F",cn:"药丸",tw:"藥丸",en:"Pill"},{ios5:"u1F6AC",ios4:"uE30E",cn:"吸烟",tw:"吸煙",en:"Smoke"},{ios5:"u1F384",ios4:"uE033",cn:"圣诞树",tw:"聖誕樹",en:"Xmastree"},{ios5:"u1F339",ios4:"uE032",cn:"玫瑰",tw:"玫瑰",en:"Rose"},{ios5:"u1F389",ios4:"uE312",cn:"礼花",tw:"禮花",en:"Salute"},{ios5:"u1F334",ios4:"uE307",cn:"椰树",tw:"椰樹",en:"Palm"},{ios5:"u1F49D",ios4:"uE437",cn:"礼物",tw:"禮物",en:"Gift"},{ios5:"u1F380",ios4:"uE314",cn:"蝴蝶结",tw:"蝴蝶結",en:"Bowtie"},{ios5:"u1F388",ios4:"uE310",cn:"气球",tw:"氣球",en:"Ballon"},{ios5:"u1F41A",ios4:"uE441",cn:"贝壳",tw:"貝殼",en:"Shell"},{ios5:"u1F48D",ios4:"uE034",cn:"指环",tw:"指環",en:"Ring"},{ios5:"u1F4A3",ios4:"uE311",cn:"炸弹",tw:"炸彈",en:"Bomb"},{ios5:"u1F451",ios4:"uE10E",cn:"皇冠",tw:"皇冠",en:"Crown"},{ios5:"u1F514",ios4:"uE325",cn:"钟",tw:"鐘",en:"Bell"},{ios5:"u2B50",ios4:"uE32F",cn:"星标",tw:"星標",en:"Star"},{ios5:"u2747",ios4:"uE32E",cn:"闪烁",tw:"驚訝",en:"Shine"},{ios5:"u1F4A8",ios4:"uE330",cn:"跑远",tw:"跑遠",en:"Scoot"},{ios5:"u1F4A7",ios4:"uE331",cn:"喷口水",tw:"噴口水",en:"Spout"},{ios5:"u1F525",ios4:"uE11D",cn:"怒火",tw:"怒火",en:"Onfire"},{ios5:"u1F3C6",ios4:"uE131",cn:"奖杯",tw:"獎杯",en:"Trophy"},{ios5:"u1F4B5",ios4:"uE12F",cn:"钱",tw:"錢",en:"Dollar"},{ios5:"u1F4A4",ios4:"uE13C",cn:"困",tw:"困",en:"Sleepy"},{ios5:"u26A1",ios4:"uE13D",cn:"闪电",tw:"閃電",en:"Thunder"},{ios5:"u1F463",ios4:"uE536",cn:"脚印",tw:"腳印",en:"Pug"},{ios5:"u1F4A9",ios4:"uE05A",cn:"屎",tw:"屎",en:"Shit"},{ios5:"u1F489",ios4:"uE13B",cn:"打针",tw:"打針",en:"Inject"},{ios5:"u2668",ios4:"uE123",cn:"辣",tw:"辣",en:"Spicy"},{ios5:"u1F4EB",ios4:"uE101",cn:"邮箱",tw:"郵箱",en:"Mailbox"},{ios5:"u1F511",ios4:"uE03F",cn:"钥匙",tw:"鑰匙",en:"Key"},{ios5:"u1F510",ios4:"uE144",cn:"锁",tw:"鎖",en:"Lock"},{ios5:"u2708",ios4:"uE01D",cn:"飞机",tw:"飛機",en:"Plane"},{ios5:"u1F684",ios4:"uE435",cn:"火车",tw:"火車",en:"Train"},{ios5:"u1F697",ios4:"uE01B",cn:"轿车",tw:"轎車",en:"Car"},{ios5:"u1F6A4",ios4:"uE135",cn:"船",tw:"船",en:"Boat"},{ios5:"u1F6B2",ios4:"uE136",cn:"自行车",tw:"自行車",en:"Bike"},{ios5:"u1F40E",ios4:"uE134",cn:"马",tw:"馬",en:"Horse"},{ios5:"u1F680",ios4:"uE10D",cn:"火箭",tw:"火箭",en:"Rocket"},{ios5:"u1F68C",ios4:"uE159",cn:"巴士",tw:"巴士",en:"Bus"},{ios5:"u26F5",ios4:"uE01C",cn:"帆船",tw:"帆船",en:"Yacht"},{ios5:"u1F469",ios4:"uE005",cn:"女人",tw:"女人",en:"Women"},{ios5:"u1F468",ios4:"uE004",cn:"男人",tw:"男人",en:"Man"},{ios5:"u1F467",ios4:"uE002",cn:"女孩",tw:"女孩",en:"Girl"},{ios5:"u1F466",ios4:"uE001",cn:"男孩",tw:"男孩",en:"Boy"},{ios5:"u1F435",ios4:"uE109",cn:"猴头",tw:"猴頭",en:"Monkey"},{ios5:"u1F419",ios4:"uE10A",cn:"章鱼",tw:"章魚",en:"Octopus"},{ios5:"u1F43D",ios4:"uE10B",cn:"猪头",tw:"豬頭",en:"Pig"},{ios5:"u1F480",ios4:"uE11C",cn:"外星人",tw:"外星人",en:"Alien"},{ios5:"u1F423",ios4:"uE523",cn:"鸭子",tw:"鴨子",en:"Duck"},{ios5:"u1F428",ios4:"uE527",cn:"熊",tw:"熊",en:"Bear"},{ios5:"u1F42E",ios4:"uE52B",cn:"奶牛",tw:"奶牛",en:"Cow"},{ios5:"u1F414",ios4:"uE52E",cn:"公鸡",tw:"公雞",en:"Cock"},{ios5:"u1F438",ios4:"uE531",cn:"青蛙",tw:"青蛙",en:"Frog"},{ios5:"u1F47B",ios4:"uE11B",cn:"鬼",tw:"鬼",en:"Ghost"},{ios5:"u1F480",ios4:"uE11C",cn:"骷髅",tw:"骷髏",en:"Skull"},{ios5:"u1F41B",ios4:"uE525",cn:"毛毛虫",tw:"毛毛蟲",en:"Worm"},{ios5:"u1F420",ios4:"uE522",cn:"鱼",tw:"魚",en:"Fish"},{ios5:"u1F436",ios4:"uE052",cn:"狗",tw:"狗",en:"Dog"},{ios5:"u1F42F",ios4:"uE050",cn:"猫",tw:"貓",en:"Cat"},{ios5:"u1F47C",ios4:"uE04E",cn:"天使",tw:"天使",en:"Angel"},{ios5:"u1F427",ios4:"uE055",cn:"小鸟",tw:"小鳥",en:"Bird"},{ios5:"u1F433",ios4:"uE054",cn:"鲸鱼",tw:"鯨魚",en:"Whale"},{ios5:"u1F42D",ios4:"uE053",cn:"老鼠",tw:"老鼠",en:"Mouse"},{ios5:"u1F452",ios4:"uE318",cn:"帽子",tw:"帽子",en:"Hat"},{ios5:"u1F457",ios4:"uE319",cn:"裙子",tw:"裙子",en:"Dress"},{ios5:"u1F484",ios4:"uE31C",cn:"唇膏",tw:"唇膏",en:"Lippie"},{ios5:"u1F460",ios4:"uE13E",cn:"高跟鞋",tw:"高跟鞋",en:"Highheels"},{ios5:"u1F462",ios4:"uE31B",cn:"靴子",tw:"靴子",en:"Boots"},{ios5:"u1F302",ios4:"uE43C",cn:"伞",tw:"傘",en:"Parasol"},{ios5:"u1F45C",ios4:"uE323",cn:"包",tw:"包",en:"Bag"},{ios5:"u1F459",ios4:"uE322",cn:"比基尼",tw:"比基尼",en:"Bikini"},{ios5:"u1F45A",ios4:"uE006",cn:"衬衣",tw:"襯衣",en:"T-shirt"},{ios5:"u1F45F",ios4:"uE007",cn:"皮鞋",tw:"皮鞋",en:"Shoes"},{ios5:"u2601",ios4:"uE049",cn:"云",tw:"雲",en:"Cloud"},{ios5:"u2600",ios4:"uE04A",cn:"太阳",tw:"太陽",en:"Sun"},{ios5:"u2614",ios4:"uE04B",cn:"下雨",tw:"下雨",en:"Rain"},{ios5:"u1F31B",ios4:"uE04C",cn:"月亮",tw:"月亮",en:"Moon"},{ios5:"u26C4",ios4:"uE048",cn:"下雪",tw:"下雪",en:"Snow"},{ios5:"u2B55",ios4:"uE332",cn:"圈",tw:"圈",en:"Circle"},{ios5:"u2716",ios4:"uE333",cn:"叉",tw:"叉",en:"Cross"},{ios5:"u2754",ios4:"uE336",cn:"问号",tw:"問號",en:"？"},{ios5:"u2755",ios4:"uE337",cn:"叹号",tw:"嘆號",en:"！"},{ios5:"u1F4DE",ios4:"uE009",cn:"电话",tw:"電話",en:"Phone"},{ios5:"u1F4F7",ios4:"uE008",cn:"相机",tw:"相機",en:"Camera"},{ios5:"u1F4F1",ios4:"uE00A",cn:"手机",tw:"手機",en:"Mobile"},{ios5:"u1F4E0",ios4:"uE00B",cn:"传真机",tw:"傳真機",en:"Fax"},{ios5:"u1F4BB",ios4:"uE00C",cn:"屏幕",tw:"屏幕",en:"Screen"},{ios5:"u1F4F9",ios4:"uE03D",cn:"摄影机",tw:"攝影機",en:"Camera"},{ios5:"u1F3A4",ios4:"uE03C",cn:"卡拉OK",tw:"卡拉OK",en:"Karaoke"},{ios5:"u1F52B",ios4:"uE113",cn:"枪",tw:"搶",en:"Gun"},{ios5:"u1F625",ios4:"uE401",cn:"汗",tw:"汗",en:"Sweat"},{ios5:"u1F60F",ios4:"uE402",cn:"假笑",tw:"假笑",en:"Smirk"},{ios5:"u1F64D",ios4:"uE403",cn:"哼",tw:"哼",en:"Hmm"},{ios5:"u1F63C",ios4:"uE404",cn:"咧嘴",tw:"咧嘴",en:"Grin"},{ios5:"u1F609",ios4:"uE405",cn:"玩笑",tw:"玩笑",en:"Wink"},{ios5:"u1F631",ios4:"uE107",cn:"呐喊",tw:"吶喊",en:"Scream"},{ios5:"u1F4AB",ios4:"uE407",cn:"难受",tw:"難受",en:"Sick"},{ios5:"u1F61A",ios4:"uE417",cn:"亲亲",tw:"親親",en:"Kiss"},{ios5:"u1F61D",ios4:"uE409",cn:"调皮",tw:"調皮",en:"Funny"},{ios5:"u1F60C",ios4:"uE40A",cn:"放松",tw:"放鬆",en:"Relax"},{ios5:"u1F628",ios4:"uE40B",cn:"衰",tw:"衰",en:"Bad"},{ios5:"u1F637",ios4:"uE40C",cn:"口罩",tw:"口罩",en:"Mask"},{ios5:"u1F633",ios4:"uE40D",cn:"吓",tw:"嚇",en:"Boggle"},{ios5:"u1F612",ios4:"uE40E",cn:"没劲",tw:"沒勁",en:"Boring"},{ios5:"u1F630",ios4:"uE40F",cn:"惊恐",tw:"驚恐",en:"Panic"},{ios5:"u1F632",ios4:"uE410",cn:"茫然",tw:"茫然",en:"Dizzy"},{ios5:"u1F62D",ios4:"uE411",cn:"大哭",tw:"大哭",en:"Cry"},{ios5:"u1F61C",ios4:"uE105",cn:"眨眼",tw:"眨眼",en:"Blink"},{ios5:"u1F63D",ios4:"uE418",cn:"飞吻",tw:"飛吻",en:"blowkiss"},{ios5:"u1F64E",ios4:"uE416",cn:"发怒",tw:"發怒",en:"pouting"},{ios5:"u1F4AA",ios4:"uE14C",cn:"肌肉",tw:"肌肉",en:"Muscle"},{ios5:"u1F44A",ios4:"uE00D",cn:"拳头",tw:"拳頭",en:"Fist"},{ios5:"u1F44D",ios4:"uE00E",cn:"强",tw:"強",en:"Strong"},{ios5:"u261D",ios4:"uE00F",cn:"不",tw:"不",en:"No"},{ios5:"u1F44F",ios4:"uE41F",cn:"鼓掌",tw:"鼓掌",en:"Clap"},{ios5:"u270C",ios4:"uE011",cn:"剪刀手",tw:"剪刀手",en:"Yeah"},{ios5:"u1F44E",ios4:"uE421",cn:"弱",tw:"弱",en:"Weak"},{ios5:"u1F64F",ios4:"uE41D",cn:"膜拜",tw:"膜拜",en:"Worship"},{ios5:"u1F44C",ios4:"uE420",cn:"OK",tw:"OK",en:"OK"},{ios5:"u1F448",ios4:"uE230",cn:"左",tw:"左",en:"Left"},{ios5:"u1F449",ios4:"uE231",cn:"右",tw:"右",en:"Right"},{ios5:"u1F446",ios4:"uE22E",cn:"上",tw:"上",en:"Up"},{ios5:"u1F447",ios4:"uE22F",cn:"下",tw:"下",en:"Down"},{ios5:"u1F440",ios4:"uE419",cn:"眼睛",tw:"眼睛",en:"Eyes"},{ios5:"u1F443",ios4:"uE41A",cn:"鼻子",tw:"鼻子",en:"Nose"},{ios5:"u1F444",ios4:"uE41C",cn:"嘴唇",tw:"嘴唇",en:"Lip"},{ios5:"u1F442",ios4:"uE41B",cn:"耳朵",tw:"耳朵",en:"Ear"},{ios5:"u1F35A",ios4:"uE33E",cn:"饭",tw:"飯",en:"Rice"},{ios5:"u1F35D",ios4:"uE33F",cn:"意大利面",tw:"意大利面",en:"Pasta"},{ios5:"u1F35C",ios4:"uE340",cn:"面条",tw:"面條",en:"Noodle"},{ios5:"u1F359",ios4:"uE342",cn:"饭团",tw:"飯團",en:"Onigiri"},{ios5:"u1F367",ios4:"uE43F",cn:"冰淇淋",tw:"冰淇淋",en:"Ice"},{ios5:"u1F363",ios4:"uE344",cn:"寿司",tw:"壽司",en:"Sushi"},{ios5:"u1F382",ios4:"uE34B",cn:"蛋糕",tw:"蛋糕",en:"Cake"},{ios5:"u1F35E",ios4:"uE339",cn:"面包",tw:"面包",en:"Bread"},{ios5:"u1F354",ios4:"uE120",cn:"汉堡",tw:"漢堡",en:"Burger"},{ios5:"u1F373",ios4:"uE147",cn:"煎蛋",tw:"煎蛋",en:"Egg"},{ios5:"u1F35F",ios4:"uE33B",cn:"薯条",tw:"薯條",en:"Fries"},{ios5:"u1F37A",ios4:"uE047",cn:"啤酒",tw:"啤酒",en:"Beer"},{ios5:"u1F37B",ios4:"uE30C",cn:"干杯",tw:"幹杯",en:"Cheers"},{ios5:"u1F387",ios4:"uE440",cn:"高脚杯",tw:"高腳杯",en:"Goblet"},{ios5:"u2615",ios4:"uE045",cn:"茶",tw:"茶",en:"Coffee"},{ios5:"u1F34F",ios4:"uE345",cn:"苹果",tw:"蘋果",en:"Apple"},{ios5:"u1F34A",ios4:"uE346",cn:"橙子",tw:"橙子",en:"Orange"},{ios5:"u1F353",ios4:"uE347",cn:"草莓",tw:"草莓",en:"Berry"},{ios5:"u1F4BF",ios4:"uE126",cn:"光盘",tw:"光盤",en:"Disk"},{ios5:"u1F49E",ios4:"uE327",cn:"心",tw:"心",en:"Heart"},{ios5:"u2663",ios4:"uE20F",cn:"扑克",tw:"撲克",en:"Poker"},{ios5:"u1F004",ios4:"uE12D",cn:"麻将",tw:"麻將",en:"Mahjong"},{ios5:"u303D",ios4:"uE12C",cn:"股票",tw:"股票",en:"Stock"},{ios5:"u1F3B0",ios4:"uE133",cn:"老虎机",tw:"老虎機",en:"Slot"},{ios5:"u1F6A5",ios4:"uE14E",cn:"交通灯",tw:"交通燈",en:"Signal"},{ios5:"u26D4",ios4:"uE137",cn:"路障",tw:"路障",en:"Block"},{ios5:"u1F3B8",ios4:"uE041",cn:"吉他",tw:"吉他",en:"Guitar"},{ios5:"u1F488",ios4:"uE320",cn:"理发店",tw:"理發店",en:"Barber"},{ios5:"u1F6C0",ios4:"uE13F",cn:"洗澡",tw:"洗澡",en:"Bath"},{ios5:"u1F6BD",ios4:"uE140",cn:"马桶",tw:"馬桶",en:"Toilet"},{ios5:"u1F3E1",ios4:"uE036",cn:"房子",tw:"房子",en:"House"},{ios5:"u26EA",ios4:"uE037",cn:"教堂",tw:"教堂",en:"Chruch"},{ios5:"u1F3E6",ios4:"uE14D",cn:"银行",tw:"銀行",en:"Bank"},{ios5:"u1F3E5",ios4:"uE155",cn:"医院",tw:"醫院",en:"Hospital"},{ios5:"u1F3E8",ios4:"uE158",cn:"酒店",tw:"酒店",en:"Hotel"},{ios5:"u1F3E7",ios4:"uE154",cn:"ATM",tw:"ATM",en:"ATM"},{ios5:"u1F3EA",ios4:"uE156",cn:"便利店",tw:"便利店",en:"Store"},{ios5:"u1F6B9",ios4:"uE138",cn:"男性",tw:"男性",en:"Male"},{ios5:"u1F6BA",ios4:"uE139",cn:"女性",tw:"女性",en:"Female"},{ios5:"u0023u20E3",ios4:"uE210"},{ios5:"u0030u20E3",ios4:"uE225"},{ios5:"u0031u20E3",ios4:"uE21C"},{ios5:"u0032u20E3",ios4:"uE21D"},{ios5:"u0033u20E3",ios4:"uE21E"},{ios5:"u0034u20E3",ios4:"uE21F"},{ios5:"u0035u20E3",ios4:"uE220"},{ios5:"u0036u20E3",ios4:"uE221"},{ios5:"u0037u20E3",ios4:"uE222"},{ios5:"u0038u20E3",ios4:"uE223"},{ios5:"u0039u20E3",ios4:"uE224"},{ios5:"u00A9",ios4:"uE24E"},{ios5:"u00AE",ios4:"uE24F"},{ios5:"u1F170",ios4:"uE532"},{ios5:"u1F171",ios4:"uE533"},{ios5:"u1F17E",ios4:"uE535"},{ios5:"u1F17F",ios4:"uE14F"},{ios5:"u1F18E",ios4:"uE534"},{ios5:"u1F192",ios4:"uE214"},{ios5:"u1F194",ios4:"uE229"},{ios5:"u1F195",ios4:"uE212"},{ios5:"u1F197",ios4:"uE24D"},{ios5:"u1F199",ios4:"uE213"},{ios5:"u1F19A",ios4:"uE12E"},{ios5:"u1F1E8u1F1F3",ios4:"uE513"},{ios5:"u1F1E9u1F1EA",ios4:"uE50E"},{ios5:"u1F1EAu1F1F8",ios4:"uE511"},{ios5:"u1F1EBu1F1F7",ios4:"uE50D"},{ios5:"u1F1ECu1F1E7",ios4:"uE510"},{ios5:"u1F1EEu1F1F9",ios4:"uE50F"},{ios5:"u1F1EFu1F1F5",ios4:"uE50B"},{ios5:"u1F1F0u1F1F7",ios4:"uE514"},{ios5:"u1F1F7u1F1FA",ios4:"uE512"},{ios5:"u1F1FAu1F1F8",ios4:"uE50C"},{ios5:"u1F201",ios4:"uE203"},{ios5:"u1F202",ios4:"uE228"},{ios5:"u1F21A",ios4:"uE216"},{ios5:"u1F22F",ios4:"uE22C"},{ios5:"u1F233",ios4:"uE22B"},{ios5:"u1F235",ios4:"uE22A"},{ios5:"u1F236",ios4:"uE215"},{ios5:"u1F237",ios4:"uE217"},{ios5:"u1F238",ios4:"uE218"},{ios5:"u1F239",ios4:"uE227"},{ios5:"u1F23A",ios4:"uE22D"},{ios5:"u1F250",ios4:"uE226"},{ios5:"u1F300",ios4:"uE443"},{ios5:"u1F303",ios4:"uE44B"},{ios5:"u1F304",ios4:"uE04D"},{ios5:"u1F305",ios4:"uE449"},{ios5:"u1F306",ios4:"uE146"},{ios5:"u1F307",ios4:"uE44A"},{ios5:"u1F308",ios4:"uE44C"},{ios5:"u1F309",ios4:"uE44B"},{ios5:"u1F30A",ios4:"uE43E"},{ios5:"u1F30C",ios4:"uE44B"},{ios5:"u1F313",ios4:"uE04C"},{ios5:"u1F314",ios4:"uE04C"},{ios5:"u1F319",ios4:"uE04C"},{ios5:"u1F31F",ios4:"uE335"},{ios5:"u1F331",ios4:"uE110"},{ios5:"u1F335",ios4:"uE308"},{ios5:"u1F337",ios4:"uE304"},{ios5:"u1F338",ios4:"uE030"},{ios5:"u1F33A",ios4:"uE303"},{ios5:"u1F33B",ios4:"uE305"},{ios5:"u1F33C",ios4:"uE305"},{ios5:"u1F33E",ios4:"uE444"},{ios5:"u1F33F",ios4:"uE110"},{ios5:"u1F340",ios4:"uE110"},{ios5:"u1F341",ios4:"uE118"},{ios5:"u1F342",ios4:"uE119"},{ios5:"u1F343",ios4:"uE447"},{ios5:"u1F345",ios4:"uE349"},{ios5:"u1F346",ios4:"uE34A"},{ios5:"u1F34E",ios4:"uE345"},{ios5:"u1F358",ios4:"uE33D"},{ios5:"u1F35B",ios4:"uE341"},{ios5:"u1F361",ios4:"uE33C"},{ios5:"u1F362",ios4:"uE343"},{ios5:"u1F366",ios4:"uE33A"},{ios5:"u1F370",ios4:"uE046"},{ios5:"u1F371",ios4:"uE34C"},{ios5:"u1F372",ios4:"uE34D"},{ios5:"u1F374",ios4:"uE043"},{ios5:"u1F375",ios4:"uE338"},{ios5:"u1F376",ios4:"uE30B"},{ios5:"u1F377",ios4:"uE044"},{ios5:"u1F378",ios4:"uE044"},{ios5:"u1F379",ios4:"uE044"},{ios5:"u1F381",ios4:"uE112"},{ios5:"u1F383",ios4:"uE445"},{ios5:"u1F385",ios4:"uE448"},{ios5:"u1F386",ios4:"uE117"},{ios5:"u1F38C",ios4:"uE143"},{ios5:"u1F38D",ios4:"uE436"},{ios5:"u1F38E",ios4:"uE438"},{ios5:"u1F38F",ios4:"uE43B"},{ios5:"u1F390",ios4:"uE442"},{ios5:"u1F391",ios4:"uE446"},{ios5:"u1F392",ios4:"uE43A"},{ios5:"u1F393",ios4:"uE439"},{ios5:"u1F3A1",ios4:"uE124"},{ios5:"u1F3A2",ios4:"uE433"},{ios5:"u1F3A3",ios4:"uE019"},{ios5:"u1F3A5",ios4:"uE03D"},{ios5:"u1F3A6",ios4:"uE507"},{ios5:"u1F3A7",ios4:"uE30A"},{ios5:"u1F3A8",ios4:"uE502"},{ios5:"u1F3A9",ios4:"uE503"},{ios5:"u1F3AB",ios4:"uE125"},{ios5:"u1F3AC",ios4:"uE324"},{ios5:"u1F3AD",ios4:"uE503"},{ios5:"u1F3AF",ios4:"uE130"},{ios5:"u1F3B1",ios4:"uE42C"},{ios5:"u1F3B5",ios4:"uE03E"},{ios5:"u1F3B6",ios4:"uE326"},{ios5:"u1F3B7",ios4:"uE040"},{ios5:"u1F3BA",ios4:"uE042"},{ios5:"u1F3BC",ios4:"uE326"},{ios5:"u1F3BE",ios4:"uE015"},{ios5:"u1F3BF",ios4:"uE013"},{ios5:"u1F3C0",ios4:"uE42A"},{ios5:"u1F3C1",ios4:"uE132"},{ios5:"u1F3C3",ios4:"uE115"},{ios5:"u1F3C4",ios4:"uE017"},{ios5:"u1F3C8",ios4:"uE42B"},{ios5:"u1F3CA",ios4:"uE42D"},{ios5:"u1F3E0",ios4:"uE036"},{ios5:"u1F3E2",ios4:"uE038"},{ios5:"u1F3E3",ios4:"uE153"},{ios5:"u1F3E9",ios4:"uE501"},{ios5:"u1F3EB",ios4:"uE157"},{ios5:"u1F3EC",ios4:"uE504"},{ios5:"u1F3ED",ios4:"uE508"},{ios5:"u1F3EE",ios4:"uE30B"},{ios5:"u1F3EF",ios4:"uE505"},{ios5:"u1F3F0",ios4:"uE506"},{ios5:"u1F40D",ios4:"uE52D"},{ios5:"u1F411",ios4:"uE529"},{ios5:"u1F412",ios4:"uE528"},{ios5:"u1F417",ios4:"uE52F"},{ios5:"u1F418",ios4:"uE526"},{ios5:"u1F41F",ios4:"uE019"},{ios5:"u1F421",ios4:"uE019"},{ios5:"u1F424",ios4:"uE523"},{ios5:"u1F425",ios4:"uE523"},{ios5:"u1F426",ios4:"uE521"},{ios5:"u1F429",ios4:"uE052"},{ios5:"u1F42B",ios4:"uE530"},{ios5:"u1F42C",ios4:"uE520"},{ios5:"u1F430",ios4:"uE52C"},{ios5:"u1F431",ios4:"uE04F"},{ios5:"u1F434",ios4:"uE01A"},{ios5:"u1F437",ios4:"uE10B"},{ios5:"u1F439",ios4:"uE524"},{ios5:"u1F43A",ios4:"uE52A"},{ios5:"u1F43B",ios4:"uE051"},{ios5:"u1F43E",ios4:"uE536"},{ios5:"u1F445",ios4:"uE409"},{ios5:"u1F44B",ios4:"uE41E"},{ios5:"u1F450",ios4:"uE422"},{ios5:"u1F454",ios4:"uE302"},{ios5:"u1F455",ios4:"uE006"},{ios5:"u1F458",ios4:"uE321"},{ios5:"u1F45E",ios4:"uE007"},{ios5:"u1F461",ios4:"uE31A"},{ios5:"u1F46B",ios4:"uE428"},{ios5:"u1F46E",ios4:"uE152"},{ios5:"u1F46F",ios4:"uE429"},{ios5:"u1F471",ios4:"uE515"},{ios5:"u1F472",ios4:"uE516"},{ios5:"u1F473",ios4:"uE517"},{ios5:"u1F474",ios4:"uE518"},{ios5:"u1F475",ios4:"uE519"},{ios5:"u1F476",ios4:"uE51A"},{ios5:"u1F477",ios4:"uE51B"},{ios5:"u1F478",ios4:"uE51C"},{ios5:"u1F47D",ios4:"uE10C"},{ios5:"u1F47E",ios4:"uE12B"},{ios5:"u1F47F",ios4:"uE11A"},{ios5:"u1F481",ios4:"uE253"},{ios5:"u1F482",ios4:"uE51E"},{ios5:"u1F483",ios4:"uE51F"},{ios5:"u1F485",ios4:"uE31D"},{ios5:"u1F486",ios4:"uE31E"},{ios5:"u1F487",ios4:"uE31F"},{ios5:"u1F48B",ios4:"uE003"},{ios5:"u1F48C",ios4:"uE103uE328"},{ios5:"u1F48E",ios4:"uE035"},{ios5:"u1F48F",ios4:"uE111"},{ios5:"u1F490",ios4:"uE306"},{ios5:"u1F491",ios4:"uE425"},{ios5:"u1F492",ios4:"uE43D"},{ios5:"u1F493",ios4:"uE327"},{ios5:"u1F494",ios4:"uE023"},{ios5:"u1F495",ios4:"uE327"},{ios5:"u1F496",ios4:"uE327"},{ios5:"u1F497",ios4:"uE328"},{ios5:"u1F498",ios4:"uE329"},{ios5:"u1F499",ios4:"uE32A"},{ios5:"u1F49A",ios4:"uE32B"},{ios5:"u1F49B",ios4:"uE32C"},{ios5:"u1F49C",ios4:"uE32D"},{ios5:"u1F49F",ios4:"uE204"},{ios5:"u1F4A1",ios4:"uE10F"},{ios5:"u1F4A2",ios4:"uE334"},{ios5:"u1F4A6",ios4:"uE331"},{ios5:"u1F4B0",ios4:"uE12F"},{ios5:"u1F4B1",ios4:"uE149"},{ios5:"u1F4B2",ios4:"uE12F"},{ios5:"u1F4B9",ios4:"uE14A"},{ios5:"u1F4BA",ios4:"uE11F"},{ios5:"u1F4BC",ios4:"uE11E"},{ios5:"u1F4BD",ios4:"uE316"},{ios5:"u1F4BE",ios4:"uE316"},{ios5:"u1F4C0",ios4:"uE127"},{ios5:"u1F4C3",ios4:"uE301"},{ios5:"u1F4C4",ios4:"uE301"},{ios5:"u1F4C7",ios4:"uE148"},{ios5:"u1F4C8",ios4:"uE14A"},{ios5:"u1F4CA",ios4:"uE14A"},{ios5:"u1F4CB",ios4:"uE301"},{ios5:"u1F4D1",ios4:"uE301"},{ios5:"u1F4D2",ios4:"uE148"},{ios5:"u1F4D3",ios4:"uE148"},{ios5:"u1F4D4",ios4:"uE148"},{ios5:"u1F4D5",ios4:"uE148"},{ios5:"u1F4D6",ios4:"uE148"},{ios5:"u1F4D7",ios4:"uE148"},{ios5:"u1F4D8",ios4:"uE148"},{ios5:"u1F4D9",ios4:"uE148"},{ios5:"u1F4DA",ios4:"uE148"},{ios5:"u1F4DD",ios4:"uE301"},{ios5:"u1F4E1",ios4:"uE14B"},{ios5:"u1F4E2",ios4:"uE142"},{ios5:"u1F4E3",ios4:"uE317"},{ios5:"u1F4E6",ios4:"uE112"},{ios5:"u1F4E7",ios4:"uE103"},{ios5:"u1F4E8",ios4:"uE103"},{ios5:"u1F4E9",ios4:"uE103"},{ios5:"u1F4EA",ios4:"uE101"},{ios5:"u1F4EE",ios4:"uE102"},{ios5:"u1F4F2",ios4:"uE104"},{ios5:"u1F4F3",ios4:"uE250"},{ios5:"u1F4F4",ios4:"uE251"},{ios5:"u1F4F6",ios4:"uE20B"},{ios5:"u1F4FA",ios4:"uE12A"},{ios5:"u1F4FB",ios4:"uE128"},{ios5:"u1F4FC",ios4:"uE129"},{ios5:"u1F50A",ios4:"uE141"},{ios5:"u1F50D",ios4:"uE114"},{ios5:"u1F50E",ios4:"uE114"},{ios5:"u1F50F",ios4:"uE144"},{ios5:"u1F512",ios4:"uE144"},{ios5:"u1F513",ios4:"uE145"},{ios5:"u1F519",ios4:"uE235"},{ios5:"u1F51D",ios4:"uE24C"},{ios5:"u1F51E",ios4:"uE207"},{ios5:"u1F528",ios4:"uE116"},{ios5:"u1F52E",ios4:"uE23E"},{ios5:"u1F52F",ios4:"uE23E"},{ios5:"u1F530",ios4:"uE209"},{ios5:"u1F531",ios4:"uE031"},{ios5:"u1F532",ios4:"uE21A"},{ios5:"u1F533",ios4:"uE21B"},{ios5:"u1F534",ios4:"uE219"},{ios5:"u1F535",ios4:"uE21A"},{ios5:"u1F536",ios4:"uE21B"},{ios5:"u1F537",ios4:"uE21B"},{ios5:"u1F538",ios4:"uE21B"},{ios5:"u1F539",ios4:"uE21B"},{ios5:"u1F550",ios4:"uE024"},{ios5:"u1F551",ios4:"uE025"},{ios5:"u1F552",ios4:"uE026"},{ios5:"u1F553",ios4:"uE027"},{ios5:"u1F554",ios4:"uE028"},{ios5:"u1F555",ios4:"uE029"},{ios5:"u1F556",ios4:"uE02A"},{ios5:"u1F557",ios4:"uE02B"},{ios5:"u1F558",ios4:"uE02C"},{ios5:"u1F559",ios4:"uE02D"},{ios5:"u1F55A",ios4:"uE02E"},{ios5:"u1F55B",ios4:"uE02F"},{ios5:"u1F5FB",ios4:"uE03B"},{ios5:"u1F5FC",ios4:"uE509"},{ios5:"u1F5FD",ios4:"uE51D"},{ios5:"u1F601",ios4:"uE404"},{ios5:"u1F602",ios4:"uE412"},{ios5:"u1F603",ios4:"uE057"},{ios5:"u1F604",ios4:"uE415"},{ios5:"u1F605",ios4:"uE415uE331"},{ios5:"u1F606",ios4:"uE40A"},{ios5:"u1F60A",ios4:"uE056"},{ios5:"u1F60B",ios4:"uE056"},{ios5:"u1F60D",ios4:"uE106"},{ios5:"u1F613",ios4:"uE108"},{ios5:"u1F614",ios4:"uE403"},{ios5:"u1F616",ios4:"uE407"},{ios5:"u1F618",ios4:"uE418"},{ios5:"u1F61E",ios4:"uE058"},{ios5:"u1F620",ios4:"uE059"},{ios5:"u1F621",ios4:"uE416"},{ios5:"u1F622",ios4:"uE413"},{ios5:"u1F623",ios4:"uE406"},{ios5:"u1F624",ios4:"uE404"},{ios5:"u1F629",ios4:"uE403"},{ios5:"u1F62A",ios4:"uE408"},{ios5:"u1F62B",ios4:"uE406"},{ios5:"u1F635",ios4:"uE406"},{ios5:"u1F638",ios4:"uE404"},{ios5:"u1F639",ios4:"uE412"},{ios5:"u1F63A",ios4:"uE057"},{ios5:"u1F63B",ios4:"uE106"},{ios5:"u1F63E",ios4:"uE416"},{ios5:"u1F63F",ios4:"uE413"},{ios5:"u1F640",ios4:"uE403"},{ios5:"u1F645",ios4:"uE423"},{ios5:"u1F646",ios4:"uE424"},{ios5:"u1F647",ios4:"uE426"},{ios5:"u1F64B",ios4:"uE012"},{ios5:"u1F64C",ios4:"uE427"},{ios5:"u1F683",ios4:"uE01E"},{ios5:"u1F685",ios4:"uE01F"},{ios5:"u1F687",ios4:"uE434"},{ios5:"u1F689",ios4:"uE039"},{ios5:"u1F68F",ios4:"uE150"},{ios5:"u1F691",ios4:"uE431"},{ios5:"u1F692",ios4:"uE430"},{ios5:"u1F693",ios4:"uE432"},{ios5:"u1F695",ios4:"uE15A"},{ios5:"u1F699",ios4:"uE42E"},{ios5:"u1F69A",ios4:"uE42F"},{ios5:"u1F6A2",ios4:"uE202"},{ios5:"u1F6A7",ios4:"uE137"},{ios5:"u1F6A8",ios4:"uE432"},{ios5:"u1F6AD",ios4:"uE208"},{ios5:"u1F6B6",ios4:"uE201"},{ios5:"u1F6BB",ios4:"uE151"},{ios5:"u1F6BC",ios4:"uE13A"},{ios5:"u1F6BE",ios4:"uE309"},{ios5:"u2122",ios4:"uE537"},{ios5:"u2196",ios4:"uE237"},{ios5:"u2197",ios4:"uE236"},{ios5:"u2198",ios4:"uE238"},{ios5:"u2199",ios4:"uE239"},{ios5:"u23E9",ios4:"uE23C"},{ios5:"u23EA",ios4:"uE23D"},{ios5:"u23F0",ios4:"uE02D"},{ios5:"u24C2",ios4:"uE434"},{ios5:"u25AA",ios4:"uE21A"},{ios5:"u25AB",ios4:"uE21B"},{ios5:"u25B6",ios4:"uE23A"},{ios5:"u25C0",ios4:"uE23B"},{ios5:"u25FB",ios4:"uE21B"},{ios5:"u25FC",ios4:"uE21A"},{ios5:"u25FD",ios4:"uE21B"},{ios5:"u25FE",ios4:"uE21A"},{ios5:"u260E",ios4:"uE009"},{ios5:"u263A",ios4:"uE414"},{ios5:"u2648",ios4:"uE23F"},{ios5:"u2649",ios4:"uE240"},{ios5:"u264A",ios4:"uE241"},{ios5:"u264B",ios4:"uE242"},{ios5:"u264C",ios4:"uE243"},{ios5:"u264D",ios4:"uE244"},{ios5:"u264E",ios4:"uE245"},{ios5:"u264F",ios4:"uE246"},{ios5:"u2650",ios4:"uE247"},{ios5:"u2651",ios4:"uE248"},{ios5:"u2652",ios4:"uE249"},{ios5:"u2653",ios4:"uE24A"},{ios5:"u2660",ios4:"uE20E"},{ios5:"u2665",ios4:"uE20C"},{ios5:"u2666",ios4:"uE20D"},{ios5:"u267F",ios4:"uE20A"},{ios5:"u2693",ios4:"uE202"},{ios5:"u26A0",ios4:"uE252"},{ios5:"u26AA",ios4:"uE219"},{ios5:"u26AB",ios4:"uE219"},{ios5:"u26BD",ios4:"uE018"},{ios5:"u26BE",ios4:"uE016"},{ios5:"u26C5",ios4:"uE04AuE049"},{ios5:"u26CE",ios4:"uE24B"},{ios5:"u26F2",ios4:"uE121"},{ios5:"u26F3",ios4:"uE014"},{ios5:"u26FA",ios4:"uE122"},{ios5:"u26FD",ios4:"uE03A"},{ios5:"u2702",ios4:"uE313"},{ios5:"u2709",ios4:"uE103"},{ios5:"u270A",ios4:"uE010"},{ios5:"u270B",ios4:"uE012"},{ios5:"u270F",ios4:"uE301"},{ios5:"u2728",ios4:"uE32E"},{ios5:"u2733",ios4:"uE206"},{ios5:"u2734",ios4:"uE205"},{ios5:"u274C",ios4:"uE333"},{ios5:"u274E",ios4:"uE333"},{ios5:"u2753",ios4:"uE020"},{ios5:"u2757",ios4:"uE021"},{ios5:"u2764",ios4:"uE022"},{ios5:"u27A1",ios4:"uE234"},{ios5:"u27BF",ios4:"uE211"},{ios5:"u2934",ios4:"uE236"},{ios5:"u2935",ios4:"uE238"},{ios5:"u2B05",ios4:"uE235"},{ios5:"u2B06",ios4:"uE232"},{ios5:"u2B07",ios4:"uE233"},{ios5:"u2B1B",ios4:"uE21A"},{ios5:"u2B1C",ios4:"uE21B"},{ios5:"u3297",ios4:"uE30D"},{ios5:"u3299",ios4:"uE315"}].forEach(function(i){o[i.ios4.toLowerCase()]=i.ios5}),module.exports={getIos4Map:function(){return o}}; 
 			}); 
		define("utils/enum.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},o=require("../libs/mmuxwxappdevkit/utils/enum.js"),r=Object.assign({},o);r.PageActionType=e({},r.PageActionType,{Visit3rdShop:1e3,Visit3rdGoodsDetail:1001,ViewLogistics:1002,ContactBusiness:1003,EnterFavorPage:1004,AddGoods:1005,doFavor:1006,searchWorthBuyMoreExposure:1007,enterCartList:1008,enterOrderList:1009,enterRecommendList:1010,enterMessageList:1011,CloseWelcome:1012,ClickRecommend:1013,ClickIndexPermission:1014,ClickIndexAbout:1015,SwitchPermissionItem:1016,DeletePermissionItem:1017,ClickQuickOpen:1018,QuickOpenAccept:1019,QuickOpenReject:1020,SelectProduct:1021,WelcomeButDoNothing:1022,WelcomeClickAuthList:1023,ViewRecommend:1024,CartListPermissionExpose:1025,CartListPermissionClick:1026,OrderListPermissionExpose:1027,OrderListPermissionClick:1028,IndexEnterOrder:1051,IndexEnterFavorite:1052,IndexEnterMessage:1053,IndexEnterMore:1054,IndexAddToFavorite:1101,IndexRemoveFromFavorite:1102,IndexDoComment:1103,IndexDoReply:1104,IndexDelRecommend:1105,IndexDelComment:1106,IndexDelReply:1055,IndexToProductDetail:1107,IndexDoLike:1201,IndexCancelLike:1202,IndexSearchClick:1203,FeedBackBtnClick:1204,IndexExposureOnShow:1205,IndexExposureOnLoad:1206,IndexExposureFirstListReq:1227,IndexAppOnLaunch:1207,IndexTapProduct:1208,IndexRecommendListItemExpose:1209,IndexTapProductImage:1210,IndexShareClick:1211,IndexShareOver:1212,IndexImageSwipe:1213,IndexEveryBuyMore:1214,IndexGroupExposure:1215,IndexGroupClick:1216,IndexEntryGuideExpose:1217,IndexEntryGuideConfirm:1218,IndexEntryGuideIgnore:1219,IndexEntryGuideMask:1220,NonTimelineTipsExpose:1221,NonTimelineTipsClick:1222,NonMoreTimelineTipsExpose:1223,NonMoreTimelineTipsClick:1224,IndexGroupRealExposure:1225,IndexGroupRealClick:1226,IndexMeClick:1227,IndexGroupFolderExposure:1228,IndexGroupFolderClick:1229,ClickCommentIcon:1230,ClickLikeIcon:1231,OrderListDelOrder:1108,OrderListToRecommendSubmit:1109,OrderListToRecommendDetail:1110,OrderListToOrderDetail:1111,OrderListItemExpose:1250,OrderDetailContact:1112,OrderDetailToRecommendSubmit:1113,OrderDetailToRecommendDetail:1114,FavoriteListDelFavorite:1134,FavoriteListToProductDetail:1115,FavoriteListItemContact:1116,FavoriteListRightTopBtnContact:1117,FavoriteListToRecommendSubmit:1119,FavoriteListToRecommendDetail:1120,FavoriteListItemExpose:1350,RecommendSubmitToProductDetail:1121,RecommendSubmitDoSubmit:1122,RecommendOrderShow:1401,RecommendOrderDoSubmit:1402,RecommendDetailToProductDetail:1123,RecommendDetailDoComment:1124,RecommendDetailDoReply:1125,RecommendDetailDelRecommend:1126,RecommendDetailDelComment:1127,RecommendDetailDelReply:1128,RecommendDetailAddToFavorite:1132,RecommendDetailRemoveFromFavorite:1133,RecommendDetailShareOver:1135,RecommendDetailEnterIndex:1136,RecommendDetailCardExposure:1137,RecommendDetailTapProduct:1451,RecommendDetailDoLike:1452,RecommendDetailTapProductImage:1453,RecommendDetailShareClick:1454,RecommendDetailImageSwipe:1455,MessageListMsgClick:1129,MessageListDelMsg:1130,MessageSystemEntryClick:1500,ContactSellerEnterIndex:1161,ContactSellerEnterChat:1162,ContactSellerChatClickKfHeadImgInMsg:1163,ContactSellerChatShowKfInfoManual:1164,ContactSellerChatShowKfInfoAuto:1165,ContactSellerChatClickKfInfoHeadImg:1166,Recommend3rdShowRecommendPage:1180,Recommend3rdRecommendSuccess:1181,Recommend3rdSuccessPageJumpIndex:1182,Recommend3rdClickAbout:1183,Recommend3rdShowRecommendTeach:1600,Recommend3rdIgnoreRecommendTeach:1601,Recommend3rdCloseRecommendTeach:1602,ShowProductSearchPage:1651,ShowProductSearchPageReturn:1652,OnClickShowProductSearchPageSearch:1653,PreviewImageAddToFavorite:1700,PreviewImageRemoveFromFavorite:1701,PreviewImageShareClick:1702,PreviewImageShareOver:1703,PreviewImageSwipe:1704,PreviewImageToProductDetail:1705,OpenEntryPeople:1800,CloseEntryPeople:1801,EveryBuyItemCard:1850,EveryBuyItemCardClickImg:1851,EveryBuyItemCardClickDetail:1852,EveryBuyItemCardClickAddToFavorite:1853,EveryBuyItemCardClickRemoveToFavorite:1854,EveryBuyItemCardClickRecommend:1855,EveryBuyTabClick:1856,EveryBuyItemComment:1857,ChooseIgnoreReason:1858,GroupInviteClick:1900,GroupInviteJoin:1901,GroupInviteEnter:1902,GroupInviteOpen:1903,GroupFeedExposure:1904,GroupProfileJoinExpose:1909,GroupProfileQuitExpose:1910,GroupProfileInviteExpose:1911,GroupProfileQuitClick:1912,GroupProfileInviteClick:1913,GroupCreateClick:1905,GroupCreateShow:1906,GroupCreateInfoEdit:1907,GroupCreateInfoConfirm:1908,EnterProfile:2e3,ProfileGetGroup:2001,ProfileEnterMyGroups:2002,ProfileEnterMyRecommend:2003,EnterGroupProfile:2050,GroupProfileClickJoin:2051,UserProfileClickSetting:2052,SettingClickPrivate:2053,ClickShareGroupFeddDetail:2054,ShareGroupFeddDetail:2055,ClickRecommendTeach:2056,WillUGC:2100,WillTakeMedia:2101,DidQuitTakeMedia:2102,DidTakeMedia:2103,WillSearch:2104,DoSearch:2105,DidSelectProduct:2106,WillChooseLocation:2107,DidChooseLocation:2108,WillJumpToPublish:2109,DoPublish:2110,DoSaveDraft:2111,DoDeleteDraft:2112,WillAppendMedia:2113,DidQuitAppendMedia:2114,DidAppendMedia:2115,OnSearchNoMatch:2116,WillPreviewLoad:2117,DidPreviewLoad:2118,OnPreviewDataReadyAndSet:2119,OnExitPreview:2120,OnTipExposure:2121,OnPreviewEnter:2122,ClickShare:2200,ClickDetail:2201,ShareProductStatus:2202,PermissionNeedOpen:2350,PermissionNeedClose:2351,musicPlay:1e4,inviteCodeCheck:10001,setStarMember:10002,delStarMember:10003,scaleImg:10004,clickLikeAndCommentPanel:10005,clickUgcSharePoi:10006,hotGroupExpose:10007,hotGroupClick:10008,hotGroupJoin:10009,goToGroupFeedDetail:10010}),r.IDKeyDefine=e({},r.IDKeyDefine,{NavigateFail:18,NavigateSucc:19,NavigateTap:20,NavigateComplete:21,MemoryWarning:23,CustomException:24,IndexLoadGroupListFail:50,UgcImageUploadSucc:51,UgcImageUploadFail:52,CartListEmpty:64,CartListHomePageError:65,CartDeleteError:66,OrderListEmpty:71,OrderListHomePageError:72,OrderDeleteError:73,RecommentListEmpty:78,RecommentListHomePageError:79,RecommentListAddGoodsError:80,OrderDetailGetExpressError:86,FavOrderCommentError:87,FavOrderGetFavorError:88,MyRecommentListEmpty:100,UserProfileFeedsRepeat:101,LanguagePkgInfoEmpty:102,GetStorageLanguagePkgError:103,FileNameIsNotEqualMd5:104,LanguagePkgDisabled:105,DownLoadNetworkLanguagePkgError:106,CreateAndApplyPatchError:107,ShoppingIndexFail:108,UrlOrMd5IsEmpty:109}),module.exports=r; 
 			}); 
		define("utils/facade.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.assign;var e=require("./util.js"),i=require("../core/sys.js"),o=require("../libs/mmuxwxappdevkit/utils/util.js"),n=(require("../globalData"),{Image:1,Video:2}),t={Camera:0,Album:1},r=function(){return i.userUin+"-"+Date.now()+"-"+Math.floor(1e8*Math.random())},s=o.compareSDKVersion(i.version,"7.0.5")>=0;module.exports={Mode:n,chooseMedia:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.Image|n.Video,a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],[]);u&n.Image&&a.push("photo"),u&n.Video&&a.push("video");var c=["拍摄"],h=[1];return u&n.Image&&u&n.Video?"android"===i.platform&&s?(c.push("从手机相册选择照片"),h.push(2),c.push("从手机相册选择视频"),h.push(3)):(c.push("从手机相册选择"),h.push(1)):u&n.Image?(c.push("从手机相册选择"),h.push(2)):(c.push("从手机相册选择"),h.push(3)),new Promise(function(e,i){console.info("UGC: show action sheet"),wx.showActionSheet({itemList:c,success:function(o){switch(o.tapIndex){case 0:return void e({source:t.Camera,pickAlbumType:h[o.tapIndex]});case 1:case 2:return void e({source:t.Album,pickAlbumType:h[o.tapIndex]});default:return void i(new Error)}},fail:function(e){console.info("UGC: exit action sheet - "+JSON.stringify(e)),i(new Error)}})}).then(function(i){var n=i.source,r=i.pickAlbumType;return console.info("UGC: source "+n+" version supported "+s+" pick album type "+r),s?new Promise(function(e,i){wx.chooseMultiMedia({count:3===r?1:o,sourceType:n===t.Camera?["camera"]:["album"],cameraType:a,pickAlbumType:r,maxDuration:n===t.Camera?30:60,success:function(i){console.info("UGC: choose multi media - "+JSON.stringify(i)),e({source:n,list:i.tempFiles})},fail:function(e){console.info("UGC: exit choose multi media - "+JSON.stringify(e)),i(e.errMsg&&e.errMsg.indexOf("maxDuration")>=0?new Error("内测功能，请更新客户端体验"):new Error)}})}):new Promise(function(e,i){wx.chooseImage({count:o,sizeType:["compressed"],sourceType:n===t.Camera?["camera"]:["album"],success:function(o){console.info("UGC: choose image - "+JSON.stringify(o)),o.tempFilePaths?e(o.tempFilePaths):i(new Error("图片路径不存在"))},fail:function(e){console.info("UGC: exit choose image - "+JSON.stringify(e)),i(new Error)}})}).then(function(i){console.info("UGC: get image info - "+JSON.stringify(i));var o=i.map(function(e){return function(i){return new Promise(function(o,n){wx.getImageInfo({src:e,success:function(n){console.info("UGC: get image info - "+e),i.push({type:"image",tempFilePath:e,width:n.width,height:n.height}),o(i)},fail:function(e){console.info("UGC: get image info fail - "+JSON.stringify(e)),n(new Error("获取图片信息失败"))}})})}});return e.serialize_promises(o,[]).then(function(e){return{source:n,list:e}})})}).then(function(e){var i=e.source,o=e.list;return console.info("UGC: complete choose media"),o.map(function(e){return"image"===e.type?{source:i,type:2,localID:e.tempFilePath,width:e.width,height:e.height,uuid:r()}:{source:i,type:1,localID:e.tempFilePath,size:e.size,width:e.width,height:e.height,duration:e.duration,thumbLocalID:e.thumbTempFilePath,uuid:r()}})})}}; 
 			}); 
		define("utils/gotoChatUtil.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="/seller-online/portal/chat/chat";module.exports={gotoWithProduct:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n.appid){var i=n.enterScene,p=e+"?wxapp_appid="+n.appid+"&enterScene="+i+"&profile_photo="+encodeURIComponent(n.profile_photo||"")+"&shop_name="+(n.shop_name||"")+"&from_product="+encodeURIComponent(JSON.stringify({src_wxapp_id:o.src_wxapp_id,src_wxapp_path:o.src_wxapp_path,item_code:o.item_code,sku_id:o.sku_id,title:o.title,image_url:o.image_url,price:o.price,original_price:o.original_price,source:o.source}));console.info("goto ",p),wx.navigateTo({url:p,success:function(e){},fail:function(e){console.error(e)}})}else console.error("seller appid empty")},gotoWithOrder:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.appid?wx.navigateTo({url:e+"?wxapp_appid="+n.appid+"&enterScene=5&from_order="+encodeURIComponent(JSON.stringify(o))+"&profile_photo="+encodeURIComponent(n.profile_photo)+"&shop_name="+encodeURIComponent(n.shop_name||""),success:function(e){},fail:function(e){console.error(e)}}):console.error("seller appid empty")},gotoMain:function(){wx.navigateTo({url:"/seller-online/portal/index/index"})},gotoChat:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.appid?wx.navigateTo({url:e+"?wxapp_appid="+o.appid,success:function(e){},fail:function(e){console.error(e)}}):console.error("seller appid empty")},canShowContactSellerWithBizUin:function(e){var o=getApp().globalData.dicBizUin2kfStatus[e];return!(!o||1!==o.is_kf_open)}}; 
 			}); 
		define("utils/json-diff-patch.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function r(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}return Array.from(r)}function e(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?r:e}function t(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)}function n(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function o(r){return r.replace(/~1/g,"/").replace(/~0/g,"~")}function a(r){return r.replace(/~/g,"~0").replace(/\//g,"~1")}function u(r){if(null==r||"object"!=(void 0===r?"undefined":T(r)))return r;if(r.constructor==Array){for(var e=r.length,t=new Array(e),n=0;n<e;n++)t[n]=u(r[n]);return t}var o={};for(var a in r)M.call(r,a)&&(o[a]=u(r[a]));return o}function i(r){return void 0===r?"undefined":null===r?"null":Array.isArray(r)?"array":void 0===r?"undefined":T(r)}function f(r,e){var t=r.length;if(t!==e.length)return!1;for(var n=0;n<t;n++)if(!l(r[n],e[n]))return!1;return!0}function c(r,e){var t=Object.keys(r),n=Object.keys(e),o=t.length;if(o!==n.length)return!1;for(var a=0;a<o;a++){var u=t[a];if(!e.hasOwnProperty(u)||!l(r[u],e[u]))return!1}return!0}function l(r,e){if(r===e)return!0;var t=i(r),n=i(e);return"array"==t&&"array"==n?f(r,e):"object"==t&&"object"==n&&c(r,e)}function p(r,e,t){if(Array.isArray(r))if("-"==e)r.push(t);else{var n=parseInt(e,10);r.splice(n,0,t)}else r[e]=t}function v(r,e){if(Array.isArray(r)){var t=parseInt(e,10);r.splice(t,1)}else delete r[e]}function s(r,e){var t=C.fromJSON(e.path).evaluate(r);return void 0===t.parent?new R(e.path):(p(t.parent,t.key,e.value),null)}function h(r,e){var t=C.fromJSON(e.path).evaluate(r);return void 0===t.value?new R(e.path):(v(t.parent,t.key),null)}function y(r,e){var t=C.fromJSON(e.path).evaluate(r);if(null===t.parent)return new R(e.path);if(Array.isArray(t.parent)){if(parseInt(t.key,10)>=t.parent.length)return new R(e.path)}else if(void 0===t.value)return new R(e.path);return t.parent[t.key]=e.value,null}function d(r,e){var t=C.fromJSON(e.from).evaluate(r);if(void 0===t.value)return new R(e.from);var n=C.fromJSON(e.path).evaluate(r);return void 0===n.parent?new R(e.path):(v(t.parent,t.key),p(n.parent,n.key,t.value),null)}function g(r,e){var t=C.fromJSON(e.from).evaluate(r);if(void 0===t.value)return new R(e.from);var n=C.fromJSON(e.path).evaluate(r);return void 0===n.parent?new R(e.path):(p(n.parent,n.key,u(t.value)),null)}function m(r,e){var t=C.fromJSON(e.path).evaluate(r);return l(t.value,e.value)?null:new V(t.value,e.value)}function b(r,e){switch(e.op){case"add":return s(r,e);case"remove":return h(r,e);case"replace":return y(r,e);case"move":return d(r,e);case"copy":return g(r,e);case"test":return m(r,e)}return new z(e)}function w(r){var e=r.op;return"remove"===e||"replace"===e||"copy"===e||"move"===e}function O(r,e){var t={};for(var n in r)r.hasOwnProperty(n)&&void 0!==r[n]&&(t[n]=1);for(var o in e)e.hasOwnProperty(o)&&void 0!==e[o]&&delete t[o];return Object.keys(t)}function k(r){for(var e=r.length,t={},n=0;n<e;n++){var o=r[n];for(var a in o)o.hasOwnProperty(a)&&void 0!==o[a]&&(t[a]=(t[a]||0)+1)}for(var u in t)t[u]<e&&delete t[u];return Object.keys(t)}function S(r){return"add"===r.op}function j(r){return"remove"===r.op}function A(r,e){return{operations:r.operations.concat(e),cost:r.cost+1}}function _(e,t,n){function o(r,n){var a=r+","+n,i=u[a];if(void 0===i){if(r>0&&n>0&&l(e[r-1],t[n-1]))i=o(r-1,n-1);else{var f=[];if(r>0){var c=o(r-1,n),p={op:"remove",index:r-1};f.push(A(c,p))}if(n>0){var v=o(r,n-1),s={op:"add",index:r-1,value:t[n-1]};f.push(A(v,s))}if(r>0&&n>0){var h=o(r-1,n-1),y={op:"replace",index:r-1,original:e[r-1],value:t[n-1]};f.push(A(h,y))}i=f.sort(function(r,e){return r.cost-e.cost})[0]}u[a]=i}return i}var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:P,u={"0,0":{operations:[],cost:0}},i=isNaN(e.length)||e.length<=0?0:e.length,f=isNaN(t.length)||t.length<=0?0:t.length,c=o(i,f).operations.reduce(function(e,t){var o=I(e,2),u=o[0],f=o[1];if(S(t)){var c=t.index+1+f,l=c<i+f?String(c):"-",p={op:t.op,path:n.add(l).toString(),value:t.value};return[u.concat(p),f+1]}if(j(t)){var v={type:"array",op:t.op,path:n.add(String(t.index+f)).toString()};return[u.concat(v),f-1]}var s=n.add(String(t.index+f)),h=a(t.original,t.value,s);return[u.concat.apply(u,r(h)),f]},[[],0]);return I(c,1)[0]}function E(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:P,a=[];return O(e,t).forEach(function(r){a.push({op:"remove",path:n.add(r).toString()})}),O(t,e).forEach(function(r){a.push({op:"add",path:n.add(r).toString(),value:t[r]})}),k([e,t]).forEach(function(u){a.push.apply(a,r(o(e[u],t[u],n.add(u))))}),a}function N(r,e,t){return l(r,e)?[]:[{op:"replace",path:t.toString(),value:e}]}function P(r,e,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:P,o=i(r),a=i(e);return"array"==o&&"array"==a?_(r,e,t,n):"object"==o&&"object"==a?E(r,e,t,n):N(r,e,t)}function x(r){function e(t,n,o){var a=r(t,n,o);return Array.isArray(a)?a:P(t,n,o,e)}return e}function J(r,e){var t=C.fromJSON(e).evaluate(r);if(void 0!==t)return{op:"test",path:e,value:t.value}}var I=function(){function r(r,e){var t=[],n=!0,o=!1,a=void 0;try{for(var u,i=r[Symbol.iterator]();!(n=(u=i.next()).done)&&(t.push(u.value),!e||t.length!==e);n=!0);}catch(r){o=!0,a=r}finally{try{!n&&i.return&&i.return()}finally{if(o)throw a}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},q=function(){function r(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),C=function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[""];n(this,r),this.tokens=e}return q(r,[{key:"toString",value:function(){return this.tokens.map(a).join("/")}},{key:"evaluate",value:function(r){for(var e=null,t="",n=r,o=1,a=this.tokens.length;o<a;o++)e=n,t=this.tokens[o],n=(e||{})[t];return{parent:e,key:t,value:n}}},{key:"get",value:function(r){return this.evaluate(r).value}},{key:"set",value:function(r,e){for(var t=r,n=1,o=this.tokens.length-1,a=this.tokens[n];n<o;n++)t=(t||{})[a];t&&(t[this.tokens[this.tokens.length-1]]=e)}},{key:"push",value:function(r){this.tokens.push(r)}},{key:"add",value:function(e){return new r(this.tokens.concat(String(e)))}}],[{key:"fromJSON",value:function(e){var t=e.split("/").map(o);if(""!==t[0])throw new Error("Invalid JSON Pointer: "+e);return new r(t)}}]),r}(),M=Object.prototype.hasOwnProperty,R=function(r){function o(r){n(this,o);var t=e(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,"Value required at path: "+r));return t.path=r,t.name="MissingError",t}return t(o,Error),o}(),V=function(r){function o(r,t){n(this,o);var a=e(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,"Test failed: "+r+" != "+t));return a.actual=r,a.expected=t,a.name="TestError",a.actual=r,a.expected=t,a}return t(o,Error),o}(),z=function(r){function o(r){n(this,o);var t=e(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,"Invalid operation: "+r.op));return t.operation=r,t.name="InvalidOperationError",t}return t(o,Error),o}();exports.applyPatch=function(r,e){return e.map(function(e){return b(r,e)})},exports.createPatch=function(r,e,t){var n=new C;return(t?x(t):P)(r,e,n)},exports.createTests=function(r,e){var t=new Array;return e.filter(w).forEach(function(e){var n=J(r,e.path);if(n&&t.push(n),"from"in e){var o=J(r,e.from);o&&t.push(o)}}),t}; 
 			}); 
		define("utils/logger.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict"; 
 			}); 
		define("utils/md5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function n(n,r){var t=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(t>>16)<<16|65535&t}function r(n,r){return n<<r|n>>>32-r}function t(t,e,u,o,c,f){return n(r(n(n(e,t),n(o,f)),c),u)}function e(n,r,e,u,o,c,f){return t(r&e|~r&u,n,r,o,c,f)}function u(n,r,e,u,o,c,f){return t(r&u|e&~u,n,r,o,c,f)}function o(n,r,e,u,o,c,f){return t(r^e^u,n,r,o,c,f)}function c(n,r,e,u,o,c,f){return t(e^(r|~u),n,r,o,c,f)}function f(r,t){r[t>>5]|=128<<t%32,r[14+(t+64>>>9<<4)]=t;var f,i,a,h,g,l=1732584193,d=-271733879,v=-1732584194,C=271733878;for(f=0;f<r.length;f+=16)i=l,a=d,h=v,g=C,d=c(d=c(d=c(d=c(d=o(d=o(d=o(d=o(d=u(d=u(d=u(d=u(d=e(d=e(d=e(d=e(d,v=e(v,C=e(C,l=e(l,d,v,C,r[f],7,-680876936),d,v,r[f+1],12,-389564586),l,d,r[f+2],17,606105819),C,l,r[f+3],22,-1044525330),v=e(v,C=e(C,l=e(l,d,v,C,r[f+4],7,-176418897),d,v,r[f+5],12,1200080426),l,d,r[f+6],17,-1473231341),C,l,r[f+7],22,-45705983),v=e(v,C=e(C,l=e(l,d,v,C,r[f+8],7,1770035416),d,v,r[f+9],12,-1958414417),l,d,r[f+10],17,-42063),C,l,r[f+11],22,-1990404162),v=e(v,C=e(C,l=e(l,d,v,C,r[f+12],7,1804603682),d,v,r[f+13],12,-40341101),l,d,r[f+14],17,-1502002290),C,l,r[f+15],22,1236535329),v=u(v,C=u(C,l=u(l,d,v,C,r[f+1],5,-165796510),d,v,r[f+6],9,-1069501632),l,d,r[f+11],14,643717713),C,l,r[f],20,-373897302),v=u(v,C=u(C,l=u(l,d,v,C,r[f+5],5,-701558691),d,v,r[f+10],9,38016083),l,d,r[f+15],14,-660478335),C,l,r[f+4],20,-405537848),v=u(v,C=u(C,l=u(l,d,v,C,r[f+9],5,568446438),d,v,r[f+14],9,-1019803690),l,d,r[f+3],14,-187363961),C,l,r[f+8],20,1163531501),v=u(v,C=u(C,l=u(l,d,v,C,r[f+13],5,-1444681467),d,v,r[f+2],9,-51403784),l,d,r[f+7],14,1735328473),C,l,r[f+12],20,-1926607734),v=o(v,C=o(C,l=o(l,d,v,C,r[f+5],4,-378558),d,v,r[f+8],11,-2022574463),l,d,r[f+11],16,1839030562),C,l,r[f+14],23,-35309556),v=o(v,C=o(C,l=o(l,d,v,C,r[f+1],4,-1530992060),d,v,r[f+4],11,1272893353),l,d,r[f+7],16,-155497632),C,l,r[f+10],23,-1094730640),v=o(v,C=o(C,l=o(l,d,v,C,r[f+13],4,681279174),d,v,r[f],11,-358537222),l,d,r[f+3],16,-722521979),C,l,r[f+6],23,76029189),v=o(v,C=o(C,l=o(l,d,v,C,r[f+9],4,-640364487),d,v,r[f+12],11,-421815835),l,d,r[f+15],16,530742520),C,l,r[f+2],23,-995338651),v=c(v,C=c(C,l=c(l,d,v,C,r[f],6,-198630844),d,v,r[f+7],10,1126891415),l,d,r[f+14],15,-1416354905),C,l,r[f+5],21,-57434055),v=c(v,C=c(C,l=c(l,d,v,C,r[f+12],6,1700485571),d,v,r[f+3],10,-1894986606),l,d,r[f+10],15,-1051523),C,l,r[f+1],21,-2054922799),v=c(v,C=c(C,l=c(l,d,v,C,r[f+8],6,1873313359),d,v,r[f+15],10,-30611744),l,d,r[f+6],15,-1560198380),C,l,r[f+13],21,1309151649),v=c(v,C=c(C,l=c(l,d,v,C,r[f+4],6,-145523070),d,v,r[f+11],10,-1120210379),l,d,r[f+2],15,718787259),C,l,r[f+9],21,-343485551),l=n(l,i),d=n(d,a),v=n(v,h),C=n(C,g);return[l,d,v,C]}function i(n){var r,t="";for(r=0;r<32*n.length;r+=8)t+=String.fromCharCode(n[r>>5]>>>r%32&255);return t}function a(n){var r,t=[];for(t[(n.length>>2)-1]=void 0,r=0;r<t.length;r+=1)t[r]=0;for(r=0;r<8*n.length;r+=8)t[r>>5]|=(255&n.charCodeAt(r/8))<<r%32;return t}function h(n){return i(f(a(n),8*n.length))}function g(n,r){var t,e,u=a(n),o=[],c=[];for(o[15]=c[15]=void 0,u.length>16&&(u=f(u,8*n.length)),t=0;t<16;t+=1)o[t]=909522486^u[t],c[t]=1549556828^u[t];return e=f(o.concat(a(r)),512+8*r.length),i(f(c.concat(e),640))}function l(n){var r,t,e="";for(t=0;t<n.length;t+=1)r=n.charCodeAt(t),e+="0123456789abcdef".charAt(r>>>4&15)+"0123456789abcdef".charAt(15&r);return e}function d(n){return unescape(encodeURIComponent(n))}function v(n){return h(d(n))}function C(n){return l(v(n))}function s(n,r){return g(d(n),d(r))}function A(n,r){return l(s(n,r))}module.exports=function(n,r,t){return r?t?s(r,n):A(r,n):t?v(n):C(n)}; 
 			}); 
		define("utils/pageVirtualStack.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=["首次启动页面"],r=100;exports.middlePage="/portal/transfer/transfer",exports.maxPageLevel=r,exports.push=function(r){e.push(r),console.log("pages: ",e)},exports.pop=function(){var r=e.pop();return console.log("pages: ",e),r},exports.splice=function(r){var t=r.start,o=r.deleteCount,s=void 0===o?0:o,n=r.route,p=e.splice(t,s,n);return console.log("pages: ",e),p},exports.getCurrentVirtualPages=function(){var r=[];return e.forEach(function(e){return r.push(e)}),r},exports.setMaxPageLevel=function(e){r=e}; 
 			}); 
		define("utils/permissionMsg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../core/network.js"),e=require("../models/getPermissionList.js");module.exports={load:function(t){new e({success:function(e){if(e.item_list){e.item_list.filter(function(t){return"1"!==t.auth_status||"1"===t.auth_status&&t.b_read});var s=e.item_list.filter(function(t){return"1"===t.auth_status&&!t.b_read});s.length&&t({msg_id:"permission_msg",msg_type:"permission_msg",count:s.length,content:s.map(function(t){return t.nickname}).join("，")})}},fail:function(t){},complete:function(){}}).loadNext()},clear:function(){t.request({cgi:t.cgiSet.clearAuthUnread,params:{set_source:0,has_read:!0},success:function(){}})}}; 
 			}); 
		define("utils/preHanleFriendList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("./dict");module.exports=function(n){var r={},t=[],i=0,o=0;new Date;n.forEach(function(n){var t=n.nickname.trim();n.head_img_url&&-1===n.head_img_url.indexOf("http")&&(n.head_img_url="https://wx.qlogo.cn/mmhead/"+n.head_img_url+"/132"),n.singleWord=t.split(""),n.pinyin=e.convertToPinyin(t," ").split(" ");var s=Date.now();n.wordsStructure=e.nameToWordsStructureNew(t);var a=Date.now();i+=a-s,n.newIndexes=e.wordsStructureToIndexesNew(n.wordsStructure),delete n.wordsStructure;var u=Date.now();o+=u-a;var c=n.pinyin.length&&n.pinyin[0]&&n.pinyin[0][0]||n.pinyin[0][0]||"#";c=/[a-zA-Z]/.test(c)?c.toUpperCase():"#",r.hasOwnProperty(c)?r[c].push(n):r[c]=[n]});for(var s in r)r[s].sort(function(n,r){return-e.comparePinyinArray(n.pinyin,r.pinyin)}),t.push({sectionName:s,users:r[s]});t.sort(function(e,n){return e.sectionName>n.sectionName?1:-1}),t.push(t[0]),t.splice(0,1);Date.now();var a=new Map;t.forEach(function(e,n){e.users.forEach(function(e,n){e.newIndexes.forEach(function(n){a.has(n)?a.get(n).push(e.encrypt_user_uin):a.set(n,[e.encrypt_user_uin])}),delete e.pinyin,delete e.singleWord,delete e.newIndexes})});Date.now();return{list:t,indexMap:a}}; 
 			}); 
		define("utils/readReporter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.self)throw new Error("ReadReporter need this");this.ctx=e.self,this.readTime=e.readTime,this.maxReportLen=e.maxReportLen,this.intervalTime=1e3*e.intervalTime,this.intervalTimer=0}var t=require("../core/network.js"),r=function(){};e.prototype.dataList=[],e.prototype.createIntersectionObserver=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ctx.createIntersectionObserver)throw new Error("ReadReporter has not createIntersectionObserver");return this.observer=this.ctx.createIntersectionObserver(e),this},e.prototype.relativeToViewport=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.observer.relativeToViewport)throw new Error("ReadReporter has not relativeToViewport");return this.observer.relativeToViewport(e),this},e.prototype.reset=function(){this.startTime=null,this.endTime=null,this.timeoutTimer&&clearTimeout(this.timeoutTimer)},e.prototype.add=function(e){var t=this;this.dataList.push(e),this.dataList.length>this.maxReportLen?this.report():this.intervalTimer||(this.intervalTimer=setInterval(function(){t.report()},this.intervalTime))},e.prototype.report=function(){if(!this.dataList.length)return this.intervalTimer&&clearInterval(this.intervalTimer),void(this.intervalTimer=0);t.request({cgi:t.cgiSet.reportRead,params:{infos:this.dataList},success:function(e){console.info("reportRead cgi success",e)},fail:function(e){console.error("reportRead cgi fail:",e)}}),this.dataList.length=0,this.intervalTimer&&clearInterval(this.intervalTimer),this.intervalTimer=0},e.prototype.reportAll=function(){this.report()},e.prototype.observe=function(e){var t=this,i=e.selector,o=e.ratio,s=void 0===o?.4:o,n=e.callback,a=void 0===n?r:n,c=e.reportData,m=void 0===c?{}:c;if(!this.observer.observe)throw new Error("ReadReporter has not observe");return this.observer.observe(i,function(e){if(t.intersectionRatio=e.intersectionRatio,e.intersectionRatio>=s)if(t.startTime){t.endTime=e.time;var r=t.endTime-t.startTime;r>=t.readTime?(m.read_time=r,t.add(m),t.observer.disconnect&&t.observer.disconnect()):t.reset()}else t.startTime=e.time,t.timeoutTimer&&clearTimeout(t.timeoutTimer),t.timeoutTimer=setTimeout(function(){t.endTime=(new Date).getTime();var e=t.endTime-t.startTime;e>=t.readTime&&t.intersectionRatio>=s&&(m.read_time=e,console.log("report_read",m),t.add(m),t.observer.disconnect&&t.observer.disconnect()),t.timeoutTimer&&clearTimeout(t.timeoutTimer)},t.readTime);else t.reset();a&&a(e)}),this},module.exports=e; 
 			}); 
		define("utils/reportSearchProduct.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var i=require("../libs/mmuxwxappdevkit/index.js").Reporter;module.exports={setSearchid:function(i){this.searchid=i},setSourceType:function(i){this.sourceType=i},reportProductLog:function(t){var e=t.appuin,d=t.product_id,o=t.type,p=t.isH5,r=t.index;i.report({logId:16863,logString:["",this.searchid,e,d,o,this.sourceType,p,r,+new Date].join(",")})},statVisit3rdGoodsDetail:function(i){var t=i.detail;this.reportProductLog({appuin:t.appuin,product_id:t.itemCode,type:1,isH5:t.isH5,index:t.index})},statAddOpenProduct:function(i){var t=i.detail;this.reportProductLog({appuin:t.appuin,product_id:t.itemCode,type:2,isH5:t.isH5,index:t.index})},statRemoveOpenProduct:function(i){var t=i.detail;this.reportProductLog({appuin:t.appuin,product_id:t.itemCode,type:3,isH5:t.isH5,index:t.index})},statClickShare:function(i){var t=i.detail;this.reportProductLog({appuin:t.appuin,product_id:t.itemCode,type:7,isH5:t.isH5,index:t.index})},statShareProductSuccess:function(i){var t=i.detail;this.reportProductLog({appuin:t.appuin,product_id:t.itemCode,type:8,isH5:t.isH5,index:t.index})},statClickRecommendNew:function(i){var t=i.detail;this.reportProductLog({appuin:t.appuin,product_id:t.itemCode,type:4,isH5:t.isH5,index:t.index})}}; 
 			}); 
		define("utils/return_code.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={SYSTEM_ERROR:{code:-1,msg:"系统错误，请稍后重试"},OK:{code:0,msg:"ok"},INVALID_ARGUMENT:{code:-2,msg:"参数错误"},NOT_SUPPORT:{code:-3,msg:"接口未实现"},DELETE_FAILED:{code:10011,msg:"部分物品删除失败"},REQ_TIMEOUT:{code:9999999,msg:"请求超时"},CHECK_SESSION_FAILED:{code:1e7,msg:"wx.checkSession()失败"},INVALID_SESSION:{code:10000001,msg:"本地session为空"},WX_LOGIN_FAILED:{code:10000002,msg:"INVALID SESSION"},CODE_IS_EMPTY_CANNOT_GET_SESSION_KEY:{code:10000003,msg:"code is empty, cannot get sessionKey"},LOGIN_CGI_RETURN_INVALID_SESSION_KEY:{code:10000004,msg:"login cgi response an invalid session key"},FETCH_LOGIN_CGI_ERROR:{code:10000005,msg:"fetch login cgi error"},FETCH_CGI_FAILED:{code:10000006,msg:"fetch cgi failed"},CGI_RESP_NOT_SUCCESS:{code:1000007,msg:"cgi 返回码不为0"},INVALID_CGI_RESP:{code:1000008,msg:"cgi返回了错误的结构体"}}; 
 			}); 
		define("utils/ticket.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t={},r={};exports.registerTicket=function(r,e){t[r]=e},exports.getTicket=function(r){return t[r]},exports.updateGroupAttr=function(t){t&&(Array.isArray(t)||(t=[t]),t.forEach(function(t){t.id&&t.ticket&&(r[t.id]=t)}))},exports.getProfileTicket=function(t){return r[t]&&r[t].ticket||""}; 
 			}); 
		define("utils/toast.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={showErrTips:function(o){wx.hideLoading(),setTimeout(function(){var t=o&&o.toString()||"发生错误";t.charLength()<=14?wx.showToast({title:t,image:"/assets/icon-error.png",duration:1500}):wx.showToast({title:t,icon:"none",duration:1500})})},showSuccessTips:function(o){wx.hideLoading(),setTimeout(function(){wx.showToast({title:o&&o.toString()||"OK",icon:"success",duration:1500})})},showTips:function(o){wx.hideLoading(),setTimeout(function(){wx.showToast({title:o&&o.toString()||"OK",icon:"none",duration:1500})})},showLoading:function(o){setTimeout(function(){wx.showLoading({title:o||"请稍候..."})})},hideLoading:function(){wx.hideLoading()}}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},i=function(){function e(e,t){var i=[],n=!0,r=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{!n&&c.return&&c.return()}finally{if(r)throw o}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=(function(e){e&&e.__esModule}(require("./datetime.js")),require("../libs/mmuxwxappdevkit/index.js")),r=n.IdKey,o=(n.Logger,n.Sys),a=n.Reporter,c=require("../libs/mmuxwxappdevkit/utils/util.js"),u="function"===wx.getLogManager?wx.getLogManager({level:1}):{log:function(){},info:function(){},debug:function(){},warn:function(){}},s=require("./enum.js").IDKeyDefine,l=(require("../core/exceptionReporter.js"),require("../core/network")),f=require("./emojiConfig.js").getIos4Map(),d=require("./md5.js"),p=require("./pageVirtualStack"),m=require("../globalData"),g=function(){},h=function(e){return(e=e.toString())[1]?e:"0"+e},_=["微笑","撇嘴","色","发呆","得意","流泪","害羞","闭嘴","睡","大哭","尴尬","发怒","调皮","呲牙","惊讶","难过","酷","冷汗","抓狂","吐","偷笑","可爱","白眼","傲慢","饥饿","困","惊恐","流汗","憨笑","奋斗","大兵","咒骂","疑问","嘘","晕","折磨","衰","骷髅","敲打","再见","擦汗","抠鼻","鼓掌","糗大了","坏笑","左哼哼","右哼哼","哈欠","鄙视","委屈","快哭了","阴险","亲亲","吓","可怜","菜刀","西瓜","啤酒","篮球","乒乓","咖啡","饭","猪头","玫瑰","凋谢","示爱","爱心","心碎","蛋糕","闪电","炸弹","刀","足球","瓢虫","便便","月亮","太阳","礼物","拥抱","强","弱","握手","胜利","抱拳","勾引","拳头","差劲","爱你","NO","OK","爱情","飞吻","跳跳","发抖","怄火","转圈","磕头","回头","跳绳","挥手","激动","街舞","献吻","左太极","右太极","嘿哈","捂脸","奸笑","机智","皱眉","耶"],v={};_.forEach(function(e,t){v[e]={value:e,idx:t}});module.exports={formatTime:function(e){var t=e.getFullYear(),i=e.getMonth()+1,n=e.getDate(),r=e.getHours(),o=e.getMinutes(),a=e.getSeconds();return[t,i,n].map(h).join("/")+" "+[r,o,a].map(h).join(":")},formatTimeSeconds:function(e){function t(e){return e<10?"0"+e:e}e=parseInt(e,10);var i=new Date(1e3*e);return t(i.getFullYear())+"-"+t(i.getMonth()+1)+"-"+t(i.getDate())+" "+t(i.getHours())+":"+t(i.getMinutes())},firendGroupId:"13104374716925600",forwardFeed:"13104374716925601",isForwardFeed:function(e){return e==this.forwardFeed},isFirendGroupId:function(e){return"0"==e||e==this.firendGroupId||""==e},getQueryObject:function(e){return e?(/^[?#]/.test(e)?e.slice(1):e).split("&").reduce(function(e,t){var n=t.split("="),r=i(n,2),o=r[0],a=r[1];return e[o]=a?decodeURIComponent(a.replace(/\+/g," ")):"",e},{}):{}},formatBatchData:function(e){try{e=JSON.parse(e&&e.buff||"{}")}catch(t){e={}}return e},appendQueryObject:function(e,t){var i="?";return e.includes("?")&&(i="&"),e+=i,Object.keys(t).forEach(function(i,n){0!=n&&(e+="&"),e+=i+"="+t[i]}),e},genKVLogString:function(e){var t,i="";for(t in e)0!=i.length&&(i+=","),i+=e[t];return i},genClickId:function(){return(new Date).getTime()+parseInt(100*Math.random())+""},getCurrentPage:function(){var e=getCurrentPages();return e[e.length-1]},handleImageUrl:function(e,t){if(e&&(e.indexOf("shp.qpic.cn")>=0||e.indexOf("bs.qpic.cn")>=0)){var i=e.split("/");if(isNaN(i[i.length-1]))return e+"/"+(t||"0")}return e||""},sortUnique:function(e,t){if(!t||!e)return e;var i=[],n=[];return e.forEach(function(e){var r=t(e);n.indexOf(r)<0&&i.push(e)}),e},openProfile:function(e){console.info("openProfile",e),wx.openUserProfile&&wx.openUserProfile({username:e})},openUserProfile:function(e){var t=e.openid,i=void 0===t?"":t,n=e.group_id,r=void 0===n?"":n,o=e.fromScene,a=void 0===o?"":o,c=e.inGroup,u=void 0===c?0:c,s=e.groupName,l=void 0===s?"":s;r!==this.firendGroupId&&i&&r&&this.navigateTo({url:"/portal/profile/profile?openid="+encodeURIComponent(i)+"&group_id="+encodeURIComponent(r)+"&fromScene="+encodeURIComponent(a)+"&inGroup="+u+"&groupName="+l,complete:function(e){var t=e.openid,i=e.group_id;console.info("navigateTo some params: openid="+t+", group_id="+i)}})},handleGroupProductData:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];if(e.info||(e.info={openid:"",like_info:[],comment_list:[]}),e.group_item&&(e.info.id=e.group_item.group_id,e.info.timestamp=e.group_item.timestamp),4==e.info.type){var r=e.forward_item.original_feed;e.info=t({},e.info,{id:r.info.id,comment:r.info.comment,openid:r.info.openid,comment_id:r.info.comment_id}),this.handleGroupProductData(r,i,n)}return e.info.id=e.info.id||e.info.uid,this.handleProductData(e,i,n)},handleTimelineProductData:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments[2];return e.info=e.recommend_info,delete e.recommend_info,e.info.comment_list=e.info.msglist,delete e.info.msglist,this.handleProductData(e,t,i)},handleCommentItem:function(e,t){var i=this;e.comment=this.handleStringEmojiIos4ToIos5(e.comment||""),e.commentArr=this.getCommentArr(e.comment),e.owneropenid=e.openid,e.to_openid=e.to_openid||e.openid,t[e.to_openid]&&(e.receiver=t[e.to_openid]),t[e.owneropenid]&&(e.sender=t[e.owneropenid]),e.reply=e.reply||[],e.reply.forEach(function(e){i.handleReplyItem(e,t)})},handleReplyItem:function(e,t){e.comment=this.handleStringEmojiIos4ToIos5(e.comment||""),e.replyArr=this.getCommentArr(e.comment),e.owneropenid=e.openid,e.to_openid=e.to_openid||e.openid,t[e.to_openid]&&(e.receiver=t[e.to_openid]),t[e.owneropenid]&&(e.sender=t[e.owneropenid])},handleStringEmojiIos4ToIos5:function(e){if(!e)return"";var t=void 0,i="",n=!0,r=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){var u=a.value;for(t=u.codePointAt(0).toString(16);t.length<4;)t="0"+t;f[t="u"+t]&&(t=f[t],u=this.deUnicode(t)),i+=u}}catch(e){r=!0,o=e}finally{try{!n&&c.return&&c.return()}finally{if(r)throw o}}return i},deUnicode:function(e){return 0===e.indexOf("u")&&(e=e.slice(1,e.length)),String.fromCodePoint(parseInt(e,16))},handleProductData:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];Object.keys(i).forEach(function(e){i[e].nickname=t.handleStringEmojiIos4ToIos5(i[e].nickname||"")});var r=e.isUGC=2===e.info.type;if(r&&!e.ugc_item&&(e.ugc_item={}),e.product_item||(e.product_item={item_code:e.info.key,source:e.info.source,image_list:[]}),e.info.key||(e.info.key=r?e.ugc_item.key:e.product_item.item_code),e.info.source||(e.info.source=r?e.ugc_item.source:e.product_item.source),e.info.appuin||(e.info.appuin=r?e.ugc_item.appuin:e.product_item.biz_uin),e.selfInfo=i[n]||null,e.selfOpenId=n,o.userInfo&&e.selfInfo&&(o.userInfo.username=e.selfInfo.username),r){var a=[],c=[];e.info.comment=e.ugc_item.desc||"",e.ugc_item.info.forEach(function(e){1==e.type&&c.push(e.video),2==e.type&&a.push(e.image),e.product_info&&e.product_info.forEach(function(e){e.product_item=e.product,e.product_item&&e.product_item.image_cdn_list&&e.product_item.image_cdn_list.length>0&&(e.product_item.image_cdn_list=e.product_item.image_cdn_list.filter(function(e){return e.image_cdn_url}),e.product_item.image_list=e.product_item.image_cdn_list.map(function(e){return e.image_cdn_url}))})}),e.ugcImageList=a.filter(function(e){return e&&e.url}).map(function(t){return{url:t.url,width:t.width||o.screenWidth,height:t.height||o.screenHeight,isUgc:!0,isMyUgc:e.info.openid===o.userInfo.openid}}),e.video_item=c[0]}else{var u=[],s=e.product_item.article_info&&e.product_item.article_info.article_lst;s&&(s.forEach(function(t){t.appid=e.product_item.src_wxapp_id||e.appid,t.pic_url=t.cover_image_url||""}),u=s.concat(u)),e.articleList=u,e.product_item.image_cdn_list&&e.product_item.image_cdn_list.length>0&&(e.product_item.image_cdn_list=e.product_item.image_cdn_list.filter(function(e){return e.image_cdn_url}),e.product_item.image_list=e.product_item.image_cdn_list.map(function(e){return e.image_cdn_url}));var l=[],f=e.info&&e.info.item_ext_info||[];f.length&&(f=f.filter(function(e){return e&&e.item_url}).map(function(t){return{url:t.item_url,width:t.width||o.screenWidth,height:t.height||o.screenWidth,isUgc:!0,isMyUgc:e.info.openid===o.userInfo.openid}})),e.product_item&&e.product_item.image_cdn_list&&e.product_item.image_cdn_list.length>0?(e.product_item.image_list=e.product_item.image_cdn_list.map(function(e){return e.image_cdn_url}),l=e.product_item.image_cdn_list.map(function(e){return{url:e.image_cdn_url,width:e.width,height:e.height}})):l=e.product_item.image_list.map(function(e){return{url:e}}),e.cdnImageList=l,e.ugcImageList=f}var p=e.product_item;if(p&&p.sku_list&&p.sku_list.length){var m=p.sku_list.filter(function(e){return e.price||(e.price=0),1===e.status});m.length?(m=m.sort(function(e,t){return e.price-t.price}),p.minPrice=m[0].price||0,p.maxPrice=m[m.length-1].price||0):p.minPrice=p.maxPrice=0,p.minPrice===p.maxPrice?0===p.minPrice?(p.noPrice=!0,p.price_str="暂无价格"):(p.noPrice=!1,p.price_str="¥"+this.formatPrice(p.minPrice)):(p.noPrice=!1,p.price_str="¥"+this.formatPrice(p.minPrice)+" ~ ¥"+this.formatPrice(p.maxPrice))}else p.noPrice=!0,p.price_str="暂无价格",p.minPrice=e.maxPrice=0;this.handlePoi(e);var g=e.info;g.sender=i[g.openid],g.receiver=i[g.openid],g.comment=this.handleStringEmojiIos4ToIos5(g.comment||""),g.commentArr=this.getCommentArr(g.comment),g.comment_list=g.comment_list||[],g.comment_list.forEach(function(e){t.handleCommentItem(e,i)}),g.datetime=this.formatGroupUpdateTime(1e3*g.timestamp),g.sender=i[g.openid]||{},g.UserName=g.sender.username,g.NickName=g.sender.nickname,g.HeadImgUrl=g.sender.headimgurl,g.like_info=g.like_info||[],g.like_info.forEach(function(e){var t=i[e.openid];Object.assign(e,t)}),g.like_info_has_self=g.self_liked?"3":"",g.forward_list=(g.forward_list||[]).map(function(e){return Object.assign(e,i[e.openid])}),g.item_url=g.item_url||[],g.item_url=g.item_url.map(function(e){return-1!==e.indexOf("qpic")?e+"/0":e}),e.appid=e.appid||"",e.id=e.info.uid,e.unique_id="ID"+d(e.id||e.info.id)},handlePoi:function(e){var t=e.product_item,i=t.sku_list&&t.sku_list[0],n=i&&i.poi_list&&i.poi_list[0];if({PRODUCT_SHOW_TYPE_DISHES:1,PRODUCT_SHOW_TYPE_ATTRACTION:1,PRODUCT_SHOW_TYPE_HOTEL:1}[t.show_type]&&n){n.branch_name=(n.branch_name||"").trim(),n.business_name=(n.business_name||"").trim(),n.address=(n.address||"").trim(),n.city||(n.city=n.address.match(/^(.*?省)?(.*?)市/),n.city=n.city&&n.city[2]||"");var r=[];n.city&&r.push(n.city),n.business_name||n.branch_name?(n.business_name&&r.push(n.business_name),n.branch_name&&r.push(n.branch_name),n.name=r.join("·"),t.firstPoi=n):t.firstPoi=null}},formatPrice:function(e){return"number"!=typeof(e=parseInt(e,10))||e<=0||"NaN"===e.toString()?"":(e/100).toFixed(2)},isH5Product:function(e){return(!(e.appid||e.mch_appid||e.src_wxapp_id||e._src_wxapp_id)||!e.src_wxapp_path&&!e._src_wxapp_path)&&(e.src_h5_path,!0)},toH5:function(e){wx.openUrl({url:e.src_h5_path||""})},getFaceList:function(){return _},getFaceMap:function(){return v},getCommentArr:function(e){e=e||"";var t=String(Math.random()),i=/\[(.+?)]/gm,n=/\[(.+?)]/,r=/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/gm,o=/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;return e.replace(i,function(e,i){return i&&v[i]?""+t+e+t:""}).replace(r,function(e){return""+t+e+t}).split(t).filter(function(e){return Boolean(e)}).map(function(e){var t=e.match(n);return t&&t[1]&&v[t[1]]?{type:"face",idx:v[t[1]].idx}:!m.isGroupApp&&e.match(o)?{type:"url",value:e}:{type:"txt",value:e}})},deleteTailFace:function(e){var t=/\[([^\[\]]*?)]$/,i=e.match(t);return console.info("tailFace",i),i&&i[1]&&v[i[1]]?e.replace(t,""):e},faceDelete:function(e,t,i){var n=e.length-t.length,r=e.slice(0,i),o=t.slice(0,i-n);if(-1===n){var a=/\[([^\[\]]*?)]$/,c=o.match(a);if(c=c&&c[1],v[c]&&o.slice(0,o.length-1)===r)return o.replace(a,"")+e.slice(i,e.length)}return e},mergeTimelineList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e=e.slice().filter(function(e){return!!e&&!e.__ignore}),t=t.slice().filter(function(e){return!!e&&!e.__ignore}),console.info("will merge timelineList, oldList["+t.length+"], newList["+e.length+"], isReload["+i+"]"),console.info("timeline newList: "+e.map(function(e){return e.info.uid})),console.info("timeline oldList: "+t.map(function(e){return e.info.uid}));var n=e.map(function(e){return e.info.uid});t=t.filter(function(e){return!n.includes(e.info.uid)});var r=i?e.concat(t):t.concat(e),o=!i||t.length<=0;return console.info("finish timelineList["+r.length+"], updateSeq["+o+"]"),console.info("timeline mergeList: "+r.map(function(e){return e.info.uid})),{mergeList:r,updateSeq:o}},mergeIndexTimelineList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.filter(function(e){return e.group_item}).map(function(e){return e.group_item.id});return t=t.filter(function(e){return!e.group_item||!n.includes(e.group_item.id)}),this.mergeTimelineList(e,t,i)},getStringSize:function(e,t){for(var i=0,n=0;n<e.length;n++)e.charAt(n).match(/[^\x00-\xff]/gi)?i+=1:i+=.5;return t&&(i=Math.ceil(i)),i},formatMsgListTime:function(e){if(!e)return"";var t=new Date,i=(t.getTime(),t.getFullYear()),n=t.getMonth()+1,r=t.getDate(),o=t.getHours(),a=t.getMinutes(),c=new Date(e),u=c.getFullYear(),s=c.getMonth()+1,l=c.getDate(),f=c.getHours(),d=c.getMinutes(),p=i-u,m=n-s,g=r-l,_=o-f,v=Math.max(1,a-d);return p>=1?u+"年"+s+"月"+l+"日 "+h(f)+":"+h(d):m>0||g>1?s+"月"+l+"日 "+h(f)+":"+h(d):1==g?"昨天 "+h(f)+":"+h(d):_<1?1==v?"1分钟前":v+"分钟前":h(f)+":"+h(d)},formatGroupUpdateTime:function(e){var t=new Date;if(!e||e>t.getTime())return"";var i=new Date(e),n=t-i;return n<6e4?"1分钟前":n<36e5?Math.floor(n/6e4)+"分钟前":n<864e5?Math.floor(n/36e5)+"小时前":(t.setHours(-24,0,0),i>=t?"昨天":Math.ceil((t-i)/864e5)+1+"天前")},formatTimelineTime:function(e){if(!e)return"";var t=new Date,i=(t.getDate(),t.getHours()),n=t.getMinutes(),r=t.getSeconds(),o=new Date(e),a=(o.getDate(),o.getHours(),o.getMinutes()),c=(Math.max(1,n-a),+t-1e3*(60*(60*i+n)+r)),u="";if(e<c-864e5)u=parseInt((c-e)/864e5)+1+"天前";else{var s=t-e;u=s<864e5?s<36e5?s<12e4?"1分钟前":parseInt(s/6e4)+"分钟前":parseInt(s/36e5)+"小时前":"昨天"}return u},reportNavigateTap:function(){r.report(o.alarmId,s.NavigateTap)},reportNavigateSucc:function(){r.report(o.alarmId,s.NavigateSucc)},reportNavigateFail:function(e){u.info(e),r.report(o.alarmId,s.NavigateFail)},reportNavigateComplete:function(){r.report(o.alarmId,s.NavigateComplete)},reportNavigate:function(e,t,i,n){a.report({logId:17057,logString:[e||0,t||"",i||"",n||""].join(",")})},envVersion:"release",setEnvVersion:function(e){this.envVersion=e},getEnvVersion:function(){return this.envVersion},navigateToMiniProgram:function(e){var i=getCurrentPages().slice().pop(),n=i?i.route:"",r=e.appId,o=this;o.reportNavigate(0,r,n,""),e.extraData&&e.path&&(e.path=c.appendQueryObject(e.path,e.extraData)),e=t({},e,{envVersion:this.envVersion}),console.info("navigateToMiniProgram start appid:"+r),o.reportNavigateTap(),wx.navigateToMiniProgram(t({scene:1138},e,{success:function(){console.info("navigateToMiniProgram succ appid:"+r),o.reportNavigateSucc(),o.reportNavigate(1,r,n,""),"function"==typeof e.success&&e.success.apply(this,arguments)},fail:function(t){console.error("navigateToMiniProgram fail appid:"+r+" errMsg:"+t.errMsg),o.reportNavigateFail(t),o.reportNavigate(2,r,n,t.errMsg),"function"==typeof e.fail&&e.fail.apply(this,arguments),wx.showModal({title:"跳转失败",content:""+t.errMsg})},complete:function(){console.info("navigateToMiniProgram complete appid:"+r),o.reportNavigateComplete(),o.reportNavigate(3,r,n,"")}}))},convertRpx2Px:function(e){return o.windowWidth/750*e},toTuCao:function(){var e=this;wx.getNetworkType({success:function(t){var i=t.networkType;e.navigateToMiniProgram({scene:0,appId:"wx8abaf00ee8c3202e",extraData:{id:59769,customData:{clientInfo:o.model+o.platform,clientVersion:JSON.stringify({SDKVersion:o.SDKVersion}),os:o.system,netType:i,customInfo:JSON.stringify({openid:o.userInfo.openid})}},envVersion:"release"})},fail:function(){e.navigateToMiniProgram({scene:0,appId:"wx8abaf00ee8c3202e",extraData:{id:59769,customData:{clientInfo:o.model+o.platform,clientVersion:JSON.stringify({SDKVersion:o.SDKVersion}),os:o.system,netType:"",customInfo:JSON.stringify({openid:o.userInfo.openid})}},envVersion:"release"})}})},handleMsgItem:function(e){e.ext_info||(e.ext_info={});var t={};e.ext_info.info_list&&(e.ext_info.info_list.forEach(function(e){t[e.key]=e.value}),t.productimage&&-1!==t.productimage.indexOf("qpic.cn")&&(t.productimage+="/0")),e.ext_info.infoObj=t,e.commentArr=this.getCommentArr(e.item_desc),e.create_time=this.formatMsgListTime(1e3*e.create_time),!e.item_icon_url||-1===e.item_icon_url.indexOf("shp.qpic.cn")&&-1===e.item_icon_url.indexOf("bs.qpic.cn")||(e.item_icon_url+="/162"),-1!==[3,4,5,100,101,102,201,202,204,205,206,211,213,214,215,216,218,219,220,221].indexOf(e.msg_type)&&(e.canClick=!0),217===e.msg_type&&t.jump_url&&(e.canClick=!0),207===e.msg_type&&(e.avatarClick=!0),e.item_icon_url&&-1!==e.item_icon_url.indexOf("qlogo.cn")&&(e.item_icon_url+="/132")},backToIndex:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=getCurrentPages();!t||!t[0]||"pages/index/index"!==t[0].route&&"/pages/index/index"!==t[0].route?this.redirectTo({url:"/pages/index/index?"+(e.queryString||"")}):wx.navigateBack({delta:t.length-1})},filterReason:function(e,t){var i=e.ugc_item,n=t;if(i&&i.source&&4==i.source&&i.info&&i.info.length){for(var r=!1,o=0;o<i.info.length;o++)if(i.info[o].product_info&&i.info[o].product_info.length){r=!0;break}r||(n=t.filter(function(e){return!(e.ext_info&&e.ext_info.need_product)}))}return n},safeJump:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"__OPTION__";return new Promise(function(e,i){wx.setStorage({key:n,data:t,success:function(){e()},fail:function(e){console.info("safeJump: wx.setStorage: "+(e.errMsg||"fail")),i(new Error("发生错误"))}})}).then(function(){var n=[];Object.keys(t).forEach(function(e){var i=t[e];i&&n.push(e+"="+encodeURIComponent(JSON.stringify(i)))});var r=n.join("&");i.navigateTo({url:e+"?"+r})})},safeParseOption:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"__OPTION__";if(!e||!t||!e[t])return null;var n=null;try{n=JSON.parse(decodeURIComponent(e[t]))}catch(e){try{var r=wx.getStorageSync(i);n=r[t]||null}catch(e){}}return n},retry_promise:function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.confirmCallbackReturnPromise,r=i.succCallback,o=i.failCallback,a=i.retry_count,c=void 0===a?0:a,u=i.max_retry_count,s=void 0===u?1:u;return t().catch(function(i){if(c<s)return c++,n?n(i).catch(function(e){throw o&&o(e),e}).then(function(){return e(t,{confirmCallbackReturnPromise:n,succCallback:r,failCallback:o,retry_count:c,max_retry_count:s})}):e(t,{confirmCallbackReturnPromise:n,succCallback:r,failCallback:o,retry_count:c,max_retry_count:s});throw o&&o(i),i}).then(function(e){return r&&r(e),e})},serialize_promises:function(e,t){return e.reduce(function(e,t){return e.then(function(e){return t(e)})},Promise.resolve(t))},sourceIdToScene:function(e){var t={"index-recommend":2,timeline:2,"group-feed-list":6,search:4,"every-buy-list":5}[e];return void 0!==t?t:2},sourceIdToWxShoppingListScene:function(e){var t={"group-feed-list":10006,"group-feed-detail":10008,profile:10007,search:10004,"index-recommend":10002,"every-buy-list":10005}[e];return void 0!==t?t:10002},sourceIdToReportReadScene:function(e){var t={"index-recommend":1,"index-group-recommend":2,"group-feed-list":3,"invite-group-feed-list":4,profile:5}[e];return void 0!==t?t:1},sourceIdToShareScene:function(e){var t={"invite-group-feed-list":1,"group-feed-list":2,"group-feed-detail":3,search:4}[e];return void 0!==t?t:0},navigateTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.url,n=void 0===i?"":i,r=e.success,o=void 0===r?g:r,a=e.fail,c=void 0===a?g:a,u=e.complete,s=void 0===u?g:u,l=e.updateVirtualStack,f=void 0===l||l,d=n.split("?")[0],h=this.getQueryObject(n.split("?")[1]);console.info("navigateTo begin:",d);var _=getCurrentPages(),v={url:n,success:function(){f&&(p.getCurrentVirtualPages().length<p.maxPageLevel||_.length<p.maxPageLevel?p.splice({start:_.length,deleteCount:1,route:n}):p.push(n)),console.info("navigateTo success:",d),o&&o()},fail:function(e){console.error("navigateTo fail:",d,e),c&&c(),wx.showModal({title:"跳转失败",content:e.errMsg+"("+_.length+")"})},complete:function(e){console.info("navigateTo complete:",d,e),s&&s(h)}},y=m.whitePages.includes(d);if(f){if(_.length===p.maxPageLevel-1&&!y)return p.splice({start:_.length,deleteCount:0,route:n}),void this.redirectTo(t({},e,{url:p.middlePage+"?url="+encodeURIComponent(n)+"&type=navigateTo",updateVirtualStack:!1}));if(_.length>=p.maxPageLevel&&!y)return p.push(n),void this.redirectTo(t({},e,{updateVirtualStack:!1}))}wx.navigateTo(v)},redirectTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,i=void 0===t?"":t,n=e.success,r=void 0===n?g:n,o=e.fail,a=void 0===o?g:o,c=e.complete,u=void 0===c?g:c,s=e.updateVirtualStack,l=void 0===s||s,f=i.split("?")[0],d=this.getQueryObject(i.split("?")[1]);console.info("redirectTo begin:",f);var m=getCurrentPages(),h={url:i,success:function(){l&&(p.getCurrentVirtualPages().length<p.maxPageLevel||m.length<p.maxPageLevel)&&p.splice({start:m.length-1,deleteCount:1,route:i}),console.info("redirectTo success:",f),r&&r()},fail:function(e){console.error("redirectTo fail:",f,e),a&&a(),wx.showModal({title:"跳转失败",content:""+e.errMsg})},complete:function(e){console.info("redirectTo complete:",f,e),u&&u(d)}};wx.redirectTo(h)},getUniqueList:function(e){var t=e.oldList,i=void 0===t?[]:t,n=e.newList,r=void 0===n?[]:n,o=e.equalFn,a=void 0===o?g:o,c=e.repeatCallBack,u=void 0===c?g:c;if(r&&r.length){var s=[],l=[];return r.forEach(function(e,t){for(var i=!1,n=t+1;n<r.length;n++){var o=r[n];if(a&&a(e,o)){u&&u(e),i=!0;break}}!i&&l.push(e)}),l.forEach(function(e,t){for(var n=!1,r=0;r<i.length;r++){var o=i[r];if(a&&a(e,o)){u&&u(e),n=!0;break}}!n&&s.push(e)}),s}},clone:function(t){var i=Object.prototype.hasOwnProperty;if(null==t||"object"!=(void 0===t?"undefined":e(t)))return t;if(t.constructor==Array){for(var n=t.length,r=new Array(n),o=0;o<n;o++)r[o]=this.clone(t[o]);return r}var a={};for(var c in t)i.call(t,c)&&(a[c]=this.clone(t[c]));return a},replacePlaceholder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=/(%s)/m;return i.test(e)&&t.forEach(function(t){return e=e.replace(i,t)}),e},getRandomString:function(){return(new Date).getTime()+""+1e3*Math.random().toFixed(3)},uploadFile:function(e){var t=e.filePath,i=e.success,n=e.fail,r=e.complete;wx.uploadFile({url:"https://wxa.weixin.qq.com/"+o.cgiPrefix+"/media/upload-image",filePath:t,name:this.getRandomString(),formData:{session_key:l._ticket.session_key},success:function(e){var t=JSON.safeParse(e.data);if(200===e.statusCode&&0===t.errcode){console.info("upload image succ,",e);var r=JSON.safeParse(e.data).image_url;i&&i(r)}else console.error("upload image fail,",e),n&&n(e)},fail:function(e){console.error("upload image fail,",e),n&&n(e)},complete:function(e){r&&r(e)}})},shareAppMessageForFakeNative:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!wx.shareAppMessageForFakeNative)return console.warn("shareAppMessageForFakeNative not supported"),"function"==typeof e.fail&&e.fail({}),void("function"==typeof e.complete&&e.complete());try{if("release"!=getApp().globalData.version)return void wx.showModal({title:"当前为体验版",content:"请确保对方有体验权限",success:function(t){t.confirm?wx.shareAppMessageForFakeNative(e):("function"==typeof e.fail&&e.fail({}),"function"==typeof e.complete&&e.complete())}});wx.shareAppMessageForFakeNative(e)}catch(t){console.error("shareAppMessageForFakeNative exception",JSON.stringify(t)),"function"==typeof e.fail&&e.fail({}),"function"==typeof e.complete&&e.complete()}},debounce:function(e,t,i){var n=void 0,r=void 0,o=void 0,a=void 0,c=void 0,u=function u(){var s=+Date.now()-r;s<t&&s>0?n=setTimeout(u,t-s):(n=null,i||(o=e.apply(c,a),c=a=null))};return function(){c=this,a=arguments,r=+Date.now();var s=i&&!n;return n||(n=setTimeout(u,t)),s&&(o=e.apply(c,a),c=a=null),o}},saveMedia:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image";if(e){var i=function(){wx.hideLoading(),wx.showToast({icon:"success",title:"已保存到系统相册"})},n=function(){wx.hideLoading(),wx.showToast({title:"image"===t?"图片下载失败":"视频下载失败",image:"/assets/load_fail.png"})};wx.showLoading(),wx.downloadFile({url:e,success:function(e){"image"===t?wx.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:i,fail:n}):wx.saveVideoToPhotosAlbum({filePath:e.tempFilePath,success:i,fail:n})},fail:n})}}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("./utils/enum");require("./devkit.config.js");var r=require("./libs/mmuxwxappdevkit/index.js"),n=r.IdKey,t=r.Sys,o=r.EventCenter,a=r.Reporter,i=require("./libs/mmuxwxappdevkit/core/reliableLogger"),s=require("./core/network.js"),p=require("./utils/util.js"),l=require("./utils/enum.js").IDKeyDefine,u=require("./globalData.js"),d=require("./languagePackage");require("./core/api.js"),App({onLaunch:function(e){wx.getStorageSync("__JATION_STORAGE_CLEAR_MARK____")||(wx.clearStorageSync(),wx.setStorageSync("__JATION_STORAGE_CLEAR_MARK____",!0)),this.globalData.storageEnable="true",this.globalData.path=e.path,this.globalData.scene=e.scene,this.globalData.query=e.query,t._scene=e.scene,this.reportAppLaunch(),i.setup({app:this}),console.info("app version["+u.versionStr+"] type["+u.version+"]"),console.info("app onLaunch, ",e),"function"==typeof wx.onMemoryWarning&&wx.onMemoryWarning(function(e){console.warn("app onMemoryWarning, ",e),n.report(t.alarmId,l.MemoryWarning),a.report({logId:17466,logString:""+(e.level||0),withClientIPV6Field:!0})}),d.setup().getNetworkLanguagePkg();var r=wx.getSystemInfoSync(),o=r.model,s=r.system,p=r.statusBarHeight,g=r.windowWidth,c=r.windowHeight,f=void 0;f=/iphone\s{0,}x/i.test(o)?88:-1!==s.indexOf("Android")?68:64,this.globalData.liveHeaderHeight=f,this.globalData.liveStatusBarHeight=p,this.globalData.windowWidth=g,this.globalData.windowHeight=c},onShow:function(e){this.globalData.storageEnable="true";this.globalData.path=e.path,1038!=e.scene&&(this.globalData.scene=e.scene),this.globalData.query=e.query,e.query.session_id?t._sessionId=t.weappSessionId=e.query.session_id:t._sessionId=t.weappSessionId=""+(new Date).getTime(),e.query&&e.query.entry_scene&&(t._scene=Number(e.query.entry_scene)),t.referrerInfo=e.referrerInfo;var r=require("./libs/mmuxwxappdevkit/foundation/navigate/navigator.js");r.handleRouteApp(e),r.forceHideWeAppBack=!0,o.emit(o.Event.onReloadNavigationBar),o.emit(o.Event.onApplicationShow),this.reportAppOnShow(e)},onHide:function(){"ios"===t.platform&&console.upload(),this.globalData.storageEnable="false",n.realtimeReport(),a.reportNow&&a.reportNow()},onError:function(e){console.reportQuaility({t:(new Date).getTime(),quailityLogType:i.QUAILITY_LOG_TYPE.JS_ERROR,value:1}),n.report(t.alarmId,l.AppScriptError)},reportAppLaunch:function(){a.report({logId:16189,logString:p.genKVLogString({appId:t.appid(),sessionId:t._sessionId,scene:t._scene,actionLog:encodeURIComponent(JSON.stringify([{type:e.PageActionType.IndexAppOnLaunch,ext:{},ts:(new Date).getTime()}])),stayTime:1,pageName:"app",sessionKey:s.sessionLoginTime(),startTime:(new Date).getTime(),chunkIndex:0,debugMode:t.debugMode(),templateId:t.userVersion(),statBuffer:t.extStatBuffer(),weappSessionId:t.weappSessionId,redDot:0,pageStack:"app"})})},onPageNotFound:function(e){if(e.path){var r=e.path.indexOf("portal/index/index");if(0==r||1==r){var n=Object.keys(e.query).map(function(r){return r+"="+e.query[r]});p.redirectTo({url:"/pages/index/index?"+n.join("&")})}}},reportAppOnShow:function(e){if(e.referrerInfo&&e.referrerInfo.appId&&1038!=e.scene){var r=[e.referrerInfo.appId,encodeURIComponent(e.path||""),encodeURIComponent(JSON.stringify(e.query)||""),e.scene||0,encodeURIComponent(JSON.stringify(e.referrerInfo.extraData)||"")];a.report({logId:16301,logString:r.join(",")})}if(e.referrerInfo&&e.referrerInfo.appId&&1037==e.scene&&getCurrentPages().length<=1){var n=["pages/index/index","portal/index/index","open/function-introduction/function-introduction","open/order-comment/order-comment","portal/introduce/introduce","portal/share-success/share-success","portal/about/about","seller-online/portal/chat/chat"],t=!0,o=e.path||"pages/index/index";n.forEach(function(e){var r=o.indexOf(e);0!=r&&1!=r||(t=!1)}),t&&p.redirectTo({url:"/pages/forbid/forbid"})}},globalData:u,isMixProject:function(){return!1}}); 
 			}); 	require("app.js");
 		__wxRoute = 'libs/mmuxwxappdevkit/widget/action-sheet/action-sheet';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'libs/mmuxwxappdevkit/widget/action-sheet/action-sheet.js';	define("libs/mmuxwxappdevkit/widget/action-sheet/action-sheet.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../core/api.js"),n=require("../../core/sys.js");Component({options:{addGlobalClass:!0},properties:{bShow:{type:Boolean,value:!1,observer:function(t,n){var e=this;1==t?(this.maskAnimation.opacity(.5).step(),this.contentAnimation.translateY(0).step(),this.setData({showActionSheet:t},function(){setTimeout(function(){e.setData({actionSheetAnimation:e.contentAnimation.export(),actionSheetMaskAnimation:e.maskAnimation.export()})},50)})):(this.maskAnimation.opacity(0).step(),this.contentAnimation.translateY("100%").step(),this.setData({actionSheetAnimation:e.contentAnimation.export(),actionSheetMaskAnimation:e.maskAnimation.export()},function(){setTimeout(function(){e.setData({showActionSheet:t})},200)}))}},items:{type:Array,value:[{type:"phone",content:"电话客服",desc:""},{type:"contact",content:"在线客服",desc:""}]},title:{type:String,value:""}},data:{actionSheetAnimation:{},actionSheetMaskAnimation:{},showActionSheet:!1,phoneModel:n.phoneModel()},attached:function(){this.maskAnimation=t.createAnimation({duration:300,timingFunction:"ease-in-out"}),this.contentAnimation=t.createAnimation({duration:300,timingFunction:"ease-in-out"})},methods:{onClickMask:function(){this.triggerEvent("hide")},captureMove:function(){},onClickItem:function(n){var e=n.currentTarget.dataset,i=e.index,o=e.type,a=e.content,s=e.userinfo,c=e.extra;this.triggerEvent("beforeclick",{index:i,type:o,content:a,userinfo:s,extra:c}),"phone"==o?t.makePhoneCall({phoneNumber:s}):"custom"==o&&this.triggerEvent("oncustomclick",{index:i,type:o,content:a,userinfo:s}),this.triggerEvent("hide")}}}); 
 			}); 	require("libs/mmuxwxappdevkit/widget/action-sheet/action-sheet.js");
 		__wxRoute = 'libs/mmuxwxappdevkit/widget/error-page/error-page';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'libs/mmuxwxappdevkit/widget/error-page/error-page.js';	define("libs/mmuxwxappdevkit/widget/error-page/error-page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{warningText:{type:String,value:""},errorTitle:{type:String,value:""},errorSubTitle:{type:String,value:""}}}); 
 			}); 	require("libs/mmuxwxappdevkit/widget/error-page/error-page.js");
 		__wxRoute = 'libs/mmuxwxappdevkit/widget/exposure-block/exposure-block';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'libs/mmuxwxappdevkit/widget/exposure-block/exposure-block.js';	define("libs/mmuxwxappdevkit/widget/exposure-block/exposure-block.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../core/sys.js"),t=require("./model/Checker.js"),s="function"==typeof wx.createIntersectionObserver;Component({properties:{percentage:{type:Number,value:0},alwaysCheck:{type:Boolean,value:!1},info:Object},data:{isDismiss:!1,isDone:!1,exposureFlag:!1},methods:{onCheck:function(t){var s=this;if(s.data.isDismiss||!s.data.alwaysCheck&&s.data.isDone)return!1;wx.createSelectorQuery().in(s).select(".exposure-wrap__invisible").boundingClientRect(function(a){if(a){var o=Math.min(a.height,e.windowHeight),i=a.top+a.height-Math.max(a.bottom-e.windowHeight,0)-Math.max(a.top,0);if(i<=0)s.setData({exposureFlag:!1});else{var r=i/o;if(r>=s.data.percentage){console.log("exposed[true], percent: ",r,a);var n=s.data.exposureFlag;s.setData({isDone:!0,exposureFlag:!0}),s.onCallback({percentage:r,newExposure:!n,info:s.data.info||{}}),!s.data.alwaysCheck&&t&&t(s)}else console.log("exposed[not yet], ",a),s.setData({exposureFlag:!1})}}}).exec()},onCallback:function(e){this.triggerEvent("onexposeevent",e||{},{bubbles:!0,composed:!0})}},ready:function(){var e=this;if(s){var a=this.data.percentage;this.observer=this.createIntersectionObserver({thresholds:[a]}),this.observer.relativeToViewport().observe(".exposure-wrap__invisible",function(t){if(t&&t.intersectionRatio>a){console.log("exposed[true], percent: ",t.intersectionRatio,t);var s=e.data.exposureFlag;e.setData({isDone:!0,exposureFlag:!0}),e.onCallback({percentage:t.intersectionRatio,newExposure:!s,info:e.data.info||{}}),!e.data.alwaysCheck&&e.observer.disconnect()}else console.log("exposed[not yet], ",t),e.setData({exposureFlag:!1})})}else t.add(this)},detached:function(){s?this.observer&&this.observer.disconnect():(this.setData({isDismiss:!0}),t.remove(this))}}); 
 			}); 	require("libs/mmuxwxappdevkit/widget/exposure-block/exposure-block.js");
 		__wxRoute = 'libs/mmuxwxappdevkit/widget/image-view/image-view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'libs/mmuxwxappdevkit/widget/image-view/image-view.js';	define("libs/mmuxwxappdevkit/widget/image-view/image-view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},t=require("../../core/sys.js"),a=require("../../foundation/oss/idkey.js"),i=require("../../core/api.js"),o=require("../../utils/enum.js").IDKeyDefine,s=(require("../../foundation/loader/image-loader.js"),require("../../utils/util.js")),r=require("../../core/eventcenter.js");Component({donwloadTask:null,imageStartLoadTime:0,properties:{imgStyle:{type:String,value:""},src:{type:String,value:"",observer:function(e,t){this.donwloadTask&&(this.donwloadTask.abort(),this.donwloadTask=null),this.reloadImageView(this.fixImageSrc(e))}},mode:{type:String,value:"scaleToFill"},lazyLoad:{type:Boolean,value:!1},imgClass:{type:String,value:""},hidden:{type:Boolean,value:!1},placeholder:{type:String,value:""},size:{type:Number,value:162},showLoading:{type:Boolean,value:!1},loadingSize:{type:Number,value:30},loadingStyle:{type:String,value:"dark"},loadingViewStyle:{type:String,value:""},itemCode:{type:String,value:""},appid:{type:String,value:""}},firstTimeToLoad:!0,data:{loaded:!1},attached:function(){var e=this;if(r.register("onLoadCdnImageSuccess",this),this.key=Date.now(),!this.properties.src)return 0;this.reloadImageView(this.fixImageSrc(this.properties.src)),setTimeout(function(){e.firstTimeToLoad=!1},1e3)},detached:function(){r.unregister("onLoadCdnImageSuccess",this)},methods:{onPageShowTryToReloadFailedImage:function(){if(this.firstTimeToLoad)return 0;!this.data.loaded&&this.properties.src.includes("://")&&this.reloadImageView(this.fixImageSrc(this.properties.src))},reloadImageView:function(e){var t=this;this.imageStartLoadTime=Date.now(),t.lastImageSrc=e,t.setData({localFile:e,loaded:e==t.data.localFile&&t.data.loaded})},onImageLoadError:function(s){var r=this;s.detail.src=this.properties.src,s.detail.localFile=this.data.localFile,this.triggerEvent("error",s.detail,{bubbles:!0,composed:!0}),this.setData({loaded:!1});var l=Date.now()-this.imageStartLoadTime;console.error("load image error:",s," delta time:",l),a.report(t.alarmId,o.LoadImageGeneralError);var n=this.properties.src.replace("https://shp.qpic.cn/wechat_bs/0/","");n=n.replace("https://bs.qpic.cn/wechat_bs/0/","");var d={t:Date.now(),quailityLogType:3,statistics_type:2,value:1,delta_time:l,networkType:console.networkType,url:n};this.data.itemCode.length&&(d.item_code=this.data.itemCode,d.appid=this.data.appid),"function"==typeof console.reportQuaility&&console.reportQuaility(d),this.imageStartLoadTime=0;var c=void 0;((n=this.data.localFile||"").indexOf("https://shp.qpic.cn")>=0||n.indexOf("https://bs.qpic.cn")>=0)&&(console.info("try download url "+n),this.donwloadTask&&this.donwloadTask.abort(),this.donwloadTask=i.downloadFile({url:n,success:function(i){a.report(t.alarmId,o.LoadImageFallbackDownloadSuccess),console.info("download url success "+n);var s=i.filePath||i.tempFilePath;if(r.data.localFile===n&&s&&r.setData({localFile:s}),!s){var l=e({},c,i,{url:n});"function"==typeof console.reportQuaility&&console.reportQuaility(e({quailityLogType:3,statistics_type:4,networkType:console.networkType},l))}},fail:function(i){if(!(i.errMsg.indexOf("abort")>=0)){a.report(t.alarmId,o.LoadImageFallbackDownloadFail);var s=e({},c,i,{url:n});console.error("download url fail: ",s),"function"==typeof console.reportQuaility&&console.reportQuaility(e({quailityLogType:3,statistics_type:4,networkType:console.networkType},s))}},complete:function(){r.donwloadTask=null}}),this.donwloadTask.onHeadersReceived(function(e){c=e}))},onImageLoadFinish:function(e){e.detail.src=this.properties.src,e.detail.localFile=this.data.localFile,this.triggerEvent("load",e.detail,{bubbles:!0,composed:!0}),this.setData({loaded:!0});var i=Date.now()-this.imageStartLoadTime,s=this.properties.src.replace("https://shp.qpic.cn/wechat_bs/0/","");s=s.replace("https://bs.qpic.cn/wechat_bs/0/",""),"function"==typeof console.reportQuaility&&console.reportQuaility({t:Date.now(),quailityLogType:3,statistics_type:1,value:1,delta_time:i,networkType:console.networkType,url:s}),this.imageStartLoadTime=0,a.report(t.alarmId,o.ImageViewLoadImageFinished);var l=e.detail.localFile||"";if(l.includes("https://shp.qpic.cn")||l.includes("https://bs.qpic.cn")){var n=l.split("/");n.length>2&&0==isNaN(n[n.length-1])&&1==isNaN(n[n.length-2])&&r.emit("onLoadCdnImageSuccess",{width:e.detail.width,height:e.detail.height,url:n.slice(0,n.length-1).join("/"),size:this.data.size},{noLog:!0})}},fixImageSrc:function(e){if(!s.isLocalResource(e)){var t="";if(e.includes("//shp.qpic.cn")||e.includes("//bs.qpic.cn")){var a=e.split("/");if(a.length<2)return;var i=a[a.length-1];"0"!==a[a.length-2]||isNaN(i)?i.length>0&&isNaN(i)&&a.push(String(this.data.size)):a.splice(a.length-2,1),t=a.join("/")}else if("avatar"==this.properties.placeholder){var o=e.split("/"),r=o.pop();if(isNaN(r))o.push(r),o.push(132);else{var l=parseInt(r);l>0&&(l=Math.max(l,132)),o.push(l)}t=o.join("/")}else{if(!e.includes("//wx.qlogo.cn/"))return e;t=e+"/132"}return t}return e},onLoadCdnImageSuccess:function(e){!this.data.loaded&&(this.data.localFile+this.properties.src).indexOf(e.url)>=0&&(this.data.size<e.size||0===e.size)&&(console.info("replace url "+e.url+"/"+e.size),this.setData({localFile:e.url+"/"+e.size}))}}}); 
 			}); 	require("libs/mmuxwxappdevkit/widget/image-view/image-view.js");
 		__wxRoute = 'libs/mmuxwxappdevkit/widget/list-view/list-view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'libs/mmuxwxappdevkit/widget/list-view/list-view.js';	define("libs/mmuxwxappdevkit/widget/list-view/list-view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{addGlobalClass:!0},properties:{hasMore:{type:Boolean,value:!1},noResultTips:{type:String,value:"暂无结果"},noMoreTips:{type:String,value:"没有更多结果"},source:{type:Object,value:{pageColor:"#ededed",numberOfRowsInSection:function(e){return 0},numberOfSection:function(){return 0},heightForRowAtIndexPath:function(e,t){return 0},sectionInsetOfSection:function(e){return 0},sectionInsetColorOfSection:function(e){return"#ededed"},cellForRowAtIndexPath:function(e,t){return{}}}},seperatorStyle:{type:String,value:"ListViewSeperatorStyleNone"},height:{type:String,value:"0"},loadMoreTips:{type:String,value:"正在加载"}},data:{sections:[],cellCount:0,reloadingData:!1},attached:function(){var e=this,t={reloadData:function(){e.reloadData()},setDataSource:function(t){e.setData({source:t})}};this.triggerEvent("init",{listView:t})},methods:{onScrollToLower:function(){this.data.hasMore&&this.triggerEvent("loadmore")},reloadData:function(){var e=this;e.setData({reloadingData:!0});for(var t=0,o={},n=e.data.source.numberOfSection(),r=e.data.sections.length,a=0;a<n;a++){var s={},i=!1;a<e.data.sections.length&&(s=e.data.sections[a]);var c="",l=e.data.source.numberOfRowsInSection(a),u=e.data.source.sectionInsetOfSection(a),d=e.data.source.sectionInsetColorOfSection(a);t+=l,s.sectionInset==u&&s.sectionInsetColor==d||(i=!0),s.rows||(i=!0,s.rows=[]),s.rows.length!=l&&(i=!0);for(var f=0;f<l;f++){var g={},h={},S=e.data.source.cellForRowAtIndexPath(a,f);f<s.rows.length&&(h=s.rows[f]),g.cell=S,g.id=S.id,g.key=JSON.stringify(S),c+=g.id,g.key!=h.key&&(o["sections["+a+"].rows["+f+"]"]=g,i=!0)}for(var v=l;v<s.rows.length;v++)o["sections["+a+"].rows["+v+"].deleted"]=!0;i&&(o["sections["+a+"].key"]=c,o["sections["+a+"].sectionInset"]=u,o["sections["+a+"].sectionInsetColor"]=d)}for(var p=n;p<r;p++)o["sections["+p+"].deleted"]=!0;o.cellCount=t,e.setData(o,function(){e.setData({reloadingData:!1})})}}}); 
 			}); 	require("libs/mmuxwxappdevkit/widget/list-view/list-view.js");
 		__wxRoute = 'libs/mmuxwxappdevkit/widget/loading-view/loading-view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'libs/mmuxwxappdevkit/widget/loading-view/loading-view.js';	define("libs/mmuxwxappdevkit/widget/loading-view/loading-view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{size:{type:Number,value:30},frequency:{type:Number,value:12},sliceCount:{type:Number,value:12},loadingStyle:{type:String,value:"dark"}},data:{scale:.15,slices:[]},attached:function(){this.init()},methods:{init:function(){for(var t=Math.max(2,this.data.sliceCount),e=360/t,a=[],s=0;s<t;s++){var i=1-s/(t-1)*.9;a.push({style:"transform: translateY(-40px) rotate("+e*s+"deg); opacity: "+i+";"})}this.setData({slices:a})}}}); 
 			}); 	require("libs/mmuxwxappdevkit/widget/loading-view/loading-view.js");
 		__wxRoute = 'libs/mmuxwxappdevkit/widget/modal/modal';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'libs/mmuxwxappdevkit/widget/modal/modal.js';	define("libs/mmuxwxappdevkit/widget/modal/modal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../core/sys.js"),n=(require("../../core/console.js")("modal"),require("../../utils/util.js"));Component({properties:{userinfo:{type:String,value:"default-modal"},target:{type:String,value:""},appId:{type:String,value:""},path:{type:String,value:""},version:{type:String,value:""},showModal:{type:Boolean,value:!1,observer:function(t,n){var e=this;1==t?(e.maskAnimation.opacity(.5).step(),e.contentAnimation.opacity(1).step(),e.setData({modalMaskAnimation:e.maskAnimation.export(),modalAnimation:e.contentAnimation.export()})):(e.maskAnimation.opacity(0).step(),e.contentAnimation.opacity(0).step(),e.setData({modalMaskAnimation:e.maskAnimation.export(),modalAnimation:e.contentAnimation.export()}))}},title:{type:String,value:""},content:{type:String,value:""},showCancel:{type:Boolean,value:!0},cancelText:{type:String,value:"取消"},cancelColor:{type:String,value:"#000000"},confirmText:{type:String,value:"确定"},confirmColor:{type:String,value:"#3CC51F"},openType:{type:String,value:""}},data:{_showModal:!1},attached:function(){this.maskAnimation=wx.createAnimation({duration:300,timingFunction:"ease-in-out"}),this.contentAnimation=wx.createAnimation({duration:300,timingFunction:"ease-in-out"}),this.isSdkSupportOpenSettingBtn=-1!=n.compareSDKVersion(t.SDKVersion,"2.0.7")},methods:{onClickConfirm:function(){this.isSdkSupportOpenSettingBtn||"miniProgram"==this.data.target||"openSetting"!=this.data.openType||wx.openSetting(),this.triggerEvent("confirm",{openType:this.data.openType,userinfo:this.data.userinfo})},onClickCancel:function(){this.triggerEvent("cancel",{userinfo:this.data.userinfo})}}}); 
 			}); 	require("libs/mmuxwxappdevkit/widget/modal/modal.js");
 		__wxRoute = 'libs/mmuxwxappdevkit/widget/navigation-bar/navigation-bar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'libs/mmuxwxappdevkit/widget/navigation-bar/navigation-bar.js';	define("libs/mmuxwxappdevkit/widget/navigation-bar/navigation-bar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../core/sys.js"),t=require("../../foundation/navigate/navigator.js"),a=require("../../utils/util.js"),i=require("../../core/eventcenter.js"),o=require("../../core/api.js");Component({options:{multipleSlots:!0},properties:{title:{type:String,value:"",observer:function(e,t){}},backSource:{type:String,value:""},customTop:{type:Number,value:0},backgroundColor:{type:String,value:"#FFFFFF",observer:function(e,t){}},showLoading:{type:Boolean,value:!1},placeholderColor:{type:String,value:""},titleImg:{type:String,value:"none"},hideTitleImg:{type:Boolean,value:!0},homeBack:{type:Boolean,value:!1},homePath:{type:String,value:""},type:{type:String,value:"webview"},hidePlaceholder:{type:Boolean,value:!1},forceShowBackButton:{type:Boolean,value:!1},rightTopBtn:{type:Boolean,value:!1},showRightTopReddot:{type:Boolean,value:!1},titleRightIcon:{type:String,value:""},registerNavigateBack:{type:Boolean,value:!1},subTitle:{type:String,value:""},showContact:{type:Boolean,value:!1},hasUnreadMsg:{type:Boolean,value:!1},hasNativeComps:{type:Boolean,value:!1},inputValue:{type:String,Value:""},inputPlaceHolder:{type:String,value:""},inputPlaceHolderStyle:{type:String,value:""},titleCustom:{type:Boolean,value:!1},rightTopBtnCustom:{type:Boolean,value:!1},leftTopBtnCustom:{type:Boolean,value:!1}},data:{preventedNavigateBack:!1,phoneModel:e.phoneModel(),statusBarHeight:e.statusBarHeight||20,navigationBarHeight:e.navigationBarHeight()||64,hideBackButton:!0,hideWeAppBack:!0,supportCustomNavigation:"ios"==e.platform&&e.wechatVersion()>parseInt("16060000",16)||"android"==e.platform&&e.wechatVersion()>parseInt("26060000",16)||"devtools"==e.platform,platform:e.platform,currentPagePath:""},attached:function(){console.log("navigation-bar : "+JSON.stringify(this.data)),console.log(e.platform+", "+e.wechatVersion()+", "+parseInt("26060000",16));var t=getCurrentPages();t&&t.length,this.reloadData({clearState:!0}),i.register("onReloadNavigationBar",this,"reloadData");var a=getCurrentPages(),o=a[a.length-1].route;"open/order-comment/order-comment"===o?(i.register("doNavigateBack",this),i.register("preventNavigateBack",this,"preventNavigateBack")):this.data.registerNavigateBack&&(i.register("doNavigateBack",this),i.register("preventNavigateBack",this,"preventNavigateBack")),this.setData({hideBackButton:!this.properties.forceShowBackButton&&1==getCurrentPages().length,phoneModel:e.phoneModel(),backAsExit:!1,currentPagePath:o})},moved:function(){console.log("[navigationbar]moved")},detached:function(){console.log("[navigationbar]detached"),i.unregister("onReloadNavigationBar",this),i.unregister("preventNavigateBack",this,"preventNavigateBack"),i.unregister("doNavigateBack",this),clearTimeout(this.rightTopBtnTimer)},methods:{reloadData:function(e){var i=t.fromAppid()||"",o=0==i.length?t.fromBackAppid||"":i;console.log("[navigationbar]reload navigation-bar: "+i+", "+t.fromBackAppid+", "+t.forceHideWeAppBack),this.navigateToAppid=0==i.length&&0!=o.length?o:"",this.setData({hideWeAppBack:0==o.length||t.forceHideWeAppBack,weAppName:t.fromAppName||"",navigateToAppid:this.navigateToAppid,navigateToPath:a.appendQueryObject(t.originPath||"",t.originOptions)}),e&&e.clearState&&(t.forceHideWeAppBack=!1)},onClickHome:function(){var e=getCurrentPages().map(function(e){return e.route}),t=e.indexOf(this.data.homePath||"pages/index/index");-1===t?o.navigateTo({url:this.data.homePath?"/"+this.data.homePath:"/pages/index/index"}):o.navigateBack({delta:e.length-t-1})},onClickNavigateBack:function(e){return this.data.preventedNavigateBack?(i.emit("navigateBackPrevented"),0):this.data.backAsExit&&"h5"!==this.data.backSource&&"app"!==this.data.backSource?0:void this.doNavigateBack()},preventNavigateBack:function(e){this.setData({preventedNavigateBack:e})},doNavigateBack:function(){1==getCurrentPages().length?"h5"===this.data.backSource?o.navigateBackH5():o.navigateBackMiniProgram({success:function(){},fail:function(e){"function"==typeof o.navigateBackNative&&o.navigateBackNative({success:function(){},fail:function(){}}),console.error(e)}}):o.navigateBack()},onClickWeAppBack:function(){console.log("onClickWeAppBack: ",this.navigateToAppid),0==this.navigateToAppid.length?o.navigateBackMiniProgram():(t.fromBackAppid=void 0,t.originPath=void 0,t.originOptions=void 0)},rightTopBtnTimer:0,onClickRightTopBtn:function(){this.triggerEvent("righttopbtntap")},onTouchRightTopBtnStart:function(){var e=this;this.rightTopBtnTimer=setTimeout(function(){e.triggerEvent("rightbtnlongpress")},1500)},onTouchRightTopBtnEnd:function(){clearTimeout(this.rightTopBtnTimer)},onClickRightText:function(){i.emit("onClickRightText")},bindInput:function(e){var t=e.detail.value;this.triggerEvent("searchInput",{value:t})},bindConfirm:function(e){this.triggerEvent("searchStart")}}}); 
 			}); 	require("libs/mmuxwxappdevkit/widget/navigation-bar/navigation-bar.js");
 		__wxRoute = 'libs/mmuxwxappdevkit/widget/navigator/navigator';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'libs/mmuxwxappdevkit/widget/navigator/navigator.js';	define("libs/mmuxwxappdevkit/widget/navigator/navigator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../core/sys.js"),t=require("../../core/console.js")("navigator"),e=require("../../utils/util.js");Component({options:{addGlobalClass:!0},properties:{display:{type:Boolean,value:!0},target:{type:String,value:"miniProgram"},innerStyle:{type:String,value:""},openType:{type:String,value:"navigate"},url:{type:String,value:""},appId:{type:String,value:""},path:{type:String,value:"",observer:function(){this.reloadData()}},extraData:{type:Object,value:{},observer:function(){this.reloadData()}},showWeappBack:{type:Boolean,value:!0,observer:function(){this.reloadData()}},version:{type:String,value:"release"},hoverStopPropagation:{type:Boolean,value:!1},hoverStartTime:{type:Number,value:50},hoverStayTime:{type:Number,value:600},hidden:{type:Boolean,value:!1},extParams:{type:Object,value:{},observer:function(){this.reloadData()}}},externalClasses:["inner-class","hover-class"],data:{_path:"",_extraData:"",isCircleWeAppJump:!1},ready:function(){this.fromAppid=wx.getStorageSync("fromAppid"),this.isSdkSupport=-1!=e.compareSDKVersion(a.SDKVersion,"2.0.7"),this.reloadData()},methods:{reloadData:function(){if("miniProgram"==this.data.target)if(t.log("reloadData"),"exit"!=this.data.openType){this.data.path&&!this.data.path.startsWith("/")&&(this.data.path="/"+this.data.path);var i=Object.assign({},this.data.extParams);a.noNavigatorParams()||(i.fromAppid=a.appid(),this.data.showWeappBack&&(i.fromWeAppName=a.appName()));var r=this.data.path.length>0?e.appendQueryObject(this.data.path,i):this.data.path;if(this.fromAppid&&this.fromAppid==this.data.appId){var p=e.getCurrentPage();this.setData({isCircleWeAppJump:!0,_extraData:Object.assign({},this.data.extraData,{path:r,originPath:p.route,originOptions:p.options,originWeAppName:a.appName()})})}else this.setData({isCircleWeAppJump:!1,_path:r,_extraData:this.data.extraData})}else this.setData({isCircleWeAppJump:!1,_extraData:this.data.extraData})},onClick:function(a){this.data.isCircleWeAppJump?wx.navigateBackMiniProgram({extraData:this.data._extraData}):this.isSdkSupport||"miniProgram"!=this.data.target||"navigate"!=this.data.openType||wx.navigateToMiniProgram({appId:this.data.appId,path:this.data._path,extraData:this.data._extraData,envVersion:this.data.version})}}}); 
 			}); 	require("libs/mmuxwxappdevkit/widget/navigator/navigator.js");
 		__wxRoute = 'widget/auth-detect/auth-detect';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/auth-detect/auth-detect.js';	define("widget/auth-detect/auth-detect.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u.push(t),o||(o=!0,i({success:function(t){u.forEach(function(e){e&&e.success&&e.success(t)})},fail:function(){u.forEach(function(t){t&&t.fail&&t.fail()})},complete:function(){u.forEach(function(t){t&&t.complete&&t.complete()}),u=[],o=!1}}).loadNext())}var e=function(t){return t&&t.__esModule?t:{default:t}}(require("../../utils/toast.js")),i=require("../../models/getPermissionList.js"),s=require("../../libs/mmuxwxappdevkit/index.js"),a=s.EventCenter,n=s.Network,o=!1,u=[];Component({properties:{pageName:{type:String,value:""},appid:String},data:{active:!1,currentPage:null,permissionList:null,showAuth:!1,showAnimate:!1,authItem:null},attached:function(){var e=this;this.data.currentPage=getCurrentPages().slice().pop(),a.register(a.Event.onApplicationShow,this),t({success:function(t){e.data.permissionList=t.item_list||[]}})},detached:function(){this.data.currentPage=null,a.unregister(a.Event.onApplicationShow,this)},methods:{onClick:function(){this.data.active=!0},onApplicationShow:function(){var e=this,i=getCurrentPages().slice().pop();this.data.active&&this.data.permissionList&&i===this.data.currentPage&&(this.triggerEvent("showLoading",{},{bubbles:!0,composed:!0}),t({success:function(t){var i=e.data.permissionList.filter(function(t){return"1"===t.auth_status&&t.appid===e.data.appid}),s=(t.item_list||[]).filter(function(t){return"1"===t.auth_status&&t.appid===e.data.appid});i.length<=0&&s.length>0&&e.setData({showAuth:!0,authItem:s[0]},function(){e.setData({showAnimate:!0})}),e.data.permissionList=t.item_list||[]},complete:function(){e.triggerEvent("hideLoading",{},{bubbles:!0,composed:!0})}})),this.data.active=!1},captureOutsideTouch:function(){},setUserAuth:function(t){var i=this,s=!!t.currentTarget.dataset.isOpen;n.request({cgi:n.cgiSet.syncAppHistory,params:{appid_list:[this.data.appid],is_open:s},success:function(){s&&e.default.showSuccessTips("已授权"),i.setData({showAnimate:!1}),setTimeout(function(){i.setData({showAuth:!1},250)})},fail:function(){e.default.showErrTips("操作失败")}})}}}); 
 			}); 	require("widget/auth-detect/auth-detect.js");
 		__wxRoute = 'widget/base-cell/base-cell';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/base-cell/base-cell.js';	define("widget/base-cell/base-cell.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../core/sys.js"),i=375;Component({properties:{pageName:{type:String,value:""},actions:Array,mode:String,item:Object,ignore:Boolean},data:{CELL_ORIGIN_WIDTH:i,ACTION_ORIGIN_WIDTH:80,actionWidth:80,backgroundColor:"#ffffff",scrollLeft:0,beginScrollLeft:0,touchBeginX:0,destScrollLeft:0,forbidScroll:!1,platform:t.platform},attached:function(){i=t.windowWidth,this.setData({CELL_ORIGIN_WIDTH:t.windowWidth}),"delete"==this.data.mode&&this.setData({actions:[{title:"删除"}]})},methods:{onClick:function(){this.flyingTo(0)},onClickAction:function(t){this.triggerEvent("clickaction",{item:this.data.item,action:t.currentTarget.dataset.action},{bubbles:!0,composed:!0}),this.flyingTo(0)},onLongPressAction:function(t){t.currentTarget.dataset;this.triggerEvent("longpressaction",{item:this.data.item,actions:this.data.actions},{bubbles:!0,composed:!0})},onScroll:function(t){this.data.scrollLeft=t.detail.scrollLeft;var i=this.data.scrollLeft<40?"#ffffff":"#e75844";this.data.backgroundColor!=i&&this.setData({backgroundColor:i})},onTouchStart:function(t){var i=t.changedTouches[0];this.data.touchBeginX=i.pageX,this.data.beginScrollLeft=this.data.scrollLeft},onTouchEnd:function(t){var i=t.changedTouches[0],o=80*this.data.actions.length,a=o/3,e=this.data.scrollLeft<=0,s=this.data.scrollLeft>=o;e||s||(i.pageX>this.data.touchBeginX?this.data.beginScrollLeft-this.data.scrollLeft>a?this.flyingTo(0):this.flyingTo(o):this.data.scrollLeft-this.data.beginScrollLeft>a?this.flyingTo(o):this.flyingTo(0))},flyingTo:function(t){var i=this;this.data.forbidScroll||(this.setData({destScrollLeft:t,forbidScroll:!0}),setTimeout(function(){i.setData({forbidScroll:!1})},250))}}}); 
 			}); 	require("widget/base-cell/base-cell.js");
 		__wxRoute = 'widget/brand-header/brand-header';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/brand-header/brand-header.js';	define("widget/brand-header/brand-header.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../utils/util.js");Component({properties:{pageName:{type:String,value:""},icon:{type:String,observer:function(t){this.setData({iconUrl:e.handleImageUrl(t)})}},name:String,extra:String,disableNavigate:Boolean},data:{iconUrl:""},methods:{}}); 
 			}); 	require("widget/brand-header/brand-header.js");
 		__wxRoute = 'widget/btn-groups/btn-groups';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/btn-groups/btn-groups.js';	define("widget/btn-groups/btn-groups.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{pageName:{type:String,value:""},ref:{type:String,value:""},btnList:{type:Array,value:[]},btnWrapperStyle:{type:String,value:""},btnStyle:{type:String,value:""},btnActiveStyle:{type:String,value:""},initCurIdx:{type:Number,value:0,observer:function(t){var e=parseInt(t,10);isNaN(e)||this.setData({curIdx:e})}}},data:{curIdx:0},methods:{onClickTab:function(t){var e=t.target.dataset,a=e.clickidx,i=e.tabid;this.data.curIdx!==a&&(this.setData({curIdx:a}),this.triggerEvent("clickTab",{clickidx:a,tabid:i}))}},attached:function(){},detached:function(){}}); 
 			}); 	require("widget/btn-groups/btn-groups.js");
 		__wxRoute = 'widget/camera-btn/camera-btn';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/camera-btn/camera-btn.js';	define("widget/camera-btn/camera-btn.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{pageName:{type:String,value:""},size:Number},data:{stop:!1,step:0},attached:function(){},detached:function(){this.data.stop=!0},methods:{init:function(){},startTimer:function(){var t=this,e=this.getContext();this.draw(e);!function n(){setTimeout(function(){t.data.stop||(t.data.step+=.005,t.draw(e),n())},50)}()},getContext:function(){return wx.createCanvasContext("camera",this)},draw:function(t){this.drawBorder(t),this.drawCircle(t),t.draw()},drawBorder:function(t){var e=this.data.size/72;t.lineWidth=2,t.strokeStyle="#e85e58",t.beginPath(),this.moveTo(t,8,58,e),this.lineTo(t,8,23,e),this.lineTo(t,22,23,e),this.lineTo(t,28,14,e),this.lineTo(t,44,14,e),this.lineTo(t,50,23,e),this.lineTo(t,64,23,e),this.lineTo(t,64,58,e),t.closePath(),t.stroke()},drawCircle:function(t){var e=this,n=this.data.size/72,i=[0,.125,.25,.375,.5,.625,.75,.875,1].map(function(t){return 2*Math.PI*(t-.25-.0625+e.data.step)}),a=["#e85e58","#636be8","#4182d0","#4dadf8","#59c37e","#a0d040","#f6c443","#eea050","#e85e58"];t.lineWidth=2,i.forEach(function(o,r){r<i.length-1&&(t.beginPath(),e.arc(t,36,38,10,o,i[r+1],n),t.strokeStyle=a[r],t.stroke())})},moveTo:function(t,e,n,i){t.moveTo(parseInt(e*i),parseInt(n*i))},lineTo:function(t,e,n,i){t.lineTo(parseInt(e*i),parseInt(n*i))},arc:function(t,e,n,i,a,o,r){t.arc(parseInt(e*r),parseInt(n*r),parseInt(i*r),a,o)},onError:function(t){console.error("camera canvas onerror, ",t)}}}); 
 			}); 	require("widget/camera-btn/camera-btn.js");
 		__wxRoute = 'widget/dialog/dialog';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/dialog/dialog.js';	define("widget/dialog/dialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{multipleSlots:!0},properties:{pageName:{type:String,value:""},title:String,desc:String,userInfo:Object},data:{},methods:{onClickDialog:function(){},onClickOutside:function(){this.triggerEvent("dismiss",{userInfo:this.data.userInfo})}}}); 
 			}); 	require("widget/dialog/dialog.js");
 		__wxRoute = 'widget/dislike-dialog/dislike-dialog';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/dislike-dialog/dislike-dialog.js';	define("widget/dislike-dialog/dislike-dialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{pageName:{type:String,value:""},bshow:{type:Boolean,value:!1,observer:function(t,e){this.setData({showDislikeDialogt:t})}},layout:{type:Object,value:{type:1,style:""}}},data:{showDislikeDialogt:!1},methods:{onClickMask:function(t){this.triggerEvent("hide")},onClickDislike:function(t){t.target.dataset.type&&(this.triggerEvent("clickdislike",{detail:"不感兴趣"}),this.triggerEvent("hide"))}}}); 
 			}); 	require("widget/dislike-dialog/dislike-dialog.js");
 		__wxRoute = 'widget/every-buy-category/every-buy-category';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/every-buy-category/every-buy-category.js';	define("widget/every-buy-category/every-buy-category.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../utils/util");Component({properties:{pageName:{type:String,value:""},categoryRecommendList:{type:Array,value:[]},categoryInfo:{type:Object,value:{}}},data:{},attached:function(){},detached:function(){},methods:{toEveryBuyList:function(){this.triggerEvent("clickBuyCategoryMore",{},{bubbles:!0,composed:!0}),e.navigateTo({url:["/portal/every-buy-list/every-buy-list?","aheadList="+encodeURIComponent(JSON.stringify(this.data.categoryRecommendList))+"&","categoryInfo="+encodeURIComponent(JSON.stringify(this.data.categoryInfo))].join("")})}}}); 
 			}); 	require("widget/every-buy-category/every-buy-category.js");
 		__wxRoute = 'widget/every-buy-item/every-buy-item';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/every-buy-item/every-buy-item.js';	define("widget/every-buy-item/every-buy-item.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},t=function(e){return e&&e.__esModule?e:{default:e}}(require("../../utils/toast")),i=require("../../utils/enum"),o=require("../../core/api.js"),r=require("../../core/sys.js"),a=require("../../core/network.js"),n=require("../../core/eventcenter"),s=require("../../models/addOpenProduct.js"),d=require("../../models/deleteOpenProduct.js"),c=require("../../utils/util.js"),p=require("../../utils/enum.js").IDKeyDefine,u=require("../../libs/mmuxwxappdevkit/index.js").IdKey,m=require("../../libs/mmuxwxappdevkit/utils/exposeReporter.js"),h=require("../../utils/reportSearchProduct");Component({options:{multipleSlots:!0},properties:{pageName:{type:String,value:""},item:{type:Object},chosenTagsMap:{type:Object},showTag:{type:Boolean,value:!1},index:Number,fromScene:Number,ref:String,fromSearch:{type:Boolean,value:!1},wxShoppingListScene:Number,allRecommendReasons:Array,searchid:{type:String,value:"",observer:function(e){h.setSearchid(e)}},sourceType:{type:String,value:"",observer:function(e){h.setSourceType(e)}}},data:{barHeight:r.navigationBarHeight(),theTag:null,panelShow:!1,showActionSheet:!1,actionSheetTitle:"",actionSheetItems:[],ignoreDialogChoices:[],showIgnoreDialog:!1,ignoreClickPosition:null},attached:function(){n.register("hideEveryBuyItemPanel",this,"onOtherShowPanel")},detached:function(){m.reportAll(),n.unregister("hideEveryBuyItemPanel",this,"onOtherShowPanel")},ready:function(){if("every-buy-list"===this.data.ref){var e=this.data.item.product;this.exposeObserver=m.init({self:this,selector:".item-wrap",data:{type:i.PageActionType.EveryBuyItemCard,ext:{appid:e.mch_appid||e.src_wxapp_id,item_code:e.item_code,pos:this.data.index,report_buff:this.data.item.report_buff}}})}var t=this.data.item,o=this.data.chosenTagsMap||{},r=null;t.tag_list=t.tag_list||[],t.tag_list.reverse().forEach(function(e){o[e]&&(r=o[e])}),!r&&t.tag_words&&(r={tag_word:t.tag_words}),this.setData({theTag:r})},methods:{hideEveryItem:function(){n.emit("hideEveryBuyItemPanel",{product:this.data.item.product})},showPanel:function(){if(this.data.fromSearch)this.toProductDetail();else{var e=this.data.item.product,t={};if(e.app_info){var i=e,o=t={appuin:i.app_info.appuin,itemCode:i.app_info.product_id,isH5:!i.jumpUrl&&i.src_h5_path?1:0,index:this.data.index,report_buff:i.report_buff,docID:i.docID,source:i.source};this.triggerEvent("onShowPanel",o,{bubbles:!0,composed:!0})}if("every-buy-list"===this.data.ref){var r=this.data.item.product;this.triggerEvent("onShowPanel",{appid:r.mch_appid||r.src_wxapp_id,item_code:r.item_code,pos:this.data.index,report_buff:this.data.item.report_buff},{bubbles:!0,composed:!0})}n.emit("hideEveryBuyItemPanel",{product:this.data.item.product});var a={product_item:e,appid:e.src_wxapp_id||e.mch_appid,nickname:e.src_wxapp_name||e.mch_name},s=["/portal/share-product-detail/share-product-detail?page_ref=timeline&sourceId="+this.data.ref,"appid="+(e.src_wxapp_id||e.mch_appid),"product_id="+encodeURIComponent(e.item_code||""),"source="+(e.source||""),"recommend="+encodeURIComponent(JSON.stringify(a))+"&","curProductIndex="+this.data.index,"searchProductLog="+encodeURIComponent(JSON.stringify(t))].join("&");c.navigateTo({url:s,complete:function(e){var t=e.appid,i=e.product_id,o=e.source;console.info("navigateTo some params: appid="+t+"&product_id="+i+"&source="+o)}})}},hidePanel:function(){this.setData({panelShow:!1}),this.panelObserver&&this.panelObserver.disconnect()},onOtherShowPanel:function(e){var t=this.data.item.product;e.product.mch_appid===t.mch_appid&&e.product.item_code===t.item_code||this.hidePanel()},isH5Product:function(e){return c.isH5Product(e)},showRecommendActionSheet:function(){return},toRecommendNew:function(){var e=this.data.item.product,t={appid:e.mch_appid||e.src_wxapp_id,product_item:{biz_uin:e.biz_uin,item_code:e.item_code,source:e.source}};if(e.app_info){var i=e,o={appuin:i.app_info.appuin,itemCode:i.app_info.product_id,isH5:!i.jumpUrl&&i.src_h5_path?1:0,index:this.data.index,report_buff:i.report_buff};this.triggerEvent("onClickRecommendNew",o,{bubbles:!0,composed:!0})}if("every-buy-list"===this.data.ref){var r=this.data.item.product;this.triggerEvent("onClickRecommendNew",{appid:r.mch_appid||r.src_wxapp_id,item_code:r.item_code,pos:this.data.index},{bubbles:!0,composed:!0})}c.navigateTo({url:"/open/order-comment/order-comment?product="+encodeURIComponent(JSON.stringify(t))+"&clickId="+this.data.clickId+"&sourceId=1",complete:function(e){var t=e.product;console.info("navigateTo some params: product="+t)}})},toProductDetail:function(){var e=this.data.item.product;if(e.app_info){var t={appuin:e.app_info.appuin,itemCode:e.app_info.product_id,isH5:!e.jumpUrl&&e.src_h5_path?1:0,index:this.data.index,report_buff:e.report_buff};this.triggerEvent("visit3rdgoodsdetail",t,{bubbles:!0,composed:!0})}if("every-buy-list"===this.data.ref){var i=this.data.item.product;this.triggerEvent("visit3rdgoodsdetail",{appid:i.mch_appid||i.src_wxapp_id,item_code:i.item_code,pos:this.data.index},{bubbles:!0,composed:!0})}if(this.isH5Product(e))c.toH5(e);else{var o=10002;"search"===this.data.ref?o=this.data.wxShoppingListScene:"every-buy-list"===this.data.ref&&(o=10005),c.navigateToMiniProgram({appId:e.src_wxapp_id||e.mch_appid,path:e.src_wxapp_path||"",extraData:{wxShoppingListScene:o},envVersion:"release"})}},hideActionSheet:function(){this.setData({showActionSheet:!1})},clickActionSheet:function(e){"查看详情"===e.detail.content?this.toProductDetail():"收藏"===e.detail.content?this.addToFavorite():"取消收藏"===e.detail.content&&this.removeFromFavorite()},addToFavorite:function(){var e=this.data.item,i=e.product,a=this;if(i.app_info){var n={appuin:i.app_info.appuin,itemCode:i.app_info.product_id,isH5:!i.jumpUrl&&i.src_h5_path?1:0,index:this.data.index,report_buff:i.report_buff};this.triggerEvent("addOpenProduct",n,{bubbles:!0,composed:!0})}if("every-buy-list"===this.data.ref){var d=this.data.item.product;this.triggerEvent("addOpenProduct",{appid:d.mch_appid||d.src_wxapp_id,item_code:d.item_code,pos:this.data.index},{bubbles:!0,composed:!0})}var c=this.data.fromScene,m=void 0===c?2:c;s({appid:i.mch_appid||i.src_wxapp_id,item_code:i.item_code,source:i.source,from_scene:m,success:function(){o.showToast({title:"已收藏",icon:"success",duration:1500}),e.is_want_buy=!0,a.setData({item:e}),a.triggerEvent("itemchange",e)},fail:function(){t.default.showErrTips("收藏失败"),u.report(r.alarmId,p.RecommentListAddGoodsError)}})},removeFromFavorite:function(){var e=this.data.item,i=e.product,r=this;if(i.app_info){var a={appuin:i.app_info.appuin,itemCode:i.app_info.product_id,isH5:!i.jumpUrl&&i.src_h5_path?1:0,index:this.data.index,report_buff:i.report_buff};this.triggerEvent("removeOpenProduct",a,{bubbles:!0,composed:!0})}if("every-buy-list"===this.data.ref){var n=this.data.item.product;this.triggerEvent("removeOpenProduct",{appid:n.mch_appid||n.src_wxapp_id,item_code:n.item_code,pos:this.data.index},{bubbles:!0,composed:!0})}d({item_code:i.item_code,source:i.source,appid:i.mch_appid||i.src_wxapp_id,success:function(){o.showToast({title:"已取消",icon:"success",duration:1500}),e.is_want_buy=!1,r.setData({item:e}),r.triggerEvent("itemchange",e)},fail:function(){t.default.showErrTips("取消失败")}})},toRecommendDetail:function(e){var t=this.data.item.product;c.navigateTo({url:["/portal/recommend-detail/recommend-detail?appid="+(t.mch_appid||"")+"&","product_id="+(encodeURIComponent(t.item_code)||"")+"&","source="+(t.source||"")+"&"].join(""),complete:function(e){var t=e.appid,i=e.product_id,o=e.source;console.info("navigateTo some params: appid="+t+"&product_id="+i+"&source="+o)}})},getReason:function(){var e=this;a.request({cgi:a.cgiSet.getReason,params:{type:7},success:function(t){e.queryClickPosition(t.reason)},fail:function(e){t.default.showErrTips(e.errmsg||"请重试"),console.error("get_reason error",e)}})},queryClickPosition:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t=[{name:"选择不喜欢的原因",id:-1}].concat(t),o.createSelectorQuery().in(this).select("#ignore").boundingClientRect(function(i){i&&e.setData({showIgnoreDialog:!0,ignoreDialogChoices:t,ignoreClickPosition:{clientX:i.left,clientY:i.top}})}).exec()},onClickIgnore:function(){var e=this.data.allRecommendReasons||[];this.queryClickPosition(e.length?e:getApp().globalData.allRecommendReasons)},onClickChooseReason:function(t){var i=this.data.item.product,o={biz_uin:i.biz_uin,item_code:i.item_code,source:i.source};this.setUninterested(e({reason_name:t.detail.reason_name,reason_id:t.detail.reason_id},o))},setUninterested:function(i){var r=this;o.showLoading(),a.request({cgi:a.cgiSet.uninterested,params:e({scene:5,feedback_type:7},i),success:function(e){t.default.showSuccessTips("已删除"),r.setData({showIgnoreDialog:!1},function(){r.triggerEvent("deleteEveryBuyItem",{index:r.data.index,appid:r.data.item.product.mch_appid||r.data.item.product.src_wxapp_id,item_code:i.item_code,reason_id:i.reason_id,reason_name:i.reason_name},{bubbles:!0,composed:!0})})},fail:function(e){t.default.showErrTips("删除失败"),console.error("uninterested error",e)},complete:function(){o.hideLoading()}})}}}); 
 			}); 	require("widget/every-buy-item/every-buy-item.js");
 		__wxRoute = 'widget/gesture/gesture';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/gesture/gesture.js';	define("widget/gesture/gesture.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["inner-class"],properties:{pageName:{type:String,value:""},block:Boolean},data:{},methods:{onStart:function(t){t.changedTouches&&t.changedTouches[0]&&(this._touchTs=+new Date,this._touchPt={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY})},onEnd:function(t){var e=t.changedTouches&&t.changedTouches[0];if(e){var h=+new Date;h-this._touchTs<=500&&e.clientY-this._touchPt.y>=50&&Math.abs(e.clientY-this._touchPt.y)>=1.5*Math.abs(e.clientX-this._touchPt.x)?this.triggerEvent("pandown"):h-this._touchTs<=100&&Math.abs(e.clientX-this._touchPt.x)<=5&&Math.abs(e.clientY-this._touchPt.y)<=5&&this.triggerEvent("click")}},onMove:function(){}}}); 
 			}); 	require("widget/gesture/gesture.js");
 		__wxRoute = 'widget/goods-item/goods-item';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/goods-item/goods-item.js';	define("widget/goods-item/goods-item.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../utils/enum"),t=require("../../utils/util.js"),i=require("../../libs/mmuxwxappdevkit/utils/exposeReporter.js");Component({options:{multipleSlots:!0},properties:{pageName:{type:String,value:""},itemInfo:Object,skuList:Array,scene:String,showContact:Boolean,contactOnline:Boolean,contactInfo:Object,titleData:Object,clickable:{type:Boolean,value:!0}},data:{},attached:function(){},ready:function(){var t=this.data.itemInfo;this.exposeObserver=i.init({self:this,selector:".goods-item-wrap",data:{type:e.PageActionType.FavoriteListItemExpose,ext:{appid:t.mch_appid,item_code:t.item_code}}})},detached:function(){this.exposeObserver&&this.exposeObserver.disconnect()},methods:{recommendThis:function(){this.triggerEvent("recommend",this.data.itemInfo,{bubbles:!0,composed:!0})},onClick:function(e){this.triggerEvent("visit3rdgoodsdetail",e.currentTarget.dataset,{bubbles:!0,composed:!0}),this.triggerEvent("onclick")},showProductDetailActionSheet:function(){var e=this.data.itemInfo;this.triggerEvent("toproductdetail",{appId:e.src_wxapp_id,path:e.src_wxapp_path,item_code:this.data.itemInfo.item_code,extraData:{wxShoppingListScene:this.data.scene},envVersion:"release"},{bubbles:!0,composed:!0})},toRecommendDetail:function(){var e=this.data.itemInfo;this.triggerEvent("torecommenddetail",{appid:e.mch_appid,item_code:e.item_code},{bubbles:!0,composed:!0}),t.navigateTo({url:["/portal/recommend-detail/recommend-detail?appid="+(e.mch_appid||"")+"&","product_id="+(encodeURIComponent(e.item_code)||"")+"&","source="+(e.source||"")].join("")})},toContact:function(e){this.data.showContact&&this.triggerEvent("contact",{store:this.data.contactInfo},{bubbles:!0,composed:!0})}}}); 
 			}); 	require("widget/goods-item/goods-item.js");
 		__wxRoute = 'widget/group-avatar/group-avatar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/group-avatar/group-avatar.js';	define("widget/group-avatar/group-avatar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{pageName:{type:String,value:""},size:Number,src:String},options:{multipleSlots:!0},data:{loaded:!1},ready:function(){this.setData({size:1.0001*this.data.size})},methods:{onImageLoadFinish:function(){this.setData({loaded:!0})}}}); 
 			}); 	require("widget/group-avatar/group-avatar.js");
 		__wxRoute = 'widget/group-feed-item/group-feed-item';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/group-feed-item/group-feed-item.js';	define("widget/group-feed-item/group-feed-item.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(e){e&&e.__esModule}(require("../../utils/toast.js"));var e=require("../../utils/util.js"),t=require("../../utils/enum.js"),o=(require("../../utils/gotoChatUtil.js"),require("../../libs/mmuxwxappdevkit/index.js"));t.IDKeyDefine,t.PageActionType,o.Sys,o.IdKey,require("../../core/eventcenter.js"),require("../../models/addOpenProduct.js"),require("../../models/deleteOpenProduct.js"),require("../../libs/mmuxwxappdevkit/utils/exposeReporter.js"),require("../../libs/mmuxwxappdevkit/utils/actionReporter.js"),require("../../utils/backgroundAudioManager.js"),require("../../utils/readReporter"),require("../../globalData"),require("../../core/network.js"),require("../../utils/ticket").getTicket;Component({properties:{pageName:{type:String,value:""},viewModel:{type:Object,value:null},sourceId:{type:String,value:""},groupId:{type:String,value:""},profileTicket:{type:String,value:""},groupInfo:{type:Object,value:{}}},data:{showActionSheet:!1,actionSheetTitle:"",actionSheetItems:[]},ready:function(){},attached:function(){},detached:function(){},methods:{toFeedDetail:function(){var t=this.data.viewModel,o={group_id:this.data.groupId,appid:t.appid,product_id:t.product_item.item_code,source:t.product_item.source,comment_id:t.info.comment_id};this.data.profileTicket?e.navigateTo({url:"/portal/group-feed-detail/group-feed-detail?product_req="+encodeURIComponent(JSON.stringify(o))+"&fromScene=group-feed-list&fromTicket="+encodeURIComponent(this.data.profileTicket||"")+"&title="+encodeURIComponent("推荐详情"),complete:function(e){var t=e.product_req;console.info("navigateTo some params: product_req="+t)}}):e.navigateTo({url:"/portal/group-feed-detail/group-feed-detail?product_req="+encodeURIComponent(JSON.stringify(o))+"&title="+encodeURIComponent("推荐详情"),complete:function(e){var t=e.product_req;console.info("navigateTo some params: product_req="+t)}})},toPreviewVideo:function(){e.navigateTo({url:"/portal/preview-image/preview-image?video="+encodeURIComponent(JSON.stringify(this.data.product.video_item))+"&product="+encodeURIComponent(JSON.stringify(this.data.product))+"&quickExit="+this.data.quickExit+"&sourceId="+this.data.sourceId+"&groupId="+encodeURIComponent(this.data.groupId)})},openProfile:function(e){},hideActionSheet:function(){},clickActionSheet:function(){}}}); 
 			}); 	require("widget/group-feed-item/group-feed-item.js");
 		__wxRoute = 'widget/guarantee-pop/guarantee-pop';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/guarantee-pop/guarantee-pop.js';	define("widget/guarantee-pop/guarantee-pop.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../core/eventcenter.js"),a=require("../../utils/util.js"),t=require("../../core/sys.js"),n=require("../../core/network.js");Component({properties:{pageName:{type:String,value:""},appId:{type:String},guaranteePopUpShow:{type:Boolean,value:!1}},data:{platform:t.platform,phoneModel:t.phoneModel(),guaranteeInfoMap:null},attached:function(){t.guaranteeInfoMap?this.onGuaranteeInfoLoaded(t.guaranteeInfoMap):t.getGuaranteeInfoLoading||this.getGuaranteeInfo(),e.register("guaranteeInfoLoaded",this,"onGuaranteeInfoLoaded")},detached:function(){e.unregister("guaranteeInfoLoaded",this)},methods:{onGuaranteeInfoLoaded:function(e){this.setData({guaranteeInfoMap:e}),this.triggerEvent("maploaded",e)},getGuaranteeInfo:function(){var a=this;t.getGuaranteeInfoLoading=!0,n.request({loading:!1,cgi:n.cgiSet.getAboutConfig,params:{collection:"friendgoods_verify",key_list:["config"]},success:function(n){if(n.doc_list&&n.doc_list[0]&&n.doc_list[0].buff){var o={};try{o=JSON.parse(n.doc_list[0].buff)}catch(e){o=null}o&&(t.guaranteeInfoMap=o,t.getGuaranteeInfoLoading=!1,a.setData({guaranteeInfoMap:o}),e.emit("guaranteeInfoLoaded",o))}},fail:function(){t.getGuaranteeInfoLoading=!1}})},closeGuaranteePop:function(){this.triggerEvent("pophide")},callGuaranteePhone:function(){wx.makePhoneCall({phoneNumber:this.data.guaranteeInfoMap[this.data.appId].phone_number})},toGuaranteeWxApp:function(){var e=this.data.guaranteeInfoMap[this.data.appId];a.navigateToMiniProgram({appId:e.online_service_wxapp_id,path:e.online_service_wxapp_path||"",extraData:{},envVersion:"release"})},toGuaranteeH5:function(){var e=this.data.guaranteeInfoMap[this.data.appId];wx.openUrl({url:e.official_website_url})}}}); 
 			}); 	require("widget/guarantee-pop/guarantee-pop.js");
 		__wxRoute = 'widget/ignore-dialog/ignore-dialog';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/ignore-dialog/ignore-dialog.js';	define("widget/ignore-dialog/ignore-dialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../core/api.js"),e=require("../../core/sys.js");Component({properties:{pageName:{type:String,value:""},uninterestedParam:{type:Object},ignoreChoices:{type:Array},showIgnoreDialog:{type:Boolean},ignoreClickPosition:{type:Object,value:null,observer:function(n,i){var o=this;n&&t.nextTick&&t.nextTick(function(){t.createSelectorQuery().in(o).select("#triangle").boundingClientRect(function(i){if(i){var a="8px",c="initial";n.clientX>e.windowWidth/2&&(a="initial",c="8px"),t.createSelectorQuery().in(o).select("#items-wrap").boundingClientRect(function(t){t&&(t.height+17+15+8<e.windowHeight-n.clientY?o.setData({triangleTop:n.clientY+26+"px",triangleLeft:n.clientX-i.width+21+"px",contTop:n.clientY+34+"px",contLeft:a,contRight:c,triangle:"top"},function(){o.setData({animationShow:!0})}):o.setData({triangleTop:n.clientY-12+"px",triangleLeft:n.clientX-i.width+21+"px",contTop:n.clientY-t.height-11+"px",contLeft:a,contRight:c,triangle:"bottom"},function(){o.setData({animationShow:!0})}))}).exec()}}).exec()})}}},data:{triangleTop:0,triangleLeft:0,contTop:0,contLeft:0,contRight:0,triangle:"top",animationShow:!1},attached:function(){},detached:function(){},ready:function(){},methods:{onTouchStart:function(){this.setData({showIgnoreDialog:!1,animationShow:!1})},onTouchMove:function(){this.setData({showIgnoreDialog:!1,animationShow:!1})},onClickItem:function(t){var e=t.currentTarget.dataset,n=e.item;0!==e.index&&this.triggerEvent("onClickChooseReason",{reason_id:[n.id],reason_name:[n.name]},{bubbles:!0,composed:!0})}}}); 
 			}); 	require("widget/ignore-dialog/ignore-dialog.js");
 		__wxRoute = 'widget/index-group-cell/index-group-cell';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/index-group-cell/index-group-cell.js';	define("widget/index-group-cell/index-group-cell.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../utils/enum.js"),t=require("../../libs/mmuxwxappdevkit/utils/exposeReporter.js");Component({exposeObserver:null,properties:{pageName:{type:String,value:""},item:Object,index:Number},data:{},ready:function(){this.exposeObserver=t.init({self:this,selector:".group-cell",data:{type:e.PageActionType.IndexGroupRealExposure,ext:{id:this.data.item&&this.data.item.base.id||"",index:this.data.index}}})},detached:function(){this.exposeObserver&&"function"==typeof this.exposeObserver.disconnect&&this.exposeObserver.disconnect()},methods:{onClick:function(e){this.triggerEvent("click",e.currentTarget.dataset)}}}); 
 			}); 	require("widget/index-group-cell/index-group-cell.js");
 		__wxRoute = 'widget/input-face-btn/input-face-btn';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/input-face-btn/input-face-btn.js';	define("widget/input-face-btn/input-face-btn.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}e(require("../../utils/toast.js"));var t=e(require("../../libs/westore/create")),a=require("../../core/eventcenter.js"),n=require("../../utils/util.js"),o=require("../../core/sys.js"),i=(require("../../core/network.js"),n.getFaceList());(0,t.default)({options:{},properties:{pageName:{type:String,value:""},panelShow:Boolean,width:{type:Number,value:30},height:{type:Number,value:30},submitTxt:{type:String,value:""},panelStyle:String},data:{compInputToolBar:{panelHeight:0},compFacePanel:{panelShow:!1,maskShow:!1},phoneModel:o.phoneModel(),platform:o.platform,facePanelHeight:0,faceWrapperHeight:0,oldPanelHeight:0,facesList:i,panelFaceCount:26,facePanelList:[],currentPanelIdx:0},ready:function(){a.register("showFacePanel",this);for(var e=(wx.getSystemInfoSync().windowWidth-20)/9*3+24,t=e+23+5+10,n=Math.ceil(i.length/26),o=[],s=this.data.panelFaceCount,h=0;h<n;h++)o.push(i.slice(h*s,h*s+s));this.setData({facePanelHeight:"iPhoneX"===this.data.phoneModel?t+34:t,faceWrapperHeight:e,facePanelList:o}),this.compInputToolBar=this.store.data.compInputToolBar},detached:function(){a.unregister("showFacePanel",this),this.store.data.compFacePanel.panelShow=!1,this.store.data.compFacePanel.maskShow=!1,this.update()},methods:{showFacePanel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.__handled){e.__handled=!0;var t=e.show||!1;this.store.data.compFacePanel.panelShow=t,this.store.data.compFacePanel.maskShow=t,this.update()}},onFaceTap:function(){this.store.data.compFacePanel.panelShow?(this.store.data.compFacePanel.panelShow=!1,this.store.data.compFacePanel.maskShow=!1,this.compInputToolBar.panelHeight=this.data.oldPanelHeight,this.update(),this.triggerEvent("refocus",{},{composed:!0,bubbles:!0})):(this.setData({oldPanelHeight:this.compInputToolBar.panelHeight}),this.store.data.compFacePanel.panelShow=!0,this.store.data.compFacePanel.maskShow=!0,this.compInputToolBar.panelHeight=this.data.facePanelHeight,this.update(),this.triggerEvent("showpanel",{height:this.data.facePanelHeight}))},onFaceInput:function(e){var t=e.currentTarget.dataset,a=t.faceidx,n=t.panelidx;this.triggerEvent("faceinput",{value:"["+this.data.facePanelList[n][a]+"]"})},onFaceDelete:function(e){this.triggerEvent("facedelete",{},{composed:!0,bubbles:!0})},swiperItemChange:function(e){this.setData({currentPanelIdx:e.detail.current})},onSubmit:function(){this.triggerEvent("submit",{})}}}); 
 			}); 	require("widget/input-face-btn/input-face-btn.js");
 		__wxRoute = 'widget/input-tool-bar/input-tool-bar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/input-tool-bar/input-tool-bar.js';	define("widget/input-tool-bar/input-tool-bar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}e(require("../../utils/toast.js"));var t=e(require("../../libs/westore/create")),o=(require("../../core/eventcenter.js"),require("../../utils/util.js"),require("../../core/sys.js"));require("../../core/network.js");(0,t.default)({options:{},properties:{pageName:{type:String,value:""}},data:{compInputToolBar:{inputPanelShow:!1,panelHeight:0},compFacePanel:{panelShow:!1,maskShow:!1},platform:o.platform},ready:function(){var e=this,t=wx.getSystemInfoSync(),o=t.windowHeight,n=750/t.windowWidth,a=88/n,i=20/n;this.compInputToolBar=this.store.data.compInputToolBar,this.setData({screenHeight:o,inputHeight:a,cacheInputHeight:a,inputPaddingSize:i}),"function"==typeof wx.onKeyboardHeightChange&&wx.onKeyboardHeightChange(function(t){console.info("onKeyboardHeightChange",JSON.stringify(t)),e.store&&!e.store.data.compFacePanel.panelShow&&e.compInputToolBar.inputPanelShow&&t.height>0&&(e.compInputToolBar.panelHeight=t.height,e.update())})},detached:function(){this.compInputToolBar.inputPanelShow=!1,this.compInputToolBar.panelHeight=0,this.update()},methods:{onFaceInput:function(e){this.triggerEvent("contentinput",{value:e.detail.value,type:"face"})},onFacePanelHide:function(e){this.store.data.compFacePanel.panelShow=!1,this.compInputToolBar.inputPanelShow=!1,this.compInputToolBar.panelHeight=0,this.update()},onFaceMaskHide:function(){this.store.data.compFacePanel.maskShow=!1,this.update()}}}); 
 			}); 	require("widget/input-tool-bar/input-tool-bar.js");
 		__wxRoute = 'widget/list-data-view/list-data-view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/list-data-view/list-data-view.js';	define("widget/list-data-view/list-data-view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=require("../../core/sys.js");Component({properties:{pageName:{type:String,value:""},bottomTip:String,customLoadingTip:String,loading:Boolean,noIcon:Boolean,observerClass:String,hidden:Boolean,showTip:{type:Boolean,value:!0}},data:{platform:o.platform,phoneModel:o.phoneModel(),exposeMap:{}},attached:function(){},methods:{}}); 
 			}); 	require("widget/list-data-view/list-data-view.js");
 		__wxRoute = 'widget/mask/mask';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/mask/mask.js';	define("widget/mask/mask.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{pageName:{type:String,value:""},animate:{type:Boolean,value:!0},show:{type:Boolean,observer:function(t){t?this.postData([{condIf:!0},{condShow:!0}],this.data.animate?20:0):this.postData([{condShow:!1},{condIf:!1}],this.data.animate?250:0)}},zIndex:{type:Number,value:999999}},data:{condIf:!1,condShow:!1},observers:{condShow:function(t){var e=this;t||setTimeout(function(){!e.data.condShow&&e.triggerEvent("animationfinish")},this.data.animate?250:0)}},methods:{preventPageScroll:function(t){return!1},captureOutsideTouch:function(){this.setData({show:!1}),this.triggerEvent("hidemask",{})},postData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;!function a(){e.length&&t.setData(e.splice(0,1)[0]),e.length&&setTimeout(a,n)}()}}}); 
 			}); 	require("widget/mask/mask.js");
 		__wxRoute = 'widget/message-item-permission/message-item-permission';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/message-item-permission/message-item-permission.js';	define("widget/message-item-permission/message-item-permission.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../core/eventcenter.js");var t=require("../../utils/util.js"),e=(require("../../core/sys.js"),require("../../core/network.js"),require("../../models/getPermissionList"));Component({options:{},properties:{pageName:{type:String,value:""},line:{type:Boolean,value:!1}},data:{msgItem:null,permissionList:[],permissionWaitingList:[]},ready:function(){var t=this;new e({success:function(e){e.item_list&&t.setData({permissionList:e.item_list.filter(function(t){return"1"!==t.auth_status||"1"===t.auth_status&&t.b_read}),permissionWaitingList:e.item_list.filter(function(t){return"1"===t.auth_status&&!t.b_read})},function(){var e=t.data.permissionList;if(e.length){var i={count:e.length,content:e.map(function(t){return t.nickname}).join("，")};t.setData({msgItem:i})}}),t.setData({authDataComplete:!0})},fail:function(t){wx.showToast({title:t&&t.errmsg||"系统繁忙，请稍后再试"})},complete:function(){wx.hideLoading(),t.setData({barLoading:!1}),t.loading=!1}}).loadNext()},detached:function(){},methods:{beforeClickActionSheet:function(){},hideActionSheet:function(){this.setData({actionSheetId:"",showActionSheet:!1})},onClickCellAction:function(t){this.deleteMsg()},deleteMsg:function(){this.setData({msgItem:null})},clickActionSheet:function(t){"删除"===t.detail.content&&this.deleteMsg()},onDeleteActionSheet:function(t){this.setData({actionSheetId:"Delete",showActionSheet:!0,actionSheetItems:[{type:"custom",content:"删除",color:"#ed4d3d",userInfo:t.currentTarget.dataset,extra:{}}]})},toDetail:function(){t.navigateTo({url:"/portal/permission-new/permission-new"})}}}); 
 			}); 	require("widget/message-item-permission/message-item-permission.js");
 		__wxRoute = 'widget/message-item/message-item';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/message-item/message-item.js';	define("widget/message-item/message-item.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},t=require("../../core/eventcenter.js"),o=require("../../utils/util.js"),i=(require("../../core/sys.js"),require("../../core/network.js")),r=["/assets/icon-like-great-reply.png","/assets/icon-like-heart-reply.png","/assets/icon-like-question-reply.png","/assets/icon-like-thank-reply.png"],n={order_pay_success:3,order_delivery:4,order_refund:5,order_complete:100,order_lead_in:101,collect_lead_in:102,friend_comment:201,friend_reply:202,friend_like:204,group_reply:205,group_invite_by_friend:206,group_remove_by_friend:207,group_dissolve:208,group_enter_by_friend:209,group_apply:210,group_enter_self:211,group_apply_recommend:213,group_apply_comment:214,group_get_recommend:215,group_get_comment:216,group_jump_url:217,group_invite_code:218,group_forward:219};Component({externalClasses:["nick-name-color"],options:{},properties:{pageName:{type:String,value:""},msgItem:{type:Object}},data:{IconListReply:r},ready:function(){t.register("delMsgFromOther",this,"onDelMsgFromOther")},detached:function(){t.unregister("delMsgFromOther",this)},methods:{onDelMsgFromOther:function(e){var t=this.data.msgItem;t.msg_id!==e.msg_id||t.__deleted||(t.__deleted=!0,this.triggerEvent("itemdelete",{msgItem:t}))},onAgreeApply:function(t){var o=this;wx.showLoading({mask:!0});var r=this.data.msgItem,n={success:function(e){wx.hideLoading(),wx.showToast({title:"已确认",icon:"success"}),r.ext_info.infoObj.has_accepted="1",o.triggerEvent("itemchange",{msgItem:r})},fail:function(e){console.error("agreeApply fail: ",e),wx.hideLoading(),wx.showToast({title:e.errmsg||"加入失败",image:"/assets/load_fail.png"})},complete:function(e){}};210===r.msg_type?i.request(e({cgi:i.cgiSet.acceptJoinGroup,params:{join_message_ticket:r.ext_info.infoObj.group_join_confirm_ticket}},n)):213===r.msg_type?i.request(e({cgi:i.cgiSet.acceptGroupRecommend,params:{recommend_privilege_apply_ticket:r.ext_info.infoObj.group_recommend_privilege_apply_ticket}},n)):214===r.msg_type&&i.request(e({cgi:i.cgiSet.acceptGroupComment,params:{comment_privilege_apply_ticket:r.ext_info.infoObj.group_comment_privilege_apply_ticket}},n))},beforeClickActionSheet:function(){},hideActionSheet:function(){this.setData({actionSheetId:"",showActionSheet:!1})},onClickCellAction:function(e){this.deleteMsg()},deleteMsg:function(){var e=this.data.msgItem,o=this;if("permission_msg"===e.msg_type)return e.__deleted=!0,o.triggerEvent("itemdelete",{msgItem:e}),t.emit("delMsgFromOther",{msg_id:e.msg_id}),void wx.showToast({title:"已删除"});wx.showLoading({title:"删除中",mask:!0});var r=(new Date).getTime();if(i.request({cgi:i.cgiSet.deletemsg,params:{msg_key:e.msg_key},success:function(){var i=(new Date).getTime()-r;e.__deleted=!0,setTimeout(function(){wx.hideLoading(),wx.showToast({title:"已删除"}),o.triggerEvent("itemdelete",{msgItem:e}),t.emit("delMsgFromOther",{msg_id:e.msg_id})},i<500?500-i:0)},fail:function(e){console.error("deletemsg fail: ",e),wx.showToast({title:"删除失败",image:"/assets/load_fail.png"})}}),this.statMessageListDelMsg){var n=item.ext_info.infoObj;this.statMessageListDelMsg({appid:n.appid,item_code:n.product_id})}},clickActionSheet:function(e){"删除"===e.detail.content&&this.deleteMsg()},onDeleteActionSheet:function(e){this.setData({actionSheetId:"Delete",showActionSheet:!0,actionSheetItems:[{type:"custom",content:"删除",color:"#ed4d3d",userInfo:e.currentTarget.dataset,extra:{}}]})},onFromNameTap:function(){var e=this.data.msgItem;e.ext_info.infoObj.from_openid&&e.ext_info.infoObj.group_id&&o.openUserProfile({openid:e.ext_info.infoObj.from_openid})},toDetail:function(e){var t=this.data.msgItem;if("permission_msg"!==t.msg_type){if(t.ext_info&&t.canClick){var i=t.ext_info.infoObj;if(t.msg_type===n.group_jump_url)return void wx.openUrl({url:i.jump_url});if("1"===i.group_is_dissolve)return void wx.showToast({title:"该圈子已解散",icon:"none",duration:1500});if("1"===i.not_in_group)return void wx.showToast({title:"你已退出圈子",icon:"none",duration:1500});if(206===t.msg_type||207===t.msg_type||209===t.msg_type||211===t.msg_type||213===t.msg_type||214===t.msg_type||215===t.msg_type||216===t.msg_type||220===t.msg_type||221===t.msg_type)return void o.navigateTo({url:["/portal/group-profile/group-profile?","title="+encodeURIComponent(i.group_name)+"&","group_id="+encodeURIComponent(i.group_id)].join(""),complete:function(e){var t=e.title,o=e.group_id;console.info("navigateTo some params: title="+t+"&group_id="+o)}});if(t.msg_type===n.group_invite_code)return void o.navigateTo({url:["/portal/invite-code-list/invite-code-list"].join("")});if(t.msg_type===n.order_complete||t.msg_type===n.order_delivery||t.msg_type===n.order_lead_in||t.msg_type===n.order_pay_success||t.msg_type===n.order_refund)return i.delorder?void wx.showToast({title:"该订单已删除",icon:"none",duration:1500}):void o.navigateTo({url:["/portal/order-detail/order-detail?","orderId="+encodeURIComponent(i.order_id)+"&","bizUin="+t.biz_uin].join("")});if(t.msg_type===n.collect_lead_in)return void o.navigateTo({url:["/portal/cart-list/cart-list"].join("")});if(201===t.msg_type||202===t.msg_type||204===t.msg_type||205===t.msg_type||219===t.msg_type){if(i.delcomment)return void wx.showToast({title:"该推荐已删除",icon:"none",duration:1500});var r={group_id:i.group_id||"",appid:i.appid,product_id:i.product_id,source:Number(i.source||0),comment_id:i.father_comment_id||i.comment_id};o.navigateTo({url:"/portal/group-feed-detail/group-feed-detail?product_req="+encodeURIComponent(JSON.stringify(r))+"&fromScene=message&title="+encodeURIComponent("推荐详情"),complete:function(e){var t=e.product_req;console.info("navigateTo some params: product_req="+t)}})}}}else o.navigateTo({url:"/portal/permission-new/permission-new"})}}}); 
 			}); 	require("widget/message-item/message-item.js");
 		__wxRoute = 'widget/modal/modal';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/modal/modal.js';	define("widget/modal/modal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../core/sys");Component({properties:{pageName:{type:String,value:""},show:Boolean,title:String,content:String,needInput:Boolean,inputPlaceHolder:String,confirmText:String,showCancel:{type:Boolean,value:!0}},data:{inputValue:"",top:0},methods:{capture:function(){},cancel:function(){this.triggerEvent("cancel")},confirm:function(){this.triggerEvent("confirm",{inputValue:this.data.inputValue}),this.data.inputValue=""},onInputFocus:function(t){var e=t.detail.height;this.getTranslateY(e)},onInputBlur:function(){this.setData({top:0})},onInputChange:function(t){this.data.inputValue=t.detail.value},getTranslateY:function(e){var n=this;wx.nextTick&&wx.nextTick(function(){wx.createSelectorQuery().in(n).select("#dialog").boundingClientRect(function(i){i&&e>(t.screenHeight-i.height)/2&&n.setData({top:120})}).exec()})}}}); 
 			}); 	require("widget/modal/modal.js");
 		__wxRoute = 'widget/permission-sheet/permission-sheet';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/permission-sheet/permission-sheet.js';	define("widget/permission-sheet/permission-sheet.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../core/network.js");require("../../models/batchSet.js");Component({options:{multipleSlots:!0},properties:{pageName:{type:String,value:""},list:Array,source:Number,open:{type:Boolean,value:!1,observer:function(e){var s=this;e&&setTimeout(function(){s.setData({show:!0}),t.request({cgi:t.cgiSet.clearAuthUnread,params:{set_source:0,has_read:!0},success:function(){s.setData({readOk:!0})}})},10)}},noTip:{type:Boolean,value:!1},showRight:Boolean,title:String},data:{readOK:!1,show:!1},ready:function(){},methods:{closeAll:function(){var t=this;this.triggerEvent("read",{readCount:this.data.list.length}),this.setData({show:!1}),setTimeout(function(){t.triggerEvent("hide")},200)},syncData:function(){var e=this;t.request({cgi:t.cgiSet.syncAppHistory,params:{appid_list:this.data.list.map(function(t){return t.appid}),is_open:!0,b_force_read:Boolean(this.data.noTip)},success:function(){wx.showToast({title:"已授权",icon:"success",duration:1500}),e.triggerEvent("sync",{acceptCount:e.data.list.length}),e.closeAll()},fail:function(){wx.showToast({title:"授权失败",icon:"error",duration:1500})}})},rejectData:function(){var e=this;t.request({cgi:t.cgiSet.syncHistory,params:{is_accept:!1,page_source:this.data.source||0},success:function(){e.triggerEvent("reject",{rejectCount:e.data.list.length}),e.closeAll()},fail:function(){wx.showToast({title:"失败"})}})}}}); 
 			}); 	require("widget/permission-sheet/permission-sheet.js");
 		__wxRoute = 'widget/plugin-goods-item/plugin-goods-item';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/plugin-goods-item/plugin-goods-item.js';	define("widget/plugin-goods-item/plugin-goods-item.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return t&&t.__esModule?t:{default:t}}(require("../../utils/datetime.js"));Component({options:{multipleSlots:!0},properties:{pageName:{type:String,value:""},productId:{type:String},source:{type:String},itemInfo:{type:Object},thumbUrl:{type:String},hasEvaluation:{type:Boolean},title:{type:String,observer:function(t){this.parseContent()}},query:{type:String,observer:function(t){this.parseContent()}},price:Number,skuList:Array,onShelf:{type:Boolean,value:!0},brandName:String,isLastOne:Number,target:{type:String,value:"miniProgram"},url:String,appId:String,path:String,version:{type:String,value:"release"},itemCode:String,action:{type:String,value:"购买"},showAction:{type:Boolean,value:!0},showWeAppIcon:{type:Boolean,value:!0},fuckWeAppIcon:{type:Boolean,value:!1},updateTime:{type:Number,observer:function(e){this.setData({formatUpdateTime:t.default.formatUpdateTime(1e3*e)})}},disableState:{type:Boolean,value:!1},bottomDesc:String,topIcon:String,topDesc:String,friendLikeNum:Number,stockAttrInfo:Array,scene:String,showContact:Boolean,contactOnline:Boolean,contactInfo:Object,titleData:Object,clickable:{type:Boolean,value:!0}},data:{formatUpdateTime:"",titleNodes:[]},attached:function(){console.log(this.data)},methods:{recommendThis:function(){this.triggerEvent("recommend",this.data.itemInfo,{bubbles:!0,composed:!0})},onClick:function(t){this.triggerEvent("visit3rdgoodsdetail",t.currentTarget.dataset,{bubbles:!0,composed:!0}),this.triggerEvent("onclick")},toRecommendDetail:function(){var t=this.data.itemInfo;wx.navigateTo({url:["/portal/recommend-detail/recommend-detail?appid="+(this.data.appId||"")+"&","product_id="+encodeURIComponent(t.item_code||"")+"&","source="+(t.source||"")].join("")})},toContact:function(t){this.data.showContact&&this.triggerEvent("contact",{store:this.data.contactInfo},{bubbles:!0,composed:!0})},parseContent:function(){if(this.data.title){for(var t=this.data.query||"================INVALID================",e=this.data.title.split(t),o=(e=e.map(function(t){return{name:"span",attrs:{class:"name"},children:[{type:"text",text:t}]}})).length-1;o>0;o--)e.splice(o,0,{name:"em",attrs:{class:"name",style:"color: #3FB838; font-style: normal;"},children:[{type:"text",text:t}]});this.setData({titleNodes:e})}}}}); 
 			}); 	require("widget/plugin-goods-item/plugin-goods-item.js");
 		__wxRoute = 'widget/product-attachment/product-attachment';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/product-attachment/product-attachment.js';	define("widget/product-attachment/product-attachment.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{pageName:{type:String,value:""},product:{type:Object,value:null},backgroundUrl:{type:String,value:""},backgroundMode:{type:String,value:"aspectFill"},backgroundInsetLeft:{type:Number,value:0},backgroundInsetBottom:{type:Number,value:0},backgroundHeight:{type:Number,value:0},mode:{type:String,value:"light"},fixBottom:{type:Boolean,value:!1},hasFav:{type:Boolean,value:!1},showMenuShare:{type:Boolean,value:!1},showMenuFav:{type:Boolean,value:!1},showMenuContact:{type:Boolean,value:!1},showMenuArticle:{type:Boolean,value:!1},showMenuDetail:{type:Boolean,value:!1},poi:{type:Object,value:null}},data:{},methods:{onClickMenu:function(e){this.triggerEvent(e.currentTarget.dataset.event,{product:this.data.product},{bubbles:!0,composed:!0})}}}); 
 			}); 	require("widget/product-attachment/product-attachment.js");
 		__wxRoute = 'widget/product-img-browser/product-img-browser';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/product-img-browser/product-img-browser.js';	define("widget/product-img-browser/product-img-browser.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},i=require("../../core/sys.js"),a=require("../../core/eventcenter.js"),n=require("../../utils/gotoChatUtil.js"),o=require("../../utils/util.js"),r=require("../../libs/mmuxwxappdevkit/utils/actionReporter.js"),s=require("../../utils/enum.js").PageActionType;Component({properties:{pageName:{type:String,value:""},product:{type:Object,value:null,observer:function(t){t&&t.product_item&&this.setData({showContact:n.canShowContactSellerWithBizUin(t.product_item.biz_uin)})}},video:{type:Object,value:null},images:{type:Array,value:[],observer:function(t){if(t){var a=t.map(function(t){t.swiperActive=!0,t.isImageOver=!1,t.maxScale=4;var a=void 0,n=void 0,o=t.width,r=t.height;return a=i.screenWidth,n=a*r/o,t.height>t.width?(t.height,t.width,i.screenHeight,i.screenWidth):t.height/t.width<i.screenHeight/i.screenWidth&&(t.maxScale=8),n>i.screenHeight&&(t.isOverScreenHeight=!0,t.maxScale=1),t.movableViewPositionStyle="\n                                                    margin-top: "+(t.isOverScreenHeight?0:-n/2)+"px;\n                                                    top: "+(t.isOverScreenHeight?0:"50%")+";\n                                                    margin-left: "+-a/2+"px;\n                                                    left: 50%;\n                                                ",e({},t,{width:a,height:n,scale:1,isScale:!1})});this.setData({imagesTouch:a})}}},current:{type:Number,value:0},quickExit:{type:Boolean,value:!1},sourceId:{type:String,value:""},groupId:{type:String,value:""}},data:{swipeReported:!1,showContact:!1,showAttachment:!0,width:i.screenWidth,height:i.screenHeight,phoneModel:i.phoneModel(),imagesTouch:[],actionSheet:{show:!1,items:[]},multiTouch:!1},ready:function(){if(this.data.product){var t=this.data.product;!t.onlyForPreview&&this.setData({reportData:{group_id:this.data.groupId,appid:t.appid,item_code:t.product_item.item_code,comment_id:t.info.comment_id||""}})}},attached:function(){a.register(a.Event.onKfStatusUpdate,this)},detached:function(){a.unregister(a.Event.onKfStatusUpdate,this)},methods:{isFriendFeed:function(){return"0"==this.data.groupId||"13104374716925600"==this.data.groupId||""==this.data.groupId},onSwiperItemChange:function(e){var i=this;this.changeTimer&&(clearTimeout(this.changeTimer),this.changeTimer=0),this.changeTimer=setTimeout(function(){var a=e.currentTarget.dataset.index,n=!1;"touch-out-of-bounds"===e.detail.source&&(n=!0),i.setData(t({},"imagesTouch["+a+"].swiperActive",n))},10)},onSwiperItemScale:function(e){var i=this;this.scaleTimer&&(clearTimeout(this.scaleTimer),this.scaleTimer=0),this.scaleTimer=setTimeout(function(){var a,n=e.detail.scale,o=e.currentTarget.dataset.index;!i.data.imagesTouch[o].scale&&r.report({type:s.scaleImg,ext:i.data.reportData},i.data.pageName),i.setData((a={},t(a,"imagesTouch["+o+"].scale",n),t(a,"imagesTouch["+o+"].iScale",!0),a))},10)},onReturn:function(){},exitForce:function(t){this.triggerEvent("exit")},exit:function(t){this.triggerEvent("exit")},onClick:function(){this.setData({showAttachment:!this.data.showAttachment})},onChange:function(t){this.setData({current:t.detail.current}),this.data.swipeReported||!this.data.product||this.data.product.onlyForPreview||(this.triggerEvent("imageswipe",this.data.reportData,{bubbles:!0,composed:!0}),this.setData({swipeReported:!0}))},onTouchStart:function(t){this._lastTouchTs&&Date.now()-this._lastTouchTs<350&&this.setData({multiTouch:!0}),this._lastTouchTs=Date.now()},onTouchEnd:function(){this.setData({multiTouch:!1})},onTap:function(){this.exitForce()},onLongPress:function(t){if(!this.data.multiTouch){var e=t.currentTarget.dataset.url;!this.data.video&&(e.indexOf("shp.qpic.cn")>=0||e.indexOf("bs.qpic.cn")>=0)&&(e+="/0"),!this.data.video&&this.setData({actionSheet:{show:!0,items:[{type:"custom",content:this.data.video?"保存视频":"保存图片",userInfo:{url:e}}]}})}},clickActionSheet:function(t){"保存图片"==t.detail.content&&o.saveMedia(t.detail.userinfo.url,"image"),"保存视频"==t.detail.content&&o.saveMedia(t.detail.userinfo.url,"video")},hideActionSheet:function(){this.setData({actionSheet:{show:!1}})},onKfStatusUpdate:function(){this.data.product&&this.setData({showContact:n.canShowContactSellerWithBizUin(this.data.product.product_item.biz_uin)})},captureOutsideClick:function(){},toShareProductDetail:function(t){var e=this.data.product,i=this.getCurrentProduct(),a=this._isSendCommentBySelf(e);if(i){this.triggerEvent("shareproductdetail",e,{bubbles:!0});var n=this.data.sourceId;"profile"===this.data.sourceId&&(n=this.isFriendFeed()?"index-recommend":"group-feed-list");var r=["/portal/share-product-detail/share-product-detail?page_ref="+n+"&sourceId="+n,"appid="+i.appid,"product_id="+encodeURIComponent(i.product_item.item_code||""),"source="+(i.product_item.source||""),"share_key="+encodeURIComponent(e.share_key||""),"recommend="+encodeURIComponent(JSON.stringify(e)),"isSelf="+(a?1:0)].join("&");o.navigateTo({url:r})}},_isSendCommentBySelf:function(t){return t&&t.info.sender.openid===i.userInfo.openid},getCurrentProduct:function(){var t=this.data.product,e=this.data.current;return t?t.isUGC?e<t.ugc_item.info.length&&t.ugc_item.info[e].product_info.length?t.ugc_item.info[e].product_info[0]:null:t:null},toPoi:function(){var t=this.getCurrentPoi();t&&t.location&&wx.openLocation({latitude:t.location.latitude,longitude:t.location.longitude,name:t.name||"",address:t.address||""})},getCurrentPoi:function(){var t=this.data.product,e=this.data.current;if(!t||!t.isUGC||e>=t.ugc_item.info.length)return null;var i=t.ugc_item.info[e].poi;return i&&i.name?i:null}}}); 
 			}); 	require("widget/product-img-browser/product-img-browser.js");
 		__wxRoute = 'widget/product-img-swiper/product-img-swiper';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/product-img-swiper/product-img-swiper.js';	define("widget/product-img-swiper/product-img-swiper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},e=require("../../core/sys.js"),i=require("../../utils/gotoChatUtil"),a=require("../../utils/util.js"),r=require("../../libs/mmuxwxappdevkit/utils/actionReporter.js"),o=require("../../utils/enum.js").PageActionType;require("../../globalData");Component({properties:{pageName:{type:String,value:""},appid:{type:String,value:"",observer:function(t){this.setData({fixHeight:"wx8a5d6f9fad07544e"==t})}},images:{type:Array,value:[],observer:function(t,e){var i=this;if(Array.isArray(t)&&t[0]){if(t.map(function(t){return t.url}).join("")==e.map(function(t){return t.url}).join(""))return;t=this.setSwiperHeightByOne(t);var a=this._obSeq=(this._obSeq||0)+1,r=function(){if(a==i._obSeq){var e=t.filter(function(t){return t&&t.url});i.setData({current:0,uniqueImages:e.slice(0,9),imageWidth:e[0].width||0,imageHeight:e[0].height||0}),i.getHeight()}};this.data.uniqueImages.length>0?this.setData({current:0,uniqueImages:[]},r):r()}}},hasFav:{type:Boolean,value:!1},showMenuDetail:{type:Boolean,value:!1},showMenuFav:{type:Boolean,value:!1},showMenuArticle:{type:Boolean,value:!1},bizUin:{type:String,value:""},showMenuShare:{type:Boolean,value:!1},width:{type:Number,value:0,observer:function(){this.getHeight()}},customMedia:{type:Boolean,value:!1},active:{type:Boolean,value:!1,observer:function(t){var e=this;this.setData({tipsActive:!0,maskActive:!1}),setTimeout(function(){e.setData({tipsActive:t,maskActive:t})},t?100:250)}},product:{type:Object,value:null},waterMark:{type:String,value:""},poi:{type:Object,value:null},quickExit:{type:String,value:""},sourceId:{type:String,value:""},groupId:{type:String,value:""}},data:{swiperWidth:0,swiperHeight:0,height:200,imageWidth:0,imageHeight:0,dropdown:!1,dropdownAnim:!1,current:0,fixHeight:!1,swipeReported:!1,uniqueImages:[],reportData:{},mode:"",tipsActive:!1,maskActive:!1,hideProductName:!1,showMenuContact:!1,renderSwiper:!0},renderSwiperTimeout:0,attached:function(){this.setData({showMenuContact:i.canShowContactSellerWithBizUin(this.data.bizUin)})},ready:function(){this.data.width<=0&&this.getWidth();var t=this.data.product;t&&this.setData({reportData:{group_id:this.data.groupId,appid:t.appid,item_code:t.product_item&&t.product_item.item_code||"",comment_id:t.info.comment_id||""}}),setTimeout(this.register.bind(this))},detached:function(){this._observer&&(this._observer.disconnect(),this._observer=null)},methods:{setSwiperHeightByOne:function(i){if(this.isGroupFeedDetail()&&i&&i.length){var a=e.screenWidth,r=0;(i=i.map(function(e){return t({},e,{width:a,height:a*e.height/e.width})})).forEach(function(t){t.height>r&&(r=t.height)}),r>2*e.screenWidth&&(r=2*e.screenWidth),this.setData({swiperWidth:a,swiperHeight:r})}return i},isGroupFeedDetail:function(){return"group-feed-detail"===this.data.sourceId},getWidth:function(){var t=this;wx.createSelectorQuery().in(this).select(".wrap").boundingClientRect(function(e){e&&t.setData({width:e.width})}).exec()},getHeight:function(){var t=0,i="aspectFill",a="wx8a5d6f9fad07544e"==this.data.appid,r=this.data,o=r.width,n=r.imageWidth,s=r.imageHeight;return a?(t=240,i="aspectFit"):n>0&&o>0&&n<0?(t=n<s?240:s/(0/o),i="aspectFit",a=!0):t=o<=0||n<=0||s<=0||n<=s?o:n/s>4/3?3*e.screenWidth/4:o*s/n,t=o,this.setData({height:t,mode:i,fixHeight:a}),t},onClick:function(){var t=this.data.active;this.setData({active:!t}),t||this.triggerEvent("tapproduct",this.data.reportData,{bubbles:!0,composed:!0})},onClickMenu:function(t){this.triggerEvent(t.currentTarget.dataset.event,{},{bubbles:!0,composed:!0}),this.hideDropdown()},onChange:function(t){this.setData({current:t.detail.current}),this.data.swipeReported||(r.report({type:o.PreviewImageSwipe,ext:this.data.reportData},this.data.pageName),this.setData({swipeReported:!0}))},onTransition:function(t){var e=0===this.data.current;this.data.hideProductName===e&&this.setData({hideProductName:!e})},showDropdown:function(){var t=this;this.setData({dropdown:!0},function(){t.setData({dropdownAnim:!0})})},hideDropdown:function(){var t=this;this.data.dropdownAnim&&this.data.dropdown&&(this.setData({dropdownAnim:!1}),setTimeout(function(){t.setData({dropdown:!1})},200))},register:function(){var t=this;this._observer=this.createIntersectionObserver({thresholds:[.1]}),this._observer.relativeToViewport({top:-e.navigationBarHeight(),bottom:0}),this._observer.observe(".wrap",function(e){e&&e.intersectionRatio<.1&&(t.hideDropdown(),t.setData({active:!1}))})},toShareProductDetail:function(){this.triggerEvent("sharedetail",{product:this.getCurrentProduct(),index:this.data.current},{bubbles:!0,composed:!0})},getCurrentProduct:function(){var t=this.data.product,e=this.data.current;return t?t.isUGC?e<t.ugc_item.info.length&&t.ugc_item.info[e].product_info.length?t.ugc_item.info[e].product_info[0]:null:t:null},toPoi:function(){var t=this.getCurrentPoi();t&&t.location&&(r.report({type:o.clickUgcSharePoi,ext:this.data.reportData},this.data.pageName),wx.openLocation({latitude:t.location.latitude,longitude:t.location.longitude,name:t.name||"",address:t.address||""}))},getCurrentPoi:function(){var t=this.data.product,e=this.data.current;if(!t||!t.isUGC||e>=t.ugc_item.info.length)return null;var i=t.ugc_item.info[e].poi;return i&&i.name?i:null},preview:function(){this.data.product&&this.data.product.video_item?this.toPreviewVideo():this.toPreviewImage()},toPreviewImage:function(){this.triggerEvent("topreviewimage",this.data.reportData,{bubbles:!0,composed:!0});var t=this.data.uniqueImages.map(function(t){return t.url+"/0"});wx.previewImage({current:t[this.data.current],urls:t,fail:function(){console.info("previewImage error")}})},toPreviewVideo:function(){a.navigateTo({url:"/portal/preview-image/preview-image?video="+encodeURIComponent(JSON.stringify(this.data.product.video_item))+"&product="+encodeURIComponent(JSON.stringify(this.data.product))+"&quickExit="+this.data.quickExit+"&sourceId="+this.data.sourceId+"&groupId="+encodeURIComponent(this.data.groupId)})},toVideoFlow:function(){a.navigateTo({url:"/portal/video-flow/video-flow?product="+encodeURIComponent(JSON.stringify(this.data.product))+"&&sourceId="+this.data.sourceId+"&groupId="+encodeURIComponent(this.data.groupId)})},captureOutsideClick:function(){}}}); 
 			}); 	require("widget/product-img-swiper/product-img-swiper.js");
 		__wxRoute = 'widget/product-preview/product-preview';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/product-preview/product-preview.js';	define("widget/product-preview/product-preview.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../core/sys.js"),t=require("../../utils/util");Component({properties:{pageName:{type:String,value:""},show:{type:Boolean,value:!1},product:Object,index:Number,scene:String},data:{minContentViewHeight:Math.min(e.screenHeight-e.navigationBarHeight()-56-56,468),maxContentViewHeight:e.screenHeight-e.navigationBarHeight()-56-56,imageWidth:e.windowWidth-32,phoneModel:e.phoneModel()},methods:{onCancel:function(){this.triggerEvent("cancel")},onConfirmSelect:function(){this.triggerEvent("selectProduct",{product:this.data.product,scene:this.data.scene,index:this.data.index})},onJumpToMiniProgram:function(){t.navigateToMiniProgram({appId:this.data.product.appId,path:this.data.product.appPath})}}}); 
 			}); 	require("widget/product-preview/product-preview.js");
 		__wxRoute = 'widget/product-search/product-search';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/product-search/product-search.js';	define("widget/product-search/product-search.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return t&&t.__esModule?t:{default:t}}(require("../../utils/toast.js")),e=require("../../core/sys.js"),r=require("../../models/getMoreProduct.js"),i=(require("../../models/getQuerySuggestion.js"),require("../../utils/util.js"),{HIDDEN:0,LOADING:1,NO_MORE:2,NOTHING:3});Component({properties:{pageName:{type:String,value:""},show:{type:Boolean,observer:function(t){this.clearState()}},productList:{type:Array,value:[]},currentProductIndex:{type:Number,value:0},bufferLength:{type:Number,value:0},title1:String,title2:String},data:{TIP_TYPE:i,phoneModel:e.phoneModel(),searching:!1,query:"",hasMore:!1,nextOffset:0,is_allproduct:!1,searchProductList:[],customList:[],filterIds:[],tipType:i.HIDDEN,currentSearchProductIndex:-1,searchContentView:Math.min(e.screenHeight-e.navigationBarHeight()-56-56,468)},methods:{onQueryInput:function(t){this.setData({query:t.detail.value,tipType:i.HIDDEN})},onQueryFocus:function(t){},onQueryBlur:function(t){},onQueryConfirm:function(t){var e=t.detail.value&&t.detail.value.trim()||"";e&&(this.setData({searching:!0,query:e,tipType:i.LOADING,customList:[],filterIds:[],searchProductList:[],nextOffset:0,is_allproduct:!1,currentSearchProductIndex:-1}),this.triggerEvent("search",{query:e}),this.initModel(),this.favor.loadNext({offset:this.data.nextOffset,is_allproduct:this.data.is_allproduct}))},onQueryClear:function(){this.setData({query:"",searching:!1,searchProductList:[],tipType:i.HIDDEN})},onLoadMore:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.data.hasMore&&this.favor.loadNext({offset:this.data.nextOffset,is_allproduct:this.data.is_allproduct,force:t})},initModel:function(){var e=this;this.favor=r({query:this.data.query,product_scene:5,success:function(t){var r=e.data.searchProductList.length,a=r,s={hasMore:t.has_more||!1,nextOffset:t.next_offset||0,is_allproduct:t.is_allproduct||!1};if(!e.data.customList.length&&t.custom_items&&t.custom_items.length){var n=[];t.custom_items.forEach(function(t){t.app_info&&n.push(t.app_info.product_id)}),s.customList=t.custom_items,s.filterIds=n}t.items&&t.items.forEach(function(t){if(!t.app_info||-1===e.data.filterIds.indexOf(t.app_info.product_id)){var i={key:t.app_info.appuin+"-"+t.item_code+"-"+t.source,image:t.pic_url.replace("/132","/750"),nameHighlighted:t.title,name:t.title.replace(/<[^>]*>|<\/[^>]*>/gm,""),appName:t.app_info.nickname,appId:t.app_info.appid,appUin:t.app_info.appuin,itemCode:t.item_code,source:t.source,appPath:t.jumpUrl,desc:t.friend_desc,mark:t.is_buy||t.is_favor,is_buy:t.is_buy,is_favor:t.is_favor,images:t.pic_cdn_url_list&&t.pic_cdn_url_list.length?t.pic_cdn_url_list.map(function(t){return{url:t+"/0"}}):t.pic_url&&[{url:t.pic_url}]||[],price:t.price&&"¥"+t.price/100||"",scene:"search",rank:r+1,total:r+1};s["searchProductList["+r+++"]"]=i}}),t.has_more||(r>0?s.tipType=i.NO_MORE:(s.tipType=i.NOTHING,e.triggerEvent("noMatch",{query:e.data.query}))),e.setData(s),t.has_more&&r-a<=5&&e.onLoadMore(!0)},fail:function(r){var a={tipType:i.HIDDEN};e.setData(a),r&&r.errmsg&&t.default.showErrTips(r.errmsg)}})},onSelectProduct:function(t){var e=t.currentTarget.dataset.index;this.data.searching?this.setData({currentSearchProductIndex:e}):this.setData({currentProductIndex:e}),this.onConfirmSelect()},onConfirmSelect:function(){this.data.searching?this.triggerEvent("selectProduct",{product:this.data.searchProductList[this.data.currentSearchProductIndex]||null,scene:"search",index:this.data.currentSearchProductIndex}):this.triggerEvent("selectProduct",{product:this.data.productList[this.data.currentProductIndex]||null,scene:"preview",index:this.data.currentProductIndex})},onCancel:function(){this.triggerEvent("cancel")},clearState:function(){this.setData({searching:!1,query:"",hasMore:!1,nextOffset:0,is_allproduct:!1,searchProductList:[],customList:[],filterIds:[],tipType:i.HIDDEN,currentSearchProductIndex:-1})},onPreview:function(t){var e=t.detail.product,r=t.detail.index,i=t.detail.scene;this.triggerEvent("preview",{product:e,index:r,scene:i})}}}); 
 			}); 	require("widget/product-search/product-search.js");
 		__wxRoute = 'widget/range-selector/range-selector';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/range-selector/range-selector.js';	define("widget/range-selector/range-selector.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../utils/enum.js"),t=require("../../core/sys.js"),a=require("../../core/network.js"),n=require("../../core/eventcenter.js"),r=require("../../models/getFriendList.js"),o=require("../../utils/util.js"),s=require("../../libs/mmuxwxappdevkit/utils/exposeReporter.js");Component({properties:{pageName:{type:String,value:""},showFriend:Boolean,show:Boolean,curRangeList:{type:Array,observer:function(e,t){var a={};e.forEach(function(e){e.chosen&&(a[e.type]=!0)});var n=this.data.rangeMap;Object.keys(n).forEach(function(e){n[e].chosen=Boolean(a[e])}),this.setData({rangeMap:n})}}},data:{rangeMap:{friend_all:{type:"friend_all",chosen:!0}},cacheChosenRangeType:[],rangeCount:1,maxRangeCount:1,phoneModel:t.phoneModel(),showQuanzu:!1,quanzuList:[],range:[],newQuanzuMap:{},maxAddNumber:100,canCreateGroupCount:0,canCreateMsg:"",showGroupNewMark:!1,joinConfirmIsOpen:!1},attached:function(){n.register(n.Event.onSelectFriendsDone,this,"onSelectFriendsDone"),n.register("onCreateGroupConfirm",this,"onCreateGroupConfirm")},detached:function(){r.setSelectedFriends([]),n.unregister(n.Event.onSelectFriendsDone,this,"onSelectFriendsDone"),n.unregister("onCreateGroupConfirm",this,"onCreateGroupConfirm"),s.reportAll()},ready:function(){var e=this;this.getIsShowQuanzu(),this.setData({quanzuList:[],rangeList:this.data.curRangeList,showGroupNewMark:!Boolean(wx.getStorageSync("show-group-new-mark")||!1)}),r.setSelectedFriends([]),a.request({cgi:a.cgiSet.getQuanzuListByPage,params:{seq:"",count:1e4},success:function(t){var a=e.data.curRangeList.filter(function(e){return e.chosen}).map(function(e){return e.type});t.contact=t.contact||[],t.contact.forEach(function(t){e.data.rangeMap[t.id]={type:t.id,quanzuItem:t,chosen:!1}}),a.forEach(function(t){e.data.rangeMap[t]&&(e.data.rangeMap[t].chosen=!0)}),e.setData({cacheChosenRangeType:a,rangeMap:e.data.rangeMap,quanzuList:t.contact||[]})},fail:function(e){wx.showModal({title:"",content:e&&e.errmsg||"拉取圈子失败，请稍后再试",showCancel:!1})}})},methods:{createGroupBtnShow:function(){s.init({self:this,selector:"#add-group-btn",data:{type:e.PageActionType.GroupCreateShow,ext:{}}})},getIsShowQuanzu:function(){var e=this;a.request({cgi:a.cgiSet.index,params:{},success:function(t){e.setData({showQuanzu:t.group_info.can_create_group||!1,maxAddNumber:t.group_info.create_group_member_num_limit||100,joinConfirmIsOpen:t.group_info.open_join_confirm||!1}),e.createGroupBtnShow()},fail:function(e){wx.showToast({title:"加载失败",image:"/assets/load_fail.png"}),console.error("shopping-index error",e)}})},preventPageScroll:function(e){return!1},onSelectFriendsDone:function(e){},onClickRangeItem:function(e){var t=e.currentTarget.dataset,a={},n="";if("friend_all"===t.type)n="friend_all";else if("friend_part"===t.type);else{if("add_quanzu"===t.type)return r.setSelectedFriends([]),void o.navigateTo({url:"/portal/friend-selector/friend-selector?isQuanzu=1&limitCount="+(this.data.maxAddNumber-1)});t.type&&(n=t.type)}var s=this.data.rangeMap[n];if(1===this.data.maxRangeCount){if(s&&!s.chosen){var i=this.data.rangeMap;Object.keys(i).forEach(function(e){i[e].chosen&&(i[e].chosen=!1)}),s.chosen=!0}a.rangeMap=this.data.rangeMap}else s&&(s.chosen?this.data.rangeCount>1&&(a.rangeCount=this.data.rangeCount-1,s.chosen=!1):this.data.rangeCount<this.data.maxRangeCount&&(a.rangeCount=this.data.rangeCount+1,s.chosen=!0),a.rangeMap=this.data.rangeMap);this.setData(a)},onCreateGroupConfirm:function(e){var t=e.group_id,a=e.group_name,n=(e.code,e.msg,{desc:"",head_img_url:"",id:t,name:a});this.data.quanzuList.unshift(n),this.data.rangeMap[n.id]={type:n.id,chosen:!1,quanzuItem:n},this.setData({quanzuList:this.data.quanzuList,rangeMap:this.data.rangeMap})},getCanCreateCount:function(e){var t=this;wx.showLoading({mask:!0}),a.request({cgi:a.cgiSet.checkCanCreate,params:{create_way:1},success:function(a){t.setData({canCreateGroupCount:a.count||0,canCreateMsg:a.can_create_msg||"你还可以创建"+(a.count||0)+"个圈子"}),t.triggerEvent("groupCreateClick",{code:0,msg:a.can_create_msg}),e&&e(a.count)},fail:function(e){t.triggerEvent("groupCreateClick",{code:e.errcode,msg:e.errmsg}),wx.showModal({title:"",content:e&&e.errmsg,showCancel:!1,confirmText:"我知道了"}),console.error("checkCanCreate error",e)},complete:function(){wx.hideLoading()}})},addQuanzuMode:function(){var e=this;this.data.showGroupNewMark&&wx.setStorageSync("show-group-new-mark",!0),this.setData({showGroupNewMark:!1}),this.getCanCreateCount(function(t){o.navigateTo({url:"/portal/group-add/group-add?simple=1&joinConfirmIsOpen="+(e.data.joinConfirmIsOpen?"1":"0")+"&canCreateGroupCount="+e.data.canCreateGroupCount+"&canCreateMsg="+encodeURIComponent(e.data.canCreateMsg)})})},onChangeRange:function(){var e={rangeList:[]},t=this.data.rangeMap,a=[];Object.keys(t).forEach(function(n){t[n].chosen&&(a.push(n),e.rangeList.push(t[n]))}),this.setData({cacheChosenRangeType:a}),this.triggerEvent("rangechange",e)},onMaskHide:function(){var e=this.data.rangeMap,t=this.data.cacheChosenRangeType;Object.keys(e).forEach(function(a){e[a].chosen=-1!==t.indexOf(a)}),this.setData({rangeMap:e}),this.triggerEvent("hiderangeselector",{})}}}); 
 			}); 	require("widget/range-selector/range-selector.js");
 		__wxRoute = 'widget/recommend-comment-input/recommend-comment-input';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/recommend-comment-input/recommend-comment-input.js';	define("widget/recommend-comment-input/recommend-comment-input.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}t(require("../../utils/toast.js"));var e=t(require("../../libs/westore/create")),a=require("../../core/eventcenter.js"),n=require("../../utils/util.js"),o=require("../../core/sys.js");require("../../core/network.js"),n.getFaceMap();(0,e.default)({options:{addGlobalClass:!0},properties:{pageName:{type:String,value:""},currentScrollTop:Number,currentComment:{type:Object,value:null}},data:{inputFocus:!0,compFacePanel:{panelShow:!1,maskShow:!1},inputPos:0,cacheKeyboardHeight:0,cacheInputHeight:0,clickElBottom:0,inputHeight:0,inputPaddingSize:0,inputPlaceHolder:"",screenHeight:0,inputTop:0,platform:o.platform},ready:function(){var t=this,e=wx.getSystemInfoSync(),a=e.windowHeight,n=20/(750/e.windowWidth);this.setData({screenHeight:a,inputHeight:51,cacheInputHeight:51,inputPaddingSize:n}),this.disableKeyboardChange=!1,"function"==typeof wx.onKeyboardHeightChange&&wx.onKeyboardHeightChange(function(e){t.disableKeyboardChange||t.store&&!t.store.data.compFacePanel.panelShow&&t.data.currentComment&&e.height>0&&t.focusTime&&Date.now()-t.focusTime>1e3&&(t.data.cacheKeyboardHeight=e.height,t.calcDistance(t.data.currentComment.bottom,e.height))})},detached:function(){this.disableKeyboardChange=!0},methods:{calcDistance:function(t,e,a){var n=this;a&&(this.data.cacheInputHeight=a);var i=this.data.screenHeight-e-this.data.cacheInputHeight,c=t-i;this.setData({inputTop:Math.max(this.data.currentScrollTop+c,0)+i-("ios"!=o.platform?10:0)},function(){n.triggerEvent("inputpop",{distance:c,keyboardHeight:e})}),setTimeout(function(){n.setData({inputPlaceHolder:n.data.currentComment&&n.data.currentComment.placeHolder||""})},500)},onInputFocus:function(t){console.info("inputFocus");var e=t.detail.height||0;this.data.cacheKeyboardHeight=e=Math.max(e,this.data.cacheKeyboardHeight),this.calcDistance(this.data.currentComment.bottom,this.data.cacheKeyboardHeight),this.data.currentComment.refData.cacheContent||this.setData({cacheInputHeight:this.data.cacheInputHeight||this.data.inputHeight}),this.setData({inputPlaceHolder:"",inputFocus:!0}),this.focusTime=Date.now(),this.store.data.compFacePanel.panelShow=!1,this.store.data.compFacePanel.maskShow=!1,this.update()},onLineChange:function(t){if(!this.store.data.compFacePanel.panelShow){console.info("line change");var e=Math.min(63,t.detail.height)+24;this.calcDistance(this.data.currentComment.bottom,this.data.cacheKeyboardHeight,e)}},hideInput:function(){if(this.data.currentComment){console.info("hideInput"),this.data.cacheKeyboardHeight=0;var t=this.data.currentComment.refData.cacheContent;a.emit("onRecommendInputHide",this.data.currentComment.refData),this.setData({currentComment:null,inputTop:0,inputPlaceHolder:"",inputFocus:!0}),this.focusTime=0,this.triggerEvent("inputhide",{content:t})}},onInputChange:function(t){var e=t.detail.value,a=this.data.currentComment.refData.cacheContent||"";return e=n.faceDelete(e,a,t.detail.cursor),console.info("newValue",e),this.data.currentComment.refData.cacheContent=e,e},onInputBlur:function(t){var e=this;console.info("inputblur",t),this.setData({inputPos:t.detail.cursor||this.data.currentComment.refData.cacheContent.length}),this.data.inputFocus&&(console.info("inputBlur"),this.setData({inputFocus:!1}),this.focusTime=0,this.store.data.compFacePanel.panelShow||setTimeout(function(){e.hideInput()},10))},onInputConfirm:function(t){this.data.currentComment.refData.cacheContent=t.detail.value,console.info("onInputConfirm, ",t.detail.value),this.data.currentComment.refData.cacheContent&&a.emit("onRecommendInputConfirm",this.data.currentComment.refData)},onInputSubmit:function(t){this.data.currentComment.refData.cacheContent=t.detail.value.contentInput,console.info("onInputSubmit"),this.submitWhenFaceOpen()},submitWhenFaceOpen:function(){var t=this;this.data.currentComment.refData.cacheContent&&(console.info("submitWhenFaceOpen",this.data.currentComment.refData.cacheContent),this.store.data.compFacePanel.panelShow&&(this.store.data.compFacePanel.panelShow=!1,this.store.data.compFacePanel.maskShow=!1,this.update()),this.data.currentComment.refData.cacheContent&&a.emit("onRecommendInputConfirm",this.data.currentComment.refData),setTimeout(function(){t.focusTime=0,t.hideInput()},10))},onFaceInput:function(t){var e=this.data.currentComment,a=e.refData.cacheContent,n=this.data.inputPos||a.length;e.refData.cacheContent=a.substring(0,n)+t.detail.value+a.substring(n,a.length),this.setData({currentComment:e})},onFaceDelete:function(){var t=this.data.currentComment;t.refData.cacheContent=n.deleteTailFace(t.refData.cacheContent),this.setData({currentComment:t})},onFacePanelShow:function(t){console.info("facePanelShow"),this.calcDistance(this.data.currentComment.bottom,t.detail.height)},onFaceRefocus:function(t){console.info("facePanelHideAndRefocus"),this.setData({inputFocus:!0})},onFacePanelHide:function(t){this.store.data.compFacePanel.panelShow=!1,this.update(),this.hideInput()},onFaceMaskHide:function(){this.store.data.compFacePanel.maskShow=!1,this.update()},onFaceSubmit:function(){this.submitWhenFaceOpen()},preventTouchMove:function(){return!1}}}); 
 			}); 	require("widget/recommend-comment-input/recommend-comment-input.js");
 		__wxRoute = 'widget/recommend-comment-op/recommend-comment-op';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/recommend-comment-op/recommend-comment-op.js';	define("widget/recommend-comment-op/recommend-comment-op.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=[{value:3,title:"鼓励"},{value:0,title:"认同"},{value:2,title:"疑问"}],t=["/assets/icon-like-great-reply.png","/assets/icon-like-heart-reply.png","/assets/icon-like-question-reply.png","/assets/icon-like-thank-reply.png"],i=["/assets/icon-like-great-reply.png","/assets/icon-like-heart-reply.png","/assets/icon-like-question-reply.png","/assets/icon-like-thank-reply.png"];Component({options:{addGlobalClass:!0},properties:{pageName:{type:String,value:""},commentCount:{type:Number,observer:function(e,t){}},likeIndexStr:{type:String,value:-1,observer:function(e,t){}},likeIndex:{type:Number,value:-1},likeCount:Number,hasGoods:Boolean,groupId:String},data:{IconList:e,IconListActive:t,IconListReply:i},ready:function(){this.setData({likeIndex:this.data.likeIndexStr&&this.data.likeIndexStr.length>0?new Number(this.data.likeIndexStr):-1}),console.info("likeIndex s",this.data.likeIndex)},methods:{clickComment:function(){this.triggerEvent("showcomment")},showLikeIcons:function(e){var t=this;if(this.data.likeIndex>-1)return this.delIconLike();this.setData({showIcons:!0},function(){t.setData({showIconsFinish:!0})})},delIconLike:function(){this.doIconUnlike(),this.setData({likeIndex:-1})},hideLikeIcons:function(){var e=this;setTimeout(function(){e.setData({showIcons:!1,showIconsFinish:!1})})},hideLikeIconsByClick:function(){var e=this;this.setData({showIconsFinish:!1},function(){setTimeout(function(){e.setData({showIcons:!1})},200)})},onPopWrapTouchMove:function(){},toggleIconLike:function(e){var t=e.currentTarget.dataset.iconidx;this.hideLikeIcons(),this.setData({likeIndex:t}),this.doIconLike(t)},doIconLike:function(e){this.triggerEvent("dolike",{likeIndex:e})},doIconUnlike:function(){this.triggerEvent("dounlike")},showGoods:function(){this.triggerEvent("showgoods")}}}); 
 			}); 	require("widget/recommend-comment-op/recommend-comment-op.js");
 		__wxRoute = 'widget/recommend-fold-text/recommend-fold-text';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/recommend-fold-text/recommend-fold-text.js';	define("widget/recommend-fold-text/recommend-fold-text.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t={};Component({options:{addGlobalClass:!0},properties:{comment:{type:String,observer:function(e,i){var n=this;if(this.data.foldMode)if(e==i||this.data.lineCount<=0)this.setMargin(!1);else if(e in t)this.setMargin(t[e]);else{var a=this.data.commentArr,o=this.data.fontSize,r=this.data.containerWidth,s=this.getEstimateLines(a,o,r);if(s<=this.data.lineCount)return t[e]=!1,void this.setMargin(!1);wx.createSelectorQuery().in(this).select(".user-comment-content").boundingClientRect(function(i){if(i){i.height-=8,s=n.data.lineCount;var a=n.data.calcLineHeight,o=i.height>a*s&&i.height<=a*(s+1);t[e]=o,e===n.data.comment&&n.setMargin(o)}}).exec()}}},commentArr:{type:Array,value:[]},containerWidth:{type:Number,value:375},fontSize:{type:Number,value:17,observer:function(){this.setCalcLineHeight()}},lineHeight:{type:Number,value:1.4,observer:function(){this.setCalcLineHeight()}},lineCount:{type:Number,value:0},color:{type:String},foldMode:{type:Boolean,value:!1}},data:{unfold:!1,marginFor6Lines:!1,calcLineHeight:24},methods:{getEstimateLines:function(){function t(){for(;o>a;)r++,o-=a}function e(){t(),r++,o=0}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:21,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:375,o=0,r=0;return i.forEach(function(t){if("face"===t.type)o+=n;else{var i=t.value.split("\n");i.forEach(function(t,a){o+=t.length*n,a<i.length-1&&e()})}}),i.length>0&&e(),r},onClickUnfold:function(t){this.setData({unfold:!this.data.unfold}),this.emitChange()},onUrlTap:function(t){var e=t.currentTarget.dataset.url;e&&wx.openUrl({url:e})},setMargin:function(t){var e=this;this.data.marginFor6Lines!=t&&this.setData({marginFor6Lines:t},function(){e.emitChange()})},setCalcLineHeight:function(){var t=Math.ceil(this.data.fontSize*this.data.lineHeight);console.error(t),t!=this.data.calcLineHeight&&this.setData({calcLineHeight:t})},emitChange:function(t){this.triggerEvent("change",t)}}}); 
 			}); 	require("widget/recommend-fold-text/recommend-fold-text.js");
 		__wxRoute = 'widget/recommend-group-comment/recommend-group-comment';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/recommend-group-comment/recommend-group-comment.js';	define("widget/recommend-group-comment/recommend-group-comment.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},o=e(require("../../utils/toast.js")),i=require("../../libs/mmuxwxappdevkit/index.js"),n=e(require("../../libs/westore/diff")),a=require("../../utils/util.js"),r=require("../../core/eventcenter.js"),s=require("../../models/doReply.js"),d=require("../../models/undoGroupRecommend.js"),c=require("../../models/doGroupFeedLike.js"),u=require("../../models/applyComment"),p=require("../../models/doForward"),l=require("../../core/network.js"),m=require("../../globalData.js"),f=require("../../libs/mmuxwxappdevkit/utils/actionReporter.js"),h=require("../../utils/enum.js"),g=(h.IDKeyDefine,h.PageActionType),_=require("../../models/groupHelper"),I=[{value:"3",title:"鼓励"},{value:"0",title:"认同"},{value:"2",title:"疑问"}],w=["/assets/icon-like-great-active.png","/assets/icon-like-heart-active.png","/assets/icon-like-question-active.png","/assets/icon-like-thank-active.png"],y=["/assets/icon-like-great-reply.png","/assets/icon-like-heart-reply.png","/assets/icon-like-question-reply.png","/assets/icon-like-thank-reply.png"],v={0:"ask",1:"reply",2:"reply-reply",5:"reply-reply"},k={0:1,1:2,2:5,5:5},S={LIKE:0,CANCEL_LIKE:1,COMMENT:2,DELETE_COMMENT:3},C={0:"点赞",1:"取消点赞",2:"评论"},M=0,D=0;Component({observers:{"groupId, sourceId":function(e,t){var o=!e||"0"==e||"13104374716925600"===e,i="13104374716925601"==e,n="index-recommend"==t||"group-feed-list"==t;this.setData({flatMode:(o||i)&&n})}},options:{addGlobalClass:!0,multipleSlots:!0},properties:{inGroup:{type:Number,value:0},pageName:{type:String,value:""},viewModel:{type:Object,value:null,observer:function(e,t){if(e&&e.info){if(t&&t.info&&t.info.uid==e.info.uid)return;var o=!1;if(4==e.info.type){var i=e.forward_item.original_feed;o=!i.video_item&&!i.ugcImageList.length}else o=!e.video_item&&!e.ugcImageList.length;this.setData({isLinkFeed:o,likeTipShow:!1,forwardCommentTipShow:!0,forwardInputText:""}),this.resetRefData(),"group-feed-detail"==this.data.sourceId&&this.getFirstPageLikeAndComment()}}},currentFocusId:{type:String,value:""},sourceId:String,groupId:String,groupName:String,groupFeedReasons:Array,groupInfo:Object,fromScene:String,ticketParams:Object,restrictInteract:{type:Boolean,value:!1},isSystemGroup:{type:Boolean,value:!1},isLinkFeed:{type:Boolean,value:!1},upsideDown:{type:Boolean,value:!1}},data:{IconList:I,IconListActive:w,IconListReply:y,ReplyType:v,ReplyToType:k,likeTipShow:!1,forwardCommentTipShow:!0,inputPos:0,isGroupApp:m.isGroupApp,showStarPop:!1,showStarPopMask:!1,showIcons:!1,showIconsFinish:!1,inputFocus:!1,inputHeight:56,growInputOffset:0,recommendInputHeight:0,keyboardHeight:M,faceFocus:!1,facePanelHeight:D,refData:null,cacheContentMap:{},showActionSheet:!1,actionSheetId:"",actionSheetItems:[],modal:{show:!1},showPanel:!1,showPanelInner:!1,panelType:"",panelLocateId:"",panelScrollTop:0,fixPanelBottom:!1,forwardInputText:"",userOpenId:"",screenWidth:i.Sys.screenWidth,screenHeight:i.Sys.screenHeight,phoneModel:i.Sys.phoneModel(),platform:i.Sys.platform,flatMode:!1,componentId:"",ignoreDialogChoices:[],showIgnoreDialog:!1,ignoreClickPosition:null,currentPageIndex:-1,isLoadingLike:!1,isLoadingComment:!1,isLoadingReply:!1},ready:function(e){var t=this,o=88/(750/i.Sys.windowWidth),n=this.data.groupFeedReasons||[];this.setData({userOpenId:i.Sys.userInfo.openid||"",groupFeedReasons:n.length?n:getApp().globalData.groupFeedReasons,recommendInputHeight:o,componentId:Date.now()+Math.random().toFixed(2),currentPageIndex:getCurrentPages().length-1},function(){t.data.currentFocusId&&setTimeout(function(){t.setData({currentFocusId:""})},1500)}),r.register("onRecommendInputConfirm",this,"onIndexRecommendInputConfirm"),r.register("onRecommendInputHide",this,"onIndexRecommendInputHide"),r.register("delStarMember",this,"onDelStarMemberFromOther"),r.register("setStarMember",this,"onSetStarMemberFromOther")},detached:function(){this.setStorePanelShow(!1),r.unregister("onRecommendInputHide",this),r.unregister("onRecommendInputConfirm",this),r.unregister("setStarMember",this),r.unregister("delStarMember",this)},methods:{isFriendFeed:function(){return!this.data.groupId||"0"===this.data.groupId||"13104374716925600"===this.data.groupId},isForwardFeed:function(){return"13104374716925601"===this.data.groupId||4==this.data.viewModel.info.type},toggleIconLike:function(e){var t=e.currentTarget.dataset.iconidx;return this.data.viewModel.info.like_info_has_self===String(t)?this.delIconLike():this.doIconLike(t)},toggleIconLikeNew:function(e){var t=this,o=this.data.viewModel,i=o.info.like_info_has_self?S.CANCEL_LIKE:S.LIKE;this.triggerEvent("showpanel",{panelType:"like",appid:o.appid,item_code:o.product_item.item_code,source:o.product_item.source,comment_id:o.info.comment_id},{bubbles:!0,composed:!0}),this.queryPrivilegeCheck({action:i,success:function(e){return i==S.CANCEL_LIKE?t.delIconLike():t.doIconLike("3")}})},alertCancelLike:function(){this.setData({actionSheetId:"CancelLike",showActionSheet:!0,actionSheetTitle:"是否取消点赞？",actionSheetItems:[{type:"custom",content:"确定",color:"#ed4d3d"}]})},doIconLike:function(e){var t=this,o=this.data.viewModel,n=this;e=String(e);var a=function(a){o.info.like_info=o.info.like_info.filter(function(e){return e.openid!==i.Sys.userInfo.openid}),a&&o.info.like_info.push({openid:i.Sys.userInfo.openid,headimgurl:i.Sys.userInfo.avatar,nickname:i.Sys.userInfo.nickname,username:i.Sys.userInfo.username,value:e}),o.info.like_info_has_self=a?e:"",o.info.like_count=o.info.like_count+(a?1:-1),t.setData({"viewModel.info":o.info}),t.emitGroupFeedChange(),t.setData({likeTipShow:!1,showIconsFinish:!1},function(){"group-feed-detail"!==n.data.pageName&&setTimeout(function(){n.setData({likeTipShow:!1})},3e3),setTimeout(function(){n.setData({showIcons:!1})},200)})};a(!0),c({action:1,group_id:this.data.groupId,key:{appuin:o.info.appuin,key:o.info.key,source:o.info.source,comment_id:o.info.comment_id},like:{type:1,value:e},success:function(){},fail:function(e){a(!1),wx.showModal({title:"提示",content:e.errmsg||"点赞失败，请重试。",showCancel:!1})}}),this.triggerEvent("dolike",{item_code:o.info.key,appid:o.appid,icon_idx:e,open_id:o.info.openid,comment_id:o.info.comment_id,group_id:this.data.groupId},{bubbles:!0,composed:!0})},delIconLike:function(){var e=this,t=this,o=this.data.viewModel,n=function(n){o.info.like_info=o.info.like_info.filter(function(e){return e.openid!==i.Sys.userInfo.openid}),!n&&o.info.like_info.push({openid:i.Sys.userInfo.openid,headimgurl:i.Sys.userInfo.avatar,nickname:i.Sys.userInfo.nickname,username:i.Sys.userInfo.username,value:"3"}),o.info.like_info_has_self=n?"":"3",o.info.like_count=o.info.like_count+(n?-1:1),e.setData({"viewModel.info":o.info}),e.emitGroupFeedChange(),e.setData({likeTipShow:!1,showIconsFinish:!1},function(){setTimeout(function(){t.setData({showIcons:!1})},200)})};n(!0),c({action:0,group_id:this.data.groupId,key:{appuin:o.info.appuin,key:o.info.key,source:o.info.source,comment_id:o.info.comment_id},success:function(){},fail:function(e){n(!1),wx.showModal({title:"提示",content:e.errmsg||"取消点赞失败，请重试。",showCancel:!1})}}),this.triggerEvent("cancellike",{item_code:o.info.key,appid:o.appid,comment_id:o.info.comment_id,group_id:this.data.groupId},{bubbles:!0,composed:!0})},showLikeIcons:function(e){var t=this;this.data.viewModel;this.setData({showIcons:!0},function(){t.setData({showIconsFinish:!0})})},hideLikeIcons:function(){var e=this;setTimeout(function(){e.setData({showIcons:!1,showIconsFinish:!1})})},hideLikeIconsByClick:function(){var e=this;this.setData({showIconsFinish:!1},function(){setTimeout(function(){e.setData({showIcons:!1})},200)})},onPopWrapTouchMove:function(){},toggleIconForward:function(){var e=this,o=this.data.viewModel,n=!o.info.self_forwarded,a=4==o.info.type?o.forward_item.original_feed:o;if(o.forward_item&&o.forward_item.original_feed_deleted&&n)wx.showToast({title:"该推荐已删除",icon:"none"});else{var s=t({},this.ticketParams(),{group_id:a.info.group_id,appid:a.appid,source:a.info.source,product_id:a.info.key,comment_id:a.info.comment_id}),d=function(t){t=!(n^t),4==o.info.type&&(o.info.forward_list=o.info.forward_list.filter(function(e){return e.openid!==i.Sys.userInfo.openid}),t&&o.info.forward_list.push({openid:i.Sys.userInfo.openid,headimgurl:i.Sys.userInfo.avatar,nickname:i.Sys.userInfo.nickname,username:i.Sys.userInfo.username})),o.info.self_forwarded=t,o.info.forward_count=o.info.forward_count+(t?1:-1);var a=n&&t&&!e.isFriendFeed()&&!e.isForwardFeed();e.setData({"viewModel.info":o.info,likeTipShow:a,forwardCommentTipShow:!0}),e.emitGroupFeedChange()};d(!0),p({action:n,params:s,success:function(){r.emit("onNewForwardDone")},fail:function(e){d(!1),wx.showModal({title:"提示",content:e.errmsg||"请重试。",showCancel:!1})}})}},onUrlTap:function(e){var t=e.currentTarget.dataset.url;t&&wx.openUrl({url:t})},openProfile:function(e){this.triggerEvent("openuserprofile",{openid:e.currentTarget.dataset.userinfo.openid,groupid:this.data.groupId},{bubbles:!0,composed:!0}),e.currentTarget.dataset&&e.currentTarget.dataset.isopenprofile&&a.openUserProfile({openid:e.currentTarget.dataset.userinfo.openid,group_id:this.isFriendFeed()?"13104374716925600":this.data.groupId,inGroup:this.data.inGroup,groupName:this.data.groupName})},hideActionSheet:function(){this.setData({actionSheetId:"",showActionSheet:!1})},clickActionSheet:function(e){var t=this;"FeedAction"!=this.data.actionSheetId?e.detail.content.indexOf("删除")>-1?"reply"===e.detail.userinfo.type||"reply-reply"==e.detail.userinfo.type?this.deleteReply(e.detail.userinfo.replyParam,e.detail.userinfo.commentIdx,e.detail.userinfo.replyIdx):this.deleteRecommend():"确定"===e.detail.content&&"Block"===this.data.actionSheetId?this.blockUser(e.detail.userinfo.openid):"确定"===e.detail.content&&"CancelLike"===this.data.actionSheetId?this.toggleIconLikeNew():"Avatar"==this.data.actionSheetId&&("设置星标"==e.detail.content||"取消星标"==e.detail.content?this.toggleStarMember():"不看他(她)"==e.detail.content&&setTimeout(function(){t.alertBlockUser()},300)):"转发给朋友"===e.detail.content?this.onClickShareFeedDetail():"删除"===e.detail.content&&setTimeout(function(){t.onDeleteActionSheet({type:"recommend"})},300)},alertBlockUser:function(){var e=this.data.viewModel;this.setData({showIgnoreDialog:!1,actionSheetId:"Block",showActionSheet:!0,actionSheetTitle:"是否不看他(她)的推荐？",actionSheetItems:[{type:"custom",content:"确定",color:"#ed4d3d",userInfo:{openid:e.info.openid},extra:{}}]})},onDeleteActionSheet:function(e){var t="recommend"===e.type;this.setData({actionSheetId:"Delete",showActionSheet:!0,actionSheetTitle:t?"是否删除该推荐？":"",actionSheetItems:[{type:"custom",content:"删除",color:"#ed4d3d",userInfo:e,extra:{}}]})},toReply:function(e){var t=this,o=e.currentTarget.dataset,n=o.comment,a=(1==o.totype?"":n.sender.openid)===i.Sys.userInfo.openid;this.queryPrivilegeCheck({action:a?S.DELETE_COMMENT:S.COMMENT,success:function(o){t.toReplyImpl(e)}})},toReplyImpl:function(e){var t=this,o=e.currentTarget.dataset,n=o.type,a=o.totype,r=o.fatherid,s=o.replyid,d=o.comment,c=o.commentidx,u=o.replyidx,p=d.comment_id,l=this.data.viewModel,m=4==l.info.type?l.forward_item.original_feed:l,f=this.data.sourceId,h=1==a?"":d.sender.openid,g=this.data.groupId,_=this.data.componentId,I="",w={group_id:g,appid:m.appid,product_id:m.info.key,source:m.info.source,ext_info:{to_openid:h,to_type:a,comment:"",father_comment_id:r,reply_comment_id:s}};if(this.triggerEvent("showpanel",{panelType:"comment",appid:this.data.viewModel.appid,item_code:this.data.viewModel.product_item.item_code,source:this.data.viewModel.product_item.source,comment_id:this.data.viewModel.info.comment_id},{bubbles:!0,composed:!0}),"ask"===n)I="评论";else if("reply"===n||"reply-reply"===n){if(i.Sys.userInfo.openid===h)return w.father_comment_id=r,w.comment_id=p,5==a?w.ext_info.from_type=2:2==a&&(w.ext_info.from_type=1),this.onDeleteActionSheet({type:n,replyParam:w,commentIdx:c,replyIdx:u});I="回复 "+d.sender.nickname}var y={replyParam:w,placeHolder:I,commentItem:d,commentIdx:c,comment_id:p,cacheContent:this.data.cacheContentMap[this.getUniqueId(p)]||"",id:f+"_"+g+"_"+m.info.id+"_"+_};this.setData({refData:y},function(){t.data.flatMode||"group-feed-detail"==t.data.sourceId?wx.createSelectorQuery().in(t).select("#comment_"+m.info.id+"_"+p+"_"+a).boundingClientRect(function(e){e&&(e.initTop=t.getInitTop(e),e.placeHolder=I,e.refData=y,t.triggerEvent("inputshow",{currentComment:e,group_id:t.data.groupId},{bubbles:!0,composed:!0}))}).exec():t.locateToComment("msg_"+m.info.id+"_"+p,!0)})},getInitTop:function(e){return e.top>=this.data.screenHeight-e.bottom?e.top-this.data.recommendInputHeight:e.bottom},sendReply:function(e,t){var o=this,n=this.data.viewModel,r=e.replyParam;r.isGroup=!0;var d=r.ext_info.comment=e.cacheContent;e.sentMark=1,wx.showLoading({mask:!0}),s.do({params:r,action:1,loading:!1,success:function(s){wx.hideLoading();var c={sender:n.selfInfo,receiver:e.commentItem.sender,comment:d,commentArr:a.getCommentArr(d),comment_id:s.comment_id,openid:i.Sys.userInfo.openid,owneropenid:i.Sys.userInfo.openid,to_openid:r.ext_info.to_openid,to_type:r.ext_info.to_type,reply:[],commentIdx:e.commentIdx};2!=c.to_type&&5!=c.to_type||o.data.flatMode||o.isFriendFeed()||o.isForwardFeed()?n.info.comment_list.push(c):n.info.comment_list[c.commentIdx].reply.push(c),o.setData({"viewModel.info.comment_count":n.info.comment_count+1,"viewModel.info.comment_list":n.info.comment_list}),o.triggerEvent(1===r.ext_info.to_type?"docomment":"doreply",{appid:n.appid,item_code:n.info.key,open_id:r.ext_info.to_openid,comment_id:r.ext_info.father_comment_id,reply_id:r.ext_info.reply_comment_id,group_id:o.data.groupId},{bubbles:!0,composed:!0}),t&&t(),o.emitGroupFeedChange()},fail:function(t){e.sentMark=0,wx.hideLoading(),wx.showModal({content:t.errmsg||"请稍后再试",showCancel:!1})},complete:function(){}})},deleteReply:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,n=this.data.viewModel;this.deleteReplyImpl(e,function(){i>=0&&o>=0?(n.info.comment_list[o].reply.splice(i,1),n.info.comment_count=n.info.comment_count-1):i<0&&o>=0&&(n.info.comment_list.splice(o,1),n.info.comment_count=n.info.comment_count-1),t.emitGroupFeedChange()})},deleteReplyImpl:function(e,t){var o=this;e.isGroup=!0;var i=this.data.viewModel;wx.showLoading({mask:!0}),s.do({params:e,action:0,loading:!1,success:function(n){wx.hideLoading(),wx.showToast({title:"已删除",icon:"success",duration:1500}),t&&t(),o.triggerEvent(1===e.ext_info.from_type?"delcomment":"delreply",{appid:i.appid,item_code:i.info.key,comment_id:e.comment_id,group_id:o.data.groupId},{bubbles:!0,composed:!0})},fail:function(e){wx.hideLoading(),wx.showToast({title:"删除失败",icon:"none"})}})},deleteByItem:function(){this.onDeleteActionSheet({type:"recommend"})},deleteRecommend:function(){var e=this,t=this.data.viewModel,o=this.data.groupId;d({appid:t.appid,product_id:t.info.key,source:t.info.source,group_id:o,comment_id:t.info.comment_id,loading:!0,success:function(){e.triggerEvent("deletebyitem",{product:t,group_id:e.data.groupId},{bubbles:!0,composed:!0}),e.emitGroupFeedChange({del:!0}),"group-feed-detail"===e.data.sourceId&&wx.navigateBack()},fail:function(e){console.error(e)}})},emitGroupFeedChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=this.data.viewModel;r.emit("onGroupFeedChange",t({product:o},e))},onInputFocus:function(e){var t=this;this.setStorePanelShow(!1),M=Math.max(e.detail.height||0,M),this.setData({inputFocus:!0,faceFocus:!1,keyboardHeight:M},function(){t.data.panelLocateId&&t.getPosition("#"+t.data.panelLocateId,function(e){e&&t.setData({panelScrollTop:t.data.panelScrollTop+e.bottom-(t.data.screenHeight-(M+t.data.inputHeight))+4})})})},onInputChange:function(e){var t=e.detail.value||"",o=this.data.refData;if(o){var i=this.getUniqueId(o.comment_id);o.cacheContent=t,this.data.cacheContentMap[i]=t}},onInputLineChange:function(e){var o=t({height:21,lineHeight:21,lineCount:1},e.detail);1==o.lineCount&&(this.data.inputHeight=o.height+36),this.setData({growInputOffset:(1-Math.min(o.lineCount,3))*o.lineHeight,inputHeight:this.data.inputHeight})},onInputBlur:function(e){console.info("inputblur",e),this.setData({inputPos:e.detail.cursor||this.data.refData.cacheContent.length}),this.setData({inputFocus:!1,fixPanelBottom:!1,panelLocateId:""})},onInputSubmit:function(e){this.data.refData&&this.onRecommendInputConfirm(this.data.refData)},onInputConfirm:function(e){this.data.refData&&(this.data.refData.cacheContent=e.detail.value,this.onRecommendInputConfirm(this.data.refData))},onFaceInput:function(e){var t=this.data.refData,o=t.cacheContent,i=this.data.inputPos||o.length;t.cacheContent=o.substring(0,i)+e.detail.value+o.substring(i,o.length),this.setData({refData:t})},onFaceDelete:function(){var e=this.data.refData;e.cacheContent=a.deleteTailFace(e.cacheContent),this.setData({refData:e})},onFacePanelShow:function(e){console.info("facePanelShow"),D=e.detail.height,this.setData({inputFocus:!1,faceFocus:!0,facePanelHeight:D})},onFaceRefocus:function(e){console.info("facePanelHideAndRefocus"),this.setData({inputFocus:!0,faceFocus:!1})},onFacePanelHide:function(e){console.info("facePanelOutsideHide"),this.setStorePanelShow(!1),this.setData({faceFocus:!1})},onRecommendInputConfirm:function(e){var t=this;this.setData({refData:e}),e.cacheContent&&!e.sentMark&&this.queryPrivilegeCheck({action:S.COMMENT,success:function(o){t.sendReply(e,function(){var o=t.getUniqueId(e.comment_id);t.data.cacheContentMap[o]="",t.resetRefData()})}})},onIndexRecommendInputConfirm:function(e){var t=this,o=this.data,i=o.sourceId,n=o.groupId,a=o.viewModel,r=o.refData,s=o.componentId;4==a.info.type&&(a=a.forward_item.original_feed),r&&e.id===i+"_"+n+"_"+a.info.id+"_"+s&&(r.cacheContent=e.cacheContent,this.setData({refData:r}),r.cacheContent&&!r.sentMark&&this.queryPrivilegeCheck({action:S.COMMENT,success:function(e){t.sendReply(r,function(){var e=t.getUniqueId(r.comment_id);t.data.cacheContentMap[e]="",t.resetRefData()})}}))},onIndexRecommendInputHide:function(e){var t=this.data,o=t.sourceId,i=t.groupId,n=t.viewModel,a=t.refData,r=t.componentId;if(a&&e.id===o+"_"+i+"_"+n.info.id+"_"+r){var s=this.getUniqueId(a.comment_id);a.cacheContent=e.cacheContent||"",this.data.cacheContentMap[s]=a.cacheContent}},getUniqueId:function(e){return this.data.viewModel.info.id+"_"+e},resetRefData:function(){var e=this.data,t=e.sourceId,o=e.groupId,i=e.viewModel,n=e.componentId;if(i){var a=this.getUniqueId(i.info.comment_id),r={replyParam:{group_id:this.data.groupId,appid:i.appid,product_id:i.info.key,source:i.info.source,ext_info:{to_openid:i.info.openid,to_type:1,comment:"",father_comment_id:i.info.comment_id,reply_comment_id:""}},placeHolder:"评论",commentItem:i.info,comment_id:i.info.comment_id,commentIdx:-1,cacheContent:this.data.cacheContentMap[a]||"",id:t+"_"+o+"_"+i.info.id+"_"+n};this.setData({refData:r})}},showPanel:function(e){var t=this;this.queryPrivilegeCheck({action:S.COMMENT,success:function(o){t.showPanelImpl(e)}})},showPanelImpl:function(e){var t=this;this.getFirstPageLikeAndComment();var o=this.data.viewModel,n=e.currentTarget.dataset,a=n.panelType,r=n.comment,s="",d=!1;r&&(s="msg_"+o.info.id+"_"+r.comment_id,r.openid==i.Sys.userInfo.openid?r.comment_id==o.info.comment_id&&(d=!0):d=!0),f.report({type:g.clickLikeAndCommentPanel,ext:{appid:o.appid,item_code:o.product_item.item_code,source:o.product_item.source,comment_id:o.info.comment_id,group_id:this.data.groupId||"13104374716925600"}},this.data.pageName),this.triggerEvent("showpanel",{panelType:a,appid:o.appid,item_code:o.product_item.item_code,source:o.product_item.source,comment_id:o.info.comment_id},{bubbles:!0,composed:!0}),this.setData({showPanel:!0,showPanelInner:!0,panelType:a||""}),setTimeout(function(){d?t.toReply(e):(t.resetRefData(),t.locateToComment(s,d))},500)},closePanel:function(){this.setStorePanelShow(!1),this.setData({showPanel:!1,panelScrollTop:0})},onPanelAnimationFinish:function(){this.setData({showPanelInner:!1})},showForwardPanel:function(){this.setData({showPanel:!0,showPanelInner:!0,panelType:"forward-comment"})},onForwardInputFocus:function(e){M=Math.max(e.detail.height||0,M),this.setData({keyboardHeight:M})},getForwardInputText:function(e){this.setData({forwardInputText:e.detail.value})},onForwardInputConfirm:function(e){var t=this,o=function(){t.setData({showPanel:!1,forwardCommentTipShow:!1,forwardInputText:""})},i=this.data.viewModel,n=(this.data.forwardInputText||"").trim();if(n.length<=0)return o();wx.showLoading({mask:!0}),s.do({params:{group_id:"13104374716925601",appid:i.appid,product_id:i.info.key,source:i.info.source,ext_info:{to_type:1,comment:n,father_comment_id:i.info.comment_id}},action:1,loading:!1,success:function(e){return wx.hideLoading(),wx.showToast({title:"已发表"}),o()},fail:function(e){wx.hideLoading(),wx.showModal({content:e.errmsg||"请稍后再试",showCancel:!1})}})},onPanelScroll:function(e){this.data.panelScrollTop=e.detail.scrollTop},onPanelReachBottom:function(){this.getMoreComment()},getPosition:function(e,t){wx.createSelectorQuery().in(this).select(e).boundingClientRect(t).exec()},locateToComment:function(e,t){var o=this;e?this.setData({fixPanelBottom:t},function(){o.setData({panelLocateId:e,inputFocus:t})}):this.setData({inputFocus:t})},switchPanelType:function(e){this.setData({panelType:e.currentTarget.dataset.type,panelScrollTop:0})},onAvatarLongPress:function(){if(!this.data.isSystemGroup&&!m.isGroupApp){var e=this.data.viewModel;"group-profile"!==this.data.pageName||e.info.sender.openid===i.Sys.userInfo.openid||this.data.restrictInteract||this.setData({actionSheetId:"Avatar",showActionSheet:!0,actionSheetTitle:"",actionSheetItems:[{type:"custom",content:"不看他(她)"}]})}},onStarPopMaskTouchStart:function(){this.setData({showStarPop:!1})},onStarPopMaskTouchEnd:function(){this.setData({showStarPopMask:!1})},toggleStarMember:function(){this.data.viewModel.info.sender.is_star_member?this.delStarMember():this.setStarMember()},onSetStarMemberFromOther:function(e){var o=this.data.viewModel;e.groupId===this.data.groupId&&-1!==e.openids.indexOf(o.info.sender.openid)&&(o.info.sender.is_star_member=!0,r.emit("onGroupFeedChange",t({product:o},{})))},onDelStarMemberFromOther:function(e){var o=this.data.viewModel;e.groupId===this.data.groupId&&-1!==e.openids.indexOf(o.info.sender.openid)&&(o.info.sender.is_star_member=!1,r.emit("onGroupFeedChange",t({product:o},{})))},setStarMember:function(){var e=this,i=this.data.viewModel;wx.showLoading({mask:!0}),l.request({cgi:l.cgiSet.setStarMember,params:{group_id:this.data.groupId,user_id:i.info.sender.openid},success:function(o){i.info.sender.is_star_member=!0,r.emit("onGroupFeedChange",t({product:i},{})),e.setData({showStarPop:!1,showStarPopMask:!1}),r.emit("setStarMember",{groupId:e.data.groupId,openids:[i.info.sender.openid]})},fail:function(e){o.default.showErrTips(e.errmsg||"系统繁忙"),console.error("setStar error",e)},complete:function(){wx.hideLoading()}}),f.report({type:g.setStarMember,ext:{group_id:this.data.groupId,open_id:i.info.sender.openid}},this.data.pageName)},delStarMember:function(){var e=this,i=this.data.viewModel;wx.showLoading({mask:!0}),l.request({cgi:l.cgiSet.delStarMember,params:{group_id:this.data.groupId,user_id:i.info.sender.openid},success:function(o){i.info.sender.is_star_member=!1,r.emit("onGroupFeedChange",t({product:i},{})),e.setData({showStarPop:!1,showStarPopMask:!1}),r.emit("delStarMember",{groupId:e.data.groupId,openids:[i.info.sender.openid]})},fail:function(e){o.default.showErrTips(e.errmsg||"系统繁忙"),console.error("delStar error",e)},complete:function(){wx.hideLoading()}}),f.report({type:g.delStarMember,ext:{group_id:this.data.groupId,open_id:i.info.sender.openid}},this.data.pageName)},toGroupFeedList:function(){var e=this.data.groupId;this.isFriendFeed()?e="13104374716925600":this.isForwardFeed()&&(e=this.data.viewModel.forward_item.original_feed.info.group_id);var t=this.data.viewModel.info.openid;if(this.data.viewModel.info.user_in_group&&"profile"==this.data.sourceId||"group-feed-detail"===this.data.sourceId||"13104374716925601"==this.data.groupId){this.triggerEvent("clickGroupName",{groupId:e,openid:t},{bubbles:!0,composed:!0});var o=["group_id="+encodeURIComponent(e),"openid="+encodeURIComponent(t)];if(this.data.fromScene){var i=this.data.fromScene;"chat"==i&&"group-feed-detail"==this.data.pageName&&(i="chat-feed-to-profile");var n=this.ticketParams();o.push("fromScene="+i),o.push("invite_ticket="+encodeURIComponent(n.ticket||""))}a.navigateTo({url:"/portal/group-profile/group-profile?"+o.join("&")})}},toOriginalFeedDetail:function(){var e=this.data.viewModel,t=4==e.info.type?e.forward_item.original_feed:e;if(f.report({type:g.goToGroupFeedDetail,ext:{group_id:this.data.groupId||"",original_group_id:t.info.group_id||"",appid:t.appid,item_code:t.info.key,comment_id:t.info.comment_id,source:t.info.source}},this.data.pageName),4==e.info.type&&e.forward_item.original_feed_deleted)wx.showToast({title:"该推荐已删除",icon:"none"});else{var o={group_id:t.info.group_id,appid:t.appid,product_id:t.info.key,source:Number(t.info.source||0),comment_id:t.info.comment_id},i=["product_req="+encodeURIComponent(JSON.stringify(o)),"title="+encodeURIComponent("推荐详情")],n=this.ticketParams();if(this.data.fromScene&&n.ticket){var r=this.data.fromScene;"chat"==r&&"group-profile"==this.data.pageName&&(r="chat-profile-to-feed"),i.push("fromScene="+r),i.push("fromTicket="+encodeURIComponent(n.ticket||""))}else 4==e.info.type?i.push("fromScene=forward"):"my-recommend-list"===this.data.sourceId&&i.push("fromScene=myRecommend");a.navigateTo({url:"/portal/group-feed-detail/group-feed-detail?"+i.join("&"),complete:function(e){var t=e.product_req;console.info("navigateTo some params: product_req="+t)}})}},getReason:function(){var e=this;l.request({cgi:l.cgiSet.getReason,params:{type:6},success:function(t){e.queryClickPosition(t.reason)},fail:function(e){o.default.showErrTips(e.errmsg||"请重试"),console.error("get_reason error",e)}})},queryClickPosition:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t=a.filterReason(this.data.viewModel,t),t=[{name:"选择不喜欢的原因",id:-1}].concat(t),wx.createSelectorQuery().in(this).select("#ignore").boundingClientRect(function(o){o&&e.setData({showIgnoreDialog:!0,ignoreDialogChoices:t,ignoreClickPosition:{clientX:o.left,clientY:o.top}})}).exec()},onClickIgnore:function(){this.queryClickPosition(this.isFriendFeed()?getApp().globalData.timelineReasons:this.data.groupFeedReasons)},onClickChooseReason:function(e){var o={},i=this.data.viewModel;36!=e.detail.reason_id&&37!=e.detail.reason_id?(o=4==i.info.source?{biz_uin:i.info.appuin,item_code:i.info.key,source:i.info.source}:{biz_uin:i.product_item.biz_uin,item_code:i.product_item.item_code,source:i.product_item.source},this.setUninterested(t({comment_id:i.info.comment_id,group_id:this.isFriendFeed()?void 0:this.data.groupId,reason_id:e.detail.reason_id,reason_name:e.detail.reason_name},o))):this.alertBlockUser()},onClickMore:function(){var e=[],t=this.data.viewModel;this.isFriendFeed()||e.push({type:"custom",content:"转发给朋友"}),t.info.openid===i.Sys.userInfo.openid&&e.push({type:"custom",content:"删除",userInfo:{}}),this.setData({actionSheetId:"FeedAction",showActionSheet:!0,actionSheetItems:e})},setUninterested:function(e){var i=this;wx.showLoading(),l.request({cgi:l.cgiSet.uninterested,params:t({scene:this.isFriendFeed()?3:4,feedback_type:this.isFriendFeed()?5:6},e),success:function(t){o.default.showSuccessTips("已删除"),i.setData({showIgnoreDialog:!1},function(){i.triggerEvent("deletebyitem",{product:i.data.viewModel,reason_id:e.reason_id,reason_name:e.reason_name,group_id:i.data.groupId},{bubbles:!0,composed:!0}),i.emitGroupFeedChange({del:!0}),"group-feed-detail"==i.data.sourceId&&wx.navigateBack()})},fail:function(e){o.default.showErrTips("删除失败"),console.error("uninterested error",e)},complete:function(){wx.hideLoading()}})},blockUser:function(e){e&&(wx.showLoading(),l.request({cgi:l.cgiSet.addNotSee,params:{openids:[e]},success:function(t){r.emit("onBlockUser",{openids:[e]})},fail:function(e){o.default.showErrTips("删除失败"),console.error("add block user error",e)},complete:function(){wx.hideLoading()}}))},onClickGroupCard:function(){this.data.groupInfo.user_in_group&&a.navigateTo({url:"/pages/index/index?group_id="+this.data.groupInfo.id})},onModalCancel:function(){this.setData({modal:{show:!1}})},onModalConfirm:function(e){if(this.data.modal.userInfo){var t=this.data.modal.userInfo.type;"applyjoin"==t?this.triggerEvent("applyjoingroup",{groupId:this.data.groupId,applyReason:e.detail.inputValue},{bubbles:!0,composed:!0}):"join"==t?this.triggerEvent("joingroup",{groupId:this.data.groupId},{bubbles:!0,composed:!0}):"joinandapplycomment"==t?this.triggerEvent("joinandapplycomment",{groupId:this.data.groupId,applyReason:e.detail.inputValue},{bubbles:!0,composed:!0}):"apply"==t&&u({group_id:this.data.modal.userInfo.group_id,apply_reason:e.detail.inputValue})}this.setData({modal:{show:!1}})},onClickShareFeedDetail:function(){this.triggerEvent("clickShareFeedDetail",{},{bubbles:!0,composed:!0})},setStorePanelShow:function(e){r.emit("showFacePanel",{show:e})},handlePrivilegeCheck:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=function(t){return e.setData({modal:{show:!0,content:t.content,needInput:t.needInput,inputPlaceHolder:t.inputPlaceHolder,confirmText:t.confirmText,showCancel:!0,userInfo:t.userInfo}}),!0};if(!t.in_group&&t.open_join_confirm)return i({content:"需通过圈主确认才可加入，请描述申请理由。",needInput:!0,inputPlaceHolder:"申请理由",confirmText:"申请加入",userInfo:{type:"applyjoin"}});if(o==S.COMMENT){if(t.can_reply)return!1;if(!t.in_group&&t.reply_need_apply)return i({content:"圈主同意后才可评论，请描述申请理由。",needInput:!0,inputPlaceHolder:"申请理由",confirmText:"加入并申请",userInfo:{type:"joinandapplycomment",group_id:this.data.groupId}});if(t.in_group&&t.reply_need_apply)return i({content:"圈主同意后才可评论，请描述申请理由。",needInput:!0,inputPlaceHolder:"申请理由",confirmText:"申请",userInfo:{type:"apply",group_id:this.data.groupId}})}return!t.in_group&&i({content:"加入圈子后才可以"+C[o]+"，是否加入？",confirmText:"加入",userInfo:{type:"join"}})},queryPrivilegeCheck:function(e){var t=this,o=e.action,i=e.success;o!=S.CANCEL_LIKE&&o!=S.DELETE_COMMENT?this._lockQuery||(this._lockQuery=!0,_.get({group_id:this.data.groupId,success:function(e){t._lockQuery=!1,t.handlePrivilegeCheck(e,o)||"function"==typeof i&&i(e)},fail:function(e){t._lockQuery=!1,wx.showModal({content:e.errmsg||"请稍后重试",showCancel:!1})}})):"function"==typeof i&&i({})},getFirstPageLikeAndComment:function(){this.data.viewModel.info.like_info.length<=0&&this.getMoreLike(),this.data.viewModel.info.comment_list.length<=0&&this.getMoreComment()},getMoreLike:function(){return},getMoreComment:function(){var e=this;if(!(this.isFriendFeed()||this.isForwardFeed()||this.data.isLoadingComment)&&this.data.viewModel.info.comment_has_more){this.setData({isLoadingComment:!0});var o=this.data.viewModel;l.request({cgi:l.cgiSet.getCommentByPage,params:t({},this.ticketParams(),{father_comment_id:o.info.comment_id,seq:o.info.comment_next_seq}),success:function(i){var r={};i.userattr.forEach(function(e){r[e.openid]=e}),i.comment_list.forEach(function(e){a.handleCommentItem(e,r)});var s=o.info.comment_list.map(function(e){return e.comment_id}),d=o.info.comment_list.concat(i.comment_list.filter(function(e){return!s.includes(e.comment_id)})),c={viewModel:t({},o,{info:t({},o.info,{comment_has_more:i.has_more,comment_next_seq:i.next_seq,comment_list:d})})},u={viewModel:o},p=(0,n.default)(c,u);e.setData(p)},fail:function(e){wx.showModal({content:e.errmsg||"请稍后重试",showCancel:!1})},complete:function(t){e.setData({isLoadingComment:!1})}})}},getMoreReply:function(e){var o=this,i=e.currentTarget.dataset.comment,r=e.currentTarget.dataset.commentidx;if(!(this.isFriendFeed()||this.isForwardFeed()||this.data.isLoadingReply)&&i.reply_has_more){this.setData({isLoadingReply:!0});var s=this.data.viewModel;l.request({cgi:l.cgiSet.getReplyByPage,params:t({},this.ticketParams(),{father_comment_id:s.info.comment_id,reply_comment_id:i.comment_id,seq:i.reply_next_seq}),success:function(e){var i={};e.userattr.forEach(function(e){i[e.openid]=e}),e.reply.forEach(function(e){a.handleReplyItem(e,i)});var d=s.info.comment_list.slice(),c=d[r]=t({},d[r]),u=c.reply.map(function(e){return e.comment_id}),p=c.reply.concat(e.reply.filter(function(e){return!u.includes(e.comment_id)}));c.reply=p,c.reply_has_more=e.has_more,c.reply_next_seq=e.next_seq,c.reply_count=p.length;var l={viewModel:t({},s,{info:t({},s.info,{comment_list:d})})},m={viewModel:s},f=(0,n.default)(l,m);o.setData(f)},fail:function(e){wx.showModal({content:e.errmsg||"请稍后重试",showCancel:!1})},complete:function(e){o.setData({isLoadingReply:!1})}})}},ticketParams:function(){var e=this.data.viewModel,t={group_id:this.data.groupId,appid:e.appid,source:e.info.source,product_id:e.info.key};return this.data.ticketParams&&this.data.ticketParams.ticket&&Object.assign(t,this.data.ticketParams),t}}}); 
 			}); 	require("widget/recommend-group-comment/recommend-group-comment.js");
 		__wxRoute = 'widget/recommend-group-folder/recommend-group-folder';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/recommend-group-folder/recommend-group-folder.js';	define("widget/recommend-group-folder/recommend-group-folder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../utils/enum.js"),i=(function(e){e&&e.__esModule}(require("../../utils/toast.js")),require("../../utils/util")),t=require("../../libs/mmuxwxappdevkit/utils/exposeReporter.js"),o=require("../../core/sys.js"),r=(require("../../core/network.js"),require("../../core/eventcenter.js"),require("../../globalData"));Component({options:{addGlobalClass:!0},properties:{pageName:{type:String,value:""},index:Number,viewModel:Object,titleIndex:Number},data:{maxWidth:"100%",minWidth:"100%",img1Width:o.windowWidth-32,img1Height:(o.windowWidth-32-2)/2,margin:2,GROUP_ID_FRIENDS:"13104374716925600",GROUP_ID_FORWARD:"13104374716925601",ignoreDialogChoices:[],showIgnoreDialog:!1,ignoreClickPosition:{}},attached:function(){var e=this,i=function(){return(o.windowWidth-32)/3-e.data.margin};this.setData({maxWidth:2*i()+e.data.margin,minWidth:i(),isGroupApp:r.isGroupApp})},ready:function(){var o=this;this.exposeObserver=t.init({self:this,selector:".wrapGroupApp",success:function(){return{type:e.PageActionType.IndexGroupFolderExposure,ext:{index:o.data.index,group_id:o.data.viewModel.group_item.id,page_name:i.getCurrentPage().route.split("/")[2]}}}})},detached:function(){this.exposeObserver&&this.exposeObserver.disconnect()},methods:{toProfile:function(e){var t=this.data.viewModel.group_item,o=void 0===t?{}:t,r={base:{id:o.id,group_id:o.group_id,head_img_url:o.head_img_url,name:o.name},member_num:0,owner:{openid:""}},n=e.currentTarget.dataset.id||"",d=e.currentTarget.dataset.feed,a="";d&&(a=d.appuin+"_"+d.key+"_"+d.source+"_"+d.comment_id),this.triggerEvent("click",{index:this.data.index,group_id:this.data.viewModel.group_item.id,feed_id:a,unique_id:this.data.viewModel.unique_id});var s=["/portal/group-profile/group-profile?","group_id="+this.data.viewModel.group_item.group_id+"&","toFeedId="+encodeURIComponent(n)+"&","group_info="+encodeURIComponent(JSON.stringify(r))+"&"];this.data.viewModel.group_item.isSystemGroup&&(s=s.concat(["fromScene="+encodeURIComponent("systemGroup")+"&","invite_ticket="+encodeURIComponent(this.data.viewModel.group_item.ticket)+"&"])),i.navigateTo({url:s.join("")})}}}); 
 			}); 	require("widget/recommend-group-folder/recommend-group-folder.js");
 		__wxRoute = 'widget/recommend-group-item/recommend-group-item';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/recommend-group-item/recommend-group-item.js';	define("widget/recommend-group-item/recommend-group-item.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},t=function(e){return e&&e.__esModule?e:{default:e}}(require("../../utils/toast.js")),i=require("../../utils/util.js"),o=require("../../utils/enum.js"),r=require("../../utils/gotoChatUtil.js"),a=require("../../libs/mmuxwxappdevkit/index.js"),s=o.IDKeyDefine,n=o.PageActionType,d=a.Sys,c=a.IdKey,u=require("../../core/eventcenter.js"),p=require("../../models/addOpenProduct.js"),l=require("../../models/deleteOpenProduct.js"),h=require("../../libs/mmuxwxappdevkit/utils/exposeReporter.js"),m=require("../../libs/mmuxwxappdevkit/utils/actionReporter.js"),f=require("../../utils/backgroundAudioManager.js"),g=require("../../utils/readReporter"),_=require("../../globalData"),v=require("../../core/network.js"),w=require("../../utils/ticket").getTicket;Component({options:{addGlobalClass:!0},properties:{inGroup:{type:Number,value:0},pageName:{type:String,value:""},viewModel:{type:Object,value:null,observer:function(e){}},sourceId:{type:String,value:""},groupId:{type:String,value:""},groupInfo:{type:Object,value:{}},groupName:{type:String,value:""},currentFocusId:{type:String,value:""},recommentIdKey:{type:String,value:""},groupFeedReasons:{type:Array,value:[]},restrictInteract:{type:Boolean,value:!1},isSystemGroup:{type:Boolean,value:!1},index:Number,fromScene:String,inviteTicket:String,ticketParams:Object,videoAutoPlay:{type:Boolean,value:!1},upsideDown:{type:Boolean,value:!1},videoControllable:{type:Boolean,value:!1},videoAutoDirection:{type:Boolean,value:!1}},data:{width:d.windowWidth-32,customHeight:d.windowWidth,userOpenId:"",showContact:!1,showActionSheet:!1,isMusic:!1,musicStatus:"stop",actionSheetId:"",actionSheetTitle:"",actionSheetItems:[],canvasWidth:"ios"!==d.platform||_.isGroupApp?232:.56*d.windowWidth,canvasHeight:"ios"!==d.platform||_.isGroupApp?185.6:.56*d.windowWidth*.56,showCanvas:!1},ready:function(){var e=this,t=this.getOriginalFeed(this.data.viewModel),o=this.data.customHeight;if(this.data.viewModel.video_item){var r=this.data.viewModel.video_item.width,a=this.data.viewModel.video_item.height;if(r>0&&a>0){var s=o*a/r;s<=o&&(o=s)}}this.setData({userOpenId:d.userInfo&&d.userInfo.openid,customHeight:o},function(){e.exposeObserver=h.init({self:e,selector:".wrap",data:{type:n.GroupFeedExposure,ext:{group_id:e.data.groupId||"13104374716925600",appid:t.appid,item_code:t.isUGC?t.ugc_item.key:t.product_item.item_code,comment_id:t.info.comment_id,is_me:e.isMyProfile(),page_name:i.getCurrentPage().route.split("/")[2]}}})}),this.isNeedReportRead()&&this.reportRead()},attached:function(){u.register(u.Event.onKfStatusUpdate,this)},detached:function(){u.unregister(u.Event.onKfStatusUpdate,this),d.feedShareObj=this.feedShareObj=null,this.exposeObserver&&"function"==typeof this.exposeObserver.disconnect&&this.exposeObserver.disconnect(),this.isNeedReportRead()&&this.readReporter&&this.readReporter.reportAll&&this.readReporter.reportAll()},methods:{getOriginalFeed:function(e){return e?4==e.info.type?e.forward_item.original_feed:e:{}},isFromMyRecommendList:function(){return"my-recommend-list"===this.data.sourceId},isMyProfile:function(){return"profile"===this.data.sourceId&&this.data.viewModel.selfOpenId===this.data.viewModel.info.openid},isFriendFeed:function(){return"0"==this.data.groupId||"13104374716925600"==this.data.groupId||""==this.data.groupId},isNeedReportRead:function(){return["group-feed-list","profile","index-recommend","index-group-recommend"].indexOf(this.data.sourceId)>-1},mediaPlay:function(){var e=this.data.viewModel.product_item;f.play({id:this.data.viewModel.unique_id,src:"http://sh-musiclist.weixin.qq.com/playmusic?name="+encodeURIComponent(e.title)+"&singer="+encodeURIComponent(e.desc),title:e.title,singer:e.desc,coverImgUrl:e.image_cdn_list[0].image_cdn_url,startTime:0})},mediaStop:function(){f.stop()},onAudioPlay:function(e){e&&e.id===this.data.viewModel.unique_id&&this.setData({musicStatus:"play"})},onAudioPause:function(e){e&&e.id===this.data.viewModel.unique_id&&this.setData({musicStatus:"pause"})},onAudioStop:function(e){e&&e.id===this.data.viewModel.unique_id&&this.setData({musicStatus:"stop"})},toMusicPlay:function(){var e=this.data.viewModel,t=e.product_item.src_wxapp_id||e.appid;m.report({type:n.musicPlay,ext:{group_id:this.data.groupId||"",appid:t,item_code:e.product_item.item_code,comment_id:e.info.comment_id}},this.data.pageName),i.navigateToMiniProgram({appId:t,path:e.product_item.src_wxapp_path||"",extraData:{wxShoppingListScene:i.sourceIdToWxShoppingListScene(this.data.sourceId)},envVersion:"release"})},toPreviewImage:function(e){var t=e.currentTarget.dataset,i=t.images,o=t.index,r=i.map(function(e){return e.url+"/0"});wx.previewImage({current:r[o],urls:r,fail:function(){console.info("previewImage error")}})},reportRead:function(){var t=this.data.viewModel,o={};t.ugc_item&&t.ugc_item.key?(o.appuin=t.ugc_item.appuin,o.key=t.ugc_item.key,o.source=t.ugc_item.source):(o.appuin=t.product_item.biz_uin,o.key=t.product_item.item_code,o.source=t.product_item.source),this.readReporter=new g({self:this,readTime:_.readInfo.read_time_threshold,maxReportLen:_.readInfo.upload_num_threshold,intervalTime:_.readInfo.upload_time_interval});var r=this.data.sourceId;"chat"===this.data.fromScene&&(r="invite-group-feed-list");var a=i.sourceIdToReportReadScene(r);this.readReporter.createIntersectionObserver({thresholds:[.5]}).relativeToViewport({}).observe({selector:".group-feed-"+this.data.index,reportData:e({},o,{comment_id:t.info.comment_id,scene:a,group_id:this.data.groupId,recommend_uin:t.info.recommend_uin,openid:t.info.openid,ticket:this.data.inviteTicket})})},onClick:function(){var e=this.data.viewModel.base,t=e.id,o=e.name,r=e.member_count;i.navigateTo({url:"/portal/group-profile/group-profile?group_id="+encodeURIComponent(t)+"&title="+encodeURIComponent(o+"("+r+")"),complete:function(e){var t=e.title,i=e.group_id;console.info("navigateTo some params: title="+t+"&group_id="+i)}})},onClickFav:function(e){e.detail.product.is_want_buy?this.onClickRemoveFavorite(e):this.onClickAddFavorite(e)},onClickRemoveFavorite:function(e){var i=this.data.viewModel,o=e.detail.product,r=this;l({appid:o.appid||o.product_item.src_wxapp_id,item_code:o.product_item.item_code,source:o.product_item.source,success:function(){wx.showToast({title:"已取消",icon:"success",duration:1500}),o.is_want_buy=!1,i.isUGC?(i.ugc_item.info.forEach(function(e){e.product_info=e.product_info.map(function(e){return e.appid==o.appid&&e.product_item.item_code==o.product_item.item_code?o:e})}),r.setData({viewModel:i})):r.setData({viewModel:o}),r.triggerEvent("removefavorite",{appid:i.appid,item_code:i.info.key,comment_id:i.info.comment_id},{bubbles:!0,composed:!0})},fail:function(){t.default.showErrTips("取消失败")}})},onClickAddFavorite:function(e){var i=this.data.viewModel,o=e.detail.product,r=this;p({appid:o.appid||o.product_item.src_wxapp_id,item_code:o.product_item.item_code,source:o.product_item.source,from_scene:6,success:function(){wx.showToast({title:"已收藏",icon:"success",duration:1500}),o.is_want_buy=!0,i.isUGC?(i.ugc_item.info.forEach(function(e){e.product_info=e.product_info.map(function(e){return e.appid==o.appid&&e.product_item.item_code==o.product_item.item_code?o:e})}),r.setData({viewModel:i})):r.setData({viewModel:o})},fail:function(){t.default.showErrTips("收藏失败"),c.report(d.alarmId,s.RecommentListAddGoodsError)}}),this.triggerEvent("addfavorite",{appid:i.appid,item_code:i.info.key,comment_id:i.info.comment_id,action:1,docID:i.docID,statBuffer:i.statbuf},{bubbles:!0,composed:!0})},toProductDetail:function(e){var t=e.detail.product,o=t.product_item,r=this.data.viewModel;this.triggerEvent("toproductdetail",{appid:t.appid,item_code:o.item_code,comment_id:r.info.comment_id,open_id:r.info.openid},{bubbles:!0,composed:!0}),this.isH5Product(o)?i.toH5(o):this.jumpToMiniProgram(t)},isH5Product:function(e){return i.isH5Product(e)},jumpToMiniProgram:function(e){var t=10002;"group-feed-detail"!==this.data.sourceId&&"group-feed-list"!==this.data.sourceId||(t=10006),i.navigateToMiniProgram({appId:e.product_item.src_wxapp_id||e.appid||"",path:e.product_item.src_wxapp_path||"",extraData:{wxShoppingListScene:t},envVersion:"release"})},toArticleList:function(){var e=this.data.viewModel.product_item.title;e.length>4&&(e=e.slice(0,4)+"..."),i.navigateTo({url:"/portal/article-list/article-list?list="+encodeURIComponent(JSON.stringify(this.data.viewModel.articleList))+'&pageTitle="'+e+'"的相关评价'})},_isSendCommentBySelf:function(e){return e.info.openid===d.userInfo.openid},toShare:function(e){var t=this,o=e.detail.product,r=this.data.viewModel,a=this._isSendCommentBySelf(r),s=encodeURIComponent(r.share_key),n=i.appendQueryObject("/portal/share-product-detail/share-product-detail",{appid:o.appid,product_id:encodeURIComponent(o.product_item.item_code||""),source:o.product_item.source,page_ref:this.data.sourceId,share_key:s});try{var d=!1;a&&(d=!0);var c=o.product_item.title,u={appid:r.appid,item_code:r.info.key,comment_id:r.info.comment_id};this.triggerEvent("shareclick",u,{bubbles:!0,composed:!0}),i.shareAppMessageForFakeNative({title:"为你推荐好物",path:n,desc:c,imageUrl:o.product_item.image_list[0]+"/750",bizType:1,disableForward:d,success:function(e){t.triggerEvent("shareover",u,{bubbles:!0,composed:!0})},fail:function(e){t.triggerEvent("shareover",u,{bubbles:!0,composed:!0}),console.info("wx.shareAppMessageForFakeNative failed, res:",e)}})}catch(e){console.info("share exception",e)}},getShareKey:function(e){var t=e.params,i=e.success,o=e.fail;v.request({cgi:v.cgiSet.getShareKey,params:t,success:function(e){i&&i(e.share_key)},fail:function(e){o&&o(e),wx.hideLoading(),wx.showToast({title:e.errmsg,icon:"none"}),console.error("getShareKey fail",e)},complete:function(){}})},getShareTitle:function(){var e=this.data.viewModel,t=e.info.sender.original_nickname||e.info.sender.nickname,i=(e.info.comment||"").replace(/\n/g,"");return i?t+": "+i:t+"的好物推荐"},getShareDesc:function(e){var t=[];return e.info.forward_count&&t.push(e.info.forward_count+"个好"),e.info.comment_count&&t.push(e.info.comment_count+"个评论"),t.join(" ")},getShareImgUrl:function(o){var r=this,a=function(e){return new Promise(function(i,o){wx.getImageInfo({src:e,success:function(e){var t=e.path,o=e.width,r=e.height;i({path:t,width:o,height:r})},fail:function(e){o(e),console.error("wx.getImageInfo error",e),t.default.showErrTips(e.errMsg)}})})},s=function(e){var t=e.width,i=e.height,o=e.dw,r=e.dh;if(t>i){if(t/i>o/r){var a=o*i/r;return{sx:(t-a)/2,sy:0,sw:a,sh:i}}var s=r*t/o;return{sx:0,sy:(i-s)/2,sw:t,sh:s}}if(t/i<o/r){var n=r*t/o;return{sx:0,sy:(i-n)/2,sw:t,sh:n}}var d=o*i/r;return{sx:(t-d)/2,sy:0,sw:d,sh:i}},n=function(o){var a=o.imgInfos,n=o.isVideo,c=wx.createCanvasContext("myCanvas",r),u=r.data,p=u.canvasWidth,l=u.canvasHeight,h=a.length;if(n){var m=s(e({},a[0],{dw:p,dh:l})),f=s({width:96,height:96,dw:40,dh:40});c.drawImage(a[0].path,m.sx,m.sy,m.sw,m.sh,0,0,p,l),c.drawImage("/assets/icon-ugc-play.png",f.sx,f.sy,f.sw,f.sh,(p-40)/2,(l-40)/2,40,40)}else if(2===h){var g=(p-2)/2,v=s(e({},a[0],{dw:g,dh:l})),w=s(e({},a[1],{dw:g,dh:l}));c.drawImage(a[0].path,v.sx,v.sy,v.sw,v.sh,0,0,g,l),c.drawImage(a[1].path,w.sx,w.sy,w.sw,w.sh,g+2,0,g,l)}else if(3===h){var y="ios"!==d.platform||_.isGroupApp?(p-2)/2+15:l,I="ios"!==d.platform||_.isGroupApp?(p-2)/2-15:p-l-2,S=(l-2)/2,b=s(e({},a[0],{dw:y,dh:l})),x=s(e({},a[1],{dw:I,dh:S})),M=s(e({},a[2],{dw:I,dh:S}));c.drawImage(a[0].path,b.sx,b.sy,b.sw,b.sh,0,0,y,l),c.drawImage(a[1].path,x.sx,x.sy,x.sw,x.sh,y+2,0,I,S),c.drawImage(a[2].path,M.sx,M.sy,M.sw,M.sh,y+2,S+2,I,S)}c.draw(!1,function(){setTimeout(function(){wx.canvasToTempFilePath({canvasId:"myCanvas",x:0,y:0,width:p,height:l,destWidth:p*d.pixelRatio,destHeight:l*d.pixelRatio,success:function(e){i.uploadFile({filePath:e.tempFilePath,success:function(e){r.canvasToshareUrl=e,r.doShareWork()},fail:function(e){t.default.showErrTips("图片上传失败！")},complete:function(){wx.hideLoading()}}),c=null}},r)},200)})},c=function(e){var t=e.imgs,i=e.isVideo,o=void 0!==i&&i,r=[];t.forEach(function(e,t){r[t]=a(e)}),Promise.all(r).then(function(e){n({imgInfos:e,isVideo:o})}).catch(function(e){console.error(e)})},u=[],p=(u=o.video_item&&o.video_item.thumb_url?[o.video_item.thumb_url]:o.ugcImageList&&o.ugcImageList.length?(o.ugcImageList||[]).filter(function(e){return e&&e.url}).map(function(e){return e.url+"/360"}):(o.cdnImageList||[]).filter(function(e){return e&&e.url}).map(function(e){return e.url+"/360"})).slice(0,3);if(1===p.length){if(!o.video_item||!o.video_item.thumb_url)return this.canvasToshareUrl=p[0],void this.doShareWork();c({imgs:p,isVideo:!0})}else c({imgs:p})},getProductCommon:function(){var e=this.data.viewModel;return{appid:e.appid,source:e.product_item.source,product_id:e.product_item.item_code,comment_id:e.info.comment_id,group_id:this.data.groupId}},doShareWork:function(){var t=this;if(this.shareKey&&this.canvasToshareUrl&&!this.isshareAppMessageForFakeNative){wx.hideLoading();var o=function(){t.isshareAppMessageForFakeNative=!1,t.shareKey=null,t.canvasToshareUrl=null},r=e({},this.getProductCommon(),{shareKey:this.shareKey}),a=i.appendQueryObject("/portal/group-feed-detail/group-feed-detail",{product_req:encodeURIComponent(JSON.stringify(r)),title:encodeURIComponent("好物圈推荐"),fromScene:"chat"});if("devtools"!==d.platform)try{var s=this.data.viewModel,n={group_id:this.data.groupId||"13104374716925600",appid:s.appid,item_code:s.product_item.item_code,source:s.product_item.source,comment_id:s.info.comment_id};this.triggerEvent("shareclick",n,{bubbles:!0,composed:!0});var c=this.getShareTitle(s),u=this.getShareDesc(s);this.isshareAppMessageForFakeNative=!0,this.feedShareObj={title:c,path:a,desc:u,imageUrl:this.canvasToshareUrl+"/360",bizType:1,disableForward:!1,success:function(i){t.setData({showActionSheet:!1}),t.triggerEvent("shareover",e({},n,{share_successs:!0}),{bubbles:!0,composed:!0}),o()},fail:function(i){t.triggerEvent("shareover",e({},n,{share_successs:!1}),{bubbles:!0,composed:!0}),console.info("wx.shareAppMessageForFakeNative failed, res:",i),o()},complete:function(){t.setData({showCanvas:!1})}},this.finalShare()}catch(e){console.info("share exception",e)}else this.silentInitShare||i.navigateTo({url:a})}},finalShare:function(){_.isGroupApp?(d.feedShareObj=this.feedShareObj,this.silentInitShare||(d.currentShareType="feed",this.setData({actionSheetId:"FeedShare",showActionSheet:!0,actionSheetItems:[{type:"share",content:"去分享",color:"#000",userInfo:{},extra:{}}]}))):i.shareAppMessageForFakeNative(this.feedShareObj)},clickActionSheet:function(e){},hideActionSheet:function(){this.setData({showActionSheet:!1})},onClickShareFeedDetail:function(){this.silentInitShare=!1,this.toShareFeedDetail()},toShareFeedDetail:function(){var t=this;if(!this.isFriendFeed())if(this.feedShareObj)this.finalShare();else{this.silentInitShare||wx.showLoading({mask:!0});var o=this.data.viewModel;this.setData({showCanvas:!0},function(){t.getShareImgUrl(o)});var r=this.data.sourceId;"chat"===this.data.fromScene?"group-feed-detail"===this.data.sourceId?r="group-feed-detail":"group-feed-list"===this.data.sourceId&&(r="invite-group-feed-list"):"search"===this.data.fromScene&&(r="search");var a={},s=w(r);s?(a.scene=i.sourceIdToShareScene(r),a.ticket=s):(a.scene=0,a.openid=o.info.sender.openid),this.getShareKey({params:e({},this.getProductCommon(),a),success:function(e){t.shareKey=e,t.doShareWork()}})}},toContactSeller:function(){var e=this.data.viewModel.product_item,t=e&&e.sku_list&&e.sku_list[0]||{};r.gotoWithProduct({src_wxapp_id:e.src_wxapp_id,src_wxapp_path:e.src_wxapp_path,item_code:e.item_code,sku_id:t.sku_id,title:e.title,image_url:e.image_list[0],price:t.price,original_price:t.original_price,source:e.source},{appid:e.src_wxapp_id,profile_photo:this.data.viewModel.app_icon_url||"",enterScene:"recommend-detail"===this.data.sourceId?4:2})},toGEO:function(){var e=this.data.viewModel.product_item.firstPoi;e&&wx.openLocation({latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||""})},toShareProductDetail:function(e){var t=this.data.viewModel;4==t.info.type&&(t=t.forward_item.original_feed);var o=e.detail&&e.detail.product||this.data.viewModel,r=e.detail&&e.detail.index||0;if(this.isFromMyRecommendList()){m.report({type:n.goToGroupFeedDetail,ext:{group_id:this.data.groupId||"",original_group_id:t.info.group_id||"",appid:t.appid,item_code:t.info.key,comment_id:t.info.comment_id,source:t.info.source}},this.data.pageName);var a={group_id:t.info.group_id,appid:t.appid,product_id:t.info.key,source:Number(t.info.source||0),comment_id:t.info.comment_id},s=["product_req="+encodeURIComponent(JSON.stringify(a)),"title="+encodeURIComponent("推荐详情"),"fromScene=myRecommend"];i.navigateTo({url:"/portal/group-feed-detail/group-feed-detail?"+s.join("&"),complete:function(e){var t=e.product_req;console.info("navigateTo some params: product_req="+t)}})}else{m.report({type:n.IndexTapProduct,ext:{group_id:this.data.groupId||"",appid:t.appid,item_code:t.product_item.item_code,source:t.product_item.source,comment_id:t.info.comment_id,openid:t.info.sender.openid}},this.data.pageName);var d=this._isSendCommentBySelf(t),c=this.data.sourceId;"profile"===this.data.sourceId&&(c=this.isFriendFeed()?"index-recommend":"group-feed-list");var u=["/portal/share-product-detail/share-product-detail?page_ref="+c+"&sourceId="+c,"appid="+o.appid,"product_id="+encodeURIComponent(o.product_item.item_code||""),"source="+(o.product_item.source||""),"share_key="+encodeURIComponent(t.share_key||""),"isSelf="+(d?1:0),"recommend="+encodeURIComponent(JSON.stringify(t)),"recommendIdx="+r].join("&");i.navigateTo({url:u,complete:function(e){var t=e.appid,i=e.product_id,o=e.source;console.info("navigateTo some params: appid="+t+"&product_id="+i+"&source="+o)}})}},onKfStatusUpdate:function(){this.setData({showContact:r.canShowContactSellerWithBizUin(this.data.viewModel.product_item.biz_uin)})},onInputShow:function(e){this.triggerEvent("inputshow",e.detail,{bubbles:!0,composed:!0})},onInputHide:function(e){this.triggerEvent("inputhide",e.detail,{bubbles:!0,composed:!0})},onInputPop:function(e){this.triggerEvent("inputpop",e.detail,{bubbles:!0,composed:!0})},onUpdateProduct:function(e){this.setData({viewModel:e.detail})}}}); 
 			}); 	require("widget/recommend-group-item/recommend-group-item.js");
 		__wxRoute = 'widget/selectable-view/selectable-view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/selectable-view/selectable-view.js';	define("widget/selectable-view/selectable-view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(function(t){t&&t.__esModule})(require("../../utils/toast.js")),require("../../libs/mmuxwxappdevkit/index.js"),require("../../utils/enum.js"),require("../../core/eventcenter.js"),require("../../utils/util.js"),require("../../core/network.js");Component({options:{addGlobalClass:!0},properties:{pageName:{type:String,value:""},isinline:{type:Boolean,value:!1}},data:{lock:!1},attached:function(){},ready:function(){},detached:function(){},methods:{onTap:function(t){this.data.lock&&t.stopPropagation&&t.stopPropagation()},onTouchEnd:function(t){var e=this;this.data.lock&&setTimeout(function(){e.setData({lock:!1})},100)},onLongPress:function(t){this.setData({lock:!0})}}}); 
 			}); 	require("widget/selectable-view/selectable-view.js");
 		__wxRoute = 'widget/simple-image/simple-image';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/simple-image/simple-image.js';	define("widget/simple-image/simple-image.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=Object.assign||function(o){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])}return o},a=require("../../core/sys.js"),e=require("../../libs/mmuxwxappdevkit/index.js").IdKey,t=require("../../utils/enum.js").IDKeyDefine;Component({properties:{src:{type:String,observer:function(o,a){o!=a&&(this.abortDownloadTask(),this.setData({loaded:!1}))}},mode:{type:String,value:"scaleToFill"},placeholder:String},data:{loaded:!1},methods:{onLoad:function(){this.setData({loaded:!0})},onError:function(){var n=this,r=this.data.src||"",s=void 0;(r.indexOf("https://shp.qpic.cn")>=0||r.indexOf("https://bs.qpic.cn")>=0)&&(console.info("try download url "+r),this.abortDownloadTask(),this.donwloadTask=wx.downloadFile({url:r,success:function(o){e.report(a.alarmId,t.LoadImageFallbackDownloadSuccess),console.info("download url success "+r);var s=o.filePath||o.tempFilePath;n.data.src===r&&s&&n.setData({src:s})},fail:function(n){if(!(n.errMsg.indexOf("abort")>=0)){e.report(a.alarmId,t.LoadImageFallbackDownloadFail);var l=o({},s,n,{url:r});console.error("download url fail: ",l)}},complete:function(){n.donwloadTask=null}}),this.donwloadTask.onHeadersReceived(function(o){s=o}))},abortDownloadTask:function(){this.donwloadTask&&this.donwloadTask.abort(),this.donwloadTask=null}}}); 
 			}); 	require("widget/simple-image/simple-image.js");
 		__wxRoute = 'widget/single-recommend-comment-item/single-recommend-comment-item';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/single-recommend-comment-item/single-recommend-comment-item.js';	define("widget/single-recommend-comment-item/single-recommend-comment-item.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(e){e&&e.__esModule}(require("../../utils/toast.js"));var e=require("../../libs/mmuxwxappdevkit/index.js"),t=require("../../core/eventcenter.js"),i=require("../../models/doReply.js"),o=require("../../utils/util.js"),n=require("../../core/network.js"),r=require("../../models/doOrderLike.js"),c=require("../../models/doVideoLike.js"),d=(require("../../utils/enum.js").IDKeyDefine,{not_this_item:"not_this_item",not_this_biz:"not_this_biz"}),s=["icon-semimi","icon-great"],a={};Component({options:{addGlobalClass:!0},properties:{pageName:{type:String,value:""},scrollDistance:{type:Number,observer:function(e,t){}},viewModel:{type:Object,observer:function(e,t,i){}},showDate:Boolean,showMeOnly:Boolean,timeline:Boolean,sourceId:String},data:{showFakeInput:!0,currentScrollDistance:0,IconList:s,inputFocusMap:{},noSelectQuery:!0,cacheKeyboardHeight:0,clickElBottom:0,inputHeight:0,screenHeight:0,inputFocusStatus:0,msgListId:"",clickElId:"",cacheContentMap:{},showActionSheet:!1,actionSheetId:"",actionSheetItems:[],replyParam:null,commentIdx:null,userUin:0,userOpenId:"",showIgnoreChoices:!1,showAnimate:!1,showIcons:!1,ignoreChoicesStyle:"",ignoreChoices:[{text:"不看这条推荐",type:d.not_this_item},{text:"不再看这个公众号的推荐",type:d.not_this_biz}],inputFocus:!1,inputValue:"",inputBottom:0,inputTop:0,placeHolder:"",unfoldMap:{},showUnfoldMap:{}},ready:function(){var i=wx.getSystemInfoSync(),o=i.windowHeight,n=88/(750/i.windowWidth);this.setData({screenHeight:o,inputHeight:n});var r=this.data.viewModel.favor_item.friend_list;this.setData({"viewModel.favor_item.friend_list":r,userUin:e.Sys.userUin||0,userOpenId:e.Sys.userInfo.openid||""}),t.register("onModComment",this),t.register("onRecommendInputConfirm",this),t.register("onRecommendInputHide",this)},detached:function(){t.unregister("onModComment",this),t.unregister("onRecommendInputHide",this),t.unregister("onRecommendInputConfirm",this)},methods:{onScroll:function(e){e.data&&(this.data.currentScrollDistance=e.deta.scrollTop)},onIndexPageScroll:function(){this.setData({showIcons:!1})},toggleIconLike:function(e){var t=e.currentTarget.dataset,i=t.commentidx,o=t.iconidx,n=this.data.viewModel.favor_item.friend_list[i];return n.like_info_has_self===String(o)?this.delIconLike(i):n.like_info_has_self?this.delThenAddIconLike(i,o):this.doIconLike(i,o)},doIconLike:function(t,i){var o=this,r=this.data.viewModel,c=r.favor_item.friend_list[t];n.request({cgi:n.cgiSet.doIconLike,params:{key:r.video_item?{appuin:r.video_item.appuin,key:r.video_item.key,source:r.video_item.source,comment_id:c.comment_id}:{appuin:r.product_item.biz_uin||r.product_item.src_wxapp_id,key:r.product_item.item_code,source:r.product_item.source,comment_id:c.comment_id},like:{type:1,value:String(i)}},success:function(){c.like_info.push({openid:e.Sys.userInfo.openid,headimgurl:e.Sys.userInfo.avatar,username:e.Sys.userInfo.username,value:String(i)}),c.like_info_has_self=String(i),o.setData({showIcons:!1,viewModel:r}),o.triggerEvent("updateproduct",r)},fail:function(){}})},delThenAddIconLike:function(t,i){var o=this,r=this.data.viewModel,c=this.data.viewModel.favor_item.friend_list[t];n.request({cgi:n.cgiSet.delIconLike,params:{key:r.video_item?{appuin:r.video_item.appuin,key:r.video_item.key,source:r.video_item.source,comment_id:c.comment_id}:{appuin:r.product_item.biz_uin||r.product_item.src_wxapp_id,key:r.product_item.item_code,source:r.product_item.source,comment_id:c.comment_id}},success:function(){n.request({cgi:n.cgiSet.doIconLike,params:{key:r.video_item?{appuin:r.video_item.appuin,key:r.video_item.key,source:r.video_item.source,comment_id:c.comment_id}:{appuin:r.product_item.biz_uin||r.product_item.src_wxapp_id,key:r.product_item.item_code,source:r.product_item.source,comment_id:c.comment_id},like:{type:1,value:String(i)}},success:function(){c.like_info=c.like_info.filter(function(t){return t.openid!==e.Sys.userInfo.openid}),c.like_info.push({openid:e.Sys.userInfo.openid,headimgurl:e.Sys.userInfo.avatar,username:e.Sys.userInfo.username,value:String(i)}),c.like_info_has_self=String(i),o.setData({showIcons:!1,viewModel:r}),o.triggerEvent("updateproduct",r)},fail:function(){}})},fail:function(){}})},delIconLike:function(t){var i=this,o=this.data.viewModel,r=this.data.viewModel.favor_item.friend_list[t];n.request({cgi:n.cgiSet.delIconLike,params:{key:o.video_item?{appuin:o.video_item.appuin,key:o.video_item.key,source:o.video_item.source,comment_id:r.comment_id}:{appuin:o.product_item.biz_uin||o.product_item.src_wxapp_id,key:o.product_item.item_code,source:o.product_item.source,comment_id:r.comment_id}},success:function(){r.like_info=r.like_info.filter(function(t){return t.openid!==e.Sys.userInfo.openid}),r.like_info_has_self="",i.setData({showIcons:!1,viewModel:o}),i.triggerEvent("updateproduct",o)},fail:function(){}})},showLikeIcons:function(e){var t=e.currentTarget.dataset.commentidx;this.setData({showIcons:t})},hideLikeIcons:function(){var e=this;setTimeout(function(){e.setData({showIcons:!1})})},cancelLikeActionSheet:function(e){return},onRecommendInputConfirm:function(e){var t=this;e.product_id===this.data.sourceId+"_"+this.data.viewModel.product_item.item_code&&(this.data.cacheContentMap[e.comment_id]=e.cacheContent,this.sendReply(e.cacheContent,function(){e.cacheContent="",t.data.cacheContentMap[e.comment_id]=""}))},onRecommendInputHide:function(e){this.setData({showFakeInput:!0}),e.product_id===this.data.sourceId+"_"+this.data.viewModel.product_item.item_code&&(this.data.cacheContentMap[e.comment_id]=e.cacheContent)},openProfile:function(e){o.openProfile(e.currentTarget.dataset.userinfo.username)},onClickProductListQuery:function(e){return},hideActionSheet:function(){this.setData({showFakeInput:!0,actionSheetId:"",showActionSheet:!1})},clickActionSheet:function(e){"删除"===e.detail.content?"reply"===e.detail.userinfo.type?this.deleteReply(e.detail.userinfo.commentIdx,e.detail.userinfo.replyIdx):this.deleteRecommend(e.detail.userinfo):"取消"===e.detail.content&&this.delIconLike(e.detail.userinfo.commentIdx),this.setData({showFakeInput:!0})},onDeleteActionSheet:function(e){this.setData({actionSheetId:"Delete",showActionSheet:!0,actionSheetItems:[{type:"custom",content:"删除",color:"#ed4d3d",userInfo:e,extra:{}}]})},onClickProduct:function(e){this.triggerEvent("visit3rdgoodsdetail",e.currentTarget.dataset,{bubbles:!0,composed:!0})},onClickContact:function(e){var t=this.data.viewModel;this.triggerEvent("clickcontact",{product:t},{bubbles:!0,composed:!0})},onClickDelete:function(e){this.triggerEvent("delete",{product:this.data.viewModel,comment:e.currentTarget.dataset.comment},{bubbles:!0,composed:!0})},previewImage:function(e){var t=e.currentTarget.dataset,i=t.imgidx,o=t.commentidx,n=this.data.viewModel.favor_item.friend_list[o].item_url.map(function(e,t){return e+"?idx="+t});wx.previewImage({current:n[i],urls:n})},sendReply:function(e,t){var o=this,n=this.data.replyParam,r=n.ext_info.comment=e||this.data.inputValue;i.do({params:n,loading:!1,success:function(e){var i=o.data.newAddedMsg;i.comment=r,i.comment_id=e.comment_id,o.data.viewModel.favor_item.friend_list[o.data.commentIdx].msglist.push(i),o.setData({inputValue:"",viewModel:o.data.viewModel}),t&&t(),o.triggerEvent("updateproduct",o.data.viewModel),o.triggerEvent(1===n.ext_info.to_type?"docomment":"doreply",{appid:o.data.viewModel.appid,item_code:o.data.viewModel.product_item.item_code},{bubbles:!0,composed:!0})},fail:function(e){wx.showToast({title:"请稍后再试",icon:"none",duration:1500})},complete:function(){}})},deleteReply:function(e,t){var o=this,n=this.data.replyParam;n.action=0,wx.showLoading(),i.do({params:n,loading:!1,success:function(i){wx.hideLoading(),wx.showToast({title:"已删除",icon:"success",duration:1500}),o.data.viewModel.favor_item.friend_list[e].msglist.splice(t,1),o.setData({inputValue:"",viewModel:o.data.viewModel}),o.triggerEvent("updateproduct",o.data.viewModel),o.triggerEvent(1===n.ext_info.to_type?"delcomment":"delreply",{appid:o.data.viewModel.appid,item_code:o.data.viewModel.product_item.item_code},{bubbles:!0,composed:!0})},fail:function(e){wx.showToast({title:"删除失败",icon:"none"})},complete:function(){}})},toReply:function(e){var t=this;this.setData({showFakeInput:!1});var i=e.currentTarget.dataset,o=i.type,n=this.data.viewModel,r=n.favor_item.key,c=i.comment,d=i.commentidx,s=i.replyidx,a=void 0,m={appid:n.appid,product_id:n.product_item.item_code,source:n.product_item.source,action:1},u={sender:n.favor_item.selfInfo,comment:"",comment_id:0,item_url:[],owneropenid:n.favor_item.selfOpenId,to_openid:c.openid},l=this.data.viewModel.favor_item.favor_id,p=this.data.viewModel.favor_item.favor_id+"_",_={},f=void 0;if("ask"===o){if(5==r.type)return void(1==r.status&&this.triggerEvent("revokebyitem",{product:this.data.viewModel,commentId:c.comment_id},{bubbles:!0,composed:!0}));a="评论 "+c.NickName,u.to_type=1,u.receiver=c.sender,m.ext_info={to_openid:c.openid,item_url:[],to_type:1,comment:"",father_comment_id:c.comment_id},f=c,p+=c.comment_id,_["msg_"+n.favor_item.favor_id+"_"+c.comment_id]=!0}else if("reply"===o){var h=i.reply;if(m.ext_info={to_openid:h.owneropenid,item_url:[],to_type:2,comment:"",father_comment_id:c.comment_id},n.favor_item.selfOpenId===h.owneropenid)return m.ext_info.comment=h.comment,m.ext_info.comment_id=h.comment_id,delete m.ext_info.father_comment_id,delete m.ext_info.to_openid,this.setData({replyParam:m}),this.onDeleteActionSheet({commentIdx:d,replyIdx:s,type:"reply"});a="回复 "+h.sender.nickname,u.to_type=2,u.receiver=h.sender,f=h,p+=h.comment_id,_["msg_"+n.favor_item.favor_id+"_"+h.comment_id]=!0}f.cacheContent=this.data.cacheContentMap[f.comment_id]||"",f.product_id=this.data.sourceId+"_"+n.product_item.item_code,this.data.cacheKeyboardHeight=0;var v=this;this.setData({clickElId:p,msgListId:l,newAddedMsg:u,commentIdx:d,replyParam:m,curRefData:f,placeHolder:a,inputFocus:!0,inputFocusMap:_},function(){wx.createSelectorQuery().in(v).select("#msg_"+p).boundingClientRect(function(e){e.initTop=t.getInitTop(e),e.placeHolder=a,e.refData=f,v.triggerEvent("inputshow",{currentComment:e})}).exec()})},getInitTop:function(e){return e.top>=this.data.screenHeight-e.bottom?e.top-this.data.inputHeight:e.bottom},toRange:function(){o.navigateTo({url:"/portal/range/range?range="+encodeURIComponent(JSON.stringify(this.data.viewModel.favor_item.visible_friend_list))})},deleteRecommend:function(t){var i=this,o=this.data.viewModel,n=t.commentIdx,d=t.commentItem.comment_id;4!=o.product_item.source?r.do({appid:o.appid,id:o.product_item.item_code,source:o.product_item.source,action:0,comment_id:d,is_not_favor:!1,loading:!0,success:function(e){0===e.errcode&&(o.favor_item.friend_list.splice(n,1),i.triggerEvent("deletebyitem",{product:o}))},fail:function(t){console.error(t),e.IdKey.report(e.Sys.alarmId,IDKeyDefine.FavOrderCommentError)}}):c.do({action:0,source:o.product_item.source,appid:o.product_item.src_wxapp_id,id:o.product_item.item_code,comment_id:d,loading:!0,success:function(e){o.favor_item.friend_list.splice(n,1),i.triggerEvent("deletebyitem",{product:o})},fail:function(t){console.error(t),e.IdKey.report(e.Sys.alarmId,IDKeyDefine.FavOrderCommentError)}})},deleteByItem:function(e){var t=e.currentTarget.dataset;this.onDeleteActionSheet({commentIdx:t.commentidx,commentItem:t.comment,type:"recommend"})},onClickIgnore:function(t){var i=this,o=t.currentTarget.dataset.index;wx.createSelectorQuery().in(this).select("#ignore-biz-"+o).boundingClientRect().exec(function(t){console.error(t),t[0]&&(e.Sys.screenHeight<t[0].bottom+68+54+54?(console.error("bottom: "+(e.Sys.screenHeight-t[0].top)+"px; left: "+(t[0].left-2*e.Sys.screenWidth/3)+"px;"),i.setData({showIgnoreChoices:!0,showAnimate:!0,ignoreChoicesStyle:"bottom: "+(e.Sys.screenHeight-t[0].top)+"px; left: "+(t[0].left-2*e.Sys.screenWidth/3)+"px;"})):(console.error("top: "+t[0].bottom+"px; left: "+(t[0].left-2*e.Sys.screenWidth/3)+"px;"),i.setData({showIgnoreChoices:!0,showAnimate:!0,ignoreChoicesStyle:"top: "+t[0].bottom+"px; left: "+(t[0].left-2*e.Sys.screenWidth/3)+"px;"})))})},captureOutsideTouch:function(){this.setData({showAnimate:!1,showIgnoreChoices:!1})},onClickIgnoreChoice:function(e){var i=this,o=e.currentTarget.dataset.type,r=this.data.viewModel;o===d.not_this_item?n.request({cgi:n.cgiSet.deleteFavor,params:{favor_id:r.favor_item.favor_id},success:function(){t.emit(t.Event.onIgnoreRecommend,{product:r,reason:"id"}),i.captureOutsideTouch()},fail:function(){}}):o===d.not_this_biz&&n.request({cgi:n.cgiSet.blockBizProductFavor,params:{is_block:!0,biz_uin:r.favor_item.friend_list[0].uin},success:function(){t.emit(t.Event.onIgnoreRecommend,{product:r,reason:"id"}),i.captureOutsideTouch()},fail:function(){}})},onClickUnfold:function(e){var t=e.currentTarget.dataset.id;a[t]=!a[t],this.setData({unfoldMap:a})},onClickCloseCommentBtn:function(){this.triggerEvent("close")}}}); 
 			}); 	require("widget/single-recommend-comment-item/single-recommend-comment-item.js");
 		__wxRoute = 'widget/tmp-profile/tmp-profile';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/tmp-profile/tmp-profile.js';	define("widget/tmp-profile/tmp-profile.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},i=e(require("../../utils/toast")),o=e(require("../../libs/deep-obj-diff/index")),a=e(require("../../libs/westore/diff")),s=require("../../libs/mmuxwxappdevkit/index.js"),r=s.Reporter,n=require("../../core/network.js"),d=require("../../core/eventcenter.js"),u=require("../../models/applyComment"),c=require("../../utils/util.js"),l=s.Sys,h=require("../../models/getIndex.js"),p=require("../../models/getUnReadMsgCnt.js"),g=require("../../models/getIndexGroup.js"),f=(s.IdKey,require("../../models/getUserRecommend")),m=require("../../models/getUserCreateGroupList"),v=require("../../libs/mmuxwxappdevkit/utils/exposeReporter.js"),_=require("../../globalData.js"),w=require("../../languagePackage"),I=require("../../models/groupHelper"),C=require("../../libs/mmuxwxappdevkit/utils/actionReporter.js"),M=require("../../utils/enum.js"),x=(M.IDKeyDefine,M.PageActionType),S=require("../../utils/ticket").updateGroupAttr,b={UNREAD:0,READ:1,ERR:2},L=void 0;Component({lasttimeseq:"",nexttimeseq:"",isRefresh:!1,options:{addGlobalClass:!0},properties:{pageName:{type:String,value:""},openid:String,groupId:String,groupName:String,fromScene:String,inGroup:Number,sessionId:String,showOrderRed:Number,showFavoriteRed:Number,orderHasHistory:Number,cartHasHistory:Number,showMessageRed:Number,unReadMsgCnt:Number,currentGroupId:{type:String,observer:function(e){}},triggerReload:{type:Number,observer:function(e,t){e==t+1&&this.onShow()}},triggerLoadNext:{type:Number,observer:function(e,t){e==t+1&&this.onReachBottom()}}},data:{pkg:{},phoneModel:l.phoneModel(),platform:l.platform,firendGroupId:c.firendGroupId,isShowLoading:!0,coverImageWidth:l.screenWidth,navigationBarHeight:l.navigationBarHeight(),pageScroll:"bottom",removeFakeCanvas:!1,mainBgColor:"#ededed",isGroupApp:_.isGroupApp,GROUP_ID_PREFIX:"id_",userInfo:null,profileShowAllFavor:!0,groupMap:{},isMe:!1,permissionWaiting:0,showAuthTip:!1,isGetUserProfileComplete:!1,signature:"",signatureFocus:!1,signatureLen:0,maxlimitWorld:30,editType:"",isEditSignature:!1,isStarMember:!1,allFeedIds:[],allFeedMap:{},virtualRecommendListLen:0,leftWaterfallIds:[],rightWaterfallIds:[],hasMore:!1,bottomTip:"",isGetFirstFeedPartcomplete:!1,isShowUserFeeds:!1,emptyTip:"",isShowFeedLoading:!0,isIncludeFriend:!1,myCreateGroupList:[],isGetCreateGroupComplete:!1,canCreateGroup:!1,isShowEntryComplete:!1,coverImageUrl:"",hasChatList:!1,hasInviteCode:!1,showInviteRed:!1},feedList:[],ready:function(){var e=this;d.register(d.Event.onClearRightTopReddot,this),d.register("onSetProfileShowAllFavor",this),d.register("onReloadUserProfileFeed",this),d.register("onGroupFeedChange",this),d.register("onEditSignatureConfirm",this),console.info("tmp-profile ready properties openid",this.data.openid),this.setData({isMe:this.data.openid===l.userInfo.openid,userInfo:this.data.openid===l.userInfo.openid?l.userInfo:null,isEditSignature:1==wx.getStorageSync(l.userInfo.openid+"_is_edit_signature")||!1,pkg:w.languagePkg["/portal/profile"]},function(){e.setData({maxlimitWorld:e.data.pkg.maxlimitWorld})}),this.user_profile_cache_key="user_profile_cache_"+l.userInfo.openid,L=(l.screenWidth-18)/2,this.initObserver(),this.getUserProfile({success:function(t){var i=e.data.pkg.hasNoneRecommend;e.setData({canCreateGroup:t.can_create_group_count>0||!1,isShowEntryComplete:!0}),t.profile_show_all_favor?e.setData({emptyTip:e.data.isMe?i.isMe:(t.is_friend,i.others)}):e.setData({complete:!0,emptyTip:e.data.isMe?i.isMe:(t.is_friend,i.others)})}}),this.isFromIndex()||(this.initFeedModel(),this.getFeedPage({loading:!1,count:5}))},detached:function(){d.unregister(d.Event.onClearRightTopReddot,this),d.unregister("onSetProfileShowAllFavor",this),d.unregister("onReloadUserProfileFeed",this),d.unregister("onGroupFeedChange",this),d.unregister("onEditSignatureConfirm",this),this._observer&&this._observer.disconnect&&this._observer.disconnect()},methods:{onHomeTap:function(){var e=getCurrentPages().map(function(e){return e.route}),t=e.indexOf(this.data.homePath||"pages/index/index");-1===t?wx.navigateTo({url:this.data.homePath?"/"+this.data.homePath:"/pages/index/index"}):wx.navigateBack({delta:e.length-t-1})},isFromIndex:function(){return"index-right-click"===this.data.fromScene},initContactModel:function(){this.joinGroupModel=g({group_owner_type:2,useCache:this.data.isMe,count:4,need_unread_count:!1})},getGroups:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.joinGroupModel&&this.joinGroupModel.loadNext({seq:t,success:function(t,i){var o={hasContactsMore:t.has_more&&t.contact.length>3};o.contacts=t.contact.slice(0,3),e.setData(o)},fail:function(e){console.error("get_others_by_page fail: ",e)}})},onReloadUserProfileJoinGroupList:function(){this.getGroups()},groupMemberCountEditComplete:function(e){this.createGroupModel.loadNext({data:{openid:this.data.openid}})},initObserver:function(){var e=this;this._observer||(this._observer=this.createIntersectionObserver({thresholds:[.1]}),this._observer.relativeToViewport({top:-this.data.navigationBarHeight}),this._observer.observe(".user-wrap",function(t){if(t){console.log(t.intersectionRatio);var i=t.intersectionRatio<=.1?"top":"bottom";e.setData({pageScroll:i})}}))},getCanCreateCount:function(e){var t=this;wx.showLoading({mask:!0}),n.request({cgi:n.cgiSet.checkCanCreate,params:{create_way:0},success:function(i){t.triggerEvent("groupcreateclick",{code:0},{bubbles:!0}),e&&e(i.count,i.can_create_msg||"你还可以创建"+(i.count||0)+"个圈子")},fail:function(e){t.triggerEvent("groupcreateclick",{code:e.errcode},{bubbles:!0}),wx.showModal({title:"",content:e&&e.errmsg,showCancel:!1,confirmText:t.data.pkg.confirmText}),console.error("checkCanCreate error",e)},complete:function(){wx.hideLoading()}})},preGetCanCreateCount:function(e){n.request({cgi:n.cgiSet.getCanCreateCount,params:{},success:function(t){e&&e(t.count>0)},fail:function(t){e&&e(!1)}})},addGroup:function(){this.data.canCreateGroup&&c.navigateTo({url:"/portal/group-add/group-add?canCreateGroupCount="+this.data.canCreateGroup+"}",complete:function(e){var t=e.canCreateGroupCount;e.canCreateMsg;console.info("navigateTo some params: canCreateGroupCount="+t)}})},createGroupBtnExpose:function(){this.addGroupBtnObserver&&this.addGroupBtnObserver.disconnect(),this.addGroupBtnObserver=v.init({self:this,selector:".create-group-btn",data:{type:x.GroupCreateShow,ext:{}}})},initFeedModel:function(){var e=this;this.feedModel=f({useCache:this.data.isMe,cachesuccess:function(i){console.log("get_user_recommend cache success",i),e.initFeedData(t({},i,{has_more:!0,isCache:!0}))},cgisuccess:function(i){console.log("get_user_recommend cgi success",i),e.updateGroupMap(i.groupattr),e.initFeedData(t({},i))},fail:function(e){console.error("get_user_recommend fail:",e),wx.showToast({title:"加载失败",image:"/assets/load_fail.png"})},complete:function(){e.setData({isShowLoading:!1,isShowFeedLoading:!1,isGetFirstFeedPartcomplete:!0})}})},initFeedData:function(e){this._handleList(e);(e.isCache||this.isRefresh||!this.seq)&&(this.allFeedList=[]),this.isRefresh&&(this.isRefresh=!1),e.isCache||(this.seq=e.next_seq||"");var i=c.mergeTimelineList(this._handleList(e),this.allFeedList).mergeList,s=(0,o.default)(this.allFeedList,i),r=[];for(var n in s)i[n]&&r.push(i[n]);this.allFeedList=i.slice();var d=this.allFeedList.map(function(e){return e.unique_id}),u={allFeedIds:d,diffFeedMap:{}};r.forEach(function(e){u.diffFeedMap[""+e.unique_id]=e});var l=t({},this.data.allFeedMap,u.diffFeedMap),h=u.allFeedIds.filter(function(e){return l[e]&&!l[e].deleted}).length,p=(0,a.default)({allFeedMap:l},{allFeedMap:this.data.allFeedMap}),g=t({allFeedIds:u.allFeedIds,virtualRecommendListLen:h},p);if(this.data.isGroupApp&&d&&d.length){var f=0,m=0,v=[],_=[];d.forEach(function(e){var t=l[e];if(t&&!t.deleted){if(!t.imgHWPercent){var i=void 0;t.video_item?(i=t.video_item).url=i.thumb_url:t.ugcImageList&&t.ugcImageList[0]?i=t.ugcImageList[0]:t.cdnImageList&&t.cdnImageList[0]&&(i=t.cdnImageList[0]),t.waterfallImg=i,t.imgHWRatio=i.height/i.width,t.imgHWRatio>3&&(t.imgHWRatio=3),t.imgHWPercent=100*t.imgHWRatio,t.waterfallBasicHeight=t.imgHWRatio*L+80}var o=t.waterfallBasicHeight;t.info.comment&&(o+=47),(t.info.like_count||t.info.comment_count)&&(o+=18),f<=m?(f+=o,v.push(e)):(m+=o,_.push(e))}}),g.leftWaterfallIds=v,g.rightWaterfallIds=_}this.setData(t({},g,{hasMore:e.has_more||!1,bottomTip:e.has_more?"加载更多":"没有更多推荐"}))},onReloadUserProfileFeed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.data.isMe&&(this.isRefresh=!0,this.feedModel&&this.feedModel.loadNext({data:{scene:0,openid:this.data.openid,seq:"",count:10,offset:0,isRefresh:this.isRefresh},loading:e.loading||!1}))},getFeedPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setData({isShowFeedLoading:!0}),this.feedModel.loadNext({data:{scene:0,openid:this.data.openid,group_id:this.data.groupId,seq:this.seq||"",count:e.count||10,offset:this.data.recommendListLen},loading:e.loading||!1})},deleteRecommend:function(e){var i={},o=this.data,a=o.allFeedIds,s=o.allFeedMap;if(s[e]){s[e].deleted=!0;var r=a.filter(function(e){return s[e]&&!s[e].deleted}).length;i.virtualRecommendListLen=r,i.bottomTip=this.data.hasMore?"加载更多":"没有更多推荐",i["allFeedMap."+e+".deleted"]=!0,this.setData(t({},i)),r<10&&this.onReachBottom()}},_setCustomData:function(e,i){var o=e.recommendList;if(o&&o.length){var a=0,s=0,r=[],n=[];o.forEach(function(e){if(!e.imgHWPercent){var t=void 0;e.video_item?(t=e.video_item).url=t.thumb_url:e.ugcImageList&&e.ugcImageList[0]?t=e.ugcImageList[0]:e.cdnImageList&&e.cdnImageList[0]&&(t=e.cdnImageList[0]),e.waterfallImg=t,e.imgHWRatio=t.height/t.width,e.imgHWRatio>3&&(e.imgHWRatio=3),e.imgHWPercent=100*e.imgHWRatio,e.waterfallBasicHeight=e.imgHWRatio*L+80}var i=e.waterfallBasicHeight;e.info.comment&&(i+=47),(e.info.like_count||e.info.comment_count)&&(i+=18),a<=s?(a+=i,r.push(e)):(s+=i,n.push(e))}),e.leftWaterfallItems=r,e.rightWaterfallItems=n}this.setData(t({},e,{hasMore:i.has_more||!1,bottomTip:i.has_more?"加载更多":"没有更多推荐"}))},_getListAndLen:function(e){var t=e.feed,i=void 0===t?[]:t,o=e.recommendListLen,a=e.virtualRecommendListLen,s={};return i.forEach(function(e,t){s["recommendList["+(o+t)+"]"]=e}),s.recommendListLen=o+i.length,s.virtualRecommendListLen=a+i.length,s},_handleList:function(e){var i=this,o=e.feed||[],a={},s=e.self_openid||l.userInfo&&l.userInfo.openid||"";return e.userattr&&e.userattr.forEach(function(e){a[e.openid]=e}),a[s]&&(l.userInfo=t({},l.userInfo,a[s])),o.forEach(function(e){e.info.openid=i.data.openid,e.info.isMe=i.data.isMe,c.handleGroupProductData(e,a,s)}),o},onShow:function(){this.getInviteCodeList()},onReachBottom:function(){this.data.isShowFeedLoading||this.data.hasMore&&this.feedModel&&this.getFeedPage()},updateRed:function(){var e=this;this.data.openid==l.userInfo.openid&&(h.reload({success:function(t,i){void 0===t.auth_read_status&&(t.auth_read_status=b.READ),e.setData({cartHasHistory:t.want_buy.has_history||!1,orderHasHistory:t.has_buy.has_history||!1,showAuthTip:i?e.data.showAuthTip:t.auth_read_status===b.UNREAD})}}),n.request({cgi:n.cgiSet.redDotGet,params:{},success:function(t){var i=t.order_red_dot_index,o=t.favorite_red_dot_index,a=t.message_red_dot_index;e.setData({showOrderRed:i.value||0,showFavoriteRed:o.value||0,showMessageRed:a.value||0})}}),p.get({success:function(t){console.info("aaaaaa",t),e.setData({unReadMsgCnt:t.unread_count||0,hasChatList:t.has_chat_list||!1})}}),n.request({cgi:n.cgiSet.getInviteCodeList,params:{},success:function(t){e.setData({hasInviteCode:(t.invite_code||[]).filter(function(e){return 1==e.status}).length>0,codeNum:(t.invite_code||[]).filter(function(e){return 1==e.status}).length})}}),n.request({cgi:n.cgiSet.redDotGet,params:{},success:function(t){var i=t.invite_code_red_dot_index||{};e.setData({showInviteRed:i.value||0})}}))},getInviteCodeList:function(){var e=this;this.data.openid===l.userInfo.openid&&this.isFromIndex()&&n.request({cgi:n.cgiSet.getInviteCodeList,params:{},success:function(t){e.setData({hasInviteCode:(t.invite_code||[]).filter(function(e){return 1==e.status}).length>0,codeNum:(t.invite_code||[]).filter(function(e){return 1==e.status}).length})}})},toInviteCodeList:function(){var e=this;c.navigateTo({url:["/portal/invite-code-list/invite-code-list"].join("")}),this.data.showInviteRed&&setTimeout(function(){e.setData({showInviteRed:!1}),e.clearRedDot(["invite_code_red_dot_index"])},100)},showInviteCodeModel:function(){var e=this;setTimeout(function(){wx.showModal({content:e.data.pkg.inviteCodeModalCont,showCancel:!1,confirmText:e.data.pkg.confirmText})},100)},clearRedDot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.length<=0||n.request({cgi:n.cgiSet.redDotClear,params:{clear_info:e.map(function(e){return{key:e}})}})},onClickLeftTopBtn:function(){wx.navigateBack()},onClickSectionItem:function(e){var t=this;if(this.data.isMe){var i=e.currentTarget.dataset.path;"消息"==e.currentTarget.dataset.itemname&&(this.statEnterMessage&&this.statEnterMessage({has_red_dot:this.data.showMessageRed+this.data.unReadMsgCnt>0}),this.data.showMessageRed&&(r.report({logId:16499,logString:["shopping-list","msg-red-dot",2,this.data.sessionId,"4"].join(",")}),setTimeout(function(){t.setData({showMessageRed:0,unReadMsgCnt:0})},500)),n.request({cgi:n.cgiSet.redDotClear,params:{clear_info:[{key:"show_red"},{key:"outer_show_red"},{key:"message_red_dot_index"}]}})),c.navigateTo({url:i})}},toPaper:function(){wx.openUrl({url:"https://wsad.weixin.qq.com/wsad/zh_CN/htmledition/plugin-agreement/index.html"})},onClearRightTopReddot:function(){this.setData({showAuthTip:!1})},toGroupFeedList:function(e){var t=e.currentTarget.dataset.item,i=e.currentTarget.dataset.type,o={},a="";"create"===i?(o={base:t,member_num:t.member_count,owner:{openid:this.data.openid},isCanJudgeInGroup:this.data.isMe},a="my-create-group"):"join"===i&&(o={base:t.base,member_num:t.base.member_count,owner:{openid:t.is_group_owner?this.data.openid:""},isCanJudgeOwner:this.data.isMe,isCanJudgeInGroup:this.data.isMe},a="my-join-group"),this.triggerEvent("clickGroupName",{groupId:o.base.id,sourceId:a},{bubbles:!0,composed:!0}),c.navigateTo({url:["/portal/group-profile/group-profile?","group_id="+encodeURIComponent(o.base.id)+"&","openid="+encodeURIComponent(this.data.openid)+"&","group_info="+encodeURIComponent(JSON.stringify(o))].join(""),complete:function(e){var t=e.group_id,i=e.openid;console.info("navigateTo some params: group_id="+t+"&openid="+i)}})},toGroupList:function(){this.data.hasContactsMore&&(this.triggerEvent("togrouplist",{},{bubbles:!0,composed:!0}),c.navigateTo({url:["/portal/group-list/group-list?"].join("")}))},toPermissionList:function(e){c.navigateTo({url:"/portal/permission-new/permission-new?show_unread="+(this.data.showAuthTip?"1":"")})},toToCao:function(){c.toTuCao()},onSignatureEdit:function(e){this.data.isMe&&this.isFromIndex()&&c.navigateTo({url:["/portal/content-edit/content-edit?","contType=textarea&","placeholder="+encodeURIComponent(this.data.pkg.signaturePlaceholder)+"&","pageTitle="+encodeURIComponent(this.data.pkg.signatureTitle)+"&","editCont="+encodeURIComponent(this.data.signature)+"&","sourceId=profile"].join("")})},onEditSignatureConfirm:function(e){var t=e.value,i=void 0===t?"":t,o=e.contLen;(void 0===o?0:o)>this.data.maxlimitWorld?wx.showModal({title:"",content:c.replacePlaceholder(this.data.pkg.signatureMaxTip,[this.data.maxlimitWorld]),showCancel:!1,confirmText:this.data.pkg.confirmText}):this.signatureConfirm(i)},signatureConfirm:function(e){var t=this;e=e.replace(/\n/g,""),this.setUserProfile({params:{signature:e},success:function(i){wx.setStorageSync(l.userInfo.openid+"_is_edit_signature",1),t.setUserProfileCache({coverImageUrl:t.data.coverImageUrl,signature:t.data.signature}),t.setData({isEditSignature:!0,signature:e}),d.emit("contentEditNavigateBack")}})},getUserProfile:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.data.isMe){var i=wx.getStorageSync(this.user_profile_cache_key),o=i.coverImageUrl,a=i.signature;this.setData({coverImageUrl:o,signature:a})}n.request({cgi:n.cgiSet.getUserProfile,params:{openid:this.data.openid,group_id:this.data.groupId},success:function(i){var o=i.userattr.signature||"",a=i.userattr.cover_image_url||"",s=i.userattr.is_star_member||!1;e.setUserProfileCache({coverImageUrl:a,signature:o}),e.setData({userInfo:i.userattr||null,profileShowAllFavor:i.profile_show_all_favor||!1,isGetUserProfileComplete:!0,signature:o,coverImageUrl:a,isStarMember:s,signatureLen:o.length,isIncludeFriend:i.is_friend||!1}),"function"==typeof t.success&&t.success(i)},fail:function(e){wx.showToast({title:"加载失败",image:"/assets/load_fail.png"}),console.error("getUserProfile fail: ",e),"function"==typeof t.fail&&t.fail(e)}})},setUserProfile:function(e){var t=this,i=e.params,o=void 0===i?{}:i,a=e.success;wx.showLoading({title:"请稍候...",mask:!0}),n.request({cgi:n.cgiSet.setUserProfile,params:o,success:function(e){a&&a(e)},fail:function(e){wx.showModal({content:e&&e.errmsg||"修改信息失败",showCancel:!1,confirmText:t.data.pkg.confirmText}),console.error("setUserProfile fail: ",e)},complete:function(){wx.hideLoading()}})},setUserProfileCache:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.data.isMe&&wx.setStorageSync(this.user_profile_cache_key,e)},onSetProfileShowAllFavor:function(e){var t=e.profileShowAllFavor,i=void 0===t||t;this.data.isMe&&(this.setData({profileShowAllFavor:i}),this.onReloadUserProfileFeed())},onGroupFeedChange:function(e){var i={},o=e.product;e.del?this.deleteRecommend(o.unique_id):i["allFeedMap."+o.unique_id]=o,this.setData(t({},i))},updateIndexGroupInfo:function(e){var t={};this.data.myCreateGroupList.forEach(function(i,o){i.id===e.id&&(t["myCreateGroupList["+o+"].head_img_url"]=e.head_img_url,t["myCreateGroupList["+o+"].name"]=e.name)}),this.setData(t)},onReloadUserProfileCreateGroupList:function(){this.createGroupModel&&this.createGroupModel.loadNext({data:{openid:this.data.openid}})},initCreateGroupModel:function(){var e=this;this.createGroupModel=m({useCache:this.data.isMe,success:function(t){var i=t.rsp;t.isCache;e.setData({myCreateGroupList:i.contact||[]})},complete:function(){e.setData({isGetCreateGroupComplete:!0},function(){e.setData({isShowUserFeeds:!0})})}})},onClickCoverImg:function(){var e=this;if(this.data.isMe&&this.isFromIndex()){var t=!1;wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(i){wx.showLoading({title:"请稍候...",mask:!0}),t=!0,i.tempFilePaths&&i.tempFilePaths[0]&&e.uploadImageTask(i.tempFilePaths[0])},fail:function(e){console.error("wx.chooseImage fail: ",e)},complete:function(){t&&wx.showLoading({title:"请稍候...",mask:!0})}})}},uploadImageTask:function(e){var t=this;wx.getImageInfo({src:e,success:function(o){n.ensureServerSessionValid({success:function(){t.uploadImageImpl(e,o)},fail:function(){i.default.showErrTips("网络连接失败"),console.error("ensureServerSessionValid fail,","网络连接失败")}})}})},uploadImageImpl:function(e){var t=this,o=wx.uploadFile({url:"https://wxa.weixin.qq.com/"+l.cgiPrefix+"/media/upload-image",filePath:e,name:this.getRandomString(),formData:{session_key:n._ticket.session_key},success:function(e){var o=JSON.safeParse(e.data);200===e.statusCode&&0===o.errcode?(console.info("upload image succ,",e),o.isSuccess=!0,t.onUploadFinish(o)):(wx.hideLoading(),console.error("upload image fail,",e),i.default.showErrTips("封面上传失败"))},fail:function(e){wx.hideLoading(),console.error("upload image fail,",e),i.default.showErrTips("封面上传失败")}});o&&"function"==typeof o.onProgressUpdate&&o.onProgressUpdate(function(e){})},getRandomString:function(){return(new Date).getTime()+""+1e3*Math.random().toFixed(3)},onUploadFinish:function(e){this.chooseCoverImgComplete(e)},chooseCoverImgComplete:function(e){var t=this,o=e.isSuccess,a=e.image_url;o?this.setUserProfile({params:{cover_image_url:a},success:function(e){t.setData({coverImageUrl:a}),t.setUserProfileCache({coverImageUrl:a,signature:t.data.signature})}}):(wx.hideLoading(),i.default.showErrTips("封面上传失败"))},updateGroupMap:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!(e.length<=0)){var t={};e.forEach(function(e){t["groupMap.id_"+e.id]=e}),this.setData(t),S(e)}},updateViewModel:function(e){var i={};i["allFeedMap."+e+".info.user_in_group"]=!0,this.setData(t({},i))},onJoinGroup:function(e){var t=this,i=e.currentTarget.dataset.id,o=this.data.groupMap["id_"+e.detail.groupId];o&&this.joinGroup({ticket:o.ticket,success:function(){o.self_in_group=!0,t.updateGroupMap([o]),t.updateViewModel(i),wx.showToast({icon:"success",title:"已加入",duration:1500})}})},onApplyJoinGroup:function(e){var t=this.data.groupMap["id_"+e.detail.groupId];t&&I.apply({scene:2,ticket:t.ticket,apply_reason:e.detail.applyReason})},onApplyJoinAndComment:function(e){var t=this,i=e.currentTarget.dataset.id,o=this.data.groupMap["id_"+e.detail.groupId];o&&(wx.showLoading(),this.joinGroup({ticket:o.ticket,success:function(){u({group_id:o.id,apply_reason:e.detail.applyReason}),t.updateViewModel(i)},fail:function(){wx.hideLoading()}}))},joinGroup:function(e){var t=e.ticket,i=e.success,o=e.fail;I.join({scene:2,ticket:t,success:i,fail:o})},onSetStarMember:function(){this.data.isStarMember?this.delStarMember():this.setStarMember()},setStarMember:function(){var e=this;wx.showLoading({mask:!0}),n.request({cgi:n.cgiSet.setStarMember,params:{group_id:this.data.groupId,user_id:this.data.openid},success:function(t){e.setData({isStarMember:!0}),i.default.showSuccessTips("已星标"),d.emit("setStarMember",{groupId:e.data.groupId,openids:[e.data.openid],userInfo:{userattr:e.data.userInfo}})},fail:function(e){i.default.showErrTips(e.errmsg||"系统繁忙"),console.error("setStar error",e)},complete:function(){wx.hideLoading()}}),C.report({type:x.setStarMember,ext:{group_id:this.data.groupId,user_id:this.data.openid}},this.data.pageName)},delStarMember:function(){var e=this;wx.showLoading({mask:!0}),n.request({cgi:n.cgiSet.delStarMember,params:{group_id:this.data.groupId,user_id:this.data.openid},success:function(t){e.setData({isStarMember:!1}),i.default.showSuccessTips("已取消星标"),d.emit("delStarMember",{groupId:e.data.groupId,openids:[e.data.openid]})},fail:function(e){i.default.showErrTips(e.errmsg||"系统繁忙"),console.error("delStar error",e)},complete:function(){wx.hideLoading()}}),C.report({type:x.delStarMember,ext:{group_id:this.data.groupId,user_id:this.data.openid}},this.data.pageName)}}}); 
 			}); 	require("widget/tmp-profile/tmp-profile.js");
 		__wxRoute = 'widget/toast/toast';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/toast/toast.js';	define("widget/toast/toast.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{show:{type:Boolean,value:!1,observer:function(t){var e=this;this.setData({bShow:t}),t?setTimeout(function(){e.setData({show:!1})},this.data.duration):clearTimeout(this.data.setDataHandler)}},duration:{type:Number,value:1500},title:{type:String,value:""},top:{type:Number,value:0,observer:function(t){this.setData({custom:t>0,style:t>0?"top: "+t+"px; transform: translate(-50%, 0);":""})}},centerY:{type:Number,value:0,observer:function(t){this.setData({custom:t>0,style:t>0?"top: "+t+"px;":""})}}},data:{custom:!1,style:"",bShow:!1,setDataHandler:0},methods:{}}); 
 			}); 	require("widget/toast/toast.js");
 		__wxRoute = 'widget/ugc-product-attachment/ugc-product-attachment';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/ugc-product-attachment/ugc-product-attachment.js';	define("widget/ugc-product-attachment/ugc-product-attachment.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../utils/util.js");Component({properties:{product:Object,mode:{type:String,value:"light"},previewEnabled:{type:Boolean,value:!0},highlightEnabled:{type:Boolean,value:!0},custom:{type:Boolean,value:!1},backgroundColor:String,index:Number,scene:String},data:{},methods:{onPreview:function(){this.triggerEvent("preview",{index:this.data.index,scene:this.data.scene,product:this.data.product})}}}); 
 			}); 	require("widget/ugc-product-attachment/ugc-product-attachment.js");
 		__wxRoute = 'widget/video-goods-item/video-goods-item';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/video-goods-item/video-goods-item.js';	define("widget/video-goods-item/video-goods-item.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../utils/util.js");Component({properties:{product:Object},data:{priceText:""},ready:function(){if(this.data.product._src_wxapp_id&&this.data.product._src_wxapp_path){var t=this.data.product&&this.data.product.sku_list;t&&t.sort(function(t,a){return t.price-a.price});var a=t[0].price,i=t[t.length-1].price,o="";if(a&&i)o=a==i?"￥"+(a/100).toFixed(2):"￥"+(a/100).toFixed(2)+" ~ "+(i/100).toFixed(2);else{var s=a&&i;s&&(o="￥"+(s/100).toFixed(2))}this.setData({priceText:o})}},methods:{showGoods:function(t){this.setData({showGoods:!this.data.showGoods})},hideGoods:function(t){this.setData({showGoods:!1})},jumpToMiniProgram:function(){this.data.product._src_wxapp_id&&this.data.product._src_wxapp_path&&t.navigateToMiniProgram({appId:this.data.product._src_wxapp_id,path:this.data.product._src_wxapp_path})}}}); 
 			}); 	require("widget/video-goods-item/video-goods-item.js");
 		__wxRoute = 'widget/video-recommend-comment-input/video-recommend-comment-input';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/video-recommend-comment-input/video-recommend-comment-input.js';	define("widget/video-recommend-comment-input/video-recommend-comment-input.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(t){t&&t.__esModule}(require("../../utils/toast.js"));var t=require("../../core/eventcenter.js");require("../../utils/util.js"),require("../../core/network.js");Component({options:{},properties:{showInput:Boolean,currentScrollTop:Number,currentComment:{type:Object,observer:function(t,e){}},autoFocus:{type:Boolean,value:!0}},data:{cacheKeyboardHeight:0,clickElBottom:0,inputHeight:0,inputPlaceHolder:"",screenHeight:0,inputTop:0},ready:function(){var t=wx.getSystemInfoSync(),e=t.windowHeight,a=88/(750/t.windowWidth);this.setData({screenHeight:e,inputHeight:a})},detached:function(){},methods:{calcDistance:function(t,e){var a=this,n=this.data.screenHeight-e-this.data.inputHeight,i=t-n;Math.max(this.data.currentScrollTop+i,0);this.setData({inputTop:n},function(){a.triggerEvent("inputpop",{distance:i,keyboardHeight:e})}),setTimeout(function(){a.setData({inputPlaceHolder:a.data.currentComment&&a.data.currentComment.placeHolder||""})},500)},onInputFocus:function(t){var e=t.detail.height||0;this.data.cacheKeyboardHeight=e=Math.max(e,this.data.cacheKeyboardHeight),this.calcDistance(this.data.currentComment.bottom,this.data.cacheKeyboardHeight),this.setData({inputPlaceHolder:""})},onInputBlur:function(e){this.data.cacheKeyboardHeight=0,this.data.currentComment.refData.cacheContent=e.detail.value,t.emit("onRecommendInputHide",this.data.currentComment.refData),this.setData({inputTop:0,inputPlaceHolder:""}),this.triggerEvent("inputhide",{content:e.detail.value})},onInputConfirm:function(e){this.data.currentComment.refData.cacheContent=e.detail.value,this.data.currentComment.refData.cacheContent&&t.emit("onRecommendInputConfirm",this.data.currentComment.refData)}}}); 
 			}); 	require("widget/video-recommend-comment-input/video-recommend-comment-input.js");
 		__wxRoute = 'widget/video-view/video-view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/video-view/video-view.js';	define("widget/video-view/video-view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../core/sys"),e=require("../../core/eventcenter"),i=require("../../utils/util"),n=(require("../../libs/mmuxwxappdevkit/index.js").IdKey,require("../../utils/enum.js").IDKeyDefine,{contain:"aspectFit",fill:"scaleToFill",cover:"aspectFill"});Component({properties:{thumb:String,src:{type:String,observer:function(t,e){t!=e&&(this.data.failTimes=0)}},duration:Number,mode:{type:String,value:"contain",observer:function(t){this.setData({imageMode:n[t],videoMode:t})}},width:{type:String,value:"100%"},height:{type:String,value:"100%"},muted:{type:Boolean,value:!0,observer:function(t){this.setData({videoMuted:t})}},autoplay:{type:Boolean,value:!1,observer:function(t){this.setData({videoAutoPlay:t})}},showControls:{type:Boolean,value:!1,observer:function(t){this.setData({videoShowControls:t})}},showLoading:{type:Boolean,value:!1,observer:function(t){this.setData({videoShowLoading:t})}},product:Object,user:Object,ext:Object,controllable:{type:Boolean,value:!1},standalone:{type:Boolean,value:!1},tapForFullScreen:{type:Boolean,value:!1},autoDirection:{type:Boolean,value:!1}},data:{isPlaying:!1,isRealPlaying:!1,isFullScreen:!1,hidden:!1,windowHeight:t.windowHeight,widthPx:0,heightPx:0,fixSizeStyle:"",active:!1,activeTimer:0,failTimes:0,componentId:"",imageMode:"aspectFit",videoMode:"contain",videoAutoPlay:!1,videoMuted:!0,videoShowControls:!1,videoShowLoading:!1},attached:function(){e.register(e.Event.onVideoStartPlaying,this),e.register(e.Event.onEnterFullScreen,this),e.register(e.Event.onExitFullScreen,this),this.setData({componentId:Date.now()+Math.random().toFixed(2),fixSizeStyle:"width: "+this.data.width+"; height: "+this.data.height+";",imageMode:n[this.data.mode]})},ready:function(){this.data.standalone?this.setIsPlaying(this.data.autoplay):wx.nextTick(this.register.bind(this))},detached:function(){e.unregister(e.Event.onVideoStartPlaying,this),e.unregister(e.Event.onEnterFullScreen,this),e.unregister(e.Event.onExitFullScreen,this),this._observer&&(this._observer.disconnect(),this._observer=null)},methods:{register:function(){var t=this;this._observer=this.createIntersectionObserver({thresholds:[.9]}),this._observer.relativeToViewport(),this._observer.observe(".media",function(e){e&&(e.intersectionRatio<.9?t.setIsPlaying(!1):t.startPlaying({reason:"SYS_PERMIT",userInfo:{ratio:e.intersectionRatio,rect:e.intersectionRect}}))})},startPlaying:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.objId=this.data.componentId,e.emit(e.Event.onVideoStartPlaying,t),this.setIsPlaying(!0)},onVideoStartPlaying:function(t){t.objId!=this.data.componentId&&this.setIsPlaying(!1)},onEnterFullScreen:function(t){t.obj!=this&&this.setData({hidden:!0})},onExitFullScreen:function(t){t.obj!=this&&this.setData({hidden:!1})},onVideoPlay:function(e){this.setData({isRealPlaying:!0}),!this.data.tapForFullScreen||"android"!==t.platform||this.data.fullScreen||this.data.autoplay||this.getContext().requestFullScreen()},onFullScreen:function(t){t.detail.fullScreen?this.setData({imageMode:"aspectFit",videoMode:"contain",videoMuted:!1,videoShowControls:!0}):this.setData({imageMode:n[this.data.mode],videoMode:this.data.mode,videoMuted:this.data.muted})},onTimeUpdate:function(t){var e=t.detail.currentTime;this.timestamp=e},onError:function(t){var e=this;this.data.src&&(++this.data.failTimes>=3?this.data.failTimes=0:setTimeout(function(){e.getContext().play()},100))},onClickControl:function(){this.data.isPlaying||this.startPlaying({reason:"USER_ACTION",userInfo:{}})},onClickVideoControl:function(){this.setIsFullScreen(!this.data.isFullScreen)},onClickFullScreen:function(){this.triggerEvent("enterfullscreen")},setIsPlaying:function(t,e){if(this.data.isPlaying!=t){var i={isPlaying:t};t||(i.isRealPlaying=!1),this.setData(i,e)}},setIsFullScreen:function(t){if(this.data.isFullScreen!=t){var i=this.getContext(),n={obj:this};t?(n.reason="VIDEO_ENTER_FULLSCREEN",e.emit(e.Event.onEnterFullScreen,n),i.requestFullScreen()):(n.reason="VIDEO_EXIT_FULLSCREEN",e.emit(e.Event.onExitFullScreen,n),i.exitFullScreen()),this.setData({isFullScreen:t})}},getContext:function(){return wx.createVideoContext("video",this)},convertRpx2Px:function(e){return t.windowWidth/750*e},openProfile:function(t){this.data.user&&i.openProfile(this.data.user.username)},toVideoGEO:function(t){},onPlay:function(){this.data.controllable&&(this.setIsPlaying(!0),this.getContext().play())},onMute:function(){this.data.controllable&&this.setData({muted:!this.data.muted})},onTriggerFullScreen:function(){var e=this;this.data.tapForFullScreen&&(this.data.isPlaying?"ios"===t.platform?this.setIsPlaying(!1,function(){e.setIsPlaying(!0,function(){e.getContext().requestFullScreen()})}):this.data.isRealPlaying&&this.getContext().requestFullScreen():"ios"===t.platform?this.setIsPlaying(!0,function(){e.getContext().requestFullScreen()}):this.setIsPlaying(!0,function(){e.setData({videoShowLoading:!0}),e.getContext().play()}))}}}); 
 			}); 	require("widget/video-view/video-view.js");
 		__wxRoute = 'widget/welcome/welcome';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'widget/welcome/welcome.js';	define("widget/welcome/welcome.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../core/sys.js");var e=require("../../core/network.js"),t=require("../../utils/util.js");Component({properties:{permissionNeeded:{type:Boolean},permissionWaitingList:{type:Array,observer:function(e){this.data.toAcceptCount=e&&e.length||0}},loading:{type:Boolean}},data:{agreePermission:!0,toAcceptCount:0},methods:{toPermissionWaitingList:function(){this.triggerEvent("clickauthlist"),t.navigateTo({url:"/portal/index-permission/index-permission"})},startUse:function(){var t=this;e.request({cgi:e.cgiSet.agreeToUse,params:{has_agree:1,has_read_auth:1},success:function(){t.triggerEvent("closeWelcomePage",{reload:!1,toAcceptCount:t.data.toAcceptCount,acceptCount:0})},fail:function(){wx.showToast({icon:"none",title:"系统繁忙，稍候再试"})}})},checkboxChange:function(e){this.setData({agreePermission:!!e.detail.value.length})},syncHistoryThenUse:function(){var t=this;this.data.agreePermission?e.request({cgi:e.cgiSet.syncHistory,params:{is_accept:!0},success:function(){t.triggerEvent("closeWelcomePage",{reload:!0,toAcceptCount:t.data.toAcceptCount,acceptCount:t.data.toAcceptCount})},fail:function(){wx.showToast({icon:"none",title:"系统繁忙，稍候再试"})}}):this.startUse()},toPaper:function(){wx.openUrl({url:"https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=11546869093oxQ5e&version=1&lang=zh_CN&platform=2"})}}}); 
 			}); 	require("widget/welcome/welcome.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},o=e(require("../../utils/toast")),n=e(require("../../libs/westore/create")),r=e(require("../../store/index")),a=e(require("../../libs/westore/diff")),s=e(require("../../libs/deep-obj-diff/index")),d=require("../../utils/enum.js"),u=require("../../core/api.js"),c=require("../../core/sys.js"),l=require("../../libs/mmuxwxappdevkit/index.js").IdKey,p=require("../../utils/enum.js").IDKeyDefine,h=require("../../core/network.js"),m=require("../../models/getIndex.js"),f=require("../../models/doVideoLike.js"),g=require("../../models/getIndexTimeline.js"),_=require("../../models/getIndexGroup.js"),v=require("../../models/getGroupFeedDetail.js"),I=require("../../core/eventcenter"),y=require("../../models/getPermissionList"),x=require("../../libs/mmuxwxappdevkit/foundation/base/page.js"),C=require("../../libs/mmuxwxappdevkit/index.js"),T=require("../../libs/mmuxwxappdevkit/utils/exposeReporter.js"),L=C.Reporter,R=require("../../utils/util.js"),G=require("../../utils/permissionMsg.js"),k=require("../../libs/mmuxwxappdevkit/utils/actionReporter.js"),S=(require("../../libs/mmuxwxappdevkit/utils/util.js"),require("../../utils/gotoChatUtil.js")),D=require("../../models/getUnReadMsgCnt.js"),w=require("../../utils/facade.js"),q=require("../../globalData"),b=require("../../languagePackage"),M=require("../../models/getHotGroup"),P=require("../../models/log_17937"),E=require("../../utils/deepCopy"),A=(require("../../utils/md5.js"),require("../../utils/InfinityList")),O={firstTeachTip:"first_teach_tip",redDotKey:"redDotKey_",cartReddotKey:"cartReddotKey_",firstChangeEntryTip:"first_change_entry_tip"},B={UNREAD:0,READ:1,ERR:2},H=function(){return(new Date).getTime()+""+1e3*Math.random().toFixed(3)},U=[{id:0,name:"不感兴趣"}];x({pageActionConfig:require("./index.pageaction.js"),pageProxy:function(e){(0,n.default)(r.default,e)},index:null,timeline:null,indexGroup:null,timelineList:[],pageScrollTop:0,data:{closeListInfinity:1,platform:c.platform,pkg:{},allReqComplete:!0,hotGroupList:[],timelineListIds:[],timelineListToMap:{},reservePaddingTop:0,timelineDataMap:{},timelineRenderItems:[],openid:"",phoneModel:c.phoneModel(),windowHeight:c.windowHeight,statusBarHeight:c.statusBarHeight,navigationBarHeight:c.navigationBarHeight(),searchBarHeight:51,isGroupApp:q.isGroupApp,permissionNeeded:!1,permissionWaitingList:null,permissionActionItem:!1,permissionWaiting:!1,permissionInit:!1,orderHasHistory:!1,cartHasHistory:!1,categoryRecommendList:[],categoryRecommendListLen:0,categoryInfo:{},productListLength:0,prevSeq:"",nextSeq:"",favorComplete:!1,reqHotGroupComplete:!1,favorHasMore:!0,favorLoading:!1,indexGroupComplete:!1,indexGroupLoading:!1,indexGroupHasMore:!1,indexGroupContacts:[],indexGroupContactsLength:0,indexGroupLastSeq:"",indexGroupNextSeq:"",showCreateGroupEntry:!1,canCreateGroup:!0,currentGroupId:"13104374716925600",currentGroupInfo:null,showAuthTip:!1,showOrderRed:0,showFavoriteRed:0,showMessageRed:0,unReadMsgCnt:0,hasChatList:!1,headGroupShowRed:!1,headFriendsShowRed:!1,showProfileRed:!1,currentComment:null,currentScrollTop:0,actionSheetTitle:"",showActionSheet:!1,actionSheetItems:[],dialog:{show:!1},pageScrollTop:0,sessionId:"",clickId:"",userNickname:"",userHeadImg:"",GROUP_ID_FRIENDS:"13104374716925600",GROUP_ID_ALL:"1",GROUP_ID_ALL_GROUPS:"2",GROUP_ID_ME:"3",triggerProfileReload:0,triggerProfileLoadNext:0,allRecommendReasons:U,timelineReasons:U,groupFeedReasons:U,joinConfirmIsOpen:!1,perMsgItemStr:"",isTrial:!1,trialMark:"体验版",isProfileComplete:!1,isSetUserProfile:!0},onLoad:function(e){var t=this;this.log_17937=new P("index").report(1),I.register(I.Event.onClearRightTopReddot,this),I.register(I.Event.onDeleteByItem,this),I.register("updateIndexGroupInfo",this),I.register("deleteIndexGroup",this),I.register("onBlockUser",this),I.register("changeIndexGroupTab",this),I.register("onGroupFeedChange",this),I.register("onNewRecommendDone",this),I.register("onJoinGroup",this);var i=getApp().globalData;if(u.createIntersectionObserver(this,{thresholds:[0]}).relativeToViewport({}).observe("#pre-load-observer",function(e){e.boundingClientRect,e.dataset,e.intersectionRatio;var i=e.intersectionRect;e.relativeRect;!!(i.left|i.top|i.right|i.bottom)&&"13104374716925600"==t.data.currentGroupId&&t.getTimeline()}),this.user_profile_set_cache_key="user_profile_set",this.setData({pkg:b.languagePkg["/pages/index"],sessionId:e.session_id||"",currentGroupId:e.group_id||"13104374716925600",isTrial:"release"!==i.version,openid:c.userInfo.openid,isSetUserProfile:1==u.getStorageSync(this.user_profile_set_cache_key),isProfileComplete:1==u.getStorageSync(this.user_profile_set_cache_key)}),"3rd"===e.from&&!u.getStorageSync(O.firstTeachTip)){var o=this.data.pkg;this.setData({dialog:{show:!0,title:o.dialog.title,desc:o.dialog.desc,image:o.dialog.image,userInfo:{key:O.firstTeachTip,value:1}}})}this.initModel(),this.initHotGroupModel(),this.getHotGroup(),this.getReasonAll(),this.bottomTipsShow(),this.statIndexExposureOnLoad&&this.statIndexExposureOnLoad()},onUnload:function(){I.unregister(I.Event.onClearRightTopReddot,this),I.unregister(I.Event.onDeleteByItem,this),I.unregister("updateIndexGroupInfo",this),I.unregister("deleteIndexGroup",this),I.unregister("onBlockUser",this),I.unregister("changeIndexGroupTab",this),I.unregister("onGroupFeedChange",this),I.unregister("onJoinGroup",this),I.unregister("onNewRecommendDone",this)},hotGroupChange:function(e,t){var i=this.data.hotGroupList,o=void 0!==t?i[t]:i[e.detail.current];o&&!o.exposed&&(k.report({type:d.PageActionType.hotGroupExpose,ext:{group_id:o.groupattr.id||""}},"index"),o.exposed=!0)},initHotGroupModel:function(){var e=this;this.hotGroupModel=M({success:function(t){var i=t.rsp,o=(t.isCache,i.group_info||[]);o=o.filter(function(e){return e.groupattr&&e.groupattr.id}),e.setData({hotGroupList:o,reqHotGroupComplete:!0}),e.checkAllReqComlete(),o.length&&e.hotGroupChange(null,0)},fail:function(t){e.setData({reqHotGroupComplete:!0}),e.checkAllReqComlete()},complete:function(){}})},getHotGroup:function(){if(q.isGroupApp)return this.setData({reqHotGroupComplete:!0}),void this.checkAllReqComlete();this.hotGroupModel&&this.hotGroupModel.loadNext()},checkAllReqComlete:function(){var e=this;this.data.reqHotGroupComplete&&this.data.favorComplete&&(this.data.hotGroupList.length||this.data.productListLength?this.setData({allReqComplete:!0}):setTimeout(function(){e.setData({allReqComplete:!0})},300))},onHotGroupTap:function(e){var t=e.currentTarget.dataset.item;R.navigateTo({url:"/portal/group-profile/group-profile?group_id="+encodeURIComponent(t.groupattr.id||"")+"&invite_ticket="+encodeURIComponent(t.groupattr.ticket||"")+"&fromScene=hotGroup"}),k.report({type:d.PageActionType.hotGroupClick,ext:{group_id:t.groupattr.id||""}},"index")},getSystemGroup:function(e){var t=e.success,i=e.complete;h.request({cgi:h.cgiSet.getSystemGroup,params:{},success:function(e){t&&t(e)},fail:function(e){console.error("getSystemGroup fail: ",e)},complete:function(e){i&&i(e)}})},insertSystemGroup:function(e){if(this.systemGroupInfo&&this.systemGroupInfo.feed&&this.systemGroupInfo.sort_time)for(var t=0;t<e.length;t++){var i=e[t];if(this.systemGroupInfo.sort_time>i.info.timestamp)return void e.splice(t,0,this.systemGroupInfo.feed)}},getUserProfile:function(){var e=this;h.request({cgi:h.cgiSet.getUserProfile,params:{openid:c.userInfo.openid},success:function(t){var i=t.userattr.signature||"",o=t.userattr.cover_image_url||"",n={};i||o?(u.setStorageSync(e.user_profile_set_cache_key,1),n.isSetUserProfile=!0):(u.setStorageSync(e.user_profile_set_cache_key,0),n.isSetUserProfile=!1),e.setData(n)},fail:function(e){console.error("getUserProfile fail: ",e)},complete:function(){e.setData({isProfileComplete:!0})}})},showTrialMark:function(){this.data.isTrial&&this.setData({trialMark:this.data.trialMark?"":"体验版"})},changeEntry:function(){this.setData({dialog:{show:!1}}),h.request({cgi:h.cgiSet.setEntryStatus,params:{type:2,show:!0},success:function(e){u.setStorageSync(O.firstChangeEntryTip,1)},fail:function(e){}}),this.statEntryGuideConfirm&&this.statEntryGuideConfirm()},ignoreChangeEntry:function(){this.setData({dialog:{show:!1}}),u.setStorageSync(O.firstChangeEntryTip,1),this.statEntryGuideIgnore&&this.statEntryGuideIgnore()},onShow:function(){var e=this;this.preventPageRefresh||(this.clearRedDot(["outer_show_red","search_show_red"]),h.request({cgi:h.cgiSet.redDotGet,params:{},success:function(t){var i=e.data.currentGroupId,o=t.order_red_dot_index,n=t.favorite_red_dot_index,r=t.message_red_dot_index,a=t.friend_buy_red_dot_index,s=t.group_red_dot_index,d=t.profile_red_dot_index||{};e.setData({showOrderRed:o.value||0,showFavoriteRed:n.value||0,showMessageRed:r.value||0,headFriendsShowRed:(a.value||!1)&&"13104374716925600"!=i,headGroupShowRed:(s.value||!1)&&"2"!=i,showProfileRed:d.value||0}),"2"==i&&s.value&&e.clearRedDot(["group_red_dot_index"]),"13104374716925600"==i&&a.value&&e.clearRedDot(["friend_buy_red_dot_index"])}}),this.reload(),this.getUnReadMsgCnt(),this.statIndexExposureOnShow&&this.statIndexExposureOnShow(),I.emit("onPageShowTryToReloadFailedImage"))},onHide:function(){this.preventPageRefresh||T.reportAll()},onPageScroll:function(e){this.data.pageScrollTop=e.scrollTop,this.pageScrollTop=this.data.pageScrollTop=e.scrollTop,this.data.closeListInfinity||this.infinityList&&this.infinityList.renderItems()},onReachBottom:function(){if(this.data.closeListInfinity){if("-9999"==this.data.currentGroupId)return;"13104374716925600"==this.data.currentGroupId?this.getTimeline():"3"==this.data.currentGroupId&&this.setData({triggerProfileLoadNext:++this.data.triggerProfileLoadNext})}else;},getCategoryRecommendList:function(){var e=this;h.request({cgi:h.cgiSet.getMoreEveryBuy,params:{scene:1,sessionid:Date.now(),ismore:0},success:function(t){var i=t.recommend||[];i.forEach(function(e){e.id=(e.product.mch_appid||e.product.src_wxapp_id)+"_"+e.product.item_code,e.product.image_cdn_list&&e.product.image_cdn_list.length>0&&(e.product.image_list=e.product.image_cdn_list.map(function(e){return e.image_cdn_url}))}),e.setData({categoryRecommendList:i.slice(0,2),categoryRecommendListLen:i.length,categoryInfo:{category:t.category||"",title:t.category_content||""}})},fail:function(e){console.error("get_more_product fail",e)}})},getPermissionSituation:function(){var e=this;new y({success:function(t,i){if(!i){var o=t.item_list,n=o.filter(function(e){return"2"===e.auth_status||"0"===e.auth_status}),r=o.filter(function(e){return"1"===e.auth_status});e.setData({permissionWaitingList:r,permissionWaiting:r.length||!1,permissionActionItem:n.length>0,permissionNeeded:Boolean(r.length&&!n.length),permissionInit:r.length>0&&n.length<=0}),getApp().globalData.permissionWaitingList=r||[]}},fail:function(){}}).loadNext()},initModel:function(){var e=this;this.index=m,this.timeline=g({success:function(t,o){o||e.log_17937.report(3);var n=!1,r=function(){o||n||(e.log_17937.report(4),n=!0)};if(e.data.closeListInfinity){if("13104374716925600"!=e.data.currentGroupId)return;q.isGroupApp&&(t.feed=t.feed.filter(function(e){return e.group_item&&-1===["13104374716925600","13104374716925601"].indexOf(e.group_item.group_id)}));var d=t.order_by_desc&&!t.seq||!t.order_by_desc;d&&0==e.timelineList.length&&0==t.feed.length&&e.nonTimelineTipsExpose&&e.nonTimelineTipsExpose(),t.order_by_desc&&t.seq&&0==t.feed.length&&e.nonTimelineTipsExpose&&e.nonTimelineTipsExpose(),t.feed.forEach(function(e){delete e.share_key});var u=R.mergeIndexTimelineList(t.feed,e.timelineList,d),c=u.mergeList;e.insertSystemGroup(c);var l=(0,s.default)(e.timelineList,c),p=[];for(var h in l)c[h]&&p.push(c[h]);e.timelineList=c.slice(),o||e.timeline.cacheList(e.timelineList);var m=e.data,f=m.prevSeq,g=m.nextSeq;!t.order_by_desc||!u.updateSeq&&g||(g=t.next_seq||""),t.order_by_desc&&!t.seq||!f?f=t.prev_seq||"":t.order_by_desc||(f=t.next_seq||f),p.length<=0&&(e.setData({favorLoading:!1,favorComplete:!0,favorHasMore:t.order_by_desc?!!t.has_more:e.data.favorHasMore,prevSeq:f,nextSeq:g,productListLength:e.timelineList.length},function(){r()}),e.checkAllReqComlete());(function e(){var n=this;if(p.length<=0)return t.feed.length<=0&&t.has_more?setTimeout(function(){n.onReachBottom()}):this.queryListDataViewHeight(),0;var s=p.splice(0,10),d={timelineListIds:this.timelineList.map(function(e){return e.unique_id}),timelineListToMap:{}};s.forEach(function(e){d.timelineListToMap[""+e.unique_id]=e});var u={timelineListToMap:i({},this.data.timelineListToMap,d.timelineListToMap)},c={timelineListToMap:this.data.timelineListToMap},l=(0,a.default)(u,c);if(o){var h=i({timelineListIds:d.timelineListIds},l);if(0===Object.keys(h).length)return 0;this.setData(h),e.call(this)}else{var m=i({timelineListIds:d.timelineListIds},l);if(p.length<=0&&(m=i({},m,{favorLoading:!1,favorComplete:!0,favorHasMore:t.order_by_desc?!!t.has_more:this.data.favorHasMore,prevSeq:f,nextSeq:g,productListLength:this.timelineList.length})),0===Object.keys(m).length)return 0;this.setData(m,function(){r()}),this.checkAllReqComlete(),e.call(this)}}).call(e)}else{if("13104374716925600"!=e.data.currentGroupId)return;var _=t.order_by_desc&&!t.seq||!t.order_by_desc;_&&0==e.timelineList.length&&0==t.feed.length&&e.nonTimelineTipsExpose&&e.nonTimelineTipsExpose(),t.order_by_desc&&t.seq&&0==t.feed.length&&e.nonTimelineTipsExpose&&e.nonTimelineTipsExpose(),t.feed.forEach(function(e){delete e.share_key});var v=R.mergeIndexTimelineList(t.feed,e.timelineList,_),I=v.mergeList;e.timelineList=I.slice(),e.insertSystemGroup(I),e.infinityList?_?e.infinityList.reset(I):(I=I.filter(function(t){return!(t.unique_id in e.data.timelineDataMap)}),e.infinityList.appendList(I)):(e.infinityList=new A(e,{initList:I,loadMoreCallback:function(){e.getTimeline()}}),e.infinityList.renderItems());var y=e.data,x=y.prevSeq,C=y.nextSeq;!t.order_by_desc||!v.updateSeq&&C||(C=t.next_seq||""),t.order_by_desc&&!t.seq||!x?x=t.prev_seq||"":t.order_by_desc||(x=t.next_seq||x);var T={favorLoading:!1,favorComplete:!0,favorHasMore:t.order_by_desc?!!t.has_more:e.data.favorHasMore,prevSeq:x,nextSeq:C,productListLength:Object.keys(e.data.timelineDataMap).length};e.setData(T),e.checkAllReqComlete()}},fail:function(t){console.error("getTimeline fail: ",t),0===e.data.productListLength?l.report(c.alarmId,p.RecommentListError):u.showToast({title:"加载失败",image:"/assets/load_fail.png"})},complete:function(){e.setData({favorLoading:!1})}}),this.indexGroup=_({count:20,success:function(t,i){if(i)e.data.indexGroupContactsLength<=0&&(t.contact.forEach(function(e){e.unread_feed_count=0}),e.setData({indexGroupContacts:t.contact,indexGroupContactsLength:t.contact.length,indexGroupComplete:!0}));else{var o={indexGroupLoading:!1,indexGroupComplete:!0,indexGroupHasMore:t.order_by_desc?t.has_more:e.data.indexGroupHasMore};if(t.order_by_desc?(o.indexGroupNextSeq=t.next_seq,t.contact[0]&&!e.data.indexGroupLastSeq?o.indexGroupLastSeq=t.contact[0].seq:o.indexGroupLastSeq=e.data.indexGroupLastSeq||t.last_seq):o.indexGroupLastSeq=t.next_seq||e.data.indexGroupLastSeq,!t.seq&&t.order_by_desc)o.indexGroupContacts=t.contact,o.indexGroupContactsLength=o.indexGroupContacts.length;else{var n=e.data.indexGroupContacts.slice(),r=(n=t.order_by_desc?n.concat(t.contact):(t.contact||[]).reserve().concat(n)).map(function(e){return e.base.id});n=n.filter(function(e,i){return!e.__ignore&&(t.order_by_desc?r.lastIndexOf(e.base.id)==i:r.indexOf(e.base.id)==i)}),o.indexGroupContacts=n,o.indexGroupContactsLength=n.length}e.setData(o,function(){e.addGroupBtnShow()});var a=e.data.indexGroupContacts.slice();e.statIndexGroupExposure&&a.length&&e.statIndexGroupExposure({idList:a.map(function(e){return e.base.id})})}},fail:function(){e.setData({indexGroupLoading:!1}),l.report(c.alarmId,p.IndexLoadGroupListFail)}})},reload:function(){this.reloadIndex(),this.getTimeline(!0)},reloadIndex:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.index.reload({loading:!1,useCache:!0,success:function(i,o){if(c.userUin=i.self_uin,i.user_info||(i.user_info={}),c.userInfo={uin:i.self_uin,openid:i.user_info.self_openid||"",nickname:i.user_info.nickname||"",avatar:i.user_info.headImg||"",headimgurl:i.user_info.headImg||""},console.info("shopping-index success openid",c.userInfo.openid),e.setData({openid:c.userInfo.openid,cartHasHistory:i.want_buy.has_history||!1,orderHasHistory:i.has_buy.has_history||!1,userNickname:c.userInfo.nickname,userHeadImg:c.userInfo.headimgurl||"",joinConfirmIsOpen:i.group_info.open_join_confirm||!1,showCreateGroupEntry:i.group_info.can_create_group||!1,closeListInfinity:!0}),getApp().globalData.showCreateGroupEntry=i.group_info.can_create_group||!1,q.readInfo=i.history_info||{read_time_threshold:2e3,upload_time_interval:5,upload_num_threshold:10},q.groupInfo=i.group_info||{group_name_input_hint:e.data.pkg.groupNameInputHolder},i.entry_info?(q.showAllRecommend=void 0===i.entry_info.show_entry_all_recommend||i.entry_info.show_entry_all_recommend,q.allRecommendTitle=i.entry_info.all_recommend_title||e.data.pkg.allRecommendTitle):(q.showAllRecommend=!0,q.allRecommendTitle=e.data.pkg.allRecommendTitle),getApp().globalData.hasBiz=i.has_biz||!1,o)t.success&&t.success(i,o);else{i.msg_info&&i.msg_info.summary&&-1!==i.msg_info.summary.indexOf("值得买")&&(i.msg_info={value:0,summary:""}),void 0===i.auth_read_status&&(i.auth_read_status=B.READ),i.msg_info&&i.msg_info.value&&parseInt(i.msg_info.value)&&L.report({logId:16499,logString:["shopping-list","msg-red-dot",1,e.data.sessionId,i.msg_info.type||"4"].join(",")}),i.worth_buy.worth_msg_info&&i.worth_buy.worth_msg_info.value&&L.report({logId:16499,logString:["shopping-list","worth-red-dot",1,e.data.sessionId,"0"].join(",")});[1006,1005,1042,1106].indexOf(c._scene);i.entry_info&&i.entry_info.show_entry_open_tips&&!u.getStorageSync(O.firstChangeEntryTip)&&(e.setData({dialog:{customFooter:!0,show:!0,title:"好物圈入口升级",desc:"你可以通过“发现”-“搜一搜”进入好物圈\n当前入口即将关闭",image:"../../assets/shopping-list-change-enter-tips.png",userInfo:{key:O.firstChangeEntryTip,value:1}}}),e.statEntryGuideExpose&&e.statEntryGuideExpose()),e.setData({showAuthTip:i.auth_read_status===B.UNREAD}),!o&&e.data.showAuthTip&&G.load(function(t){e.setData({perMsgItemStr:encodeURIComponent(JSON.stringify(t))})}),t.success&&t.success(i,o)}},fail:function(){console.info("shopping-index fail openid",c.userInfo.openid),t.fail&&t.fail()}})},getTimeline:function(e){this.data.favorLoading||!e&&!this.data.favorHasMore||(this.setData({favorLoading:!0}),this.log_17937.report(2),e?this.data.prevSeq?this.timeline.loadNext({seq:this.data.prevSeq,order_by_desc:!1,count:20,useCache:!1}):this.timeline.reload():this.data.nextSeq?this.timeline.loadNext({seq:this.data.nextSeq}):this.timeline.reload())},reloadGroup:function(){this.data.indexGroupLoading||(this.setData({indexGroupLoading:!0}),this.data.indexGroupLastSeq?this.indexGroup.loadNext({seq:this.data.indexGroupLastSeq,order_by_desc:!1}):this.indexGroup.reload({seq:""}))},updateFeedDetail:function(e){var o=this;v(i({},e,{success:function(e,i){if(!i&&e.feed){var n=e.feed,r=o.timelineList.map(function(e){return e.unique_id}).indexOf(n.unique_id);r>=0&&(o.timelineList.splice(r,1,n),o.timeline.cacheList(o.timelineList)),o.setData(t({},"timelineListToMap."+n.unique_id,n))}}})).reload()},onGroupFeedChange:function(e){var i=this;if(this.data.closeListInfinity){var o=e.product,n=e.del,r=this.getProductId(o);this.data.timelineListIds.slice().indexOf(r)>=0&&(n?(this.setData(t({},"timelineListToMap."+r,null)),this.timelineList=this.timelineList.filter(function(e){return i.getProductId(e)!=r})):(this.setData(t({},"timelineListToMap."+r,o)),this.timelineList=this.timelineList.map(function(e){return i.getProductId(e)==r?o:e})),this.timeline.cacheList(this.timelineList))}else if(e.del){var a=e.product.unique_id;this.infinityList.removeItemById(a)}else{var s=e.product;this.infinityList.updateItem(s)}},onNewRecommendDone:function(){this.getTimeline(!0)},onJoinGroup:function(e){e.group_id;this.clearTimelineData(),this.getTimeline(!0)},getMoreGroupList:function(){!this.data.indexGroupLoading&&this.data.indexGroupHasMore&&(this.setData({indexGroupLoading:!0}),this.indexGroup.loadNext({seq:this.data.indexGroupNextSeq}))},getUnReadMsgCnt:function(){var e=this;D.get({loading:!1,success:function(t){e.setData({unReadMsgCnt:t.unread_count||0,hasChatList:t.has_chat_list||!1})},fail:function(e){console.error("get unread msg cnt fail")}})},toMoreEveryBuy:function(e){var t=this;if(e.currentTarget.dataset.type){var i=1==e.currentTarget.dataset.type?this.nonMoreTimelineTipsClick:this.nonTimelineTipsClick;i&&i()}else this.statEveryBuyTabClick&&this.statEveryBuyTabClick();R.navigateTo({url:"/portal/every-buy-list/every-buy-list?aheadList="+encodeURIComponent(JSON.stringify([])),success:function(e){t.statIndexEveryBuyMore&&t.statIndexEveryBuyMore()}})},toDebug:function(){q.internalWhiteList.includes(""+c.userInfo.uin)&&R.navigateTo({url:"/portal/debug/debug"})},toMyRecommendList:function(){R.navigateTo({url:"/portal/my-recommend-list/my-recommend-list"})},toTuCao:function(){R.toTuCao()},toAbout:function(){R.navigateTo({url:"/portal/about/about"})},toBizList:function(){this.data.clickId=R.genClickId(),R.navigateTo({url:"/portal/biz-list/biz-list?clickId="+this.data.clickId})},toContactSellerIndex:function(){R.navigateTo({url:"/seller-online/portal/index/index"})},toPermissionList:function(e){this.data.clickId=R.genClickId(),R.navigateTo({url:"/portal/permission/permission?show_unread="+(this.data.showAuthTip?"1":"")+"&clickId="+this.data.clickId})},bottomTipsShow:function(){T.init({self:this,selector:"#non-more-timeline",data:{type:d.PageActionType.NonMoreTimelineTipsExpose,ext:{}}}),T.init({self:this,selector:"#non-timeline",data:{type:d.PageActionType.NonTimelineTipsExpose,ext:{}}})},addGroupBtnShow:function(){this.addGroupBtnObserver&&this.addGroupBtnObserver.disconnect(),this.addGroupBtnObserver=T.init({self:this,selector:"#add-group-btn-id",data:{type:d.PageActionType.GroupCreateShow,ext:{group_count:this.data.indexGroupContactsLength}}})},getCanCreateCount:function(e){var t=this;u.showLoading({mask:!0}),h.request({cgi:h.cgiSet.checkCanCreate,params:{create_way:0},success:function(i){t.statGroupCreateClick&&t.statGroupCreateClick({code:0,msg:i.can_create_msg}),e&&e(i.count,i.can_create_msg||"你还可以创建"+(i.count||0)+"个圈子")},fail:function(e){t.statGroupCreateClick&&t.statGroupCreateClick({code:e.errcode,msg:e.errmsg}),u.showModal({title:"",content:e&&e.errmsg,showCancel:!1,confirmText:"我知道了"}),console.error("checkCanCreate error",e)},complete:function(){u.hideLoading()}})},preGetCanCreateCount:function(e){h.request({cgi:h.cgiSet.getCanCreateCount,params:{},success:function(t){e&&e(t.count>0)},fail:function(t){e&&e(!0)}})},addGroup:function(){var e=this;this.getCanCreateCount(function(t,i){R.navigateTo({url:"/portal/group-add/group-add?joinConfirmIsOpen="+(e.data.joinConfirmIsOpen?"1":"0")+"&canCreateGroupCount="+t+"&canCreateMsg="+encodeURIComponent(i),complete:function(e){var t=e.joinConfirmIsOpen,i=e.canCreateGroupCount,o=e.canCreateMsg;console.info("navigateTo some params: joinConfirmIsOpen="+t+"&canCreateGroupCount="+i+"&canCreateMsg="+o)}})})},toNewTabIndex:function(e){var t=e.currentTarget.dataset.id;this.changeIndexGroupTab({groupId:t}),this.statIndexGroupClick&&this.statIndexGroupClick({groupId:t})},changeIndexGroupTab:function(e){var t=e.groupId;if(t&&["13104374716925600","2","3"].includes(t)){this.setData({currentGroupId:t,headFriendsShowRed:"13104374716925600"!=t&&this.data.headFriendsShowRed,headGroupShowRed:"2"!=t&&this.data.headGroupShowRed}),"13104374716925600"==t?(this.getTimeline(!0),this.clearRedDot(["friend_buy_red_dot_index"])):this.clearTimelineData();var i=0;this.data.pageScrollTop>=this.data.searchBarHeight&&(i=this.data.searchBarHeight),u.pageScrollTo({scrollTop:i,duration:"devtools"===c.platform?1:0})}},clearTimelineData:function(){this.timelineList=[],this.setData({productListLength:0,favorHasMore:!0,prevSeq:"",nextSeq:"",timelineListIds:[],timelineListToMap:{}})},clearRedDot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.length<=0||h.request({cgi:h.cgiSet.redDotClear,params:{clear_info:e.map(function(e){return{key:e}})}})},toUserProfile:function(){var e=this;this.data.openid&&(this.timer&&(clearTimeout(this.timer),this.timer=0),this.timer=setTimeout(function(){e.stateClickMe&&e.stateClickMe(),e.data.isSetUserProfile||(e.setData({isSetUserProfile:!0}),u.setStorageSync(e.user_profile_set_cache_key,1)),e.data.showProfileRed&&(e.setData({showProfileRed:!1}),e.clearRedDot(["profile_red_dot_index"])),R.openUserProfile({openid:e.data.openid,group_id:!0,fromScene:"index-right-click"})},10))},toGroupProfile:function(e){var i=e.detail,o=i.id,n=i.index;this.statIndexGroupRealClick&&this.statIndexGroupRealClick({id:o,index:n}),R.navigateTo({url:"/portal/group-profile/group-profile?group_id="+encodeURIComponent(o)}),this.setData(t({},"indexGroupContacts["+n+"].unread_feed_count",0))},onRecommendListInputPop:function(e){var t=this.data.currentScrollTop+0+e.detail.distance;this.setData({pageScrollTop:t}),u.pageScrollTo({scrollTop:t})},onRecommendListInputShow:function(e){this.setData({currentComment:e.detail.currentComment,currentScrollTop:this.data.pageScrollTop}),console.info("onRecommendListInputShow",this.data.pageScrollTop)},onRecommendListInputBlur:function(){this.setData({currentComment:null,currentScrollTop:0})},onClickSectionItem:function(e){var t=this;this.data.clickId=R.genClickId();var i=e.currentTarget.dataset.path,o=e.currentTarget.dataset.itemname;"收藏"===o&&(i=i+"&has_unread_msg="+(this.data.unReadMsgCnt>0?"1":"0"),setTimeout(function(){t.setData({showFavoriteRed:0})},500),this.statIndexEnterFavorite&&this.statIndexEnterFavorite({has_red_dot:Boolean(this.data.showFavoriteRed)})),R.navigateTo({url:i+(-1===i.indexOf("?")?"?":"&")+"permissionWaiting="+(this.data.permissionWaiting||"")+"&clickId="+this.data.clickId}),"订单"===o&&(this.data.showOrderRed&&setTimeout(function(){t.setData({showOrderRed:0})},500),this.statIndexEnterOrder&&this.statIndexEnterOrder({has_red_dot:Boolean(this.data.showOrderRed)})),"msg"===o&&(this.data.showMessageRed&&(L.report({logId:16499,logString:["shopping-list","msg-red-dot",2,this.data.sessionId,"4"].join(",")}),setTimeout(function(){t.setData({showMessageRed:0})},1e3)),this.data.perMsgItemStr&&setTimeout(function(){G.clear(),t.setData({perMsgItemStr:""})},1e3),this.clearRedDot(["show_red","outer_show_red","message_red_dot_index"]),this.statIndexEnterMessage&&this.statIndexEnterMessage({has_red_dot:Boolean(this.data.showMessageRed)}))},clickActionSheet:function(e){"我的推荐"===e.detail.content?this.toMyRecommendList():"授权管理"===e.detail.content?this.toPermissionList():"联系卖家"===e.detail.content?this.toContactSellerIndex():"公众号关注者"===e.detail.content?this.toBizList():"关于好物圈"===e.detail.content?this.toAbout():"吐槽"===e.detail.content&&this.toTuCao()},onClickContact:function(e){var t=e.detail.product.product_item;t?S.gotoWithProduct({src_wxapp_id:t.src_wxapp_id,src_wxapp_path:t.src_wxapp_path,item_code:t.item_code,sku_id:t.sku_list[0].sku_id,title:t.title,image_url:t.image_list[0],price:t.sku_list[0].price,original_price:t.sku_list[0].original_price,source:t.source},{appid:t.src_wxapp_id}):console.error("product empty")},onDismissDialog:function(e){var t=null;"tap"===e.type?t=e.currentTarget.dataset.userInfo:"dismiss"===e.type&&(t=e.detail.userInfo),t&&t.key&&t.value&&(u.setStorageSync(t.key,t.value),t.key===O.firstChangeEntryTip&&this.statEntryGuideMask&&this.statEntryGuideMask()),this.setData({dialog:{show:!1}})},hideActionSheet:function(){this.setData({showActionSheet:!1})},getProductId:function(e){if(e)return e.unique_id||"id_"+e.appid+e.product_item.item_code+e.product_item.source+e.info.comment_id},onClearRightTopReddot:function(){this.setData({showAuthTip:!1})},queryListDataViewHeight:function(){var e=this;u.nextTick(function(){u.createSelectorQuery().in(e).select("#listDataView").boundingClientRect(function(t){t&&t.height<c.windowHeight&&e.onReachBottom()}).exec()})},takeVideo:function(){var e=this;this.willUGCReport();var t=function(t){console.info(t),e.didQuitTakeMediaReport({message:t.message||"用户退出"}),t.message&&o.default.showErrTips(t.message)};try{var i=u.getStorageSync("uncommited_content");i?R.navigateTo({url:"/portal/ugc-publish/ugc-publish?recommit="+encodeURIComponent(JSON.stringify(i))}):(this.willTakeMediaReport(),this.preventPageRefresh=!0,w.chooseMedia(9,w.Mode.Video|w.Mode.Image).then(function(t){e.preventPageRefresh=!1,e.didTakeMediaReport({count:t.length,list:t.map(function(e){return{source:e.source,type:e.type}})}),setTimeout(function(){console.info("index: jump to ugc-preview"),R.navigateTo({url:"/portal/ugc-preview/ugc-preview?mediaList="+encodeURIComponent(JSON.stringify(t))+"&group="+encodeURIComponent(JSON.stringify(e.data.currentGroupInfo&&e.data.currentGroupInfo.base||null))})},200)}).catch(function(i){e.preventPageRefresh=!1,t(i)}))}catch(i){this.willTakeMediaReport(),this.preventPageRefresh=!0,w.chooseMedia(9,w.Mode.Video|w.Mode.Image).then(function(t){e.preventPageRefresh=!1,e.didTakeMediaReport({count:t.length,list:t.map(function(e){return{source:e.source,type:e.type}})}),setTimeout(function(){console.info("index: jump to ugc-preview"),R.navigateTo({url:"/portal/ugc-preview/ugc-preview?mediaList="+encodeURIComponent(JSON.stringify(t))+"&group="+encodeURIComponent(JSON.stringify(e.data.currentGroupInfo&&e.data.currentGroupInfo.base||null))})},200)}).catch(function(i){e.preventPageRefresh=!1,t(i)})}},takeSearch:function(){return void R.navigateTo({url:"/search/search-new/search-new"})},uploadVideo:function(e){return new Promise(function(t,i){var o=H();u.uploadFile({url:"https://cloudim.weixin.qq.com/aecdnuploadfile",filePath:e,name:"file",header:{"X-WECHAT-PRODUCTID":"NTAy","AUTH-FOR-ILINK-PLUGIN":"UX_WEAPP_AUTH","AUTH-KEY":"refererurl="+encodeURIComponent("/"+c.cgiPrefix+"/check/login")+"&session_key="+encodeURIComponent(h._ticket.session_key)},formData:{ReqData:JSON.stringify({NeedThumb:0,NeedEncrypt:0,File:o,Appid:"",Roomid:""})},success:function(e){var o=JSON.safeParse(e.data);o.FileId?t({video_url:o.FileId}):i()},fail:function(e){i()}})})},uploadVideoThumb:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"thumb_url";return new Promise(function(i,o){var n=H();u.uploadFile({url:"https://wxa.weixin.qq.com/"+c.cgiPrefix+"/media/upload-image",filePath:e,name:n,formData:{session_key:h._ticket.session_key},success:function(e){var n=JSON.safeParse(e.data);if(200===e.statusCode&&0===n.errcode){var r={};r[t]=n.image_url,i(r)}else o()},fail:function(e){o()}})})},publishVideo:function(e,t,i){return t&&(t={width:t.width,height:t.height,size:t.size,duration:t.duration,thumb_url:t.thumb_url,title:t.title||"",subtitle:t.subTitle||"",poi:t.poi,appid:t.appId||"",item_code:t.itemCode||"",source:t.source||0,product_url:t.product_url||""}),new Promise(function(o,n){f.do({action:1,comment:t&&t.subtitle,video_url:e,extbuf:t,group_id:i,success:o,fail:n})})},updateIndexGroupInfo:function(e){var t=-1,i={};this.data.indexGroupContacts.slice().forEach(function(o,n){o.base.id===e.id&&(i["indexGroupContacts["+n+"].base.head_img_url"]=e.head_img_url,i["indexGroupContacts["+n+"].base.name"]=e.name,t=n)}),-1!==t&&this.setData(i)},deleteIndexGroup:function(e){if(this.data.closeListInfinity){var i=e.group_id,o="",n=this.data.timelineListToMap;for(var r in n)if(n[r]&&n[r].group_item&&n[r].group_item.group_id===i){o=r;break}o&&this.setData(t({},"timelineListToMap."+o,null)),this.timelineList=this.timelineList.filter(function(e){return!(e.group_item&&e.group_item.group_id==i)}),this.timeline.cacheList(this.timelineList)}else{var a=e.group_id,s="",d=this.data.timelineDataMap;for(var u in d)if(d[u].group_item&&d[u].group_item.group_id===a){s=d[u].unique_id;break}s&&this.infinityList.removeItemById(s)}},onDeleteByItem:function(e){var t=e.detail.product;this.statIndexDelRecommend&&this.statIndexDelRecommend({appid:t.appid,item_code:t.product_item.item_code}),(e.detail.reason_id||e.detail.reason_name)&&this.stateChooseIgnoreReason&&this.stateChooseIgnoreReason({appid:t.appid,item_code:t.product_item.item_code,comment_id:t.info.comment_id,reason_id:e.detail.reason_id,reason_name:e.detail.reason_name}),this.data.closeListInfinity&&this.queryListDataViewHeight()},getReasonAll:function(){var e=this;h.request({cgi:h.cgiSet.getReasonAll,params:{types:[5,6,7]},success:function(t){var i=void 0,o=void 0,n=void 0;(t.type_reason||[]).forEach(function(e){5==e.type?o=e.reason||U:6==e.type?n=e.reason||U:7==e.type&&(i=e.reason||U)}),getApp().globalData.timelineReasons=o,getApp().globalData.groupFeedReasons=n,getApp().globalData.allRecommendReasons=i,e.setData({allRecommendReasons:i,timelineReasons:o,groupFeedReasons:n})},fail:function(e){console.error("get_reason_all error",e)}})},onBlockUser:function(e){var t=this,i=e.openids;if(this.data.closeListInfinity){var o={};this.timelineList.filter(function(e){return i.includes(e.info.openid)}).forEach(function(e){var i=t.getProductId(e);t.data.timelineListToMap[i]&&(o["timelineListToMap."+i]=null)}),this.timelineList=this.timelineList.filter(function(e){return!i.includes(e.info.openid)}),this.timeline.cacheList(this.timelineList),this.setData(o),this.queryListDataViewHeight()}else{var n=[],r=this.infinityList.timeline.dataMap;for(var a in r)r[a].info&&i.includes(r[a].info.openid)&&n.push(r[a].unique_id);this.infinityList.removeItemById(n)}},onTapProduct:function(e){var t=e.currentTarget.dataset.item;this.statIndexTapProduct&&this.statIndexTapProduct({appid:t.appid,item_code:t.product_item.item_code,comment_id:t.info.comment_id,open_id:t.info.sender.openid})},onTapProductInIndex:function(e){var t=e.detail.product;this.statIndexTapProduct&&this.statIndexTapProduct({appid:t.appid,item_code:t.product_item.item_code,comment_id:t.info.comment_id,open_id:t.info.sender.openid})},onDeleteGroupItem:function(e){var t=e.detail.product;this.statIndexDelRecommend&&this.statIndexDelRecommend({appid:t.appid,item_code:t.product_item.item_code})},onAddFavorite:function(e){this.statIndexAddToFavorite&&this.statIndexAddToFavorite(e.detail)},onFeedBackClick:function(e){this.statFeedBackClick&&this.statFeedBackClick()},onRemoveFavorite:function(e){this.statIndexRemoveFromFavorite&&this.statIndexRemoveFromFavorite(e.detail)},onDoComment:function(e){this.statIndexDoComment&&this.statIndexDoComment(e.detail)},onDoReply:function(e){this.statIndexDoReply&&this.statIndexDoReply(e.detail)},onDelComment:function(e){this.statIndexDelComment&&this.statIndexDelComment(e.detail)},onDelReply:function(e){this.statIndexDelReply&&this.statIndexDelReply(e.detail)},onDoLike:function(e){this.statIndexDoLike&&this.statIndexDoLike(e.detail)},onCancelLike:function(e){this.statIndexCancelLike&&this.statIndexCancelLike(e.detail)},onToProductDetail:function(e){this.statIndexToProductDetail&&this.statIndexToProductDetail(e.detail)},onToPreviewImage:function(e){this.statIndexToProductImage&&this.statIndexToProductImage(e.detail)},onImageSwipe:function(e){this.statIndexImageSwipe&&this.statIndexImageSwipe(e.detail)},onShareClick:function(e){this.statIndexShareClick&&this.statIndexShareClick(e.detail)},onShareOver:function(e){this.statIndexShareOver&&this.statIndexShareOver(e.detail)},onOpenUserProfile:function(e){this.statOpenUserProfile&&this.statOpenUserProfile(e)},onShowPanelReport:function(e){var t=e.detail;this.statEveryBuyItemCardClickImg&&this.statEveryBuyItemCardClickImg(t)},visit3rdgoodsdetailReport:function(e){var t=e.detail;this.statEveryBuyItemCardClickDetail&&this.statEveryBuyItemCardClickDetail(t)},onClickRecommendNewReport:function(e){var t=e.detail;this.statEveryBuyItemCardClickRecommend&&this.statEveryBuyItemCardClickRecommend(t)},addOpenProductReport:function(e){var t=e.detail;this.statEveryBuyItemCardClickAddToFavorite&&this.statEveryBuyItemCardClickAddToFavorite(t)},removeOpenProductReport:function(e){var t=e.detail;this.statEveryBuyItemCardClickRemoveToFavorite&&this.statEveryBuyItemCardClickRemoveToFavorite(t)},onToShareProductDetail:function(e){var t=e.detail.product;this.statIndexTapProduct&&this.statIndexTapProduct({appid:t.appid,item_code:t.product_item.item_code,comment_id:t.info.comment_id,open_id:t.info.sender.openid,group_id:t.info.group_id||""})},onToShareProductDetailInIndex:function(e){var t=e.detail.product;this.statIndexTapProduct&&this.statIndexTapProduct({appid:t.appid,item_code:t.product_item.item_code,comment_id:t.info.comment_id,open_id:t.info.sender.openid,group_id:t.info.group_id||""})},onToPreviewImageInIndex:function(e){this.statIndexToProductImage&&this.statIndexToProductImage(e.detail)},onGroupCreateClick:function(e){this.statGroupCreateClick&&this.statGroupCreateClick(e.detail)},onShowPanel:function(e){"like"===e.detail.panelType?this.statClickLikeIcon&&this.statClickLikeIcon(e.detail):this.statClickCommentIcon&&this.statClickCommentIcon(e.detail)},onClickBuyCategoryMore:function(){this.statEveryBuyTabClick&&this.statEveryBuyTabClick()},onDeleteEveryBuyItem:function(e){var t=e.detail,i=t.index,o=t.appid,n=t.item_code,r=t.reason_id,a=t.reason_name,s=this.data.categoryRecommendList;s.splice(i,1),this.setData({categoryRecommendList:s,categoryRecommendListLen:this.data.categoryRecommendListLen-1}),this.stateChooseIgnoreReason&&this.stateChooseIgnoreReason({appid:o,item_code:n,reason_id:r,reason_name:a})},willUGCReport:function(){},willTakeMediaReport:function(){},didQuitTakeMediaReport:function(e){},didTakeMediaReport:function(e){},onClickGroupName:function(e){this.statClickGroup&&this.statClickGroup(e.detail)},onClickGroupFolder:function(e){var i=this;if(this.data.closeListInfinity)setTimeout(function(){var o=e.detail.unique_id;if(o in i.data.timelineListToMap){var n;i.setData((n={},t(n,"timelineListToMap."+o+".group_item.unread_msg",""),t(n,"timelineListToMap."+o+".group_item.unread_count",0),n))}i.timelineList.filter(function(e){return e.unique_id==o}).forEach(function(e){e.group_item.unread_msg="",e.group_item.unread_count=0}),i.timeline.cacheList(i.timelineList)},250);else{var o=e.detail.unique_id,n=E(this.data.timelineDataMap[o]);n&&n.group_item&&(n.group_item.unread_msg="",n.group_item.unread_count=0),setTimeout(function(){i.infinityList.updateItem(n)},250)}this.statClickGroupFolder&&this.statClickGroupFolder(e.detail)}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/forbid/forbid';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/forbid/forbid.js';	define("pages/forbid/forbid.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(a){}}); 
 			}); 	require("pages/forbid/forbid.js");
 		__wxRoute = 'pages/live/live';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/live/live.js';	define("pages/live/live.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../live/live-mgr"),e=getApp(),a="http://player.jsforfun.com/live/haowuquan-live-demo.flv";Page({data:{roomName:"jation正在直播写代码",roomId:"",userInfo:{},liveUrl:a,isActor:!1,audienceCount:0,frontCamera:!0,cameraContext:{},mode:"SD",muted:!1,enableCamera:!0,orientation:"vertical",beauty:6.3,whiteness:3,backgroundMute:!1,headerHeight:e.globalData.liveHeaderHeight,statusBarHeight:e.globalData.liveStatusBarHeight,winW:e.globalData.windowWidth,winH:e.globalData.windowHeight},updateAudienceNumIterval:null,onSwitchCameraClick:function(){this.data.frontCamera=!this.data.frontCamera,this.setData({frontCamera:this.data.frontCamera}),this.data.cameraContext.switchCamera()},onBeautyClick:function(){0!=this.data.beauty?this.data.beauty=0:this.data.beauty=6.3,this.setData({beauty:this.data.beauty})},onWhitenessClick:function(){0!=this.data.whiteness?this.data.whiteness=0:this.data.whiteness=3,this.setData({whiteness:this.data.whiteness})},onMuteClick:function(){this.setData({muted:!this.data.muted})},onPushEvent:function(t){console.warn("liveUrl",this.data.liveUrl),console.log("推流",JSON.stringify(t)),-1307==t.detail.code&&(this.stop(),wx.showToast({title:"推流多次失败"}))},onPlayEvent:function(t){console.log(">>>>",JSON.stringify(t.detail)),-2301==t.detail.code&&(this.stop(),wx.showToast({title:"多次失败，放弃重连"})),2004==t.detail.code&&wx.hideLoading()},stop:function(){this.data.cameraContext.stop()},createContext:function(){var t=this;this.setData({cameraContext:wx.createLivePusherContext("camera-push")},function(){t.data.cameraContext.start()})},onLoad:function(e){var o={};try{var i=JSON.parse(decodeURIComponent(e.liveOption));console.log(i),o={userInfo:i.userInfo,roomId:i.roomdId,roomName:i.roomName,isActor:i.isActor,liveUrl:i.liveUrl},console.log("dataForSet",o),i.isActor||t.onEnterRoom({room_id:i.roomdId})}catch(t){o={userInfo:{},roomName:"jation正在直播写代码！",liveUrl:a,isActor:!1,roomId:""}}this.setData(o)},onReady:function(){this.createContext(),wx.setKeepScreenOn({keepScreenOn:!0})},onShow:function(){var t=this;wx.setKeepScreenOn({keepScreenOn:!0}),this.updateAudienceNumIterval=setInterval(function(){t.updateAudienceNum()},2e3)},onHide:function(){clearInterval(this.updateAudienceNumIterval),this.data.isActor||t.onExitRoom({room_id:this.data.roomId})},updateAudienceNum:function(){var e=this;this.data.roomId&&t.getAudienceNum({room_id:this.data.roomId,success:function(t){e.setData({audienceCount:t.num||0})},fail:function(){},compelete:function(){}})},onUnload:function(){this.data.isActor?t.deleteRoom({room_id:this.data.roomId}):t.onExitRoom({room_id:this.data.roomId}),this.stop(),wx.setKeepScreenOn({keepScreenOn:!1})},onShareAppMessage:function(){return console.log("onLoad onShareAppMessage"),{path:"/pages/home-page/main",imageUrl:"https://mc.qcloudimg.com/static/img/dacf9205fe088ec2fef6f0b781c92510/share.png"}},onBack:function(){wx.navigateBack({delta:1})}}); 
 			}); 	require("pages/live/live.js");
 	