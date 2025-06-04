// Parent constructor
class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    // Method
    watch(){
        console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
    }
}

const videoData = [
  { title: "Intro to Python", uploader: "Alice", time: 300 },
  { title: "React Basics", uploader: "Bob", time: 450 },
  { title: "Docker for Beginners", uploader: "Charlie", time: 600 },
  { title: "Advanced CSS", uploader: "Diana", time: 520 },
  { title: "Git & GitHub Guide", uploader: "Ethan", time: 400 }
];


for (let i = 0; i < videoData.length; i++) {
  const { title, uploader, time } = videoData[i];
  const video = new Video(title, uploader, time);
  video.watch();
}

// const vid1 = new Video("One Piece", "Jhon Durant", 234);
// vid1.watch();

// const vid2 = new Video("One Piece 2", "Jhon Maigre", 432);
// vid2.watch();