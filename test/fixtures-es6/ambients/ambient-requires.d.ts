
// As generated by dts-bundle

declare module 'exposed-ambient' {
    import {someInternalNumber} from "internal-ambient";
    export default someInternalNumber;
}

declare module 'internal-ambient' {
    export var someInternalNumber: number;
}