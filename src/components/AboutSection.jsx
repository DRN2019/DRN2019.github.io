const AboutSection = (props) => {
    const imgLeft = props.imgLeft;
    let imgPlace = 1;
    let textPlace = 2;

    if (!imgLeft) {
        imgPlace = 2;
        textPlace = 1;
    }

    const img = props.img;
    const title = props.title;
    const desc = props.desc;


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
    );
}
 
export default AboutSection;