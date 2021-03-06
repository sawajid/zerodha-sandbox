export const GETUserMarginSegments = (request: any, response: any) => {
    response.status(200).jsonp({
        "COLLABORATION-NEEDED": "Please contibute the segment handling logic https://github.com/nordible/zerodha-sandbox/pulls",
        "status": "success",
        "data": {
            "equity": {
                "enabled": true,
                "net": 24966.7493,
                "available": {
                    "adhoc_margin": 0,
                    "cash": 25000,
                    "collateral": 0,
                    "intraday_payin": 0
                },
                "utilised": {
                    "debits": 33.2507,
                    "exposure": 0,
                    "m2m_realised": -0.25,
                    "m2m_unrealised": 0,
                    "option_premium": 0,
                    "payout": 0,
                    "span": 0,
                    "holding_sales": 0,
                    "turnover": 0
                }
            },
            "commodity": {
                "enabled": true,
                "net": 25000,
                "available": {
                    "adhoc_margin": 0,
                    "cash": 25000,
                    "collateral": 0,
                    "intraday_payin": 0
                },
                "utilised": {
                    "debits": 0,
                    "exposure": 0,
                    "m2m_realised": 0,
                    "m2m_unrealised": 0,
                    "option_premium": 0,
                    "payout": 0,
                    "span": 0,
                    "holding_sales": 0,
                    "turnover": 0
                }
            }
        }
    }
    );
}