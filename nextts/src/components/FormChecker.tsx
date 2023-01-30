import React, { useState, useEffect, useRef } from "react";

interface FormData {
	name: string;
	email: string;
	age: number;
	gender: string;
}

const FormChecker: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		age: 0,
		gender: "",
	});
	const [validCount, setValidCount] = useState(0);
	const [invalidCount, setInvalidCount] = useState(0);
	const [percentValid, setPercentValid] = useState(0);

	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		const formElements = Array.from(document.getElementsByTagName("input"));
		const { validCount, invalidCount } = formElements.reduce(
			(acc, el) => {
				if (el.checkValidity()) {
					acc.validCount++;
				} else {
					acc.invalidCount++;
				}
				return acc;
			},
			{ validCount: 0, invalidCount: 0 },
		);
		setValidCount(validCount);
		setInvalidCount(invalidCount);
		setPercentValid(
			Math.round((validCount / (validCount + invalidCount)) * 100),
		);
	}, [formData]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<>
			<form ref={formRef}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						onChange={handleChange}
						required={true}
					/>
				</label>
				<br />
				<label>
					Email:
					<input
						type="email"
						name="email"
						onChange={handleChange}
						required={true}
					/>
				</label>
				<br />
				<label>
					Age:
					<input
						type="number"
						name="age"
						onChange={handleChange}
						required={true}
					/>
				</label>
				<br />
				<label>
					Gender:
					<select name="gender" onChange={handleChange} required={true}>
						<option value="" disabled={true} selected={true}>
							Select your option
						</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>
				</label>
				<br />
				<input type="submit" value="Submit" />
			</form>
			<div>inputs are valid ({percentValid}%)</div>
		</>
	);
};

export default FormChecker;
