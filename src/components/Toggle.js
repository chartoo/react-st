import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props){
        super(props);
        this.state={
            isToggle:true,
            btnColor:'green'
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState=>({
            btnColor:prevState.isToggle?'red':'green',
            isToggle:!prevState.isToggle,
        })
        );
    }
    render() {
        const style={
            background:this.state.btnColor,
            padding:'10px 20px',
            cursor:'pointer'
        };
        return (
            <div>
                <button style={style} onClick={this.handleClick}>
                    <strong>{this.state.isToggle?'ON':'OFF'}</strong>
                </button>
            </div>
        )
    }
}
