module.exports = function (xs, f) {
    return xs.reduce(function (max, x) {
        return f(x) > f(max) ? x : max;
    });
};