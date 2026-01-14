import React from 'react';
import servicesimage from '../img/services-image.png';
import { About, Description, Image, Hide } from '../style';
import styled from 'styled-components';


const ServicesSection = () => {
    return(
        <div>
            <Services>
                <Description>
                    <div className="title">
                        <Hide>
                            <h2>High <span>quality</span> services</h2>
                        </Hide>
                    </div>
                    <Cards>
                        <Card>
                            <div className="icon">
                                <h3>Efficient</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Card>
                        <Card>
                            <div className="icon">
                                <h3>Team work</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Card>
                        <Card>
                            <div className="icon">
                                <h3>Daiphragm</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Card>
                        <Card>
                            <div className="icon">
                                <h3>Affordable</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Card>
                    </Cards>
                </Description>
                <Image>
                    <img src={servicesimage} alt="Services image" />
                </Image>
            </Services>
        </div>
    )
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        h3  {
            margin-right: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;


export default ServicesSection; 