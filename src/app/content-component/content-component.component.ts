import { Component, OnInit } from '@angular/core';
import { LearnSegmentModel } from '../learnSegments/learn-segment-model';
import { LearnSegmentService} from '../learnSegments/learn-segment.service';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.scss']
})

export class ContentComponentComponent implements OnInit {
  public LearningSegments: LearnSegmentModel[] = this.learnSegmentService.getLearningSegments();
  concreteLearningSegments: LearnSegmentModel[] = [
    new LearnSegmentModel("Linq"),
    new LearnSegmentModel("Generics"),
  ]
  constructor(private learnSegmentService: LearnSegmentService) {

  }

  ngOnInit() {
    this.getlearnSegments();
  }

  getlearnSegments(){
    this.LearningSegments = this.learnSegmentService.getLearningSegments();
  }
}
