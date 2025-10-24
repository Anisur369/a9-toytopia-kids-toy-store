import { AuthContext } from "../context/AuthContext";
import { Suspense, use } from "react";
import Card from "./Card";

const Cards = () => {
  const { cards } = use(AuthContext);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="text-center mt-20 mb-10">
        <h2 className="text-4xl font-bold mb-4">Most Popular All Toys</h2>
        <p className="text-gray-600 mb-4 w-full sm:w-1/2 mx-auto">
          ToyTopia is designed to spark curiosity and ignite imaginations with
          high-quality, open-ended toys, and play experts' available guidance.
          We strive to offer a true utopia for building and playing.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 mb-4">
        {cards.map((card) => (
          <Card key={card.toyId} {...card} />
        ))}
      </div>
    </Suspense>
  );
};

export default Cards;
