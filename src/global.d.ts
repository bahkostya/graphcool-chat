interface WindowInterface extends Window {
    fbAsyncInit(): void;
}

declare module '*.graphql' {
    const content: any;
    export default content;
}
