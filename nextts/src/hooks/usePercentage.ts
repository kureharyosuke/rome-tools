import { useState, useEffect } from "react";

export const usePercentage = () => {
	const [percentage, setPercentage] = useState<number>(0);

	useEffect(() => {
		const calculatePercentage = () => {
			const formElements = document.querySelectorAll<HTMLInputElement>(
				"input, select, radio, textarea, checkbox",
			);
			const totalElements = formElements.length;
			const invalidElements = Array.from(formElements).reduce(
				(acc, curElement) => {
					if (!curElement.checkValidity()) acc++;
					return acc;
				},
				0,
			);
			setPercentage((invalidElements / totalElements) * 100);
		};
		calculatePercentage();
	}, []);

	return percentage;
};
