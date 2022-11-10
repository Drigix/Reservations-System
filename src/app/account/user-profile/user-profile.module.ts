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
    TranslateModule
  ],
  exports: [
    UserProfileComponent
  ]
})
export class UserProfileModule { }
