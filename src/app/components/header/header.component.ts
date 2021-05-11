/**
 * @class: HeaderComponent
 * Purpose of this component is to reuse header in many pages
 * @description: Implement all logics related to movie list view
 * @author: windya yasas
 */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

/**
 * initialize and implement functionalities related header component
 * @implements OnInit
 */
export class HeaderComponent implements OnInit {
  @Input() inputSearchKey: string = null; // Input value from other component
  @Output() onSearchEvent = new EventEmitter<any>(); // Output event to other component

  searchForm: FormGroup; // search form
  constructor(private formBuilder: FormBuilder) {

    this.searchForm = this.formBuilder.group({
      searchKey: ['']
    });

  }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get searchFormController() { return this.searchForm.controls; }

  /**
   * Method to get search string from input
   * @description : Send search string to other component
   */
  onSearch() {
    console.log("On search");
    this.onSearchEvent.emit(this.searchFormController.searchKey.value);
  }

}
