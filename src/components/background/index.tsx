import React from "react";
import './style.scss'

const Background: React.FC = () => (
    <div className="fixed-background">
        <img
            src={`${process.env.PUBLIC_URL}/background.png`}
            alt="Spot Background"
        />
    </div>
)

export default Background;