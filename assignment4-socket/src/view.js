import React from "react";

const WarningData = ({ warning }) => [
    <td key='severity'>{warning.severity}</td>,
    <td key='from'>{warning.prediction.from}</td>,
    <td key='to'>{warning.prediction.to}</td>,
    <td key='directions'>{warning.prediction.directions}</td>,
    <td key='type'>{warning.prediction.type}</td>,
    <td key='unit'>{warning.prediction.unit}</td>,
    <td key='time'>{warning.prediction.time}</td>,
    <td key='place'>{warning.prediction.place}</td>
]

// eslint-disable-next-line
const WarningRow = (props) => (
    <tr>
        <WarningData {...props} />
    </tr>
)

const WarningDataBody = ({ model }) => (
    <tbody>
        {
            model.updateWarnings().map(warning => <WarningRow key={warning.id.toString()} {...{ warning }} />)
        }
    </tbody>
)

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

const ForecastData = ({ forecast }) => [
    <td key='from'>{forecast.from}</td>,
    <td key='to'>{forecast.to}</td>,
    <td key='type'>{forecast.type}</td>,
    <td key='unit'>{forecast.unit}</td>,
    <td key='time'>{forecast.time}</td>,
    <td key='place'>{forecast.place}</td>
]

// eslint-disable-next-line
const ForecastRow = (props) => (
    <tr>
        <ForecastData {...props} />
    </tr>
)

const ForecastDataBody = ({ model }) => (
    <tbody>
        {
            model.Forecast().map(forecast => <ForecastRow {...{ forecast }} />)
        }
    </tbody>
)

const ComputedData = ({ weather }) => [
    <td key='value'>{weather.value}</td>,
    <td key='place'>{weather.place}</td>
]

const ComputedDataRow = (props) => (
    <tr>
        <ComputedData {...props} />
    </tr>
)

const MeasurementDataBody = ({ model, dispatcher }) => (
    <tbody>
        {
            model.latestMeasurement().map(weather => <WeatherRow key={weather.id.toString()} {...{ weather, dispatcher }} />)
        }
    </tbody>
)

const MinimumWeatherDataBody = ({ model, dispatcher }) => (
    <tbody>
        {
            model.minTemp().map(weather => <WeatherRow key={weather.id.toString()} {...{ weather, dispatcher }} />)
        }
    </tbody>
)

const MaximumWeatherDataBody = ({ model, dispatcher }) => (
    <tbody>
        {
            model.maxTemp().map(weather => <WeatherRow key={weather.id.toString()} {...{ weather, dispatcher }} />)
        }
    </tbody>
)

const TotalPrecipitationWeatherDataBody = ({ model, dispatcher }) => (
    <tbody>
        {
            model.totalPrecipitation().map(weather => <ComputedDataRow key={weather.id.toString()} {...{ weather, dispatcher }} />)
        }
    </tbody>
)

const AverageSpeedWeatherDataBody = ({ model, dispatcher }) => (
    <tbody>
        {
            model.avgWindspeed().map(weather => <ComputedDataRow key={weather.id.toString()} {...{ weather, dispatcher }} />)
        }
    </tbody>
)

const HourlyPredictionWeatherDataBody = ({ model, dispatcher }) => (
    <tbody>
        {
            model.hourlyPrediction().map(weather => <WeatherRow key={weather.id.toString()} {...{ weather, dispatcher }} />)
        }
    </tbody>
)

// eslint-disable-next-line
export const warnings_view = dispatcher => model => (

    <div id='base'>
        <div>
            <h1>Warnings</h1>
            <button id='warnings'
                onClick={() =>
                    dispatcher({
                        type: "warnings"
                    })}>
            </button>
            <WarningDataBody model={model} />
        </div>

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
                        <button onClick={() => dispatcher()({ type: 'fromDateToDate', param: document.getElementById('fromDate').value, params: document.getElementById('toDate').value })}>Dates</button>
                    </td>
                    <td colSpan="3" key='add'>
                        <button onClick={() => dispatcher()({ type: 'add' })}>Add</button>
                    </td>
                    <td>
                        <button onClick={() => dispatcher()({ type: 'updateAll' })}>Update All</button>
                    </td>
                </tr>
            </thead>
            <WeatherDataBody model={model} />

            <div>

                <h1>Latest Measurements</h1><button onClick={() => dispatcher()({ type: 'updateLatest' })}>Update</button>
                <table id='latest'>
                    <thead>
                        <tr>
                            <td>Value</td>
                            <td>Type</td>
                            <td>Unit</td>
                            <td>Time</td>
                            <td>Place</td>
                        </tr>
                    </thead>
                    <MeasurementDataBody model={model} dispatcher={dispatcher} />
                </table>
            </div>

            <div id='base1'>
                <h1>Minimum temperature for the last 5 days</h1><button onClick={() => dispatcher()({ type: 'updateAll' })}>Update</button>
                <table >
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>value</th>
                            <th>Unit</th>
                            <th>Time</th>
                            <th>place</th>
                        </tr>
                    </thead>
                    <MinimumWeatherDataBody model={model} dispatcher={dispatcher} />
                </table>
            </div>

            <div id='base2'>
                <h1>Maximum temperature for the last 5 day</h1><button onClick={() => dispatcher()({ type: 'updateAll' })}>Update</button>
                <table >
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>value</th>
                            <th>Unit</th>
                            <th>Time</th>
                            <th>place</th>
                        </tr>
                    </thead>
                    <MaximumWeatherDataBody model={model} dispatcher={dispatcher} />
                </table>

            </div>

            <div id='base3'>
                <h1>Total precipitation for the last 5 days</h1><button onClick={() => dispatcher()({ type: 'updateAll' })}>Update</button>
                <table>
                    <thead>
                        <tr>
                            <th>value</th>
                            <th>place</th>
                        </tr>
                    </thead>
                    <TotalPrecipitationWeatherDataBody model={model} dispatcher={dispatcher} />
                </table>
            </div>

            <div id='base4'>
                <h1>Average wind speed for the last 5 days</h1><button onClick={() => dispatcher()({ type: 'updateAll' })}>Update</button>
                <table >
                    <thead>
                        <tr>
                            <th>value</th>
                            <th>place</th>
                        </tr>
                    </thead>
                    <AverageSpeedWeatherDataBody model={model} dispatcher={dispatcher} />
                </table>
            </div>

            <div id='base5'>
                <h1>Hourly predictions for the next 24 hours.</h1><button onClick={() => dispatcher()({ type: 'updateAll' })}>Update</button>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>value</th>
                            <th>Unit</th>
                            <th>Time</th>
                            <th>place</th>
                        </tr>
                    </thead>
                    <HourlyPredictionWeatherDataBody model={model} dispatcher={dispatcher} />
                </table>
            </div>
            <br></br>
            <h1>Forecast</h1>
            <table id='weather'>
                <thead>
                    <tr>
                        <td>From</td>
                        <td>To</td>
                        <td>Type</td>
                        <td>Unit</td>
                        <td>Time</td>
                        <td>Place</td>
                    </tr>
                </thead>
                <ForecastDataBody model={model} />
            </table>
        </table>
    </div>
)
const View = ({ dispatch }) => warnings_view(dispatch)
export const create_view = dispatch => <View dispatch={dispatch} />