"use strict";(self.webpackChunke_commerice=self.webpackChunke_commerice||[]).push([[290],{5290:(g,m,o)=>{o.r(m),o.d(m,{CartComponent:()=>x});var l=o(6814),h=o(1120),t=o(4769),p=o(6286);function _(n,C){if(1&n){const e=t.EpF();t.TgZ(0,"div",10)(1,"div",11),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"div",13)(4,"div")(5,"h3",14),t._uU(6),t.qZA(),t.TgZ(7,"p",15),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"button",16,17),t.NdJ("click",function(){const i=t.CHM(e).$implicit,a=t.MAs(11),d=t.oxw(2);return t.KtG(d.removeItem(i.product._id,a))}),t._UZ(12,"i",18),t._uU(13," Remove"),t.qZA()(),t.TgZ(14,"div")(15,"button",19,20),t.NdJ("click",function(){const i=t.CHM(e).$implicit,a=t.MAs(16),d=t.MAs(21),b=t.oxw(2);return t.KtG(b.changeCount(i.count-1,i.product._id,a,d))}),t._uU(17," - "),t.qZA(),t.TgZ(18,"span",21),t._uU(19),t.qZA(),t.TgZ(20,"button",19,22),t.NdJ("click",function(){const i=t.CHM(e).$implicit,a=t.MAs(16),d=t.MAs(21),b=t.oxw(2);return t.KtG(b.changeCount(i.count+1,i.product._id,a,d))}),t._uU(22," + "),t.qZA()()()()}if(2&n){const e=C.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.Oqu(e.product.title),t.xp6(2),t.Oqu(t.xi3(9,5,e.price,"EGP ")),t.xp6(11),t.Oqu(e.count)}}const v=function(n){return["/payment",n]};function c(n,C){if(1&n){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"div",4)(3,"h1",5),t._uU(4,"Shop Cart"),t.qZA(),t.TgZ(5,"p",6),t._uU(6),t.ALo(7,"currency"),t.qZA()(),t.TgZ(8,"button",7),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.clear())}),t._uU(9,"Clear Cart"),t.qZA()(),t.YNc(10,_,23,8,"div",8),t.TgZ(11,"button",9),t._uU(12,"Online Payment"),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(6),t.Oqu(t.xi3(7,3,e.cartDetails.totalCartPrice,"EGP ")),t.xp6(4),t.Q6J("ngForOf",e.cartDetails.products),t.xp6(1),t.Q6J("routerLink",t.VKq(6,v,e.cartDetails._id))}}function u(n,C){1&n&&(t.TgZ(0,"h2",23),t._uU(1,"Your Cart Is Empty"),t.qZA())}let x=(()=>{class n{constructor(e,r){this._CartService=e,this._Renderer2=r,this.cartDetails=null}ngOnInit(){this._CartService.getCartUser().subscribe({next:e=>{this.cartDetails=e.data,console.log(e.data)}})}removeItem(e,r){this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.removeCartItem(e).subscribe({next:s=>{this.cartDetails=s.data,this._Renderer2.removeAttribute(r,"disabled"),this._CartService.cartNumber.next(s.numOfCartItems)},error:s=>{this._Renderer2.removeAttribute(r,"disabled")}})}changeCount(e,r,s,i){e>=1&&(this._Renderer2.setAttribute(s,"disabled","true"),this._Renderer2.setAttribute(i,"disabled","true"),this._CartService.updateCartCount(r,e).subscribe({next:a=>{this.cartDetails=a.data,this._Renderer2.removeAttribute(s,"disabled"),this._Renderer2.removeAttribute(i,"disabled")},error:a=>{this._Renderer2.removeAttribute(s,"disabled"),this._Renderer2.removeAttribute(i,"disabled")}}))}clear(){this._CartService.clearCart().subscribe({next:e=>{"success"===e.message&&(this.cartDetails=null,this._CartService.cartNumber.next(0))}})}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(p.N),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","w-75 mx-auto rounded shadow bg-main-light p-3 mb-3",4,"ngIf","ngIfElse"],["msg",""],[1,"w-75","mx-auto","rounded","shadow","bg-main-light","p-3","mb-3"],[1,"d-flex","align-items-center","justify-content-between"],[1,"text-center","bg-light"],[1,"h2"],[1,"text-main"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],["class","row border-bottom border-success align-items-center",4,"ngFor","ngForOf"],[1,"btn-main","mt-3",3,"routerLink"],[1,"row","border-bottom","border-success","align-items-center"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","justify-content-between","align-items-center","p-3"],[1,"h6"],[1,"small","text-main"],[1,"btn","m-0","p-0","text-main",3,"click"],["btnRemove",""],[1,"fas","fa-trash-can"],[1,"btn","btn-sm","border-success",3,"click"],["btn1",""],[1,"px-3"],["btn2",""],[1,"text-center","p-3","text-danger"]],template:function(r,s){if(1&r&&(t.YNc(0,c,13,8,"section",0),t.YNc(1,u,2,0,"ng-template",null,1,t.W1O)),2&r){const i=t.MAs(2);t.Q6J("ngIf",s.cartDetails)("ngIfElse",i)}},dependencies:[l.ez,l.sg,l.O5,l.H9,h.rH]})}return n})()},6286:(g,m,o)=>{o.d(m,{N:()=>p});var l=o(5619),h=o(4769),t=o(9862);let p=(()=>{class _{constructor(c){this._HttpClient=c,this.cartNumber=new l.X(0),this.myToken={token:localStorage.getItem("etoken")},this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}addToCart(c){return this._HttpClient.post(this.baseUrl+"cart",{productId:c},{headers:this.myToken})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart",{headers:this.myToken})}removeCartItem(c){return this._HttpClient.delete(this.baseUrl+`cart/${c}`,{headers:this.myToken})}updateCartCount(c,u){return this._HttpClient.put(this.baseUrl+`cart/${c}`,{count:u},{headers:this.myToken})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart",{headers:this.myToken})}checkOut(c,u){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${c}?url=http://localhost:3000`,{shippingAddress:u},{headers:this.myToken})}static#t=this.\u0275fac=function(u){return new(u||_)(h.LFG(t.eN))};static#e=this.\u0275prov=h.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);