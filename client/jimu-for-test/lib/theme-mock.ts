import { type IMThemeVariables, Immutable } from 'jimu-core'

const MockTheme = Immutable({
  darkTheme: false,
  coloration: 'default',
  colors: {
    white: '#fff',
    black: '#000',
    transparent: 'transparent',
    primary: '#0a77c6',
    secondary: '#ecf1f8',
    info: '#4aa0e2',
    success: '#7ed321',
    warning: '#f8e71c',
    danger: '#f6143a',
    light: '#f8f8f8',
    dark: '#080808',
    orgSharedColors: {
      header: { color: '#ffffff' },
      body: { bg: '#ebebeb', color: '#5c5c5c', link: '#a80000' },
      button: { bg: '#004da8', color: '#ffffff' }
    },
    palette: {
      primary: {
        100: '#b4ddfb',
        200: '#89caf9',
        300: '#5fb7f7',
        400: '#34a4f5',
        500: '#0c91f0',
        600: '#0a77c6',
        700: '#085d9c',
        800: '#064471',
        900: '#042a47'
      },
      secondary: {
        100: '#ecf1f8',
        200: '#c9d7eb',
        300: '#a6bede',
        400: '#83a4d1',
        500: '#608ac5',
        600: '#4271b3',
        700: '#355b90',
        800: '#28456d',
        900: '#1b2f4b'
      },
      info: {
        100: '#c5e1f6',
        200: '#9ccbef',
        300: '#73b6e9',
        400: '#4aa0e2',
        500: '#238ad9',
        600: '#1c70b0',
        700: '#165687',
        800: '#0f3c5e',
        900: '#082235'
      },
      success: {
        100: '#f2fbe7',
        200: '#dbf5be',
        300: '#c4ee95',
        400: '#ade86c',
        500: '#95e142',
        600: '#7ed321',
        700: '#65aa1b',
        800: '#4d8014',
        900: '#34570e'
      },
      warning: {
        100: '#fefbd5',
        200: '#fcf6a7',
        300: '#fbf179',
        400: '#f9ec4a',
        500: '#f8e71c',
        600: '#ddcd07',
        700: '#afa205',
        800: '#817704',
        900: '#524c03'
      },
      danger: {
        100: '#fdccd4',
        200: '#fb9eae',
        300: '#fa7087',
        400: '#f84261',
        500: '#f6143a',
        600: '#d2082a',
        700: '#a40621',
        800: '#760518',
        900: '#48030e'
      },
      light: {
        100: '#f8f8f8',
        200: '#eaeaea',
        300: '#dcdcdc',
        400: '#cecece',
        500: '#c0c0c0',
        600: '#b1b1b1',
        700: '#a3a3a3',
        800: '#959595',
        900: '#878787'
      },
      dark: {
        100: '#787878',
        200: '#6a6a6a',
        300: '#5c5c5c',
        400: '#4e4e4e',
        500: '#404040',
        600: '#323232',
        700: '#242424',
        800: '#161616',
        900: '#080808'
      }
    }
  },
  typography: {
    fontFamilyBase: 'Avenir Next',
    fontSizeRoot: '100%',
    fontSizeBase: '0.8125rem',
    sizes: {
      body1: '0.875rem',
      body2: '0.8125rem',
      caption1: '0.75rem',
      caption2: '0.625rem',
      display1: '1.875rem',
      display2: '1.5rem',
      display3: '1.25rem',
      display4: '1.125rem',
      display5: '1rem',
      display6: '0.875rem'
    },
    weights: {
      extraLight: '200',
      light: '300',
      medium: '400',
      bold: '500',
      extraBold: '600'
    },
    lineHeights: {
      medium: 1.5,
      sm: 1,
      lg: 1.5
    },
    variants: {
      body1: { fontFamily: 'Avenir Next', fontWeight: '400', lineHeight: 1.5, color: '#282828', fontSize: '0.875rem' },
      body2: { fontFamily: 'Avenir Next', fontWeight: '400', lineHeight: 1.5, color: '#282828', fontSize: '0.8125rem' },
      caption1: { fontFamily: 'Avenir Next', fontWeight: '400', lineHeight: 1.5, color: '#444444', fontSize: '0.75rem' },
      caption2: { fontFamily: 'Avenir Next', fontWeight: '400', lineHeight: 1.5, color: '#444444', fontSize: '0.625rem' },
      display1: { fontFamily: 'Avenir Next', fontWeight: '500', lineHeight: 1.5, color: '#050505', fontSize: '1.875rem' },
      display2: { fontFamily: 'Avenir Next', fontWeight: '500', lineHeight: 1.5, color: '#050505', fontSize: '1.5rem' },
      display3: { fontFamily: 'Avenir Next', fontWeight: '500', lineHeight: 1.5, color: '#050505', fontSize: '1.25rem' },
      display4: { fontFamily: 'Avenir Next', fontWeight: '500', lineHeight: 1.5, color: '#050505', fontSize: '1.125rem' },
      display5: { fontFamily: 'Avenir Next', fontWeight: '500', lineHeight: 1.5, color: '#050505', fontSize: '1rem' },
      display6: { fontFamily: 'Avenir Next', fontWeight: '500', lineHeight: 1.5, color: '#050505', fontSize: '0.875rem' }
    },
    colors: {
      caption: '#444444',
      disabled: '#b6b6b6',
      normal: '#282828',
      title: '#050505'
    }
  },
  spacer: '1rem',
  sizes: {
    0: 0,
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '1.5rem',
    5: '2rem'
  },
  gutters: {
    0: 0,
    1: '0.0625rem',
    2: '0.125rem',
    3: '0.25rem',
    4: '0.5rem',
    5: '0.625rem'
  },
  border: {
    color: '#dcdcdc',
    width: '1px'
  },
  borderRadiuses: {
    none: '0',
    sm: '0',
    default: '0.125rem',
    lg: '0.25rem',
    circle: '50%',
    pill: '50rem'
  },
  boxShadows: {
    none: 'none',
    sm: '0 .125rem 1.25rem rgba(0,0,0,0.1)',
    default: '0 .125rem .5rem rgba(0,0,0,0.2)',
    lg: '0 .25rem .75rem rgba(0,0,0,0.2)'
  },
  body: {
    bg: '#f8f8f8',
    color: '#080808',
    fontFamily: 'Avenir Next',
    fontWeight: '400',
    fontSize: '0.875rem',
    fontStyle: 'unset',
    lineHeight: 1.5
  },
  header: {
    bg: '#0a77c6',
    color: '#f8f8f8'
  },
  footer: {
    bg: '#042a47',
    color: '#f8f8f8'
  },
  link: {
    color: '#0a77c6',
    decoration: 'none',
    hover: {
      color: '#0a77c6',
      decoration: 'underline'
    }
  },
  components: {
    alert: {
      paddingY: '0.5rem',
      paddingX: '1rem',
      marginBottom: '0.625rem',
      borderRadius: '0.25rem',
      linkFontWeight: '300',
      borderWidth: '1px',
      bgLevel: '-10',
      borderLevel: '-9',
      colorLevel: '6'
    },
    badge: {
      fontSize: '85%',
      fontWeight: '400',
      paddingX: '0.5rem',
      paddingY: '0.25rem',
      borderRadius: '99rem',
      minSize: '6px',
      border: {
        width: '1px',
        color: '#fff'
      }
    },
    breadcrumb: {
      bg: '#eaeaea',
      activeColor: '#6a6a6a',
      paddingY: '0.75rem',
      paddingX: '1rem',
      marginBottom: '1rem',
      borderRadius: '0.125rem',
      item: {
        color: '#080808',
        hoverColor: '#0a77c6',
        padding: '0.5rem'
      },
      divider: {
        content: '"/"',
        color: '#6a6a6a'
      }
    },
    button: {
      sizes: {
        default: {
          fontSize: '1rem',
          lineHeight: 1.5,
          paddingX: '1rem',
          paddingY: '0.25rem',
          borderRadius: '2px'
        },
        sm: {
          fontSize: '0.875rem',
          lineHeight: 1,
          paddingX: '0.5rem',
          paddingY: '0.25rem',
          borderRadius: '2px'
        },
        lg: {
          fontSize: '1.25rem',
          lineHeight: 1.5,
          paddingX: '1rem',
          paddingY: '0.5rem',
          borderRadius: '2px'
        }
      },
      variants: {
        default: {
          default: {
            color: '#000',
            bg: '#fff',
            border: {
              color: '#c0c0c0',
              width: '1px'
            }
          },
          hover: {
            bg: 'rgba(10,119,198,0.1)'
          },
          active: {
            color: '#fff',
            bg: '#0a77c6',
            border: {
              color: '#0a77c6',
              width: '1px'
            }
          },
          disabled: {
            color: '#a3a3a3',
            bg: '#eaeaea',
            border: {
              color: '#eaeaea',
              width: '1px'
            },
            shadow: 'none',
            opacity: 0.5
          },
          focus: {
            shadow: '0 0 0 .2rem rgba(10,119,198,0.25)'
          }
        },
        primary: {
          default: {
            color: '#fff',
            bg: '#0a77c6',
            border: {
              width: '0'
            }
          },
          hover: {
            bg: '#064471'
          },
          active: {
            bg: '#064471'
          },
          disabled: {
            color: '#a3a3a3',
            bg: '#eaeaea',
            shadow: 'none'
          },
          focus: {
            shadow: '0 0 0 .2rem rgba(10,119,198,0.25)'
          }
        },
        secondary: {
          default: {
            color: '#0a77c6',
            bg: 'transparent',
            border: {
              width: '1px',
              color: '#c0c0c0'
            }
          },
          hover: {
            color: '#fff',
            bg: '#0a77c6',
            border: {
              width: '1px',
              color: '#0a77c6'
            }
          },
          active: {
            color: '#fff',
            bg: '#0a77c6',
            border: {
              width: '1px',
              color: '#0a77c6'
            }
          },
          disabled: {
            color: '#a3a3a3',
            bg: '#eaeaea',
            border: {
              width: '1px',
              color: '#a3a3a3'
            },
            shadow: 'none'
          },
          focus: {
            shadow: '0 0 0 .2rem rgba(10,119,198,0.25)'
          }
        },
        tertiary: {
          default: {
            color: '#0a77c6',
            bg: 'transparent',
            border: {
              width: 0
            }
          },
          hover: {
            color: '#064471'
          },
          active: {
            color: '#fff',
            bg: '#0a77c6'
          },
          disabled: {
            color: '#a3a3a3'
          },
          focus: {
            shadow: '0 0 0 .2rem rgba(10,119,198,0.25)'
          }
        },
        danger: {
          default: {
            color: '#fff',
            bg: '#f6143a',
            border: {
              width: '0'
            }
          },
          hover: {
            bg: '#a40621'
          },
          active: {
            bg: '#a40621'
          },
          disabled: {
            color: '#a3a3a3',
            bg: '#eaeaea',
            shadow: 'none'
          },
          focus: {
            shadow: '0 0 0 .2rem rgba(246,20,58,0.25)'
          }
        },
        link: {
          default: {
            color: '#0a77c6',
            bg: 'transparent',
            border: {
              width: '0'
            },
            decoration: 'underline'
          },
          hover: {
            color: '#064471',
            decoration: 'underline'
          },
          active: {
            color: '#064471'
          },
          disabled: {
            color: '#a3a3a3'
          },
          focus: {
            shadow: '0 0 0 .2rem rgba(10,119,198,0.25)',
            decoration: 'underline'
          }
        }
      },
      icon: {
        spacing: '0.5rem',
        size: 'auto'
      }
    },
    card: {
      root: {
        default: {
          bg: '#fff',
          border: {
            width: '1px',
            color: '#c5c5c5'
          },
          shadow: 'none',
          borderRadius: '0.125rem'
        },
        hover: {
          border: {
            width: '1px',
            color: '#076fe5'
          },
          shadow: '0 0 0 1px #076fe5'
        },
        active: {
          border: {
            width: '1px',
            color: '#076fe5'
          },
          shadow: '0 0 0 1px #076fe5'
        }
      },
      spacer: {
        y: '0.625rem',
        x: '1.25rem'
      },
      headerBg: '#fff',
      divider: {
        color: '#e3e3e3',
        width: '1px'
      },
      checkMark: {
        color: '#fff',
        bg: '#076fe5'
      }
    },
    close: {
      fontSize: '1.3125rem',
      fontWeight: '500',
      color: '#000',
      textShadow: '0 1px 0 #fff'
    },
    dropdown: {
      minWidth: '10rem',
      paddingY: '0.5rem',
      spacer: '0.125rem',
      bg: '#fff',
      border: {
        color: 'rgba(0,0,0,0.15)',
        width: '0'
      },
      borderRadius: '0.125rem',
      divider: {
        bg: '#eaeaea'
      },
      boxShadow: '0 .125rem .5rem rgba(0,0,0,0.2)',
      link: {
        color: '#080808',
        hoverColor: '#0a77c6',
        hoverBg: '#fff',
        activeColor: '#fff',
        activeBg: '#0a77c6',
        disabledColor: '#6a6a6a'
      },
      item: {
        paddingY: '0.25rem',
        paddingX: '1.5rem'
      },
      header: {
        color: '#6a6a6a'
      }
    },
    form: {
      group: {
        marginBottom: '1rem'
      },
      helpText: {
        marginTop: '0.25rem',
        fontSize: '0.8125rem'
      },
      check: {
        inline: {
          marginX: '0.75rem',
          inputMarginX: '0.3125rem'
        }
      }
    },
    input: {
      bg: '#fff',
      color: '#080808',
      border: {
        color: '#c0c0c0',
        width: '1px'
      },
      boxShadow: null,
      disabled: {
        bg: '#eaeaea'
      },
      focus: {
        bg: '#fff',
        borderColor: '#0a77c6',
        color: '#080808',
        width: '0.2rem',
        boxShadow: null
      },
      placeHolderColor: '#6a6a6a',
      sizes: {
        default: {
          fontSize: '1rem',
          lineHeight: 1.5,
          paddingX: '1rem',
          paddingY: '0.25rem',
          borderRadius: '2px',
          height: 'auto'
        },
        sm: {
          fontSize: '0.875rem',
          lineHeight: 1,
          paddingX: '0.5rem',
          paddingY: '0.25rem',
          borderRadius: '2px',
          height: 'auto'
        },
        lg: {
          fontSize: '1.25rem',
          lineHeight: 1.5,
          paddingX: '1rem',
          paddingY: '0.5rem',
          borderRadius: '2px',
          height: 'auto'
        }
      },
      transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out',
      checkbox: {
        size: '16px',
        border: {
          color: '#c0c0c0',
          width: '1px'
        },
        bg: '#fff',
        hover: {
          borderColor: '#c0c0c0'
        },
        checked: {
          color: '#fff',
          bg: '#0a77c6'
        },
        focusColor: '#0a77c6',
        iconSize: '12px'
      },
      radio: {
        size: '16px',
        border: {
          color: '#c0c0c0',
          width: '1px'
        },
        hover: {
          borderColor: '#c0c0c0'
        },
        bg: '#fff',
        checked: {
          color: '#0a77c6',
          bg: '#fff'
        },
        focusColor: '#0a77c6',
        iconSize: '8px'
      },
      switch: {
        width: '34px',
        height: '20px',
        bg: '#a3a3a3',
        checkedBg: '#0a77c6',
        slider: {
          gap: '3px',
          height: 'auto',
          width: 'auto',
          color: 'white'
        }
      },
      slider: {
        sizes: {
          default: {
            height: '0.5rem'
          },
          sm: {
            height: '0.25rem'
          },
          lg: {
            height: '0.5rem'
          }
        },
        bg: '#eaeaea',
        borderRadius: '99rem',
        progress: {
          bg: '#0a77c6'
        },
        thumb: {
          sizes: {
            defaultSize: '1.25rem',
            smSize: '0.75rem',
            lgSize: '1.75rem'
          },
          bg: '#fff',
          borderColor: '#0a77c6'
        }
      }
    },
    listGroup: {
      fontSize: '1rem',
      bg: '#fff',
      border: {
        color: '#dcdcdc',
        width: '1px'
      },
      borderRadius: '0.125rem',
      item: {
        paddingY: '0.75rem',
        paddingX: '1rem'
      },
      hover: {
        bg: '#f8f8f8'
      },
      active: {
        color: 'inherit',
        bg: 'rgba(10,119,198,0.1)',
        borderColor: '#dcdcdc'
      },
      disabled: {
        color: '#a3a3a3',
        bg: '#eaeaea'
      },
      action: {
        color: '#323232',
        hover: {
          color: '#323232'
        },
        active: {
          color: '#080808',
          bg: '#eaeaea'
        }
      }
    },
    inputGroup: {
      addon: {
        color: '#080808',
        bg: '#eaeaea',
        borderColor: '#c0c0c0'
      }
    },
    modal: {
      innerPadding: '1rem',
      transition: 'transform .3s ease-out',
      dialog: {
        margin: '.5rem',
        marginYSmUp: '1.75rem'
      },
      title: {
        lineHeight: 1.5
      },
      content: {
        bg: '#fff',
        border: {
          color: 'transparent',
          width: '1px'
        },
        borderRadius: '0.25rem',
        boxShadow: '0 .25rem .5rem rgba(0, 0, 0, .5)',
        boxShadowSmUp: '0 .25rem .75rem rgba(0, 0, 0, .2)'
      },
      backdrop: {
        bg: '#000',
        opacity: 0.6
      },
      header: {
        border: {
          color: '#dcdcdc',
          width: '1px'
        },
        paddingY: '.75rem',
        paddingX: '1rem'
      },
      footer: {
        border: {
          color: '#dcdcdc',
          width: '0'
        },
        button: { minWidth: 32 }
      },
      sizes: {
        lg: '800px',
        md: '500px',
        sm: '300px'
      }
    },
    nav: {
      variants: {
        default: {
          size: {
            fontSize: '1rem',
            lineHeight: 1.5,
            paddingX: '1rem',
            paddingY: '0.5rem',
            borderRadius: '0.125rem'
          },
          gutter: '0.25rem',
          icon: {
            spacing: '0.5rem'
          },
          item: {
            default: {
              color: 'inherit',
              bg: 'transparent',
              border: {
                width: 0
              }
            },
            hover: {
              color: '#0a77c6'
            },
            active: {
              color: '#0a77c6'
            },
            disabled: {
              color: '#a3a3a3',
              shadow: 'none'
            },
            focus: {
              shadow: '0 0 0 .2rem rgba(10,119,198,0.25)'
            }
          }
        },
        underline: {
          size: {
            fontSize: '1rem',
            lineHeight: 1.5,
            paddingX: '1rem',
            paddingY: '0.5rem',
            borderRadius: '0.125rem'
          },
          gutter: '0.25rem',
          icon: {
            spacing: '0.5rem'
          },
          border: {
            color: '#eaeaea',
            width: '1px'
          },
          item: {
            default: {
              color: 'inherit',
              bg: 'transparent',
              border: {
                width: 0
              }
            },
            hover: {
              color: '#0a77c6'
            },
            active: {
              color: '#0a77c6',
              border: {
                color: '#0a77c6',
                width: '2px'
              }
            },
            disabled: {
              color: '#a3a3a3',
              shadow: 'none'
            },
            focus: {
              shadow: '0 0 0 .2rem rgba(10,119,198,0.25)'
            }
          }
        },
        pills: {
          size: {
            fontSize: '1rem',
            lineHeight: 1.5,
            paddingX: '1rem',
            paddingY: '0.5rem',
            borderRadius: '0.125rem'
          },
          gutter: '0.25rem',
          icon: {
            spacing: '0.5rem'
          },
          item: {
            default: {
              color: 'inherit',
              border: {
                width: 0
              }
            },
            hover: {
              color: '#0a77c6'
            },
            active: {
              color: '#fff',
              bg: '#0a77c6'
            },
            disabled: {
              color: '#a3a3a3',
              shadow: 'none'
            },
            focus: {
              shadow: '0 0 0 .2rem rgba(10,119,198,0.25)'
            }
          }
        },
        tabs: {
          border: {
            width: '1px',
            color: '#c0c0c0'
          },
          size: {
            fontSize: '1rem',
            lineHeight: 1.5,
            paddingX: '1rem',
            paddingY: '0.5rem',
            borderRadius: '0.125rem'
          },
          gutter: '0.25rem',
          icon: {
            spacing: '0.5rem'
          },
          item: {
            default: {
              color: 'inherit',
              bg: '#f8f8f8',
              border: {
                width: '1px',
                color: '#c0c0c0'
              }
            },
            hover: {
              bg: '#f8f8f8',
              border: {
                width: '1px'
              }
            },
            active: {
              color: '#0a77c6',
              bg: '#f8f8f8',
              border: {
                width: '1px',
                color: '#c0c0c0'
              }
            },
            disabled: {
              color: '#a3a3a3',
              bg: '#eaeaea'
            },
            focus: {
              shadow: '0 0 0 .2rem rgba(10,119,198,0.25)'
            }
          }
        }
      }
    },
    navButtonGroup: {
      variants: {
        default: {
          root: {},
          item: {
            default: {
              color: '#181818',
              bg: '#fff',
              border: {
                width: '1px'
              },
              borderRadius: '0.25rem'
            },
            hover: {
              bg: '#f0f0f0',
              borderRadius: '0.25rem'
            },
            disabled: {
              color: '#8b8b8b',
              bg: '#e3e3e3',
              border: {
                color: '#c5c5c5'
              },
              borderRadius: '0.25rem'
            }
          }
        },
        primary: {
          root: {
            bg: '#076fe5',
            borderRadius: '1.5rem'
          },
          item: {
            default: {
              color: '#fff',
              bg: 'transparent',
              border: {
                width: '0px',
                color: 'transparent'
              }
            },
            hover: {
              bg: 'transparent',
              border: {
                width: '0px',
                color: 'transparent'
              }
            },
            disabled: {
              color: '#8b8b8b',
              bg: 'transparent',
              border: {
                width: '0px',
                color: 'transparent'
              }
            }
          }
        },
        tertiary: {
          root: {},
          item: {
            default: {
              color: '#181818',
              bg: 'transparent',
              border: {
                width: '0px',
                color: 'transparent'
              }
            },
            hover: {
              color: '#076fe5',
              bg: 'transparent',
              border: {
                width: '0px',
                color: 'transparent'
              }
            },
            disabled: {
              color: '#8b8b8b',
              bg: 'transparent',
              border: {
                width: '0px',
                color: 'transparent'
              }
            }
          }
        }
      }
    },
    navbar: {
      fontSize: '1rem',
      paddingY: '0.5rem',
      paddingX: '1rem',
      nav: {
        link: {
          paddingX: '0.5rem',
          height: 'auto'
        }
      },
      brand: {
        fontSize: '1rem',
        height: 'auto',
        paddingY: 'auto'
      },
      toggler: {
        paddingY: '0.25rem',
        paddingX: '0.75rem',
        fontSize: '1.25rem',
        borderRadius: '2px'
      },
      themes: {
        dark: {
          color: 'rgba(255,255,255,0.75)',
          hoverColor: '#fff',
          activeColor: '#fff',
          disabledColor: '#a3a3a3',
          toggler: {
            borderColor: 'rgba(255,255,255,0.1)'
          }
        },
        light: {
          color: 'inherit',
          hoverColor: '#0a77c6',
          activeColor: '#0a77c6',
          disabledColor: '#a3a3a3',
          toggler: {
            borderColor: 'rgba(0,0,0,0.1)'
          }
        }
      }
    },
    pagination: {
      color: 'inherit',
      bg: '#fff',
      border: {
        color: '#cecece',
        width: '1px'
      },
      lineHeight: 1,
      gutter: '0.375rem',
      focus: {
        boxShadow: '0 0 0 0.2rem rgba(10,119,198,0.25)',
        outline: '0'
      },
      hover: {
        color: '#0a77c6',
        bg: '#eaeaea',
        borderColor: '#cecece'
      },
      active: {
        color: '#fff',
        bg: '#0a77c6',
        borderColor: '#0a77c6'
      },
      disabled: {
        color: '#6a6a6a',
        bg: '#dcdcdc',
        borderColor: '#dcdcdc'
      },
      sizes: {
        default: {
          paddingY: '0.4375rem',
          paddingX: '0.5rem'
        },
        sm: {
          paddingY: '0.25rem',
          paddingX: '0.375rem'
        },
        lg: {
          paddingY: '0.75rem',
          paddingX: '1.5rem'
        }
      },
      item: {
        minWidth: '1.875rem',
        borderRadius: '0.25rem'
      }
    },
    popper: {
      fontSize: '0.875rem',
      bg: '#fff',
      border: {
        color: 'transparent',
        width: '1px'
      },
      borderRadius: '0.25rem',
      boxShadow: '0 .125rem .5rem rgba(0,0,0,0.2)',
      header: {
        bg: '#fff',
        color: 'inherit',
        paddingY: '0.625rem',
        paddingX: '0.625rem'
      },
      body: {
        color: '#080808',
        paddingY: '0.5rem',
        paddingX: '0.75rem'
      },
      arrow: {
        size: '0.75rem',
        color: '#fff',
        outerColor: 'transparent'
      }
    },
    paper: {
      bg: 'white',
      color: 'black',
      paddingX: 0,
      paddingY: 0,
      border: {
        width: 0,
        color: 'transparent'
      },
      boxShadow: 'none'
    },
    progress: {
      height: '0.5rem',
      fontSize: '0.65625rem',
      bg: '#eaeaea',
      borderRadius: '99rem',
      boxShadow: 'none',
      bar: {
        color: '#fff',
        bg: '#0a77c6',
        animationTiming: '1s linear infinite',
        transition: 'width .6s ease'
      }
    },
    tooltip: {
      fontSize: '0.875rem',
      maxWidth: '200px',
      color: 'inherit',
      bg: '#fff',
      borderRadius: '0.25rem',
      border: {
        width: '1px',
        color: '#a8a8a8'
      },
      boxShadow: '0 .125rem .5rem rgba(0,0,0,0.2)',
      opacity: 1,
      paddingY: '0.25rem',
      paddingX: '0.5rem',
      margin: '0.375rem',
      arrow: {
        size: '0.375rem',
        color: '#fff',
        border: {
          width: '1px',
          color: '#a8a8a8'
        }
      }
    }
  }
}) as unknown as IMThemeVariables

export default MockTheme
