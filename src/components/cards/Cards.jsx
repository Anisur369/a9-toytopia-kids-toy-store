import { AuthContext } from "../context/AuthContext";
import { Suspense, use } from "react";
import Card from "./Card";

const Cards = () => {
  const { cards } = use(AuthContext);
  console.log(cards);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 mb-4">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </Suspense>
  );
};

export default Cards;
