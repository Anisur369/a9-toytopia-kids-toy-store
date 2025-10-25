import React from "react";

const About = () => {
  return (
    <div className="bg-base-100 text-base-content px-4 py-10 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
          About us
        </h1>

        <div className="text-lg leading-relaxed space-y-4">
          <p>
            <span className="font-semibold text-secondary">Toytopia: </span> A
            world of children's toys, where imagination and the joy of learning
            come together. We believe that every toy is the beginning of a new
            story — a child's journey of curiosity, creativity and discovery.
          </p>

          <p>
            Our collection includes safe, educational, and fun toys for children
            of all ages. We carefully select each toy so that it supports the
            child's mental development and provides peace of mind for parents.
          </p>

          <p>
            Toytopia is not just a store — it's a community, where children
            learn, laugh, and grow through toys. We want every family to create
            beautiful memories through our toys.
          </p>

          <p>
            Our goal is to provide quality toys to every child in Bangladesh, so
            they can play safely and grow happily.
          </p>
        </div>

        <div className="mt-10 text-center">
          <button className="btn btn-primary btn-wide">
            View our collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
