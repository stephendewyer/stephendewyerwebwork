import { useState } from 'react';
import Image from 'next/image';
import MyLink from '../../../../public/util/myLink';
import aboutLink from '../../../../public/images/links/blind_link_about_01.png';
import aboutLink_hover from '../../../../public/images/links/blind_link_about_02.png';

const AboutTab = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div 
            
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <MyLink href="/about" passHref aria-label="link to about page">
                {isHovering ? (
                    <Image src={aboutLink_hover} layout="responsive" alt="about link"/> 
                    ) : (
                    <Image src={aboutLink} layout="responsive" alt="about link"/>
                )}
            </MyLink>    
        </div>
    );
};

export default AboutTab;