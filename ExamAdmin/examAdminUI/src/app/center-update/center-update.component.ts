import { Component, OnInit } from '@angular/core';
import { Center } from '../shared/center';
import {CenterService} from '../services/center.service';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-center-update',
  templateUrl: './center-update.component.html',
  styleUrls: ['./center-update.component.scss']
})
export class CenterUpdateComponent implements OnInit {
  center: Center;
  centerId: number;
  constructor(private centerService: CenterService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.centerId = this.route.snapshot.params['id'];
    this.getCenter(this.centerId);
  }

  getCenter(id: number): void{
    this.centerService.getCenter(id).subscribe((center) => this.center = center);
  }

  updateCenter(id:number, center: Center): void{
    this.centerService.updateCenter(id,center).subscribe((center) => this.center = center);
  }

  onSubmit(){
    this.updateCenter(this.centerId,this.center);
    this.router.navigate(['/centers']);
  }  
}