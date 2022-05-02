import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './AdminModules/admin/admin.component';
import { ClientsComponent } from './AdminModules/clients/clients.component';
import { OperationsForAdminComponent } from './AdminModules/operations-for-admin/operations-for-admin.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { CardRegisterComponent } from './card-register/card-register.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LinkCardComponent } from './link-card/link-card.component';
import { LoginComponent } from './login/login.component';
import { SendMailComponent } from './mailModules/send-mail/send-mail.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { ClientsListComponent } from './Modules/clients-list/clients-list.component';
import { RegistrationComponent } from './Modules/Clients/registration/registration.component';
import { OperationsListComponent } from './operations-list/operations-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TransferComponent } from './transfer/transfer.component';
import { ProductListComponent } from './VendorModules/product-list/product-list.component';
import { ProductRegistrationComponent } from './VendorModules/product-registration/product-registration.component';
import { SellsListComponent } from './VendorModules/sells-list/sells-list.component';
import { VendorDashbordComponent } from './VendorModules/vendor-dashbord/vendor-dashbord.component';


const routes: Routes = [{ path: 'Clients', component: ClientsComponent },
{ path: 'Register', component: RegistrationComponent },
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'user', component: BoardUserComponent },
{ path: 'mod', component: BoardModeratorComponent },
{ path: 'admin', component: BoardAdminComponent },
{ path: 'cards', component: CardsComponent },
{ path: 'card/link', component: LinkCardComponent },
{ path: 'card/Register', component: CardRegisterComponent },
{ path: 'tranfer', component: TransferComponent },
{ path: 'operationsList', component: OperationsListComponent },
{ path: 'Gestion', component: AdminComponent },
{ path: 'Operations/admin', component: OperationsForAdminComponent },
{ path: 'product/new', component: ProductRegistrationComponent },
{ path: 'vendor/dashbord', component: VendorDashbordComponent },
{ path: 'vendor/products/all', component: ProductListComponent },
{ path: 'MarketPlace', component: MarketPlaceComponent },
{ path: 'Footer', component: FooterComponent },
{ path: 'sells', component: SellsListComponent },
{ path: 'send/mail', component: SendMailComponent },


{ path: '', redirectTo: 'home', pathMatch: 'full' }];


// {path : 'main' , component : AppComponent }
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  declarations: []

})
export class AppRoutingModule { }
