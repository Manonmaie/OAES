import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ItemFormComponent} from './item-form/item-form.component'
import {AppRoutingModule,routingComponets} from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { itemForm } from './question-paper/question-paper.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionManagementComponent } from './question-management/question-management.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    routingComponets,
    itemForm,
    QuestionManagementComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
