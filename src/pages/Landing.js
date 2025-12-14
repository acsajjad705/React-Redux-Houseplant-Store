import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="landing">
      <div className="landing-bg" />
      <div className="landing-content">
        <h2 className="company-name">GreenHouse Plants</h2>
        <p className="company-paragraph">
          GreenHouse Plants brings nature into your home with carefully selected houseplants for every space and skill level.
          We source healthy plants and provide simple care tips so your indoor garden thrives.
        </p>
        <Link to="/products" className="btn primary">
          Get Started
        </Link>
      </div>
    </section>
  );
}
