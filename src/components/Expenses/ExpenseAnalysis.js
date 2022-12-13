import Card from '../UI/Card'
import './ExpenseAnalysis.css'

function ExpenseAnalysis(props) {
    const barheights = props.barHeights();
    console.log(barheights);
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
            {Object.keys(barheights).map((month => {
                return <div className='bar' key={month}>
                    <p className='bar_name'>{month}</p>
                    <div className='fill' style={{ height: ` ${barheights[month]}%` }}></div>
                </div>
            }))}
        </div>
    </Card>
}
export default ExpenseAnalysis