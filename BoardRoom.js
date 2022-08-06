const BoardRoom = () => {
    return ( 
        <div className="boardroom-container">

            <div className="boardroom-header">
              <div className="line-one-boardroom">
              <span className="bold-head">Boardroom</span>
                <span className="recommended">Recommended</span>
              </div>
              <div className="line-two-boardroom">
                <span>Stake BSHARE and earn BOMB every epoch</span>
                <span className="bold">TVL : $1,008,430</span>
              </div>
            </div>
            {/* BOARDROOM HEADER DIV ENDS */}

            <div className="boardroom-main">
                <span>Total Staked: 7332</span>
                <div className="boardroom-main-inside">
                    <div>
                        <p>Daily Returns: </p>
                        <p className="big">2%</p>
                    </div>

                    <div>
                        <p>Your Stake:</p>
                        <p className="big">5,0000</p>
                        <p>=$1117.54</p>
                    </div>

                    <div>
                        <p>Earned:</p>
                        <p>1660.53</p>
                        <p>=$234.43</p>
                    </div>

                    <div className="deposit-withraw">
                        <button className="curved-btn">Deposit</button>
                        <button className="curved-btn">Withdraw</button>
                        <button className="curved-btn">Claim Rewards</button>
                    </div>



                </div>
            </div>

        </div>
     );
}
 
export default BoardRoom;