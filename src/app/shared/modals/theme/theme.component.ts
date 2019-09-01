import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder , Validators, FormGroup} from '@angular/forms';

import { Category } from '../../entities/category';
import { Theme } from '../../entities/theme';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  private form:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ThemeComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Category, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(1)]]
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
