!function(){function e(){var e='<div class="sweet-overlay"></div><div class="sweet-alert"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel">Cancel</button><button class="confirm">OK</button></div>',t=document.createElement("div");t.innerHTML=e,document.body.appendChild(t)}function t(e){var t=s(),n=t.querySelector("h2"),o=t.querySelector("p"),r=t.querySelector("button.cancel"),a=t.querySelector("button.confirm");if(n.innerHTML=g(e.title),o.innerHTML=g(e.text||""),e.text&&p(o),v(t.querySelectorAll(".icon")),e.type){for(var i=!1,c=0;c<l.length;c++)if(e.type===l[c]){i=!0;break}if(!i)return window.console.error("Unknown alert type: "+e.type),!1;var u=t.querySelector(".icon."+e.type);switch(p(u),e.type){case"success":d(u,"animate"),d(u.querySelector(".tip"),"animateSuccessTip"),d(u.querySelector(".long"),"animateSuccessLong");break;case"error":d(u,"animateErrorIcon"),d(u.querySelector(".x-mark"),"animateXMark");break;case"warning":d(u,"pulseWarning"),d(u.querySelector(".body"),"pulseWarningIns"),d(u.querySelector(".dot"),"pulseWarningIns")}}if(e.imageUrl){var m=t.querySelector(".icon.custom");m.style.backgroundImage="url("+e.imageUrl+")",p(m);var y=80,f=80;if(e.imageSize){var w=e.imageSize.split("x")[0],S=e.imageSize.split("x")[1];w&&S?(y=w,f=S,m.css({width:w+"px",height:S+"px"})):window.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}m.setAttribute("style",m.getAttribute("style")+"width:"+y+"px; height:"+f+"px")}e.showCancelButton?r.style.display="inline-block":v(r),e.cancelButtonText&&(r.innerHTML=g(e.cancelButtonText)),e.confirmButtonText&&(a.innerHTML=g(e.confirmButtonText)),a.style.backgroundColor=e.confirmButtonColor,t.setAttribute("data-allow-ouside-click",e.allowOutsideClick);var h=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",h)}function n(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n="#",o,r;for(r=0;3>r;r++)o=parseInt(e.substr(2*r,2),16),o=Math.round(Math.min(Math.max(0,o+o*t),255)).toString(16),n+=("00"+o).substr(o.length);return n}function o(){var e=s();h(document.querySelector(c),10),p(e),d(e,"showSweetAlert"),m(e,"hideSweetAlert"),setTimeout(function(){d(e,"visible")},500)}function r(){var e=s();b(document.querySelector(c),5),b(e,5),m(e,"showSweetAlert"),d(e,"hideSweetAlert"),m(e,"visible");var t=e.querySelector(".icon.success");m(t,"animate"),m(t.querySelector(".tip"),"animateSuccessTip"),m(t.querySelector(".long"),"animateSuccessLong");var n=e.querySelector(".icon.error");m(n,"animateErrorIcon"),m(n.querySelector(".x-mark"),"animateXMark");var o=e.querySelector(".icon.warning");m(o,"pulseWarning"),m(o.querySelector(".body"),"pulseWarningIns"),m(o.querySelector(".dot"),"pulseWarningIns")}function a(){var e=s();e.style.marginTop=S(s())}var i=".sweet-alert",c=".sweet-overlay",l=["error","warning","info","success"],s=function(){return document.querySelector(i)},u=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},d=function(e,t){u(e,t)||(e.className+=" "+t)},m=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(u(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},g=function(e){var t=document.createElement("div");return t.appendChild(document.createTextNode(e)),t.innerHTML},y=function(e){e.style.opacity="",e.style.display="block"},p=function(e){if(e&&!e.length)return y(e);for(var t=0;t<e.length;++t)y(e[t])},f=function(e){e.style.opacity="",e.style.display="none"},v=function(e){if(e&&!e.length)return f(e);for(var t=0;t<e.length;++t)f(e[t])},w=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},S=function(e){e.style.left="-9999px",e.style.display="block";var t=e.clientHeight,n=parseInt(getComputedStyle(e).getPropertyValue("padding"),10);return e.style.left="",e.style.display="none","-"+parseInt(t/2+n)+"px"},h=function(e,t){var t=t||16;e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)};o()},b=function(e,t){var t=t||16;e.style.opacity=1;var n=+new Date,o=function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"};o()};window.sweetAlert=function(){var e={title:"",text:"",type:null,allowOutsideClick:!1,showCancelButton:!1,confirmButtonText:"OK",confirmButtonColor:"#AEDEF4",cancelButtonText:"Cancel",imageUrl:null,imageSize:null};if(void 0===arguments[0])return window.console.error("sweetAlert expects at least 1 attribute!"),!1;switch(typeof arguments[0]){case"string":e.title=arguments[0],e.text=arguments[1]||"",e.type=arguments[2]||"";break;case"object":if(void 0===arguments[0].title)return window.console.error('Missing "title" argument!'),!1;e.title=arguments[0].title,e.text=arguments[0].text||e.text,e.type=arguments[0].type||e.type,e.allowOutsideClick=arguments[0].allowOutsideClick||e.allowOutsideClick,e.showCancelButton=arguments[0].showCancelButton||e.showCancelButton,e.showCancelButton&&(e.confirmButtonText="Confirm"),e.confirmButtonText=arguments[0].confirmButtonText||e.confirmButtonText,e.confirmButtonColor=arguments[0].confirmButtonColor||e.confirmButtonColor,e.cancelButtonText=arguments[0].cancelButtonText||e.cancelButtonText,e.imageUrl=arguments[0].imageUrl||e.imageUrl,e.imageSize=arguments[0].imageSize||e.imageSize,e.doneFunction=arguments[1]||null;break;default:return window.console.error('Unexpected type of argument! Expected "string" or "object", got '+typeof arguments[0]),!1}t(e),a(),o();for(var i=s(),c=function(t){var o=t.target||t.srcElement,a="confirm"===o.className,c=u(i,"visible"),l=e.doneFunction&&"true"===i.getAttribute("data-has-done-function");switch(t.type){case"mouseover":a&&(t.target.style.backgroundColor=n(e.confirmButtonColor,-.04));break;case"mouseout":a&&(t.target.style.backgroundColor=e.confirmButtonColor);break;case"mousedown":a&&(t.target.style.backgroundColor=n(e.confirmButtonColor,-.14));break;case"mouseup":a&&(t.target.style.backgroundColor=n(e.confirmButtonColor,-.04));break;case"click":a&&l&&c&&e.doneFunction(),r()}},l=i.querySelectorAll("button"),d=0;d<l.length;d++)l[d].onclick=c,l[d].onmouseover=c,l[d].onmouseout=c,l[d].onmousedown=c,l[d].onmouseup=c;document.onclick=function(e){var t=e.target||e.srcElement,n=i===t,o=w(i,e.target),a=u(i,"visible"),c="true"===i.getAttribute("data-allow-ouside-click");!n&&!o&&a&&c&&r()}},window.swal=window.sweetAlert,function(){"complete"===document.readyState||"interactive"===document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),e()},!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",arguments.callee),e())})}()}();