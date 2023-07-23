import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";

export default function LectureListSection() {
	const lectureList = useSelector((state) => state.lectureList);
	return (
		<div
			className={
				lectureList.length === 0
					? "hidden"
					: "absolute top-0 right-0 w-1/4 flex flex-col items-center justify-start gap-4 bg-[#1B488D] py-4"
			}
		>
			<h1 className="text-white text-xl font-bold">Lecture List Section</h1>
			{lectureList.map((book, index) => {
				return <Book key={index + 100} book={book} />;
			})}
		</div>
	);
}
