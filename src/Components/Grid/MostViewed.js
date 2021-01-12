import React from "react";

const MostViewed = (props) => {
  const { newsData, loading } = props;
  return (
    <>
      {!loading && (
        <div className="most-viewed">
          <ul className="grid__item--span1 most-viewed__list--left">
            {newsData.map((entry, index) => {
              if (index >= 0 && index < 5) {
                return (
                  <li className="most-viewed__list-item">
                    <p className="most-viewed__index-heading">{index + 1} </p>
                    <h4 className="most-viewed__heading">
                      {entry.fields.headline}
                    </h4>
                  </li>
                );
              }
            })}
          </ul>
          <ul className="grid__item--span1  most-viewed__list--right">
            {newsData.map((entry, index) => {
              if (index >= 5 && index < 11) {
                return (
                  <li className="most-viewed__list-item">
                    <p className="most-viewed__index-heading">{index + 1} </p>
                    <h4 className="most-viewed__heading">
                      {entry.fields.headline}
                    </h4>
                  </li>
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
