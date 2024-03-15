import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [

  {
    path:'',
    canActivate:[authGuard],
  loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),

  children:[
    {path:'', redirectTo:'home',pathMatch:'full'},

    {path:'home',
    loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent) ,title:'Home'},

    {path:'cart',
    loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent) ,title:'Cart'},

    {path:'products',
    loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent) ,title:'Products'},

    {path:'productdetails/:id',
    loadComponent:()=>import('./components/details/details.component').then((m)=>m.DetailsComponent) ,title:'ProductDetails'},

    {path:'brands',
    loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent) ,title:'Brands'},

    {path:'allorders',
    loadComponent:()=>import('./components/allorders/allorders.component').then((m)=>m.AllordersComponent) ,title:'Allorders'},

    {path:'forgotpassword',
    loadComponent:()=>import('./components/forgotpassword/forgotpassword.component').then((m)=>m.ForgotpasswordComponent) ,title:'Forgot Password'},

    {path:'payment/:id',
    loadComponent:()=>import('./components/payment/payment.component').then((m)=>m.PaymentComponent) ,title:'Payment'},

    {path:'catagories',
    loadComponent:()=>import('./components/catagories/catagories.component').then((m)=>m.CatagoriesComponent) ,title:'Catagories'}
  ]
  },

  {
    path:'',
  loadComponent:()=>import('./layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),

  children:[
    {path:'', redirectTo:'login',pathMatch:'full'},

    {path:'login',
    loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent) ,title:'Login'},

    {path:'register',
    loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent) ,title:'Register'}
  ]},
  {path:'forgot',
    loadComponent:()=>import('./components/forgotpassword/forgotpassword.component').then((m)=>m.ForgotpasswordComponent) ,title:'Forgot Password'},
  {
    path:'**'
    ,loadComponent:()=>import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent),title:'Notfound'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
