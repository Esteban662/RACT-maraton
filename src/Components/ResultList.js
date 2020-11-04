import React from "react";
import ResultItem from "./ResultItem";

export default class ResultList extends React.Component {

    render() {
        return (
            <> 
                <ul className="list-group" >
                    {this.props.arrProducts.map((product)=>{
                       return(
                        <ResultItem link={product.permalink} 
                        sold={product.sold_quantity} 
                        available={product.available_quantity} 
                        amount={product.price}
                        currency_id={product.currency_id}
                        title={product.title} 
                        img={product.thumbnail} />
                           ) 
                    })}
                </ul>
            </>
        );
    }
}
