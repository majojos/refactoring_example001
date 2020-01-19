const assert = require('assert');
let example001 = require('../example001');

describe('Simple: ', function () {
        it('statement should return formatted invoice for BigCo', function () {
                let expected = 'Statement for BigCo\n Hamlet: US$\u00A0650.00 (55 seats)\n As You Like It: US$\u00A0580.00 (35 seats)\n Othello: US$\u00A0500.00 (40 seats)\nAmount owed is US$\u00A01,730.00\nYou earned 47 credits\n';
                let actual = example001.statement(example001.invoices[0], example001.plays);
                assert(expected === actual);
        });
});