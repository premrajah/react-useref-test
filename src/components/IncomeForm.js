import React, { useRef } from 'react'

const IncomeForm = ({ income, setIncome }) => {

    const desc = useRef(null);
    const price = useRef(null);
    const date = useRef(null);


    const AddIncome = (e) => {
        e.preventDefault();

        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1], d[2]);

        setIncome([...income, {
            desc: desc.current.value,
            price: price.current.value,
            date: newD.getTime() // timestamp in miliseconds 
        }])

        desc.current.value = "";
        price.current.value = null;
        date.current.value = null;

    }

    return (
        <form className="form-group" onSubmit={AddIncome}>
            <div className="row">
                <div className="col-md-5">
                    <input ref={desc} type="text" name="desc" id="desc" className="form-control" placeholder="Income Description ..." />
                </div>
                <div className="col-md-3">
                    <input ref={price} type="number" name="price" id="price" className="form-control" placeholder="Amount" />
                </div>
                <div className="col-md-2">
                    <input ref={date} type="date" name="date" className="form-control" id="date" placeholder="Income date" />
                </div>
                <div className="col-md-2">
                    <button type="submit" className="btn btn-primary btn-block">Add Income</button>
                </div>
            </div>
        </form>
    )
};

export default IncomeForm
