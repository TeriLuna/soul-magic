import React from "react";
import Particles from "react-tsparticles";

const HomeList = [
  {
    textPosition: "text-center",
    category: "",
    title: "Soul Magic",
    description: "Connecting the soul to everything",
    buttonText: "Conect with the magic",
    buttonLink: "/allProducts",
  },
];

export default function HomeHero() {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <div className="active-dark bg_color--10">
        <div className="slider-wrapper">
          {HomeList.map((value, index) => (
            <div
              className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--24"
              key={index}
              data-black-overlay="1"
            >
              <div className="frame-layout__particles">
                <Particles
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={{
                    fpsLimit: 120,
                    interactivity: {
                      events: {
                        onClick: {
                          enable: true,
                          mode: "push",
                        },
                        onHover: {
                          enable: true,
                          mode: "repulse",
                        },
                        resize: true,
                      },
                      modes: {
                        bubble: {
                          distance: 100,
                          duration: 1,
                          opacity: 0.8,
                          size: 10,
                        },
                        push: {
                          quantity: 4,
                        },
                        repulse: {
                          distance: 100,
                          duration: 0.8,
                        },
                      },
                    },
                    particles: {
                      color: {
                        value: "#ffffff",
                      },
                      links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                      },
                      collisions: {
                        enable: true,
                      },
                      move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 6,
                        straight: false,
                      },
                      number: {
                        density: {
                          enable: true,
                          area: 800,
                        },
                        value: 80,
                      },
                      opacity: {
                        value: 0.5,
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        random: true,
                        value: 2,
                      },
                    },
                    detectRetina: true,
                  }}
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      {value.title ? (
                        <h1 className="title theme-gradient">{value.title}</h1>
                      ) : (
                        ""
                      )}
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="btn-default btn-border btn-opacity"
                            href={`${value.buttonLink}`}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};