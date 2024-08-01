        var playpause = true
        function playMusic() {
            playpause =!playpause
            var audio = document.getElementById('EY');
            playpause?audio.play():audio.pause() ;
        }
        var playpause = true
        function playMusic() {
            playpause =!playpause
            var audio = document.getElementById('KK');
            playpause?audio.play():audio.pause() ;
        }
        function playMusic() {
            playpause =!playpause
            var audio = document.getElementById('LP');
            playpause?audio.play():audio.pause() ;
        }




































// document.addEventListener('DOMContentLoaded', () => {
//     const audioPlayer = document.getElementById('audio-player');
//     const songList = document.getElementById('song-list');
//     const playPauseButton = document.getElementById('play-pause');

//     let isPlaying = false;
//     let currentSongIndex = 0;

//     // List of songs with their paths, titles, and album cover URLs
//     const songs = [
//         { path: 'C:\Users\thami\Downloads\Music App\songs\Enakena Yarumilaiye.mp3', title: 'Enakena Yarumilaiye', cover: 'C:/Users/thami/Documents/ani pic.jpg' },
//         { path: 'C:\Users\thami\Downloads\Music App\songs\Kannana Kanne.mp3', title: 'Kannana Kanne', cover: 'C:/Users/thami/Documents/ani pic.jpg' },
//         { path: 'C:\Users\thami\Downloads\Music App\songs\Life of Pazham.mp3', title: 'Souvenir', cover: 'C:/Users/susma/OneDrive/Desktop/Music Player/assets/artist1.jpeg' },
//         ];

//     // Load the song into the player
//     function loadSong(songIndex) {
//         const song = songs[songIndex];
//         audioPlayer.src = song.path;
//         audioPlayer.load();
//     }

//     // Play/Pause functionality
//     playPauseButton.addEventListener('click', () => {
//         console.log('listener')
//         if (isPlaying) {
//             audioPlayer.pause();
//             isPlaying = false;
//             playPauseButton.textContent = 'Play';
//         } else {
//             audioPlayer.play();
//             isPlaying = true;
//             playPauseButton.textContent = 'Pause';
//         }
//     });
    

//     // Event listener for song list
//     songList.addEventListener('click', (event) => {
//         const li = event.target.closest('li');
//         if (li) {
//             const songPath = li.getAttribute('data-path');
//             const songIndex = songs.findIndex(song => song.path === songPath);
//             if (songIndex !== -1) {
//                 currentSongIndex = songIndex;
//                 loadSong(currentSongIndex);
//                 audioPlayer.play();
//                 isPlaying = true;
//                 playPauseButton.textContent = 'Pause'; // Ensure play/pause button shows the correct state
//             }
//         }
//     });
// });