import React, { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";

export const UserContext = React.createContext([]);

const UserProvider = ({ children }) => {
	const [authenticatedState, setAuthenticatedState] =
		useState("not-authenticated");

	const [user, setUser] = useState("");

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				handleAuthChange(event, session);
				if (event === "SIGNED_IN") {
					setAuthenticatedState("authenticated");
				}
				if (event === "SIGNED_OUT") {
					setAuthenticatedState("not-authenticated");
				}
			}
		);
		checkUser();
		return () => {
			authListener.unsubscribe();
		};
	}, []);
	async function checkUser() {
		const user = await supabase.auth.user();
		if (user) {
			setAuthenticatedState("authenticated");
			setUser(user);
		}
	}
	async function handleAuthChange(event, session) {
		await fetch("/api/auth", {
			method: "POST",
			headers: new Headers({ "Content-Type": "application/json" }),
			credentials: "same-origin",
			body: JSON.stringify({ event, session }),
		});
	}

	return (
		<UserContext.Provider value={[user]}>{children}</UserContext.Provider>
	);
};

export default UserProvider;
