import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMasterComponent } from './Admin/admin-master/admin-master.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { CategoryViewComponent } from './Admin/category-view/category-view.component';
import { DistrictViewComponent } from './Admin/district-view/district-view.component';
import { CategoryComponent } from './Admin/category/category.component';
import { DistrictComponent } from './Admin/district/district.component';
import { FarmerRegistrationComponent } from './Admin/farmer-registration/farmer-registration.component';
import { ProductViewComponent } from './Farmer/product-view/product-view.component';
import { HomeComponent } from './Guest/home/home.component';
import { LoginComponent } from './Guest/login/login.component';
import { CreateNotificationComponent } from './Admin/create-notification/create-notification.component';
import { RegistrationComponent } from './Guest/registration/registration.component';
import { GalleryComponent } from './Admin/gallery/gallery.component';
import { StateComponent } from './Admin/state/state.component';
import { StateViewComponent } from './Admin/state-view/state-view.component';
import { FarmermasterComponent } from './Farmer/farmermaster/farmermaster.component';
import { ProfileComponent } from './Farmer/profile/profile.component';
import { ProductRegistrationComponent } from './Farmer/product-registration/product-registration.component';
import { NotificationViewComponent } from './Farmer/notification-view/notification-view.component';
import { ChatComponent } from './Farmer/chat/chat.component';
import { ProductEditComponent } from './Farmer/product-edit/product-edit.component';
import { AdminLoginComponent } from './Guest/admin-login/admin-login.component';
import { MasterComponent } from './Consumer/master/master.component';
import { ConsumerProfileComponent } from './Consumer/consumer-profile/consumer-profile.component';
import { ConsumerProfileViewComponent } from './Consumer/consumer-profile-view/consumer-profile-view.component';
import { ViewMoreComponent } from './Consumer/view-more/view-more.component';
import { ConsumerHomeComponent } from './Consumer/consumer-home/consumer-home.component';
import { PaymentComponent } from './Farmer/payment/payment.component';
import { StatusViewComponent } from './Admin/status-view/status-view.component';
import { ChatFrontComponent } from './Farmer/chat-front/chat-front.component';
import { ConsumerChatComponent } from './Consumer/consumer-chat/consumer-chat.component';
import { MybookingComponent } from './Consumer/mybooking/mybooking.component';


const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'AdminLogin',component:AdminLoginComponent},
  {path:'Adminmaster',component:AdminMasterComponent,
  children:[
    {path:'Adminhome',component:AdminhomeComponent},
    {path:'Category',component:CategoryComponent},
    {path:'Categoryview',component:CategoryViewComponent},
    {path:'Districtview',component:DistrictViewComponent},
    {path:'District',component:DistrictComponent},
    {path:'Farmer-Reg',component:FarmerRegistrationComponent},
    {path:'Message',component:CreateNotificationComponent},
    {path:'Gallery',component:GalleryComponent},
    {path:'State',component:StateComponent},
    {path:'Stateview',component:StateViewComponent},
    {path:'Status-view',component:StatusViewComponent}
    ]},
    
    {path:'Farmermaster',component:FarmermasterComponent,
    children:[
      {path:'Product-View',component:ProductViewComponent},
      {path:'Profile',component:ProfileComponent},
      {path:'Product',component:ProductRegistrationComponent},
      {path:'Notification_View',component:NotificationViewComponent},
      {path:'Chat/:Id',component:ChatComponent},
      {path:'Product-edit/:id',component:ProductEditComponent},
      {path:'Chatfront',component:ChatFrontComponent},
    ]},
    {path:'Payment',component:PaymentComponent},

    {path:'Master',component:MasterComponent,
    children:[
      {path:'Consumerhome',component:ConsumerHomeComponent},
      {path:'Viewmore/:Id',component:ViewMoreComponent},
      {path:'Profile',component:ConsumerProfileViewComponent},
      {path:'ConsumerChat/:Id',component:ConsumerChatComponent},
      {path:'Mybooking',component:MybookingComponent}
    ]
  },

  {path:'ConsumerProfile',component:ConsumerProfileComponent},
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
