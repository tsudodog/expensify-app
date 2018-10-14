console.log('App.js is running!');

//JSX Java Script XML, it is a javascript extension
const appObject = {
    title: "This is the title field",
    subTitle: "World",
    options : []
}

const onFormSubmit = (e) => {
    // stop full page refresh
    e.preventDefault();
    console.log('Form Submitted');
    const option = e.target.elements.option.value;
    if(option){
        appObject.options.push(option);
        e.target.elements.option.value = '';
    }
    rerenderApp();
};

const removeAll = () => {

    appObject.options = [];
    rerenderApp();
};

const onMakeDescision = () => {
    const randomNum = Math.floor(Math.random() * appObject.options.length);
    const option = appObject.options[randomNum];
    alert(option);
}

const numbers = [55, 101, 1000];

const appRoot = document.getElementById('app');



const rerenderApp = () =>{
    const template = (
        <div>
            {appObject && <h1>{appObject.title}</h1> }
            {appObject.subTitle && <p>{appObject.subTitle}</p>}
            <p> {appObject.options.length > 0? 'Here are your options.': 'No options'}</p>
            <button onClick={removeAll}>Remove All</button>
            <button disabled={appObject.options.length === 0} onClick={onMakeDescision}>Make Decision</button>
            <p>{appObject.options.length}</p>
            {
               numbers.map((number) => {
                   return <p key={number}>Number: {number}</p>;
               })
            }

            <ol>

                { appObject.options.map( (option) => {
                    return <li key={option}>{option}</li>
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button  >Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

rerenderApp();

