import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

const CursorWrapper = styled.div`
  pointer-events: none;
  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    mix-blend-mode: exclusion;
    z-index: 1000;
    circle {
      fill: ${(props) => props.theme.background};
    }
  }
`;

interface Props {
  $hoverables: React.RefObject<HTMLAnchorElement>[];
}

const Cursor: React.FC<Props> = ({ $hoverables }) => {
  const $bigCursor = useRef<HTMLDivElement>(null);
  const $smallCursor = useRef<HTMLDivElement>(null);
  const isMouseOnScreen = useRef(false);

  useEffect(() => {
    document.body.addEventListener('mousemove', (e) => {
      if (
        !isMouseOnScreen.current &&
        $bigCursor.current?.style &&
        $smallCursor.current?.style
      ) {
        $bigCursor.current.style.opacity = '1';
        $smallCursor.current.style.opacity = '1';
        isMouseOnScreen.current = true;
      }
      gsap.to($bigCursor.current, 0.45, {
        x: e.pageX - 15,
        y: e.pageY - 15,
      });
      gsap.to($smallCursor.current, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 12,
      });
    });

    document.body.addEventListener('mouseleave', () => {
      isMouseOnScreen.current = false;
      if ($bigCursor.current?.style && $smallCursor.current?.style) {
        $bigCursor.current.style.opacity = '0';
        $smallCursor.current.style.opacity = '0';
      }
    });

    $hoverables.forEach(($hoverable) => {
      $hoverable.current?.addEventListener('mouseenter', () => {
        gsap.to($bigCursor.current, 0.2, {
          scale: 3,
        });
      });
      $hoverable.current?.addEventListener('mouseleave', () => {
        gsap.to($bigCursor.current, 0.2, {
          scale: 1,
        });
      });
    });
  }, [$hoverables]);

  return (
    <CursorWrapper>
      <div ref={$bigCursor} className="cursor">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>

      <div ref={$smallCursor} className="cursor">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </CursorWrapper>
  );
};

export default Cursor;
