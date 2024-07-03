import React from "react";

import "./style/Home.css";

export const Home = () => {
  return (
    <div className="container">
      <img src="./assets/Home/home.png" alt="" className="banner" />
      <img className="pinner" src="./assets/Home/side/blue.jpg" alt="" />
      <div className="demands">
        <h1>
          Collections <br /> in demand
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
      </div>
      <div className="gallery">
        <span>
          <h1>virtual Gallery</h1>
          <br />
          <h3>SHOP BY CATEGORY</h3>
        </span>
        <div className="virtual-gallery">
          <img
            className="virtual"
            src="./assets/Home/virtual/virtual1.png"
            alt=""
          />
          <img
            className="virtual"
            src="./assets/Home/virtual/virtual2.png"
            alt=""
          />
          <img
            className="virtual"
            src="./assets/Home/virtual/virtual3.png"
            alt=""
          />
        </div>
      </div>
      <img className="pinner1" src="./assets/Home/side/orange.jpg" alt="" />
      <div className="gallery">
        <span className="global">
          <h1>Global collections</h1>
          <br />
          <h3>SHOP BY CATEGORY</h3>
        </span>
        <div className="global-img">
          <div>
            <img src="./assets/Home/global/global1.png" alt="" />
            <span>
              <h2>Featured Artist Collections</h2>
              <p>FROM GLOBAL PANELISTS</p>
            </span>
          </div>
          <div>
            <img src="./assets/Home/global/global2.png" alt="" />
            <span>
              <h2>Panel picks</h2>
              <p>FROM GLOBAL PANELISTS</p>
            </span>
          </div>
          <div>
            <img src="./assets/Home/global/global3.png" alt="" />
            <span>
              <h2>Folk Art</h2>
              <p>FROM GLOBAL PANELISTS</p>
            </span>
          </div>
          <div>
            <img src="./assets/Home/global/global4.png" alt="" />
            <span>
              <h2>Digital Art</h2>
              <p>FROM GLOBAL PANELISTS</p>
            </span>
          </div>
        </div>
      </div>
      <img className="pinner1" src="./assets/Home/side/yellow.jpg" alt="" />
      <div className="gallery">
        <div className="help">
          <img src="./assets/Home/discover.png" alt="" />
          <span>
            <h6>Find your perfect art</h6>
            <h1>GET EXPERT HELP</h1>
            <p>DISCOVER ART</p>
          </span>
        </div>
      </div>
      <div className="gallery">
        <span className="curators">
          <h1>Curators picks</h1>
          <br />
          <h3>SHOP BY CATEGORY</h3>
        </span>
        <div className="curators-img">
          <div>
            <img src="./assets/Home/curators/curator1.png" alt="" />
            <span className="curators-details">
              <h5>Jesse Jinghan Liu</h5>
              <p>Yiwei Gallery</p>
              <p>INR 22300</p>
            </span>
          </div>
          <div>
            <img src="./assets/Home/curators/curator2.png" alt="" />
            <span className="curators-details">
              <h5>Manaca Gupta</h5>
              <p>Sunwe Gallery</p>
              <p>INR 16200</p>
            </span>
          </div>
          <div>
            <img src="./assets/Home/curators/curator3.png" alt="" />
            <span className="curators-details">
              <h5>Sagu metha</h5>
              <p>Art one</p>
              <p>INR 9000</p>
            </span>
          </div>
          <div>
            <img src="./assets/Home/curators/curator4.png" alt="" />
            <span className="curators-details">
              <h5>Tesjaswani</h5>
              <p>laith Kala</p>
              <p>INR 36200</p>
            </span>
          </div>
        </div>
      </div>
      <img className="pinner1" src="./assets/Home/side/bluelength.jpg" alt="" />
      <div className="gallery">
        <img className="offer" src="./assets/Home/offer.png" alt="" />
      </div>
      <div className="gallery">
        <h1 className="art">Featured Artists</h1>
        <div className="artist">
          <div className="artist-details">
            <img src="./assets/Home/FeaturedArtists/artist1.png" alt="" />
            <p>Mowriya Charan</p>
          </div>
          <div className="artist-details">
            <img src="./assets/Home/FeaturedArtists/artist2.png" alt="" />
            <p>Mowriya Charan</p>
          </div>
          <div className="artist-details">
            <img src="./assets/Home/FeaturedArtists/artist3.png" alt="" />
            <p>Mowriya Charan</p>
          </div>
          <div className="artist-details">
            <img src="./assets/Home/FeaturedArtists/artist4.png" alt="" />
            <p>Mowriya Charan</p>
          </div>
          <div className="artist-details">
            <img src="./assets/Home/FeaturedArtists/artist5.png" alt="" />
            <p>Mowriya Charan</p>
          </div>
          <div className="artist-details">
            <img src="./assets/Home/FeaturedArtists/artist6.png" alt="" />
            <p>Mowriya Charan</p>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="subscribe">
          <img src="./assets/Home/elephant.png" className="elephant" alt="" />
          <span>
            <p>SUBSCRIBE TO</p>
            <h2>ART UPDATES MONTHLY</h2>
          </span>
          <p className="sign-up">SIGNUP</p>
        </div>
      </div>
    </div>
  );
};
