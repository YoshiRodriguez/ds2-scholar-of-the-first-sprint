import { Link } from "react-router-dom";
import Header from "../components/Header";
import GeometricDivider from "../components/GeometricDivider/GeometricDivider";


function HomePage() {

    return (

        <div className="ds-container" style={{ maxWidth: "80%", padding: "0.5rem" }}>
            <GeometricDivider />

            <Header
                title="Welcome to the Dark Souls II Boss Runback Archive!"
                subtitle="Every single boss runback in Dark Souls II: Scholar of the First Sin"
            />

            <div className="ds-line-faded" />
            <h3 className="">Well met, skeleton! This page was created to help other fellow undead find their way from the bonfire to the boss. Here, I'm documenting optimal, easy routes to every boss fog gate in Dark Souls II: Scholar of the First Sin by using videos showcasing these tips and techniques.
            </h3>
            <h3><b>But why?</b> To prove that, with proper routing, spatial awareness, and resource management, no runback is inherently unfair.</h3>
            <h3>Every runback shows the player character's current stats and equipment at the beginning so that you know how it was done.</h3>
            <div className="ds-line-faded" />

            {/* <div></div>

            <div className="ds-line-faded" /> */}

            <Link to="/runbacks" className="ds-btn" style={{ alignSelf: "center" }}>Go to the boss runbacks!</Link>
            <Link to="/admin" className="ds-btn" style={{ alignSelf: "center" }}>Go to Admin Page</Link>

        </div>
    )
}

export default HomePage