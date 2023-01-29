import React from "react"
import { usePercentage } from "../hooks/usePercentage"

export const Form = () => {
  const percentage = usePercentage()
  return (
    <div>
      <p>{percentage}%</p>
      <form>
        <input name="name" type="text" required />
        <input name="email" type="email" required />
        <input name="password" type="password" required minLength={8} />
        {/* <select name="country" required>
					<option value="">Select a country</option>
					<option value="us">United States</option>
					<option value="ca">Canada</option>
				</select> */}
        <input name="terms" type="checkbox" required />
      </form>
    </div>
  )
}
