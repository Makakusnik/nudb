import type { Key } from '@type/keys';
import type { KeyboardEvent } from 'react';

interface KeyboardEventCombo {
  keys: Key | Key[];
  handler: (e?: KeyboardEvent) => void;
}

type EventReturn = (e: KeyboardEvent) => void;

export const keyboardEventHandler = (data: KeyboardEventCombo | KeyboardEventCombo[]): EventReturn => {
  return (e) => {
    // Data is array
    if (Array.isArray(data)) {
      data.forEach(({ keys, handler }) => {
        // Multiple keys
        if (Array.isArray(keys)) {
          keys.forEach((key) => {
            if (key === e.key) {
              handler(e);
            }
          });
        } else {
          // Single key
          if (keys === e.key) {
            handler(e);
          }
        }
      });
    }
    // Data is single object
    else {
      // Multiple keys
      if (Array.isArray(data.keys)) {
        data.keys.forEach((key) => {
          if (key === e.key) {
            data.handler(e);
          }
        });
      } else {
        // Single key
        if (data.keys === e.key) {
          data.handler(e);
        }
      }
    }
  };
};
