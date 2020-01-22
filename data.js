plays = {
  "hamlet": { "name": "Hamlet", "type": "tragedy" },
  "aslike":
    { "name": "As You Like It", "type": "comedy" },
  "othello": { "name": "Othello", "type": "tragedy" }
}

invoices = [
  {
    "customer": "BigCo",
    "performances": [
      {
        "playID": "hamlet",
        "audience": 55
      },
      {
        "playID": "aslike",
        "audience": 35
      },
      {
        "playID": "othello",
        "audience": 40
      }
    ]
  }
]

module.exports.invoices = invoices;
module.exports.plays = plays;