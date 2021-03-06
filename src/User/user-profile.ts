export const GETUserProfile = (request: any, response: any) => {

    response.status(200).jsonp({
        "status": "success",
        "data": {
            "user_type": "investor",
            "email": "kite@kite.trade",
            "user_name": "Kite Connect",
            "user_shortname": "Kite",
            "broker": "ZERODHA",
            "exchanges": [
                "MCX",
                "BSE",
                "NSE",
                "BFO",
                "NFO",
                "CDS"
            ],
            "products": [
                "BO",
                "CNC",
                "CO",
                "MIS",
                "NRML"
            ],
            "order_types": [
                "LIMIT",
                "MARKET",
                "SL",
                "SL-M"
            ]
        }
    });
}