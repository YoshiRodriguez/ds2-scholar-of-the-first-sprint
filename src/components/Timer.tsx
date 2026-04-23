import { useState, useEffect } from "react"

interface TimerProps {
    expectedTime: string
}

function TimerMessage({ isFirstTime, isRunning }: Readonly<{ isFirstTime: boolean; isRunning: boolean }>) {

    if (isFirstTime) {
        return (<div style={{ textAlign: "center", marginBottom: "1rem", color: "var(--ds-text-muted)" }}>
            Track your time!
        </div>)

    } else {
        return (<div style={{ textAlign: "center", marginBottom: "1rem", color: "var(--ds-text-muted)" }}>
            Status: {isRunning ? "Running" : "Paused"}
        </div>)

    };
}

function Timer({ expectedTime }: Readonly<TimerProps>) {
    const timeConverted = expectedTime.split(":", 2);
    const totalStartingSeconds = (Number.parseInt(timeConverted[0]) * 60) + Number.parseInt(timeConverted[1]);
    const [seconds, setSeconds] = useState<number>(totalStartingSeconds);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isFirstTime, setIsFirstTime] = useState<boolean>(true);


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

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

                <div style={{ textAlign: "center", marginBottom: "1rem", color: "var(--ds-text-muted)" }}>
                    Estimated time:
                </div>

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

            </div>


            <div style={{ display: "flex", flexDirection: "column" }}>

                <TimerMessage isFirstTime={isFirstTime} isRunning={isRunning} />

                <div className="ds-timer-controls">
                    <button className="ds-icon-btn" type="button" onClick={() => { setIsRunning(true); if (seconds > 0 && isFirstTime) { setIsFirstTime(false); setSeconds(0); } }}>
                        ►
                    </button>
                    <button className="ds-icon-btn" type="button" onClick={() => setIsRunning(false)}>
                        ❚❚
                    </button>
                    <button className="ds-icon-btn" type="button" onClick={() => { setIsRunning(false); setSeconds(0); }}>
                        ↺
                    </button>
                </div>
            </div>
        </div >

    )

}

export default Timer