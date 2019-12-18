type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">

export type PinFieldDefaultProps = {
  className: string
  length: number
  validate: string | string[] | RegExp | ((key: string) => boolean)
  format: (char: string) => string
  onResolveKey: (key: string, ref?: HTMLInputElement) => any
  onRejectKey: (key: string, ref?: HTMLInputElement) => any
  onChange: (code: string) => void
  onComplete: (code: string) => void
  style: React.CSSProperties
}

export type PinFieldProps = Partial<PinFieldDefaultProps> & InputProps

export type PinFieldState = {
  focusIdx: number
  codeCompleted: boolean
  codeLength: PinFieldDefaultProps["length"]
  isKeyAllowed: (key: string) => boolean
}

export type PinFieldAction =
  | {type: "handle-key-down"; key: string}
  | {type: "handle-paste"; val: string}
  | {type: "focus-input"; idx: number}
  | {type: "mark-code-as-completed"}

export type PinFieldEffect =
  | {type: "focus-input"; idx: number}
  | {type: "set-input-val"; idx: number; val: string}
  | {type: "resolve-key"; idx: number; key: string}
  | {type: "reject-key"; idx: number; key: string}
  | {type: "handle-code-change"}
