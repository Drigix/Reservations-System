import { TranslateModule } from '@ngx-translate/core';
import { LoginDialogModule } from './../login-dialog/login-dialog.module';
import { LoginDialogComponent } from './../login-dialog/login-dialog.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { UserProfileComponent } from './user-profile.component';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    AvatarModule,
    LoginDialogModule,
    DynamicDialogModule,
    TranslateModule,
    MenuModule,
    TabMenuModule,
    FormsModule
  ],
  exports: [
    UserProfileComponent
  ]
})
export class UserProfileModule { }
