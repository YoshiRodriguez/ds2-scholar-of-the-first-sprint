// import Navbar from "../components/Navbar"
import RunbackList from "../components/RunbackList"

function RunbacksPage() {
    return (
        <main className="ds-container">
            {/* <Navbar /> */}
            <p style={{ textAlign: "center", color: "var(--ds-text-muted)" }}>
                Check out every boss runback from here.
            </p>
            <RunbackList></RunbackList>
        </main>
    )
}

export default RunbacksPage

