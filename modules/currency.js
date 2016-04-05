// Converts numbers into currency string
function formatAsCurrency(input) {
	return input.toLocaleString('en-US', {style: 'currency', currency: 'USD', currencyDisplay: 'symbol'});
}

module.exports = formatAsCurrency;
