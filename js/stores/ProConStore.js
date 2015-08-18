
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
            // list all unrated element in this list (pro or con)
            var result = _data[key].map(function(proConObject) {
                if (proConObject.rate == undefined)
                    return proConObject;
            });
            // return next unrated element
            for (var index in result) {
                if (typeof result[index] === 'object')
                    return result[index];
            }
        }
        // no more item to rate
        return true;
    },

    /**
    * @return {object} containing pros, cons, proPct, conPct as keys
    */
    getResult: function() {
        var rate = [];
        // check all pro and con have been rated
        if (this.getNextUnmarkedProCon() !== true)
            return this.error("All pro and con have not yet been rated.");
        // calculate result
        for (var key in _data) {
            rate[key] = 0;
            for (var index in _data[key])
                rate[key] += _data[key][index].rate;
        }
        // add proPct and conPct
        rate.proPct = (rate.pros / (rate.pros + rate.cons)).toFixed(2) * 100;
        rate.conPct = 100 - rate.proPct;
        return rate;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    error: function(msg) {
        return { error: msg }
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
    },

    /**
    * @param {string} a pro id or a con id (i.e pro_2)
    * @param {string} a mark given to rate this pro/con
    */
    rate: function(id, rate) {
        for(var index in _data) {
            _data[index].map(function(proCon, arrayIndex) {
                if (id === proCon.id) {
                    _data[index][arrayIndex].rate = rate;
                }
            });
        }
    },

});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case AppConstants.PROCONLIST_ADDPRO:
            ProConStore.addPro(action.text);
            ProConStore.emitChange();
            break;

        case AppConstants.PROCONLIST_ADDCON:
            ProConStore.addCon(action.text);
            ProConStore.emitChange();
            break;

        case AppConstants.PROCONLIST_RATE:
            ProConStore.rate(action.id, action.rate);
            ProConStore.emitChange();
            break;

        default:
          // no op
  }
});

module.exports = ProConStore;
