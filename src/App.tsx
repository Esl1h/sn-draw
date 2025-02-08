import React from "react";

const DrawIOEditor: React.FC = () => {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <iframe
                src="https://embed.diagrams.net/?embed=1&ui=min"
                title="Draw.io Editor"
                width="100%"
                height="100%"
                frameBorder="0"
            />
        </div>
    );
};

export default DrawIOEditor;
