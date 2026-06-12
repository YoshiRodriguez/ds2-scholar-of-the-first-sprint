import "./glow-button.css";

interface GlowButtonProps {
	buttonText: string;
	onClickFunction?: () => void;
}

const GlowButton = (props: GlowButtonProps) => {
	return (
		<button
			type="button"
			aria-label="User Login Button"
			tabIndex={0}
			className="glow-button"
			onClick={props.onClickFunction}
		>
			<div className="glow-button-inner">
				{/* <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2" id="Layer_2">
              <path d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z" />
            </g>
          </svg> */}
				<p>{props.buttonText}</p>
			</div>
		</button>
	);
};

export default GlowButton;
