declare module '*.scss' {
  const content: { readonly [className: string]: string };
  export default content;
}

declare module '*.d.yml' {
  const content: {
    readonly en: {
      [dictKey: string]: string;
    };
  };
  export default content;
}

declare module '*.d.yaml' {
  const content: {
    readonly en: {
      [dictKey: string]: string;
    };
  };
  export default content;
}

declare module '*changes.yml' {
  const content: object;
  export default content;
}
