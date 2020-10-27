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
  constructor(private examdriveService:ExamdriveService, private batchService:BatchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const examdriveId = this.route.snapshot.params['id'];
    this.getExamdrive(examdriveId);
    setTimeout(() => {
      this.getCenters();
    },1000);
    this.isShow = new Array(this.centers.length);
    this.batches = new Array(this.centers.length);
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

  showBatches(id: number, center: Center) {
    this.isShow[id] = !this.isShow[id];
    if(this.batches[id]==null){
      this.getBatches(id,center);
    }
    setTimeout(() => {
      console.log(this.batches);
    },500);
  }

  getBatches(i: number, center: Center): void{
    this.batches[i] = this.examdrive.batchList.filter(b => b.center!=null && b.center.centerId==center.centerId);
  }
}