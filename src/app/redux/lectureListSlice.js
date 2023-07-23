import { createSlice } from "@reduxjs/toolkit";

// Si JSON.parse(localStorage.getItem("lectureList")) es null, entonces se asigna un array vacío
const initialState = JSON.parse(localStorage.getItem("lectureList")) || [];

export const lectureListSlice = createSlice({
	name: "lectureList",
	initialState,
	reducers: {
		addBookList: (state, action) => {
			state.push(action.payload);
			localStorage.setItem("lectureList", JSON.stringify(state));
		},
		removeBookList: (state, action) => {
			const updatedState = state.filter(
				(book) => book.book.title !== action.payload,
			);
			localStorage.setItem("lectureList", JSON.stringify(updatedState));
			return updatedState;
		},
	},
});

export const { addBookList, removeBookList } = lectureListSlice.actions;
export default lectureListSlice.reducer;
