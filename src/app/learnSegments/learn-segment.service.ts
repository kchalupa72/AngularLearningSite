import { Injectable } from '@angular/core';
import { LearnSegmentModel } from './learn-segment-model';
import { LearnSegmentDifficulty } from './learn-segment-model';

@Injectable({
  providedIn: 'root'
})
export class LearnSegmentService {

  public testInstructions: string[] = [
    'Intruction one',
    'Instruction two'
  ];

  public testRepoLink: string = "https://dev.azure.com/LearningTaskForce/Blazor_ClientAppExample";
  public testDocLink: string = "https://docs.microsoft.com/en-us/dotnet/csharp/";

  public learningSegments: LearnSegmentModel[] = [
    new LearnSegmentModel("Basic Syntax", this.testInstructions, this.testRepoLink, this.testDocLink, LearnSegmentDifficulty.Easy),
    new LearnSegmentModel("Simple Collections", this.testInstructions, this.testRepoLink, this.testDocLink, LearnSegmentDifficulty.Easy),

    new LearnSegmentModel("Linq", this.testInstructions, this.testRepoLink, this.testDocLink, LearnSegmentDifficulty.Intermediate),
    new LearnSegmentModel("Generics", this.testInstructions, this.testRepoLink, this.testDocLink, LearnSegmentDifficulty.Intermediate)
  ];

  constructor() { }

  public getLearningSegments(): LearnSegmentModel[]{
    return this.learningSegments;
  }

  public getLearningSegmentsByDifficulty(segmentDifficulty: LearnSegmentDifficulty): LearnSegmentModel[]{
    return this.learningSegments.filter(segment => segment.difficulty == segmentDifficulty);
  }

}
