import React from 'react'

const IncomeItem = ({ income, index, removeIncome }) => {

    let date = new Date(income.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandler = (i) => {
        removeIncome(i);
    }



    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-md-1">
                    <button className="btn btn-danger btn-block" onClick={() => removeHandler(index)}>X</button>
                </div>
                <div className="col-md-5">
                    {income.desc}
                </div>
                <div className="col-md-3">
                    £ {income.price}
                </div>
                <div className="col-md-3">
                    {`${day}/${month}/${year}`}
                </div>
            </div>
        </li>
    )
}

export default IncomeItem
