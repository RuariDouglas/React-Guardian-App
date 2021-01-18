import React from "react";
import { useHistory, useLocation } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";

// MATERIALUI
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import styled from "styled-components";
const Article = (props) => {
  const history = useHistory();
  const { loading } = useSelector((state) => state.guardian);
  const { rootPath, sectionData } = props;
  const location = useLocation();
  const closeArticle = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      if (rootPath === "/") {
        history.push(rootPath);
      } else {
        history.push(`/${rootPath}`);
      }
    }
  };

  const pathUnmodified = location.pathname;
  const regex = /^\/[a-z]+(\/(article)\/)/g;
  const pathId = pathUnmodified.match(regex)
    ? pathUnmodified.replace(regex, "")
    : pathUnmodified.replace("/article/", "");

  // location.pathname.replace("/article/", "");

  return (
    <>
      {!loading && (
        <Detail onClick={closeArticle} className="shadow">
          <div className="detail__container">
            <IconButton className="close">
              <CloseIcon onClick={closeArticle} className="shadow" />
            </IconButton>
            {sectionData
              .filter((entry) => entry.id === pathId)
              .map((article) => (
                <div className="detail__inner-wrapper">
                  <h3 className="detail__section-title">
                    {article.sectionName}
                  </h3>
                  <img src={article.fields.thumbnail} alt="" />
                  <h1 className="detail__heading--primary">
                    {article.fields.headline}
                  </h1>
                  <h3>
                    <a
                      target="_blank"
                      href="https://www.theguardian.com/profile/scottmurray"
                    >
                      {article.tags[0].webTitle}
                    </a>
                  </h3>
                  <p>{article.fields.lastModified}</p>
                  {/* dividing line */}
                  {/* socials */}
                  <div
                    className="detail__response"
                    dangerouslySetInnerHTML={{ __html: article.fields.body }}
                  ></div>
                </div>
              ))}
          </div>
        </Detail>
      )}
    </>
  );
};

const Detail = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  button.close {
    position: absolute;
    right: 1rem;
    svg.shadow {
      width: 75%;
      height: 75%;
    }
  }
  .detail__container {
    width: 100%;
    min-height: 100vh;
    padding: 1rem;
    background: white;
    position: absolute;
    color: black;
    z-index: 10;
    .detail__response {
      p {
        line-height: 1.2;
        margin-bottom: 1rem;
      }
      div {
        display: none;
      }
      .is-key-event {
        display: block;
        p {
          margin-bottom: 0;
        }
      }
      figure {
        background-color: red;
      }
    }
  }

  @media (min-width: 755px) {
    .detail__container {
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      border-radius: 1rem;
    }
  }
`;

export default Article;
