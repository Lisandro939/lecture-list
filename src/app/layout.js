import "./globals.css";

export const metadata = {
	title: "Reading list",
	description: "Reading list of books",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="font-sans bg-[#09182F]">{children}</body>
		</html>
	);
}
