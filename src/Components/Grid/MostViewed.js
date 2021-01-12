import React from "react";

const MostViewed = (props) => {
  const { newsData, loading } = props;
  return (
    <div className="grid grid--2fr-2fr most-viewed">
      <ul className="grid__item--span1 most-viewed__list--left">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <ul className="grid__item--span1  most-viewed__list--right">
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </ul>
    </div>
  );
};

export default MostViewed;
