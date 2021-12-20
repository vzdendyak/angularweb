import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Item} from '../../shared/models/item';

@Component({
  selector: 'app-bucket-dialog',
  templateUrl: './bucket-dialog.component.html',
  styleUrls: ['./bucket-dialog.component.scss']
})
export class BucketDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BucketDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Item[]) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  removeFromBucket(index: number) {
    this.data.splice(index, 1);
  }
}
