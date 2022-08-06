import CoinShare from "./CoinShare";
const Chart = () => {
    return ( 
        <div className="chart-container">
           <div className="table-headers">
                <span className="front"></span>
                <span>Current Supply</span>
                <span>Total Supply</span>
                <span>Price</span>
           </div>
           <div className="coin-share-list">
            <CoinShare></CoinShare>
            <CoinShare></CoinShare>
            <CoinShare></CoinShare>
           </div>


        </div>
     );
}
 
export default Chart;