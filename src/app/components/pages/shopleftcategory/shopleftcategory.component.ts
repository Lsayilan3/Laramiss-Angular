import { CategoryService } from './services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from './models/category';

@Component({
  selector: 'app-shopleftcategory',
  templateUrl: './shopleftcategory.component.html',
  styleUrls: ['./shopleftcategory.component.css']
})
export class ShopleftcategoryComponent implements OnInit {

  categories : Category[]=[];
  currentCategory: Category | undefined;

  constructor(private  categoryService  :CategoryService ) { }

  ngOnInit() : void {
    this.getCategory()
  }

  getCategory() {
		this.categoryService.getCategoryList().subscribe(data => {
			this.categories = data;
		
		});
  }   

  
  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category:Category){
    if(category ==this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllCategoryClass(){
    if(!this.currentCategory){
     return "list-group-item active"
    }
    else{
     return "list-group-item"
    }
}

}
