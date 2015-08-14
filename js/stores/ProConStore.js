
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

    getNextUnmarkedProCon: function() {
        // check there is at least one pro and one con
        if (_data.cons.length == 0 && _data.pros.length == 0)
            return false;
        // find next unrated proConObject
        for (var key in _data) {
            var result = _data[key].map(function(proConObject) {
                if (proConObject.rate == undefined)
                    return proConObject;
            });
            if (typeof result === 'object')
                return result[0];
        }
        // no more item to rate
        return true;
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
            type: 'pro',
            text: text,
            rate: undefined
        });
    },

    /**
    * @param {string} a con
    */
    addCon: function(text) {
        _data.cons.push({
            id  : 'con_'+_data.cons.length,
            type: 'con',
            text: text,
            rate: undefined
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
