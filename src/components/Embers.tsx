import { useMemo } from "react";


interface EmbersProps {
    totalEmbers: number;
}

function Embers({ totalEmbers }: Readonly<EmbersProps>) {
    // const memoizedEmbers = Array.from({ length: totalEmbers });

    const memoizedEmbers = useMemo(() => {
        return Array.from({ length: totalEmbers }).map(() => {
            return {
                id: crypto.randomUUID(),
                left: `${Math.random() * 100}%`,
                duration: `${Math.random() * 10 + 10}s, ${Math.random() * 3 + 2}s`,
                delay: `-${Math.random() * 20}s, -${Math.random() * 5}s`
            };

        });
    }, [totalEmbers]);

    return (
        <div className="embers-container">
            {memoizedEmbers.map((e) => (

                <div
                    key={e.id}
                    className="ember"
                    style={{
                        left: `${e.left}`,
                        animationDuration: `${e.duration}`,
                        animationDelay: `${e.delay}`
                    }}
                />

            ))}

        </div>
    )

}

export default Embers;

