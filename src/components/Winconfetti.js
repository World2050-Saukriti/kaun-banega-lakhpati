import React, { useEffect } from 'react';

export const Winconfetti = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://tenor.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
        
        // Cleanup script when component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            style={{
                height: '100vh',  // Full viewport height
                width: '100%',    // Full width
                display: 'flex',  // Center the GIF horizontally and vertically
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden' // Prevent overflow
            }}
        >
            <div
                className="tenor-gif-embed"
                data-postid="15816997"
                data-share-method="host"
                data-aspect-ratio="1"
                data-width="100%"
            >
            </div>
        </div>
    );
};
