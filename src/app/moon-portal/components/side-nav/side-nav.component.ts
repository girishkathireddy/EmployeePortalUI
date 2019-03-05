import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

const MAX_WIDTH_BREAKPOINT =720;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  
  private mediaMatcher:MediaQueryList=matchMedia(`(max-width:${MAX_WIDTH_BREAKPOINT}px)`)


  constructor(private filterService: FilterService) { }

  links=[
    {
      name: 'Salary',
      url:'salary',
      option1:'Low to High',
      option2:'High to Low'
    },{
      name: 'Name',
      url:'name',
      option1:'Asc',
      option2:'Desc'
    },
    {
      name: 'Hire date',
      url:'date',
      option1:'New to Old',
      option2:'Old to New'
    }
  ];

  panelOpenState = false;

  ngOnInit() {
  }

  filter(filterBy,sortOrder){
    this.filterService.changeFilter(filterBy,sortOrder);
  }


  isScreenSmall(){
   return this.mediaMatcher.matches;
  }
}
