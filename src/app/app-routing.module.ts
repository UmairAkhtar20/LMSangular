import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  {path:'adminlog',component:AdminlogComponent},
  {path:'member',component:MemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
