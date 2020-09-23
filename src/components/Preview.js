import React, { useEffect, useState } from "react";
import Actions from "../Actions";
import "../components/Preview.css";
import { useStateValue } from "../DataContext/DataContext";
const Preview = () => {
  const [{ preview, inbox }, dispatch] = useStateValue();
  const [selectedEmail, setSelectedEmail] = useState([]);

  useEffect(() => {
    if (selectedEmail.length === 0)
      setSelectedEmail(inbox.filter((item) => item.id === preview));
  }, [selectedEmail]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1 1 100%",
      }}
    >
      <Actions actionsVisible={true} />
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        className="body"
        style={{
          borderCollapse: "separate",
          msoTableLspace: "0pt",
          msoTableRspace: "0pt",
          width: "100%",
          backgroundColor: "#f6f6f6",
          height: "100vh",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                fontSize: 14,
                verticalAlign: "top",
              }}
            >
              &nbsp;
            </td>
            <td
              className="container"
              style={{
                fontSize: 14,
                verticalAlign: "top",
                display: "block",
                margin: 0,
                // padding: 10,
                width: "100%",
              }}
            >
              <div
                className="content"
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  margin: "0 auto",
                  // maxWidth: 580,
                  // padding: 10,
                }}
              >
                {/* START CENTERED WHITE CONTAINER */}
                <table
                  className="main"
                  style={{
                    borderCollapse: "separate",
                    msoTableLspace: "0pt",
                    msoTableRspace: "0pt",
                    width: "100%",
                    background: "#ffffff",
                    borderRadius: 3,
                  }}
                >
                  {/* START MAIN CONTENT AREA */}
                  <tbody>
                    <tr>
                      <td
                        className="wrapper"
                        style={{
                          fontSize: 14,
                          verticalAlign: "top",
                          boxSizing: "border-box",
                          padding: 20,
                          height: "100vh",
                        }}
                      >
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          style={{
                            borderCollapse: "separate",
                            msoTableLspace: "0pt",
                            msoTableRspace: "0pt",
                            width: "100%",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  fontSize: 14,
                                  verticalAlign: "top",
                                }}
                              >
                                {selectedEmail.map((item) => (
                                  <div className="preview__item">
                                    <div className="preview__preview">
                                      <p
                                        style={{
                                          fontSize: "26px!important",
                                          fontWeight: "normal",
                                          margin: 0,
                                          marginBottom: 15,
                                        }}
                                      >
                                        Subject: {item.text},
                                      </p>
                                    </div>
                                    <div className="preview__sender">
                                      <img
                                        src={item.owner.picture}
                                        width="30"
                                        height="30"
                                      />
                                      <br></br>
                                      Sender: {item.owner.email}
                                      <br></br>
                                      {item.owner.title} {item.owner.firstName}{" "}
                                      {item.owner.lastName}
                                    </div>
                                    <div className="preview__date">
                                      {" "}
                                      Date:{item.publishDate}
                                    </div>
                                    <br></br>
                                    <div className="preview__img">
                                      <p>
                                        {" "}
                                        Hey, what do you think about this
                                        picture i took in California :)
                                      </p>
                                      <br></br>
                                      <img
                                        src={item.image}
                                        width="auto"
                                        height="400"
                                      />
                                    </div>
                                  </div>
                                ))}

                                <p
                                  style={{
                                    fontSize: 14,
                                    fontWeight: "normal",
                                    margin: 0,
                                    marginBottom: 15,
                                  }}
                                >
                                  Sometimes you just want to send a simple HTML
                                  email with a simple design and clear call to
                                  action. This is it.
                                </p>
                                <table
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  className="btn btn-primary"
                                  style={{
                                    borderCollapse: "separate",
                                    msoTableLspace: "0pt",
                                    msoTableRspace: "0pt",
                                    width: "100%",
                                    boxSizing: "border-box",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        align="left"
                                        style={{
                                          fontSize: 14,
                                          verticalAlign: "top",
                                          paddingBottom: 15,
                                        }}
                                      >
                                        <table
                                          border={0}
                                          cellPadding={0}
                                          cellSpacing={0}
                                          style={{
                                            borderCollapse: "separate",
                                            msoTableLspace: "0pt",
                                            msoTableRspace: "0pt",
                                            width: "auto",
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style={{
                                                  fontSize: 14,
                                                  verticalAlign: "top",
                                                  backgroundColor: "#3498db",
                                                  borderRadius: 5,
                                                  textAlign: "center",
                                                }}
                                              >
                                                {" "}
                                                <a
                                                  href="http://htmlemail.io"
                                                  target="_blank"
                                                  style={{
                                                    display: "inline-block",
                                                    color: "#ffffff",
                                                    backgroundColor: "#3498db",
                                                    border: "solid 1px #3498db",
                                                    borderRadius: 5,
                                                    boxSizing: "border-box",
                                                    cursor: "pointer",
                                                    textDecoration: "none",
                                                    fontSize: 14,
                                                    fontWeight: "bold",
                                                    margin: 0,
                                                    padding: "12px 25px",
                                                    textTransform: "capitalize",
                                                    borderColor: "#3498db",
                                                  }}
                                                >
                                                  Call To Action
                                                </a>{" "}
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p
                                  style={{
                                    fontSize: 14,
                                    fontWeight: "normal",
                                    margin: 0,
                                    marginBottom: 15,
                                  }}
                                >
                                  This is a really simple email template. Its
                                  sole purpose is to get the recipient to click
                                  the button with no distractions.
                                </p>
                                <p
                                  style={{
                                    fontSize: 14,
                                    fontWeight: "normal",
                                    margin: 0,
                                    marginBottom: 15,
                                  }}
                                >
                                  Good luck! Hope it works.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    {/* END MAIN CONTENT AREA */}
                  </tbody>
                </table>
                {/* START FOOTER */}
                <div
                  className="footer"
                  style={{
                    clear: "both",
                    marginTop: 10,
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    style={{
                      borderCollapse: "separate",
                      msoTableLspace: "0pt",
                      msoTableRspace: "0pt",
                      width: "100%",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          className="content-block"
                          style={{
                            verticalAlign: "top",
                            paddingBottom: 10,
                            paddingTop: 10,
                            fontSize: 12,
                            color: "#999999",
                            textAlign: "center",
                          }}
                        >
                          <span
                            className="apple-link"
                            style={{
                              color: "#999999",
                              fontSize: 12,
                              textAlign: "center",
                            }}
                          >
                            Company Inc, 3 Abbey Road, San Francisco CA 94102
                          </span>
                          <br /> Don't like these emails?{" "}
                          <a
                            href="http://i.imgur.com/CScmqnj.gif"
                            style={{
                              textDecoration: "underline",
                              color: "#999999",
                              fontSize: 12,
                              textAlign: "center",
                            }}
                          >
                            Unsubscribe
                          </a>
                          .
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="content-block powered-by"
                          style={{
                            verticalAlign: "top",
                            paddingBottom: 10,
                            paddingTop: 10,
                            fontSize: 12,
                            color: "#999999",
                            textAlign: "center",
                          }}
                        >
                          Powered by{" "}
                          <a
                            href="http://htmlemail.io"
                            style={{
                              color: "#999999",
                              fontSize: 12,
                              textAlign: "center",
                              textDecoration: "none",
                            }}
                          >
                            HTMLemail
                          </a>
                          .
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* END FOOTER */}
                {/* END CENTERED WHITE CONTAINER */}
              </div>
            </td>
            <td
              style={{
                fontSize: 14,
                verticalAlign: "top",
              }}
            >
              &nbsp;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Preview;
