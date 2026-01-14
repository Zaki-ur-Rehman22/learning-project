import React from 'react';
import image1 from '../img/bundle_4.png';
import { About, Description, Image, Hide } from '../style';


const AboutSection = () => {
    return(
        <div>
            <About>
                <Description>
                    <div className="title">
                        <Hide>
                            <h2>We are here to make</h2>
                        </Hide>
                        <Hide>
                            <h2>your <span>dreams</span> come</h2>
                        </Hide>
                        <Hide>
                            <h2>true</h2>
                        </Hide>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button>Contact us</button>
                </Description>
                <Image>
                    <img src={image1} alt="about image" />
                </Image>
                
            </About>
        </div>
    )
}


export default AboutSection; 