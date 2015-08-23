var React        = require('react'),
    mui          = require('material-ui'),
    MixinMui     = require('./MixinMui.react'),
    Card         = mui.Card,
    CardText     = mui.CardText,
    List         = mui.List,
    ListItem     = mui.ListItem;
    Dialog       = mui.Dialog;

var Menu = React.createClass({

    displayName: 'Menu',
    mixins:      [MixinMui],

    _handleStartAllOverAgain: function() {
        document.location.reload(true);
    },
    _handleOpenDialogStartAllOverAgain: function() {
        this.refs.startOverAgain.show();
    },
    _handleCloseDialogStartAllOverAgain: function() {
        this.refs.startOverAgain.dismiss();
    },
    _handleOpenDialogAbout: function() {
        this.refs.about.show();
    },
    _handleCloseDialogAbout: function() {
        this.refs.about.dismiss();
    },

    render: function () {
        var dialogStartAllOverActions = [
            { text: 'Back', onClick: this._handleCloseDialogStartAllOverAgain},
            { text: 'Delete', onClick: this._handleStartAllOverAgain }
        ];
        var dialogAboutActions = [
            { text: 'Ok', onClick: this._handleCloseDialogAbout},
        ];
        return (
            <Card initiallyExpanded={true}>
                <CardText>
                <div>
                    <div className="center">
                        <i className="fa fa-bars"></i>
                    </div>
                    <List className="menuItemList">
                        <ListItem
                            className   = "center"
                            primaryText = "start all over again"
                            onClick     = {this._handleOpenDialogStartAllOverAgain}
                        />
                        <Dialog
                            ref     = "startOverAgain"
                            title   = "Start over again?"
                            actions = {dialogStartAllOverActions}
                            modal   = {false}
                        >
                        It will erase the current decision, are you sure?
                        </Dialog>
                        <ListItem
                            className   = "center"
                            primaryText = "about"
                            onClick     = {this._handleOpenDialogAbout}
                        />
                        <Dialog
                            ref     = "about"
                            title   = "About"
                            actions = {dialogAboutActions}
                            modal   = {false}
                            autoDetectWindowHeight={true}
                            autoScrollBodyContent={true}
                        >
                        This app was inspired by a <a href="http://time.com/3772262/billionaire-trick-for-decisions" target="_blank">Time article about a billionaire's trick for decisions</a>.<br/><br/>
                        At first it seems like a simple pro-and-con list.<br/>
                        However after you fill all pro-and-con you give a score by importance for each item.<br/><br/>

                        Add up the score (this app does it for you) and here's the rule:<br/><br/>
                        <strong>The positive score must be at least twice the negative score</strong> to validate your decision.<br/>
                        If positive score is between half and twice the negative score the result is mixed, you may do it but think twice before.<br/>
                        </Dialog>
                    </List>
                </div>
                </CardText>
            </Card>
        )
    }
});

module.exports = Menu;
