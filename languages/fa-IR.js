/*!
 * numbro.js language configuration
 * language : Farsi Iran
 * author : neo13 : https://github.com/neo13
 */
(function () {
    var language = {
        delimiters: {
            thousands: '،',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'هزار',
            million: 'میلیون',
            billion: 'میلیارد',
            trillion: 'تریلیون'
        },
        ordinal: function (number) {
            return 'ام';
        },
        currency: {
            symbol: '﷼'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('fa-IR', language);
    }
}());
