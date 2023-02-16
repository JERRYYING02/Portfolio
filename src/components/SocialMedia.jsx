import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsYoutube />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;