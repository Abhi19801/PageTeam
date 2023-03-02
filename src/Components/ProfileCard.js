import React from "react";

import "./ProfileCard.css";

const ProfileCard = (props) => {
  return (
    <div class={props.classSpecial}>
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src={props.imgSrc} alt="image2" />
        </div>
        <div class="team-content">
          <h3 class="name">{props.name}</h3>
          <h4 class="title">{props.position}</h4>
        </div>
        <ul class="social">
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-facebook"
              aria-hidden="true"
            ></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-twitter"
              aria-hidden="true"
            ></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-google-plus"
              aria-hidden="true"
            ></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-linkedin"
              aria-hidden="true"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
