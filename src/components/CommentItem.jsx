import PropTypes from "prop-types";
import EnToFaNum from "../utils/EnToFaNum.js";
import API_CONFIG from "../config/api.config.js";
CommentItem.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	profile: PropTypes.string.isRequired,
	rate: PropTypes.number.isRequired,
	comment: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
};

function CommentItem({ firstName, lastName, profile, rate, comment, date }) {
	const localDate = new Date(date);

	const profileUrl = new URL(API_CONFIG.BASE_URL).origin + profile;
	return (
		<div className={"max-sm:px-0 p-5 grid grid-cols-[auto_1fr_auto] gap-6"}>
			<img src={profileUrl} alt={firstName + " " + lastName} className={"w-14 h-14 rounded-full object-cover self-center"} />
			<h6 className={"text-sm sm:text-base font-medium text-black self-center"}>{firstName + " " + lastName}</h6>
			<div className={"flex max-sm:flex-col items-stretch gap-x-4 gap-y-2 self-center"}>
				<div className={"max-sm:order-2 flex items-center justify-center py-1 px-2 bg-neutral2 border border-neutral6 rounded"}>
					<span className={"text-xs sm:text-sm md:text-base"}>{EnToFaNum(`${localDate.getDate().toLocaleString().padStart(2, "۰")}-${(localDate.getMonth() + 1).toLocaleString().padStart(2, "۰")}-${localDate.getFullYear()}`)}</span>
				</div>
			</div>
			<div className={"col-start-2 col-end-4 xl:col-end-3 border-t border-t-neutral5 pt-4 flex flex-col items-start gap-y-4"}>
				<div className={"h-7 bg-neutral2 rounded-lg flex items-center gap-x-1 px-2 py-1"}>
					<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={"w-4 h-4"}>
						<path d="M7.00033 10.8658L10.6053 13.0416L9.64866 8.94081L12.8337 6.18165L8.63949 5.82581L7.00033 1.95831L5.36116 5.82581L1.16699 6.18165L4.35199 8.94081L3.39533 13.0416L7.00033 10.8658Z" fill="#FFC51A" />
					</svg>
					<span className={"text-sm md:text-base leading-7 text-neutral8"}>{EnToFaNum(rate)}</span>
				</div>
				<p className={"text-sm md:text-base xl:mt-4 text-neutral11 text-start leading-6"}>{comment}</p>
			</div>
		</div>
	);
}

export default CommentItem;
