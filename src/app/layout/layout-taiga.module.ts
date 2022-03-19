import { NgModule } from '@angular/core';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiRootModule,
  TuiScrollbarModule,
} from '@taiga-ui/core';
import { TuiActionModule, TuiAvatarModule } from '@taiga-ui/kit';

const taigaModules = [
  TuiRootModule,
  TuiButtonModule,
  TuiActiveZoneModule,
  TuiActionModule,
  TuiAvatarModule,
  TuiScrollbarModule,
];

@NgModule({
  imports: taigaModules,
  exports: taigaModules,
})
export class LayoutTaigaModule {}
