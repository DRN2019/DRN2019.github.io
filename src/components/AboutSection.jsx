import React from "react";

class AboutSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgLeft: props.imgLeft,
            img: props.img,
            title: props.title,
            desc: props.desc
        };
    }

    render() {
        const imgLeft = this.state.imgLeft; 
        const img = this.state.img;
        const title = this.state.title;
        const desc = this.state.desc;

        if (imgLeft) {
        return (
            <>
            <div className="about-section-container">
                <div className="about-section-img">
                    <img src={img} alt="about-img" />
                </div>
                <div className="about-section-text">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
            </>
        )
        } else {
        return (
            <>
            <div className="about-section-container">
                <div className="about-section-text">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                </div>
                <div className="about-section-img">
                    <img src={img} alt="about-img" />
                </div>
            </div>
            </>
        )
        }
    }
}

export default AboutSection; 