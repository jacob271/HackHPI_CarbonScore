import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ViewTypeService {
  private readonly isBusinessViewSubject = new BehaviorSubject<boolean>(false)

  readonly isBusinessView$: Observable<boolean> = this.isBusinessViewSubject.asObservable()

  toggleIsBusinessViewState(): void {
    const isBusinessView = this.isBusinessViewSubject.getValue()

    console.log('toggle')

    this.isBusinessViewSubject.next(!isBusinessView)
  }
}
