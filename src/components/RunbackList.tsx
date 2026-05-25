import RunbackCard from "./RunbackCard"
import bossRunbacks from "../data/runbacks"
import desktopImg from "../assets/Captura de pantalla 2026-04-21 005139.png"
import { useState } from "react"
import PagingButtonList from "./PagingButton/PagingButtonList";




function RunbackList() {
    const [searchQuery, setSearchQuery] = useState("");
    const [difficultyLevel, setDifficultyLevel] = useState("All");
    const [startingCard, setStartingCard] = useState(0);
    const [maxCards, setMaxCards] = useState(5);

    const filteredBosses =
        bossRunbacks
            .filter((boss) => boss.title.toLowerCase().includes(searchQuery.trim().toLowerCase()))
            .filter((boss) => difficultyLevel.trim().toLowerCase() === "all" || boss.difficulty.toLowerCase().includes(difficultyLevel.trim().toLowerCase()))

    return (
        <div >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>

                <input
                    type="text"
                    maxLength={50}
                    placeholder="Search for a boss..."
                    className="ds-input"
                    style={{ flex: "1" }}
                    value={searchQuery}
                    onChange={(b) => {
                        setSearchQuery(b.target.value);
                        setStartingCard(0);
                    }}
                />
                <select className="ds-input" onChange={(d) => {
                    setDifficultyLevel(d.target.value);
                    setStartingCard(0);

                }}>
                    <option value="All">All</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                    <option value="Brutal">Brutal</option>
                </select>
                <select className="ds-input" onChange={(m) => {
                    setMaxCards(Number.parseInt(m.target.value));
                    setStartingCard(0);
                }}>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    {/* <option value="All">42</option> */}
                </select>

            </div>
            {/* <div style={{ display: "flex", flexWrap: "wrap", marginTop: "1rem", marginBottom: "1rem", justifyContent: "space-around", alignItems: "center" }}>
            </div> */}
            <PagingButtonList
                totalCards={maxCards}
                totalBosses={filteredBosses.length}
                newPageStateUpdater={setStartingCard}
            />



            {searchQuery.toLowerCase() === "windows 10" && (
                <div style={{ marginBottom: "2rem", border: "2px solid #0078D7" }}>

                    <RunbackCard
                        title="DESKTOP-T342ACE (The ASRock Steel Legend)"
                        location="OS: Windows 10 Pro (Kernel: 10.0.19045.0)"
                        url="https://www.youtube.com/embed/anGfcO7894I"
                        estimatedTime="12:44"
                        difficulty="Disc C: 93% Full (Brutal)"
                        requirements="AMD Ryzen 5 3600 | Radeon RX 6600 | 32GB RAM"
                        notes="A legendary rig that survived an era. Unupgraded to Windows 11 and not reinstalled for 3 years straight. Gone, but never forgotten. We are letting go, but we're finally moving on."
                    />
                    <img
                        src={desktopImg}
                        alt="The final Windows 10 desktop."
                        style={{ width: "100%", borderRadius: "4px", marginTop: "1rem" }}
                    />
                    {/* <h3 className="ds-header">The legend never dies</h3> */}
                    <header className="ds-header">
                        <h1>The legend never dies</h1>
                    </header>
                </div>

            )

            }

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1.5rem" }} >
                {filteredBosses
                    .slice(startingCard, startingCard + maxCards)
                    .map((item) => (
                        <RunbackCard
                            key={item.id}
                            title={item.title}
                            location={item.location}
                            url={item.url}
                            estimatedTime={item.estimatedTime}
                            difficulty={item.difficulty}
                            requirements={item.requirements}
                            notes={item.notes}
                        />
                    ))}

            </div>

        </div>
    )
}

export default RunbackList