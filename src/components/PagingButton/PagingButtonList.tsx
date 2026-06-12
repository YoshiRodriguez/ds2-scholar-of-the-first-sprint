// import GlowButton from "../GlowButton/GlowButton";

interface PagingButtonListProps {
	totalCards: number;
	totalBosses: number;
	newPageStateUpdater: (newPageNumber: number) => void;
	currentOffset: number;
}

function PagingButtonList({
	totalCards,
	totalBosses,
	newPageStateUpdater: newPage,
	currentOffset,
}: Readonly<PagingButtonListProps>) {
	const totalCardNumber = Math.ceil(totalBosses / totalCards);
	const cardNumbersArray = Array.from({ length: totalCardNumber }, (_, i) => i);

	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				gap: "0.5rem",
				width: "100%",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{cardNumbersArray.map((n) => {
				// Optional: reuse the elegant GlowButton implemented on the home page.
				// <GlowButton
				//     key={n}
				//     buttonText={(n + 1).toString()}
				//     onClickFunction={() => newPage(n * totalCards)}
				// >
				// </GlowButton>

				const isActive = currentOffset === n * totalCards;
				return (
					<button
						type="button"
						key={n}
						className="ds-btn ds-text-gold"
						style={
							isActive
								? {
										border: "2px solid var(--ds-accent-gold)",
										backgroundColor: "rgba(212, 175, 55, 0.1)",
									}
								: {}
						}
						onClick={() => newPage(n * totalCards)}
					>
						{(n + 1).toString()}
					</button>
				);
			})}
		</div>
	);
}

export default PagingButtonList;
