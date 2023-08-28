import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminViewComponent } from '../screens/admin-view/admin-view.component';
import { UserViewComponent } from '../screens/user-view/user-view.component';
import { PageNotFoundComponent } from '../screens/page-not-found/page-not-found.component';
import { LoginComponent } from '../screens/login/login.component';
import { AuthGuard } from '../auth/auth.guard';

const appRoutes: Routes = [
  { path: 'adminView', component: AdminViewComponent,canActivate:[AuthGuard] },
  { path: 'userView',        component: UserViewComponent,canActivate:[AuthGuard] },
  { path: 'login',        component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}