import { useState, useEffect } from "react";

export interface InputField {
	name: string;
	value: string;
	isValid: boolean;
}

export interface FormState {
	inputFields: InputField[];
	errors: number;
}

export const useFormValidation = (initialState: FormState) => {
	const [formState, setFormState] = useState(initialState);

	useEffect(() => {
		const errors = formState.inputFields.reduce((acc, field) => {
			if (!field.isValid) {
				acc++;
			}
			return acc;
		}, 0);
		setFormState({ ...formState, errors });
	}, [formState]);

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const inputFields = formState.inputFields.map((field) => {
			if (field.name === event.target.name) {
				return {
					...field,
					value: event.target.value,
					isValid: event.target.checkValidity(),
				};
			}
			return field;
		});
		setFormState({ ...formState, inputFields });
	};

	return { formState, handleChange };
};

// import { useState, useEffect } from "react";

// const useFormValidation = (inputs: React.RefObject<HTMLElement>[]) => {
// 	const [errors, setErrors] = useState({});
// 	const [formCompleted, setFormCompleted] = useState(false);
// 	const [formPercentage, setFormPercentage] = useState(0);

// 	useEffect(() => {
// 		const formElements = inputs.map((ref) => ref.current);
// 		const formInputs = formElements.filter((element) =>
// 			["INPUT", "SELECT", "RADIO", "CHECKBOX", "TEXTAREA"].includes(
// 				element.tagName,
// 			),
// 		);

// 		const checkValidity = (input: HTMLInputElement) => {
// 			const isValid = input.checkValidity();
// 			if (!isValid) {
// 				setErrors((prevErrors) => ({
// 					...prevErrors,
// 					[input.name]: input.validationMessage,
// 				}));
// 			} else {
// 				setErrors((prevErrors) => ({
// 					...prevErrors,
// 					[input.name]: "",
// 				}));
// 			}
// 		};
// 		formInputs.forEach((input) => {
// 			input.addEventListener("input", () => checkValidity(input));
// 		});

// 		const formErrors = formInputs.reduce((acc, input) => {
// 			if (!input.checkValidity()) {
// 				acc[input.name] = input.validationMessage;
// 			}
// 			return acc;
// 		}, {});

// 		if (Object.keys(formErrors).length === 0) {
// 			setFormCompleted(true);
// 		}

// 		const formProgress =
// 			((formInputs.length - Object.keys(formErrors).length) /
// 				formInputs.length) *
// 			100;
// 		setFormProgress(formProgress);
// 	}, []);

// 	return { formCompleted, formProgress, errors };
// };

// export default useFormValidation;
