import { CSSProperties } from "react";

type NamedStyles<T> = { [P in keyof T]: CSSProperties };

export default class StyleSheet {
  public static create<T extends NamedStyles<T> | NamedStyles<any>>(
    styles: T | NamedStyles<T>
  ): T;

  public static create(style: NamedStyles<any>) {
    return style;
  }
}
