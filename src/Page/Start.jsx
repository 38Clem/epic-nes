import React from 'react';
import Title from '../Component/Title';
import Summary from '../Component/Summary';
import AudioPlayer from '../Component/AudioPlayer';



const Start = () => {
    return (
        <div className="start">
            <Title />
            <Summary />
            <AudioPlayer/>
        </div>

    );

};

export default Start;