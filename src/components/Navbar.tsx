import { Link } from "react-router-dom";
import { useState } from "react";

function MenuButtons({ isOpen, setOpen }: Readonly<{ isOpen: boolean, setOpen: any }>) {
    if (isOpen) {
        return (
            <div className="ds-overlay" style={{ display: "flex", justifyContent: "flex-start", gap: "1rem" }}>
                <div className="ds-sidebar" style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <button className="ds-btn ds-btn-danger" onClick={() => setOpen(false)}>Close</button>

                    <Link to="/home" className="ds-btn ds-text-gold" onClick={() => setOpen(false)}>Home</Link>

                    <Link to="/haures" className="ds-btn ds-text-gold" onClick={() => setOpen(false)}>HAURES' Page</Link>

                    <Link to="/runbacks" className="ds-btn ds-text-gold" onClick={() => setOpen(false)}>Bosses</Link>

                    <Link to="/admin" className="ds-btn ds-text-gold" onClick={() => setOpen(false)}>Admin</Link>
                </div>
            </div >
        )
    }
    else {
        return null;
    }
}

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (

        <div style={{ padding: "0", margin: "0.5rem" }}>
            <button className="ds-btn ds-text-gold" onClick={() => {
                if (isOpen) {
                    setOpen(false)
                } else {
                    setOpen(true)
                }
            }} >
                Inventory
            </button>
            <MenuButtons isOpen={isOpen} setOpen={setOpen}></MenuButtons>


        </div>
    )
}


export default Navbar