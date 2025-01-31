"use client";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, List, ListOrdered, Heading2 } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface TipTapEditorProps {
	onSave?: (content: string) => Promise<void>;
	initialContent: string;
	isLoading?: boolean;
	editable?: boolean;
}

interface MenuBarProps {
	editor: Editor | null;
}

const MenuBar = ({ editor }: MenuBarProps) => {
	if (!editor) {
		return null;
	}

	return (
		<div className="control-group">
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
		</div>
	);
};

const TipTapEditor = ({
	onSave,
	initialContent,
	isLoading = false,
	editable = true,
}: TipTapEditorProps) => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: initialContent,
		editable,
		editorProps: {
			attributes: {
				class:
					"prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl mt-4 focus:outline-none",
			},
		},
	});

	if (!editor) {
		return null;
	}

	return (
		<div className="flex flex-col h-full">
			{editable && <MenuBar editor={editor} />}
			{/* Scrollable editor content */}
			<div className="flex-1 min-h-0">
				{" "}
				{/* This wrapper is crucial */}
				<ScrollArea className="h-full">
					<div className={editable ? "px-4 py-4" : ""}>
						<EditorContent editor={editor} />
					</div>
				</ScrollArea>
			</div>

			{/* Fixed footer */}
			{onSave && (
				<div className="shrink-0 border-t border-input bg-background px-4 py-2 flex justify-end">
					<Button onClick={() => onSave(editor.getHTML())}>Simpan</Button>
				</div>
			)}
		</div>
	);
};

export default TipTapEditor;
