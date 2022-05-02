import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ClientsListComponent } from './Modules/clients-list/clients-list.component';
import { AgentNavBarComponent } from './Modules/agent-nav-bar/agent-nav-bar.component';
import { RegistrationComponent } from './Modules/Clients/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { CardsComponent } from './cards/cards.component';
import { LinkCardComponent } from './link-card/link-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardRegisterComponent } from './card-register/card-register.component';
import { TransferComponent } from './transfer/transfer.component';
import { OperationsListComponent } from './operations-list/operations-list.component';
import { ClientsComponent } from './AdminModules/clients/clients.component';
import { CardsListComponent } from './AdminModules/cards-list/cards-list.component';
import { AdminComponent } from './AdminModules/admin/admin.component';
import { OperationsForAdminComponent } from './AdminModules/operations-for-admin/operations-for-admin.component';
import { ProductRegistrationComponent } from './VendorModules/product-registration/product-registration.component';

import { VendorDashbordComponent } from './VendorModules/vendor-dashbord/vendor-dashbord.component';
import { ProductListComponent } from './VendorModules/product-list/product-list.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { FooterComponent } from './footer/footer.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { CartComponent } from './cart/cart.component';
import { SellsListComponent } from './VendorModules/sells-list/sells-list.component';
import { SendMailComponent } from './mailModules/send-mail/send-mail.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    AgentNavBarComponent,
    RegistrationComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    CardsComponent,
    LinkCardComponent,
    CardRegisterComponent,
    TransferComponent,
    OperationsListComponent,
    ClientsComponent,
    CardsListComponent,
    AdminComponent,
    OperationsForAdminComponent,
    ProductRegistrationComponent,
    VendorDashbordComponent,
    ProductListComponent,
    MarketPlaceComponent,
    FooterComponent,
    EditProfilComponent,
    CartComponent,
    SellsListComponent,
    SendMailComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})

export class AppModule { }
