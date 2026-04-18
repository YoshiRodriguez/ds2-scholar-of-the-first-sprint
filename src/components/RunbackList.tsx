import RunbackCard from "./RunbackCard"
import bossRunbacks from "../data/runbacks"
import { useState } from "react"




function RunbackList() {
    const [searchQuery, setSearchQuery] = useState("");


    return (
        <div className="ds-build-list">
            <input
                type="text"
                placeholder="Search for a boss..."
                className="ds-button" style={{ marginBottom: "2rem", width: "100%" }} /* TODO: we can make a custom css class for this later! */
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {bossRunbacks
                .filter((boss) => boss.title.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((item) => (
                    <RunbackCard
                        key={item.id}
                        title={item.title}
                        location={item.location}
                        url={item.url}
                        time={item.time}
                        difficulty={item.difficulty}
                        requirements={item.requirements}
                        notes={item.notes}
                    />
                ))}
        </div>
    )
}

export default RunbackList