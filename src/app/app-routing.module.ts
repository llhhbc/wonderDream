import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DreammapComponent } from './dreammap/dreammap.component';
import { MemoryComponent } from './memory/memory.component';
import { WordlinkComponent } from './memory/wordlink/wordlink.component';

const routes: Routes = [
    { path: "dreammap", component: DreammapComponent},
    { path: "memory", component: MemoryComponent},
    { path: "memory/wordlink", component: WordlinkComponent},
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
