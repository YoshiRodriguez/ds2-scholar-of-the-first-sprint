import { Link } from "react-router-dom";
import Header from "../components/Header";
import GeometricDivider from "../components/GeometricDivider/GeometricDivider";
import GlowButton from "../components/GlowButton/GlowButton";
import SummonSignImage from "../assets/summon_sign.png";



function HomePage() {

    // const debugBorderStyle = "2px solid red";

    return (

        <div className="ds-container" style={{ textAlign: "center" }}>
            <GeometricDivider />
            <Header
                title="Welcome to the Dark Souls II Boss Runback Archive!"
                subtitle="Every single boss runback in Dark Souls II: Scholar of the First Sin"
            />

            <div className="ds-line-faded" />


            <h3>Well met, skeleton! This page was created to help other fellow undead find their way from the bonfire to the boss. Here, I'm documenting optimal, easy routes to every boss fog gate in Dark Souls II: Scholar of the First Sin by using videos showcasing these tips and techniques.
            </h3>
            <h3><b>But why?</b> To prove that, with proper routing, spatial awareness, and resource management, no runback is inherently unfair.</h3>
            <h3>If you wish to know who will be accompanying us in our journey, click the summon sign below. Otherwise, you can go check the runbacks straight away. Whichever your choice, please make sure to check the <b>guidelines</b>  </h3>


            <div className="ds-line-faded" />


            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center" }}>

                <div style={{ textAlign: "center" }}>
                    <Link to="/haures" style={{ textDecoration: "none" }}>
                        <img src={SummonSignImage} style={{ width: "100%", maxWidth: "400px" }} alt="Dark Souls summon sign" />
                        <h3 className="ds-text-gold">Summon phantom HAURES?</h3>
                    </Link>
                </div>
                <div style={{ textAlign: "center" }}>
                    <Link to="/runbacks" style={{ textDecoration: "none" }}>
                        <GlowButton buttonText={"Guidelines"} />
                    </Link>

                    <Link to="/runbacks" style={{ textDecoration: "none" }}>
                        <GlowButton buttonText={"Enter the mist"} />
                    </Link>
                </div>

                {/* <Link to="/admin" className="ds-btn" style={{ alignSelf: "center" }}>Go to Admin Page</Link> */}
            </div>

        </div>
    )
}

export default HomePage