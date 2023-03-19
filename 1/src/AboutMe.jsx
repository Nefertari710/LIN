

function AboutMe({name, age, favorite_food}){
    return(
        <div>
            <p>Hello world, My name is {name}! I'm {age} years old, and I like {favorite_food}.</p>
        </div>
    )
}


/*
const AboutMe = ({name, age, favorite_food}) =>
    <div>
        <p>Hello world, My name is {name}! I'm {age} years old, and I like {favorite_food}.</p>
    </div>
*/
export default AboutMe; //export 'AboutMe' function so that it can be used ouside this field.