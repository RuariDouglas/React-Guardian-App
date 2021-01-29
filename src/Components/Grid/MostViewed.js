import React from "react";

import { Link, useLocation } from "react-router-dom";

const MostViewed = (props) => {
  const { newsData, loading } = props;
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      {!loading && (
        <div className="most-viewed">
          <ul className="grid__item--span1 most-viewed__list--left">
            {newsData.map((entry, index) => {
              if (index >= 0 && index < 5) {
                return (
                  <Link
                    to={
                      path === "/"
                        ? `article/${entry.id}`
                        : `${path}/article/${entry.id}`
                    }
                    id={entry.id}
                    key={entry.id}
                  >
                    <li className="most-viewed__list-item">
                      <p className="most-viewed__index-heading">{index + 1} </p>
                      <h4 className="most-viewed__heading">
                        {entry.fields.headline}
                      </h4>
                    </li>
                  </Link>
                );
              }
            })}
          </ul>
          <ul className="grid__item--span1  most-viewed__list--right">
            {newsData.map((entry, index) => {
              if (index >= 5 && index < 10) {
                return (
                  <Link
                    to={
                      path === "/"
                        ? `article/${entry.id}`
                        : `${path}/article/${entry.id}`
                    }
                    id={entry.id}
                    key={entry.id}
                  >
                    <li
                      id={entry.id}
                      key={entry.id}
                      className="most-viewed__list-item"
                    >
                      <p className="most-viewed__index-heading">{index + 1} </p>
                      <h4 className="most-viewed__heading">
                        {entry.fields.headline}
                      </h4>
                    </li>
                  </Link>
                );
              }
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default MostViewed;
