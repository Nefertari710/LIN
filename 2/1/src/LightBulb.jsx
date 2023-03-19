import {useState} from 'react';

function LightBulb(){
    const [light, isOn] = useState(false);

    return(
        <button onClick={() => isOn(!light)}>
            {light ? <img src = ".\public\light-off.png" alt = "light-of"/> : <img src = ".\public\light-on.png" alt = "light-on"/> }
        </button>
    )
}

export default LightBulb;