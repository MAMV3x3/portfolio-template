import React from "react";

const SocialsHeader = (props) => {
  return (
    <div className="home__socials">
      <a href={props.socialMedia.instagram} className="home__socials-link" target="_blank">
        <i class="fa-brands fa-instagram"></i>
      </a>

      <a href={`${props.socialMedia.linkedIn}`} className="home__socials-link" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a href={props.socialMedia.gitHub} className="home__socials-link" target="_blank">
        <i class="fa-brands fa-github"></i>
      </a>

      <a href={props.socialMedia.facebook} className="home__socials-link" target="_blank">
        <i class="fa-brands fa-facebook"></i>
      </a>

      <a href={props.socialMedia.discord} className="home__socials-link" target="_blank">
        <i class="fa-brands fa-discord"></i>
      </a>
    </div>
  );
};

export default SocialsHeader;
