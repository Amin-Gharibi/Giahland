import React from "react";
import PropTypes from "prop-types";
import EnToFaNum from "../utils/EnToFaNum";
import CustomButton from "./CustomButton";

BlogItemBox.propTypes = {
	identifier: PropTypes.string,
	banner: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	author: PropTypes.shape({ firstName: PropTypes.string.isRequired, lastName: PropTypes.string.isRequired }),
	createdAt: PropTypes.string.isRequired,
};

function BlogItemBox({ identifier, banner, title, description, createdAt, author }) {
	const date = new Date(createdAt);
	return (
		<div>
			<div className={"h-full flex flex-col border border-neutral5 rounded-xl p-4"}>
				<img className={"w-full max-h-40 h-full self-center object-contain max-sm:mt-1"} src={banner} alt={title} />
				<span className={"text-base sm:text-lg leading-8 text-start text-black cursor-default block mt-4"}>{title}</span>
				<p className={"w-full text-start leading-5 text-sm text-neutral10 flex-grow mt-2 text-ellipsis line-clamp-3"}>{description}</p>
				<div className={"flex justify-between items-center w-full mt-3 mb-2.5 px-2"}>
					<div className={"flex items-center gap-x-1"}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#717171" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
						</svg>
						<span className={"text-sm leading-7 text-neutral9"}>{author.firstName + " " + author.lastName}</span>
					</div>
					<div className={"flex items-center gap-x-1"}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#717171" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
						</svg>
						<span className={"text-sm leading-7 text-neutral9"}>{EnToFaNum(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`)}</span>
					</div>
				</div>
				<CustomButton title={"ادامه مطلب"} onClick={() => identifier} size={40} isFilled isSquared />
			</div>
		</div>
	);
}

export default BlogItemBox;
