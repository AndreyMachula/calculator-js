!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var a=document.querySelectorAll("[data-number]"),i=document.querySelectorAll("[data-operation]"),u=document.querySelector("[data-equals]"),o=document.querySelector("[data-delete]"),c=document.querySelector("[data-all-clear]"),s=document.querySelector("[data-previous-operand]"),l=document.querySelector("[data-current-operand]"),p=new(function(){"use strict";function r(n,a){e(t)(this,r),this.previousOperandTextElement=n,this.currentOperandTextElement=a,this.clear()}return e(n)(r,[{key:"clear",value:function(){this.currentOperand="",this.previousOperand="",this.operation=void 0}},{key:"delete",value:function(){this.currentOperand=this.currentOperand.toString().slice(0,-1)}},{key:"appendNumber",value:function(e){"."===e&&this.currentOperand.includes(".")||(this.currentOperand=this.currentOperand.toString()+e.toString())}},{key:"chooseOperation",value:function(e){""!==this.currentOperand&&(""!==this.previousOperand&&this.compute(),this.operation=e,this.previousOperand=this.currentOperand,this.currentOperand="")}},{key:"compute",value:function(){var e,t=parseFloat(this.previousOperand),n=parseFloat(this.currentOperand);if(!isNaN(t)&&!isNaN(n)){switch(this.operation){case"+":e=t+n;break;case"-":e=t-n;break;case"*":e=t*n;break;case"÷":e=t/n;break;default:return}this.currentOperand=e,this.operation=void 0,this.previousOperand=""}}},{key:"getDisplayNumber",value:function(e){var t,n=e.toString(),r=parseFloat(n.split(".")[0]),a=n.split(".")[1];return t=isNaN(r)?"":r.toLocaleString("en",{maximumFractionDigits:0}),null!=a?"".concat(t,".").concat(a):t}},{key:"updateDisplay",value:function(){this.currentOperandTextElement.innerText=this.getDisplayNumber(this.currentOperand),null!=this.operation?this.previousOperandTextElement.innerText="".concat(this.getDisplayNumber(this.previousOperand)," ").concat(this.operation):this.previousOperandTextElement.innerText=""}}]),r}())(s,l);a.forEach((function(e){e.addEventListener("click",(function(){p.appendNumber(e.innerText),p.updateDisplay()}))})),i.forEach((function(e){e.addEventListener("click",(function(){p.chooseOperation(e.innerText),p.updateDisplay()}))})),u.addEventListener("click",(function(e){p.compute(),p.updateDisplay()})),c.addEventListener("click",(function(e){p.clear(),p.updateDisplay()})),o.addEventListener("click",(function(e){p.delete(),p.updateDisplay()}))}();
//# sourceMappingURL=index.3302db8b.js.map