export const playAudio = (isplaying, audioRef) => {
  // Check if the song is playing
  if (isplaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== "undefined") {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
