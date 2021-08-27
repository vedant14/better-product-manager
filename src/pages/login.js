import React, { useState, useContext, useEffect } from "react";
import { Layout } from "../components";
import { supabase } from "../services/supabaseClient";

export default ({ history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [user, setUser] = useState("");
	const [session, setSession] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		signInWithGoogle();
	};

	async function signInWithGoogle() {
		const { user, session, error } = await supabase.auth.signIn({
			provider: "google",
		});
		setUser(user);
		setSession(session);
	}

	return (
		<Layout>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					value={email}
					onChange={(event) => {
						setError("");
						setEmail(event.target.value);
					}}
				/>
				<input
					type="password"
					value={password}
					onChange={(event) => {
						setError("");
						setPassword(event.target.value);
					}}
				/>
				<button>Login</button>
			</form>
			{error && <p>{error}</p>}
		</Layout>
	);
};
