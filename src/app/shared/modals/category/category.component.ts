import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder , Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private form:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(1)]],
      theme_fk: ['',Validators.required]
    });

  }

  closeDialog() {
    this.dialogRef.close();
  }

  save() {
    if(this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }


}
