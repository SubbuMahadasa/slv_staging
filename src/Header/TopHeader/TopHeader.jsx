import React from "react";
import * as Styles from "./styles";
import "./style.css";

const TopHeader = () => {
  return (
    <>
      <Styles.TopHeadContainer>
        <Styles.TopHeadRow>
          <Styles.TopHeadCol>
            <Styles.TopHeadCol1></Styles.TopHeadCol1>
            <Styles.TopHeadCol2>
              <Styles.Col2ul>
                <Styles.Nav1>
                  <Styles.IconSpan>
                    <i class="fa fa-envelope"></i>
                  </Styles.IconSpan>
                  krishna@magistersign.com
                </Styles.Nav1>
                <Styles.Nav1>
                  <Styles.IconSpan>
                    <i class="fa fa-phone"></i>
                  </Styles.IconSpan>
                  +91-733722 8283
                </Styles.Nav1>
                <Styles.Nav1>
                  <Styles.IconSpan>
                    <i class="fa fa-phone"></i>
                  </Styles.IconSpan>
                  +1 (732) 984 7078
                </Styles.Nav1>
                <Styles.NavStudent data-toggle="modal" data-target="#myModal">
                  <Styles.IconSpan>
                    {" "}
                    <i class="fa fa-pencil"></i>
                  </Styles.IconSpan>
                  STUDENT REG
                </Styles.NavStudent>
                <Styles.NavTutor>
                  <Styles.IconSpan>
                    {" "}
                    <i class="fa fa-pencil"></i>
                  </Styles.IconSpan>
                  TRAINER REG
                </Styles.NavTutor>
              </Styles.Col2ul>
            </Styles.TopHeadCol2>
          </Styles.TopHeadCol>
        </Styles.TopHeadRow>
        <Styles.StudentRow>
          <div class="container">
            <div class="modal fade" id="myModal" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                    <h4 class="modal-title">STUDENT REGISTRATION</h4>
                  </div>
                  <div class="modal-body">
                    <form
                      name="contact v1"
                      method="post"
                      data-netlify="true"
                      onSubmit="submit"
                    >
                      <input
                        type="hidden"
                        name="form-name"
                        value="contact v1"
                      />
                      <div className="modalgrid">
                        <div className="modalgrid1">
                          <div class="form-group">
                            <label>
                              First Name :
                              <input
                                required
                                class="form-control"
                                type="text"
                                name="firstname"
                              />
                            </label>
                          </div>
                          <div class="form-group">
                            <label>
                              Last Name :
                              <input
                                required
                                class="form-control"
                                type="text"
                                name="lastname"
                              />
                            </label>
                          </div>
                          <div class="form-group">
                            <label>
                              Email :
                              <input
                                required
                                class="form-control"
                                type="text"
                                name="email"
                              />
                            </label>
                          </div>
                          <div class="form-group">
                            <label>
                              Mobile Number :
                              <input
                                required
                                class="form-control"
                                type="text"
                                name="mobile"
                              />
                            </label>
                          </div>
                          <div class="form-group">
                            <label for="sel1">Requirement :</label>
                            <select
                              required
                              class="form-control"
                              id="sel1"
                              name="requirement"
                            >
                              <option>Training</option>
                              <option>Support</option>
                            </select>
                          </div>
                        </div>
                        <div className="modalgrid1">
                          <div class="form-group">
                            <label>
                              Technology :
                              <input
                                required
                                class="form-control"
                                type="text"
                                name="technology"
                              />
                            </label>
                          </div>
                          <div class="form-group">
                            <label>
                              City :
                              <input
                                required
                                class="form-control"
                                type="text"
                                name="city"
                              />
                            </label>
                          </div>
                          <div class="form-group">
                            <label for="comment">Message :</label>
                            <textarea
                              name="message"
                              class="form-control"
                              rows="5"
                              id="comment"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Styles.StudentRow>
      </Styles.TopHeadContainer>
    </>
  );
};

export default TopHeader;
