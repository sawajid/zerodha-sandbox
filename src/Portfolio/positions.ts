export const GETPositions = (request: any, response: any) => {
    response.status(200).jsonp({
        "status": "success",
        "data": {
          "net": [{
            "tradingsymbol": "NIFTY15DEC9500CE",
            "exchange": "NFO",
            "instrument_token": 41453,
            "product": "NRML",
      
            "quantity": -100,
            "overnight_quantity": -100,
            "multiplier": 1,
      
            "average_price": 3.475,
            "close_price": 0.75,
            "last_price": 0.75,
            "value": 75.0,
            "pnl": 272.5,
            "m2m": 0.0,
            "unrealised": 0.0,
            "realised": 0.0,
      
            "buy_quantity": 0,
            "buy_price": 0,
            "buy_value": 0.0,
            "buy_m2m": 0.0,
      
            "day_buy_quantity": 0,
            "day_buy_price": 0,
            "day_buy_value": 0.0,
      
            "day_sell_quantity": 0,
            "day_sell_price": 0,
            "day_sell_value": 0.0,
      
            "sell_quantity": 100,
            "sell_price": 3.475,
            "sell_value": 347.5,
            "sell_m2m": 75.0
          }],
          "day": []
        }
      });
}

export const PUTPositions = (request: any, response: any) => {
    response.status(200).jsonp({
        "COLLABORATION-NEEDED": "Please contibute the request body handling logic https://github.com/nordible/zerodha-sandbox/pulls",
        "status": "success",
        "data": true
      });
}
