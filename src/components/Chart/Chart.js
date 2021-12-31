import ChartBar from './ChartBar'
import './Chart.css'

export default function Chart(props) {
    const valueArr = props.dataPoints.map(point => point.value)
    const totalMax = Math.max(...valueArr)

    return (
        <div className='chart'>
            {props.dataPoints.map(point =>
                <ChartBar
                    value={point.value}
                    maxValue={totalMax}
                    label={point.label}
                    key={point.label}
                />)}
        </div>
    )
}