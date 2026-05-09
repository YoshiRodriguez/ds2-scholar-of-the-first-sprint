// import GlowButton from "../GlowButton/GlowButton";


interface PagingButtonListProps {
    totalCards: number;
    totalBosses: number;
    newPageStateUpdater: (newPageNumber: number) => void;
}


function PagingButtonList({ totalCards, totalBosses, newPageStateUpdater: newPage }: Readonly<PagingButtonListProps>) {

    const totalCardNumber = Math.ceil(totalBosses / totalCards)
    const cardNumbersArray = Array.from({ length: totalCardNumber }, (_, i) => i);

    return (
        <div style={{ display: "flex", gap: "0.5rem", width: "100%", justifyContent: "center", alignItems: "center" }}>
            {
                cardNumbersArray.map((n) =>
                    // <GlowButton
                    //     key={n}
                    //     buttonText={(n + 1).toString()}
                    //     onClickFunction={() => newPage(n * totalCards)}
                    // >
                    // </GlowButton>
                    <button
                        key={n}
                        className="ds-btn ds-text-gold"
                        onClick={() => newPage(n * totalCards)}>
                        {(n + 1).toString()}
                    </button>
                )
            }
        </div>
    )
}

export default PagingButtonList;