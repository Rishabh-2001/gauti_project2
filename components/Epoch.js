const Epoch = () => {
    return ( 
        <div className="epoch-container">
        <div className="current">
            <p className="epoch-para">Current epoch</p>
            <p className="big">256</p>
            </div>
            <div className="time">
            <p className="big">03:34:56</p>
            <p className="epoch-para">Next Epoch In</p>
            </div>

            <div className="live">
           <p>Live TWAP . <span className="green">1.17</span></p>
           <p>TVL: <span className="green">$5002,412</span></p>
           <p>LastEpoch TWAP: <span className="green">1.22</span></p>
           </div>
        </div>
     );
}
 
export default Epoch;