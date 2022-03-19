import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutTaigaModule } from './layout-taiga.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CoreModule,
    CommonModule,
    LayoutTaigaModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
