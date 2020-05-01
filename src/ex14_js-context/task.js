"use strict"

function polyBind(func, context) {
    let props = Array.prototype.slice.call(arguments, 2);
    return (
        function () {
            return func.apply(context, props.concat(Array.prototype.slice.call(arguments)));
        }
    );
}