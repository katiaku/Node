class Movie{

    constructor(title, releaseYear, nationality, language, 
        platform, isMCU, mainCharacterName, genre, actors, 
        director, writer) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.language = language;
        this.platform = platform;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.genre = genre;
        this.actors = actors;
        this.director = director;
        this.writer = writer;
    }
}

module.exports = { Movie };

