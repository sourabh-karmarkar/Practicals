import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About=()=>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, doloribus quibusdam. Impedit ipsam provident, ut doloremque quasi fugit saepe, quod neque tempore perspiciatis harum corporis aspernatur vitae sed. Reprehenderit, repellat?</p>
        </div>
    );
}

export default Rainbow(About);