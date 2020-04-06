import React from 'react'
import { Link } from 'react-router-dom';


const Summary = () =>
    <div>

        <div>Welcome on the most epic, awesome, unforgettable and amusing adventure you've ever had !
        You'll face monsters and demons all along your journey to vanquish the evil that threatens us all.
        Will you face your ennemies ? Or will you runaway from them ?
        The choice is yours ! Good luck, my friend. Our fate is now in your hands ... </div>

        <p>Disclaimer : Maybe we kinda over do it about this "epic" adventure but,
        come on, we know you're gonna die anyway.
        Better feel good before you go, right ? </p>

    <Link to="/story">
        <button >
            Start
        </button>
    </Link>

    </div>
    ;

export default Summary;