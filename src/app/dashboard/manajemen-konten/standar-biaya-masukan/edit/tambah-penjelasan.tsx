import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function TambahPenjelasan() {
	const handleClick = () => {
		console.log("tambah");
	};
	return (
		<>
			<Button variant={"outline"} size={"sm"} onClick={handleClick}>
				<Plus />
			</Button>
		</>
	);
}
