import { Component, OnInit } from '@angular/core';
import {ExamdriveService } from '../services/examdrive.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Examdrive } from '../shared/examdrive';
import { Center } from '../shared/center';
import { Batch } from '../shared/batch';
import {Observable, of} from 'rxjs';
import { BatchService } from '../services/batch.service';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-examdrive-view',
  templateUrl: './examdrive-view.component.html',
  styleUrls: ['./examdrive-view.component.scss']
})
export class ExamdriveViewComponent implements OnInit {
  examdrive: Examdrive;
  centers: Center[] = new Array();
  isShow: boolean[];
  batches: Batch[][];
  searchText: any;
  pageNo: number = 1;
  itemsPage: number = 25;
  // minVal = Math.min(this.itemsPage,this.centers.length);
  constructor(private examdriveService:ExamdriveService, private batchService:BatchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const examdriveId = this.route.snapshot.params['id'];
    this.getExamdrive(examdriveId);
    setTimeout(() => {
      this.getCenters();
    },1000);
    this.isShow = new Array();
    this.batches = new Array();
  }

  getExamdrive(id: number): void{
    this.examdriveService.getExamdrive(id).subscribe((examdrive) => this.examdrive=examdrive);
    this.setBatches(id);
  }

  getCenters(): void{
    for( var batch of this.examdrive.batchList){
      this.centers.push(batch.center);
    }
    this.centers = this.centers.filter(
      (thing, i, arr) => arr.findIndex(t => t.centerId === thing.centerId) === i
    );
  }

  setBatches(id: number): void{
    this.batchService.getBatchesByExamdrive(id).subscribe((batches) => this.examdrive.batchList=batches);
  }

  showBatches(center: Center) {
    this.isShow[center.centerId] = !this.isShow[center.centerId];
    if(this.batches[center.centerId]==null){
      this.getBatches(center);
    }
    setTimeout(() => {
      console.log(this.batches);
    },500);
  }

  getBatches(center: Center): void{
    this.batches[center.centerId] = this.examdrive.batchList.filter(b => b.center!=null && b.center.centerId==center.centerId);
  }
}