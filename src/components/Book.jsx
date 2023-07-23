import { useDispatch, useSelector } from "react-redux";
import { removeBookSection, addBookSection } from "@/app/redux/booksSlice";
import { addBookList, removeBookList } from "@/app/redux/lectureListSlice";
import React from "react";
import InteractButton from "./buttons/InteractButton";

export default function Book({ book, section }) {
	const genre = useSelector((state) => state.genre);
	const dispatch = useDispatch();

	const handleDelete = (book) => {
		if (section === true) {
			dispatch(removeBookSection(book.book.title));
			dispatch(addBookList(book));
		} else {
			dispatch(removeBookList(book.book.title));
			dispatch(addBookSection([book, genre]));
		}
	};
	const bool = section ? true : false;

	return (
		<div class="max-w-[280px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col ">
			<a href="/" className="">
				<img
					class="rounded-t-lg w-[280px] h-[400px]"
					src={book.book.cover}
					alt=""
				/>
			</a>
			<div class="p-5 flex flex-col items-start justify-between h-full h-60">
				<a href="/">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{book.book.title}
					</h5>
				</a>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{book.book.synopsis}
				</p>
				<InteractButton handleClick={handleDelete} book={book} section={bool} />
			</div>
		</div>
	);
}
