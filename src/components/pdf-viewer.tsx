"use client";

import { pdfjs, Document, Page } from "react-pdf";
import { useState, useEffect } from "react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { ScrollArea } from "./ui/scroll-area";
import Loader from "./loader";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

interface PdfViewerProps {
	pdfUrl: string; // URL file PDF
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.mjs",
	import.meta.url,
).toString();

export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const [numPages, setNumPages] = useState(0);
	const [scale, setScale] = useState(1.0); // Untuk zoom level
	const [pageWidth, setPageWidth] = useState(800); // Default width untuk desktop

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setPageWidth(300); // Mobile
			} else if (window.innerWidth < 1024) {
				setPageWidth(600); // Tablet
			} else {
				setPageWidth(800); // Desktop
			}
		};

		handleResize(); // Set ukuran saat pertama kali
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
	};

	const goToNextPage = () => {
		if (currentPage < numPages) setCurrentPage(currentPage + 1);
	};

	const goToPrevPage = () => {
		if (currentPage > 1) setCurrentPage(currentPage - 1);
	};

	const zoomIn = () => {
		setScale(scale + 0.2);
	};

	const zoomOut = () => {
		if (scale > 0.5) setScale(scale - 0.2);
	};

	const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const page = Number.parseInt(e.target.value, 10);
		if (page >= 1 && page <= numPages) {
			setCurrentPage(page);
		}
	};

	return (
		<ScrollArea className="h-[88vh] relative flex flex-col items-center justify-center ">
			<Document
				file={pdfUrl}
				onLoadSuccess={onDocumentLoadSuccess}
				className="flex justify-center"
				loading={<Loader />}
			>
				<Page
					pageNumber={currentPage}
					scale={scale}
					width={pageWidth} // Dynamic width
					className="border shadow-lg"
					loading={<Loader />}
				/>
			</Document>

			{/* Floating Buttons */}
			<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center space-x-4 p-2 bg-white/50">
				<Button
					onClick={goToPrevPage}
					disabled={currentPage === 1}
					className="px-3 py-2 bg-gray-500/50 text-white rounded-full shadow-lg disabled:bg-gray-300"
				>
					<ChevronLeft />
				</Button>
				{/* Page Indicator */}
				<div className="flex items-center space-x-2 text-sm">
					<input
						type="number"
						value={currentPage}
						onChange={handlePageChange}
						className="w-12 px-2 py-1 text-center border rounded"
						min={1}
						max={numPages}
					/>
					<span className="text-gray-700">/ </span>
					<span className="text-gray-700">{numPages}</span>
				</div>
				<Button
					onClick={goToNextPage}
					disabled={currentPage === numPages}
					className="px-3 py-2 bg-gray-500/50 text-white rounded-full shadow-lg disabled:bg-gray-300"
				>
					<ChevronRight />
				</Button>
				<Button
					onClick={zoomOut}
					className="px-3 py-2 bg-gray-500/50 text-white rounded-full shadow-lg"
				>
					<ZoomOut />
				</Button>
				<Button
					onClick={zoomIn}
					className="px-3 py-2 bg-gray-500/50 text-white rounded-full shadow-lg"
				>
					<ZoomIn />
				</Button>
			</div>
		</ScrollArea>
	);
}
