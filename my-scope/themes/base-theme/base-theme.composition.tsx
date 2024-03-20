// @ts-nocheck
import React from 'react';
import { baseTheme } from './base-theme';

export function Spaces() {
  return (
    <div>
      Spaces:{'  '}
      {baseTheme.space.map((space, index) => (
        <span style={{ marginRight: space }} key={index}>
          {space}px
        </span>
      ))}
    </div>
  );
}

export function FontSizes() {
  return (
    <div>
      Font sizes:{'  '}
      {baseTheme.fontSizes.map((fontSize, index) => (
        <span style={{ fontSize }} key={index}>
          {fontSize}px{' '}
        </span>
      ))}
    </div>
  );
}

export function fontWeights() {
  return (
    <div>
      Font weights:{'  '}
      {baseTheme.fontWeights.map((fontWeight, index) => (
        <span style={{ fontWeight }} key={index}>
          {fontWeight}{' '}
        </span>
      ))}
    </div>
  );
}

export function LineHeights() {
  return (
    <div>
      Line heights:{'  '}
      {baseTheme.lineHeights.map((lineHeight, index) => (
        <div style={{ lineHeight }} key={index}>
          This is {lineHeight} line height
        </div>
      ))}
    </div>
  );
}

export function Borders() {
  return (
    <div>
      Borders:{'  '}
      {baseTheme.borders.map((border, index) => (
        <div
          style={{ border, padding: '10px', marginBottom: '8px' }}
          key={index}
        >
          {border}
        </div>
      ))}
    </div>
  );
}

export function Colors() {
  return (
    <div>
      {Object.keys(baseTheme.colors).map((color, index) => {
        if (Array.isArray(baseTheme.colors[color])) {
          return (
            <div
              key={index}
              style={{
                backgroundColor: color === 'whites' ? 'black' : 'white',
              }}
            >
              {color}:
              {baseTheme.colors[color].map((shade: string, index: number) => (
                <span key={index} style={{ backgroundColor: shade }}>
                  {' '}
                  {shade}
                </span>
              ))}
            </div>
          );
        }
        return (
          <div style={{ backgroundColor: baseTheme.colors[color] }}>
            {color}
          </div>
        );
      })}
    </div>
  );
}