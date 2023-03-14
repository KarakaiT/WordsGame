import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { ListComponent } from './list/list.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [

  {path: '', redirectTo:'list', pathMatch:'full'},
  {path: 'list', component: ListComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'game/:num', component: GameComponent},
  {path: '**', redirectTo:'list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
