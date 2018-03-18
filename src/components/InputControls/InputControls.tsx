import * as React from 'react';
import Textarea from 'react-textarea-autosize';
import { graphql, MutationFunc } from 'react-apollo';

import createMessage from '../../graphql/createMessage.graphql';
import './InputControls.css';
import { CreateMessageMutationVariables, CreateMessageMutation } from '../../types/gql';

interface OwnProps {
    userId: string;
    onHeightChange(height: number): void;
}

interface MappedProps {
    createMessage: MutationFunc<CreateMessageMutation, CreateMessageMutationVariables>;
}

type Props = OwnProps & MappedProps;

class InputControls extends React.Component<Props> {
    state = {
        text: '',
    };

    handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        this.setState({
            text: e.currentTarget.value,
        });
    };

    handleKeyPress = e => {
        if (e.keyCode === 13 && !e.shiftKey) {
            this.handleSubmit();
        }
    };

    handleSubmit = async () => {
        if (!this.state.text.trim()) {
            return;
        }

        await this.props.createMessage({
            variables: {
                authorId: this.props.userId,
                text: this.state.text,
            },
        });

        this.setState({
            text: '',
        });
    };

    render() {
        return (
            <div className="input-controls" onKeyDown={this.handleKeyPress}>
                <Textarea
                    className="input-controls__text-area"
                    minRows={1}
                    maxRows={6}
                    value={this.state.text}
                    onChange={this.handleChange}
                    onHeightChange={this.props.onHeightChange}
                />
                <button className="input-controls__button" onClick={this.handleSubmit} />
            </div>
        );
    }
}

export default graphql<Props, OwnProps>(createMessage, { name: 'createMessage' })(InputControls);
