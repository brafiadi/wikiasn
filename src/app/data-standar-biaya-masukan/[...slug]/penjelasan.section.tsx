import { ExpandableText } from "@/components/expandable-text";

export default function PenjelasanSBM({ penjelasan }: { penjelasan: string }) {
	const renderPenjelasan = () => {
		return penjelasan.split("\n").map((line, index) => {
			const trimmedLine = line.trim();
			if (!trimmedLine) return null; // Abaikan baris kosong
			if (trimmedLine.startsWith("-")) {
				// Render elemen daftar
				return <li key={index}>{trimmedLine.substring(1).trim()}</li>;
			} else {
				// Render paragraf biasa
				return <p key={index}>{trimmedLine}</p>;
			}
		});
	};

	return (
		<div className="mt-8">
			<h4 className="m-4 text-xl font-semibold text-neutral-700">
				Penjelasan Standar Biaya Masukan
			</h4>

			<div className="m-4 text-neutral-700 text-md">
				<ExpandableText maxLength={300}>{renderPenjelasan()}</ExpandableText>
			</div>
		</div>
	);
}
