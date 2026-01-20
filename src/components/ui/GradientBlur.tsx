export function GradientBlur() {
    const layers = [
        {
            zIndex: 1,
            blur: '0.0625px',
            mask: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)'
        },
        {
            zIndex: 2,
            blur: '0.125px',
            mask: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)'
        },
        {
            zIndex: 3,
            blur: '0.25px',
            mask: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)'
        },
        {
            zIndex: 4,
            blur: '0.5px',
            mask: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)'
        },
        {
            zIndex: 5,
            blur: '1px',
            mask: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)'
        },
        {
            zIndex: 6,
            blur: '2px',
            mask: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
        },
        {
            zIndex: 7,
            blur: '4px',
            mask: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)'
        },
        {
            zIndex: 8,
            blur: '8px',
            mask: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)'
        }
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-50 select-none">
            <div className="absolute inset-0 overflow-hidden">
                {layers.map((layer, index) => (
                    <div
                        key={index}
                        style={{
                            opacity: 1,
                            position: 'absolute',
                            inset: 0,
                            zIndex: layer.zIndex,
                            backdropFilter: `blur(${layer.blur})`,
                            WebkitBackdropFilter: `blur(${layer.blur})`,
                            maskImage: layer.mask,
                            WebkitMaskImage: layer.mask,
                            pointerEvents: 'none',
                        }}
                    />
                ))}
                {/* Optional: Slight color fade at the very bottom to ensure text legibility if blur isn't enough */}
                <div
                    className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-[#F5F5F5] dark:from-[#0a0a0a] to-transparent"
                    style={{ opacity: 0.6 }}
                />
            </div>
        </div>
    );
}
