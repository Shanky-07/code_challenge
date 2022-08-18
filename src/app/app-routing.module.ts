import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAnswerComponent } from './show-answer/show-answer.component';
import { ShowQuestionComponent } from './show-question/show-question.component';

const routes: Routes = [
  { path: '', redirectTo: 'form/builder', pathMatch: 'full' },
  { path: 'form/builder', component: ShowQuestionComponent },
  { path: 'form/answers', component: ShowAnswerComponent },
  { path: '**', component: ShowQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
