import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildQuestionComponent } from './build-question/build-question.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import { ShowAnswerComponent } from './show-answer/show-answer.component';
import { AddQuestionComponent } from './show-question/add-question/add-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BuildQuestionComponent,
    ShowQuestionComponent,
    ShowAnswerComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
