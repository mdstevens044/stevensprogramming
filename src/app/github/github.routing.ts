import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { GithubComponent } from './github.component'

export const routes: Routes = [
  { path: '', component: GithubComponent }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)