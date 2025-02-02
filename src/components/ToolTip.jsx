import React from "react";
import PropTypes from "prop-types";

function ToolTip({ children, title }) {
	return (
		<div className="relative inline-block">
			<div className="peer">{children}</div>
			<div className="absolute left-1/2 top-full w-max mt-2 -translate-x-1/2 z-10 px-3 py-2 text-sm text-white bg-gray-400 rounded-lg shadow-xs invisible opacity-0 peer-hover:visible peer-hover:opacity-100 transition-all duration-300">
				{title}
				<div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-gray-400 rotate-45" />
			</div>
		</div>
	);
}

ToolTip.propTypes = {
	title: PropTypes.string.isRequired,
};

export default ToolTip;
