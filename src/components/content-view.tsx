// import { ScrollArea } from "@/components/ui/scroll-area";
import parse from "html-react-parser";

interface ContentViewProps {
	content: string;
}

export function ContentView({ content }: ContentViewProps) {
	return (
		//<ScrollArea className="max-h-[600px]">
		<div className="prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl text-justify custom-content-view">
			{parse(content)}
		</div>
		// </ScrollArea>
	);
}
