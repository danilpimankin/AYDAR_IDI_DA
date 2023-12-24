import "../../styles/selling.less"

export const Selling = () => {
    return (
        <div className="base-wrapper selling">
            <h1>
                Selling
            </h1>
            <div className="selling__inputs">
                <input className="base-input selling__input" placeholder="Enter attribute"></input>
                <input className="base-input selling__input" placeholder="Enter contact address"></input>
                <button className="selling__button">Open</button>
            </div>
        </div>
    )
}