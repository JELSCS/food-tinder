import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import './TinderCards.css';

function TinderCards() {
    const [restaurant, setRestaurant] = useState([
        {
            name: "Little Caesars",
            url: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2021-01/littlecaesarsRF2021.jpg?itok=M_pNAOaE",
        },
        {
            name: "Olive Garden",
            url: "https://media.olivegarden.com/en_us/images/marketing/italian-restaurant-olive-garden-location-g4-rdv.jpg",
        },
        {
            name: "Chili's",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/12/aa/d6/37/entrance.jpg",
        },
    ]);
    
    return (
        <div>
            <h1>Tinder cards</h1>
            <div className="tinderCards_cardContainer">
            {restaurant.map((place) => (
                <TinderCard
                    className="swipe"
                    key={place.name}
                    preventSwipe={["up", "down"]}
                >
                    <div
                        style={{ backgroundImage: `url(${place.url})` }}
                        className="card"
                    >
                        <h3>{place.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards;