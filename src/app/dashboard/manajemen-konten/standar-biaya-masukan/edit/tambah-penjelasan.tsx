import { Button } from "@/components/ui/button";

export default function TambahPenjelasan() {
	const handleClick = () => {
		console.log("tambah");
	};
	return (
		<Button variant={"outline"} size={"sm"} onClick={handleClick}>
			+
		</Button>
	);
}
