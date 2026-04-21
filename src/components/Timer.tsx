import { useState, useEffect } from "react"

// interface TimerProps {
//     totalTime: string
// }

function Timer() {
    const [seconds, setSeconds] = useState<number>(0)
    const [isRunning, setIsRunning] = useState<boolean>(false)


    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval>;

        if (isRunning) {
            intervalId = setInterval(() => {
                setSeconds(prev => prev + 1);

            }, 1000)
        }

        return () => clearInterval(intervalId);
    }, [isRunning]

    )

    const parsedMinutes = Math.floor(seconds / 60);
    const parsedSeconds = seconds % 60;


    return (
        <div className="ds-timer">
            {/* <h3>Expected time:</h3>
            <h1 style={{ margin: "0.1rem 0" }}>
                {seconds}<span style={{ fontSize: "1.5rem" }}>s</span> <span style={{ fontSize: "1rem", color: "var(--ds-text-muted)" }}> (Status: {isRunning ? "Running" : "Paused"})</span>
            </h1> */}

            <div className="countdown-timer">
                <div className="countdown-segment">
                    <span className="countdown-number">
                        {parsedMinutes.toString().padStart(2, '0')}
                    </span>
                    <span className="countdown-unit">Minutes</span>
                </div>

                <div className="countdown-segment">
                    <span className="countdown-number">
                        {parsedSeconds.toString().padStart(2, '0')}
                    </span>
                    <span className="countdown-unit">Seconds</span>
                </div>
            </div>

            <p style={{ textAlign: "center", color: "var(--ds-text-muted)" }}>
                Status: {isRunning ? "Running" : "Paused"}
            </p>


            <div className="ds-timer-controls">
                <button className="ds-btn" type="button" onClick={() => { setIsRunning(true) }}>
                    Play
                </button>
                <button className="ds-btn" type="button" onClick={() => setIsRunning(false)}>
                    Pause
                </button>
                <button className="ds-btn" type="button" onClick={() => { setIsRunning(false); setSeconds(0); }}>
                    Reset
                </button>
            </div>
        </div>

    )

}

export default Timer