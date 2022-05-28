export class Film {
  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public watched: boolean,
    public score: number,
    public emmies: number
  ) {}

  setScore(score: number) {
    this.watched = true;
    this.score = score;
  }
}
