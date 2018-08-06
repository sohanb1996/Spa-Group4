import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ICategories } from '../category';

@Component({
  selector: 'app-spa-request',
  templateUrl: './spa-request.component.html',
  styleUrls: ['./spa-request.component.css']
})
export class SpaRequestComponent implements OnInit {

  constructor(private _category: CategoryService) { }

  serviceCategory: ICategories;
  serviceSubCategory: ICategories;
  serviceId = 4;
  unitprice = 0;
  request = 'Deep Tissue Massage';
  
  
  parentCategories: ICategories [];
  subCategories: ICategories [];

  ngOnInit() {
    this._category.getCategories('4')
    .subscribe((data: ICategories[]) => this.parentCategories = data);
  }

  callType(event: ICategories) {
    console.log('hi');
    if (this.serviceId !==  event.serviceTypeId) {
      this.serviceCategory = event;
      this.serviceId = this.serviceCategory.serviceTypeId;
      
      
      this.unitprice = 0;
      this.request = this.serviceCategory.serviceTypeDesc;
      // console.log('house' + this.serviceCategory.serviceTypeId.toString());
      this._category.getCategories(this.serviceCategory.serviceTypeId.toString())
      .subscribe((sub: ICategories[]) => this.subCategories = sub);
      console.log(this.subCategories);
    }
    // console.log(event);
  }

}
