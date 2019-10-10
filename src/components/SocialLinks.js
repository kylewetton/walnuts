import React from 'react';
import {IconsContainer} from './styles';

const SocialLinks = () => {
    return (
        <div>
            <h4>Follow us</h4>
            <IconsContainer>
                <img src={window.location.origin + '/assets/i-facebook.svg'} alt="Facebook"/>
                <img src={window.location.origin + '/assets/i-instagram.svg'} alt="Instagram"/>
                <img src={window.location.origin + '/assets/i-twitter.svg'} alt="Twitter"/>
            </IconsContainer>
        </div>
    );
};



export default SocialLinks;