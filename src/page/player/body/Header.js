import React from 'react';
import './Header.css';
import { useDataLayerValue } from '../../../DataLayer';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    const [dataLayer, dispatch] = useDataLayerValue();
    const { user } = dataLayer;
    return (
        <div className='header'>
            <div className='header_left'>
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs, or..."
                    type="text"
                />
            </div>
            <div className='header_right'>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
};

export default Header;