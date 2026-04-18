import YouTubePlayer from "./YouTubePlayer"
import Timer from "./Timer"

interface RunbackCardProps {
    title: string;
    location: string;
    url: string;
    time: string;
    difficulty: string;
    requirements: string;
    notes: string;
}

function RunbackCard({ title, location, url, time, difficulty, requirements, notes }: Readonly<RunbackCardProps>) {
    return (
        <div className="ds-card">
            {/* 1. The Header (Title and Location only!) */}

            <div className="ds-card-header">
                <h3 className="ds-card-title">{title}</h3>
                <span className="ds-card-location">{location}</span>
            </div>
            {/* 2. The Video Embed */}

            <YouTubePlayer url={url} />
            {/* 3. The Details & Timer */}
            <Timer totalTime={time} />
            <p className="ds-card-notes">
                <strong>Difficulty:</strong> {difficulty}
            </p>
            <p className="ds-card-notes">
                <strong>Requirements:</strong> {requirements}
            </p>
            <p className="ds-card-notes">
                <strong>Notes:</strong> {notes}
            </p>
        </div>
    )
}

export default RunbackCard