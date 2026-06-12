import { useParams } from "react-router-dom";
import Header from "../components/Header";
import bossRunbacks from "../data/runbacks";

function RunbackDetailPage() {
	const { id } = useParams();
	const bossId = Number(id);
	const boss = bossRunbacks.find((b) => bossId === b.id);

	if (boss) {
		return (
			<div className="ds-container" style={{ textAlign: "center" }}>
				<Header
					title={"UNDER CONSTRUCTION - " + boss.title}
					subtitle="The bosses are preparing, please wait warmly..."
				></Header>
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
