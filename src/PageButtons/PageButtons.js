import './PageButtons.css'

const PageButtons = ({pages, onPageClick}) => {
    return (
        <div className={"ReducerCenter"}>
            <div>
                {Array.from({length: pages}).map((page, i) =>
                    <button onClick={() => onPageClick(i + 1)}> {i + 1} </button>
                )}
            </div>
        </div>
    );
};

export {PageButtons};