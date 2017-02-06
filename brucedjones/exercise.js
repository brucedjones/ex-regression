var exercise = {};

exercise.linearRegression = function(x, y) {

    // YOUR CODE
    // least squares method

    var n = x.length;
    var sxy = 0;
    var sx = 0;
    var sy = 0;
    var sxx = 0;

    for(var i = 0; i<n; i++)
    {
        sxy += x[i]*y[i];
        sx+= x[i];
        sy += y[i];
        sxx += x[i]*x[i];
    }

    var m = (sxy-(sx*sy/n))/(sxx-sx*sx/n)

    exercise.linearRegression.m = function() {
        return m;
    };

    // YOUR CODE
    var b = (sy-exercise.linearRegression.m()*sx)/n

    exercise.linearRegression.b = function() {
        return b;
    };

    //should return a function
    return (x)=>{return exercise.linearRegression.b()+exercise.linearRegression.m()*x};


};

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

exercise.run = function() {
    var x = [];
    var y = [];
    var lr = [];
    var length = 10;

    // get random points
    for (var i = 0; i < length; i++) {
        x[i] = getRandomNumber();
        y[i] = getRandomNumber();
    }

    // get linear regression equation
    lr = exercise.linearRegression(x, y);
    graph(x, y, lr);
};

module.exports = exercise;