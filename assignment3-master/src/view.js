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
                        <button onClick={() => dispatcher()({ type: 'copenhagenWeather', param: 'Copenhagen' })}>Copenhagen weather</button>
                    </td>
                </tr>
            </thead>
            <WeatherDataBody model={model} />
        </table>
    </div>
)