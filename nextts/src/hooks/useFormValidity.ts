import { useState, useEffect } from "react";

/**
 * @param formElements
 */
export const useFormValidity = (
	inputRefs: React.RefObject<HTMLInputElement>[],
) => {
	const [percentage, setPercentage] = useState<number>(0);

	useEffect(() => {
		const inputFields = inputRefs.map((ref) => ref.current);
		const invalidInputs = inputFields.reduce((acc, cur) => {
			if (!cur?.checkValidity()) {
				acc++;
			}
			return acc;
		}, 0);
		setPercentage((invalidInputs / inputFields.length) * 100);
	}, [inputRefs]);

	return percentage;
};
