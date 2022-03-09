import { Component, OnInit } from '@angular/core';

// import { LinkService } from './services/link.service';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { Link } from './links.model';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // links: Link[];
  links$: Observable<Link[]>;
  // constructor(private linkService: LinkService) { }
  constructor(private store: Store<fromStore.ProductsState>) { }

  ngOnInit(): void {
      // this.linkService.fetchProducts().subscribe( links => this.links = links);
      // this.store.select<any>('links').subscribe( state => console.log(state))
      // this.store.select(fromStore.getAllLinks).subscribe( state => console.log(state))
      this.links$ = this.store.select(fromStore.getAllLinks);
      this.store.dispatch(new fromStore.LoadLinks());
  }

}
