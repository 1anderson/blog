import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators, FormGroup} from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { ConfigService } from '../shared/config/config.service';
import { Observable, Subscriber } from 'rxjs';

import { Author } from '../shared/entities/author';
import { Category } from '../shared/entities/category';
import { SubCategory } from '../shared/entities/sub-category';
import { Post } from '../shared/entities/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public createPostForm: FormGroup;
  public fileToUpload: any;
  public formData = new FormData();
  public categories$: Observable<Category[]>;
  public subCategories$: Observable<SubCategory[]>;
  public authors$: Observable<Author[]>;
  public isExibition: boolean = true;
  public post: Post = new Post();
  constructor(private fb: FormBuilder, private crudService: CrudService, private configService: ConfigService) {}

  ngOnInit() {
    this.createForm();
    console.log(this.createPostForm );
    this.getAuthors();
    this.getCategories();
    this.getSubCategories();
  }

  onSubmit() {
    if (this.createPostForm.valid) {
      this.formData = this.populateFormData(this.formData,this.createPostForm);
      if ( this.isCreation() ) {
        this.crudService.post<Post>(this.formData).subscribe(data => {console.log(data), this.post = data['data'] },err => console.log(err));
      }
      else {
        this.formData.set('id',this.post.id.toString());
        this.crudService.put(this.formData).subscribe(data=> console.log(data),err=> console.log(err));
      }

    }
  }

  createForm() {
    this.createPostForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(150)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      files: ['', Validators.required],
      category_id: ['' , Validators.required],
      subcategory_id: ['', Validators.required],
      author_id: ['', Validators.required]
    });
  }

  changeExibition() {
    this.isExibition = !this.isExibition;
  }

  postMethod(files: FileList) {
    this.fileToUpload = files.item(0);
    this.formData.append("files", this.fileToUpload, this.fileToUpload.name);
    return false;
  }

  getAuthors() {
    this.authors$ = this.crudService.get<Author>(this.configService.getEndPoints().AUTHOR,'');
  }

  getCategories() {
    this.categories$ = this.crudService.get<Category>(this.configService.getEndPoints().CATEGORY,'');
  }

  getSubCategories() {
    this.subCategories$ = this.crudService.get<SubCategory>(this.configService.getEndPoints().SUBCATEGORY,'');
  }

  populateFormData( form: FormData, formgroup: FormGroup ): FormData {
    for (let key in formgroup.value) {
        if(key.match("files")) {
            form.set(key, new Blob([formgroup.get(key).value]));
        }else {
          form.set(key, formgroup.get(key).value);
        }
    }
    return form;
  }

  isCreation() : boolean {
    return this.post.id === undefined;
  }


}
