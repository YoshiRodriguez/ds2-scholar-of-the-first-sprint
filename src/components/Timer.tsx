interface TimerProps {
    totalTime: string
}

function Timer({ totalTime }: Readonly<TimerProps>) {
    return (
        <div className="ds-timer">
            <h3>Expected time:</h3>
            <h1 style={{ margin: "0.1rem 0" }}>{totalTime}</h1>
            <div className="ds-timer-controls">
                <button className="ds-btn" type="button">Play</button>
                <button className="ds-btn" type="button">Pause</button>
                <button className="ds-btn" type="button">Reset</button>
            </div>
        </div>

    )

}

export default Timer