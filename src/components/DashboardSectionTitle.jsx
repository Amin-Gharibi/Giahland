import PropTypes from 'prop-types';

DashboardSectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

function DashboardSectionTitle({title}) {
    return (
        <h2 className={'dashboard__section-title'}>{title}</h2>
    );
}

export default DashboardSectionTitle;