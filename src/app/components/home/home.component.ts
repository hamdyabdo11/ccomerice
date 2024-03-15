import { ProductService } from './../../core/services/product.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { product } from 'src/app/core/interfaces/product';
import { CutttextPipe } from 'src/app/core/pipe/cutttext.pipe';
import { Catagory } from 'src/app/core/interfaces/catagory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
// import { AuthService } from 'src/app/core/services/auth.service';
// import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CutttextPipe,CarouselModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _ProductService:ProductService ,private _CartService:CartService,private _ToastrService:ToastrService,private _Renderer2:Renderer2){}

  products:product[]=[]
  catagories:Catagory[]=[]

  ngOnInit(): void {
      this._ProductService.getProducts().subscribe({
        next:(response)=>{

          this.products=response.data;
          }
      })

      this._ProductService.getCatagory().subscribe({
        next:(response)=>{

          this.catagories=response.data;
          }
      })
  }
  addProduct(id:any,element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element,'disabled','true');
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message);
        this._Renderer2.removeAttribute(element,'disabled');
        this._CartService.cartNumber.next(response.numOfCartItems);

      }
      ,error:(err)=>{
        this._Renderer2.removeAttribute(element,'disabled');
      }
    })
  }

  catagoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed:1500,
    navSpeed: 700,
    navText: ['⇐', '⇒'],
    responsive: {
      0: {
        items: 1.7
      },
      400: {
        items: 2.7
      },
      740: {
        items: 3.7
      },
      940: {
        items: 5.7
      }
    },
    nav: true
  }


  mainSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed:1000,
    navSpeed: 700,
    navText: ['⇐', '⇒'],
   items:1,
    nav: true
  }





}
