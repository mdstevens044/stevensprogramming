import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { ContactComponent } from './contact.component'

export const routes: Routes = [
  { path: '', component: ContactComponent }
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes)
