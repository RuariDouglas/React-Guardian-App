import React from "react";
import { useHistory, useLocation } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";

import styled from "styled-components";

const Article = () => {
  const history = useHistory();
  const closeArticle = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  const { sectionData, loading } = useSelector((state) => state.guardian);
  const location = useLocation();
  return (
    <>
      {!loading && (
        <ArticleWrap onClick={closeArticle} className="shadow">
          <div className="detail">
            I'm the article
            {sectionData.map((entry) => {
              return location.pathname === `/article/${entry.id}` ? (
                <div>
                  <h1>{entry.id}</h1>
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </ArticleWrap>
      )}
    </>
  );
};

const ArticleWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  .detail {
    width: 80%;
    height: 100%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    z-index: 10;
    img {
      width: 100%;
    }
  }
`;

export default Article;
