"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, List, ListOrdered, Heading2 } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface TipTapEditorProps {
	onSave: (content: string) => void;
	initialContent: string;
}

const TipTapEditor = ({ onSave, initialContent }: TipTapEditorProps) => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: initialContent,
		editorProps: {
			attributes: {
				class:
					"prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
			},
		},
	});

	if (!editor) {
		return null;
	}

	return (
		<div className="flex flex-col h-full">
			{/* Fixed toolbar */}
			<div className="shrink-0 border-y border-input bg-background px-4 py-2 flex flex-wrap gap-2">
				<Toggle
					size="sm"
					pressed={editor.isActive("bold")}
					onPressedChange={() => editor.chain().focus().toggleBold().run()}
				>
					<Bold className="h-4 w-4" />
				</Toggle>
				<Toggle
					size="sm"
					pressed={editor.isActive("italic")}
					onPressedChange={() => editor.chain().focus().toggleItalic().run()}
				>
					<Italic className="h-4 w-4" />
				</Toggle>
				<Toggle
					size="sm"
					pressed={editor.isActive("bulletList")}
					onPressedChange={() =>
						editor.chain().focus().toggleBulletList().run()
					}
				>
					<List className="h-4 w-4" />
				</Toggle>
				<Toggle
					size="sm"
					pressed={editor.isActive("orderedList")}
					onPressedChange={() =>
						editor.chain().focus().toggleOrderedList().run()
					}
				>
					<ListOrdered className="h-4 w-4" />
				</Toggle>
				<Toggle
					size="sm"
					pressed={editor.isActive("heading", { level: 2 })}
					onPressedChange={() =>
						editor.chain().focus().toggleHeading({ level: 2 }).run()
					}
				>
					<Heading2 className="h-4 w-4" />
				</Toggle>
			</div>

			{/* Scrollable editor content */}
			<div className="flex-1 min-h-0">
				{" "}
				{/* This wrapper is crucial */}
				<ScrollArea className="h-full">
					<div className="px-4 py-4">
						<EditorContent editor={editor} />
					</div>
				</ScrollArea>
			</div>

			{/* Fixed footer */}
			<div className="shrink-0 border-t border-input bg-background px-4 py-2 flex justify-end">
				<Button onClick={() => onSave(editor.getHTML())}>Simpan</Button>
			</div>
		</div>
	);
};

export default TipTapEditor;
