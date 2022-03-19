import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TuiRootModule, TuiDialogModule, TuiNotificationsModule, TUI_SANITIZER } from '@taiga-ui/core'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { LayoutModule } from './layout/layout.module'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiNotificationsModule,
    LayoutModule,
    AppRoutingModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
