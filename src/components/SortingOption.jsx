import React from 'react'
import PropTypes from 'prop-types'

function SortingOption({title, onClick, isActive}) {
  return (
		<button type="button" onClick={onClick} className={`h-full flex items-center justify-center ${isActive ? "max-sm:border-x sm:border-y" : ""} border-primary px-1 mx-2 lg:mx-3 transition-colors`}>
			<span className={`${isActive ? "text-primary" : "text-neutral10"} text-sm lg:text-base`}>{title}</span>
		</button>
  );
}

SortingOption.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
}

export default SortingOption