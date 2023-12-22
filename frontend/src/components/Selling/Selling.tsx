import "../../styles/selling.less"

export const Selling = () => {
    return (
        <div className="selling">
            <h1>
                Selling
            </h1>
            <div className="selling__inputs">
                <input className="selling__input" placeholder="Enter attribute"></input>
                <input className="selling__input" placeholder="Enter contact address"></input>
                <button className="selling__button">Open</button>
            </div>
        </div>
    )
}