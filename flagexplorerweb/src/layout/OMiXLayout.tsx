import React, { Component } from "react";
import OMiXHeader from "./OMiXHeader"

export class OMixLayout extends Component<{children: React.ReactNode}> {
    render() {
        return <div>
            <OMiXHeader />
            <main>
                {this.props.children}
            </main>
        </div>
    }
}