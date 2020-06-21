import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:06" },
    { title: "Saivam azhagu", duration: "3:06" },
    { title: "Life of ram", duration: "5:06" },
    { title: "Oru nalil", duration: "2:06" },
    { title: "Tarakka bindige", duration: "7:06" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
