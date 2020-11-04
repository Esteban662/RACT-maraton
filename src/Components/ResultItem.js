import React from "react";

export default class ResultItem extends React.Component {
    render() {
        return (
            <div className="card mb-3" style={{backgroundColor:"#bdffff"}} >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.img} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text"><small className="text-muted">{this.props.amount} {this.props.currency_id}</small></p>
                            <p className="card-text">Sold Quantity({this.props.sold})/ Available Quantity({this.props.available})</p>
                            <a href={this.props.link}>Ver detalle</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
