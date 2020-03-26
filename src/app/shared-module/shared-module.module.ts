import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationPipe } from '../../pipes/pagination.pipe';
// import { PaginationPipe } from '../pagination.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PaginationPipe,

  ],
  exports: [
    PaginationPipe,

  ]
})
export class SharedModuleModule { }
