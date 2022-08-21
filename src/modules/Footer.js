import GithubIcon from "../images/GitHub.png";
import FacebookIcon from "../images/Facebook.png";
import TwitterIcon from "../images/Twitter.png";
import InstagramIcon from "../images/Instagram.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={TwitterIcon} />
      <img src={FacebookIcon} />
      <img src={GithubIcon} />
      <img src={InstagramIcon} />
    </footer>
  );
}

export default Footer;
