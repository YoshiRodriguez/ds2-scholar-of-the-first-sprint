import Header from "./components/Header"
// import StepCard from "./components/StepCard"
import RunbackList from "./components/RunbackList"


function App() {
  return (
    <div className="ds-container">
      <Header title="DARK SOULS II: SOTFS - Boss Runbacks" subtitle="Every single boss runback in Dark Souls II: Scholar of the First Sin" />

      <main>
        <p style={{ textAlign: "center", color: "var(--ds-text-muted)" }}>
          Bearer of the curse... seek seek lest.
        </p>
        <RunbackList></RunbackList>
        {/* <StepCard
          title="Talk to Emerald Herald"
          location="Majula"
          notes="Find best girl after creating your character."
        />
        <StepCard
          title="Cheese the Dragonrider"
          location="Heide's Tower of Flame"
          notes="Wait for him to take 6 steps, then run and roll to his right."
        /> */}
      </main>
    </div>
  )
}

export default App
