import RunbackCard from "./RunbackCard"
import bossRunbacks from "../data/runbacks"
import desktopImg from "../assets/Captura de pantalla 2026-04-21 005139.png"
import { useState } from "react"




function RunbackList() {
    const [searchQuery, setSearchQuery] = useState("");
    const [difficultyLevel, setDifficultyLevel] = useState("All");

    return (
        <div className="ds-build-list">

            <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>

                <input
                    type="text"
                    maxLength={50}
                    placeholder="Search for a boss..."
                    className="ds-input"
                    style={{ flex: "1" }}
                    value={searchQuery}
                    onChange={(b) => setSearchQuery(b.target.value)}
                />
                <select className="ds-input" onChange={(d) => setDifficultyLevel(d.target.value)}>
                    <option value="All">All</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                    <option value="Brutal">Brutal</option>
                </select>



            </div>

            {searchQuery.toLowerCase() === "windows 10" && (
                <div style={{ marginBottom: "2rem", border: "2px solid #0078D7" }}>

                    <RunbackCard
                        title="DESKTOP-T342ACE (The ASRock Steel Legend)"
                        location="OS: Windows 10 Pro (Kernel: 10.0.19045.0)"
                        url="https://www.youtube.com/embed/anGfcO7894I"
                        expectedTime="12:44"
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

            {bossRunbacks
                .filter((boss) => boss.title.toLowerCase().includes(searchQuery.trim().toLowerCase()))
                .filter((boss) => difficultyLevel.trim().toLowerCase() === "all" || boss.difficulty.toLowerCase().includes(difficultyLevel.trim().toLowerCase()))
                .map((item) => (
                    <RunbackCard
                        key={item.id}
                        title={item.title}
                        location={item.location}
                        url={item.url}
                        expectedTime={item.expectedTime}
                        difficulty={item.difficulty}
                        requirements={item.requirements}
                        notes={item.notes}
                    />
                ))}
        </div>
    )
}

export default RunbackList