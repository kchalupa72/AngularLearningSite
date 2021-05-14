export enum LearnSegmentDifficulty{
  Easy,
  Intermediate,
  Hard
}

export class LearnSegmentModel {
  public segmentTitle: string;
  public instructions: string[];
  public repoLink: string;
  public docLink: string;
  public difficulty: LearnSegmentDifficulty;

  public constructor(segmentTitle: string, instructions: string[], repoLink: string, docLink: string, difficulty: LearnSegmentDifficulty){
    this.segmentTitle = segmentTitle;
    this.instructions = instructions;
    this.repoLink = repoLink;
    this.docLink = docLink;
    this.difficulty = difficulty;
  }
}
