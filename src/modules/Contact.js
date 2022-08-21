import Mail from "../images/Mail.png";
import Linkedin from "../images/Linkedin.png";

function Contact() {
  return (
    <div className="contact">
      <div className="email-btn">
        <img src={Mail} />
        <h2>Email</h2>
      </div>
      <div className="linkedin-btn">
        <img src={Linkedin} />
        <h2>LinkedIn</h2>
      </div>
    </div>
  );
}

export default Contact;
