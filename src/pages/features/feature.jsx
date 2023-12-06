import React from "react"
import { useRef } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./index.scss"
import { Col, Row } from "react-bootstrap"
import { Contactus } from "src/components/contactus"

export const Features = () => {
  const ourFeauturesTwoData = [
    {
      image: "our_features_two_communication",
      title: "Insights and communication",
      message: "Communicate with a large number of professionals and international investment institutions.",
      background: "#6175CA",
      margin: "0",
      card: "1",
    },
    {
      image: "our_features_two_reports",
      title: "Information and reports",
      message: " information and reports on basic data for digital transactions and for the cryptocurrency markets",
      background: "#443796",
      margin: "80",
      card: "2",
    },
    {
      image: "our_features_two_charts",
      title: "Charts of the largest global trading platforms",
      message: "Inclusion of the digital wallet and transfer of charts to the largest global trading platforms",
      background: "#3F43A3",
      margin: "40",
      card: "3",
    },
  ]

  const colorDataRadio = [
    { value: "1", color: "#7E72CA", checked: true },
    { value: "2", color: "#AFD35F", checked: true },
    { value: "3", color: "#CA72B3", checked: true },
    { value: "4", color: "#72BECA", checked: true },
  ]
  const ratingData = [{ status: "rated" }, { status: "rated" }, { status: "rated" }, { status: "rated" }, { status: "" }]
  return (
    <div id="features">
      <img className="top_right" src="/assets/images/top_oval_right_general.png" alt="" />
      <div>
        <h1 className="features-head-title">
          Features and Services of the MetaGols <br /> Platform
        </h1>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr className="line-at-head"></hr>
        </div>
        <div id="our-features" className="our-features">
          <Row>
            <Col lg={5} xs={12}>
              <div className="mobile-align-center">
                <h1 className="title-red text-float-left">Our Features</h1>
                <h1 className="title text-float-left">Social networking</h1>
              </div>
              <div>
                <p style={{ maxWidth: "407px" }}>
                  for the general public which allows you all kinds of social networks, Make a profile, share your contents,
                  maintain relationships, as well as features that help you develop yourself in different fields .
                </p>
              </div>
            </Col>
            <Col lg={7} xs={12}>
              <div>
                <img src="/assets/images/our_feature.svg" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div id="cryptocurrency" className="cryptocurrency">
        <Row className="column_reverse">
          <Col lg={6} xs={12}>
            <div>
              <img
                style={{ float: "left", maxWidth: "570px", maxHeight: "672px", marginTop: "25px" }}
                src="/assets/images/cryptocurrency.svg"
              />
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <div style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center" }}>
              <div>
                <div className="mobile-align-center">
                  <h1 className="title-red text-float-left">cryptocurrency</h1>
                  <h1 style={{ maxWidth: "591px" }} className="title text-float-left">
                    Social network feature for cryptocurrency communities.
                  </h1>
                </div>
                <div>
                  <p style={{ maxWidth: "470px" }}>
                    Receiving and supporting new digital currencies in the digital wallet of the METAGOLS platform, where traders
                    are able to analyze and maintain the balance in the wallet in addition to tracking the movement of the
                    currency according to the platforms chart to make a decision to buy and sell and take advantage of all the
                    features of the METAGOLS platform.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <img className="first_left" src="/assets/images/oval_first_left_general.png" alt="" />
        <div id="trading-service" className="trading-service">
          <Row>
            <Col xs={12} lg={6}>
              <div className="mobile-align-center">
                <h1 className="title-red text-float-left">Trading Service</h1>
                <h1 className="title text-float-left">Trading platform</h1>
              </div>
              <p style={{ maxWidth: "570px" }}>
                Trading directly through our trading platform. Inclusion of the API link of the global trading platforms in the
                METAGOLS platform and displaying it on the platform for traders to monitor and inspect prices and carry out the
                ARPITRAGE process between the offered platforms.
              </p>
              <Row>
                <Col lg={6} xs={12}>
                  <div className="d-flex flex-row flex-wrap trading-service-contents-wrapper mb-3">
                    <img style={{ flex: "1" }} src="/assets/images/demo_trading.svg" />
                    <div
                      style={{ flex: "2" }}
                      className="d-flex flex-column justify-content-around flex-wrap trading-service-contents"
                    >
                      <h1>Demo Trading Platform</h1>
                      <p>Get into the trading world and learn.</p>
                    </div>
                  </div>
                </Col>
                <Col lg={6} xs={12}>
                  <div className="d-flex flex-row flex-wrap trading-service-contents-wrapper mb-3">
                    <img style={{ flex: "1" }} src="/assets/images/geniun_trading.svg" />
                    <div
                      style={{ flex: "2" }}
                      className="d-flex flex-column justify-content-around flex-wrap trading-service-contents"
                    >
                      <h1>Geniun Trading Platform</h1>
                      <p>Trade like a pro with the best trading technique.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={6}>
              <div style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center" }}>
                <img
                  style={{ maxWidth: "443px", maxHeight: "352.83px", marginTop: "25px" }}
                  src="/assets/images/trading_service.svg"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div id="our-features-two" className="our-features-two">
        <h1 className="title-red">Our Features</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ maxWidth: "464px", paddingBottom: "30px" }} className="title">
            Presentation of news and information
          </h1>
        </div>

        <div className="our-feature-two-card-wrapper">
          {ourFeauturesTwoData.map((el) => (
            <div
              style={{ background: `${el.background}` }}
              className={`presentation-card ${
                el.margin === "80" ? "margin-top-80" : `${el.card === "1" ? "" : "margin-top-40"}`
              } mb-3`}
            >
              <div className="top">
                <img src={`/assets/icons/${el.image}.svg`} />
              </div>
              <div className="card-bottom">
                <h4>{el.title}</h4>
                <p style={{ maxWidth: "313px" }}>{el.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="our-featues-three" className="our-featues-three">
        <h1 className="title-red">Our Features</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ maxWidth: "879px", paddingBottom: "30px" }} className="title">
            Features of displaying 3D models and 360-degree image vision features in
          </h1>
        </div>

        <div className="d-flex flex-row justify-content-around align-items-center flex-wrap">
          <div className="card-large mb-4">
            <Row style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
              <Col sm={12} xs={12} lg={5}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "30px", paddingBottom: "30px" }}>
                    <div className="price-card">
                      <p>$ 59.99</p>
                    </div>
                    <div style={{ display: "flex", gap: "5px", justifyContent: "center", alignItems: "center" }}>
                      <button className="icon-btn">
                        <img src="/assets/icons/heart.svg" />
                      </button>
                      <p>234</p>
                    </div>
                  </div>
                  <h4 className="text-float-left" style={{ width: "100%" }}>
                    Round Outdoor Ottoman with Blue Color Teal
                  </h4>
                  <p className="text-float-left" style={{ paddingBottom: "30px", width: "100%" }}>
                    Smart Watches
                  </p>
                  <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "30px" }}>
                    <button className="buy-btn">buy now</button>
                    <div style={{ display: "flex", gap: "5px", justifyContent: "center", alignItems: "center" }}>
                      <button className="icon-btn">
                        <img src="/assets/icons/cart_icon.svg" />
                      </button>
                      <p>Add to Cart</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} xs={12} lg={6}>
                <div>
                  {/* <img src="/assets/images/360_chair.svg" /> */}
                  <img src="/assets/images/360_chair.svg" />
                </div>
              </Col>
              <Col sm={12} xs={12} lg={1}>
                <div className="custom-radio-wrapper">
                  {colorDataRadio.map((el) => (
                    <div className="custome-radio-group">
                      <input checked={el.checked} type="radio" value={el.value} name="color" />
                      <div style={{ border: `1px solid ${el.color}` }} className="active"></div>
                      <label style={{ background: `${el.color}` }} className="bullet"></label>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
          <div className="card-small mb-4">
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button className="icon-btn">
                  <img src="/assets/icons/heart.svg" />
                </button>
                <p>234</p>
              </div>
              <button style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }} className="verify-btn">
                <img style={{ width: "16px", height: "20px" }} src="/assets/icons/verifed_icon.svg" />
                Verifed
              </button>
            </div>
            <div className="card-small-image-content">
              <img src="/assets/images/cap.svg" />
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              {ratingData.map((el) => (
                <button className="icon-btn ">
                  <img src={`/assets/icons/${el.status === "rated" ? "star_rated" : "star"}.svg`} />
                </button>
              ))}
            </div>
            <h4>Kaplan Cap HipHop</h4>
            <p>$24.95</p>
            <button className="purchase-btn">Purchase Now</button>
          </div>
        </div>
      </div>
      <div>
        <img style={{ height: "2624px" }} className="first_right" src="/assets/images/oval_first_right_general.png" alt="" />
        <div id="wallet-features" className="wallet-features">
          <Row>
            <Col lg={6} xs={12}>
              <div className="mobile-align-center">
                <h1 className="title-red text-float-left">Wallet Features</h1>
                <h1 style={{ maxWidth: "464px" }} className="title text-float-left">
                  Crypto Wallet NFT Feature
                </h1>
              </div>
              <div style={{ maxWidth: "464px" }}>
                <p>
                  WALLET TO WALLET, this feature allows anyone to display his digital wallet to anyone else from the list of his
                  groups on the METAGOLS platform to perform any of the transactions from within his own digital wallet, and these
                  transactions are such as checking and following the movement of the wallet, and performing digital transfers
                  (buying and selling) According to specific recommendations by the owner of the wallet, this feature is also of
                  great importance to companies as it allows companies to carry out their digital transactions in the shortest
                  possible period of time.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "start", alignItems: "center", maxWidth: "464px" }}>
                <img style={{ width: "100%", marginBottom: "20px" }} src="/assets/images/NFTWallet.svg" />
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <Row className="mb-1">
                <Col lg={6}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="wallet-card mb-4">
                      <div className="wallet-counter-align">
                        <div className="wallet-counter-1">
                          <p>01</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-float-left">METAMASK, WALLET CONNECT, LEADGER WALLET</h4>
                        <p>
                          Configuring the METAGOLS platform to match the characteristics of the Metamask, Wallet connect, Leadger
                          wallet platforms with the possibility of making digital transfers from the main platform of the personal
                          wallet and thepossibility of merging the two wallets.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {/* style={{ marginTop: "60px" }} */}
                    <div className="wallet-card counter-margin-top mb-4">
                      <div className="wallet-counter-align">
                        <div className="wallet-counter-2">
                          <p>02</p>
                        </div>
                      </div>
                      <div>
                        <h4>NFT P2P AND MARKETPLACE</h4>
                        <p>
                          opening the field of offering digital assets for sale and purchase in the global trading markets (the
                          buying and selling process takes place via digital currencies against cash and vice versa).
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col lg={6}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="wallet-card mb-4">
                      <div className="wallet-counter-align">
                        <div className="wallet-counter-2">
                          <p>03</p>
                        </div>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "70%" }}>
                        <h4>BLOCKFOLIO</h4>
                        <p>
                          Reading and tracking the movement of digital transactions (selling, buying, calculating the general
                          profit and loss ratio).
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {/* style={{ marginTop: "60px" }} */}
                    <div className="wallet-card counter-margin-top mb-4">
                      <div className="wallet-counter-align">
                        <div className="wallet-counter-3">
                          <p>04</p>
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "70%" }}>
                        <h4>Digital wallet</h4>
                        <p>
                          A digital wallet prepared to receive digital currencies created in the Blockchain and SOLANA ERC20 TRC20
                          BP20.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div id="unique-service" className="unique-service">
          <Row className="column_reverse">
            <Col lg={6} xs={12}>
              <img style={{ maxWidth: "529px", maxHeight: "422.25px", float: "left" }} src="/assets/images/unique_service.svg" />
            </Col>
            <Col lg={6} xs={12}>
              <div style={{ marginTop: "20px" }}>
                <div className="mobile-align-center">
                  <h1 style={{ marginBottom: "20px" }} className="title-red text-float-left">
                    unique service
                  </h1>
                  <h1 style={{ maxWidth: "403px", paddingBottom: "20px" }} className="title text-float-left">
                    Holomessenger Technology
                  </h1>
                  <p style={{ maxWidth: "570px" }}>
                    Holomessenger support, Technology VR,AR , XAR and Holoportacion and Holomeeting.
                    <br />
                    Live communication and direct transmission via hologram technology.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div id="solutions" className="solutions">
          <div className="mobile-align-center">
            <h1 className="title-red text-float-left">solutions</h1>
            <h1 style={{ paddingBottom: "30px" }} className="title text-float-left">
              Deposit guarantee
            </h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="card-solutions">
              <Row>
                <Col xs={12} lg={6}>
                  <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", height: "100%" }}>
                    <div className="mobile-align-center">
                      <div className="mobile-card-small-center">
                        <div style={{ marginBottom: "30px" }} className="card-small-solutions">
                          <img src="/assets/icons/lock.svg" />
                        </div>
                      </div>
                      <h1 style={{ paddingBottom: "30px" }}>
                        Safe <br />
                        Storage
                      </h1>
                    </div>

                    <p style={{ maxWidth: "470px" }}>
                      P2P WITH ESCROW, or what is known as a deposit guarantee, where the digital balance in the seller's wallet
                      is automatically transferred to the ESCROW fund of METAGOLS temporarily, and the balance is kept in a
                      deposit guarantee until the two parties complete the transaction successfully.
                    </p>
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <div>
                    <img src="/assets/images/solutions_deposit.svg" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div id="learning-system" className="learning-system">
        <Row>
          <Col xs={12} lg={6}>
            <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
              <div className="mobile-align-center">
                <h1 style={{ paddingBottom: "20px" }} className="title-red text-float-left">
                  Learning system
                </h1>
                <h1 style={{ paddingBottom: "20px" }} className="title text-float-left">
                  Training courses
                </h1>
                <p style={{ maxWidth: "470px" }}>
                  Theoretical and applied training courses for research and development I+D in all fields.Many options are
                  available and easy to learn anything at any time, any place and any time
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <img style={{ maxWidth: "540px", maxHeight: "355px", marginTop: "10px" }} src="/assets/images/learning_system.svg" />
          </Col>
        </Row>
      </div>
      <Contactus />
      <div>
        <img className="bottom" src="/assets/images/oval_bottom_general.png" alt="" />
      </div>
    </div>
  )
}
