import { createGlobalStyle } from "styled-components";
import { fonts, robotoRegular } from "./fonts";
import { rgba } from "styles/mixins";
import {
	red,
	grey,
	liteGrey,
	white,
	blue,
	black,
	background,
	line,
} from "./colors";

export const GlobalStyle = createGlobalStyle`
  ${fonts}

  * {
    margin: 0;
    box-sizing: border-box;
  }

  html {margin-right: calc(-1 * (100vw - 100%));}

  body {
    font-family: ${robotoRegular};
    color: ${black};
    overflow-x: hidden;
    background-color: ${background};
    padding-right: 0 !important;
  }

  .fade-enter, .fade-exit-active {
    opacity: 0;
  }
  .fade-exit, .fade-enter-active  {
    opacity: 1;
  }
  .fade-enter-active, .fade-exit-active {
    transition: all .25s ease-in;
  }

  .fadeIn-enter {
    opacity: 0;
  }

  .fadeIn-enter-active {
    opacity: 1;
    transition: all .25s ease-in;
  }

  .fadeIn-exit  {
    opacity: 0;
  }

  .date-picker {
    .MuiPaper-root {
      margin-top: 23px;
      margin-right: -45px;
    }

    .MuiPickersDay-root {
      &.Mui-selected {
        background-color: ${blue};
      }

      &:hover,
      &:focus {
        background-color: ${background};
      }

      &.MuiPickersDay-today {
        border: 1px solid ${rgba(grey, 0.6)};
      }
    }
  }

  .common-input {
      .MuiOutlinedInput-root {
        &:hover {
          .MuiOutlinedInput-notchedOutline {
            box-shadow: 0px 0px 6px transparent, inset 0px 0px 0px 1px ${grey};
          }
        }

        &.Mui-focused {
          background: ${white};

          .MuiOutlinedInput-notchedOutline {
            box-shadow: 0px 0px 6px ${rgba(
							blue,
							0.36,
						)}, inset 0px 0px 0px 1px ${blue};
          }
        }

        &.Mui-error {
          .MuiOutlinedInput-notchedOutline {
            box-shadow: 0px 0px 6px transparent, inset 0px 0px 0px 1px ${red};
          }

          &.Mui-focused {
            .MuiOutlinedInput-notchedOutline {
              box-shadow: 0px 0px 6px ${rgba(
								red,
								0.36,
							)}, inset 0px 0px 0px 1px ${red};
            }
          }
        }

        input::placeholder {
          opacity: 1;
          color: ${grey};
        }

        .MuiSelect-icon {
          stroke: ${grey};
          right: 15px;
          top: calc(50% - 7px);
          transform: rotate(90deg);
          transition: all .25s ease-in-out;

          &.MuiSelect-iconOpen {
            transform: rotate(270deg);
          }
        }
      }

      .MuiFormHelperText-root {
        &.Mui-error {
          color: ${red};
          opacity: 1;
          pointer-events: auto;
        }
      }

      .MuiInputAdornment-root {
        button {
          width: 34px;
	        height: 34px; 
        }
        svg {
          stroke: ${grey};
        }

        
      }
    }

    .MuiInputAdornment-root .MuiIconButton-root {
      &:hover {
          background-color: ${rgba(liteGrey, 0.4)};
        }

        &.MuiPickersArrowSwitcher-button svg {
          fill: ${grey};
        }
    }


    .MuiFormGroup-root {
      &.custom-select-container {
        .MuiFormControlLabel-root {
          width: 100%;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          position: relative;
          margin: 0;
          padding: 0 8px;

          .MuiFormControlLabel-label {
            &::before {
              content: "";
              display: block;
              position: absolute;
              right: 0;
              width: 100%;
              height: 100%;
              border: 1px solid ${line};
              border-radius: 6px;
              transition: all 0.25s ease-in-out;
            }
          }

          .MuiRadio-root,
          .MuiCheckbox-root { 
            &.Mui-checked + .MuiFormControlLabel-label {
              &::before {
                border: 1px solid ${blue};
              }
            }
          }
        }
      }
    }

    .ScrollbarsCustom {
      &.inside {
        .ScrollbarsCustom-Wrapper {
          width: 100%;
        }
      }

      .ScrollbarsCustom-Content {
        display: block !important;
      }
    }
 `;
