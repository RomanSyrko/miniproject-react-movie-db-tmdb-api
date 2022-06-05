import './PageButtons.css'

const PageButtons = ({pages, onPageClick}) => {
    return (
        <div className={"ButtonCenter"}>
            {Array.from({length: pages}).map((page, i) =>
                <button key={i} onClick={() => onPageClick(i + 1)}>{i + 1}</button>
            )}
        </div>
    );
};

export {PageButtons};