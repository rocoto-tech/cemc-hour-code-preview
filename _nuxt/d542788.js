(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{354:function(e,t,o){"use strict";o.r(t);var r={layout:"game",data:function(){return{personaje:{x:0,y:200,orientation:"right"},texto:" Es momento de regresar a casa, usa el nuevo bloque(imagen de IF) para completar el reto.",objects:[{id:"carro",x:100,y:100}],matrix:[[.44590093,.13584191,29.13048],[.00168607,-.14867036,503.18936819],[157e-8,39185e-8,1]],colisiones:[]}}},n=o(8),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Level",{attrs:{objects:this.objects,matrix:this.matrix,instruccion:this.texto,personaje_pos:this.personaje,esquinas:this.esquinas,colisiones:this.colisiones},scopedSlots:e._u([{key:"game",fn:function(e){return[o("Game",{attrs:{frame:e.url,image:"level9.png"},on:{"hook:mounted":function(t){return e.context.loaded()}}},[void 0],2)]}},{key:"toolbox",fn:function(){return[o("xml",{pre:!0,attrs:{id:"toolbox",style:"display: none"}},[o("block",{pre:!0,attrs:{type:"controls_repeat_ext"}},[o("value",{pre:!0,attrs:{name:"TIMES"}},[o("shadow",{pre:!0,attrs:{type:"math_number"}},[o("field",{pre:!0,attrs:{name:"NUM"}},[e._v("10")])],1)])],1),o("block",{pre:!0,attrs:{type:"to_left"}}),o("block",{pre:!0,attrs:{type:"to_right"}}),o("block",{pre:!0,attrs:{type:"avanzar"}})],1)]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Game:o(118).default,Level:o(117).default})}}]);