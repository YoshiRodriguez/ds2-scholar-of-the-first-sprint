import "./geometric-divider.css";


function GeometricDivider() {
    return (
        <div className="geometric-divider gold">
            <div className="geo-edge-detail left">
                <div className="geo-dot"></div>
                <div className="geo-diamond-pair">
                    <div className="geo-diamond micro"></div>
                    <div className="geo-diamond micro"></div>
                </div>
                <div className="geo-diamond small"></div>
            </div>
            <div className="geo-chevron left"></div>

            <div className="geo-line"></div>

            <div className="geo-diamond hollow">
                <div className="geo-diamond inner"></div>
            </div>

            <div className="geo-line"></div>

            <div className="geo-chevron right"></div>
            <div className="geo-edge-detail right">
                <div className="geo-diamond small"></div>
                <div className="geo-diamond-pair">
                    <div className="geo-diamond micro"></div>
                    <div className="geo-diamond micro"></div>
                </div>
                <div className="geo-dot"></div>
            </div>
        </div>

    )
}

export default GeometricDivider;