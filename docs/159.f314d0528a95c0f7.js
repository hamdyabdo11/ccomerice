"use strict";(self.webpackChunke_commerice=self.webpackChunke_commerice||[]).push([[159],{159:(M,l,i)=>{i.r(l),i.d(l,{HomeComponent:()=>P});var c=i(6814),p=i(9781),a=i(756),m=i(1120),t=i(4769),g=i(0),u=i(6286),d=i(2425);function h(o,r){1&o&&t._UZ(0,"img",10)}function x(o,r){1&o&&t._UZ(0,"img",11)}function f(o,r){1&o&&t._UZ(0,"img",12)}function v(o,r){if(1&o&&(t._UZ(0,"img",16),t.TgZ(1,"h3",17),t._uU(2),t.qZA()),2&o){const e=t.oxw().$implicit;t.Q6J("src",e.image,t.LSH)("alt",e.name)("title",e.name),t.xp6(2),t.Oqu(e.name)}}function T(o,r){1&o&&(t.ynx(0),t.YNc(1,v,3,4,"ng-template",4),t.BQk())}function C(o,r){if(1&o&&(t.TgZ(0,"section",13)(1,"h2",14),t._uU(2,"Trend Categories"),t.qZA(),t.TgZ(3,"owl-carousel-o",3),t.YNc(4,T,2,0,"ng-container",15),t.qZA()()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("options",e.catagoryOptions),t.xp6(1),t.Q6J("ngForOf",e.catagories)}}const O=function(o){return["/productdetails",o]};function Z(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",22)(1,"div",23)(2,"header",24),t._UZ(3,"img",25),t.TgZ(4,"div",26)(5,"h3",27),t._uU(6),t.ALo(7,"cutttext"),t.qZA(),t.TgZ(8,"h4",28),t._uU(9),t.qZA(),t.TgZ(10,"div",29)(11,"span",30),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.TgZ(14,"div"),t._UZ(15,"i",31),t.TgZ(16,"span",32),t._uU(17),t.qZA()()()()(),t.TgZ(18,"footer")(19,"button",33,34),t.NdJ("click",function(){const _=t.CHM(e).$implicit,y=t.MAs(20),E=t.oxw(2);return t.KtG(E.addProduct(_._id,y))}),t._uU(21,"+ Add To Cart"),t.qZA()()()()}if(2&o){const e=r.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(14,O,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("title",e.title)("alt",e.title),t.xp6(3),t.Oqu(t.xi3(7,8,e.title,2)),t.xp6(3),t.Oqu(e.category.name),t.xp6(3),t.hij("",t.xi3(13,11,e.price,"E\xa3 ")," "),t.xp6(5),t.Oqu(e.ratingsAverage)}}function A(o,r){if(1&o&&(t.TgZ(0,"section",18)(1,"h2",19),t._uU(2,"Trend Products"),t.qZA(),t.TgZ(3,"div",20),t.YNc(4,Z,22,16,"div",21),t.ALo(5,"slice"),t.qZA()()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",t.Dn7(5,1,e.products,0,16))}}let P=(()=>{class o{constructor(e,n,s,_){this._ProductService=e,this._CartService=n,this._ToastrService=s,this._Renderer2=_,this.products=[],this.catagories=[],this.catagoryOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplaySpeed:1500,navSpeed:700,navText:["\u21d0","\u21d2"],responsive:{0:{items:1.7},400:{items:2.7},740:{items:3.7},940:{items:5.7}},nav:!0},this.mainSliderOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,autoplay:!0,autoplayTimeout:2e3,autoplaySpeed:1e3,navSpeed:700,navText:["\u21d0","\u21d2"],items:1,nav:!0}}ngOnInit(){this._ProductService.getProducts().subscribe({next:e=>{this.products=e.data}}),this._ProductService.getCatagory().subscribe({next:e=>{this.catagories=e.data}})}addProduct(e,n){this._Renderer2.setAttribute(n,"disabled","true"),this._CartService.addToCart(e).subscribe({next:s=>{this._ToastrService.success(s.message),this._Renderer2.removeAttribute(n,"disabled"),this._CartService.cartNumber.next(s.numOfCartItems)},error:s=>{this._Renderer2.removeAttribute(n,"disabled")}})}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(g.M),t.Y36(u.N),t.Y36(d._W),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:12,vars:3,consts:[[1,"py-3"],[1,"row","g-0"],[1,"col-md-9"],[3,"options"],["carouselSlide",""],[1,"col-md-3"],["height","200","src","./assets/imgs/3.jpg","alt","",1,"w-100"],["height","200","src","./assets/imgs/2147695911.jpg","alt","",1,"w-100"],["class","py-4",4,"ngIf"],["class","py-4 text-main",4,"ngIf"],["height","400","width","100%","src","./assets/imgs/22.jpg","alt",""],["height","400","src","./assets/imgs/11.jpg","alt",""],["height","400","src","./assets/imgs/shopping-bag-cart.jpg","alt",""],[1,"py-4"],[1,"text-center","text-main"],[4,"ngFor","ngForOf"],["height","300","width","90px",1,"p-1",3,"src","alt","title"],[1,"h6","text-main","text-center","p-2"],[1,"py-4","text-main"],[1,"text-center"],[1,"row","g-4"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product","h-100"],["role","button",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"p-1"],[1,"h6"],[1,"h6","small","text-main"],[1,"d-flex","align-items-center","justify-content-between","small"],[1,"d-block"],[1,"fas","fa-star","rating-color"],[1,"text-muted"],[1,"btn-main","w-100","py-1",3,"click"],["btnAdd",""]],template:function(n,s){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"owl-carousel-o",3),t.YNc(4,h,1,0,"ng-template",4),t.YNc(5,x,1,0,"ng-template",4),t.YNc(6,f,1,0,"ng-template",4),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"img",6)(9,"img",7),t.qZA()()(),t.YNc(10,C,5,2,"section",8),t.YNc(11,A,6,5,"section",9)),2&n&&(t.xp6(3),t.Q6J("options",s.mainSliderOptions),t.xp6(7),t.Q6J("ngIf",s.catagories.length>0),t.xp6(1),t.Q6J("ngIf",s.products.length>0))},dependencies:[c.ez,c.sg,c.O5,c.OU,c.H9,p.j,a.bB,a.Fy,a.Mp,m.rH],styles:[".product[_ngcontent-%COMP%]{overflow:hidden}.product[_ngcontent-%COMP%]:hover   .btn-main[_ngcontent-%COMP%]{transform:translateY(0);opacity:1}.product[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%]{transform:translateY(110%);opacity:0;transition:.8s}"]})}return o})()}}]);