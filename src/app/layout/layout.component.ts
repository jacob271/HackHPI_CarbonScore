import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Observable } from 'rxjs'
import { ViewTypeService } from '../view-type.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  readonly isBusinessView$: Observable<boolean> = this.viewTypeService.isBusinessView$

  constructor(private readonly viewTypeService: ViewTypeService) {}

  onToggle(): void {
    this.viewTypeService.toggleIsBusinessViewState()
  }
}
