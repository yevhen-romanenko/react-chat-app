import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from './actions';
import { updateMessage } from '../chat/actions';
import TextInput from '../shared/inputs/text/TextInput';
import messageFormConfig from '../shared/config/messageFormConfig';
import PropTypes from 'prop-types';

import defaultMessageConfig from '../shared/config/defaultMessageConfig';

class MessageEditor extends Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultMessageData();
        this.onCancel = this.onCancel.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onChangeData = this.onChangeData.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.fetchMessage(this.props.match.params.id)
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.messageData.id !== prevState.id && nextProps.match.params.id) {
            return {
                ...nextProps.messageData
            };
        } else {
            return null;
        }
    }

    onCancel() {
        this.setState(this.getDefaultMessageData());
        this.props.history.push('/chat');
    }

    onSave() {
        if (this.state.id) {
            this.props.updateMessage(this.state.id, this.state);
        } 
       
        this.setState(this.getDefaultMessageData());
        this.props.history.push('/chat');
    }

    onChangeData(e, keyword) {
        const value = e.target.value;
        this.setState(
            {
                ...this.state,
                [keyword]: value
            }
        );
    }

    getDefaultUserData() {
        return {
            ...defaultMessageConfig
        };
    }

    getInput(data, { label, type, keyword }, index) {
        switch (type) {
            case 'message':
                return (
                    <TextInput
                        key={index}
                        label={label}
                        type={type}
                        text={data}
                        keyword={keyword}
                        onChange={this.onChangeData}
                    />
                );
            default:
                return null;
        }
    }
    render() {
        const data = this.state;

        return (
            <div className="modal" style={{ display: "block" }} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ padding: "5px" }}>
                        <div className="modal-header">
                            <h5 className="modal-title">Edit message</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onCancel}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        {
                                messageFormConfig.map((item, index) => this.getInput(data, item, index))
                        }
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={this.onCancel}>Cancel</button>
                            <button className="btn btn-primary" onClick={this.onSave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

MessageEditor.propTypes = {
    messageData: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        messageData: state.MessageEditor.messageData
    }
};

const mapDispatchToProps = {
    ...actions,
    updateMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageEditor);
