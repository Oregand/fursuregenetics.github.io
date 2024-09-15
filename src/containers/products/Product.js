import React, {useContext} from "react";
import "./Product.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {products} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Product() {
  const {isDark} = useContext(StyleContext);
  if (products.display) {
    return (
      <div id="product">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="product">
            <div>
              <h1 className="experience-heading">Shop</h1>
              <div className="experience-cards-div">
                {products.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
