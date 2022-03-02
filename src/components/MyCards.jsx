import { useEffect } from "react";
import "./MyCards.css";

const Card = () => {
  useEffect(() => {
    const card = document.querySelector(".card");
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  }, []);
  return (
    
      <div className="scene">
        {/* Card */}
        <div className="card">
          {/* card front */}
          <div className="card__front">
            <img
              src="data:image/png;base64,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"
              alt=""
              className="card__logo"
            />
            <div className="card__number number">
              <div className="number-group number-group--0">4011</div>
              <div className="number-group number-group--1">2016</div>
              <div className="number-group number-group--2">7239</div>
              <div className="number-group number-group--3">1586</div>
            </div>
            <div className="card__details">
              <div className="card__holder">
                <span className="card__holder__title">Card Holder</span>
                <span className="card__holder__name">
                  Michiel van der Gragt
                </span>
              </div>

              <div className="card__expiration">
                <span className="card__expiration__title">Expires</span>
                <span className="card__expiration__date">11/28</span>
              </div>
            </div>
          </div>

          {/* Card Back */}
          <div className="card__back">
            <div className="card__stripe"></div>
            <div className="card__signature">
              <span className="card_cvv">CVV</span>
              <span className="card__cvv-number">239</span>
            </div>
            <p className="card__info">
              Using this card to purchase goods and services whenever you see
              the VISA symbol. Your use of this card is acceptance to your
              issuer's arrangement including ammendments.
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default Card;
