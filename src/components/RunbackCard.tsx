import { Link } from "react-router-dom";
import BorderGlow from "./ReactBits/BorderGlow";

interface RunbackCardProps {
	id: number;
	title: string;
	image: string;
	location: string;
	difficulty: string;
	estimatedTime: string;
}

function RunbackCard({
	id,
	title,
	image,
	location,
	difficulty,
	estimatedTime,
}: Readonly<RunbackCardProps>) {
	return (
		<Link
			to={"/boss/" + id}
			style={{ height: "100%", textDecoration: "none", color: "inherit" }}
		>
			<div className="ds-plaque-outer">
				<div className="ds-card-inner">
					<div className="ds-card-header">
						<h3 className="ds-card-title">{title}</h3>
					</div>
					<div className="ds-card-header">
						<div className="ds-card-divider" />
					</div>

					<BorderGlow
						className="ds-title-box"
						edgeSensitivity={10}
						backgroundColor="#0e0e10"
						borderRadius={0}
						coneSpread={20}
						animated={true}
						glowRadius={25}
						colors={["#f5e6b2", "#e2c46c", "#b8923e"]}
					>
						{/* <img
							src={BossImageTestOverlay}
							style={{
								inset: "0",
								position: "absolute",
								pointerEvents: "none",
								mixBlendMode: "multiply",
							}}
							alt="Dirt overlay."
						/> */}
						<img src={`/boss-thumbnails/${image}`} alt="Boss' image." />
					</BorderGlow>

					<div className="ds-card-header">
						<span className="ds-card-location">{location}</span>
					</div>
					<div className="ds-card-header">
						<div className="ds-card-divider" />
					</div>

					<div style={{ textAlign: "center", textJustify: "inter-word" }}>
						<p className="ds-card-notes">
							<strong>○ Difficulty:</strong> {difficulty}
						</p>
						<p className="ds-card-notes">
							<strong>○ Time:</strong> {estimatedTime}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default RunbackCard;
