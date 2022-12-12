import Card from '../UI/Card'
import './ExpenseAnalysis.css'

function ExpenseAnalysis(props) {

    return <Card className='chart'>
        <div className='chart__actions'>
            <label>Filter by year</label>
            <select onChange={props.onFilterSelected}>
                <option value="All">All</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
        <div className='bars'>
            <div className='bar bar__jan'>
                <div className='fill'></div>
            </div>
            <div className='bar bar__feb'>
                <div className='fill'></div>
            </div>
            <div className='bar bar__mar'>
                <div className='fill'></div>
            </div>
            <div className='bar bar__apr'>
                <div className='fill'></div>
            </div>
            <div className='bar bar__may'>
                <div className='fill'></div>
            </div>
            <div className='bar bar__jun'>
                <div className='fill'></div>
            </div>
            <div className='bar bar__jul'>
                <div className='fill'></div>
            </div>
            <div className='bar bar__aug'>
                <div className='fill'></div>
            </div>
            <div className='bar bar__sep'>
                <div className='fill'></div>
            </div>
            <div className='bar bar__oct'>
                <div className='fill'></div>
            </div>
            <div className='bar bar__nov'>
                <div className='fill'></div>
            </div>
            <div className='bar bar__dec'>
                <div className='fill'></div>
            </div>
        </div>
    </Card>
}
export default ExpenseAnalysis