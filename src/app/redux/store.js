import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import lectureListReducer from "./lectureListSlice";
import genreReducer from "./genreSlice";

const store = configureStore({
	reducer: {
		books: booksReducer,
		lectureList: lectureListReducer,
		genre: genreReducer,
	},
});

export default store;
