import { useEffect, useRef } from 'react';

import anime from 'animejs/lib/anime.es';

import LinkWithQuery from '../../../shared/ui/LinkWithQuery.tsx';

function Logo() {
  const popCornRef = useRef<HTMLSpanElement>(null);
  const lettersWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = anime.timeline({});
    anime.set('.dot', { translateY: 250 });

    tl.add({
      targets: '[data-animation="letter"]',
      transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
      translateY: [
        {
          value: [200, -30],
          duration: 300,
          easing: 'cubicBezier(0.225, 1, 0.915, 0.980)',
          endDelay: 20,
        },
        { value: 0, duration: 120, easing: 'easeInQuad' },
      ],
      scaleX: [
        { value: [0, 0.8], duration: 190, easing: 'easeInQuad' },
        { value: 0.8, duration: 300, easing: 'easeInQuad' },
        { value: 1.1, duration: 90, easing: 'easeOutQuad' },
        { value: 0.95, duration: 120, easing: 'easeOutCirc' },
        { value: 1, duration: 100, easing: 'easeOutCirc' },
      ],
      scaleY: [
        { value: [0.2, 1.3], duration: 200, easing: 'easeInSine' },
        { value: 0.7, duration: 440, easing: 'easeOutQuad' },
        { value: 1.2, duration: 100, easing: 'easeOutCirc' },
        { value: 1, duration: 100, easing: 'easeOutCirc' },
      ],
      translateZ: 0,
      delay: anime.stagger(120, { easing: 'easeInCirc' }),
    })
      .add(
        {
          targets: '.dot',
          transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
          translateY: [
            { value: -40, duration: 600, easing: 'easeOutCubic' },
            { value: 0, duration: 1000, easing: 'easeOutElastic(1, .3)' },
          ],
          scaleY: [
            { value: 5, duration: 300, easing: 'easeOutCubic' },
            { value: 0.8, duration: 300, easing: 'easeInCubic' },
            { value: 3, duration: 100, easing: 'easeOutCirc' },
            { value: 0.6, duration: 100, easing: 'easeOutCirc' },
            { value: 1, duration: 1000, easing: 'easeOutElastic' },
          ],
          scaleX: [
            { value: 0.5, duration: 300, easing: 'easeOutCirc' },
            { value: 1.2, duration: 300, easing: 'easeInCirc' },
            { value: 0.5, duration: 100, easing: 'easeOutCirc' },
            { value: 1.2, duration: 100, easing: 'easeInCirc' },
            { value: 1, duration: 1200, easing: 'easeOutElastic' },
          ],
          opacity: [{ value: [0, 1], duration: 600, easing: 'linear' }],
          easing: 'easeInCirc',
          delay: anime.stagger(200),
        },
        600,
      )
      .add(
        {
          targets: '.letter-i',
          transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
          scaleY: [
            { value: 0.4, duration: 120, easing: 'easeOutCirc' },
            { value: 1, duration: 120, easing: 'easeOutCirc' },
          ],
          scaleX: [
            { value: 1.4, duration: 100, easing: 'easeOutCirc' },
            { value: 1, duration: 300, easing: 'easeOutCirc' },
          ],
          delay: anime.stagger(200),
        },
        '-=1470',
      )
      .add(
        {
          targets: popCornRef.current,
          opacity: [0, 1],
          transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
          translateY: [
            { value: [-250, 0], duration: 120, easing: 'easeInCubic' },
          ],
          scaleX: [
            { value: [0, 0.8], duration: 120, easing: 'easeInQuad' },
            { value: 2, duration: 150, easing: 'easeOutQuad' },
            { value: 1, duration: 120, easing: 'easeInQuad' },
            { value: 0.9, duration: 120, easing: 'easeOutQuad' },
            { value: 1, duration: 700, easing: 'easeOutElastic' },
          ],
          scaleY: [
            { value: 3, duration: 120, easing: 'easeInQuad' },
            { value: 0.4, duration: 150, easing: 'easeOutQuad' },
            { value: 1, duration: 120, easing: 'easeInCirc' },
            { value: 1.2, duration: 120, easing: 'easeOutCirc' },
            { value: 1, duration: 700, easing: 'easeOutElastic' },
          ],
          translateZ: 0,
        },
        '-=600',
      )
      .add(
        {
          targets: '[data-animation="letter"]',
          transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
          translateY: [
            {
              value: -40,
              duration: 170,
              easing: 'cubicBezier(0.225, 1, 0.915, 0.980)',
            },
            { value: 0, duration: 160, easing: 'easeInQuad' },
          ],
          scaleX: [
            { value: 0.8, duration: 360, easing: 'easeOutQuad' },
            { value: 1.4, duration: 80, easing: 'easeOutQuad' },
            { value: 1, duration: 80, easing: 'easeOutQuad' },
          ],
          scaleY: [
            { value: 1.8, duration: 360, easing: 'easeOutQuad' },
            { value: 0.4, duration: 80, easing: 'easeOutQuad' },
            { value: 1, duration: 600, easing: 'easeOutElastic(1, .45)' },
          ],
          translateZ: 0,
          delay: anime.stagger(30),
        },
        '-=930',
      )
      .add(
        {
          targets: '.dot',
          transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
          translateY: [
            { value: -80, duration: 270, easing: 'easeOutQuint' },
            { value: 15, duration: 100, easing: 'easeInQuad' },
            { value: -30, duration: 300, easing: 'easeOutQuad' },
            { value: 12, duration: 140, easing: 'easeInQuad' },
            { value: 0, duration: 1200, easing: 'easeOutElastic(1, 0.3)' },
          ],
          scaleX: [
            { value: 0.8, duration: 240, easing: 'easeOutQuad' },
            { value: 1.4, duration: 220, easing: 'easeInQuint' },
            { value: 0.8, duration: 300, easing: 'easeOutQuad' },
            { value: 1.7, duration: 140, easing: 'easeOutQuad' },
            { value: 1, duration: 80, easing: 'easeInQuad' },
          ],
          scaleY: [
            { value: 4, duration: 240, easing: 'easeOutQuad' },
            { value: 0.8, duration: 220, easing: 'easeInQuint' },
            { value: 3, duration: 300, easing: 'easeOutQuint' },
            { value: 0.5, duration: 140, easing: 'easeOutQuad' },
            { value: 1, duration: 1200, easing: 'easeOutElastic' },
          ],
          delay: anime.stagger(200),
        },
        '-=1250',
      )
      .add(
        {
          targets: '.letter-i',
          transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
          scaleY: [
            { value: 0.6, duration: 120, easing: 'easeOutQuad' },
            { value: 1, duration: 900, easing: 'easeOutElastic(1, 0.3)' },
          ],
          scaleX: [
            { value: 1.4, duration: 120, easing: 'easeOutQuad' },
            { value: 1, duration: 200, easing: 'easeOutQuad' },
          ],
          delay: anime.stagger(200),
        },
        '-=1500',
      );
  }, []);

  return (
    <LinkWithQuery className="mr-auto" to="/">
      <h1 className="flex items-end gap-2 font-quicksand text-3xl font-bold tracking-tighter text-lime-400 lg:text-4xl">
        <span ref={popCornRef}>
          <svg width="27" height="39" viewBox="0 0 27 39">
            <path
              d="M26.3045 12.0734C26.1163 11.8651 25.8974 11.6879 25.6558 11.5483C25.9265 10.4454 25.803 9.28018 25.3074 8.26174C24.8118 7.2433 23.9766 6.43828 22.9516 5.99111C22.7086 4.95884 22.0895 4.05959 21.2199 3.476C20.3503 2.8924 19.2955 2.66822 18.2697 2.84899C17.7952 1.98495 17.1035 1.2655 16.2656 0.764735C15.4278 0.263973 14.4743 0 13.5032 0C12.5321 0 11.5785 0.263973 10.7407 0.764735C9.90293 1.2655 9.21116 1.98495 8.73666 2.84899C7.71088 2.66822 6.65607 2.8924 5.7865 3.476C4.91692 4.05959 4.29777 4.95884 4.05481 5.99111C3.02927 6.43779 2.19343 7.24261 1.69731 8.2611C1.2012 9.27959 1.0773 10.4451 1.34786 11.5483C1.1062 11.6879 0.887333 11.8651 0.699123 12.0734C0.442444 12.3649 0.24895 12.7083 0.13128 13.0813C0.0136095 13.4542 -0.0255905 13.8483 0.0162399 14.2378L2.31619 35.2841C2.42775 36.3057 2.90469 37.2496 3.65582 37.9351C4.40694 38.6207 5.37952 38.9998 6.38754 39H20.6188C21.6271 38.9998 22.5998 38.6204 23.351 37.9346C24.1021 37.2488 24.5789 36.3046 24.6902 35.2827L26.9833 14.2378C27.0257 13.8486 26.9871 13.4547 26.8702 13.0818C26.7532 12.7088 26.5605 12.3652 26.3045 12.0734ZM5.58994 8.40062C5.92796 8.33284 6.22838 8.13731 6.431 7.85319C6.63362 7.56908 6.72347 7.21738 6.68255 6.86856C6.70002 6.62796 6.77847 6.39613 6.91022 6.19575C7.04196 5.99537 7.22249 5.83333 7.43412 5.7255C7.64574 5.61766 7.8812 5.56773 8.11744 5.5806C8.35367 5.59347 8.58258 5.66869 8.78173 5.7989C8.96577 5.91966 9.17556 5.99354 9.39344 6.01435C9.61133 6.03515 9.83092 6.00225 10.0337 5.91843C10.2365 5.83461 10.4166 5.70231 10.5588 5.53269C10.701 5.36306 10.8012 5.16108 10.8509 4.94373C10.9928 4.33368 11.3324 3.79028 11.8147 3.40145C12.297 3.01262 12.8938 2.8011 13.5087 2.8011C14.1235 2.8011 14.7203 3.01262 15.2026 3.40145C15.685 3.79028 16.0245 4.33368 16.1664 4.94373C16.2161 5.16108 16.3163 5.36306 16.4585 5.53269C16.6007 5.70231 16.7808 5.83461 16.9836 5.91843C17.1864 6.00225 17.406 6.03515 17.6239 6.01435C17.8417 5.99354 18.0515 5.91966 18.2356 5.7989C18.4347 5.66937 18.6633 5.59471 18.8992 5.5822C19.135 5.56969 19.37 5.61976 19.5812 5.72752C19.7924 5.83528 19.9726 5.99705 20.1042 6.19704C20.2358 6.39703 20.3143 6.6284 20.332 6.86856C20.2911 7.21738 20.381 7.56908 20.5836 7.85319C20.7862 8.13731 21.0866 8.33284 21.4246 8.40062C21.7127 8.45829 21.985 8.57894 22.2229 8.75427C22.4608 8.92959 22.6586 9.15543 22.8027 9.41621C22.9468 9.67699 23.0337 9.96653 23.0576 10.2649C23.0814 10.5632 23.0415 10.8633 22.9406 11.1444H4.06574C3.96493 10.8627 3.92531 10.562 3.94962 10.2632C3.97393 9.96436 4.06158 9.67447 4.20651 9.41356C4.35145 9.15266 4.55022 8.92696 4.78907 8.75206C5.02793 8.57717 5.30118 8.45726 5.58994 8.40062ZM17.6005 13.93L16.2347 36.1281C16.2347 36.1573 16.2456 36.1838 16.247 36.2144H10.7566C10.7566 36.1838 10.7703 36.1573 10.7689 36.1281L9.40589 13.93H17.6005ZM5.03543 34.9749L2.73685 13.93H6.68938C6.68938 13.9606 6.67572 13.9871 6.67709 14.0177L8.04012 36.2144H6.38754C6.05226 36.2131 5.72917 36.086 5.47983 35.8574C5.23049 35.6288 5.07231 35.3147 5.03543 34.9749ZM21.9819 34.9749C21.9449 35.3157 21.7859 35.6306 21.5354 35.8593C21.2849 36.088 20.9605 36.2145 20.6243 36.2144H18.9663L20.332 14.0177C20.332 13.9871 20.3211 13.9606 20.3197 13.93H24.2723L21.9819 34.9749Z"
              fill="url(#paint0_linear_122_20)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_122_20"
                x1="4.05755"
                y1="38.2771"
                x2="23.6935"
                y2="4.92583"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#A3E635" />
                <stop offset="1" stopColor="#E3F7C2" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <div className="flex items-end gap-0.5" ref={lettersWrapperRef}>
          <span>
            <svg
              data-animation="letter"
              width="17"
              height="20"
              viewBox="0 0 17 20">
              <path
                d="M9.468 0C10.836 0 12.024 0.144 13.032 0.431999C14.064 0.719999 14.856 1.128 15.408 1.656C15.984 2.16 16.272 2.772 16.272 3.492C16.272 3.972 16.128 4.428 15.84 4.86C15.552 5.268 15.132 5.472 14.58 5.472C14.196 5.472 13.872 5.424 13.608 5.328C13.368 5.208 13.152 5.064 12.96 4.896C12.768 4.728 12.54 4.572 12.276 4.428C12.036 4.284 11.664 4.176 11.16 4.104C10.68 4.008 10.32 3.96 10.08 3.96C8.856 3.96 7.812 4.224 6.948 4.752C6.108 5.28 5.46 6 5.004 6.912C4.548 7.8 4.32 8.832 4.32 10.008C4.32 11.16 4.548 12.192 5.004 13.104C5.484 13.992 6.132 14.7 6.948 15.228C7.788 15.756 8.748 16.02 9.828 16.02C10.428 16.02 10.944 15.984 11.376 15.912C11.808 15.84 12.168 15.732 12.456 15.588C12.792 15.396 13.092 15.192 13.356 14.976C13.62 14.76 14.016 14.652 14.544 14.652C15.168 14.652 15.648 14.856 15.984 15.264C16.32 15.648 16.488 16.128 16.488 16.704C16.488 17.304 16.152 17.856 15.48 18.36C14.808 18.84 13.92 19.236 12.816 19.548C11.736 19.836 10.56 19.98 9.288 19.98C7.392 19.98 5.748 19.548 4.356 18.684C2.964 17.796 1.884 16.596 1.116 15.084C0.372 13.572 0 11.88 0 10.008C0 8.04 0.396 6.312 1.188 4.824C2.004 3.312 3.12 2.136 4.536 1.296C5.976 0.432 7.62 0 9.468 0Z"
                fill="#A3E635"
              />
            </svg>
          </span>
          <span className="relative">
            <div className="dot absolute -top-[5.34px] left-0 right-0 mx-auto h-[4.5px] w-[5px] rounded-[2px] bg-lime-400" />
            <svg
              data-animation="letter"
              className="letter-i"
              width="5"
              height="20"
              viewBox="0 0 5 20">
              <path
                d="M4.42791 17.688C4.42791 18.312 4.22391 18.84 3.81591 19.272C3.40791 19.68 2.89191 19.884 2.26791 19.884C1.64391 19.884 1.12791 19.68 0.71991 19.272C0.31191 18.84 0.10791 18.312 0.10791 17.688V2.82002C0.10791 2.19602 0.31191 1.68002 0.71991 1.27202C1.12791 0.840024 1.64391 0.624023 2.26791 0.624023C2.89191 0.624023 3.40791 0.840024 3.81591 1.27202C4.22391 1.68002 4.42791 2.19602 4.42791 2.82002V17.688Z"
                fill="#A3E635"
              />
            </svg>
          </span>
          <span>
            <svg
              data-animation="letter"
              width="17"
              height="20"
              viewBox="0 0 17 20">
              <path
                d="M10.296 0C12.072 0 13.416 0.372 14.328 1.116C15.264 1.86 15.9 2.856 16.236 4.104C16.596 5.328 16.776 6.696 16.776 8.208V17.424C16.776 18.048 16.572 18.576 16.164 19.008C15.756 19.416 15.24 19.62 14.616 19.62C13.992 19.62 13.476 19.416 13.068 19.008C12.66 18.576 12.456 18.048 12.456 17.424V8.208C12.456 7.416 12.348 6.708 12.132 6.084C11.94 5.436 11.58 4.92 11.052 4.536C10.524 4.152 9.768 3.96 8.784 3.96C7.824 3.96 7.008 4.152 6.336 4.536C5.688 4.92 5.184 5.436 4.824 6.084C4.488 6.708 4.32 7.416 4.32 8.208V17.424C4.32 18.048 4.116 18.576 3.708 19.008C3.3 19.416 2.784 19.62 2.16 19.62C1.536 19.62 1.02 19.416 0.612 19.008C0.204 18.576 0 18.048 0 17.424V2.556C0 1.932 0.204 1.416 0.612 1.008C1.02 0.576 1.536 0.36 2.16 0.36C2.784 0.36 3.3 0.576 3.708 1.008C4.116 1.416 4.32 1.932 4.32 2.556V4.104L3.78 3.996C3.996 3.588 4.308 3.156 4.716 2.7C5.124 2.22 5.604 1.776 6.156 1.368C6.708 0.959999 7.332 0.635999 8.028 0.395999C8.724 0.132 9.48 0 10.296 0Z"
                fill="#A3E635"
              />
            </svg>
          </span>
          <span>
            <svg
              data-animation="letter"
              width="19"
              height="20"
              viewBox="0 0 19 20">
              <path
                d="M9.972 19.98C7.932 19.98 6.156 19.56 4.644 18.72C3.156 17.856 2.004 16.692 1.188 15.228C0.396 13.764 0 12.108 0 10.26C0 8.1 0.432 6.264 1.296 4.752C2.184 3.216 3.336 2.04 4.752 1.224C6.168 0.408 7.668 0 9.252 0C10.476 0 11.628 0.252 12.708 0.755999C13.812 1.26 14.784 1.956 15.624 2.844C16.464 3.708 17.124 4.716 17.604 5.868C18.108 7.02 18.36 8.244 18.36 9.54C18.336 10.116 18.108 10.584 17.676 10.944C17.244 11.304 16.74 11.484 16.164 11.484H2.412L1.332 7.884H14.544L13.752 8.604V7.632C13.704 6.936 13.452 6.312 12.996 5.76C12.564 5.208 12.012 4.776 11.34 4.464C10.692 4.128 9.996 3.96 9.252 3.96C8.532 3.96 7.86 4.056 7.236 4.248C6.612 4.44 6.072 4.764 5.616 5.22C5.16 5.676 4.8 6.288 4.536 7.056C4.272 7.824 4.14 8.796 4.14 9.972C4.14 11.268 4.404 12.372 4.932 13.284C5.484 14.172 6.18 14.856 7.02 15.336C7.884 15.792 8.796 16.02 9.756 16.02C10.644 16.02 11.352 15.948 11.88 15.804C12.408 15.66 12.828 15.492 13.14 15.3C13.476 15.084 13.776 14.904 14.04 14.76C14.472 14.544 14.88 14.436 15.264 14.436C15.792 14.436 16.224 14.616 16.56 14.976C16.92 15.336 17.1 15.756 17.1 16.236C17.1 16.884 16.764 17.472 16.092 18C15.468 18.528 14.592 18.996 13.464 19.404C12.336 19.788 11.172 19.98 9.972 19.98Z"
                fill="#A3E635"
              />
            </svg>
          </span>
          <span>
            <svg
              data-animation="letter"
              width="29"
              height="20"
              viewBox="0 0 29 20">
              <path
                d="M10.116 0C12.036 0 13.452 0.468 14.364 1.404C15.276 2.316 15.876 3.504 16.164 4.968L15.552 4.644L15.84 4.068C16.128 3.516 16.572 2.928 17.172 2.304C17.772 1.656 18.492 1.116 19.332 0.684C20.196 0.228 21.156 0 22.212 0C23.94 0 25.248 0.372 26.136 1.116C27.048 1.86 27.672 2.856 28.008 4.104C28.344 5.328 28.512 6.696 28.512 8.208V17.424C28.512 18.048 28.308 18.576 27.9 19.008C27.492 19.416 26.976 19.62 26.352 19.62C25.728 19.62 25.212 19.416 24.804 19.008C24.396 18.576 24.192 18.048 24.192 17.424V8.208C24.192 7.416 24.096 6.708 23.904 6.084C23.712 5.436 23.364 4.92 22.86 4.536C22.356 4.152 21.636 3.96 20.7 3.96C19.788 3.96 19.008 4.152 18.36 4.536C17.712 4.92 17.22 5.436 16.884 6.084C16.572 6.708 16.416 7.416 16.416 8.208V17.424C16.416 18.048 16.212 18.576 15.804 19.008C15.396 19.416 14.88 19.62 14.256 19.62C13.632 19.62 13.116 19.416 12.708 19.008C12.3 18.576 12.096 18.048 12.096 17.424V8.208C12.096 7.416 12 6.708 11.808 6.084C11.616 5.436 11.268 4.92 10.764 4.536C10.26 4.152 9.54 3.96 8.604 3.96C7.692 3.96 6.912 4.152 6.264 4.536C5.616 4.92 5.124 5.436 4.788 6.084C4.476 6.708 4.32 7.416 4.32 8.208V17.424C4.32 18.048 4.116 18.576 3.708 19.008C3.3 19.416 2.784 19.62 2.16 19.62C1.536 19.62 1.02 19.416 0.612 19.008C0.204 18.576 0 18.048 0 17.424V2.556C0 1.932 0.204 1.416 0.612 1.008C1.02 0.576 1.536 0.36 2.16 0.36C2.784 0.36 3.3 0.576 3.708 1.008C4.116 1.416 4.32 1.932 4.32 2.556V4.104L3.78 3.996C3.996 3.588 4.296 3.156 4.68 2.7C5.064 2.22 5.532 1.776 6.084 1.368C6.636 0.959999 7.248 0.635999 7.92 0.395999C8.592 0.132 9.324 0 10.116 0Z"
                fill="#A3E635"
              />
            </svg>
          </span>
          <span>
            <svg
              data-animation="letter"
              width="19"
              height="20"
              viewBox="0 0 19 20">
              <path
                d="M16.668 0C17.292 0 17.808 0.204 18.216 0.612001C18.624 1.02 18.828 1.548 18.828 2.196V17.424C18.828 18.048 18.624 18.576 18.216 19.008C17.808 19.416 17.292 19.62 16.668 19.62C16.044 19.62 15.528 19.416 15.12 19.008C14.712 18.576 14.508 18.048 14.508 17.424V15.66L15.3 15.984C15.3 16.296 15.132 16.68 14.796 17.136C14.46 17.568 14.004 18 13.428 18.432C12.852 18.864 12.168 19.236 11.376 19.548C10.608 19.836 9.768 19.98 8.856 19.98C7.2 19.98 5.7 19.56 4.356 18.72C3.012 17.856 1.944 16.68 1.152 15.192C0.384 13.68 0 11.952 0 10.008C0 8.04 0.384 6.312 1.152 4.824C1.944 3.312 3 2.136 4.32 1.296C5.64 0.432 7.104 0 8.712 0C9.744 0 10.692 0.156 11.556 0.468C12.42 0.779999 13.164 1.176 13.788 1.656C14.436 2.136 14.928 2.628 15.264 3.132C15.624 3.612 15.804 4.02 15.804 4.356L14.508 4.824V2.196C14.508 1.572 14.712 1.056 15.12 0.648C15.528 0.216 16.044 0 16.668 0ZM9.396 16.02C10.452 16.02 11.376 15.756 12.168 15.228C12.96 14.7 13.572 13.98 14.004 13.068C14.46 12.156 14.688 11.136 14.688 10.008C14.688 8.856 14.46 7.824 14.004 6.912C13.572 6 12.96 5.28 12.168 4.752C11.376 4.224 10.452 3.96 9.396 3.96C8.364 3.96 7.452 4.224 6.66 4.752C5.868 5.28 5.244 6 4.788 6.912C4.356 7.824 4.14 8.856 4.14 10.008C4.14 11.136 4.356 12.156 4.788 13.068C5.244 13.98 5.868 14.7 6.66 15.228C7.452 15.756 8.364 16.02 9.396 16.02Z"
                fill="#A3E635"
              />
            </svg>
          </span>
          <span>
            <svg
              data-animation="letter"
              width="17"
              height="20"
              viewBox="0 0 17 20">
              <path
                d="M10.296 0C12.072 0 13.416 0.372 14.328 1.116C15.264 1.86 15.9 2.856 16.236 4.104C16.596 5.328 16.776 6.696 16.776 8.208V17.424C16.776 18.048 16.572 18.576 16.164 19.008C15.756 19.416 15.24 19.62 14.616 19.62C13.992 19.62 13.476 19.416 13.068 19.008C12.66 18.576 12.456 18.048 12.456 17.424V8.208C12.456 7.416 12.348 6.708 12.132 6.084C11.94 5.436 11.58 4.92 11.052 4.536C10.524 4.152 9.768 3.96 8.784 3.96C7.824 3.96 7.008 4.152 6.336 4.536C5.688 4.92 5.184 5.436 4.824 6.084C4.488 6.708 4.32 7.416 4.32 8.208V17.424C4.32 18.048 4.116 18.576 3.708 19.008C3.3 19.416 2.784 19.62 2.16 19.62C1.536 19.62 1.02 19.416 0.612 19.008C0.204 18.576 0 18.048 0 17.424V2.556C0 1.932 0.204 1.416 0.612 1.008C1.02 0.576 1.536 0.36 2.16 0.36C2.784 0.36 3.3 0.576 3.708 1.008C4.116 1.416 4.32 1.932 4.32 2.556V4.104L3.78 3.996C3.996 3.588 4.308 3.156 4.716 2.7C5.124 2.22 5.604 1.776 6.156 1.368C6.708 0.959999 7.332 0.635999 8.028 0.395999C8.724 0.132 9.48 0 10.296 0Z"
                fill="#A3E635"
              />
            </svg>
          </span>
          <span className="relative">
            <div className="dot absolute -top-[5.34px] left-0 right-0 mx-auto h-[4.5px] w-[5px] rounded-[2px] bg-lime-400" />
            <svg
              data-animation="letter"
              className="letter-i"
              width="5"
              height="20"
              viewBox="0 0 5 20">
              <path
                d="M4.42791 17.688C4.42791 18.312 4.22391 18.84 3.81591 19.272C3.40791 19.68 2.89191 19.884 2.26791 19.884C1.64391 19.884 1.12791 19.68 0.71991 19.272C0.31191 18.84 0.10791 18.312 0.10791 17.688V2.82002C0.10791 2.19602 0.31191 1.68002 0.71991 1.27202C1.12791 0.840024 1.64391 0.624023 2.26791 0.624023C2.89191 0.624023 3.40791 0.840024 3.81591 1.27202C4.22391 1.68002 4.42791 2.19602 4.42791 2.82002V17.688Z"
                fill="#A3E635"
              />
            </svg>
          </span>
          <span>
            <svg
              data-animation="letter"
              width="19"
              height="20"
              viewBox="0 0 19 20">
              <path
                d="M16.668 0C17.292 0 17.808 0.204 18.216 0.612001C18.624 1.02 18.828 1.548 18.828 2.196V17.424C18.828 18.048 18.624 18.576 18.216 19.008C17.808 19.416 17.292 19.62 16.668 19.62C16.044 19.62 15.528 19.416 15.12 19.008C14.712 18.576 14.508 18.048 14.508 17.424V15.66L15.3 15.984C15.3 16.296 15.132 16.68 14.796 17.136C14.46 17.568 14.004 18 13.428 18.432C12.852 18.864 12.168 19.236 11.376 19.548C10.608 19.836 9.768 19.98 8.856 19.98C7.2 19.98 5.7 19.56 4.356 18.72C3.012 17.856 1.944 16.68 1.152 15.192C0.384 13.68 0 11.952 0 10.008C0 8.04 0.384 6.312 1.152 4.824C1.944 3.312 3 2.136 4.32 1.296C5.64 0.432 7.104 0 8.712 0C9.744 0 10.692 0.156 11.556 0.468C12.42 0.779999 13.164 1.176 13.788 1.656C14.436 2.136 14.928 2.628 15.264 3.132C15.624 3.612 15.804 4.02 15.804 4.356L14.508 4.824V2.196C14.508 1.572 14.712 1.056 15.12 0.648C15.528 0.216 16.044 0 16.668 0ZM9.396 16.02C10.452 16.02 11.376 15.756 12.168 15.228C12.96 14.7 13.572 13.98 14.004 13.068C14.46 12.156 14.688 11.136 14.688 10.008C14.688 8.856 14.46 7.824 14.004 6.912C13.572 6 12.96 5.28 12.168 4.752C11.376 4.224 10.452 3.96 9.396 3.96C8.364 3.96 7.452 4.224 6.66 4.752C5.868 5.28 5.244 6 4.788 6.912C4.356 7.824 4.14 8.856 4.14 10.008C4.14 11.136 4.356 12.156 4.788 13.068C5.244 13.98 5.868 14.7 6.66 15.228C7.452 15.756 8.364 16.02 9.396 16.02Z"
                fill="#A3E635"
              />
            </svg>
          </span>
        </div>
      </h1>
    </LinkWithQuery>
  );
}

export default Logo;
