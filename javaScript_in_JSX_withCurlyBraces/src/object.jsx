// JavaScript objects and curly braces

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function Object() {
    return (
        <div style = {person.theme}>
            <h1 style = {{color:'pink'}}>{person.name}'s Todos</h1>
            <img
             src="https://i.imgur.com/7vQD0fPs.jpg"
             alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}