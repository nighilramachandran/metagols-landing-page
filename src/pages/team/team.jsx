import React from "react"
import { useRef } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./index.scss"
import { Col, Row } from "react-bootstrap"
import { Contactus } from "src/components/contactus"
import { useNavigate } from "react-router-dom"

export const Team = () => {
  let navigate = useNavigate()
  const teamData = [
    { name: "Eng. Tarek Taki", post: "CTO", image: "tarik", ext: "png", cls: "team-head" },
    { name: "Moad Achernan", post: "Administrative Management", image: "Moad_Achernan", ext: "JPG", cls: "team-head" },
    { name: "Amer Mbirek", post: "Strategy Director", image: "Amer_Mbirek", ext: "JPG", cls: "team-head" },
    { name: "Nada Al-Mass", post: "Public Relationship Manager", image: "nada", ext: "png", cls: "team-head" },

    { name: "Moustafa Allahham", post: "Chief Full Stack Engineer", image: "Moustafa", ext: "png", cls: "team-small" },
    { name: "Abd Al-Rahman Helani", post: "Senior Mobile Developer", image: "Abood", ext: "png", cls: "team-small" },
    { name: "Mohammad Jokhadar", post: "Back-End Developer", image: "Jokhadar", ext: "png", cls: "team-small" },

    { name: "Ragheed Shnnar", post: "Senior Front-End Developer", image: "Ragheed", ext: "png", cls: "team-small" },
    { name: "Mohamd Al-Mhde", post: "Front-End Developer", image: "Mahdi", ext: "png", cls: "team-small" },
    { name: "Nighil R", post: "Front-End Developer", image: "Nighil", ext: "png", cls: "team-small" },
    { name: "Yamam Suliman", post: "3D Designer / Motion Graphic", image: "Yamam", ext: "png", cls: "team-small" },

    { name: "Abdelrahman Alhorani", post: "Back-End Developer", image: "Abd_Al_Rahman", ext: "JPG", cls: "team-small" },

    { name: "Deaa Lek", post: "Mobile Developer", image: "Deaa", ext: "png", cls: "team-small" },
    { name: "Yamen Abdulrahman", post: "Mobile Developer", image: "Yamen_Abdulrahman", ext: "jpg", cls: "team-small" },
    { name: "Mohammad Ali", post: "Mobile Developer", image: "Mohammad_Ali", ext: "JPG", cls: "team-small" },

    { name: "Vikash Tiwari", post: "3D Designer / Motion Graphic", image: "vikash", ext: "png", cls: "team-small" },
    { name: "Lujain Azzam", post: "3D Designer", image: "Lujain", ext: "png", cls: "team-small" },
    { name: "Faris Mohammed", post: "3D Artist", image: "Faris", ext: "png", cls: "team-small" },

    { name: "Dina Bashaireh", post: "UI-UX Designer", image: "Dina", ext: "png", cls: "team-small" },
    { name: "Hamail Mughal", post: "UI-UX Designer", image: "Hamail", ext: "png", cls: "team-small" },

    { name: "Yassin Al-Safadi", post: "IT Administrator", image: "Yassin_Al_Safadi", ext: "png", cls: "team-small" },
    { name: "Dieaa Alashraf", post: "Server Moniter", image: "Diaa", ext: "png", cls: "team-small" },

    { name: "Rabee Abo Eid", post: "Senior Quality Assurance", image: "Rabee_Abo_Eid", ext: "JPG", cls: "team-small" },
    { name: "Raza Mehmood", post: "Cyber Security Specialist", image: "Raza_Mehmood", ext: "JPG", cls: "team-small" },
    { name: "Mohammad Youssef", post: "Cloud Engineer", image: "Mohammad_Youssef", ext: "JPG", cls: "team-small" },

    { name: "Ayman Nakhleh", post: "Social Media Specialist", image: "Ayman_Nakhleh", ext: "JPG", cls: "team-small" },
    { name: "Hamza Shaikh", post: "Smart Contract Developer", image: "Hamza_Shaikh", ext: "jpg", cls: "team-small" },
  ]

  return (
    <div id="team">
      <div>
        <img className="top_right" src="/assets/images/top_oval_right_general.png" alt="" />
        <h1>Our LeaderShip</h1>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          <p style={{ maxWidth: "1092px" }}>
            Our forward-looking leadership team is made up of dedicated, focused, and experienced executives. Working with each
            other and with our employees worldwide, their knowledge and experience come together to make a difference for all our
            <br />
            <br />
            stakeholders Our leadership is comprised of dedicated, honest, and inspiring individuals. Together, they are
            responsible for leading METAGOLS to new heights.
          </p>
        </div>
        <div>
          <div className="d-flex flex-row flex-wrap justify-content-around align-items-center mb-5">
            <div className="team-big mb-2">
              <img src="/assets/images/team/shk_feras.png" />
              <div className="team-name-bar-big">
                <div className="title-wrapper">
                  <h1>Shk. Feras Abu Hdaib</h1>
                  <div style={{ width: "200px" }}>
                    <p>CEO / FOUNDER</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <img style={{ maxWidth: "100%" }} src="/assets/images/SilwanaDiamond.svg" />
            </div>
            <div className="team-big mb-2">
              <img src="/assets/images/team/shk_naser.png" />
              <div className="team-name-bar-big">
                <div style={{ display: "flex", alignItems: "center", width: "100%", height: "100%" }}>
                  <div className="title-wrapper">
                    <h1>Shk. Naser Al-Qasimi</h1>
                    <div style={{ width: "200px" }}>
                      <p>Partner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex flex-row justify-content-center">
            <Row>
              <Col lg={6} xs={12} className="d-flex flex-row justify-content-center">
                <div className="team-small mb-2">
                  <img src="/assets/images/team/hani.png" />
                  <div className="team-name-bar-small">
                    <div style={{ display: "flex", alignItems: "center", width: "100%", height: "100%" }}>
                      <div className="title-wrapper">
                        <h1>Dr. Hani Chaaban</h1>
                        <div style={{ width: "200px" }}>
                          <p>Vice President</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} xs={12} className="d-flex flex-row justify-content-center">
                <div className="team-small mb-2">
                  <img src="/assets/images/team/masri.png" />

                  <div className="team-name-bar-small">
                    <div className="title-wrapper">
                      <h1>Mohanad Al-Masri</h1>
                      <div style={{ width: "200px" }}>
                        <p>HR Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div>
        <img className="first_left_" src="/assets/images/oval_first_left_general.png" alt="" />
        <div className="our-team">
          <h1 style={{ paddingBottom: "30px" }}>Our Team</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ maxWidth: "1092px" }}>
              <p style={{ paddingBottom: "30px" }}>
                Our employees are our most important asset. Today, our team consists of over 50 professionals representing close
                to 10 nationalities across 20 offices worldwide.
              </p>
            </div>
          </div>
          <div>
            <div className="team-wrapper mb-5">
              {teamData.map((el) => (
                <div className="card-wrapper">
                  <div className={`${el.cls} mb-5`}>
                    <img src={`/assets/images/team/${el.image}.${el.ext}`} />

                    <div className={el.cls === "team-head" ? "team-name-bar-big" : "team-name-bar-small"}>
                      <div style={{ display: "flex", alignItems: "center", width: "100%", height: "100%" }}>
                        <div className="title-wrapper">
                          <h1>{el.name}</h1>
                          <div style={{ width: "250px" }}>
                            <p>{el.post}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="join-our-team">
        <h1>Join Our Team</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ maxWidth: "729.3px", paddingBottom: "30px" }}>
            We Activly searching for the High-End talented people arround the world specially from the Arabs countries, Lets say
            welcome abourd for you !
          </p>
        </div>
        <button className="fill-up-form-btn" onClick={() => navigate("/join-our-team")}>
          Fill Up The Form
        </button>
      </div>
      {/* <div>
        <img className="team_bottom" src="/assets/images/oval_bottom_team.png" alt="" />
      </div> */}
      <Contactus />
    </div>
  )
}
