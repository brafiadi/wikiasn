/**
 * Converts a number to Indonesian Rupiah (Rp) currency format
 * @param amount - The number to be converted to Rupiah format
 * @param options - Optional configuration for formatting
 * @returns Formatted Rupiah string
 */
export const formatRupiah = (
	amount: number,
	options: {
		prefix?: boolean;
		decimalPlaces?: number;
	} = {},
): string => {
	const { prefix = true, decimalPlaces = 0 } = options;

	// Ensure the amount is a number and round to specified decimal places
	const roundedAmount = Number(amount.toFixed(decimalPlaces));

	// Use Intl.NumberFormat for consistent formatting
	const formatter = new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: decimalPlaces,
		maximumFractionDigits: decimalPlaces,
	});

	// Remove the 'Rp' prefix if not desired
	const formattedCurrency = formatter.format(roundedAmount);
	return prefix
		? formattedCurrency
		: formattedCurrency.replace("Rp", "").trim();
};
