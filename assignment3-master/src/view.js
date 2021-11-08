import React from "react";

const CityData = ({ dispatcher }) => {
    return [<td colspan="3" key='copenhagen'>
        <button onClick={() => dispatcher()({ type: 'copenhagenWeather' })}>Copenhagen weather</button>
    </td>]
    [<td colspan="3" key='aarhus'>
            <button onClick={() => dispatcher()({ type: 'aarhusWeather' })}>Aarhus weather</button>
        </td>]
    [<td colspan="3" key='horsens'>
            <button onClick={() => dispatcher()({ type: 'horsensWeather' })}>Horsens weather</button>
        </td>]

    // Forecast
    [<td colspan="3" key='copenhagen'>
            <button onClick={() => dispatcher()({ type: 'copenhagenForecast' })}>Copenhagen Forecast</button>
        </td>]
    [<td colspan="3" key='aarhus'>
            <button onClick={() => dispatcher()({ type: 'aarhusForecast' })}>Aarhus Forecast</button>
        </td>]
    [<td colspan="3" key='horsens'>
            <button onClick={() => dispatcher()({ type: 'horsensForecast' })}>Horsens Forecast</button>
        </td>]
}

const WeatherData = ({ weather, dispatcher }) => [
    ...CityData({ weather, dispatcher })
]


const WeatherRow = (props) => (
    <tr>
        <WeatherData {...props} />
    </tr>
)

const WeatherDataBody = ({ model, dispatcher }) => (
    <tbody>
        {
            model.CityWeatherData().map(weather => WeatherRow({...{weather, dispatcher}}))
        }
    </tbody>
)

// eslint-disable-next-line
export default dispatcher => model => (
    <div id='base'>
        <h1>Weather</h1>
        <table id='weather'>
            <thead><tr><td>Value</td><td>Type</td><td>Unit</td><td>Time</td><td>Place</td></tr></thead>
            <WeatherDataBody model={model} dispatcher={dispatcher} />
        </table>
    </div>
)