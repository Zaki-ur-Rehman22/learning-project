import React from 'react';
import servicesimage from '../img/services-image.png';


const FaqSection = () => {
    return(
        <div>
            <div className="faqs-content">
                <h2>Any Questions? <span>FAQ</span></h2>
                <div className="question">
                    <h4>How do i start ?</h4>
                    <div className="answer">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="question">
                    <h4>Daily schedule</h4>
                    <div className="answer">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="question">
                    <h4>Different payment methods</h4>
                    <div className="answer">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="question">
                    <h4>What product do u offer</h4>
                    <div className="answer">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqSection; 