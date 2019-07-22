import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { Author } from '../shared/entities/author';
import { ConfigService } from '../shared/config/config.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public createPostForm;
  public fileToUpload: any;
  public formData = new FormData(); 
  public categories: any;
  public subCategories: any;
  public authors: Author;
  constructor(private fb: FormBuilder, private crudService: CrudService, private configService: ConfigService) {

  }

  ngOnInit() {
    this.createPostForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(150)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      html: ['', Validators.required],
      category_id: ['' , Validators.required],
      subcategory_id: ['', Validators.required],
      author_id: ['', Validators.required]
    })

    this.getAuthors();
    this.getCategories();
    this.getSubCategories();

    console.log(this.createPostForm);
  }

  onSubmit() {
    
    
    if (this.createPostForm.valid) {
        this.formData.append("title",this.createPostForm.get("title").value);
        this.formData.append("description",this.createPostForm.get("description").value);
        this.formData.append("user_profile_id",'1');
        this.formData.append("category_id",this.createPostForm.get('category_id').value);
        this.formData.append("sub_category_id",this.createPostForm.get('subcategory_id').value);
        this.createPostForm.patchValue({html:new Blob([this.createPostForm.value.html])});
        this.formData.append("files",this.createPostForm.get("html").value);
        this.formData.append("author_id",this.createPostForm.get("author_id").value);
        this.crudService.post(this.formData).subscribe(data => console.log(data),err => console.log(err));
    }
  }
  
  postMethod(files: FileList) {
    this.fileToUpload = files.item(0); 
    this.formData.append("files", this.fileToUpload, this.fileToUpload.name); 
    console.log(this.formData)
    return false; 
  }

  getAuthors() {
    this.crudService.get(this.configService.getEndPoints().AUTHOR,'')
      .subscribe(data => { this.authors = data['authors']; console.log(this.authors) },
        err => console.log(err)
      )
  }

  getCategories() {
    this.crudService.get(this.configService.getEndPoints().CATEGORY,'')
      .subscribe(data => { this.categories = data['categories']; console.log(this.categories) },
        err => console.log(err)
      )
  }

  getSubCategories() {
    this.crudService.get(this.configService.getEndPoints().SUBCATEGORY,'')
      .subscribe(data => { this.subCategories = data['subCategories']; console.log(this.subCategories) },
        err => console.log(err)
      )
  }

}
