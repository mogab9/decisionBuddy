
var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants  = require('../constants/AppConstants');

var ProConActions = {
    addPro: function(text) {
        AppDispatcher.dispatch({
            actionType : AppConstants.PROCONLIST_ADDPRO,
            text       : text
        });
    },
    addCon: function(text) {
        AppDispatcher.dispatch({
            actionType : AppConstants.PROCONLIST_ADDCON,
            text       : text
        });
    },
    rate: function(id, rate) {
        AppDispatcher.dispatch({
            actionType : AppConstants.PROCONLIST_RATE,
            id         : id,
            rate       : rate
        });
    },
};

module.exports = ProConActions;
