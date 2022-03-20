import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutComponent } from './layout.component'
import { LayoutTaigaModule } from './layout-taiga.module'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from '../core/core.module'
import { TuiToggleModule } from '@taiga-ui/kit'
import { FormsModule } from '@angular/forms'
import { TuiLinkModule } from '@taiga-ui/core'

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CoreModule,
    CommonModule,
    LayoutTaigaModule,
    RouterModule,
    BrowserAnimationsModule,
    TuiToggleModule,
    FormsModule,
    TuiLinkModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
