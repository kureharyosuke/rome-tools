import React from "react";
import { usePercentage } from "../hooks/usePercentage";

export const Form = () => {
	const percentage = usePercentage();
	return (
		<div>
			<p>{percentage}%</p>
			<form>
				<input name="name" type="text" required={true} />
				<input name="email" type="email" required={true} />
				<input name="password" type="password" required={true} minLength={8} />
				<select name="country" required>
					<option value="">Select a country</option>
					<option value="us">United States</option>
					<option value="ca">Canada</option>
				</select>
				<input name="terms" type="checkbox" required={true} />
			</form>
		</div>
	);
};
