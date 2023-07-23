import React from "react";
import { useSelector } from "react-redux";
import GenreSelector from "./GenreSelector";
import BooksSection from "./BooksSection";
import LectureListSection from "./LectureListSection";

export default function Principal() {
	const rawBooks = useSelector((state) => state.books);
	const lectureList = useSelector((state) => state.lectureList);

	return (
		<div className="pt-4">
			<h1 className="font-bold text-4xl px-4 text-white">
				{rawBooks.length} libros disponibles
			</h1>
			<h2 className="px-4 font-semibold text-xl pt-4 text-white">
				{lectureList.length} en la lista de lectura
			</h2>
			<GenreSelector />
			<div className="flex flex-row w-full h-full">
				<BooksSection />
				<LectureListSection />
			</div>
		</div>
	);
}
