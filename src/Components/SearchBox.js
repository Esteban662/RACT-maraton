import React from "react";

export default class SearchBox extends React.Component {
    constructor(){
        super()
        this.state={
            search:""
        }

    }
    handlerSearch= (e)=>{
       this.setState({search: e.target.value}) 
    }
    hanleClick= (e)=>{
        e.preventDefault();
        const product = this.state.search
        this.props.send(product)
        this.setState({search: ""})
    }
    render() {
        return (
            <div className="input-group">
                <input style={{backgroundColor:"#bdffff"}} onChange={this.handlerSearch} value={this.state.search} type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                <div className="input-group-append">
                    <button onClick={this.hanleClick} type="button" className="btn btn-outline-primary" style={{backgroundColor:"white"}}>Search</button>
                </div>
            </div>

        );
    }
}
