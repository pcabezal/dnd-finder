import React, { useState } from 'react';
import './Cards.css';
import TinderCard from 'react-tinder-card';


function Cards() {

    const [people, setPeople] = useState([
        {
            name: 'Fetor Jones',
            url: 'https://cdn-icons-png.flaticon.com/512/5169/5169269.png'
        },
        {
            name: 'Pris Mo',
            url: 'https://static.tvmaze.com/uploads/images/medium_portrait/357/894279.jpg'
        }

    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing' + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = name => {
        console.log(name + ' left the screen!');
    }

    return (
        <div className='cards'>
            <div className='cards__cardsContainer'>
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.url})`}} className='card'>
                            <h3>{person.name}</h3>
                        </div>           
                    </TinderCard>
                ))}
            </div>
        </div>
    )

}

export default Cards