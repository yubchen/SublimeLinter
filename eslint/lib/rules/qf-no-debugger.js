/**
 * @fileoverview Rule to flag use of a debugger statement
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {
        "DebuggerStatement": function(node) {
            context.report(node, "qf:Unexpected 'debugger' statement.");
        }
    };

};
