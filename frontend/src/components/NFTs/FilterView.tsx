export const FilterView = () => {
    return (
        <div className="base-wrapper filter">
            <h3 className="filter__title">Price</h3>
            <div className="filter__wrapper">
                <div className="filter__inputs">
                    <input className="base-input filter__input" placeholder="Min" defaultValue={""}></input>
                    <label className="filter__label">to</label>
                    <input className="base-input filter__input" placeholder="Max" defaultValue={""}></input>
                </div>
                <button className="filter__apply">Apply</button>
            </div>
        </div>
    )
}