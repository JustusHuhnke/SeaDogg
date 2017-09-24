import {component} from "_style";
import * as React from "react";
import * as Modal from "react-modal";
import {IEarlyModal} from "./interface";

const overlayStyle = {
    base: component.modal__overlay,
};
const ModalBlock = process.env.BROWSER && ((Modal as any).default || Modal);

export class EarlyModalBlock extends React.Component<IEarlyModal | any, {}> {

    public static defaultProps: IEarlyModal = {
        open: false,
    };

    public render() {
        const {open, ...otherProps} = this.props;
        return ModalBlock && (
            <div>
                <ModalBlock
                    isOpen={open}
                    contentLabel="Modal"
                    overlayClassName={overlayStyle}
                    {...otherProps}
                >
                    <h1>Get Early Access</h1>
                    <p>Your name</p>
                    <p>Role</p>
                    <p>Email</p>
                    <p>Phone</p>
                </ModalBlock>
            </div>
        );
    }
}

export default EarlyModalBlock;
