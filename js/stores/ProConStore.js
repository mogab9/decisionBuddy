
var AppDispatcher= require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    AppConstants = require('../constants/AppConstants'),
    assign       = require('object-assign'),
    CHANGE_EVENT = 'change',
    _data        = {
      pros: [],
      cons: []
    };

/**
 * Update ProConStore data.
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 */
function update(updates) {
    _data = assign({}, _data, updates);
}

var ProConStore = assign({}, EventEmitter.prototype, {

    /**
    * Get the pros and cons list
    * @return {object} containing a list of pros and cons
    */
    getAll: function() {
        return _data;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
    * @param {function} callback
    */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
    * @param {function} callback
    */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    /**
    * @param {string} a pro
    */
    addPro: function(text) {
        _data.pros.push({
            id  : 'pro_'+_data.pros.length,
            text: text
        });
    },

    /**
    * @param {string} a con
    */
    addCon: function(text) {
        _data.cons.push({
            id  : 'con_'+_data.cons.length,
            text: text
        });
    }

});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case AppConstants.PROCONLIST_ADDPRO:
            ProConStore.addPro({text: action.text});
            ProConStore.emitChange();
            break;

        case AppConstants.PROCONLIST_ADDCON:
            ProConStore.addCon({text: action.text});
            ProConStore.emitChange();
            break;

        default:
          // no op
  }
});

module.exports = ProConStore;
