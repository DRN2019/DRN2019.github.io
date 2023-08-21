import Navbar from "./Navbar.jsx";
import "./Contact.css";

const Contact = () => {
    return ( 
    <>
    <div className="contact-container">
    <Navbar />
    <div className="contact-box">
        <h1 className="contact-heading">Contact Me</h1>
        <p className="contact-description">
            Have any questions or inquiries? Feel free to reach!
        </p>
        <form className="contact-form">
                <label className="contact-label" htmlFor="name">Name</label>
                <input className="contact-input" type="text" id="name" name="name" required />
                <label className="contact-label" htmlFor="email">Email</label>
                <input className="contact-input" type="email" id="email" name="email" required />
                <label className="contact-label" htmlFor="message">Message</label>
                <textarea className="contact-textarea" id="message" name="message" rows="5" required></textarea>
                <button className="contact-button" type="submit">Send</button>
            </form>
        </div>
    </div>
    </>

    );
}
 
export default Contact;