import { useParams } from "react-router-dom";
import Header from "../components/Header";
import bossRunbacks from "../data/runbacks";

function RunbackDetailPage() {
	const { id } = useParams();
	const bossId = Number(id);
	const boss = bossRunbacks.find((b) => bossId === b.id);

	if (boss) {
		return (
			<div
				className="ds-container"
				style={{
					textAlign: "left",
					maxWidth: "800px",
					margin: "0 auto",
					padding: "2rem",
				}}
			>
				<Header title={boss.title} subtitle={boss.location} />
				<div className="ds-card-notes" style={{ textAlign: "center" }}>
					*PAGE UNDER CONSTRUCTION*
				</div>

				<div className="ds-line-faded" />

				{/* --- TEMPORARY DATA MOCKUP FOR TESTING --- */}
				<div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
					<img
						src={`/boss-thumbnails/${boss.image}`}
						alt={boss.title}
						style={{
							width: "200px",
							height: "200px",
							objectFit: "cover",
							border: "1px solid var(--ds-accent-gold)",
						}}
					/>
					<div>
						<p style={{ color: "var(--ds-text-primary)" }}>
							<strong>Difficulty:</strong> {boss.difficulty}
						</p>
						<p style={{ color: "var(--ds-text-primary)" }}>
							<strong>Estimated Time:</strong> {boss.estimatedTime}
						</p>
						<p style={{ color: "var(--ds-text-primary)" }}>
							<strong>Requirements:</strong> {boss.requirements}
						</p>
					</div>
				</div>

				<div style={{ marginTop: "2rem", color: "var(--ds-text-primary)" }}>
					<h3>Runback Notes</h3>
					<p style={{ whiteSpace: "pre-wrap" }}>{boss.notes}</p>
				</div>

				<div style={{ marginTop: "2rem", border: "0px" }}>
					<iframe
						width="100%"
						height="400"
						src={boss.url}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						referrerPolicy="strict-origin-when-cross-origin"
						style={{ border: "0px" }}
					></iframe>
				</div>

				<div className="ds-line-faded" />
			</div>
		);
	}
	return (
		<div className="ds-container" style={{ textAlign: "center" }}>
			<Header
				title="UNDER CONSTRUCTION - Boss not found"
				subtitle="The bosses are preparing, please wait warmly..."
			></Header>
		</div>
	);
}

export default RunbackDetailPage;
