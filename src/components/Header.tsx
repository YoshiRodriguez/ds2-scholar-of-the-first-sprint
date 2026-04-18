interface HeaderProps {
    title: string;
    subtitle: string;
}

function Header({ title = "Dark Souls II", subtitle = "Build Tracker & Speedrun Guide" }: Readonly<HeaderProps>) {
    return (
        <header className="ds-header">
            {/* We use curly braces inside JSX to run JavaScript variables! */}
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    )
}

export default Header