import type React from "react";

const Loader: React.FC = () => {
	return (
		<div className="flex justify-center items-center min-h-[60vh]">
			<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray" />
		</div>
	);
};

export const MiniLoader: React.FC = () => {
	return (
		<div className="flex justify-center items-center min-h-[20px]">
			<div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-gray" />
		</div>
	);
};

export default Loader;
