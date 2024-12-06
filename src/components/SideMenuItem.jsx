import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

SideMenuItem.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

function SideMenuItem({Icon, title, href}) {
    return (
        <NavLink to={href} className={({isActive}) => isActive ? 'flex items-center gap-3 group active py-3 px-4 bg-[#F3FDFA] rounded-lg' : 'flex items-center gap-3 group py-3 px-4 bg-transparent hover:bg-neutral2 rounded-lg transition-colors'}>
            <Icon className={'w-6 h-6 fill-neutral10 group-[.active]:fill-primary'}/>
            <span className={'lg:text-lg leading-8 text-neutral10 group-[.active]:text-primary'}>{title}</span>
        </NavLink>
    );
}

export default SideMenuItem;