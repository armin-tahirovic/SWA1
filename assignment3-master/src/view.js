import React from "react";

const WeatherData = ({ weather }) => [
    <td key='value'>{weather.value}</td>,
    <td key='type'>{weather.type}</td>,
    <td key='unit'>{weather.unit}</td>,
    <td key='time'>{weather.time}</td>,
    <td key='place'>{weather.place}</td>
]

// eslint-disable-next-line
const WeatherRow = (props) => (
    <tr>
        <WeatherData {...props} />
    </tr>
)

const WeatherDataBody = ({ model }) => (
    <tbody>
        {
            model.Weather().map(weather => <WeatherRow {...{ weather }} />)
        }
    </tbody>
)

// eslint-disable-next-line
export default dispatcher => model => (
    <div id='base'>
        <h1>Weather</h1>
        <table id='weather'>
            <thead>
                <tr>
                    <td>Value</td>
                    <td>Type</td>
                    <td>Unit</td>
                    <td>Time</td>
                    <td>Place</td>
                    <td colSpan="3" key='copenhagen'>
                        <button onClick={() => dispatcher()({ type: 'copenhagenWeather' })}>Copenhagen weather</button>
                    </td>
                    <td colSpan="3" key='aarhus'>
                        <button onClick={() => dispatcher()({ type: 'aarhusWeather' })}>Aarhus weather</button>
                    </td>
                    <td colSpan="3" key='horsens'>
                        <button onClick={() => dispatcher()({ type: 'horsensWeather' })}>Horsens weather</button>
                    </td>
                    <td colSpan="3">
                        <input type='date' id='fromDate'></input>
                    </td>
                    <td colSpan="3">
                        <input type='date' id='toDate'></input>
                    </td>
                    <td colSpan="3" key='dataBtn'>
                        <button onClick={() => dispatcher()({ type: 'fromDateToDate', param: document.getElementById('fromDate').value, params: document.getElementById('toDate').value})}>Dates</button>
                    </td>
                </tr>
            </thead>
            <WeatherDataBody model={model} />
        </table>
    </div>
)