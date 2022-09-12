import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DatePipe } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  appUser$: any;
  myDate:any;
  constructor(
    private afs:AngularFirestore,
    private router:Router,
    private route:ActivatedRoute,
    private storage:AngularFireStorage,
    private fb:FormBuilder,
    public afAuth:AngularFireAuth,
    private datePipe:DatePipe
  ) { this.appUser$ = this.afAuth.authState;}

  Addcategory(category :any){
    const Category=JSON.parse(JSON.stringify(category));
    return this.afs.collection("Collection_Category").add(Category)
  }

  categoryview(){
    return this.afs.collection('Collection_Category',(ref)=>ref.orderBy('Category')).
      valueChanges({idField:"Collection_CategoryId"})
  }
  
  Adddistrict(district :any){
    const District=JSON.parse(JSON.stringify(district));
    return this.afs.collection("Collection_District").add(District)
  }

  districtview(){
    return this.afs.collection('Collection_District',(ref)=>ref.orderBy('District')).
      valueChanges({idField:"Collection_DistrictId"})
  }

  Messagesent(message :any){
    const Message=JSON.parse(JSON.stringify(message));
    return this.afs.collection("Collection_Notification").add(Message)
  }

  Addstate(state :any){
    const State=JSON.parse(JSON.stringify(state));
    return this.afs.collection('Collection_State').add(State)
  }

  Stateview(){
    return this.afs.collection('Collection_State',(ref)=>ref.orderBy('State')).
    valueChanges({idField:"Collection_StateId"})
  } 

  getStateList() {
    return this.afs.collection<any>("Collection_State").snapshotChanges()
    .pipe(map((item: any) => {
    const brandData: any[] = []
    if (item) {
    // console.log(item)
    item.forEach((el: any) => {
    brandData.push({
    id: el.payload.doc.id,
    ...el.payload.doc.data()
    })
    })
    }
    return brandData;
    }))
  }

  getdistrictlist() {
    return this.afs.collection<any>("Collection_District").snapshotChanges()
    .pipe(map((item: any) => {
    const bData: any[] = []
    if (item) {
    // console.log(item)
    item.forEach((el: any) => {
    bData.push({
    id: el.payload.doc.id,
    ...el.payload.doc.data()
    })
    })
    }
    return bData;
    }))
  }

  getDistrictById(Name: any) { 
    return this.afs.collection('Collection_District', (ref) => ref.where("State", "==", Name))
      .valueChanges({ idField: "Collection_DistrictId" })
  }

  FarmersView(){
    return this.afs.collection('Collection_Farmer',(ref)=>ref.orderBy('Firstname')).
    valueChanges({idField:"Collection_FarmerId"})
  }

  FarmerRegistration(farmer :any){
    const Farmer=JSON.parse(JSON.stringify(farmer));
    return this.afs.collection('Collection_Farmer').add(Farmer)
  }

  FarmerLogin(Username :any, Password :any){
    console.log(Username,Password)
    return this.afs.collection('Collection_Farmer', (ref)=>
    ref.where("UserName","==",Username).where("Password","==",Password).where("status","==",'Accepted'))
    .valueChanges({idField:"Collection_FarmerId"})
  }

  getCategoryList() {
    return this.afs.collection<any>("Collection_Category").snapshotChanges()
    .pipe(map((item: any) => {
    const CData: any[] = []
    if (item) {
    // console.log(item)
    item.forEach((el: any) => {
    CData.push({
    id: el.payload.doc.id,
    ...el.payload.doc.data()
    })
    })
    }
    return CData;
    }))
  }

  upload(file: any) {
    const path = `Photos/${Date.now()}_${file.name}`;
    const ref = this.storage.ref(path);
    const task = this.storage.upload(path, file);
    return new Promise((resolve, reject) => {
    task.then(async (res) => {
    res.ref.getDownloadURL()
    .then(url => {
    console.log(url)
    resolve(url);
    })
    .catch((err) => {
    console.log(err.message_);
    reject(err.code_)
    })
    })
    .catch((err) => {
    console.log(err.message_);
    reject(err.code_)
    })
    })
    }

  Addproduct(product :any){
    const Product=JSON.parse(JSON.stringify(product));
    return this.afs.collection('Collection_Product').add(Product) 
    }

  Notification(){
    return this.afs.collection('Collection_Notification',(ref)=>ref.orderBy('Message')).
    valueChanges({idField:"Collection_NotificationId"})
  } 

  Productview(FId:any){
    return this.afs.collection('Collection_Product',(ref)=>ref.where("FId","==",FId))
    .valueChanges({idField:"Collection_ProductId"})
  }

  FarmerMaster(FId:any){
    const Farmer = this.afs.doc<any>("Collection_Farmer/"+ FId)
    .valueChanges(); 
    return Farmer;
  }

  ConumerView(CId:any){
    const consumer=this.afs.doc<any>("Collection_Consumer/"+CId).valueChanges();
    return consumer;
  }
  
  //Edit
  ProductDetails(productId:string){
    const productdata=this.afs.doc<any>("Collection_Product/"+productId).valueChanges();
    return productdata;
  }

  ProductMoreDetails(productId:any){
    const Product = this.afs.doc<any>("Collection_Product/"+ productId)
    .valueChanges(); 
    return Product;
  }

  FarmerDetails(FId:any){
    const Farmerid = this.afs.doc("Collection_Farmer/"+FId).valueChanges();
    return Farmerid;
  }

  ProductUpdate(productId:any,Product_Name:any){
    return this.afs.doc("Collection_Product/"+productId).update(Product_Name);
  }

  ConsumerUpdate(CId:any,Name:any){
    return this.afs.doc("Collection_Consumer/"+CId).update(Name);
  }

  Adminlogin(Username:any,Password:any){
    return this.afs.collection('Collection_Admin-Login',(ref)=>ref.where("Username","==",Username).where("Password","==",Password))
    .valueChanges({idField:"Collection_Admin-LoginId"})
  };

  ConsumerLogin(){
    const returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || this.router.url;
        localStorage.setItem('returnUrl',returnUrl);
        this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(async (res:any)=>{
          localStorage.setItem('userid',res.user.uid);

this.checkconsumer(res.user.uid).subscribe((result:any)=>{
  console.log(result)
  if(result!=null)
  {
    this.router.navigate(['Master/Consumerhome'])
  }
  else
  {
    this.router.navigate(['ConsumerProfile'])
  }
})         
        });
  }
  checkconsumer(consumerId:any){
    console.log(consumerId);
    // console.log("hi");
     const consumerData = this.afs.doc<any>("Collection_Consumer/" + consumerId)
     .valueChanges();
  console.log(consumerData);

     return consumerData;
  }

  logout() {
    this.afAuth.signOut().then(() => {
    this.router.navigate(["/Home"]);
    });
  }

  ConsumerProfile(Consumer :any){
    const consumer=JSON.parse(JSON.stringify(Consumer));
    // return this.afs.collection('Collection_Consumer').add(consumer)
    return this.afs.collection("Collection_Consumer").doc(localStorage.getItem("userid")?.toString()).set(consumer)
  }
  
  ViewProduct(){
    return this.afs.collection('Collection_Product',(ref)=>ref.orderBy('Product_Name')).
    valueChanges({idField:"Collection_ProductId"})
  }

  Acceptfarmer(Collection_FarmerId:any){
    
    console.log(Collection_FarmerId);

    return this.afs.doc("Collection_Farmer/"+Collection_FarmerId).update({status:"Accepted"})
  }

  Rejectfarmer(Collection_FarmerId:any){
    
    console.log(Collection_FarmerId);
    
    return this.afs.doc("Collection_Farmer/"+Collection_FarmerId).update({status:"Rejected"})
  }

  Addchat(chat :any){
    const Chat=JSON.parse(JSON.stringify(chat));
    return this.afs.collection('Collection_Chat').add(Chat)
  }

  mybooking(book:any){
    const Book=JSON.parse(JSON.stringify(book));
    return this.afs.collection('Collection_Booking').add(Book)
  }

  Viewsenderchat(SenderId:any,RecevierId:any){ 
    console.log(SenderId,RecevierId)
    return this.afs.collection('Collection_Chat', (ref)=>
    ref.where("SenderId","==",SenderId).where("RecevierId","==",RecevierId))
    .valueChanges({idField:"Collection_ChatId"})
  }

  sendersList(RecevierId:any,SenderId:any){ 
    return this.afs.collection('Collection_Chat',(ref)=>ref.where("RecevierId","==",RecevierId).where("SenderId","==",SenderId))
    .valueChanges({idField:"Collection_ChatId"})
  }
  sender(SId:any){
    console.log("Sender",SId)
    const sender = this.afs.doc<any>("Collection_Consumer/"+ SId)
    .valueChanges(); 
    return sender;
  }

  sendersList1(FarmerId:any)
  {
    return new Promise<any[]>((resolve, reject) => {
      const Sender = this.afs
      .collection<any>("Collection_Chat", (ref)=>ref.where("RecevierId","==",FarmerId))
      .valueChanges({idField:"Collection_ChatId"})
      .subscribe(prodRes => {
        this.getList().subscribe((res :any[])=>{
          prodRes.forEach(el => {
            el.Name = res.find((el1 :{id:any;})=> el1.id === el.RecevierId)?.Name
          })
          resolve(prodRes)
        })
      })
    })
  }
  getList() {
    return this.afs.collection<any>("Collection_Consumer").snapshotChanges()
      .pipe(map((item: any) => {
        const catData: any[] = [] 
        if (item) {
          // console.log(item)
          item.forEach((el: any) => {
            catData.push({
              id: el.payload.doc.id,
              ...el.payload.doc.data()
            })

          })
        }
        return catData;
      }))
  }
  // 

  
  bookeddata(CId:any)
  {
    return new Promise<any[]>((resolve, reject) => {
      const Book = this.afs
      .collection<any>("Collection_Booking", (ref) => ref.orderBy("PId"))
      .valueChanges({idField:"Collection_BookingId"})
      .subscribe(prodRes => {
        this.getProductList().subscribe((res :any[])=>{
          prodRes.forEach(el => {
            el.Product_Name = res.find((el1 :{id:any;})=> el1.id === el.PId)?.Product_Name,
            el.Description = res.find((el1 :{id:any;})=> el1.id === el.PId)?.Description,
            el.Rate = res.find((el1 :{id:any;})=> el1.id === el.PId)?.Rate,
            el.Quantity = res.find((el1 :{id:any;})=> el1.id === el.PId)?.Quantity,
            el.fileUrl = res.find((el1 :{id:any;})=> el1.id === el.PId)?.fileUrl
          })
          resolve(prodRes)
        })
      })
    })
  }

  getProductList() {
    return this.afs.collection<any>("Collection_Product").snapshotChanges()
      .pipe(map((item: any) => {
        const catData: any[] = [] 
        if (item) {
          // console.log(item)
          item.forEach((el: any) => {
            catData.push({
              id: el.payload.doc.id,
              ...el.payload.doc.data()
            })

          })
        }
        return catData;
      }))
  }

  Cancelbooking(Collection_FarmerId:any){
    
    console.log(Collection_FarmerId);
    return this.afs.doc("Collection_Booking/"+Collection_FarmerId).update({status:"Cancelled"})
  }

  cancelbooking(Collection_BookingId:any){
    
    console.log(Collection_BookingId);
    return this.afs.doc("Collection_Booking/"+Collection_BookingId).delete()
  }

  Sender(FId:any){
    const Sender = this.afs.doc<any>("Collection_Chat/"+ FId)
    .valueChanges(); 
    return Sender;
  }

}
