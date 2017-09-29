import {component} from "_style";
import classnames from "_utils/classnames";
import request from "_utils/xhr";
import * as React from "react";
import {IIconComponent} from "./interface";

export class IconComponent extends React.PureComponent<IIconComponent, {}> {

    public static defaultProps: IIconComponent = {
        className: component.icon,
        name: null,
        spriteName: "sprite",
        viewBox: "0 0 24 24",
    };

    public async componentDidMount() {
        try {
            if (process.env.BROWSER) {
                const svgContainer = document.getElementById("svgContainer");
                const {spriteName} = this.props;
                if (svgContainer !== null && !svgContainer.children.length) {
                    svgContainer.innerHTML = "<p></p>";
                    const result = await request({url: `/${spriteName}.svg`});
                    svgContainer.innerHTML = result;
                }
            }
        } catch (err) {
            console.error(err);
        }
    }

    public render() {

        const {name, viewBox, className, spriteName, ...otherProps} = this.props;
        const classes = classnames(component.icon, className);

        return !!name && (
            <span className={classes} {...otherProps}>
                <svg viewBox={viewBox}>
                    <use xlinkHref={`#${name}`}/>
                </svg>
            </span>
        );
    }
}

export default IconComponent;
