import * as React from "react";

export class RestartBtn extends React.Component {

    handleClick(e: React.MouseEvent) {
        var event = document.createEvent("Event");
        event.initEvent("restart", false, true); 
        window.dispatchEvent(event);
    }
    
    render() {
        return <a href="#" className="restartBtn" onClick={(e: React.MouseEvent) => this.handleClick(e)}>
            Restart 
        </a>;
    }
} 
