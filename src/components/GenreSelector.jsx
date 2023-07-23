"use client";

import { filterBooksByGenre } from "@/app/redux/booksSlice";
import { setGenre } from "@/app/redux/genreSlice";
import { useDispatch, useSelector } from "react-redux";

export default function GenreSelector() {
	const dispatch = useDispatch();
	const lectureList = useSelector((state) => state.lectureList);

	const handleOnChange = (e) => {
		dispatch(setGenre(e.target.value));
		dispatch(filterBooksByGenre([e.target.value, lectureList]));
	};

	return (
		<div className="ml-4 my-4">
			<label
				for="genres"
				class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>
				Selecciona un género
			</label>
			<select
				name="genre"
				id="genre"
				onChange={handleOnChange}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				<option value="Todos">Todos</option>
				<option value="Fantasía">Fantasía</option>
				<option value="Ciencia ficción">Ciencia ficción</option>
				<option value="Zombies">Zombies</option>
				<option value="Terror">Terror</option>
			</select>
		</div>
	);
}
