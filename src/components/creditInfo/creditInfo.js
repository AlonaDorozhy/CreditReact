import React, {Component} from 'react';

import './creditInfo.css';
class CreditInfo extends Component {
    render() {
        return ( 
        < div className = 'AllCreditInfo' >
            <div className="ExchangeRates">
                    <p>Exchange Rates:</p>
                    <table>
                        <thead>
                        <th></th>
                        <th>Buy </th>
                        <th>Sale </th>
                        </thead>
                        <tbody id="Rates">
                        <tr>
                            <td>USD / UAH</td>
                            <td id="buy1">0</td>
                            <td id="sale1">0</td>
                        </tr>
                        <tr>
                            <td>EUR / UAH</td>
                            <td id="buy2">0</td>
                            <td id="sale2">0</td>
                        </tr>
                        <tr>
                            <td>RUR / UAH</td>
                            <td id="buy3">0</td>
                            <td id="sale3">0</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                
                            <div className="form-group">
                                <label>Client name</label>
                                <input type="text" className="form-control" name="clientName" placeholder=" Enter Name" required/>
                                </div>
                            <div className="form-group">
                                <label>Client surname</label>
                                <input type="text" classname="form-control" name="clientSurname"
                                    placeholder=" Enter client surname" required/>
                            </div>
                            <div className="form-group">
                                <label>Amount</label>
                                <input type="number" className="form-control" name="amount" placeholder=" Enter amount" required/>
                            </div>
                            <div className="form-group">
                                <label>Term</label>
                                <input type="number" className="form-control" maxlength="2" min="3" max="12" name="term"
                                    placeholder=" Enter term" required/>
                            </div>
                    <div>

                        <button type="button" className=" submit" name="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i>
                                    Send
                        </button>
                    </div>
               
                    < div className = "form-group scroll backscroll" >
                        <table className="table">
                            <thead>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Amount</th>
                            <th>Term</th>
                            </thead>
                            <tbody id="creditList">

                            </tbody>
                        </table>

                     </div>
                
                       

                    </div>
                
            


        );
    }
}

export default CreditInfo;