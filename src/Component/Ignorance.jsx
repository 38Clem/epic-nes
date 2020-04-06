import React from 'react'


const Igorance = ({methods}) => 

<div>
<div>What do you mean "what demon" ??? The world is about to disappear and you're not 
    aware of that ? ... Ok, fine, let me explain. Years ago, a terrible evil threaten 
    to destroy our beloved Earth and all the living creatures. A mighty hero then
    faced him, fighting for days against the demon. At the end of a terrible battle, none of them
    were defeated but the hero managed to capture the demon and locked him away in a deep dark dungeon.
    Some monks volunteered to keep an eye on the so called dungeon but one of them made a mistake.
    And now, the demon is back again. So .... will you help us defeat him ?
</div>
<button value="help" onClick={methods.changeComponent}>
    Absolutely !
</button>
<button value="coward">
    Sounds dangerous ....
</button>
</div>
;

export default Igorance;