import {ErrorComponent} from "_components/ErrorComponent";
import LazyLoadComponent from "_components/LazyLoadComponent";
import {LoadingComponent} from "_components/LoadingComponent";
declare const System: { import: (path: string) => Promise<any>; };

const EarlyAccessBlock = process.env.BROWSER &&
   LazyLoadComponent(() => System.import("./EarlyAccessBlock"), LoadingComponent, ErrorComponent) ||
   require("./EarlyAccessBlock").default;

const EarlyModalBlock = process.env.BROWSER &&
   LazyLoadComponent(() => System.import("./EarlyModalBlock"), LoadingComponent, ErrorComponent) ||
   require("./EarlyModalBlock").default;

const FeaturesBlock = process.env.BROWSER &&
   LazyLoadComponent(() => System.import("./FeaturesBlock"), LoadingComponent, ErrorComponent) ||
   require("./FeaturesBlock").default;

const FooterBlock = process.env.BROWSER &&
   LazyLoadComponent(() => System.import("./FooterBlock"), LoadingComponent, ErrorComponent) ||
   require("./FooterBlock").default;

const HeaderBlock = process.env.BROWSER &&
   LazyLoadComponent(() => System.import("./HeaderBlock"), LoadingComponent, ErrorComponent) ||
   require("./HeaderBlock").default;

const HomeAboutBlock = process.env.BROWSER &&
   LazyLoadComponent(() => System.import("./HomeAboutBlock"), LoadingComponent, ErrorComponent) ||
   require("./HomeAboutBlock").default;

export {
    EarlyAccessBlock,
    EarlyModalBlock,
    FeaturesBlock,
    FooterBlock,
    HeaderBlock,
    HomeAboutBlock,
};
