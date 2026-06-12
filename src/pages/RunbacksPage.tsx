import GeometricDivider from "../components/GeometricDivider/GeometricDivider";
import Header from "../components/Header";
import RunbackList from "../components/RunbackList";

function RunbacksPage() {
	return (
		<main className="ds-container">
			<GeometricDivider />
			<Header
				title="Boss Runbacks Directory"
				subtitle="Larger, more powerful souls"
			/>
			{/* <div className="ds-line-faded" /> */}
			{/* <p style={{ textAlign: "center", color: "var(--ds-text-muted)" }}>
				Check out every boss runback from here.
			</p> */}
			<RunbackList></RunbackList>
		</main>
	);
}

export default RunbacksPage;
