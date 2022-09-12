import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HomeComponent } from './Guest/home/home.component';
import { LoginComponent } from './Guest/login/login.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { FarmerRegistrationComponent } from './Admin/farmer-registration/farmer-registration.component';
import { ProductViewComponent } from './Farmer/product-view/product-view.component';
import { AdminMasterComponent } from './Admin/admin-master/admin-master.component';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DistrictComponent } from './Admin/district/district.component';
import { CategoryComponent } from './Admin/category/category.component';
import { DistrictViewComponent } from './Admin/district-view/district-view.component';
import { CategoryViewComponent } from './Admin/category-view/category-view.component';
import { CreateNotificationComponent } from './Admin/create-notification/create-notification.component';
import { GalleryComponent } from './Admin/gallery/gallery.component';
import { RegistrationComponent } from './Guest/registration/registration.component';
import { DatePipe } from '@angular/common';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminhomeComponent,
    FarmerRegistrationComponent,
    ProductViewComponent,
    AdminMasterComponent,
    DistrictComponent,
    CategoryComponent,
    DistrictViewComponent,
    CategoryViewComponent,
    CreateNotificationComponent,
    GalleryComponent,
    RegistrationComponent,
    StateComponent,
    StateViewComponent,
    FarmermasterComponent,
    ProfileComponent,
    ProductRegistrationComponent,
    NotificationViewComponent,
    ChatComponent,
    ProductEditComponent,
    AdminLoginComponent,
    MasterComponent,
    ConsumerProfileComponent,
    ConsumerProfileViewComponent,
    ViewMoreComponent,
    DistrictViewComponent,
    ConsumerHomeComponent,
    PaymentComponent,
    StatusViewComponent,
    ChatFrontComponent,
    ConsumerChatComponent,
    MybookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    
    
  ],
  providers:[DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
