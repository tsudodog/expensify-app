let count = 0;
const someId = 'myIdHere';

const addOne = () => {
    count++;
    console.log('addOne', count);
    renderCounterApp();
}
const minusOne = () => {
    count--;
    console.log('minusOne');
    renderCounterApp();
}
const resetCount = () => {
    count = 0;
    console.log('reset');
    renderCounterApp();
}






const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1> Count: {count}</h1>
            <button id={someId} className="button" onClick={addOne}>+1</button>
            <button onClick={minusOne} >-1</button>
            <button onClick={resetCount} >Reset </button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();