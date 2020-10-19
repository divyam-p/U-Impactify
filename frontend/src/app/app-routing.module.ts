import { SignupQuestionaireComponent } from './pages/signup-questionaire/signup-questionaire.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';

const routes: Routes = [
  { path: 'signup', component: LoginSignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'questionaire', component: SignupQuestionaireComponent},
  { path: 'questionaire2', component: SignupQuestionaireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
