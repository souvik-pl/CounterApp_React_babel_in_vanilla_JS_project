function Counter () {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+ (Increase counter)</button>
            <button onClick={() => setCount(count - 1)}>- (Decrease counter)</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <h2>{count}</h2>
        </div>
    );
}

const domRoot = document.querySelector("#root");
ReactDOM.createRoot(domRoot).render(React.createElement(Counter));