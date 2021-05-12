import { Injectable } from '@angular/core';
import { LearnSegmentModel } from './learn-segment-model'

@Injectable({
  providedIn: 'root'
})
export class LearnSegmentService {

  public learningSegments: LearnSegmentModel[] = [
    new LearnSegmentModel("Linq"),
    new LearnSegmentModel("Generics")
  ];

  constructor() { }

  public getLearningSegments(): LearnSegmentModel[]{
    return this.learningSegments;
  }
}
