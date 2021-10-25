import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './pages/profil/profil.component';
import { QuestionComponent } from './pages/question/question.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { ResultatComponent } from './pages/resultat/resultat.component';

const routes: Routes = [
  {path: '', component: QuestionComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'resultat', component: ResultatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
