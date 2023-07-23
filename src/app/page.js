"use client";

import { Provider } from "react-redux";
import store from "./redux/store";
import Principal from "@/components/Principal";

export default function Home() {
	return (
		<Provider store={store}>
			<Principal />
		</Provider>
	);
}
