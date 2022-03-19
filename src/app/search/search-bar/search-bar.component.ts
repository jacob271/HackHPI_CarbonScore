import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { map, Observable } from 'rxjs'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  readonly searchControl = this.formBuilder.control(undefined)

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  onSearch(): void {
    const query = this.searchControl.value

    this.router.navigate(['/', 'search', query])
  }
}
