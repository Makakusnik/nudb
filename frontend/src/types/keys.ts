type NumericKeypadKeys =
  | 'Decimal'
  | 'Key11'
  | 'Key12'
  | 'Multiply'
  | 'Add'
  | 'Clear'
  | 'Divide'
  | 'Subtract'
  | 'Separator'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9';
type UpperAlpha =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';
type LowerAlpha =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z';
type ModifierKeys =
  | 'Alt'
  | 'AltGraph'
  | 'CapsLock'
  | 'Control'
  | 'Fn'
  | 'FnLock'
  | 'Hyper'
  | 'Meta'
  | 'NumLock'
  | 'ScrollLock'
  | 'Shift'
  | 'Super'
  | 'Symbol'
  | 'SymbolLock';
type WhitespaceKeys = 'Enter' | 'Tab' | ' ';
type NavigationKeys = 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'End' | 'Home' | 'PageDown' | 'PageUp';
type EditingKeys =
  | 'Backspace'
  | 'Clear'
  | 'Copy'
  | 'CrSel'
  | 'Cut'
  | 'Delete'
  | 'EraseEof'
  | 'ExSel'
  | 'Insert'
  | 'Paste'
  | 'Redo'
  | 'Undo';
type UIKeys =
  | 'Accept'
  | 'Again'
  | 'Attn'
  | 'Cancel'
  | 'ContextMenu'
  | 'Escape'
  | 'Execute'
  | 'Find'
  | 'Finish'
  | 'Help'
  | 'Pause'
  | 'Play'
  | 'Props'
  | 'Select'
  | 'ZoomIn'
  | 'ZoomOut';
type DeviceKeys =
  | 'BrightnessDown'
  | 'BrightnessUp'
  | 'Eject'
  | 'LogOff'
  | 'Power'
  | 'PowerOff'
  | 'PrintScreen'
  | 'Hibernate'
  | 'Standby'
  | 'WakeUp';
type IMECompositionKeys =
  | 'AllCandidates'
  | 'Alphanumeric'
  | 'CodeInput'
  | 'Compose'
  | 'Convert'
  | 'Dead'
  | 'FinalMode'
  | 'GroupFirst'
  | 'GroupLast'
  | 'GroupNext'
  | 'GroupPrevious'
  | 'ModeChange'
  | 'NextCandidate'
  | 'NonConvert'
  | 'PreviousCandidate'
  | 'Process'
  | 'SingleCandidate';
type LinuxDeadKeys =
  | 'GDK_KEY_dead_grave'
  | 'GDK_KEY_dead_acute'
  | 'GDK_KEY_dead_circumflex'
  | 'GDK_KEY_dead_tilde'
  | 'GDK_KEY_dead_perispomeni'
  | 'GDK_KEY_dead_macron'
  | 'GDK_KEY_dead_breve'
  | 'GDK_KEY_dead_abovedot'
  | 'GDK_KEY_dead_diaeresis'
  | 'GDK_KEY_dead_abovering'
  | 'GDK_KEY_dead_doubleacute'
  | 'GDK_KEY_dead_caron'
  | 'GDK_KEY_dead_cedilla'
  | 'GDK_KEY_dead_ogonek'
  | 'GDK_KEY_dead_iota'
  | 'GDK_KEY_dead_voiced_sound'
  | 'GDK_KEY_dead_semivoiced_sound'
  | 'GDK_KEY_dead_belowdot'
  | 'GDK_KEY_dead_hook'
  | 'GDK_KEY_dead_horn'
  | 'GDK_KEY_dead_stroke'
  | 'GDK_KEY_dead_abovecomma'
  | 'GDK_KEY_dead_psili'
  | 'GDK_KEY_dead_abovereversedcomma'
  | 'GDK_KEY_dead_dasia'
  | 'GDK_KEY_dead_doublegrave'
  | 'GDK_KEY_dead_belowring'
  | 'GDK_KEY_dead_belowmacron'
  | 'GDK_KEY_dead_belowcircumflex'
  | 'GDK_KEY_dead_belowtilde'
  | 'GDK_KEY_dead_belowbreve'
  | 'GDK_KEY_dead_belowdiaeresis'
  | 'GDK_KEY_dead_invertedbreve'
  | 'GDK_KEY_dead_belowcomma'
  | 'GDK_KEY_dead_currency'
  | 'GDK_KEY_dead_a'
  | 'GDK_KEY_dead_A'
  | 'GDK_KEY_dead_e'
  | 'GDK_KEY_dead_E'
  | 'GDK_KEY_dead_i'
  | 'GDK_KEY_dead_I'
  | 'GDK_KEY_dead_o'
  | 'GDK_KEY_dead_O'
  | 'GDK_KEY_dead_u'
  | 'GDK_KEY_dead_U'
  | 'GDK_KEY_dead_small_schwa'
  | 'GDK_KEY_dead_capital_schwa'
  | 'GDK_KEY_dead_greek';
type FunctionKeys =
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12'
  | 'F13'
  | 'F14'
  | 'F15'
  | 'F16'
  | 'F17'
  | 'F18'
  | 'F19'
  | 'F20'
  | 'Soft1'
  | 'Soft2'
  | 'Soft3'
  | 'Soft4';

export type Key =
  | ModifierKeys
  | WhitespaceKeys
  | NavigationKeys
  | EditingKeys
  | UIKeys
  | DeviceKeys
  | IMECompositionKeys
  | LinuxDeadKeys
  | FunctionKeys
  | NumericKeypadKeys
  | UpperAlpha
  | LowerAlpha;