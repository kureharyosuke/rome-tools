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
	}, []);

	return percentage;
};

// ./src/hooks/useFormValidity.ts:11:2 lint/nursery/useExhaustiveDependencies ━━━━━━━━━━━━━━━━━━━━━━━━━

//   ✖ This hook do not specify all of its dependencies.

//      9 │        const [percentage, setPercentage] = useState<number>(0);
//     10 │
//   > 11 │        useEffect(() => {
//        │        ^^^^^^^^^
//     12 │                const inputFields = inputRefs.map((ref) => ref.current);
//     13 │                const invalidInputs = inputFields.reduce((acc, cur) => {

//   ℹ This dependency is not specified in the hook dependency list.

//     11 │        useEffect(() => {
//   > 12 │                const inputFields = inputRefs.map((ref) => ref.current);
//        │                                    ^^^^^^^^^^^^^
//     13 │                const invalidInputs = inputFields.reduce((acc, cur) => {
//     14 │                        if (!cur?.checkValidity()) {

// Checked 12 file(s) in 3ms
// Found 1 error(s)
// Error: some errors were emitted while running checks
//  ELIFECYCLE  Command failed with exit code 1.
