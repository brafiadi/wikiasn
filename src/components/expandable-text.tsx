"use client";

import { useState, useEffect, ReactNode, ReactElement } from "react";
import { Button } from "@/components/ui/button";

interface ExpandableTextProps {
	children: ReactNode;
	maxLength?: number;
}

interface ReactNodeWithProps {
	props?: {
		children?: ReactNode;
	};
}

export function ExpandableText({
	children,
	maxLength = 300,
}: ExpandableTextProps) {
	const [isExpanded, setIsExpanded] = useState(true);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		setIsExpanded(false);
	}, []);

	const getTextContent = (node: ReactNode): string => {
		if (typeof node === "string") return node;
		if (Array.isArray(node)) return node.map(getTextContent).join("");
		if (node && typeof node === "object") {
			const nodeWithProps = node as ReactNodeWithProps;
			if (nodeWithProps.props && nodeWithProps.props.children) {
				return getTextContent(nodeWithProps.props.children);
			}
		}
		return "";
	};

	const text = getTextContent(children);
	const shouldTruncate = text.length > maxLength;

	const renderContent = () => {
		if (!isMounted || isExpanded || !shouldTruncate) {
			return children;
		}
		const truncatedText = text.slice(0, maxLength);
		return (
			<>
				{truncatedText}
				<span className="text-gray-500">...</span>
			</>
		);
	};

	return (
		<div className="space-y-2">
			{renderContent()}
			{isMounted && shouldTruncate && (
				<Button
					variant="link"
					onClick={() => setIsExpanded(!isExpanded)}
					className="p-0 h-auto  text-red-600 hover:text-red-800"
				>
					{isExpanded ? "Baca lebih sedikit" : "Baca selengkapnya"}
				</Button>
			)}
		</div>
	);
}
