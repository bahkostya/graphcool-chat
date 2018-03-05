import * as React from 'react';
import Textarea from 'react-textarea-autosize';

import './InputControls.css';

interface Props {
    onHeightChange(): void;
}

class InputControls extends React.Component<Props> {
    render() {
        return (
            <div className="input-controls">
                <Textarea
                    className="input-controls__text-area"
                    minRows={1}
                    maxRows={6}
                    onHeightChange={this.props.onHeightChange}
                />
                <button className="input-controls__button" />
            </div>
        );
    }
}

export default InputControls;
