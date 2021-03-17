import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteLanguage } from './i18n/utils';

/**
 * Specific i18n site routes prefixed by i18n variation
 */
const routes: Routes = [
  {path: WebsiteLanguage.English, loadChildren: () => import('./site/site.en.module').then(m => m.SiteEnModule)}, // lazy loading the English site module
  {path: WebsiteLanguage.Czech, loadChildren: () => import('./site/site.cs.module').then(m => m.SiteCsModule)},   // lazy loading the Czech site module
  {path: WebsiteLanguage.Polish, loadChildren: () => import('./site/site.pl.module').then(m => m.SitePlModule)},   // lazy loading the Polish site module

  {path: '**', redirectTo: WebsiteLanguage.English},  // redirecting to default route in case of any other prefix
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
