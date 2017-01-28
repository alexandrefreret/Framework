/*!
 * Cropper v3.0.0-alpha
 * https://github.com/fengyuanchen/cropper
 *
 * Copyright (c) 2017 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2017-01-15T05:01:51.904Z
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e(t.$)}(this,function(t){"use strict";function e(t){return"number"==typeof t&&!isNaN(t)}function i(t){return"undefined"==typeof t}function a(t,i){var a=[];return e(i)&&a.push(i),a.slice.apply(t,a)}function o(t,e){for(var i=arguments.length,o=Array(i>2?i-2:0),n=2;n<i;n++)o[n-2]=arguments[n];return function(){for(var i=arguments.length,n=Array(i),r=0;r<i;r++)n[r]=arguments[r];return t.apply(e,o.concat(a(n)))}}function n(e){var i=[];return t.each(e,function(t){i.push(t)}),i}function r(t){var e=t.match(/^(https?:)\/\/([^:\/?#]+):?(\d*)/i);return e&&(e[1]!==location.protocol||e[2]!==location.hostname||e[3]!==location.port)}function h(t){var e="timestamp="+(new Date).getTime();return t+(t.indexOf("?")===-1?"?":"&")+e}function s(t){return t?' crossOrigin="'+t+'"':""}function d(t,e){if(t.naturalWidth&&!B)return void e(t.naturalWidth,t.naturalHeight);var i=document.createElement("img");i.onload=function(){e(this.width,this.height)},i.src=t.src}function c(t){var i=[],a=t.rotate,o=t.scaleX,n=t.scaleY;return e(a)&&0!==a&&i.push("rotate("+a+"deg)"),e(o)&&1!==o&&i.push("scaleX("+o+")"),e(n)&&1!==n&&i.push("scaleY("+n+")"),i.length?i.join(" "):"none"}function p(t,e){var i=Math.abs(t.degree)%180,a=(i>90?180-i:i)*Math.PI/180,o=Math.sin(a),n=Math.cos(a),r=t.width,h=t.height,s=t.aspectRatio,d=void 0,c=void 0;return e?(d=r/(n+o/s),c=d/s):(d=r*n+h*o,c=r*o+h*n),{width:d,height:c}}function l(i,a){var o=t("<canvas>")[0],n=o.getContext("2d"),r=0,h=0,s=a.naturalWidth,d=a.naturalHeight,c=a.rotate,l=a.scaleX,g=a.scaleY,m=e(l)&&e(g)&&(1!==l||1!==g),f=e(c)&&0!==c,u=f||m,v=s*Math.abs(l||1),w=d*Math.abs(g||1),x=void 0,b=void 0,y=void 0;return m&&(x=v/2,b=w/2),f&&(y=p({width:v,height:w,degree:c}),v=y.width,w=y.height,x=v/2,b=w/2),o.width=v,o.height=w,u&&(r=-s/2,h=-d/2,n.save(),n.translate(x,b)),f&&n.rotate(c*Math.PI/180),m&&n.scale(l,g),n.drawImage(i,Math.floor(r),Math.floor(h),Math.floor(s),Math.floor(d)),u&&n.restore(),o}function g(t,e,i){var a="",o=void 0;for(o=e,i+=e;o<i;o++)a+=k(t.getUint8(o));return a}function m(t){var e=new DataView(t),i=e.byteLength,a=void 0,o=void 0,n=void 0,r=void 0,h=void 0,s=void 0,d=void 0,c=void 0,p=void 0,l=void 0;if(255===e.getUint8(0)&&216===e.getUint8(1))for(p=2;p<i;){if(255===e.getUint8(p)&&225===e.getUint8(p+1)){d=p;break}p++}if(d&&(o=d+4,n=d+10,"Exif"===g(e,o,4)&&(s=e.getUint16(n),h=18761===s,(h||19789===s)&&42===e.getUint16(n+2,h)&&(r=e.getUint32(n+4,h),r>=8&&(c=n+r)))),c)for(i=e.getUint16(c,h),l=0;l<i;l++)if(p=c+12*l+2,274===e.getUint16(p,h)){p+=8,a=e.getUint16(p,h),B&&e.setUint16(p,1,h);break}return a}function f(t){var e=t.replace(C,""),i=atob(e),a=i.length,o=new ArrayBuffer(a),n=new Uint8Array(o),r=void 0;for(r=0;r<a;r++)n[r]=i.charCodeAt(r);return o}function u(t){var e=new Uint8Array(t),i=e.length,a="",o=void 0;for(o=0;o<i;o++)a+=k(e[o]);return"data:image/jpeg;base64,"+btoa(a)}function v(e,i){var a=e.pageX,o=e.pageY,n={endX:a,endY:o};return i?n:t.extend({startX:a,startY:o},n)}function w(e){var i=t.extend({},e),a=[];return t.each(e,function(e,o){delete i[e],t.each(i,function(t,e){var i=Math.abs(o.startX-e.startX),n=Math.abs(o.startY-e.startY),r=Math.abs(o.endX-e.endX),h=Math.abs(o.endY-e.endY),s=Math.sqrt(i*i+n*n),d=Math.sqrt(r*r+h*h),c=(d-s)/s;a.push(c)})}),a.sort(function(t,e){return Math.abs(t)<Math.abs(e)}),a[0]}function x(e){var i=0,a=0,o=0;return t.each(e,function(t,e){var n=e.startX,r=e.startY;i+=n,a+=r,o+=1}),i/=o,a/=o,{pageX:i,pageY:a}}t="default"in t?t.default:t;var b={viewMode:0,dragMode:"crop",aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},y='<div class="cropper-container"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>',C=/^data:([^;]+);base64,/,M=/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i,$="undefined"!=typeof window?window.navigator:null,B=$&&M.test($.userAgent),k=String.fromCharCode,T={render:function(){var t=this;t.initContainer(),t.initCanvas(),t.initCropBox(),t.renderCanvas(),t.cropped&&t.renderCropBox()},initContainer:function(){var t=this,e=t.options,i=t.$element,a=t.$container,o=t.$cropper,n="cropper-hidden";o.addClass(n),i.removeClass(n),o.css(t.container={width:Math.max(a.width(),Number(e.minContainerWidth)||200),height:Math.max(a.height(),Number(e.minContainerHeight)||100)}),i.addClass(n),o.removeClass(n)},initCanvas:function(){var e=this,i=e.options.viewMode,a=e.container,o=a.width,n=a.height,r=e.image,h=r.naturalWidth,s=r.naturalHeight,d=90===Math.abs(r.rotate),c=d?s:h,p=d?h:s,l=c/p,g=o,m=n;n*l>o?3===i?g=n*l:m=o/l:3===i?m=o/l:g=n*l;var f={naturalWidth:c,naturalHeight:p,aspectRatio:l,width:g,height:m};f.oldLeft=f.left=(o-g)/2,f.oldTop=f.top=(n-m)/2,e.canvas=f,e.limited=1===i||2===i,e.limitCanvas(!0,!0),e.initialImage=t.extend({},r),e.initialCanvas=t.extend({},f)},limitCanvas:function(t,e){var i=this,a=i.options,o=a.viewMode,n=i.container,r=n.width,h=n.height,s=i.canvas,d=s.aspectRatio,c=i.cropBox,p=i.cropped&&c;if(t){var l=Number(a.minCanvasWidth)||0,g=Number(a.minCanvasHeight)||0;o&&(o>1?(l=Math.max(l,r),g=Math.max(g,h),3===o&&(g*d>l?l=g*d:g=l/d)):l?l=Math.max(l,p?c.width:0):g?g=Math.max(g,p?c.height:0):p&&(l=c.width,g=c.height,g*d>l?l=g*d:g=l/d)),l&&g?g*d>l?g=l/d:l=g*d:l?g=l/d:g&&(l=g*d),s.minWidth=l,s.minHeight=g,s.maxWidth=1/0,s.maxHeight=1/0}if(e)if(o){var m=r-s.width,f=h-s.height;s.minLeft=Math.min(0,m),s.minTop=Math.min(0,f),s.maxLeft=Math.max(0,m),s.maxTop=Math.max(0,f),p&&i.limited&&(s.minLeft=Math.min(c.left,c.left+c.width-s.width),s.minTop=Math.min(c.top,c.top+c.height-s.height),s.maxLeft=c.left,s.maxTop=c.top,2===o&&(s.width>=r&&(s.minLeft=Math.min(0,m),s.maxLeft=Math.max(0,m)),s.height>=h&&(s.minTop=Math.min(0,f),s.maxTop=Math.max(0,f))))}else s.minLeft=-s.width,s.minTop=-s.height,s.maxLeft=r,s.maxTop=h},renderCanvas:function(t){var e=this,i=e.canvas,a=e.image,o=a.rotate,n=a.naturalWidth,r=a.naturalHeight,h=void 0,s=void 0;e.rotated&&(e.rotated=!1,s=p({width:a.width,height:a.height,degree:o}),h=s.width/s.height,h!==i.aspectRatio&&(i.left-=(s.width-i.width)/2,i.top-=(s.height-i.height)/2,i.width=s.width,i.height=s.height,i.aspectRatio=h,i.naturalWidth=n,i.naturalHeight=r,o%180&&(s=p({width:n,height:r,degree:o}),i.naturalWidth=s.width,i.naturalHeight=s.height),e.limitCanvas(!0,!1))),(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),e.limitCanvas(!1,!0),i.oldLeft=i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.oldTop=i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),e.$canvas.css({width:i.width,height:i.height,left:i.left,top:i.top}),e.renderImage(),e.cropped&&e.limited&&e.limitCropBox(!0,!0),t&&e.output()},renderImage:function(e){var i=this,a=i.canvas,o=i.image,n=void 0;o.rotate&&(n=p({width:a.width,height:a.height,degree:o.rotate,aspectRatio:o.aspectRatio},!0)),t.extend(o,n?{width:n.width,height:n.height,left:(a.width-n.width)/2,top:(a.height-n.height)/2}:{width:a.width,height:a.height,left:0,top:0}),i.$clone.css({width:o.width,height:o.height,marginLeft:o.left,marginTop:o.top,transform:c(o)}),e&&i.output()},initCropBox:function(){var e=this,i=e.options,a=e.canvas,o=i.aspectRatio,n=Number(i.autoCropArea)||.8,r={width:a.width,height:a.height};o&&(a.height*o>a.width?r.height=r.width/o:r.width=r.height*o),e.cropBox=r,e.limitCropBox(!0,!0),r.width=Math.min(Math.max(r.width,r.minWidth),r.maxWidth),r.height=Math.min(Math.max(r.height,r.minHeight),r.maxHeight),r.width=Math.max(r.minWidth,r.width*n),r.height=Math.max(r.minHeight,r.height*n),r.oldLeft=r.left=a.left+(a.width-r.width)/2,r.oldTop=r.top=a.top+(a.height-r.height)/2,e.initialCropBox=t.extend({},r)},limitCropBox:function(t,e){var i=this,a=i.options,o=a.aspectRatio,n=i.container,r=n.width,h=n.height,s=i.canvas,d=i.cropBox,c=i.limited;if(t){var p=Number(a.minCropBoxWidth)||0,l=Number(a.minCropBoxHeight)||0,g=Math.min(r,c?s.width:r),m=Math.min(h,c?s.height:h);p=Math.min(p,r),l=Math.min(l,h),o&&(p&&l?l*o>p?l=p/o:p=l*o:p?l=p/o:l&&(p=l*o),m*o>g?m=g/o:g=m*o),d.minWidth=Math.min(p,g),d.minHeight=Math.min(l,m),d.maxWidth=g,d.maxHeight=m}e&&(c?(d.minLeft=Math.max(0,s.left),d.minTop=Math.max(0,s.top),d.maxLeft=Math.min(r,s.left+s.width)-d.width,d.maxTop=Math.min(h,s.top+s.height)-d.height):(d.minLeft=0,d.minTop=0,d.maxLeft=r-d.width,d.maxTop=h-d.height))},renderCropBox:function(){var t=this,e=t.options,i=t.container,a=i.width,o=i.height,n=t.cropBox;(n.width>n.maxWidth||n.width<n.minWidth)&&(n.left=n.oldLeft),(n.height>n.maxHeight||n.height<n.minHeight)&&(n.top=n.oldTop),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),t.limitCropBox(!1,!0),n.oldLeft=n.left=Math.min(Math.max(n.left,n.minLeft),n.maxLeft),n.oldTop=n.top=Math.min(Math.max(n.top,n.minTop),n.maxTop),e.movable&&e.cropBoxMovable&&t.$face.data("action",n.width===a&&n.height===o?"move":"all"),t.$cropBox.css({width:n.width,height:n.height,left:n.left,top:n.top}),t.cropped&&t.limited&&t.limitCanvas(!0,!0),t.disabled||t.output()},output:function(){var t=this;t.preview(),t.completed&&t.trigger("crop",t.getData())}},D="preview",W={initPreview:function(){var e=this,i=s(e.crossOrigin),a=i?e.crossOriginUrl:e.url,o=void 0;e.$preview=t(e.options.preview),e.$clone2=o=t("<img "+i+' src="'+a+'">'),e.$viewBox.html(o),e.$preview.each(function(e,o){var n=t(o);n.data(D,{width:n.width(),height:n.height(),html:n.html()}),n.html("<img "+i+' src="'+a+'" style="display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;">')})},resetPreview:function(){this.$preview.each(function(e,i){var a=t(i),o=a.data(D);a.css({width:o.width,height:o.height}).html(o.html).removeData(D)})},preview:function(){var e=this,i=e.image,a=e.canvas,o=e.cropBox,n=o.width,r=o.height,h=i.width,s=i.height,d=o.left-a.left-i.left,p=o.top-a.top-i.top;e.cropped&&!e.disabled&&(e.$clone2.css({width:h,height:s,marginLeft:-d,marginTop:-p,transform:c(i)}),e.$preview.each(function(e,a){var o=t(a),l=o.data(D),g=l.width,m=l.height,f=g,u=m,v=1;n&&(v=g/n,u=r*v),r&&u>m&&(v=m/r,f=n*v,u=m),o.css({width:f,height:u}).find("img").css({width:h*v,height:s*v,marginLeft:-d*v,marginTop:-p*v,transform:c(i)})}))}},X="undefined"!=typeof window?window.PointerEvent:null,Y=X?"pointerdown":"touchstart mousedown",H=X?"pointermove":"touchmove mousemove",z=X?" pointerup pointercancel":"touchend touchcancel mouseup",L="wheel mousewheel DOMMouseScroll",O="dblclick",R="resize",N="cropstart",I="cropmove",P="cropend",E="crop",U="zoom",A={bind:function(){var e=this,i=e.options,a=e.$element,n=e.$cropper;t.isFunction(i.cropstart)&&a.on(N,i.cropstart),t.isFunction(i.cropmove)&&a.on(I,i.cropmove),t.isFunction(i.cropend)&&a.on(P,i.cropend),t.isFunction(i.crop)&&a.on(E,i.crop),t.isFunction(i.zoom)&&a.on(U,i.zoom),n.on(Y,o(e.cropStart,this)),i.zoomable&&i.zoomOnWheel&&n.on(L,o(e.wheel,this)),i.toggleDragModeOnDblclick&&n.on(O,o(e.dblclick,this)),t(document).on(H,e.onCropMove=o(e.cropMove,this)).on(z,e.onCropEnd=o(e.cropEnd,this)),i.responsive&&t(window).on(R,e.onResize=o(e.resize,this))},unbind:function(){var e=this,i=e.options,a=e.$element,o=e.$cropper;t.isFunction(i.cropstart)&&a.off(N,i.cropstart),t.isFunction(i.cropmove)&&a.off(I,i.cropmove),t.isFunction(i.cropend)&&a.off(P,i.cropend),t.isFunction(i.crop)&&a.off(E,i.crop),t.isFunction(i.zoom)&&a.off(U,i.zoom),o.off(Y,e.cropStart),i.zoomable&&i.zoomOnWheel&&o.off(L,e.wheel),i.toggleDragModeOnDblclick&&o.off(O,e.dblclick),t(document).off(H,e.onCropMove).off(z,e.onCropEnd),i.responsive&&t(window).off(R,e.onResize)}},j=/^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,F={resize:function(){var e=this,i=e.options.restore,a=e.$container,o=e.container;if(!e.disabled&&o){var n=a.width()/o.width;1===n&&a.height()===o.height||!function(){var a=void 0,o=void 0;i&&(a=e.getCanvasData(),o=e.getCropBoxData()),e.render(),i&&(e.setCanvasData(t.each(a,function(t,e){a[t]=e*n})),e.setCropBoxData(t.each(o,function(t,e){o[t]=e*n})))}()}},dblclick:function(){var t=this;t.disabled||t.setDragMode(t.$dragBox.hasClass("cropper-crop")?"move":"crop")},wheel:function(t){var e=this,i=t.originalEvent||t,a=Number(e.options.wheelZoomRatio)||.1;if(!e.disabled&&(t.preventDefault(),!e.wheeling)){e.wheeling=!0,setTimeout(function(){e.wheeling=!1},50);var o=1;i.deltaY?o=i.deltaY>0?1:-1:i.wheelDelta?o=-i.wheelDelta/120:i.detail&&(o=i.detail>0?1:-1),e.zoom(-o*a,t)}},cropStart:function(e){var i=this;if(!i.disabled){var a=i.options,o=i.pointers,r=e.originalEvent,h=void 0;if(r&&r.changedTouches?t.each(r.changedTouches,function(t,e){o[e.identifier]=v(e)}):o[r&&r.pointerId||0]=v(e),h=n(o).length>1&&a.zoomable&&a.zoomOnTouch?"zoom":t(e.target).data("action"),j.test(h)){if(i.trigger("cropstart",{originalEvent:r,action:h}).isDefaultPrevented())return;e.preventDefault(),i.action=h,i.cropping=!1,"crop"===h&&(i.cropping=!0,i.$dragBox.addClass("cropper-modal"))}}},cropMove:function(e){var i=this,a=i.action;if(!i.disabled&&a){var o=i.pointers,n=e.originalEvent;e.preventDefault(),i.trigger("cropmove",{originalEvent:n,action:a}).isDefaultPrevented()||(n&&n.changedTouches?t.each(n.changedTouches,function(e,i){t.extend(o[i.identifier],v(i,!0))}):t.extend(o[n&&n.pointerId||0],v(e,!0)),i.change(e))}},cropEnd:function(e){var i=this,a=i.action;if(!i.disabled&&a){var o=i.pointers,r=e.originalEvent;e.preventDefault(),r&&r.changedTouches?t.each(r.changedTouches,function(t,e){delete o[e.identifier]}):delete o[r&&r.pointerId||0],n(o).length||(i.action=""),i.cropping&&(i.cropping=!1,i.$dragBox.toggleClass("cropper-modal",i.cropped&&i.options.modal)),i.trigger("cropend",{originalEvent:r,action:a})}}},q="e",S="w",K="s",Z="n",V="se",G="sw",J="ne",Q="nw",_={change:function(e){var i=this,a=i.options,o=i.pointers,r=o[n(o)[0]],h=i.container,s=i.canvas,d=i.cropBox,c=i.action,p=a.aspectRatio,l=d.width,g=d.height,m=d.left,f=d.top,u=m+l,v=f+g,x=0,b=0,y=h.width,C=h.height,M=!0,$=void 0;!p&&e.shiftKey&&(p=l&&g?l/g:1),i.limited&&(x=d.minLeft,b=d.minTop,y=x+Math.min(h.width,s.width,s.left+s.width),C=b+Math.min(h.height,s.height,s.top+s.height));var B={x:r.endX-r.startX,y:r.endY-r.startY};switch(p&&(B.X=B.y*p,B.Y=B.x/p),c){case"all":m+=B.x,f+=B.y;break;case q:if(B.x>=0&&(u>=y||p&&(f<=b||v>=C))){M=!1;break}l+=B.x,p&&(g=l/p,f-=B.Y/2),l<0&&(c=S,l=0);break;case Z:if(B.y<=0&&(f<=b||p&&(m<=x||u>=y))){M=!1;break}g-=B.y,f+=B.y,p&&(l=g*p,m+=B.X/2),g<0&&(c=K,g=0);break;case S:if(B.x<=0&&(m<=x||p&&(f<=b||v>=C))){M=!1;break}l-=B.x,m+=B.x,p&&(g=l/p,f+=B.Y/2),l<0&&(c=q,l=0);break;case K:if(B.y>=0&&(v>=C||p&&(m<=x||u>=y))){M=!1;break}g+=B.y,p&&(l=g*p,m-=B.X/2),g<0&&(c=Z,g=0);break;case J:if(p){if(B.y<=0&&(f<=b||u>=y)){M=!1;break}g-=B.y,f+=B.y,l=g*p}else B.x>=0?u<y?l+=B.x:B.y<=0&&f<=b&&(M=!1):l+=B.x,B.y<=0?f>b&&(g-=B.y,f+=B.y):(g-=B.y,f+=B.y);l<0&&g<0?(c=G,g=0,l=0):l<0?(c=Q,l=0):g<0&&(c=V,g=0);break;case Q:if(p){if(B.y<=0&&(f<=b||m<=x)){M=!1;break}g-=B.y,f+=B.y,l=g*p,m+=B.X}else B.x<=0?m>x?(l-=B.x,m+=B.x):B.y<=0&&f<=b&&(M=!1):(l-=B.x,m+=B.x),B.y<=0?f>b&&(g-=B.y,f+=B.y):(g-=B.y,f+=B.y);l<0&&g<0?(c=V,g=0,l=0):l<0?(c=J,l=0):g<0&&(c=G,g=0);break;case G:if(p){if(B.x<=0&&(m<=x||v>=C)){M=!1;break}l-=B.x,m+=B.x,g=l/p}else B.x<=0?m>x?(l-=B.x,m+=B.x):B.y>=0&&v>=C&&(M=!1):(l-=B.x,m+=B.x),B.y>=0?v<C&&(g+=B.y):g+=B.y;l<0&&g<0?(c=J,g=0,l=0):l<0?(c=V,l=0):g<0&&(c=Q,g=0);break;case V:if(p){if(B.x>=0&&(u>=y||v>=C)){M=!1;break}l+=B.x,g=l/p}else B.x>=0?u<y?l+=B.x:B.y>=0&&v>=C&&(M=!1):l+=B.x,B.y>=0?v<C&&(g+=B.y):g+=B.y;l<0&&g<0?(c=Q,g=0,l=0):l<0?(c=G,l=0):g<0&&(c=J,g=0);break;case"move":i.move(B.x,B.y),M=!1;break;case"zoom":i.zoom(w(o),e.originalEvent),M=!1;break;case"crop":if(!B.x||!B.y){M=!1;break}$=i.$cropper.offset(),m=r.startX-$.left,f=r.startY-$.top,l=d.minWidth,g=d.minHeight,B.x>0?c=B.y>0?V:J:B.x<0&&(m-=l,c=B.y>0?G:Q),B.y<0&&(f-=g),i.cropped||(i.$cropBox.removeClass("cropper-hidden"),i.cropped=!0,i.limited&&i.limitCropBox(!0,!0))}M&&(d.width=l,d.height=g,d.left=m,d.top=f,i.action=c,i.renderCropBox()),t.each(o,function(t,e){e.startX=e.endX,e.startY=e.endY})}},tt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},et=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),it=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)},at={crop:function(){var t=this;t.ready&&!t.disabled&&(t.cropped||(t.cropped=!0,t.limitCropBox(!0,!0),t.options.modal&&t.$dragBox.addClass("cropper-modal"),t.$cropBox.removeClass("cropper-hidden")),t.setCropBoxData(t.initialCropBox))},reset:function(){var e=this;e.ready&&!e.disabled&&(e.image=t.extend({},e.initialImage),e.canvas=t.extend({},e.initialCanvas),e.cropBox=t.extend({},e.initialCropBox),e.renderCanvas(),e.cropped&&e.renderCropBox())},clear:function(){var e=this;e.cropped&&!e.disabled&&(t.extend(e.cropBox,{left:0,top:0,width:0,height:0}),e.cropped=!1,e.renderCropBox(),e.limitCanvas(!0,!0),e.renderCanvas(),e.$dragBox.removeClass("cropper-modal"),e.$cropBox.addClass("cropper-hidden"))},replace:function(t,e){var i=this;!i.disabled&&t&&(i.isImg&&i.$element.attr("src",t),e?(i.url=t,i.$clone.attr("src",t),i.ready&&i.$preview.find("img").add(i.$clone2).attr("src",t)):(i.isImg&&(i.replaced=!0),i.options.data=null,i.load(t)))},enable:function(){var t=this;t.ready&&(t.disabled=!1,t.$cropper.removeClass("cropper-disabled"))},disable:function(){var t=this;t.ready&&(t.disabled=!0,t.$cropper.addClass("cropper-disabled"))},destroy:function(){var t=this,e=t.$element;t.loaded?(t.isImg&&t.replaced&&e.attr("src",t.originalUrl),t.unbuild(),e.removeClass("cropper-hidden")):t.isImg?e.off("load",t.start):t.$clone&&t.$clone.remove(),e.removeData("cropper")},move:function(t,e){var a=this,o=a.canvas;a.moveTo(i(t)?t:o.left+Number(t),i(e)?e:o.top+Number(e))},moveTo:function(t,a){var o=this,n=o.canvas,r=!1;i(a)&&(a=t),t=Number(t),a=Number(a),o.ready&&!o.disabled&&o.options.movable&&(e(t)&&(n.left=t,r=!0),e(a)&&(n.top=a,r=!0),r&&o.renderCanvas(!0))},zoom:function(t,e){var i=this,a=i.canvas;t=Number(t),t=t<0?1/(1-t):1+t,i.zoomTo(a.width*t/a.naturalWidth,e)},zoomTo:function(t,e){var i=this,a=i.options,o=i.pointers,r=i.canvas,h=r.width,s=r.height,d=r.naturalWidth,c=r.naturalHeight;if(t=Number(t),t>=0&&i.ready&&!i.disabled&&a.zoomable){var p=d*t,l=c*t,g=void 0;if(e&&(g=e.originalEvent),i.trigger("zoom",{originalEvent:g,oldRatio:h/d,ratio:p/d}).isDefaultPrevented())return;if(g){var m=i.$cropper.offset(),f=o&&n(o).length?x(o):{pageX:e.pageX||g.pageX||0,pageY:e.pageY||g.pageY||0};r.left-=(p-h)*((f.pageX-m.left-r.left)/h),r.top-=(l-s)*((f.pageY-m.top-r.top)/s)}else r.left-=(p-h)/2,r.top-=(l-s)/2;r.width=p,r.height=l,i.renderCanvas(!0)}},rotate:function(t){var e=this;e.rotateTo((e.image.rotate||0)+Number(t))},rotateTo:function(t){var i=this;t=Number(t),e(t)&&i.ready&&!i.disabled&&i.options.rotatable&&(i.image.rotate=t%360,i.rotated=!0,i.renderCanvas(!0))},scale:function(t,a){var o=this,n=o.image,r=!1;i(a)&&(a=t),t=Number(t),a=Number(a),o.ready&&!o.disabled&&o.options.scalable&&(e(t)&&(n.scaleX=t,r=!0),e(a)&&(n.scaleY=a,r=!0),r&&o.renderImage(!0))},scaleX:function(t){var i=this,a=i.image.scaleY;i.scale(t,e(a)?a:1)},scaleY:function(t){var i=this,a=i.image.scaleX;i.scale(e(a)?a:1,t)},getData:function(e){var i=this,a=i.options,o=i.image,n=i.canvas,r=i.cropBox,h=void 0,s=void 0;return i.ready&&i.cropped?(s={x:r.left-n.left,y:r.top-n.top,width:r.width,height:r.height},h=o.width/o.naturalWidth,t.each(s,function(t,i){i/=h,s[t]=e?Math.round(i):i})):s={x:0,y:0,width:0,height:0},a.rotatable&&(s.rotate=o.rotate||0),a.scalable&&(s.scaleX=o.scaleX||1,s.scaleY=o.scaleY||1),s},setData:function(i){var a=this,o=a.options,n=a.image,r=a.canvas,h={},s=void 0,d=void 0,c=void 0;t.isFunction(i)&&(i=i.call(a.element)),a.ready&&!a.disabled&&t.isPlainObject(i)&&(o.rotatable&&e(i.rotate)&&i.rotate!==n.rotate&&(n.rotate=i.rotate,a.rotated=s=!0),o.scalable&&(e(i.scaleX)&&i.scaleX!==n.scaleX&&(n.scaleX=i.scaleX,d=!0),e(i.scaleY)&&i.scaleY!==n.scaleY&&(n.scaleY=i.scaleY,d=!0)),s?a.renderCanvas():d&&a.renderImage(),c=n.width/n.naturalWidth,e(i.x)&&(h.left=i.x*c+r.left),e(i.y)&&(h.top=i.y*c+r.top),e(i.width)&&(h.width=i.width*c),e(i.height)&&(h.height=i.height*c),a.setCropBoxData(h))},getContainerData:function(){return this.ready?this.container:{}},getImageData:function(){return this.loaded?this.image:{}},getCanvasData:function(){var e=this,i=e.canvas,a={};return e.ready&&t.each(["left","top","width","height","naturalWidth","naturalHeight"],function(t,e){a[e]=i[e]}),a},setCanvasData:function(i){var a=this,o=a.canvas,n=o.aspectRatio;t.isFunction(i)&&(i=i.call(a.$element)),a.ready&&!a.disabled&&t.isPlainObject(i)&&(e(i.left)&&(o.left=i.left),e(i.top)&&(o.top=i.top),e(i.width)?(o.width=i.width,o.height=i.width/n):e(i.height)&&(o.height=i.height,o.width=i.height*n),a.renderCanvas(!0))},getCropBoxData:function(){var t=this,e=t.cropBox;return t.ready&&t.cropped?{left:e.left,top:e.top,width:e.width,height:e.height}:{}},setCropBoxData:function(i){var a=this,o=a.cropBox,n=a.options.aspectRatio,r=void 0,h=void 0;t.isFunction(i)&&(i=i.call(a.$element)),a.ready&&a.cropped&&!a.disabled&&t.isPlainObject(i)&&(e(i.left)&&(o.left=i.left),e(i.top)&&(o.top=i.top),e(i.width)&&i.width!==o.width&&(r=!0,o.width=i.width),e(i.height)&&i.height!==o.height&&(h=!0,o.height=i.height),n&&(r?o.height=o.width/n:h&&(o.width=o.height*n)),a.renderCropBox())},getCroppedCanvas:function(e){var i=this;if(!i.ready||!window.HTMLCanvasElement)return null;if(!i.cropped)return l(i.$clone[0],i.image);t.isPlainObject(e)||(e={});var a=i.getData(),o=a.width,n=a.height,r=o/n,h=void 0,s=void 0,d=void 0;t.isPlainObject(e)&&(h=e.width,s=e.height,h?(s=h/r,d=h/o):s&&(h=s*r,d=s/n));var c=Math.floor(h||o),p=Math.floor(s||n),g=t("<canvas>")[0],m=g.getContext("2d");g.width=c,g.height=p,e.fillColor&&(m.fillStyle=e.fillColor,m.fillRect(0,0,c,p));var f=function(){var t=l(i.$clone[0],i.image),e=t.width,r=t.height,h=i.canvas,s=[t],c=a.x+h.naturalWidth*(Math.abs(a.scaleX||1)-1)/2,p=a.y+h.naturalHeight*(Math.abs(a.scaleY||1)-1)/2,g=void 0,m=void 0,f=void 0,u=void 0,v=void 0,w=void 0;return c<=-o||c>e?c=g=f=v=0:c<=0?(f=-c,c=0,g=v=Math.min(e,o+c)):c<=e&&(f=0,g=v=Math.min(o,e-c)),g<=0||p<=-n||p>r?p=m=u=w=0:p<=0?(u=-p,p=0,m=w=Math.min(r,n+p)):p<=r&&(u=0,m=w=Math.min(n,r-p)),s.push(Math.floor(c),Math.floor(p),Math.floor(g),Math.floor(m)),d&&(f*=d,u*=d,v*=d,w*=d),v>0&&w>0&&s.push(Math.floor(f),Math.floor(u),Math.floor(v),Math.floor(w)),s}();return m.drawImage.apply(m,it(f)),g},setAspectRatio:function(t){var e=this,a=e.options;e.disabled||i(t)||(a.aspectRatio=Math.max(0,t)||NaN,e.ready&&(e.initCropBox(),e.cropped&&e.renderCropBox()))},setDragMode:function(t){var e=this,i=e.options,a=void 0,o=void 0;e.loaded&&!e.disabled&&(a="crop"===t,o=i.movable&&"move"===t,t=a||o?t:"none",e.$dragBox.data("action",t).toggleClass("cropper-crop",a).toggleClass("cropper-move",o),i.cropBoxMovable||e.$face.data("action",t).toggleClass("cropper-crop",a).toggleClass("cropper-move",o))}},ot="cropper-hidden",nt=/^data:/,rt=/^data:image\/jpeg.*;base64,/,ht=function(){function e(i,a){tt(this,e);var o=this;o.$element=t(i),o.options=t.extend({},b,t.isPlainObject(a)&&a),o.loaded=!1,o.ready=!1,o.completed=!1,o.rotated=!1,o.cropped=!1,o.disabled=!1,o.replaced=!1,o.limited=!1,o.wheeling=!1,o.isImg=!1,o.originalUrl="",o.canvas=null,o.cropBox=null,o.pointers={},o.init()}return et(e,[{key:"init",value:function(){var t=this,e=t.$element,i=void 0;if(e.is("img")){if(t.isImg=!0,t.originalUrl=i=e.attr("src"),!i)return;i=e.prop("src")}else e.is("canvas")&&window.HTMLCanvasElement&&(i=e[0].toDataURL());t.load(i)}},{key:"trigger",value:function(e,i){var a=t.Event(e,i);return this.$element.trigger(a),a}},{key:"load",value:function(e){var i=this,a=i.options,o=i.$element;if(e){if(i.url=e,i.image={},!a.checkOrientation||!ArrayBuffer)return void i.clone();if(nt.test(e))return void(rt.test(e)?i.read(f(e)):i.clone());var n=new XMLHttpRequest;n.onerror=n.onabort=t.proxy(function(){i.clone()},this),n.onload=function(){i.read(this.response)},a.checkCrossOrigin&&r(e)&&o.prop("crossOrigin")&&(e=h(e)),n.open("get",e),n.responseType="arraybuffer",n.send()}}},{key:"read",value:function(t){var e=this,i=e.options,a=m(t),o=e.image,n=0,r=1,h=1;if(a>1)switch(e.url=u(t),a){case 2:r=-1;break;case 3:n=-180;break;case 4:h=-1;break;case 5:n=90,h=-1;break;case 6:n=90;break;case 7:n=90,r=-1;break;case 8:n=-90}i.rotatable&&(o.rotate=n),i.scalable&&(o.scaleX=r,o.scaleY=h),e.clone()}},{key:"clone",value:function(){var e=this,i=e.options,a=e.$element,o=e.url,n="",d=void 0;i.checkCrossOrigin&&r(o)&&(n=a.prop("crossOrigin"),n?d=o:(n="anonymous",d=h(o))),e.crossOrigin=n,e.crossOriginUrl=d;var c=t("<img "+s(n)+' src="'+(d||o)+'">');e.$clone=c,e.isImg?a[0].complete?e.start():a.one("load",t.proxy(e.start,this)):c.one("load",t.proxy(e.start,this)).one("error",t.proxy(e.stop,this)).addClass("cropper-hide").insertAfter(a)}},{key:"start",value:function(){var e=this,i=e.$clone,a=e.$element;e.isImg||(i.off("error",e.stop),a=i),d(a[0],function(i,a){t.extend(e.image,{naturalWidth:i,naturalHeight:a,aspectRatio:i/a}),e.loaded=!0,e.build()})}},{key:"stop",value:function(){var t=this;t.$clone.remove(),t.$clone=null}},{key:"build",value:function(){var e=this,i=e.options,a=e.$element,o=e.$clone,n=void 0,r=void 0,h=void 0;e.loaded&&(e.ready&&e.unbuild(),e.$container=a.parent(),e.$cropper=n=t(y),e.$canvas=n.find(".cropper-canvas").append(o),e.$dragBox=n.find(".cropper-drag-box"),e.$cropBox=r=n.find(".cropper-crop-box"),e.$viewBox=n.find(".cropper-view-box"),e.$face=h=r.find(".cropper-face"),a.addClass(ot).after(n),e.isImg||o.removeClass("cropper-hide"),e.initPreview(),e.bind(),i.aspectRatio=Math.max(0,i.aspectRatio)||NaN,i.viewMode=Math.max(0,Math.min(3,Math.round(i.viewMode)))||0,e.cropped=i.autoCrop,i.autoCrop?i.modal&&e.$dragBox.addClass("cropper-modal"):r.addClass(ot),i.guides||r.find(".cropper-dashed").addClass(ot),i.center||r.find(".cropper-center").addClass(ot),i.cropBoxMovable&&h.addClass("cropper-move").data("action","all"),i.highlight||h.addClass("cropper-invisible"),i.background&&n.addClass("cropper-bg"),i.cropBoxResizable||r.find(".cropper-line, .cropper-point").addClass(ot),e.setDragMode(i.dragMode),e.render(),e.ready=!0,e.setData(i.data),e.completing=setTimeout(function(){t.isFunction(i.ready)&&a.one("ready",i.ready),e.trigger("ready"),e.trigger("crop",e.getData()),e.completed=!0},0))}},{key:"unbuild",value:function(){var t=this;t.ready&&(t.completed||clearTimeout(t.completing),t.ready=!1,t.completed=!1,t.initialImage=null,t.initialCanvas=null,t.initialCropBox=null,t.container=null,t.canvas=null,t.cropBox=null,t.unbind(),t.resetPreview(),t.$preview=null,t.$viewBox=null,t.$cropBox=null,t.$dragBox=null,t.$canvas=null,t.$container=null,t.$cropper.remove(),t.$cropper=null)}}],[{key:"setDefaults",value:function(e){t.extend(b,t.isPlainObject(e)&&e)}}]),e}();t.extend(ht.prototype,T),t.extend(ht.prototype,W),t.extend(ht.prototype,A),t.extend(ht.prototype,F),t.extend(ht.prototype,_),t.extend(ht.prototype,at);var st="cropper",dt=t.fn.cropper;t.fn.cropper=function(e){for(var i=arguments.length,a=Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];var n=void 0;return this.each(function(i,o){var r=t(o),h=r.data(st);if(!h){if(/destroy/.test(e))return;var s=t.extend({},r.data(),t.isPlainObject(e)&&e);r.data(st,h=new ht(o,s))}if("string"==typeof e){var d=h[e];t.isFunction(d)&&(n=d.apply(h,a))}}),"undefined"!=typeof n?n:this},t.fn.cropper.Constructor=ht,t.fn.cropper.setDefaults=ht.setDefaults,t.fn.cropper.noConflict=function(){return t.fn.cropper=dt,this}});