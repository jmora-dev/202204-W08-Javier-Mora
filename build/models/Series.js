export class Series {
    constructor(id, name, creator, year, poster, watched, score, emmies) {
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.year = year;
        this.poster = poster;
        this.watched = watched;
        this.score = score;
        this.emmies = emmies;
    }
    setScore(score) {
        this.watched = true;
        this.score = score;
    }
}
