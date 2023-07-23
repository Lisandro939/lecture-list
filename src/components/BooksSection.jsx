import { useSelector } from "react-redux";
import Book from "./Book";

export default function BooksSection() {
	const rawBooks = useSelector((state) => state.books);
	const lectureList = useSelector((state) => state.lectureList);

	const books = rawBooks.filter((book) => {
		return !lectureList.includes(book);
	});

	return (
		<div className={lectureList.length === 0 ? "w-full py-8" : "w-3/4 py-8"}>
			{lectureList.length === 0 ? (
				<div className="grid grid-cols-4 px-4 gap-4">
					{books.map((book, index) => {
						return <Book key={index + 1} book={book} section />;
					})}
				</div>
			) : (
				<div className="grid grid-cols-3 gap-4 px-4">
					{books.map((book, index) => {
						return <Book key={index + 40} book={book} section />;
					})}
				</div>
			)}
		</div>
	);
}
