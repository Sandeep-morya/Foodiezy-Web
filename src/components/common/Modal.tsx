// import React from "react";

interface Props {
	toggleModal: () => void;
	content: JSX.Element;
	label?: React.ReactNode;
}

const Modal = (props: Props) => {
	return (
		<div
			onClick={props.toggleModal}
			className="fixed top-0 left-0 w-screen h-screen overflow-y-scroll z-[500] bg-black/50 backdrop-blur-sm flex justify-center">
			{props.content}
		</div>
	);
};

export default Modal;
