import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-photo',
  template: `
    <div class="page">
      <div class="imgContainer">
        <img [src]="id" />
      </div>
    </div>
  `,
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  id: string | null;
  constructor(private actRoute: ActivatedRoute){
    this.id = "";
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }
}
