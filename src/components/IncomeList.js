import React from 'react'
import IncomeItem from './IncomeItem'

const IncomeList = ({ income, setIncome }) => {

    const removeIncome = (i) => {

        let temp = income.filter((value, index) => index !== i);
        setIncome(temp);
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    return (
        <div className="row">
            <div className="col">
                <ul className="list-group">
                    {income.sort(sortByDate).map((value, index) => (
                        <IncomeItem
                            key={index}
                            income={value}
                            index={index}
                            removeIncome={removeIncome}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default IncomeList
