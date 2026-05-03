import HAURESImage from "../assets/Haures_DS2.png";
import GeometricDivider from "../components/GeometricDivider/GeometricDivider";
import Header from "../components/Header";


function HauresPage() {
    return (
        // <div>
        //     This page is under construction!
        // </div>

        <div className="ds-container">

            {/* <GeometricDivider /> */}

            <Header
                title="HAURES"
                subtitle="Your fellow undead and the protagonist of this guide!"
            />

            <GeometricDivider />

            {/* <div className="ds-line-faded" /> */}

            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "3rem" }}>

                <div style={{ width: "100%", maxWidth: "400px", alignSelf: "flex-start" }}>
                    <h3 >
                        Meet <b>HAURES!</b> (yes, in all-caps).
                        <br />
                        <br />
                        She's the one who's actually going through the perils of the cold, harsh land of Drangleic.
                    </h3>
                    <br></br>
                    {/* <div className="ds-line-faded" /> */}

                    Her starting class is the reliable, sturdy <i>Knight</i>, which is the base for most melee builds. We'll see her progress through the game much like a new player would, meaning that her stats and equipment are not very optimized.
                </div>
                <img src={HAURESImage} style={{ width: "100%", maxWidth: "400px" }} alt="A female knight clad in red-clothing armor" />


            </div>
            {/* <Link to="/admin" className="ds-btn" style={{ alignSelf: "center" }}>Go to Admin Page</Link> */}
            {/* <Link to="/runbacks" className="ds-btn">Go to the boss runbacks!</Link> */}
        </div>




    );
}

export default HauresPage;