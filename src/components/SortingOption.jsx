import React from 'react'
import PropTypes from 'prop-types'

function SortingOption({title, onClick, isActive}) {
  return (
		<button type="button" onClick={onClick} className={`h-full flex items-center justify-center ${isActive ? "border-y" : ""} border-primary px-1 mx-3 transition-colors`}>
			<span className={isActive ? "text-primary" : "text-neutral10"}>{title}</span>
		</button>
  );
}

SortingOption.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
}

export default SortingOption