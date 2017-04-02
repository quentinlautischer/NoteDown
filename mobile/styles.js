module.exports = require('react-native').StyleSheet.create({
    "menu-button": {
        "width": null,
        "textAlign": "center",
        "padding": 0,
        "fontSize": 0.75,
        "fontWeight": "400",
        "borderRadius": 0,
        "transition": "background-color 0.25s ease-in-out"
    },
    "menu-buttonpast": {
        "opacity": 0.5
    },
    "menu-buttonfuture": {
        "opacity": 0.5
    },
    "menu-button:hover": {
        "cursor": "pointer",
        "backgroundColor": "rgba(255, 255, 255, 0.3)",
        "width": null
    },
    "markdown-input-editor": {
        "position": "absolute",
        "boxSizing": "border-box",
        "top": 30,
        "left": 1,
        "width": 48,
        "height": 96,
        "WebkitBoxSizing": "border-box",
        "padding": 0,
        "borderRadius": 4,
        "boxShadow": "0 0 30px rgba(0, 0, 0, 0.1)",
        "resize": "none",
        "outline": "none",
        "color": "#434146",
        "backgroundColor": "#EDEDEE",
        "zIndex": 1,
        "WebkitAppRegion": "no-drag",
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "#ccc",
        "::-webkit-scrollbar-track": {
            "backgroundColor": "#EDEDEE"
        }
    },
    "markdown-output-renderer": {
        "position": "absolute",
        "boxSizing": "border-box",
        "top": 30,
        "left": 50,
        "width": 49,
        "height": 96,
        "WebkitBoxSizing": "border-box",
        "padding": 20,
        "borderRadius": 4,
        "boxShadow": "0 0 30px rgba(0, 0, 0, 0.1)",
        "resize": "none",
        "outline": "none",
        "color": "#EDEDEE",
        "backgroundColor": "#434146",
        "overflowX": "scroll",
        "zIndex": 1,
        "WebkitAppRegion": "no-drag",
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "#ccc",
        "::-webkit-scrollbar-track": {
            "backgroundColor": "#434146"
        },
        "::-webkit-scrollbar-corner": {
            "backgroundColor": "#434146"
        },
        "blockquote": {
            "backgroundColor": "#4d4b50"
        },
        "pre": {
            "backgroundColor": "#4d4b50"
        }
    },
    "notedown-title-logo": {
        "width": 100,
        "float": "center",
        "textAlign": "center",
        "padding": 0,
        "fontSize": 20,
        "fontWeight": "400",
        "borderRadius": 0,
        "WebkitUserSelect": "none",
        "left-half": {
            "color": "white"
        }
    },
    "notedown-title-logo:hover": {
        "cursor": "default"
    },
    "folder-view": {
        "position": "relative",
        "boxSizing": "border-box",
        "top": 5,
        "left": 5,
        "width": 300,
        "height": 200,
        "margin": 50,
        "marginTop": 50,
        "marginBottom": 50,
        "marginRight": 50,
        "marginLeft": 50,
        "padding": 100,
        "borderRadius": 4,
        "boxShadow": "0 0 30px rgba(0, 0, 0, 0.1)",
        "resize": "none",
        "outline": "none",
        "fontSize": 1.3,
        "color": "#EDEDEE",
        "backgroundColor": "#434146",
        "fontWeight": "300",
        "textAlign": "center",
        "zIndex": 2,
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "#ccc"
    },
    "folder-view:hover": {
        "cursor": "pointer",
        "backgroundColor": "rgba(255, 255, 255, 0.3)"
    },
    "folder-delete-btn": {
        "position": "absolute",
        "right": 2,
        "top": 2,
        "width": 5,
        "height": null,
        "color": "#EDEDEE",
        "zIndex": 3
    },
    "folder-delete-btn:hover": {
        "color": "#fed75e"
    },
    "folder-flashcards-btn": {
        "position": "absolute",
        "left": 2,
        "top": 2,
        "width": 5,
        "height": null,
        "color": "#EDEDEE",
        "zIndex": 3
    },
    "folder-flashcards-btn:hover": {
        "color": "#fed75e"
    },
    "folder-container-view": {
        "position": "relative",
        "width": 100,
        "height": 100,
        "overflowY": "auto",
        "WebkitAppRegion": "no-drag"
    },
    "menu-text-field": {
        "fontFamily": "Chalkduster",
        "float": "center",
        "textAlign": "center",
        "padding": 0,
        "fontSize": 0.75,
        "fontWeight": "400",
        "borderRadius": 0
    },
    "login-signup-toggle": {
        "flexDirection": "'row'"
    },
    "toc-nav-show": {
        "position": "relative",
        "float": "right",
        "marginTop": 33,
        "marginRight": 33,
        "color": "#fed75e",
        "zIndex": 4
    },
    "toc-nav-show:hover": {
        "+": {
            "toc-nav": {}
        }
    },
    "toc-nav": {
        "position": "fixed",
        "boxSizing": "border-box",
        "top": 5,
        "left": 55,
        "width": 43,
        "height": 60,
        "borderRadius": 4,
        "boxShadow": "0 0 30px rgba(0, 0, 0, 0.1)",
        "resize": "none",
        "outline": "none",
        "fontSize": 12,
        "color": "#434146",
        "backgroundColor": "#303e4d",
        "zIndex": 5,
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "#ccc",
        "li": {
            "listStyle": "none"
        },
        "ul": {
            "listStyle": "none"
        }
    },
    "toc-nav-content": {
        "maxHeight": "90%",
        "overflowY": "auto",
        "zIndex": 5
    },
    "toc-nav:hover": {},
    "toc-li": {
        "color": "#fed75e"
    },
    "toc-li:hover": {
        "color": "#feb255"
    },
    "toc-li-h1": {
        "marginLeft": 0
    },
    "toc-li-h2": {
        "marginLeft": 20
    },
    "toc-li-h3": {
        "marginLeft": 40
    },
    "toc-li-h4": {
        "marginLeft": 60
    },
    "toc-li-h5": {
        "marginLeft": 80
    },
    "toc-li-h6": {
        "marginLeft": 100
    },
    "toc-btn": {
        "color": "#fed75e"
    },
    "toc-btn:hover": {
        "color": "#feb255"
    },
    "format-toolbar": {
        "position": "fixed",
        "textAlign": "center",
        "zIndex": 10,
        "backgroundColor": "#303e4d",
        "a": {
            "background": "#FFF",
            "borderRadius": 1,
            "color": "black",
            "padding": 5,
            "width": 1.5,
            "margin": -2,
            "marginTop": 10,
            "boxShadow": "0px 1px 0px #CCC",
            "borderWidth": 1,
            "borderStyle": "solid",
            "borderColor": "#AAA",
            "textDecorationLine": "none"
        }
    },
    "fore-wrapper": {
        "background": "#FFF",
        "borderRadius": 1,
        "color": "black",
        "padding": 5,
        "width": 1.5,
        "margin": -2,
        "marginTop": 10,
        "boxShadow": "0px 1px 0px #CCC",
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "#AAA",
        "textDecorationLine": "none",
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 3,
        "cursor": "pointer"
    },
    "back-wrapper": {
        "background": "#FFF",
        "borderRadius": 1,
        "color": "black",
        "padding": 5,
        "width": 1.5,
        "margin": -2,
        "marginTop": 10,
        "boxShadow": "0px 1px 0px #CCC",
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "#AAA",
        "textDecorationLine": "none",
        "cursor": "pointer"
    },
    "toolbar": {
        "a:hover": {
            "background": "#f2f2f2",
            "borderColor": "#8c8c8c"
        }
    },
    "fore-wrapper:hover": {
        "background": "#f2f2f2",
        "borderColor": "#8c8c8c",
        "fore-palette": {
            "float": "left",
            "position": "absolute",
            "padding": 3,
            "width": 160,
            "background": "#FFF",
            "boxShadow": "0 0 5px #CCC",
            "height": 70,
            "borderWidth": 1,
            "borderStyle": "solid",
            "borderColor": "#DDD"
        }
    },
    "back-wrapper:hover": {
        "background": "#f2f2f2",
        "borderColor": "#8c8c8c",
        "back-palette": {
            "float": "left",
            "position": "absolute",
            "padding": 3,
            "width": 160,
            "background": "#FFF",
            "boxShadow": "0 0 5px #CCC",
            "height": 70,
            "borderWidth": 1,
            "borderStyle": "solid",
            "borderColor": "#DDD"
        }
    },
    "a[data-command='insertOrderedList']": {
        "marginRight": 5,
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 3,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 0
    },
    "a[data-command='outdent']": {
        "marginRight": 5,
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 3,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 0
    },
    "a[data-command='blockquote']": {
        "marginRight": 5,
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 3,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 0
    },
    "a[data-command='insertUnorderedList']": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 3
    },
    "a[data-command='indent']": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 3
    },
    "a[data-command='h1']": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 3
    },
    "a": {
        "height": 1,
        "borderRadius": 3,
        "margin": 2,
        "width": 1,
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "#CCC"
    },
    "apalette-item:hover": {
        "boxShadow": "0 0 3px #333",
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "#CCC"
    },
    "fore-palette": {
        "a": {
            "background": "#FFF",
            "marginBottom": 2
        }
    },
    "back-palette": {
        "a": {
            "background": "#FFF",
            "marginBottom": 2
        }
    },
    "CodeMirror": {
        "position": "relative",
        "fontFamily": "monospace",
        "height": 100,
        "color": "black",
        "pre": {
            "paddingTop": 0,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "paddingRight": 0,
            "MozBorderRadius": 0,
            "WebkitBorderRadius": 0,
            "borderRadius": 0,
            "borderWidth": 0,
            "background": "transparent",
            "fontFamily": "inherit",
            "fontSize": null,
            "margin": 0,
            "whiteSpace": "pre",
            "wordWrap": "normal",
            "lineHeight": null,
            "color": "inherit",
            "zIndex": 2,
            "position": "relative",
            "overflow": "visible",
            "WebkitTapHighlightColor": "transparent",
            "WebkitFontVariantLigatures": "contextual",
            "fontVariantLigatures": "contextual"
        },
        "divCodeMirror-secondarycursor": {
            "borderLeftWidth": 1,
            "borderLeftColor": "silver"
        },
        "overflow": "hidden",
        "background": "#EDEDEE"
    },
    "CodeMirror-lines": {
        "paddingTop": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "paddingRight": 0,
        "cursor": "text",
        "minHeight": "1px"
    },
    "CodeMirror-scrollbar-filler": {
        "backgroundColor": "white",
        "position": "absolute",
        "zIndex": 6,
        "right": 0,
        "bottom": 0
    },
    "CodeMirror-gutter-filler": {
        "backgroundColor": "white",
        "position": "absolute",
        "zIndex": 6,
        "left": 0,
        "bottom": 0
    },
    "CodeMirror-gutters": {
        "backgroundColor": "#f7f7f7",
        "whiteSpace": "nowrap",
        "borderRightWidth": 1,
        "borderRightColor": "#ddd",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "minHeight": "100%",
        "zIndex": 3,
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box"
    },
    "CodeMirror-linenumber": {
        "paddingTop": 0,
        "paddingRight": 3,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "minWidth": "20px",
        "textAlign": "right",
        "color": "#999",
        "whiteSpace": "nowrap",
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box"
    },
    "CodeMirror-guttermarker": {
        "color": "black"
    },
    "CodeMirror-guttermarker-subtle": {
        "color": "#999"
    },
    "CodeMirror-cursor": {
        "borderRight": "none",
        "width": 0,
        "borderLeftWidth": 1,
        "borderLeftColor": "black",
        "position": "absolute",
        "pointerEvents": "none"
    },
    "cm-fat-cursor": {
        "CodeMirror-cursor": {
            "width": null,
            "border": "0 !important",
            "background": "#7e7"
        },
        "divCodeMirror-cursors": {
            "zIndex": 1
        }
    },
    "cm-animate-fat-cursor": {
        "width": null,
        "border": 0,
        "WebkitAnimation": "blink 1.06s steps(1) infinite",
        "MozAnimation": "blink 1.06s steps(1) infinite",
        "animation": "blink 1.06s steps(1) infinite",
        "backgroundColor": "#7e7"
    },
    "cm-tab": {
        "textDecorationLine": "inherit"
    },
    "CodeMirror-rulers": {
        "position": "absolute",
        "left": 0,
        "right": 0,
        "top": -50,
        "bottom": -20,
        "overflow": "hidden"
    },
    "CodeMirror-ruler": {
        "top": 0,
        "bottom": 0,
        "position": "absolute",
        "borderLeftWidth": 1,
        "borderLeftColor": "#ccc"
    },
    "cm-s-default": {
        "cm-header": {
            "color": "blue"
        },
        "cm-quote": {
            "color": "#090"
        },
        "cm-keyword": {
            "color": "#708"
        },
        "cm-atom": {
            "color": "#219"
        },
        "cm-number": {
            "color": "#164"
        },
        "cm-def": {
            "color": "#00f"
        },
        "cm-variable-2": {
            "color": "#05a"
        },
        "cm-variable-3": {
            "color": "#085"
        },
        "cm-comment": {
            "color": "#a50"
        },
        "cm-string": {
            "color": "#a11"
        },
        "cm-string-2": {
            "color": "#f50"
        },
        "cm-meta": {
            "color": "#555"
        },
        "cm-qualifier": {
            "color": "#555"
        },
        "cm-builtin": {
            "color": "#30a"
        },
        "cm-bracket": {
            "color": "#997"
        },
        "cm-tag": {
            "color": "#170"
        },
        "cm-attribute": {
            "color": "#00c"
        },
        "cm-hr": {
            "color": "#999"
        },
        "cm-link": {
            "color": "#00c"
        },
        "cm-error": {
            "color": "#f00"
        }
    },
    "cm-negative": {
        "color": "#d44"
    },
    "cm-positive": {
        "color": "#292"
    },
    "cm-header": {
        "fontWeight": "bold"
    },
    "cm-strong": {
        "fontWeight": "bold"
    },
    "cm-em": {
        "fontStyle": "italic"
    },
    "cm-link": {
        "textDecorationLine": "underline"
    },
    "cm-strikethrough": {
        "textDecorationLine": "line-through"
    },
    "cm-invalidchar": {
        "color": "#f00"
    },
    "CodeMirror-composing": {
        "borderBottomWidth": 2,
        "borderBottomColor": "solid"
    },
    "divCodeMirror": {
        "spanCodeMirror-matchingbracket": {
            "color": "#0f0"
        },
        "spanCodeMirror-nonmatchingbracket": {
            "color": "#f22"
        }
    },
    "CodeMirror-matchingtag": {
        "background": "rgba(255, 150, 0, 0.3)"
    },
    "CodeMirror-activeline-background": {
        "background": "#e8f2ff"
    },
    "CodeMirror-scroll": {
        "overflow": "scroll !important",
        "marginBottom": -30,
        "marginRight": -30,
        "paddingBottom": 30,
        "height": 100,
        "outline": "none",
        "position": "relative",
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box"
    },
    "CodeMirror-sizer": {
        "position": "relative",
        "borderRightWidth": 30,
        "borderRightColor": "transparent",
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box"
    },
    "CodeMirror-vscrollbar": {
        "position": "absolute",
        "zIndex": 6,
        "right": 0,
        "top": 0,
        "overflowX": "hidden",
        "overflowY": "scroll"
    },
    "CodeMirror-hscrollbar": {
        "position": "absolute",
        "zIndex": 6,
        "bottom": 0,
        "left": 0,
        "overflowY": "hidden",
        "overflowX": "scroll"
    },
    "CodeMirror-gutter": {
        "whiteSpace": "normal",
        "height": 100,
        "marginBottom": -30,
        "textVerticalAlign": "top",
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box"
    },
    "CodeMirror-gutter-wrapper": {
        "position": "absolute",
        "zIndex": 4,
        "background": "none !important",
        "border": "none !important",
        "::selection": {
            "backgroundColor": "transparent"
        },
        "::-moz-selection": {
            "backgroundColor": "transparent"
        }
    },
    "CodeMirror-gutter-background": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "zIndex": 4
    },
    "CodeMirror-gutter-elt": {
        "position": "absolute",
        "cursor": "default",
        "zIndex": 4
    },
    "CodeMirror-wrap": {
        "pre": {
            "wordWrap": "break-word",
            "whiteSpace": "pre-wrap",
            "wordBreak": "normal"
        }
    },
    "CodeMirror-linebackground": {
        "position": "absolute",
        "left": 0,
        "right": 0,
        "top": 0,
        "bottom": 0,
        "zIndex": 0
    },
    "CodeMirror-linewidget": {
        "position": "relative",
        "zIndex": 2,
        "overflow": "auto"
    },
    "CodeMirror-rtl": {
        "pre": {
            "direction": "rtl"
        }
    },
    "CodeMirror-code": {
        "outline": "none"
    },
    "CodeMirror-measure": {
        "position": "absolute",
        "width": 100,
        "height": 0,
        "overflow": "hidden",
        "visibility": "hidden",
        "pre": {
            "position": "static"
        }
    },
    "divCodeMirror-cursors": {
        "visibility": "hidden",
        "position": "relative",
        "zIndex": 3
    },
    "divCodeMirror-dragcursors": {
        "visibility": "visible"
    },
    "CodeMirror-focused": {
        "divCodeMirror-cursors": {
            "visibility": "visible"
        },
        "CodeMirror-selected": {
            "background": "#d7d4f0"
        }
    },
    "CodeMirror-selected": {
        "background": "#d9d9d9"
    },
    "CodeMirror-crosshair": {
        "cursor": "crosshair"
    },
    "CodeMirror-line::selection": {
        "background": "#d7d4f0"
    },
    "CodeMirror-line": {
        ">": {
            "span::selection": {
                "background": "#d7d4f0"
            },
            "span": {
                ">": {
                    "span::selection": {
                        "background": "#d7d4f0"
                    },
                    "span::-moz-selection": {
                        "background": "#d7d4f0"
                    }
                }
            },
            "span::-moz-selection": {
                "background": "#d7d4f0"
            }
        }
    },
    "CodeMirror-line::-moz-selection": {
        "background": "#d7d4f0"
    },
    "cm-searching": {
        "background": "rgba(255, 255, 0, 0.4)"
    },
    "cm-force-border": {
        "paddingRight": 0.1
    },
    "cm-tab-wrap-hack:after": {
        "content": "''"
    },
    "spanCodeMirror-selectedtext": {
        "background": "none"
    },
    "flashcard-viewer": {
        "position": "relative",
        "width": 100,
        "height": 100,
        "overflowY": "auto",
        "WebkitAppRegion": "no-drag"
    },
    "card-container": {
        "position": "relative",
        "boxSizing": "border-box",
        "left": 10,
        "perspective": "1000px",
        "backgroundColor": "transparent",
        "width": 80,
        "fontSize": 1,
        "color": "#434146",
        "zIndex": 1
    },
    "card-flipper": {
        "transition": "width 1s, height 1s, transform 1s",
        "transformStyle": "preserve-3d",
        "position": "relative",
        "width": 100,
        "padding": 25,
        "boxSizing": "border-box"
    },
    "hint-btn": {
        "position": "absolute",
        "left": 2,
        "top": 2,
        "width": 5,
        "height": null,
        "color": "#EDEDEE",
        "zIndex": 3
    },
    "hint-btn:hover": {
        "color": "#fed75e",
        "+": {
            "hint": {}
        }
    },
    "hint": {
        "position": "absolute",
        "width": 200,
        "height": 100,
        "backgroundColor": "red",
        "zIndex": 4
    },
    "front": {
        "width": 100,
        "height": 100,
        "position": "absolute",
        "top": 0,
        "left": 0,
        "color": "#EDEDEE",
        "backgroundColor": "#303e4d",
        "border": "thick solid black",
        "borderRadius": 5,
        "textAlign": "center",
        "zIndex": 2,
        "transform": "rotateY(0deg)"
    },
    "back": {
        "width": 100,
        "height": 100,
        "position": "absolute",
        "top": 0,
        "left": 0,
        "color": "#EDEDEE",
        "backgroundColor": "#303e4d",
        "border": "thick solid black",
        "borderRadius": 5,
        "textAlign": "center",
        "transform": "rotateY(180deg)"
    },
    "fa": {
        "font": "normal normal normal 14px/1 FontAwesome",
        "fontSize": null,
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "icon-user": {
        "font": "normal normal normal 14px/1 FontAwesome",
        "fontSize": null,
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "icon-tree": {
        "font": "normal normal normal 14px/1 FontAwesome",
        "fontSize": null,
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "icon-square-solid": {
        "font": "normal normal normal 14px/1 FontAwesome",
        "fontSize": null,
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "icon-minus": {
        "font": "normal normal normal 14px/1 FontAwesome",
        "fontSize": null,
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "fontWeight": "100"
    },
    "icon-square": {
        "font": "normal normal normal 14px/1 FontAwesome",
        "fontSize": null,
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "fontWeight": "100"
    },
    "icon-clone": {
        "font": "normal normal normal 14px/1 FontAwesome",
        "fontSize": null,
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "icon-times": {
        "font": "normal normal normal 14px/1 FontAwesome",
        "fontSize": null,
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "fontWeight": "100"
    },
    "icon-trash": {
        "font": "normal normal normal 14px/1 FontAwesome",
        "fontSize": null,
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "fa-lg": {
        "fontSize": 1.33333,
        "lineHeight": 0.75,
        "textVerticalAlign": "-15%"
    },
    "fa-2x": {
        "fontSize": 2
    },
    "fa-3x": {
        "fontSize": 3
    },
    "fa-4x": {
        "fontSize": 4
    },
    "fa-5x": {
        "fontSize": 5
    },
    "fa-fw": {
        "width": 1.28571,
        "textAlign": "center"
    },
    "fa-ul": {
        "paddingLeft": 0,
        "marginLeft": 2.14286,
        "listStyleType": "none",
        ">": {
            "li": {
                "position": "relative"
            }
        }
    },
    "fa-li": {
        "position": "absolute",
        "left": -2.14286,
        "width": 2.14286,
        "top": 0.14286,
        "textAlign": "center"
    },
    "fa-lifa-lg": {
        "left": -1.85714
    },
    "fa-border": {
        "paddingLeft": null,
        "paddingRight": null,
        "paddingTop": null,
        "paddingBottom": null,
        "border": "solid 0.08em #eee",
        "borderRadius": null
    },
    "fa-pull-left": {
        "float": "left"
    },
    "fa-pull-right": {
        "float": "right"
    },
    "fafa-pull-left": {
        "marginRight": 0.3
    },
    "fa-pull-lefticon-user": {
        "marginRight": 0.3
    },
    "fa-pull-lefticon-tree": {
        "marginRight": 0.3
    },
    "fa-pull-lefticon-square-solid": {
        "marginRight": 0.3
    },
    "fa-pull-lefticon-minus": {
        "marginRight": 0.3
    },
    "fa-pull-lefticon-square": {
        "marginRight": 0.3
    },
    "fa-pull-lefticon-clone": {
        "marginRight": 0.3
    },
    "fa-pull-lefticon-times": {
        "marginRight": 0.3
    },
    "fa-pull-lefticon-trash": {
        "marginRight": 0.3
    },
    "fafa-pull-right": {
        "marginLeft": 0.3
    },
    "fa-pull-righticon-user": {
        "marginLeft": 0.3
    },
    "fa-pull-righticon-tree": {
        "marginLeft": 0.3
    },
    "fa-pull-righticon-square-solid": {
        "marginLeft": 0.3
    },
    "fa-pull-righticon-minus": {
        "marginLeft": 0.3
    },
    "fa-pull-righticon-square": {
        "marginLeft": 0.3
    },
    "fa-pull-righticon-clone": {
        "marginLeft": 0.3
    },
    "fa-pull-righticon-times": {
        "marginLeft": 0.3
    },
    "fa-pull-righticon-trash": {
        "marginLeft": 0.3
    },
    "pull-right": {
        "float": "right"
    },
    "pull-left": {
        "float": "left"
    },
    "fapull-left": {
        "marginRight": 0.3
    },
    "pull-lefticon-user": {
        "marginRight": 0.3
    },
    "pull-lefticon-tree": {
        "marginRight": 0.3
    },
    "pull-lefticon-square-solid": {
        "marginRight": 0.3
    },
    "pull-lefticon-minus": {
        "marginRight": 0.3
    },
    "pull-lefticon-square": {
        "marginRight": 0.3
    },
    "pull-lefticon-clone": {
        "marginRight": 0.3
    },
    "pull-lefticon-times": {
        "marginRight": 0.3
    },
    "pull-lefticon-trash": {
        "marginRight": 0.3
    },
    "fapull-right": {
        "marginLeft": 0.3
    },
    "pull-righticon-user": {
        "marginLeft": 0.3
    },
    "pull-righticon-tree": {
        "marginLeft": 0.3
    },
    "pull-righticon-square-solid": {
        "marginLeft": 0.3
    },
    "pull-righticon-minus": {
        "marginLeft": 0.3
    },
    "pull-righticon-square": {
        "marginLeft": 0.3
    },
    "pull-righticon-clone": {
        "marginLeft": 0.3
    },
    "pull-righticon-times": {
        "marginLeft": 0.3
    },
    "pull-righticon-trash": {
        "marginLeft": 0.3
    },
    "fa-spin": {
        "WebkitAnimation": "fa-spin 2s infinite linear",
        "animation": "fa-spin 2s infinite linear"
    },
    "fa-pulse": {
        "WebkitAnimation": "fa-spin 1s infinite steps(8)",
        "animation": "fa-spin 1s infinite steps(8)"
    },
    "fa-rotate-90": {
        "MsFilter": "\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\"",
        "WebkitTransform": "rotate(90deg)",
        "MsTransform": "rotate(90deg)",
        "transform": "rotate(90deg)"
    },
    "fa-rotate-180": {
        "MsFilter": "\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\"",
        "WebkitTransform": "rotate(180deg)",
        "MsTransform": "rotate(180deg)",
        "transform": "rotate(180deg)"
    },
    "fa-rotate-270": {
        "MsFilter": "\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\"",
        "WebkitTransform": "rotate(270deg)",
        "MsTransform": "rotate(270deg)",
        "transform": "rotate(270deg)"
    },
    "fa-flip-horizontal": {
        "MsFilter": "\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\"",
        "WebkitTransform": "scale(-1, 1)",
        "MsTransform": "scale(-1, 1)",
        "transform": "scale(-1, 1)"
    },
    "fa-flip-vertical": {
        "MsFilter": "\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"",
        "WebkitTransform": "scale(1, -1)",
        "MsTransform": "scale(1, -1)",
        "transform": "scale(1, -1)"
    },
    ":root": {
        "fa-rotate-90": {
            "filter": "none"
        },
        "fa-rotate-180": {
            "filter": "none"
        },
        "fa-rotate-270": {
            "filter": "none"
        },
        "fa-flip-horizontal": {
            "filter": "none"
        },
        "fa-flip-vertical": {
            "filter": "none"
        }
    },
    "fa-stack": {
        "position": "relative",
        "width": 2,
        "height": 2,
        "lineHeight": 2,
        "textVerticalAlign": "middle"
    },
    "fa-stack-1x": {
        "position": "absolute",
        "left": 0,
        "width": 100,
        "textAlign": "center",
        "lineHeight": null
    },
    "fa-stack-2x": {
        "position": "absolute",
        "left": 0,
        "width": 100,
        "textAlign": "center",
        "fontSize": 2
    },
    "fa-inverse": {
        "color": "#fff"
    },
    "fa-glass:before": {
        "content": "\"\""
    },
    "fa-music:before": {
        "content": "\"\""
    },
    "fa-search:before": {
        "content": "\"\""
    },
    "fa-envelope-o:before": {
        "content": "\"\""
    },
    "fa-heart:before": {
        "content": "\"\""
    },
    "fa-star:before": {
        "content": "\"\""
    },
    "fa-star-o:before": {
        "content": "\"\""
    },
    "fa-user:before": {
        "content": "\"\""
    },
    "icon-user:before": {
        "content": "\"\""
    },
    "fa-film:before": {
        "content": "\"\""
    },
    "fa-th-large:before": {
        "content": "\"\""
    },
    "fa-th:before": {
        "content": "\"\""
    },
    "fa-th-list:before": {
        "content": "\"\""
    },
    "fa-check:before": {
        "content": "\"\""
    },
    "fa-remove:before": {
        "content": "\"\""
    },
    "fa-close:before": {
        "content": "\"\""
    },
    "fa-times:before": {
        "content": "\"\""
    },
    "icon-times:before": {
        "content": "\"\""
    },
    "fa-search-plus:before": {
        "content": "\"\""
    },
    "fa-search-minus:before": {
        "content": "\"\""
    },
    "fa-power-off:before": {
        "content": "\"\""
    },
    "fa-signal:before": {
        "content": "\"\""
    },
    "fa-gear:before": {
        "content": "\"\""
    },
    "fa-cog:before": {
        "content": "\"\""
    },
    "fa-trash-o:before": {
        "content": "\"\""
    },
    "fa-home:before": {
        "content": "\"\""
    },
    "fa-file-o:before": {
        "content": "\"\""
    },
    "fa-clock-o:before": {
        "content": "\"\""
    },
    "fa-road:before": {
        "content": "\"\""
    },
    "fa-download:before": {
        "content": "\"\""
    },
    "fa-arrow-circle-o-down:before": {
        "content": "\"\""
    },
    "fa-arrow-circle-o-up:before": {
        "content": "\"\""
    },
    "fa-inbox:before": {
        "content": "\"\""
    },
    "fa-play-circle-o:before": {
        "content": "\"\""
    },
    "fa-rotate-right:before": {
        "content": "\"\""
    },
    "fa-repeat:before": {
        "content": "\"\""
    },
    "fa-refresh:before": {
        "content": "\"\""
    },
    "fa-list-alt:before": {
        "content": "\"\""
    },
    "fa-lock:before": {
        "content": "\"\""
    },
    "fa-flag:before": {
        "content": "\"\""
    },
    "fa-headphones:before": {
        "content": "\"\""
    },
    "fa-volume-off:before": {
        "content": "\"\""
    },
    "fa-volume-down:before": {
        "content": "\"\""
    },
    "fa-volume-up:before": {
        "content": "\"\""
    },
    "fa-qrcode:before": {
        "content": "\"\""
    },
    "fa-barcode:before": {
        "content": "\"\""
    },
    "fa-tag:before": {
        "content": "\"\""
    },
    "fa-tags:before": {
        "content": "\"\""
    },
    "fa-book:before": {
        "content": "\"\""
    },
    "fa-bookmark:before": {
        "content": "\"\""
    },
    "fa-print:before": {
        "content": "\"\""
    },
    "fa-camera:before": {
        "content": "\"\""
    },
    "fa-font:before": {
        "content": "\"\""
    },
    "fa-bold:before": {
        "content": "\"\""
    },
    "fa-italic:before": {
        "content": "\"\""
    },
    "fa-text-height:before": {
        "content": "\"\""
    },
    "fa-text-width:before": {
        "content": "\"\""
    },
    "fa-align-left:before": {
        "content": "\"\""
    },
    "fa-align-center:before": {
        "content": "\"\""
    },
    "fa-align-right:before": {
        "content": "\"\""
    },
    "fa-align-justify:before": {
        "content": "\"\""
    },
    "fa-list:before": {
        "content": "\"\""
    },
    "fa-dedent:before": {
        "content": "\"\""
    },
    "fa-outdent:before": {
        "content": "\"\""
    },
    "fa-indent:before": {
        "content": "\"\""
    },
    "fa-video-camera:before": {
        "content": "\"\""
    },
    "fa-photo:before": {
        "content": "\"\""
    },
    "fa-image:before": {
        "content": "\"\""
    },
    "fa-picture-o:before": {
        "content": "\"\""
    },
    "fa-pencil:before": {
        "content": "\"\""
    },
    "fa-map-marker:before": {
        "content": "\"\""
    },
    "fa-adjust:before": {
        "content": "\"\""
    },
    "fa-tint:before": {
        "content": "\"\""
    },
    "fa-edit:before": {
        "content": "\"\""
    },
    "fa-pencil-square-o:before": {
        "content": "\"\""
    },
    "fa-share-square-o:before": {
        "content": "\"\""
    },
    "fa-check-square-o:before": {
        "content": "\"\""
    },
    "fa-arrows:before": {
        "content": "\"\""
    },
    "fa-step-backward:before": {
        "content": "\"\""
    },
    "fa-fast-backward:before": {
        "content": "\"\""
    },
    "fa-backward:before": {
        "content": "\"\""
    },
    "fa-play:before": {
        "content": "\"\""
    },
    "fa-pause:before": {
        "content": "\"\""
    },
    "fa-stop:before": {
        "content": "\"\""
    },
    "fa-forward:before": {
        "content": "\"\""
    },
    "fa-fast-forward:before": {
        "content": "\"\""
    },
    "fa-step-forward:before": {
        "content": "\"\""
    },
    "fa-eject:before": {
        "content": "\"\""
    },
    "fa-chevron-left:before": {
        "content": "\"\""
    },
    "fa-chevron-right:before": {
        "content": "\"\""
    },
    "fa-plus-circle:before": {
        "content": "\"\""
    },
    "fa-minus-circle:before": {
        "content": "\"\""
    },
    "fa-times-circle:before": {
        "content": "\"\""
    },
    "fa-check-circle:before": {
        "content": "\"\""
    },
    "fa-question-circle:before": {
        "content": "\"\""
    },
    "fa-info-circle:before": {
        "content": "\"\""
    },
    "fa-crosshairs:before": {
        "content": "\"\""
    },
    "fa-times-circle-o:before": {
        "content": "\"\""
    },
    "fa-check-circle-o:before": {
        "content": "\"\""
    },
    "fa-ban:before": {
        "content": "\"\""
    },
    "fa-arrow-left:before": {
        "content": "\"\""
    },
    "fa-arrow-right:before": {
        "content": "\"\""
    },
    "fa-arrow-up:before": {
        "content": "\"\""
    },
    "fa-arrow-down:before": {
        "content": "\"\""
    },
    "fa-mail-forward:before": {
        "content": "\"\""
    },
    "fa-share:before": {
        "content": "\"\""
    },
    "fa-expand:before": {
        "content": "\"\""
    },
    "fa-compress:before": {
        "content": "\"\""
    },
    "fa-plus:before": {
        "content": "\"\""
    },
    "fa-minus:before": {
        "content": "\"\""
    },
    "icon-minus:before": {
        "content": "\"\""
    },
    "fa-asterisk:before": {
        "content": "\"\""
    },
    "fa-exclamation-circle:before": {
        "content": "\"\""
    },
    "fa-gift:before": {
        "content": "\"\""
    },
    "fa-leaf:before": {
        "content": "\"\""
    },
    "fa-fire:before": {
        "content": "\"\""
    },
    "fa-eye:before": {
        "content": "\"\""
    },
    "fa-eye-slash:before": {
        "content": "\"\""
    },
    "fa-warning:before": {
        "content": "\"\""
    },
    "fa-exclamation-triangle:before": {
        "content": "\"\""
    },
    "fa-plane:before": {
        "content": "\"\""
    },
    "fa-calendar:before": {
        "content": "\"\""
    },
    "fa-random:before": {
        "content": "\"\""
    },
    "fa-comment:before": {
        "content": "\"\""
    },
    "fa-magnet:before": {
        "content": "\"\""
    },
    "fa-chevron-up:before": {
        "content": "\"\""
    },
    "fa-chevron-down:before": {
        "content": "\"\""
    },
    "fa-retweet:before": {
        "content": "\"\""
    },
    "fa-shopping-cart:before": {
        "content": "\"\""
    },
    "fa-folder:before": {
        "content": "\"\""
    },
    "fa-folder-open:before": {
        "content": "\"\""
    },
    "fa-arrows-v:before": {
        "content": "\"\""
    },
    "fa-arrows-h:before": {
        "content": "\"\""
    },
    "fa-bar-chart-o:before": {
        "content": "\"\""
    },
    "fa-bar-chart:before": {
        "content": "\"\""
    },
    "fa-twitter-square:before": {
        "content": "\"\""
    },
    "fa-facebook-square:before": {
        "content": "\"\""
    },
    "fa-camera-retro:before": {
        "content": "\"\""
    },
    "fa-key:before": {
        "content": "\"\""
    },
    "fa-gears:before": {
        "content": "\"\""
    },
    "fa-cogs:before": {
        "content": "\"\""
    },
    "fa-comments:before": {
        "content": "\"\""
    },
    "fa-thumbs-o-up:before": {
        "content": "\"\""
    },
    "fa-thumbs-o-down:before": {
        "content": "\"\""
    },
    "fa-star-half:before": {
        "content": "\"\""
    },
    "fa-heart-o:before": {
        "content": "\"\""
    },
    "fa-sign-out:before": {
        "content": "\"\""
    },
    "fa-linkedin-square:before": {
        "content": "\"\""
    },
    "fa-thumb-tack:before": {
        "content": "\"\""
    },
    "fa-external-link:before": {
        "content": "\"\""
    },
    "fa-sign-in:before": {
        "content": "\"\""
    },
    "fa-trophy:before": {
        "content": "\"\""
    },
    "fa-github-square:before": {
        "content": "\"\""
    },
    "fa-upload:before": {
        "content": "\"\""
    },
    "fa-lemon-o:before": {
        "content": "\"\""
    },
    "fa-phone:before": {
        "content": "\"\""
    },
    "fa-square-o:before": {
        "content": "\"\""
    },
    "icon-square:before": {
        "content": "\"\""
    },
    "fa-bookmark-o:before": {
        "content": "\"\""
    },
    "fa-phone-square:before": {
        "content": "\"\""
    },
    "fa-twitter:before": {
        "content": "\"\""
    },
    "fa-facebook-f:before": {
        "content": "\"\""
    },
    "fa-facebook:before": {
        "content": "\"\""
    },
    "fa-github:before": {
        "content": "\"\""
    },
    "fa-unlock:before": {
        "content": "\"\""
    },
    "fa-credit-card:before": {
        "content": "\"\""
    },
    "fa-feed:before": {
        "content": "\"\""
    },
    "fa-rss:before": {
        "content": "\"\""
    },
    "fa-hdd-o:before": {
        "content": "\"\""
    },
    "fa-bullhorn:before": {
        "content": "\"\""
    },
    "fa-bell:before": {
        "content": "\"\""
    },
    "fa-certificate:before": {
        "content": "\"\""
    },
    "fa-hand-o-right:before": {
        "content": "\"\""
    },
    "fa-hand-o-left:before": {
        "content": "\"\""
    },
    "fa-hand-o-up:before": {
        "content": "\"\""
    },
    "fa-hand-o-down:before": {
        "content": "\"\""
    },
    "fa-arrow-circle-left:before": {
        "content": "\"\""
    },
    "fa-arrow-circle-right:before": {
        "content": "\"\""
    },
    "fa-arrow-circle-up:before": {
        "content": "\"\""
    },
    "fa-arrow-circle-down:before": {
        "content": "\"\""
    },
    "fa-globe:before": {
        "content": "\"\""
    },
    "fa-wrench:before": {
        "content": "\"\""
    },
    "fa-tasks:before": {
        "content": "\"\""
    },
    "fa-filter:before": {
        "content": "\"\""
    },
    "fa-briefcase:before": {
        "content": "\"\""
    },
    "fa-arrows-alt:before": {
        "content": "\"\""
    },
    "fa-group:before": {
        "content": "\"\""
    },
    "fa-users:before": {
        "content": "\"\""
    },
    "fa-chain:before": {
        "content": "\"\""
    },
    "fa-link:before": {
        "content": "\"\""
    },
    "fa-cloud:before": {
        "content": "\"\""
    },
    "fa-flask:before": {
        "content": "\"\""
    },
    "fa-cut:before": {
        "content": "\"\""
    },
    "fa-scissors:before": {
        "content": "\"\""
    },
    "fa-copy:before": {
        "content": "\"\""
    },
    "fa-files-o:before": {
        "content": "\"\""
    },
    "fa-paperclip:before": {
        "content": "\"\""
    },
    "fa-save:before": {
        "content": "\"\""
    },
    "fa-floppy-o:before": {
        "content": "\"\""
    },
    "fa-square:before": {
        "content": "\"\""
    },
    "icon-square-solid:before": {
        "content": "\"\""
    },
    "fa-navicon:before": {
        "content": "\"\""
    },
    "fa-reorder:before": {
        "content": "\"\""
    },
    "fa-bars:before": {
        "content": "\"\""
    },
    "fa-list-ul:before": {
        "content": "\"\""
    },
    "fa-list-ol:before": {
        "content": "\"\""
    },
    "fa-strikethrough:before": {
        "content": "\"\""
    },
    "fa-underline:before": {
        "content": "\"\""
    },
    "fa-table:before": {
        "content": "\"\""
    },
    "fa-magic:before": {
        "content": "\"\""
    },
    "fa-truck:before": {
        "content": "\"\""
    },
    "fa-pinterest:before": {
        "content": "\"\""
    },
    "fa-pinterest-square:before": {
        "content": "\"\""
    },
    "fa-google-plus-square:before": {
        "content": "\"\""
    },
    "fa-google-plus:before": {
        "content": "\"\""
    },
    "fa-money:before": {
        "content": "\"\""
    },
    "fa-caret-down:before": {
        "content": "\"\""
    },
    "fa-caret-up:before": {
        "content": "\"\""
    },
    "fa-caret-left:before": {
        "content": "\"\""
    },
    "fa-caret-right:before": {
        "content": "\"\""
    },
    "fa-columns:before": {
        "content": "\"\""
    },
    "fa-unsorted:before": {
        "content": "\"\""
    },
    "fa-sort:before": {
        "content": "\"\""
    },
    "fa-sort-down:before": {
        "content": "\"\""
    },
    "fa-sort-desc:before": {
        "content": "\"\""
    },
    "fa-sort-up:before": {
        "content": "\"\""
    },
    "fa-sort-asc:before": {
        "content": "\"\""
    },
    "fa-envelope:before": {
        "content": "\"\""
    },
    "fa-linkedin:before": {
        "content": "\"\""
    },
    "fa-rotate-left:before": {
        "content": "\"\""
    },
    "fa-undo:before": {
        "content": "\"\""
    },
    "fa-legal:before": {
        "content": "\"\""
    },
    "fa-gavel:before": {
        "content": "\"\""
    },
    "fa-dashboard:before": {
        "content": "\"\""
    },
    "fa-tachometer:before": {
        "content": "\"\""
    },
    "fa-comment-o:before": {
        "content": "\"\""
    },
    "fa-comments-o:before": {
        "content": "\"\""
    },
    "fa-flash:before": {
        "content": "\"\""
    },
    "fa-bolt:before": {
        "content": "\"\""
    },
    "fa-sitemap:before": {
        "content": "\"\""
    },
    "fa-umbrella:before": {
        "content": "\"\""
    },
    "fa-paste:before": {
        "content": "\"\""
    },
    "fa-clipboard:before": {
        "content": "\"\""
    },
    "fa-lightbulb-o:before": {
        "content": "\"\""
    },
    "fa-exchange:before": {
        "content": "\"\""
    },
    "fa-cloud-download:before": {
        "content": "\"\""
    },
    "fa-cloud-upload:before": {
        "content": "\"\""
    },
    "fa-user-md:before": {
        "content": "\"\""
    },
    "fa-stethoscope:before": {
        "content": "\"\""
    },
    "fa-suitcase:before": {
        "content": "\"\""
    },
    "fa-bell-o:before": {
        "content": "\"\""
    },
    "fa-coffee:before": {
        "content": "\"\""
    },
    "fa-cutlery:before": {
        "content": "\"\""
    },
    "fa-file-text-o:before": {
        "content": "\"\""
    },
    "fa-building-o:before": {
        "content": "\"\""
    },
    "fa-hospital-o:before": {
        "content": "\"\""
    },
    "fa-ambulance:before": {
        "content": "\"\""
    },
    "fa-medkit:before": {
        "content": "\"\""
    },
    "fa-fighter-jet:before": {
        "content": "\"\""
    },
    "fa-beer:before": {
        "content": "\"\""
    },
    "fa-h-square:before": {
        "content": "\"\""
    },
    "fa-plus-square:before": {
        "content": "\"\""
    },
    "fa-angle-double-left:before": {
        "content": "\"\""
    },
    "fa-angle-double-right:before": {
        "content": "\"\""
    },
    "fa-angle-double-up:before": {
        "content": "\"\""
    },
    "fa-angle-double-down:before": {
        "content": "\"\""
    },
    "fa-angle-left:before": {
        "content": "\"\""
    },
    "fa-angle-right:before": {
        "content": "\"\""
    },
    "fa-angle-up:before": {
        "content": "\"\""
    },
    "fa-angle-down:before": {
        "content": "\"\""
    },
    "fa-desktop:before": {
        "content": "\"\""
    },
    "fa-laptop:before": {
        "content": "\"\""
    },
    "fa-tablet:before": {
        "content": "\"\""
    },
    "fa-mobile-phone:before": {
        "content": "\"\""
    },
    "fa-mobile:before": {
        "content": "\"\""
    },
    "fa-circle-o:before": {
        "content": "\"\""
    },
    "fa-quote-left:before": {
        "content": "\"\""
    },
    "fa-quote-right:before": {
        "content": "\"\""
    },
    "fa-spinner:before": {
        "content": "\"\""
    },
    "fa-circle:before": {
        "content": "\"\""
    },
    "fa-mail-reply:before": {
        "content": "\"\""
    },
    "fa-reply:before": {
        "content": "\"\""
    },
    "fa-github-alt:before": {
        "content": "\"\""
    },
    "fa-folder-o:before": {
        "content": "\"\""
    },
    "fa-folder-open-o:before": {
        "content": "\"\""
    },
    "fa-smile-o:before": {
        "content": "\"\""
    },
    "fa-frown-o:before": {
        "content": "\"\""
    },
    "fa-meh-o:before": {
        "content": "\"\""
    },
    "fa-gamepad:before": {
        "content": "\"\""
    },
    "fa-keyboard-o:before": {
        "content": "\"\""
    },
    "fa-flag-o:before": {
        "content": "\"\""
    },
    "fa-flag-checkered:before": {
        "content": "\"\""
    },
    "fa-terminal:before": {
        "content": "\"\""
    },
    "fa-code:before": {
        "content": "\"\""
    },
    "fa-mail-reply-all:before": {
        "content": "\"\""
    },
    "fa-reply-all:before": {
        "content": "\"\""
    },
    "fa-star-half-empty:before": {
        "content": "\"\""
    },
    "fa-star-half-full:before": {
        "content": "\"\""
    },
    "fa-star-half-o:before": {
        "content": "\"\""
    },
    "fa-location-arrow:before": {
        "content": "\"\""
    },
    "fa-crop:before": {
        "content": "\"\""
    },
    "fa-code-fork:before": {
        "content": "\"\""
    },
    "fa-unlink:before": {
        "content": "\"\""
    },
    "fa-chain-broken:before": {
        "content": "\"\""
    },
    "fa-question:before": {
        "content": "\"\""
    },
    "fa-info:before": {
        "content": "\"\""
    },
    "fa-exclamation:before": {
        "content": "\"\""
    },
    "fa-superscript:before": {
        "content": "\"\""
    },
    "fa-subscript:before": {
        "content": "\"\""
    },
    "fa-eraser:before": {
        "content": "\"\""
    },
    "fa-puzzle-piece:before": {
        "content": "\"\""
    },
    "fa-microphone:before": {
        "content": "\"\""
    },
    "fa-microphone-slash:before": {
        "content": "\"\""
    },
    "fa-shield:before": {
        "content": "\"\""
    },
    "fa-calendar-o:before": {
        "content": "\"\""
    },
    "fa-fire-extinguisher:before": {
        "content": "\"\""
    },
    "fa-rocket:before": {
        "content": "\"\""
    },
    "fa-maxcdn:before": {
        "content": "\"\""
    },
    "fa-chevron-circle-left:before": {
        "content": "\"\""
    },
    "fa-chevron-circle-right:before": {
        "content": "\"\""
    },
    "fa-chevron-circle-up:before": {
        "content": "\"\""
    },
    "fa-chevron-circle-down:before": {
        "content": "\"\""
    },
    "fa-html5:before": {
        "content": "\"\""
    },
    "fa-css3:before": {
        "content": "\"\""
    },
    "fa-anchor:before": {
        "content": "\"\""
    },
    "fa-unlock-alt:before": {
        "content": "\"\""
    },
    "fa-bullseye:before": {
        "content": "\"\""
    },
    "fa-ellipsis-h:before": {
        "content": "\"\""
    },
    "fa-ellipsis-v:before": {
        "content": "\"\""
    },
    "fa-rss-square:before": {
        "content": "\"\""
    },
    "fa-play-circle:before": {
        "content": "\"\""
    },
    "fa-ticket:before": {
        "content": "\"\""
    },
    "fa-minus-square:before": {
        "content": "\"\""
    },
    "fa-minus-square-o:before": {
        "content": "\"\""
    },
    "fa-level-up:before": {
        "content": "\"\""
    },
    "fa-level-down:before": {
        "content": "\"\""
    },
    "fa-check-square:before": {
        "content": "\"\""
    },
    "fa-pencil-square:before": {
        "content": "\"\""
    },
    "fa-external-link-square:before": {
        "content": "\"\""
    },
    "fa-share-square:before": {
        "content": "\"\""
    },
    "fa-compass:before": {
        "content": "\"\""
    },
    "fa-toggle-down:before": {
        "content": "\"\""
    },
    "fa-caret-square-o-down:before": {
        "content": "\"\""
    },
    "fa-toggle-up:before": {
        "content": "\"\""
    },
    "fa-caret-square-o-up:before": {
        "content": "\"\""
    },
    "fa-toggle-right:before": {
        "content": "\"\""
    },
    "fa-caret-square-o-right:before": {
        "content": "\"\""
    },
    "fa-euro:before": {
        "content": "\"\""
    },
    "fa-eur:before": {
        "content": "\"\""
    },
    "fa-gbp:before": {
        "content": "\"\""
    },
    "fa-dollar:before": {
        "content": "\"\""
    },
    "fa-usd:before": {
        "content": "\"\""
    },
    "fa-rupee:before": {
        "content": "\"\""
    },
    "fa-inr:before": {
        "content": "\"\""
    },
    "fa-cny:before": {
        "content": "\"\""
    },
    "fa-rmb:before": {
        "content": "\"\""
    },
    "fa-yen:before": {
        "content": "\"\""
    },
    "fa-jpy:before": {
        "content": "\"\""
    },
    "fa-ruble:before": {
        "content": "\"\""
    },
    "fa-rouble:before": {
        "content": "\"\""
    },
    "fa-rub:before": {
        "content": "\"\""
    },
    "fa-won:before": {
        "content": "\"\""
    },
    "fa-krw:before": {
        "content": "\"\""
    },
    "fa-bitcoin:before": {
        "content": "\"\""
    },
    "fa-btc:before": {
        "content": "\"\""
    },
    "fa-file:before": {
        "content": "\"\""
    },
    "fa-file-text:before": {
        "content": "\"\""
    },
    "fa-sort-alpha-asc:before": {
        "content": "\"\""
    },
    "fa-sort-alpha-desc:before": {
        "content": "\"\""
    },
    "fa-sort-amount-asc:before": {
        "content": "\"\""
    },
    "fa-sort-amount-desc:before": {
        "content": "\"\""
    },
    "fa-sort-numeric-asc:before": {
        "content": "\"\""
    },
    "fa-sort-numeric-desc:before": {
        "content": "\"\""
    },
    "fa-thumbs-up:before": {
        "content": "\"\""
    },
    "fa-thumbs-down:before": {
        "content": "\"\""
    },
    "fa-youtube-square:before": {
        "content": "\"\""
    },
    "fa-youtube:before": {
        "content": "\"\""
    },
    "fa-xing:before": {
        "content": "\"\""
    },
    "fa-xing-square:before": {
        "content": "\"\""
    },
    "fa-youtube-play:before": {
        "content": "\"\""
    },
    "fa-dropbox:before": {
        "content": "\"\""
    },
    "fa-stack-overflow:before": {
        "content": "\"\""
    },
    "fa-instagram:before": {
        "content": "\"\""
    },
    "fa-flickr:before": {
        "content": "\"\""
    },
    "fa-adn:before": {
        "content": "\"\""
    },
    "fa-bitbucket:before": {
        "content": "\"\""
    },
    "fa-bitbucket-square:before": {
        "content": "\"\""
    },
    "fa-tumblr:before": {
        "content": "\"\""
    },
    "fa-tumblr-square:before": {
        "content": "\"\""
    },
    "fa-long-arrow-down:before": {
        "content": "\"\""
    },
    "fa-long-arrow-up:before": {
        "content": "\"\""
    },
    "fa-long-arrow-left:before": {
        "content": "\"\""
    },
    "fa-long-arrow-right:before": {
        "content": "\"\""
    },
    "fa-apple:before": {
        "content": "\"\""
    },
    "fa-windows:before": {
        "content": "\"\""
    },
    "fa-android:before": {
        "content": "\"\""
    },
    "fa-linux:before": {
        "content": "\"\""
    },
    "fa-dribbble:before": {
        "content": "\"\""
    },
    "fa-skype:before": {
        "content": "\"\""
    },
    "fa-foursquare:before": {
        "content": "\"\""
    },
    "fa-trello:before": {
        "content": "\"\""
    },
    "fa-female:before": {
        "content": "\"\""
    },
    "fa-male:before": {
        "content": "\"\""
    },
    "fa-gittip:before": {
        "content": "\"\""
    },
    "fa-gratipay:before": {
        "content": "\"\""
    },
    "fa-sun-o:before": {
        "content": "\"\""
    },
    "fa-moon-o:before": {
        "content": "\"\""
    },
    "fa-archive:before": {
        "content": "\"\""
    },
    "fa-bug:before": {
        "content": "\"\""
    },
    "fa-vk:before": {
        "content": "\"\""
    },
    "fa-weibo:before": {
        "content": "\"\""
    },
    "fa-renren:before": {
        "content": "\"\""
    },
    "fa-pagelines:before": {
        "content": "\"\""
    },
    "fa-stack-exchange:before": {
        "content": "\"\""
    },
    "fa-arrow-circle-o-right:before": {
        "content": "\"\""
    },
    "fa-arrow-circle-o-left:before": {
        "content": "\"\""
    },
    "fa-toggle-left:before": {
        "content": "\"\""
    },
    "fa-caret-square-o-left:before": {
        "content": "\"\""
    },
    "fa-dot-circle-o:before": {
        "content": "\"\""
    },
    "fa-wheelchair:before": {
        "content": "\"\""
    },
    "fa-vimeo-square:before": {
        "content": "\"\""
    },
    "fa-turkish-lira:before": {
        "content": "\"\""
    },
    "fa-try:before": {
        "content": "\"\""
    },
    "fa-plus-square-o:before": {
        "content": "\"\""
    },
    "fa-space-shuttle:before": {
        "content": "\"\""
    },
    "fa-slack:before": {
        "content": "\"\""
    },
    "fa-envelope-square:before": {
        "content": "\"\""
    },
    "fa-wordpress:before": {
        "content": "\"\""
    },
    "fa-openid:before": {
        "content": "\"\""
    },
    "fa-institution:before": {
        "content": "\"\""
    },
    "fa-bank:before": {
        "content": "\"\""
    },
    "fa-university:before": {
        "content": "\"\""
    },
    "fa-mortar-board:before": {
        "content": "\"\""
    },
    "fa-graduation-cap:before": {
        "content": "\"\""
    },
    "fa-yahoo:before": {
        "content": "\"\""
    },
    "fa-google:before": {
        "content": "\"\""
    },
    "fa-reddit:before": {
        "content": "\"\""
    },
    "fa-reddit-square:before": {
        "content": "\"\""
    },
    "fa-stumbleupon-circle:before": {
        "content": "\"\""
    },
    "fa-stumbleupon:before": {
        "content": "\"\""
    },
    "fa-delicious:before": {
        "content": "\"\""
    },
    "fa-digg:before": {
        "content": "\"\""
    },
    "fa-pied-piper-pp:before": {
        "content": "\"\""
    },
    "fa-pied-piper-alt:before": {
        "content": "\"\""
    },
    "fa-drupal:before": {
        "content": "\"\""
    },
    "fa-joomla:before": {
        "content": "\"\""
    },
    "fa-language:before": {
        "content": "\"\""
    },
    "fa-fax:before": {
        "content": "\"\""
    },
    "fa-building:before": {
        "content": "\"\""
    },
    "fa-child:before": {
        "content": "\"\""
    },
    "fa-paw:before": {
        "content": "\"\""
    },
    "fa-spoon:before": {
        "content": "\"\""
    },
    "fa-cube:before": {
        "content": "\"\""
    },
    "fa-cubes:before": {
        "content": "\"\""
    },
    "fa-behance:before": {
        "content": "\"\""
    },
    "fa-behance-square:before": {
        "content": "\"\""
    },
    "fa-steam:before": {
        "content": "\"\""
    },
    "fa-steam-square:before": {
        "content": "\"\""
    },
    "fa-recycle:before": {
        "content": "\"\""
    },
    "fa-automobile:before": {
        "content": "\"\""
    },
    "fa-car:before": {
        "content": "\"\""
    },
    "fa-cab:before": {
        "content": "\"\""
    },
    "fa-taxi:before": {
        "content": "\"\""
    },
    "fa-tree:before": {
        "content": "\"\""
    },
    "icon-tree:before": {
        "content": "\"\""
    },
    "fa-spotify:before": {
        "content": "\"\""
    },
    "fa-deviantart:before": {
        "content": "\"\""
    },
    "fa-soundcloud:before": {
        "content": "\"\""
    },
    "fa-database:before": {
        "content": "\"\""
    },
    "fa-file-pdf-o:before": {
        "content": "\"\""
    },
    "fa-file-word-o:before": {
        "content": "\"\""
    },
    "fa-file-excel-o:before": {
        "content": "\"\""
    },
    "fa-file-powerpoint-o:before": {
        "content": "\"\""
    },
    "fa-file-photo-o:before": {
        "content": "\"\""
    },
    "fa-file-picture-o:before": {
        "content": "\"\""
    },
    "fa-file-image-o:before": {
        "content": "\"\""
    },
    "fa-file-zip-o:before": {
        "content": "\"\""
    },
    "fa-file-archive-o:before": {
        "content": "\"\""
    },
    "fa-file-sound-o:before": {
        "content": "\"\""
    },
    "fa-file-audio-o:before": {
        "content": "\"\""
    },
    "fa-file-movie-o:before": {
        "content": "\"\""
    },
    "fa-file-video-o:before": {
        "content": "\"\""
    },
    "fa-file-code-o:before": {
        "content": "\"\""
    },
    "fa-vine:before": {
        "content": "\"\""
    },
    "fa-codepen:before": {
        "content": "\"\""
    },
    "fa-jsfiddle:before": {
        "content": "\"\""
    },
    "fa-life-bouy:before": {
        "content": "\"\""
    },
    "fa-life-buoy:before": {
        "content": "\"\""
    },
    "fa-life-saver:before": {
        "content": "\"\""
    },
    "fa-support:before": {
        "content": "\"\""
    },
    "fa-life-ring:before": {
        "content": "\"\""
    },
    "fa-circle-o-notch:before": {
        "content": "\"\""
    },
    "fa-ra:before": {
        "content": "\"\""
    },
    "fa-resistance:before": {
        "content": "\"\""
    },
    "fa-rebel:before": {
        "content": "\"\""
    },
    "fa-ge:before": {
        "content": "\"\""
    },
    "fa-empire:before": {
        "content": "\"\""
    },
    "fa-git-square:before": {
        "content": "\"\""
    },
    "fa-git:before": {
        "content": "\"\""
    },
    "fa-y-combinator-square:before": {
        "content": "\"\""
    },
    "fa-yc-square:before": {
        "content": "\"\""
    },
    "fa-hacker-news:before": {
        "content": "\"\""
    },
    "fa-tencent-weibo:before": {
        "content": "\"\""
    },
    "fa-qq:before": {
        "content": "\"\""
    },
    "fa-wechat:before": {
        "content": "\"\""
    },
    "fa-weixin:before": {
        "content": "\"\""
    },
    "fa-send:before": {
        "content": "\"\""
    },
    "fa-paper-plane:before": {
        "content": "\"\""
    },
    "fa-send-o:before": {
        "content": "\"\""
    },
    "fa-paper-plane-o:before": {
        "content": "\"\""
    },
    "fa-history:before": {
        "content": "\"\""
    },
    "fa-circle-thin:before": {
        "content": "\"\""
    },
    "fa-header:before": {
        "content": "\"\""
    },
    "fa-paragraph:before": {
        "content": "\"\""
    },
    "fa-sliders:before": {
        "content": "\"\""
    },
    "fa-share-alt:before": {
        "content": "\"\""
    },
    "fa-share-alt-square:before": {
        "content": "\"\""
    },
    "fa-bomb:before": {
        "content": "\"\""
    },
    "fa-soccer-ball-o:before": {
        "content": "\"\""
    },
    "fa-futbol-o:before": {
        "content": "\"\""
    },
    "fa-tty:before": {
        "content": "\"\""
    },
    "fa-binoculars:before": {
        "content": "\"\""
    },
    "fa-plug:before": {
        "content": "\"\""
    },
    "fa-slideshare:before": {
        "content": "\"\""
    },
    "fa-twitch:before": {
        "content": "\"\""
    },
    "fa-yelp:before": {
        "content": "\"\""
    },
    "fa-newspaper-o:before": {
        "content": "\"\""
    },
    "fa-wifi:before": {
        "content": "\"\""
    },
    "fa-calculator:before": {
        "content": "\"\""
    },
    "fa-paypal:before": {
        "content": "\"\""
    },
    "fa-google-wallet:before": {
        "content": "\"\""
    },
    "fa-cc-visa:before": {
        "content": "\"\""
    },
    "fa-cc-mastercard:before": {
        "content": "\"\""
    },
    "fa-cc-discover:before": {
        "content": "\"\""
    },
    "fa-cc-amex:before": {
        "content": "\"\""
    },
    "fa-cc-paypal:before": {
        "content": "\"\""
    },
    "fa-cc-stripe:before": {
        "content": "\"\""
    },
    "fa-bell-slash:before": {
        "content": "\"\""
    },
    "fa-bell-slash-o:before": {
        "content": "\"\""
    },
    "fa-trash:before": {
        "content": "\"\""
    },
    "icon-trash:before": {
        "content": "\"\""
    },
    "fa-copyright:before": {
        "content": "\"\""
    },
    "fa-at:before": {
        "content": "\"\""
    },
    "fa-eyedropper:before": {
        "content": "\"\""
    },
    "fa-paint-brush:before": {
        "content": "\"\""
    },
    "fa-birthday-cake:before": {
        "content": "\"\""
    },
    "fa-area-chart:before": {
        "content": "\"\""
    },
    "fa-pie-chart:before": {
        "content": "\"\""
    },
    "fa-line-chart:before": {
        "content": "\"\""
    },
    "fa-lastfm:before": {
        "content": "\"\""
    },
    "fa-lastfm-square:before": {
        "content": "\"\""
    },
    "fa-toggle-off:before": {
        "content": "\"\""
    },
    "fa-toggle-on:before": {
        "content": "\"\""
    },
    "fa-bicycle:before": {
        "content": "\"\""
    },
    "fa-bus:before": {
        "content": "\"\""
    },
    "fa-ioxhost:before": {
        "content": "\"\""
    },
    "fa-angellist:before": {
        "content": "\"\""
    },
    "fa-cc:before": {
        "content": "\"\""
    },
    "fa-shekel:before": {
        "content": "\"\""
    },
    "fa-sheqel:before": {
        "content": "\"\""
    },
    "fa-ils:before": {
        "content": "\"\""
    },
    "fa-meanpath:before": {
        "content": "\"\""
    },
    "fa-buysellads:before": {
        "content": "\"\""
    },
    "fa-connectdevelop:before": {
        "content": "\"\""
    },
    "fa-dashcube:before": {
        "content": "\"\""
    },
    "fa-forumbee:before": {
        "content": "\"\""
    },
    "fa-leanpub:before": {
        "content": "\"\""
    },
    "fa-sellsy:before": {
        "content": "\"\""
    },
    "fa-shirtsinbulk:before": {
        "content": "\"\""
    },
    "fa-simplybuilt:before": {
        "content": "\"\""
    },
    "fa-skyatlas:before": {
        "content": "\"\""
    },
    "fa-cart-plus:before": {
        "content": "\"\""
    },
    "fa-cart-arrow-down:before": {
        "content": "\"\""
    },
    "fa-diamond:before": {
        "content": "\"\""
    },
    "fa-ship:before": {
        "content": "\"\""
    },
    "fa-user-secret:before": {
        "content": "\"\""
    },
    "fa-motorcycle:before": {
        "content": "\"\""
    },
    "fa-street-view:before": {
        "content": "\"\""
    },
    "fa-heartbeat:before": {
        "content": "\"\""
    },
    "fa-venus:before": {
        "content": "\"\""
    },
    "fa-mars:before": {
        "content": "\"\""
    },
    "fa-mercury:before": {
        "content": "\"\""
    },
    "fa-intersex:before": {
        "content": "\"\""
    },
    "fa-transgender:before": {
        "content": "\"\""
    },
    "fa-transgender-alt:before": {
        "content": "\"\""
    },
    "fa-venus-double:before": {
        "content": "\"\""
    },
    "fa-mars-double:before": {
        "content": "\"\""
    },
    "fa-venus-mars:before": {
        "content": "\"\""
    },
    "fa-mars-stroke:before": {
        "content": "\"\""
    },
    "fa-mars-stroke-v:before": {
        "content": "\"\""
    },
    "fa-mars-stroke-h:before": {
        "content": "\"\""
    },
    "fa-neuter:before": {
        "content": "\"\""
    },
    "fa-genderless:before": {
        "content": "\"\""
    },
    "fa-facebook-official:before": {
        "content": "\"\""
    },
    "fa-pinterest-p:before": {
        "content": "\"\""
    },
    "fa-whatsapp:before": {
        "content": "\"\""
    },
    "fa-server:before": {
        "content": "\"\""
    },
    "fa-user-plus:before": {
        "content": "\"\""
    },
    "fa-user-times:before": {
        "content": "\"\""
    },
    "fa-hotel:before": {
        "content": "\"\""
    },
    "fa-bed:before": {
        "content": "\"\""
    },
    "fa-viacoin:before": {
        "content": "\"\""
    },
    "fa-train:before": {
        "content": "\"\""
    },
    "fa-subway:before": {
        "content": "\"\""
    },
    "fa-medium:before": {
        "content": "\"\""
    },
    "fa-yc:before": {
        "content": "\"\""
    },
    "fa-y-combinator:before": {
        "content": "\"\""
    },
    "fa-optin-monster:before": {
        "content": "\"\""
    },
    "fa-opencart:before": {
        "content": "\"\""
    },
    "fa-expeditedssl:before": {
        "content": "\"\""
    },
    "fa-battery-4:before": {
        "content": "\"\""
    },
    "fa-battery:before": {
        "content": "\"\""
    },
    "fa-battery-full:before": {
        "content": "\"\""
    },
    "fa-battery-3:before": {
        "content": "\"\""
    },
    "fa-battery-three-quarters:before": {
        "content": "\"\""
    },
    "fa-battery-2:before": {
        "content": "\"\""
    },
    "fa-battery-half:before": {
        "content": "\"\""
    },
    "fa-battery-1:before": {
        "content": "\"\""
    },
    "fa-battery-quarter:before": {
        "content": "\"\""
    },
    "fa-battery-0:before": {
        "content": "\"\""
    },
    "fa-battery-empty:before": {
        "content": "\"\""
    },
    "fa-mouse-pointer:before": {
        "content": "\"\""
    },
    "fa-i-cursor:before": {
        "content": "\"\""
    },
    "fa-object-group:before": {
        "content": "\"\""
    },
    "fa-object-ungroup:before": {
        "content": "\"\""
    },
    "fa-sticky-note:before": {
        "content": "\"\""
    },
    "fa-sticky-note-o:before": {
        "content": "\"\""
    },
    "fa-cc-jcb:before": {
        "content": "\"\""
    },
    "fa-cc-diners-club:before": {
        "content": "\"\""
    },
    "fa-clone:before": {
        "content": "\"\""
    },
    "icon-clone:before": {
        "content": "\"\""
    },
    "fa-balance-scale:before": {
        "content": "\"\""
    },
    "fa-hourglass-o:before": {
        "content": "\"\""
    },
    "fa-hourglass-1:before": {
        "content": "\"\""
    },
    "fa-hourglass-start:before": {
        "content": "\"\""
    },
    "fa-hourglass-2:before": {
        "content": "\"\""
    },
    "fa-hourglass-half:before": {
        "content": "\"\""
    },
    "fa-hourglass-3:before": {
        "content": "\"\""
    },
    "fa-hourglass-end:before": {
        "content": "\"\""
    },
    "fa-hourglass:before": {
        "content": "\"\""
    },
    "fa-hand-grab-o:before": {
        "content": "\"\""
    },
    "fa-hand-rock-o:before": {
        "content": "\"\""
    },
    "fa-hand-stop-o:before": {
        "content": "\"\""
    },
    "fa-hand-paper-o:before": {
        "content": "\"\""
    },
    "fa-hand-scissors-o:before": {
        "content": "\"\""
    },
    "fa-hand-lizard-o:before": {
        "content": "\"\""
    },
    "fa-hand-spock-o:before": {
        "content": "\"\""
    },
    "fa-hand-pointer-o:before": {
        "content": "\"\""
    },
    "fa-hand-peace-o:before": {
        "content": "\"\""
    },
    "fa-trademark:before": {
        "content": "\"\""
    },
    "fa-registered:before": {
        "content": "\"\""
    },
    "fa-creative-commons:before": {
        "content": "\"\""
    },
    "fa-gg:before": {
        "content": "\"\""
    },
    "fa-gg-circle:before": {
        "content": "\"\""
    },
    "fa-tripadvisor:before": {
        "content": "\"\""
    },
    "fa-odnoklassniki:before": {
        "content": "\"\""
    },
    "fa-odnoklassniki-square:before": {
        "content": "\"\""
    },
    "fa-get-pocket:before": {
        "content": "\"\""
    },
    "fa-wikipedia-w:before": {
        "content": "\"\""
    },
    "fa-safari:before": {
        "content": "\"\""
    },
    "fa-chrome:before": {
        "content": "\"\""
    },
    "fa-firefox:before": {
        "content": "\"\""
    },
    "fa-opera:before": {
        "content": "\"\""
    },
    "fa-internet-explorer:before": {
        "content": "\"\""
    },
    "fa-tv:before": {
        "content": "\"\""
    },
    "fa-television:before": {
        "content": "\"\""
    },
    "fa-contao:before": {
        "content": "\"\""
    },
    "fa-500px:before": {
        "content": "\"\""
    },
    "fa-amazon:before": {
        "content": "\"\""
    },
    "fa-calendar-plus-o:before": {
        "content": "\"\""
    },
    "fa-calendar-minus-o:before": {
        "content": "\"\""
    },
    "fa-calendar-times-o:before": {
        "content": "\"\""
    },
    "fa-calendar-check-o:before": {
        "content": "\"\""
    },
    "fa-industry:before": {
        "content": "\"\""
    },
    "fa-map-pin:before": {
        "content": "\"\""
    },
    "fa-map-signs:before": {
        "content": "\"\""
    },
    "fa-map-o:before": {
        "content": "\"\""
    },
    "fa-map:before": {
        "content": "\"\""
    },
    "fa-commenting:before": {
        "content": "\"\""
    },
    "fa-commenting-o:before": {
        "content": "\"\""
    },
    "fa-houzz:before": {
        "content": "\"\""
    },
    "fa-vimeo:before": {
        "content": "\"\""
    },
    "fa-black-tie:before": {
        "content": "\"\""
    },
    "fa-fonticons:before": {
        "content": "\"\""
    },
    "fa-reddit-alien:before": {
        "content": "\"\""
    },
    "fa-edge:before": {
        "content": "\"\""
    },
    "fa-credit-card-alt:before": {
        "content": "\"\""
    },
    "fa-codiepie:before": {
        "content": "\"\""
    },
    "fa-modx:before": {
        "content": "\"\""
    },
    "fa-fort-awesome:before": {
        "content": "\"\""
    },
    "fa-usb:before": {
        "content": "\"\""
    },
    "fa-product-hunt:before": {
        "content": "\"\""
    },
    "fa-mixcloud:before": {
        "content": "\"\""
    },
    "fa-scribd:before": {
        "content": "\"\""
    },
    "fa-pause-circle:before": {
        "content": "\"\""
    },
    "fa-pause-circle-o:before": {
        "content": "\"\""
    },
    "fa-stop-circle:before": {
        "content": "\"\""
    },
    "fa-stop-circle-o:before": {
        "content": "\"\""
    },
    "fa-shopping-bag:before": {
        "content": "\"\""
    },
    "fa-shopping-basket:before": {
        "content": "\"\""
    },
    "fa-hashtag:before": {
        "content": "\"\""
    },
    "fa-bluetooth:before": {
        "content": "\"\""
    },
    "fa-bluetooth-b:before": {
        "content": "\"\""
    },
    "fa-percent:before": {
        "content": "\"\""
    },
    "fa-gitlab:before": {
        "content": "\"\""
    },
    "fa-wpbeginner:before": {
        "content": "\"\""
    },
    "fa-wpforms:before": {
        "content": "\"\""
    },
    "fa-envira:before": {
        "content": "\"\""
    },
    "fa-universal-access:before": {
        "content": "\"\""
    },
    "fa-wheelchair-alt:before": {
        "content": "\"\""
    },
    "fa-question-circle-o:before": {
        "content": "\"\""
    },
    "fa-blind:before": {
        "content": "\"\""
    },
    "fa-audio-description:before": {
        "content": "\"\""
    },
    "fa-volume-control-phone:before": {
        "content": "\"\""
    },
    "fa-braille:before": {
        "content": "\"\""
    },
    "fa-assistive-listening-systems:before": {
        "content": "\"\""
    },
    "fa-asl-interpreting:before": {
        "content": "\"\""
    },
    "fa-american-sign-language-interpreting:before": {
        "content": "\"\""
    },
    "fa-deafness:before": {
        "content": "\"\""
    },
    "fa-hard-of-hearing:before": {
        "content": "\"\""
    },
    "fa-deaf:before": {
        "content": "\"\""
    },
    "fa-glide:before": {
        "content": "\"\""
    },
    "fa-glide-g:before": {
        "content": "\"\""
    },
    "fa-signing:before": {
        "content": "\"\""
    },
    "fa-sign-language:before": {
        "content": "\"\""
    },
    "fa-low-vision:before": {
        "content": "\"\""
    },
    "fa-viadeo:before": {
        "content": "\"\""
    },
    "fa-viadeo-square:before": {
        "content": "\"\""
    },
    "fa-snapchat:before": {
        "content": "\"\""
    },
    "fa-snapchat-ghost:before": {
        "content": "\"\""
    },
    "fa-snapchat-square:before": {
        "content": "\"\""
    },
    "fa-pied-piper:before": {
        "content": "\"\""
    },
    "fa-first-order:before": {
        "content": "\"\""
    },
    "fa-yoast:before": {
        "content": "\"\""
    },
    "fa-themeisle:before": {
        "content": "\"\""
    },
    "fa-google-plus-circle:before": {
        "content": "\"\""
    },
    "fa-google-plus-official:before": {
        "content": "\"\""
    },
    "fa-fa:before": {
        "content": "\"\""
    },
    "fa-font-awesome:before": {
        "content": "\"\""
    },
    "fa-handshake-o:before": {
        "content": "\"\""
    },
    "fa-envelope-open:before": {
        "content": "\"\""
    },
    "fa-envelope-open-o:before": {
        "content": "\"\""
    },
    "fa-linode:before": {
        "content": "\"\""
    },
    "fa-address-book:before": {
        "content": "\"\""
    },
    "fa-address-book-o:before": {
        "content": "\"\""
    },
    "fa-vcard:before": {
        "content": "\"\""
    },
    "fa-address-card:before": {
        "content": "\"\""
    },
    "fa-vcard-o:before": {
        "content": "\"\""
    },
    "fa-address-card-o:before": {
        "content": "\"\""
    },
    "fa-user-circle:before": {
        "content": "\"\""
    },
    "fa-user-circle-o:before": {
        "content": "\"\""
    },
    "fa-user-o:before": {
        "content": "\"\""
    },
    "fa-id-badge:before": {
        "content": "\"\""
    },
    "fa-drivers-license:before": {
        "content": "\"\""
    },
    "fa-id-card:before": {
        "content": "\"\""
    },
    "fa-drivers-license-o:before": {
        "content": "\"\""
    },
    "fa-id-card-o:before": {
        "content": "\"\""
    },
    "fa-quora:before": {
        "content": "\"\""
    },
    "fa-free-code-camp:before": {
        "content": "\"\""
    },
    "fa-telegram:before": {
        "content": "\"\""
    },
    "fa-thermometer-4:before": {
        "content": "\"\""
    },
    "fa-thermometer:before": {
        "content": "\"\""
    },
    "fa-thermometer-full:before": {
        "content": "\"\""
    },
    "fa-thermometer-3:before": {
        "content": "\"\""
    },
    "fa-thermometer-three-quarters:before": {
        "content": "\"\""
    },
    "fa-thermometer-2:before": {
        "content": "\"\""
    },
    "fa-thermometer-half:before": {
        "content": "\"\""
    },
    "fa-thermometer-1:before": {
        "content": "\"\""
    },
    "fa-thermometer-quarter:before": {
        "content": "\"\""
    },
    "fa-thermometer-0:before": {
        "content": "\"\""
    },
    "fa-thermometer-empty:before": {
        "content": "\"\""
    },
    "fa-shower:before": {
        "content": "\"\""
    },
    "fa-bathtub:before": {
        "content": "\"\""
    },
    "fa-s15:before": {
        "content": "\"\""
    },
    "fa-bath:before": {
        "content": "\"\""
    },
    "fa-podcast:before": {
        "content": "\"\""
    },
    "fa-window-maximize:before": {
        "content": "\"\""
    },
    "fa-window-minimize:before": {
        "content": "\"\""
    },
    "fa-window-restore:before": {
        "content": "\"\""
    },
    "fa-times-rectangle:before": {
        "content": "\"\""
    },
    "fa-window-close:before": {
        "content": "\"\""
    },
    "fa-times-rectangle-o:before": {
        "content": "\"\""
    },
    "fa-window-close-o:before": {
        "content": "\"\""
    },
    "fa-bandcamp:before": {
        "content": "\"\""
    },
    "fa-grav:before": {
        "content": "\"\""
    },
    "fa-etsy:before": {
        "content": "\"\""
    },
    "fa-imdb:before": {
        "content": "\"\""
    },
    "fa-ravelry:before": {
        "content": "\"\""
    },
    "fa-eercast:before": {
        "content": "\"\""
    },
    "fa-microchip:before": {
        "content": "\"\""
    },
    "fa-snowflake-o:before": {
        "content": "\"\""
    },
    "fa-superpowers:before": {
        "content": "\"\""
    },
    "fa-wpexplorer:before": {
        "content": "\"\""
    },
    "fa-meetup:before": {
        "content": "\"\""
    },
    "sr-only": {
        "position": "absolute",
        "width": 1,
        "height": 1,
        "padding": 0,
        "margin": -1,
        "overflow": "hidden",
        "clip": "rect(0, 0, 0, 0)",
        "border": 0
    },
    "sr-only-focusable:active": {
        "position": "static",
        "width": null,
        "height": null,
        "margin": 0,
        "overflow": "visible",
        "clip": "auto"
    },
    "sr-only-focusable:focus": {
        "position": "static",
        "width": null,
        "height": null,
        "margin": 0,
        "overflow": "visible",
        "clip": "auto"
    },
    "mdi:before": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)"
    },
    "icon-lightbulb:before": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)",
        "content": "\"\\F335\""
    },
    "icon-cards:before": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)",
        "content": "\"\\F638\""
    },
    "icon-close:before": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)",
        "content": "\"\\F5AD\""
    },
    "icon-minimize:before": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)",
        "content": "\"\\F5B0\""
    },
    "icon-maximize:before": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)",
        "content": "\"\\F5AF\""
    },
    "icon-restore:before": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)",
        "content": "\"\\F5B2\""
    },
    "icon-bars:before": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)",
        "content": "\"\\F35C\""
    },
    "icon-arrow-left:before": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)",
        "content": "\"\\F600\""
    },
    "icon-arrow-right:before": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)",
        "content": "\"\\F601\""
    },
    "icon-search-plus:before": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)",
        "content": "\"\\F34B\""
    },
    "icon-search-minus:before": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)",
        "content": "\"\\F34A\""
    },
    "icon-folderview:before": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)",
        "content": "\"\\F253\""
    },
    "icon-file-text:before": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)",
        "content": "\"\\F5DA\""
    },
    "mdi-set": {
        "font": "normal normal normal 24px/1 \"Material Design Icons\"",
        "fontSize": null,
        "textRendering": "auto",
        "lineHeight": null,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "transform": "translate(0, 0)"
    },
    "mdi-access-point:before": {
        "content": "\"\\F002\""
    },
    "mdi-access-point-network:before": {
        "content": "\"\\F003\""
    },
    "mdi-account:before": {
        "content": "\"\\F004\""
    },
    "mdi-account-alert:before": {
        "content": "\"\\F005\""
    },
    "mdi-account-box:before": {
        "content": "\"\\F006\""
    },
    "mdi-account-box-outline:before": {
        "content": "\"\\F007\""
    },
    "mdi-account-card-details:before": {
        "content": "\"\\F5D2\""
    },
    "mdi-account-check:before": {
        "content": "\"\\F008\""
    },
    "mdi-account-circle:before": {
        "content": "\"\\F009\""
    },
    "mdi-account-convert:before": {
        "content": "\"\\F00A\""
    },
    "mdi-account-edit:before": {
        "content": "\"\\F6BB\""
    },
    "mdi-account-key:before": {
        "content": "\"\\F00B\""
    },
    "mdi-account-location:before": {
        "content": "\"\\F00C\""
    },
    "mdi-account-minus:before": {
        "content": "\"\\F00D\""
    },
    "mdi-account-multiple:before": {
        "content": "\"\\F00E\""
    },
    "mdi-account-multiple-minus:before": {
        "content": "\"\\F5D3\""
    },
    "mdi-account-multiple-outline:before": {
        "content": "\"\\F00F\""
    },
    "mdi-account-multiple-plus:before": {
        "content": "\"\\F010\""
    },
    "mdi-account-network:before": {
        "content": "\"\\F011\""
    },
    "mdi-account-off:before": {
        "content": "\"\\F012\""
    },
    "mdi-account-outline:before": {
        "content": "\"\\F013\""
    },
    "mdi-account-plus:before": {
        "content": "\"\\F014\""
    },
    "mdi-account-remove:before": {
        "content": "\"\\F015\""
    },
    "mdi-account-search:before": {
        "content": "\"\\F016\""
    },
    "mdi-account-settings:before": {
        "content": "\"\\F630\""
    },
    "mdi-account-settings-variant:before": {
        "content": "\"\\F631\""
    },
    "mdi-account-star:before": {
        "content": "\"\\F017\""
    },
    "mdi-account-star-variant:before": {
        "content": "\"\\F018\""
    },
    "mdi-account-switch:before": {
        "content": "\"\\F019\""
    },
    "mdi-adjust:before": {
        "content": "\"\\F01A\""
    },
    "mdi-air-conditioner:before": {
        "content": "\"\\F01B\""
    },
    "mdi-airballoon:before": {
        "content": "\"\\F01C\""
    },
    "mdi-airplane:before": {
        "content": "\"\\F01D\""
    },
    "mdi-airplane-landing:before": {
        "content": "\"\\F5D4\""
    },
    "mdi-airplane-off:before": {
        "content": "\"\\F01E\""
    },
    "mdi-airplane-takeoff:before": {
        "content": "\"\\F5D5\""
    },
    "mdi-airplay:before": {
        "content": "\"\\F01F\""
    },
    "mdi-alarm:before": {
        "content": "\"\\F020\""
    },
    "mdi-alarm-check:before": {
        "content": "\"\\F021\""
    },
    "mdi-alarm-multiple:before": {
        "content": "\"\\F022\""
    },
    "mdi-alarm-off:before": {
        "content": "\"\\F023\""
    },
    "mdi-alarm-plus:before": {
        "content": "\"\\F024\""
    },
    "mdi-alarm-snooze:before": {
        "content": "\"\\F68D\""
    },
    "mdi-album:before": {
        "content": "\"\\F025\""
    },
    "mdi-alert:before": {
        "content": "\"\\F026\""
    },
    "mdi-alert-box:before": {
        "content": "\"\\F027\""
    },
    "mdi-alert-circle:before": {
        "content": "\"\\F028\""
    },
    "mdi-alert-circle-outline:before": {
        "content": "\"\\F5D6\""
    },
    "mdi-alert-octagon:before": {
        "content": "\"\\F029\""
    },
    "mdi-alert-octagram:before": {
        "content": "\"\\F6BC\""
    },
    "mdi-alert-outline:before": {
        "content": "\"\\F02A\""
    },
    "mdi-all-inclusive:before": {
        "content": "\"\\F6BD\""
    },
    "mdi-alpha:before": {
        "content": "\"\\F02B\""
    },
    "mdi-alphabetical:before": {
        "content": "\"\\F02C\""
    },
    "mdi-altimeter:before": {
        "content": "\"\\F5D7\""
    },
    "mdi-amazon:before": {
        "content": "\"\\F02D\""
    },
    "mdi-amazon-clouddrive:before": {
        "content": "\"\\F02E\""
    },
    "mdi-ambulance:before": {
        "content": "\"\\F02F\""
    },
    "mdi-amplifier:before": {
        "content": "\"\\F030\""
    },
    "mdi-anchor:before": {
        "content": "\"\\F031\""
    },
    "mdi-android:before": {
        "content": "\"\\F032\""
    },
    "mdi-android-debug-bridge:before": {
        "content": "\"\\F033\""
    },
    "mdi-android-studio:before": {
        "content": "\"\\F034\""
    },
    "mdi-angular:before": {
        "content": "\"\\F6B1\""
    },
    "mdi-angularjs:before": {
        "content": "\"\\F6BE\""
    },
    "mdi-animation:before": {
        "content": "\"\\F5D8\""
    },
    "mdi-apple:before": {
        "content": "\"\\F035\""
    },
    "mdi-apple-finder:before": {
        "content": "\"\\F036\""
    },
    "mdi-apple-ios:before": {
        "content": "\"\\F037\""
    },
    "mdi-apple-keyboard-caps:before": {
        "content": "\"\\F632\""
    },
    "mdi-apple-keyboard-command:before": {
        "content": "\"\\F633\""
    },
    "mdi-apple-keyboard-control:before": {
        "content": "\"\\F634\""
    },
    "mdi-apple-keyboard-option:before": {
        "content": "\"\\F635\""
    },
    "mdi-apple-keyboard-shift:before": {
        "content": "\"\\F636\""
    },
    "mdi-apple-mobileme:before": {
        "content": "\"\\F038\""
    },
    "mdi-apple-safari:before": {
        "content": "\"\\F039\""
    },
    "mdi-application:before": {
        "content": "\"\\F614\""
    },
    "mdi-apps:before": {
        "content": "\"\\F03B\""
    },
    "mdi-archive:before": {
        "content": "\"\\F03C\""
    },
    "mdi-arrange-bring-forward:before": {
        "content": "\"\\F03D\""
    },
    "mdi-arrange-bring-to-front:before": {
        "content": "\"\\F03E\""
    },
    "mdi-arrange-send-backward:before": {
        "content": "\"\\F03F\""
    },
    "mdi-arrange-send-to-back:before": {
        "content": "\"\\F040\""
    },
    "mdi-arrow-all:before": {
        "content": "\"\\F041\""
    },
    "mdi-arrow-bottom-left:before": {
        "content": "\"\\F042\""
    },
    "mdi-arrow-bottom-right:before": {
        "content": "\"\\F043\""
    },
    "mdi-arrow-compress:before": {
        "content": "\"\\F615\""
    },
    "mdi-arrow-compress-all:before": {
        "content": "\"\\F044\""
    },
    "mdi-arrow-down:before": {
        "content": "\"\\F045\""
    },
    "mdi-arrow-down-bold:before": {
        "content": "\"\\F046\""
    },
    "mdi-arrow-down-bold-circle:before": {
        "content": "\"\\F047\""
    },
    "mdi-arrow-down-bold-circle-outline:before": {
        "content": "\"\\F048\""
    },
    "mdi-arrow-down-bold-hexagon-outline:before": {
        "content": "\"\\F049\""
    },
    "mdi-arrow-down-box:before": {
        "content": "\"\\F6BF\""
    },
    "mdi-arrow-down-drop-circle:before": {
        "content": "\"\\F04A\""
    },
    "mdi-arrow-down-drop-circle-outline:before": {
        "content": "\"\\F04B\""
    },
    "mdi-arrow-expand:before": {
        "content": "\"\\F616\""
    },
    "mdi-arrow-expand-all:before": {
        "content": "\"\\F04C\""
    },
    "mdi-arrow-left:before": {
        "content": "\"\\F04D\""
    },
    "mdi-arrow-left-bold:before": {
        "content": "\"\\F04E\""
    },
    "mdi-arrow-left-bold-circle:before": {
        "content": "\"\\F04F\""
    },
    "mdi-arrow-left-bold-circle-outline:before": {
        "content": "\"\\F050\""
    },
    "mdi-arrow-left-bold-hexagon-outline:before": {
        "content": "\"\\F051\""
    },
    "mdi-arrow-left-box:before": {
        "content": "\"\\F6C0\""
    },
    "mdi-arrow-left-drop-circle:before": {
        "content": "\"\\F052\""
    },
    "mdi-arrow-left-drop-circle-outline:before": {
        "content": "\"\\F053\""
    },
    "mdi-arrow-right:before": {
        "content": "\"\\F054\""
    },
    "mdi-arrow-right-bold:before": {
        "content": "\"\\F055\""
    },
    "mdi-arrow-right-bold-circle:before": {
        "content": "\"\\F056\""
    },
    "mdi-arrow-right-bold-circle-outline:before": {
        "content": "\"\\F057\""
    },
    "mdi-arrow-right-bold-hexagon-outline:before": {
        "content": "\"\\F058\""
    },
    "mdi-arrow-right-box:before": {
        "content": "\"\\F6C1\""
    },
    "mdi-arrow-right-drop-circle:before": {
        "content": "\"\\F059\""
    },
    "mdi-arrow-right-drop-circle-outline:before": {
        "content": "\"\\F05A\""
    },
    "mdi-arrow-top-left:before": {
        "content": "\"\\F05B\""
    },
    "mdi-arrow-top-right:before": {
        "content": "\"\\F05C\""
    },
    "mdi-arrow-up:before": {
        "content": "\"\\F05D\""
    },
    "mdi-arrow-up-bold:before": {
        "content": "\"\\F05E\""
    },
    "mdi-arrow-up-bold-circle:before": {
        "content": "\"\\F05F\""
    },
    "mdi-arrow-up-bold-circle-outline:before": {
        "content": "\"\\F060\""
    },
    "mdi-arrow-up-bold-hexagon-outline:before": {
        "content": "\"\\F061\""
    },
    "mdi-arrow-up-box:before": {
        "content": "\"\\F6C2\""
    },
    "mdi-arrow-up-drop-circle:before": {
        "content": "\"\\F062\""
    },
    "mdi-arrow-up-drop-circle-outline:before": {
        "content": "\"\\F063\""
    },
    "mdi-assistant:before": {
        "content": "\"\\F064\""
    },
    "mdi-asterisk:before": {
        "content": "\"\\F6C3\""
    },
    "mdi-at:before": {
        "content": "\"\\F065\""
    },
    "mdi-attachment:before": {
        "content": "\"\\F066\""
    },
    "mdi-audiobook:before": {
        "content": "\"\\F067\""
    },
    "mdi-auto-fix:before": {
        "content": "\"\\F068\""
    },
    "mdi-auto-upload:before": {
        "content": "\"\\F069\""
    },
    "mdi-autorenew:before": {
        "content": "\"\\F06A\""
    },
    "mdi-av-timer:before": {
        "content": "\"\\F06B\""
    },
    "mdi-baby:before": {
        "content": "\"\\F06C\""
    },
    "mdi-baby-buggy:before": {
        "content": "\"\\F68E\""
    },
    "mdi-backburger:before": {
        "content": "\"\\F06D\""
    },
    "mdi-backspace:before": {
        "content": "\"\\F06E\""
    },
    "mdi-backup-restore:before": {
        "content": "\"\\F06F\""
    },
    "mdi-bandcamp:before": {
        "content": "\"\\F674\""
    },
    "mdi-bank:before": {
        "content": "\"\\F070\""
    },
    "mdi-barcode:before": {
        "content": "\"\\F071\""
    },
    "mdi-barcode-scan:before": {
        "content": "\"\\F072\""
    },
    "mdi-barley:before": {
        "content": "\"\\F073\""
    },
    "mdi-barrel:before": {
        "content": "\"\\F074\""
    },
    "mdi-basecamp:before": {
        "content": "\"\\F075\""
    },
    "mdi-basket:before": {
        "content": "\"\\F076\""
    },
    "mdi-basket-fill:before": {
        "content": "\"\\F077\""
    },
    "mdi-basket-unfill:before": {
        "content": "\"\\F078\""
    },
    "mdi-battery:before": {
        "content": "\"\\F079\""
    },
    "mdi-battery-10:before": {
        "content": "\"\\F07A\""
    },
    "mdi-battery-20:before": {
        "content": "\"\\F07B\""
    },
    "mdi-battery-30:before": {
        "content": "\"\\F07C\""
    },
    "mdi-battery-40:before": {
        "content": "\"\\F07D\""
    },
    "mdi-battery-50:before": {
        "content": "\"\\F07E\""
    },
    "mdi-battery-60:before": {
        "content": "\"\\F07F\""
    },
    "mdi-battery-70:before": {
        "content": "\"\\F080\""
    },
    "mdi-battery-80:before": {
        "content": "\"\\F081\""
    },
    "mdi-battery-90:before": {
        "content": "\"\\F082\""
    },
    "mdi-battery-alert:before": {
        "content": "\"\\F083\""
    },
    "mdi-battery-charging:before": {
        "content": "\"\\F084\""
    },
    "mdi-battery-charging-100:before": {
        "content": "\"\\F085\""
    },
    "mdi-battery-charging-20:before": {
        "content": "\"\\F086\""
    },
    "mdi-battery-charging-30:before": {
        "content": "\"\\F087\""
    },
    "mdi-battery-charging-40:before": {
        "content": "\"\\F088\""
    },
    "mdi-battery-charging-60:before": {
        "content": "\"\\F089\""
    },
    "mdi-battery-charging-80:before": {
        "content": "\"\\F08A\""
    },
    "mdi-battery-charging-90:before": {
        "content": "\"\\F08B\""
    },
    "mdi-battery-minus:before": {
        "content": "\"\\F08C\""
    },
    "mdi-battery-negative:before": {
        "content": "\"\\F08D\""
    },
    "mdi-battery-outline:before": {
        "content": "\"\\F08E\""
    },
    "mdi-battery-plus:before": {
        "content": "\"\\F08F\""
    },
    "mdi-battery-positive:before": {
        "content": "\"\\F090\""
    },
    "mdi-battery-unknown:before": {
        "content": "\"\\F091\""
    },
    "mdi-beach:before": {
        "content": "\"\\F092\""
    },
    "mdi-beaker:before": {
        "content": "\"\\F68F\""
    },
    "mdi-beats:before": {
        "content": "\"\\F097\""
    },
    "mdi-beer:before": {
        "content": "\"\\F098\""
    },
    "mdi-behance:before": {
        "content": "\"\\F099\""
    },
    "mdi-bell:before": {
        "content": "\"\\F09A\""
    },
    "mdi-bell-off:before": {
        "content": "\"\\F09B\""
    },
    "mdi-bell-outline:before": {
        "content": "\"\\F09C\""
    },
    "mdi-bell-plus:before": {
        "content": "\"\\F09D\""
    },
    "mdi-bell-ring:before": {
        "content": "\"\\F09E\""
    },
    "mdi-bell-ring-outline:before": {
        "content": "\"\\F09F\""
    },
    "mdi-bell-sleep:before": {
        "content": "\"\\F0A0\""
    },
    "mdi-beta:before": {
        "content": "\"\\F0A1\""
    },
    "mdi-bible:before": {
        "content": "\"\\F0A2\""
    },
    "mdi-bike:before": {
        "content": "\"\\F0A3\""
    },
    "mdi-bing:before": {
        "content": "\"\\F0A4\""
    },
    "mdi-binoculars:before": {
        "content": "\"\\F0A5\""
    },
    "mdi-bio:before": {
        "content": "\"\\F0A6\""
    },
    "mdi-biohazard:before": {
        "content": "\"\\F0A7\""
    },
    "mdi-bitbucket:before": {
        "content": "\"\\F0A8\""
    },
    "mdi-black-mesa:before": {
        "content": "\"\\F0A9\""
    },
    "mdi-blackberry:before": {
        "content": "\"\\F0AA\""
    },
    "mdi-blender:before": {
        "content": "\"\\F0AB\""
    },
    "mdi-blinds:before": {
        "content": "\"\\F0AC\""
    },
    "mdi-block-helper:before": {
        "content": "\"\\F0AD\""
    },
    "mdi-blogger:before": {
        "content": "\"\\F0AE\""
    },
    "mdi-bluetooth:before": {
        "content": "\"\\F0AF\""
    },
    "mdi-bluetooth-audio:before": {
        "content": "\"\\F0B0\""
    },
    "mdi-bluetooth-connect:before": {
        "content": "\"\\F0B1\""
    },
    "mdi-bluetooth-off:before": {
        "content": "\"\\F0B2\""
    },
    "mdi-bluetooth-settings:before": {
        "content": "\"\\F0B3\""
    },
    "mdi-bluetooth-transfer:before": {
        "content": "\"\\F0B4\""
    },
    "mdi-blur:before": {
        "content": "\"\\F0B5\""
    },
    "mdi-blur-linear:before": {
        "content": "\"\\F0B6\""
    },
    "mdi-blur-off:before": {
        "content": "\"\\F0B7\""
    },
    "mdi-blur-radial:before": {
        "content": "\"\\F0B8\""
    },
    "mdi-bomb:before": {
        "content": "\"\\F690\""
    },
    "mdi-bomb-off:before": {
        "content": "\"\\F6C4\""
    },
    "mdi-bone:before": {
        "content": "\"\\F0B9\""
    },
    "mdi-book:before": {
        "content": "\"\\F0BA\""
    },
    "mdi-book-minus:before": {
        "content": "\"\\F5D9\""
    },
    "mdi-book-multiple:before": {
        "content": "\"\\F0BB\""
    },
    "mdi-book-multiple-variant:before": {
        "content": "\"\\F0BC\""
    },
    "mdi-book-open:before": {
        "content": "\"\\F0BD\""
    },
    "mdi-book-open-page-variant:before": {
        "content": "\"\\F5DA\""
    },
    "mdi-book-open-variant:before": {
        "content": "\"\\F0BE\""
    },
    "mdi-book-plus:before": {
        "content": "\"\\F5DB\""
    },
    "mdi-book-variant:before": {
        "content": "\"\\F0BF\""
    },
    "mdi-bookmark:before": {
        "content": "\"\\F0C0\""
    },
    "mdi-bookmark-check:before": {
        "content": "\"\\F0C1\""
    },
    "mdi-bookmark-music:before": {
        "content": "\"\\F0C2\""
    },
    "mdi-bookmark-outline:before": {
        "content": "\"\\F0C3\""
    },
    "mdi-bookmark-plus:before": {
        "content": "\"\\F0C5\""
    },
    "mdi-bookmark-plus-outline:before": {
        "content": "\"\\F0C4\""
    },
    "mdi-bookmark-remove:before": {
        "content": "\"\\F0C6\""
    },
    "mdi-boombox:before": {
        "content": "\"\\F5DC\""
    },
    "mdi-bootstrap:before": {
        "content": "\"\\F6C5\""
    },
    "mdi-border-all:before": {
        "content": "\"\\F0C7\""
    },
    "mdi-border-bottom:before": {
        "content": "\"\\F0C8\""
    },
    "mdi-border-color:before": {
        "content": "\"\\F0C9\""
    },
    "mdi-border-horizontal:before": {
        "content": "\"\\F0CA\""
    },
    "mdi-border-inside:before": {
        "content": "\"\\F0CB\""
    },
    "mdi-border-left:before": {
        "content": "\"\\F0CC\""
    },
    "mdi-border-none:before": {
        "content": "\"\\F0CD\""
    },
    "mdi-border-outside:before": {
        "content": "\"\\F0CE\""
    },
    "mdi-border-right:before": {
        "content": "\"\\F0CF\""
    },
    "mdi-border-style:before": {
        "content": "\"\\F0D0\""
    },
    "mdi-border-top:before": {
        "content": "\"\\F0D1\""
    },
    "mdi-border-vertical:before": {
        "content": "\"\\F0D2\""
    },
    "mdi-bow-tie:before": {
        "content": "\"\\F677\""
    },
    "mdi-bowl:before": {
        "content": "\"\\F617\""
    },
    "mdi-bowling:before": {
        "content": "\"\\F0D3\""
    },
    "mdi-box:before": {
        "content": "\"\\F0D4\""
    },
    "mdi-box-cutter:before": {
        "content": "\"\\F0D5\""
    },
    "mdi-box-shadow:before": {
        "content": "\"\\F637\""
    },
    "mdi-bridge:before": {
        "content": "\"\\F618\""
    },
    "mdi-briefcase:before": {
        "content": "\"\\F0D6\""
    },
    "mdi-briefcase-check:before": {
        "content": "\"\\F0D7\""
    },
    "mdi-briefcase-download:before": {
        "content": "\"\\F0D8\""
    },
    "mdi-briefcase-upload:before": {
        "content": "\"\\F0D9\""
    },
    "mdi-brightness-1:before": {
        "content": "\"\\F0DA\""
    },
    "mdi-brightness-2:before": {
        "content": "\"\\F0DB\""
    },
    "mdi-brightness-3:before": {
        "content": "\"\\F0DC\""
    },
    "mdi-brightness-4:before": {
        "content": "\"\\F0DD\""
    },
    "mdi-brightness-5:before": {
        "content": "\"\\F0DE\""
    },
    "mdi-brightness-6:before": {
        "content": "\"\\F0DF\""
    },
    "mdi-brightness-7:before": {
        "content": "\"\\F0E0\""
    },
    "mdi-brightness-auto:before": {
        "content": "\"\\F0E1\""
    },
    "mdi-broom:before": {
        "content": "\"\\F0E2\""
    },
    "mdi-brush:before": {
        "content": "\"\\F0E3\""
    },
    "mdi-buffer:before": {
        "content": "\"\\F619\""
    },
    "mdi-bug:before": {
        "content": "\"\\F0E4\""
    },
    "mdi-bulletin-board:before": {
        "content": "\"\\F0E5\""
    },
    "mdi-bullhorn:before": {
        "content": "\"\\F0E6\""
    },
    "mdi-bullseye:before": {
        "content": "\"\\F5DD\""
    },
    "mdi-burst-mode:before": {
        "content": "\"\\F5DE\""
    },
    "mdi-bus:before": {
        "content": "\"\\F0E7\""
    },
    "mdi-cached:before": {
        "content": "\"\\F0E8\""
    },
    "mdi-cake:before": {
        "content": "\"\\F0E9\""
    },
    "mdi-cake-layered:before": {
        "content": "\"\\F0EA\""
    },
    "mdi-cake-variant:before": {
        "content": "\"\\F0EB\""
    },
    "mdi-calculator:before": {
        "content": "\"\\F0EC\""
    },
    "mdi-calendar:before": {
        "content": "\"\\F0ED\""
    },
    "mdi-calendar-blank:before": {
        "content": "\"\\F0EE\""
    },
    "mdi-calendar-check:before": {
        "content": "\"\\F0EF\""
    },
    "mdi-calendar-clock:before": {
        "content": "\"\\F0F0\""
    },
    "mdi-calendar-multiple:before": {
        "content": "\"\\F0F1\""
    },
    "mdi-calendar-multiple-check:before": {
        "content": "\"\\F0F2\""
    },
    "mdi-calendar-plus:before": {
        "content": "\"\\F0F3\""
    },
    "mdi-calendar-question:before": {
        "content": "\"\\F691\""
    },
    "mdi-calendar-range:before": {
        "content": "\"\\F678\""
    },
    "mdi-calendar-remove:before": {
        "content": "\"\\F0F4\""
    },
    "mdi-calendar-text:before": {
        "content": "\"\\F0F5\""
    },
    "mdi-calendar-today:before": {
        "content": "\"\\F0F6\""
    },
    "mdi-call-made:before": {
        "content": "\"\\F0F7\""
    },
    "mdi-call-merge:before": {
        "content": "\"\\F0F8\""
    },
    "mdi-call-missed:before": {
        "content": "\"\\F0F9\""
    },
    "mdi-call-received:before": {
        "content": "\"\\F0FA\""
    },
    "mdi-call-split:before": {
        "content": "\"\\F0FB\""
    },
    "mdi-camcorder:before": {
        "content": "\"\\F0FC\""
    },
    "mdi-camcorder-box:before": {
        "content": "\"\\F0FD\""
    },
    "mdi-camcorder-box-off:before": {
        "content": "\"\\F0FE\""
    },
    "mdi-camcorder-off:before": {
        "content": "\"\\F0FF\""
    },
    "mdi-camera:before": {
        "content": "\"\\F100\""
    },
    "mdi-camera-burst:before": {
        "content": "\"\\F692\""
    },
    "mdi-camera-enhance:before": {
        "content": "\"\\F101\""
    },
    "mdi-camera-front:before": {
        "content": "\"\\F102\""
    },
    "mdi-camera-front-variant:before": {
        "content": "\"\\F103\""
    },
    "mdi-camera-iris:before": {
        "content": "\"\\F104\""
    },
    "mdi-camera-off:before": {
        "content": "\"\\F5DF\""
    },
    "mdi-camera-party-mode:before": {
        "content": "\"\\F105\""
    },
    "mdi-camera-rear:before": {
        "content": "\"\\F106\""
    },
    "mdi-camera-rear-variant:before": {
        "content": "\"\\F107\""
    },
    "mdi-camera-switch:before": {
        "content": "\"\\F108\""
    },
    "mdi-camera-timer:before": {
        "content": "\"\\F109\""
    },
    "mdi-candle:before": {
        "content": "\"\\F5E2\""
    },
    "mdi-candycane:before": {
        "content": "\"\\F10A\""
    },
    "mdi-car:before": {
        "content": "\"\\F10B\""
    },
    "mdi-car-battery:before": {
        "content": "\"\\F10C\""
    },
    "mdi-car-connected:before": {
        "content": "\"\\F10D\""
    },
    "mdi-car-wash:before": {
        "content": "\"\\F10E\""
    },
    "mdi-cards:before": {
        "content": "\"\\F638\""
    },
    "mdi-cards-outline:before": {
        "content": "\"\\F639\""
    },
    "mdi-cards-playing-outline:before": {
        "content": "\"\\F63A\""
    },
    "mdi-cards-variant:before": {
        "content": "\"\\F6C6\""
    },
    "mdi-carrot:before": {
        "content": "\"\\F10F\""
    },
    "mdi-cart:before": {
        "content": "\"\\F110\""
    },
    "mdi-cart-off:before": {
        "content": "\"\\F66B\""
    },
    "mdi-cart-outline:before": {
        "content": "\"\\F111\""
    },
    "mdi-cart-plus:before": {
        "content": "\"\\F112\""
    },
    "mdi-case-sensitive-alt:before": {
        "content": "\"\\F113\""
    },
    "mdi-cash:before": {
        "content": "\"\\F114\""
    },
    "mdi-cash-100:before": {
        "content": "\"\\F115\""
    },
    "mdi-cash-multiple:before": {
        "content": "\"\\F116\""
    },
    "mdi-cash-usd:before": {
        "content": "\"\\F117\""
    },
    "mdi-cast:before": {
        "content": "\"\\F118\""
    },
    "mdi-cast-connected:before": {
        "content": "\"\\F119\""
    },
    "mdi-castle:before": {
        "content": "\"\\F11A\""
    },
    "mdi-cat:before": {
        "content": "\"\\F11B\""
    },
    "mdi-cellphone:before": {
        "content": "\"\\F11C\""
    },
    "mdi-cellphone-android:before": {
        "content": "\"\\F11D\""
    },
    "mdi-cellphone-basic:before": {
        "content": "\"\\F11E\""
    },
    "mdi-cellphone-dock:before": {
        "content": "\"\\F11F\""
    },
    "mdi-cellphone-iphone:before": {
        "content": "\"\\F120\""
    },
    "mdi-cellphone-link:before": {
        "content": "\"\\F121\""
    },
    "mdi-cellphone-link-off:before": {
        "content": "\"\\F122\""
    },
    "mdi-cellphone-settings:before": {
        "content": "\"\\F123\""
    },
    "mdi-certificate:before": {
        "content": "\"\\F124\""
    },
    "mdi-chair-school:before": {
        "content": "\"\\F125\""
    },
    "mdi-chart-arc:before": {
        "content": "\"\\F126\""
    },
    "mdi-chart-areaspline:before": {
        "content": "\"\\F127\""
    },
    "mdi-chart-bar:before": {
        "content": "\"\\F128\""
    },
    "mdi-chart-bubble:before": {
        "content": "\"\\F5E3\""
    },
    "mdi-chart-gantt:before": {
        "content": "\"\\F66C\""
    },
    "mdi-chart-histogram:before": {
        "content": "\"\\F129\""
    },
    "mdi-chart-line:before": {
        "content": "\"\\F12A\""
    },
    "mdi-chart-pie:before": {
        "content": "\"\\F12B\""
    },
    "mdi-chart-scatterplot-hexbin:before": {
        "content": "\"\\F66D\""
    },
    "mdi-chart-timeline:before": {
        "content": "\"\\F66E\""
    },
    "mdi-check:before": {
        "content": "\"\\F12C\""
    },
    "mdi-check-all:before": {
        "content": "\"\\F12D\""
    },
    "mdi-check-circle:before": {
        "content": "\"\\F5E0\""
    },
    "mdi-check-circle-outline:before": {
        "content": "\"\\F5E1\""
    },
    "mdi-checkbox-blank:before": {
        "content": "\"\\F12E\""
    },
    "mdi-checkbox-blank-circle:before": {
        "content": "\"\\F12F\""
    },
    "mdi-checkbox-blank-circle-outline:before": {
        "content": "\"\\F130\""
    },
    "mdi-checkbox-blank-outline:before": {
        "content": "\"\\F131\""
    },
    "mdi-checkbox-marked:before": {
        "content": "\"\\F132\""
    },
    "mdi-checkbox-marked-circle:before": {
        "content": "\"\\F133\""
    },
    "mdi-checkbox-marked-circle-outline:before": {
        "content": "\"\\F134\""
    },
    "mdi-checkbox-marked-outline:before": {
        "content": "\"\\F135\""
    },
    "mdi-checkbox-multiple-blank:before": {
        "content": "\"\\F136\""
    },
    "mdi-checkbox-multiple-blank-circle:before": {
        "content": "\"\\F63B\""
    },
    "mdi-checkbox-multiple-blank-circle-outline:before": {
        "content": "\"\\F63C\""
    },
    "mdi-checkbox-multiple-blank-outline:before": {
        "content": "\"\\F137\""
    },
    "mdi-checkbox-multiple-marked:before": {
        "content": "\"\\F138\""
    },
    "mdi-checkbox-multiple-marked-circle:before": {
        "content": "\"\\F63D\""
    },
    "mdi-checkbox-multiple-marked-circle-outline:before": {
        "content": "\"\\F63E\""
    },
    "mdi-checkbox-multiple-marked-outline:before": {
        "content": "\"\\F139\""
    },
    "mdi-checkerboard:before": {
        "content": "\"\\F13A\""
    },
    "mdi-chemical-weapon:before": {
        "content": "\"\\F13B\""
    },
    "mdi-chevron-double-down:before": {
        "content": "\"\\F13C\""
    },
    "mdi-chevron-double-left:before": {
        "content": "\"\\F13D\""
    },
    "mdi-chevron-double-right:before": {
        "content": "\"\\F13E\""
    },
    "mdi-chevron-double-up:before": {
        "content": "\"\\F13F\""
    },
    "mdi-chevron-down:before": {
        "content": "\"\\F140\""
    },
    "mdi-chevron-left:before": {
        "content": "\"\\F141\""
    },
    "mdi-chevron-right:before": {
        "content": "\"\\F142\""
    },
    "mdi-chevron-up:before": {
        "content": "\"\\F143\""
    },
    "mdi-chip:before": {
        "content": "\"\\F61A\""
    },
    "mdi-church:before": {
        "content": "\"\\F144\""
    },
    "mdi-cisco-webex:before": {
        "content": "\"\\F145\""
    },
    "mdi-city:before": {
        "content": "\"\\F146\""
    },
    "mdi-clipboard:before": {
        "content": "\"\\F147\""
    },
    "mdi-clipboard-account:before": {
        "content": "\"\\F148\""
    },
    "mdi-clipboard-alert:before": {
        "content": "\"\\F149\""
    },
    "mdi-clipboard-arrow-down:before": {
        "content": "\"\\F14A\""
    },
    "mdi-clipboard-arrow-left:before": {
        "content": "\"\\F14B\""
    },
    "mdi-clipboard-check:before": {
        "content": "\"\\F14C\""
    },
    "mdi-clipboard-flow:before": {
        "content": "\"\\F6C7\""
    },
    "mdi-clipboard-outline:before": {
        "content": "\"\\F14D\""
    },
    "mdi-clipboard-text:before": {
        "content": "\"\\F14E\""
    },
    "mdi-clippy:before": {
        "content": "\"\\F14F\""
    },
    "mdi-clock:before": {
        "content": "\"\\F150\""
    },
    "mdi-clock-alert:before": {
        "content": "\"\\F5CE\""
    },
    "mdi-clock-end:before": {
        "content": "\"\\F151\""
    },
    "mdi-clock-fast:before": {
        "content": "\"\\F152\""
    },
    "mdi-clock-in:before": {
        "content": "\"\\F153\""
    },
    "mdi-clock-out:before": {
        "content": "\"\\F154\""
    },
    "mdi-clock-start:before": {
        "content": "\"\\F155\""
    },
    "mdi-close:before": {
        "content": "\"\\F156\""
    },
    "mdi-close-box:before": {
        "content": "\"\\F157\""
    },
    "mdi-close-box-outline:before": {
        "content": "\"\\F158\""
    },
    "mdi-close-circle:before": {
        "content": "\"\\F159\""
    },
    "mdi-close-circle-outline:before": {
        "content": "\"\\F15A\""
    },
    "mdi-close-network:before": {
        "content": "\"\\F15B\""
    },
    "mdi-close-octagon:before": {
        "content": "\"\\F15C\""
    },
    "mdi-close-octagon-outline:before": {
        "content": "\"\\F15D\""
    },
    "mdi-close-outline:before": {
        "content": "\"\\F6C8\""
    },
    "mdi-closed-caption:before": {
        "content": "\"\\F15E\""
    },
    "mdi-cloud:before": {
        "content": "\"\\F15F\""
    },
    "mdi-cloud-check:before": {
        "content": "\"\\F160\""
    },
    "mdi-cloud-circle:before": {
        "content": "\"\\F161\""
    },
    "mdi-cloud-download:before": {
        "content": "\"\\F162\""
    },
    "mdi-cloud-outline:before": {
        "content": "\"\\F163\""
    },
    "mdi-cloud-outline-off:before": {
        "content": "\"\\F164\""
    },
    "mdi-cloud-print:before": {
        "content": "\"\\F165\""
    },
    "mdi-cloud-print-outline:before": {
        "content": "\"\\F166\""
    },
    "mdi-cloud-sync:before": {
        "content": "\"\\F63F\""
    },
    "mdi-cloud-upload:before": {
        "content": "\"\\F167\""
    },
    "mdi-code-array:before": {
        "content": "\"\\F168\""
    },
    "mdi-code-braces:before": {
        "content": "\"\\F169\""
    },
    "mdi-code-brackets:before": {
        "content": "\"\\F16A\""
    },
    "mdi-code-equal:before": {
        "content": "\"\\F16B\""
    },
    "mdi-code-greater-than:before": {
        "content": "\"\\F16C\""
    },
    "mdi-code-greater-than-or-equal:before": {
        "content": "\"\\F16D\""
    },
    "mdi-code-less-than:before": {
        "content": "\"\\F16E\""
    },
    "mdi-code-less-than-or-equal:before": {
        "content": "\"\\F16F\""
    },
    "mdi-code-not-equal:before": {
        "content": "\"\\F170\""
    },
    "mdi-code-not-equal-variant:before": {
        "content": "\"\\F171\""
    },
    "mdi-code-parentheses:before": {
        "content": "\"\\F172\""
    },
    "mdi-code-string:before": {
        "content": "\"\\F173\""
    },
    "mdi-code-tags:before": {
        "content": "\"\\F174\""
    },
    "mdi-code-tags-check:before": {
        "content": "\"\\F693\""
    },
    "mdi-codepen:before": {
        "content": "\"\\F175\""
    },
    "mdi-coffee:before": {
        "content": "\"\\F176\""
    },
    "mdi-coffee-outline:before": {
        "content": "\"\\F6C9\""
    },
    "mdi-coffee-to-go:before": {
        "content": "\"\\F177\""
    },
    "mdi-coin:before": {
        "content": "\"\\F178\""
    },
    "mdi-coins:before": {
        "content": "\"\\F694\""
    },
    "mdi-collage:before": {
        "content": "\"\\F640\""
    },
    "mdi-color-helper:before": {
        "content": "\"\\F179\""
    },
    "mdi-comment:before": {
        "content": "\"\\F17A\""
    },
    "mdi-comment-account:before": {
        "content": "\"\\F17B\""
    },
    "mdi-comment-account-outline:before": {
        "content": "\"\\F17C\""
    },
    "mdi-comment-alert:before": {
        "content": "\"\\F17D\""
    },
    "mdi-comment-alert-outline:before": {
        "content": "\"\\F17E\""
    },
    "mdi-comment-check:before": {
        "content": "\"\\F17F\""
    },
    "mdi-comment-check-outline:before": {
        "content": "\"\\F180\""
    },
    "mdi-comment-multiple-outline:before": {
        "content": "\"\\F181\""
    },
    "mdi-comment-outline:before": {
        "content": "\"\\F182\""
    },
    "mdi-comment-plus-outline:before": {
        "content": "\"\\F183\""
    },
    "mdi-comment-processing:before": {
        "content": "\"\\F184\""
    },
    "mdi-comment-processing-outline:before": {
        "content": "\"\\F185\""
    },
    "mdi-comment-question-outline:before": {
        "content": "\"\\F186\""
    },
    "mdi-comment-remove-outline:before": {
        "content": "\"\\F187\""
    },
    "mdi-comment-text:before": {
        "content": "\"\\F188\""
    },
    "mdi-comment-text-outline:before": {
        "content": "\"\\F189\""
    },
    "mdi-compare:before": {
        "content": "\"\\F18A\""
    },
    "mdi-compass:before": {
        "content": "\"\\F18B\""
    },
    "mdi-compass-outline:before": {
        "content": "\"\\F18C\""
    },
    "mdi-console:before": {
        "content": "\"\\F18D\""
    },
    "mdi-contact-mail:before": {
        "content": "\"\\F18E\""
    },
    "mdi-contacts:before": {
        "content": "\"\\F6CA\""
    },
    "mdi-content-copy:before": {
        "content": "\"\\F18F\""
    },
    "mdi-content-cut:before": {
        "content": "\"\\F190\""
    },
    "mdi-content-duplicate:before": {
        "content": "\"\\F191\""
    },
    "mdi-content-paste:before": {
        "content": "\"\\F192\""
    },
    "mdi-content-save:before": {
        "content": "\"\\F193\""
    },
    "mdi-content-save-all:before": {
        "content": "\"\\F194\""
    },
    "mdi-content-save-settings:before": {
        "content": "\"\\F61B\""
    },
    "mdi-contrast:before": {
        "content": "\"\\F195\""
    },
    "mdi-contrast-box:before": {
        "content": "\"\\F196\""
    },
    "mdi-contrast-circle:before": {
        "content": "\"\\F197\""
    },
    "mdi-cookie:before": {
        "content": "\"\\F198\""
    },
    "mdi-copyright:before": {
        "content": "\"\\F5E6\""
    },
    "mdi-counter:before": {
        "content": "\"\\F199\""
    },
    "mdi-cow:before": {
        "content": "\"\\F19A\""
    },
    "mdi-creation:before": {
        "content": "\"\\F1C9\""
    },
    "mdi-credit-card:before": {
        "content": "\"\\F19B\""
    },
    "mdi-credit-card-multiple:before": {
        "content": "\"\\F19C\""
    },
    "mdi-credit-card-off:before": {
        "content": "\"\\F5E4\""
    },
    "mdi-credit-card-plus:before": {
        "content": "\"\\F675\""
    },
    "mdi-credit-card-scan:before": {
        "content": "\"\\F19D\""
    },
    "mdi-crop:before": {
        "content": "\"\\F19E\""
    },
    "mdi-crop-free:before": {
        "content": "\"\\F19F\""
    },
    "mdi-crop-landscape:before": {
        "content": "\"\\F1A0\""
    },
    "mdi-crop-portrait:before": {
        "content": "\"\\F1A1\""
    },
    "mdi-crop-rotate:before": {
        "content": "\"\\F695\""
    },
    "mdi-crop-square:before": {
        "content": "\"\\F1A2\""
    },
    "mdi-crosshairs:before": {
        "content": "\"\\F1A3\""
    },
    "mdi-crosshairs-gps:before": {
        "content": "\"\\F1A4\""
    },
    "mdi-crown:before": {
        "content": "\"\\F1A5\""
    },
    "mdi-cube:before": {
        "content": "\"\\F1A6\""
    },
    "mdi-cube-outline:before": {
        "content": "\"\\F1A7\""
    },
    "mdi-cube-send:before": {
        "content": "\"\\F1A8\""
    },
    "mdi-cube-unfolded:before": {
        "content": "\"\\F1A9\""
    },
    "mdi-cup:before": {
        "content": "\"\\F1AA\""
    },
    "mdi-cup-off:before": {
        "content": "\"\\F5E5\""
    },
    "mdi-cup-water:before": {
        "content": "\"\\F1AB\""
    },
    "mdi-currency-btc:before": {
        "content": "\"\\F1AC\""
    },
    "mdi-currency-eur:before": {
        "content": "\"\\F1AD\""
    },
    "mdi-currency-gbp:before": {
        "content": "\"\\F1AE\""
    },
    "mdi-currency-inr:before": {
        "content": "\"\\F1AF\""
    },
    "mdi-currency-ngn:before": {
        "content": "\"\\F1B0\""
    },
    "mdi-currency-rub:before": {
        "content": "\"\\F1B1\""
    },
    "mdi-currency-try:before": {
        "content": "\"\\F1B2\""
    },
    "mdi-currency-usd:before": {
        "content": "\"\\F1B3\""
    },
    "mdi-currency-usd-off:before": {
        "content": "\"\\F679\""
    },
    "mdi-cursor-default:before": {
        "content": "\"\\F1B4\""
    },
    "mdi-cursor-default-outline:before": {
        "content": "\"\\F1B5\""
    },
    "mdi-cursor-move:before": {
        "content": "\"\\F1B6\""
    },
    "mdi-cursor-pointer:before": {
        "content": "\"\\F1B7\""
    },
    "mdi-cursor-text:before": {
        "content": "\"\\F5E7\""
    },
    "mdi-database:before": {
        "content": "\"\\F1B8\""
    },
    "mdi-database-minus:before": {
        "content": "\"\\F1B9\""
    },
    "mdi-database-plus:before": {
        "content": "\"\\F1BA\""
    },
    "mdi-debug-step-into:before": {
        "content": "\"\\F1BB\""
    },
    "mdi-debug-step-out:before": {
        "content": "\"\\F1BC\""
    },
    "mdi-debug-step-over:before": {
        "content": "\"\\F1BD\""
    },
    "mdi-decimal-decrease:before": {
        "content": "\"\\F1BE\""
    },
    "mdi-decimal-increase:before": {
        "content": "\"\\F1BF\""
    },
    "mdi-delete:before": {
        "content": "\"\\F1C0\""
    },
    "mdi-delete-circle:before": {
        "content": "\"\\F682\""
    },
    "mdi-delete-empty:before": {
        "content": "\"\\F6CB\""
    },
    "mdi-delete-forever:before": {
        "content": "\"\\F5E8\""
    },
    "mdi-delete-sweep:before": {
        "content": "\"\\F5E9\""
    },
    "mdi-delete-variant:before": {
        "content": "\"\\F1C1\""
    },
    "mdi-delta:before": {
        "content": "\"\\F1C2\""
    },
    "mdi-deskphone:before": {
        "content": "\"\\F1C3\""
    },
    "mdi-desktop-mac:before": {
        "content": "\"\\F1C4\""
    },
    "mdi-desktop-tower:before": {
        "content": "\"\\F1C5\""
    },
    "mdi-details:before": {
        "content": "\"\\F1C6\""
    },
    "mdi-developer-board:before": {
        "content": "\"\\F696\""
    },
    "mdi-deviantart:before": {
        "content": "\"\\F1C7\""
    },
    "mdi-dialpad:before": {
        "content": "\"\\F61C\""
    },
    "mdi-diamond:before": {
        "content": "\"\\F1C8\""
    },
    "mdi-dice-1:before": {
        "content": "\"\\F1CA\""
    },
    "mdi-dice-2:before": {
        "content": "\"\\F1CB\""
    },
    "mdi-dice-3:before": {
        "content": "\"\\F1CC\""
    },
    "mdi-dice-4:before": {
        "content": "\"\\F1CD\""
    },
    "mdi-dice-5:before": {
        "content": "\"\\F1CE\""
    },
    "mdi-dice-6:before": {
        "content": "\"\\F1CF\""
    },
    "mdi-dice-d20:before": {
        "content": "\"\\F5EA\""
    },
    "mdi-dice-d4:before": {
        "content": "\"\\F5EB\""
    },
    "mdi-dice-d6:before": {
        "content": "\"\\F5EC\""
    },
    "mdi-dice-d8:before": {
        "content": "\"\\F5ED\""
    },
    "mdi-dictionary:before": {
        "content": "\"\\F61D\""
    },
    "mdi-directions:before": {
        "content": "\"\\F1D0\""
    },
    "mdi-directions-fork:before": {
        "content": "\"\\F641\""
    },
    "mdi-discord:before": {
        "content": "\"\\F66F\""
    },
    "mdi-disk:before": {
        "content": "\"\\F5EE\""
    },
    "mdi-disk-alert:before": {
        "content": "\"\\F1D1\""
    },
    "mdi-disqus:before": {
        "content": "\"\\F1D2\""
    },
    "mdi-disqus-outline:before": {
        "content": "\"\\F1D3\""
    },
    "mdi-division:before": {
        "content": "\"\\F1D4\""
    },
    "mdi-division-box:before": {
        "content": "\"\\F1D5\""
    },
    "mdi-dna:before": {
        "content": "\"\\F683\""
    },
    "mdi-dns:before": {
        "content": "\"\\F1D6\""
    },
    "mdi-do-not-disturb:before": {
        "content": "\"\\F697\""
    },
    "mdi-do-not-disturb-off:before": {
        "content": "\"\\F698\""
    },
    "mdi-dolby:before": {
        "content": "\"\\F6B2\""
    },
    "mdi-domain:before": {
        "content": "\"\\F1D7\""
    },
    "mdi-dots-horizontal:before": {
        "content": "\"\\F1D8\""
    },
    "mdi-dots-vertical:before": {
        "content": "\"\\F1D9\""
    },
    "mdi-douban:before": {
        "content": "\"\\F699\""
    },
    "mdi-download:before": {
        "content": "\"\\F1DA\""
    },
    "mdi-drag:before": {
        "content": "\"\\F1DB\""
    },
    "mdi-drag-horizontal:before": {
        "content": "\"\\F1DC\""
    },
    "mdi-drag-vertical:before": {
        "content": "\"\\F1DD\""
    },
    "mdi-drawing:before": {
        "content": "\"\\F1DE\""
    },
    "mdi-drawing-box:before": {
        "content": "\"\\F1DF\""
    },
    "mdi-dribbble:before": {
        "content": "\"\\F1E0\""
    },
    "mdi-dribbble-box:before": {
        "content": "\"\\F1E1\""
    },
    "mdi-drone:before": {
        "content": "\"\\F1E2\""
    },
    "mdi-dropbox:before": {
        "content": "\"\\F1E3\""
    },
    "mdi-drupal:before": {
        "content": "\"\\F1E4\""
    },
    "mdi-duck:before": {
        "content": "\"\\F1E5\""
    },
    "mdi-dumbbell:before": {
        "content": "\"\\F1E6\""
    },
    "mdi-earth:before": {
        "content": "\"\\F1E7\""
    },
    "mdi-earth-box:before": {
        "content": "\"\\F6CC\""
    },
    "mdi-earth-box-off:before": {
        "content": "\"\\F6CD\""
    },
    "mdi-earth-off:before": {
        "content": "\"\\F1E8\""
    },
    "mdi-edge:before": {
        "content": "\"\\F1E9\""
    },
    "mdi-eject:before": {
        "content": "\"\\F1EA\""
    },
    "mdi-elevation-decline:before": {
        "content": "\"\\F1EB\""
    },
    "mdi-elevation-rise:before": {
        "content": "\"\\F1EC\""
    },
    "mdi-elevator:before": {
        "content": "\"\\F1ED\""
    },
    "mdi-email:before": {
        "content": "\"\\F1EE\""
    },
    "mdi-email-alert:before": {
        "content": "\"\\F6CE\""
    },
    "mdi-email-open:before": {
        "content": "\"\\F1EF\""
    },
    "mdi-email-open-outline:before": {
        "content": "\"\\F5EF\""
    },
    "mdi-email-outline:before": {
        "content": "\"\\F1F0\""
    },
    "mdi-email-secure:before": {
        "content": "\"\\F1F1\""
    },
    "mdi-email-variant:before": {
        "content": "\"\\F5F0\""
    },
    "mdi-emby:before": {
        "content": "\"\\F6B3\""
    },
    "mdi-emoticon:before": {
        "content": "\"\\F1F2\""
    },
    "mdi-emoticon-cool:before": {
        "content": "\"\\F1F3\""
    },
    "mdi-emoticon-dead:before": {
        "content": "\"\\F69A\""
    },
    "mdi-emoticon-devil:before": {
        "content": "\"\\F1F4\""
    },
    "mdi-emoticon-excited:before": {
        "content": "\"\\F69B\""
    },
    "mdi-emoticon-happy:before": {
        "content": "\"\\F1F5\""
    },
    "mdi-emoticon-neutral:before": {
        "content": "\"\\F1F6\""
    },
    "mdi-emoticon-poop:before": {
        "content": "\"\\F1F7\""
    },
    "mdi-emoticon-sad:before": {
        "content": "\"\\F1F8\""
    },
    "mdi-emoticon-tongue:before": {
        "content": "\"\\F1F9\""
    },
    "mdi-engine:before": {
        "content": "\"\\F1FA\""
    },
    "mdi-engine-outline:before": {
        "content": "\"\\F1FB\""
    },
    "mdi-equal:before": {
        "content": "\"\\F1FC\""
    },
    "mdi-equal-box:before": {
        "content": "\"\\F1FD\""
    },
    "mdi-eraser:before": {
        "content": "\"\\F1FE\""
    },
    "mdi-eraser-variant:before": {
        "content": "\"\\F642\""
    },
    "mdi-escalator:before": {
        "content": "\"\\F1FF\""
    },
    "mdi-ethernet:before": {
        "content": "\"\\F200\""
    },
    "mdi-ethernet-cable:before": {
        "content": "\"\\F201\""
    },
    "mdi-ethernet-cable-off:before": {
        "content": "\"\\F202\""
    },
    "mdi-etsy:before": {
        "content": "\"\\F203\""
    },
    "mdi-ev-station:before": {
        "content": "\"\\F5F1\""
    },
    "mdi-evernote:before": {
        "content": "\"\\F204\""
    },
    "mdi-exclamation:before": {
        "content": "\"\\F205\""
    },
    "mdi-exit-to-app:before": {
        "content": "\"\\F206\""
    },
    "mdi-export:before": {
        "content": "\"\\F207\""
    },
    "mdi-eye:before": {
        "content": "\"\\F208\""
    },
    "mdi-eye-off:before": {
        "content": "\"\\F209\""
    },
    "mdi-eye-outline:before": {
        "content": "\"\\F6CF\""
    },
    "mdi-eye-outline-off:before": {
        "content": "\"\\F6D0\""
    },
    "mdi-eyedropper:before": {
        "content": "\"\\F20A\""
    },
    "mdi-eyedropper-variant:before": {
        "content": "\"\\F20B\""
    },
    "mdi-face:before": {
        "content": "\"\\F643\""
    },
    "mdi-face-profile:before": {
        "content": "\"\\F644\""
    },
    "mdi-facebook:before": {
        "content": "\"\\F20C\""
    },
    "mdi-facebook-box:before": {
        "content": "\"\\F20D\""
    },
    "mdi-facebook-messenger:before": {
        "content": "\"\\F20E\""
    },
    "mdi-factory:before": {
        "content": "\"\\F20F\""
    },
    "mdi-fan:before": {
        "content": "\"\\F210\""
    },
    "mdi-fast-forward:before": {
        "content": "\"\\F211\""
    },
    "mdi-fast-forward-outline:before": {
        "content": "\"\\F6D1\""
    },
    "mdi-fax:before": {
        "content": "\"\\F212\""
    },
    "mdi-feather:before": {
        "content": "\"\\F6D2\""
    },
    "mdi-ferry:before": {
        "content": "\"\\F213\""
    },
    "mdi-file:before": {
        "content": "\"\\F214\""
    },
    "mdi-file-chart:before": {
        "content": "\"\\F215\""
    },
    "mdi-file-check:before": {
        "content": "\"\\F216\""
    },
    "mdi-file-cloud:before": {
        "content": "\"\\F217\""
    },
    "mdi-file-delimited:before": {
        "content": "\"\\F218\""
    },
    "mdi-file-document:before": {
        "content": "\"\\F219\""
    },
    "mdi-file-document-box:before": {
        "content": "\"\\F21A\""
    },
    "mdi-file-excel:before": {
        "content": "\"\\F21B\""
    },
    "mdi-file-excel-box:before": {
        "content": "\"\\F21C\""
    },
    "mdi-file-export:before": {
        "content": "\"\\F21D\""
    },
    "mdi-file-find:before": {
        "content": "\"\\F21E\""
    },
    "mdi-file-hidden:before": {
        "content": "\"\\F613\""
    },
    "mdi-file-image:before": {
        "content": "\"\\F21F\""
    },
    "mdi-file-import:before": {
        "content": "\"\\F220\""
    },
    "mdi-file-lock:before": {
        "content": "\"\\F221\""
    },
    "mdi-file-multiple:before": {
        "content": "\"\\F222\""
    },
    "mdi-file-music:before": {
        "content": "\"\\F223\""
    },
    "mdi-file-outline:before": {
        "content": "\"\\F224\""
    },
    "mdi-file-pdf:before": {
        "content": "\"\\F225\""
    },
    "mdi-file-pdf-box:before": {
        "content": "\"\\F226\""
    },
    "mdi-file-powerpoint:before": {
        "content": "\"\\F227\""
    },
    "mdi-file-powerpoint-box:before": {
        "content": "\"\\F228\""
    },
    "mdi-file-presentation-box:before": {
        "content": "\"\\F229\""
    },
    "mdi-file-restore:before": {
        "content": "\"\\F670\""
    },
    "mdi-file-send:before": {
        "content": "\"\\F22A\""
    },
    "mdi-file-tree:before": {
        "content": "\"\\F645\""
    },
    "mdi-file-video:before": {
        "content": "\"\\F22B\""
    },
    "mdi-file-word:before": {
        "content": "\"\\F22C\""
    },
    "mdi-file-word-box:before": {
        "content": "\"\\F22D\""
    },
    "mdi-file-xml:before": {
        "content": "\"\\F22E\""
    },
    "mdi-film:before": {
        "content": "\"\\F22F\""
    },
    "mdi-filmstrip:before": {
        "content": "\"\\F230\""
    },
    "mdi-filmstrip-off:before": {
        "content": "\"\\F231\""
    },
    "mdi-filter:before": {
        "content": "\"\\F232\""
    },
    "mdi-filter-outline:before": {
        "content": "\"\\F233\""
    },
    "mdi-filter-remove:before": {
        "content": "\"\\F234\""
    },
    "mdi-filter-remove-outline:before": {
        "content": "\"\\F235\""
    },
    "mdi-filter-variant:before": {
        "content": "\"\\F236\""
    },
    "mdi-find-replace:before": {
        "content": "\"\\F6D3\""
    },
    "mdi-fingerprint:before": {
        "content": "\"\\F237\""
    },
    "mdi-fire:before": {
        "content": "\"\\F238\""
    },
    "mdi-firefox:before": {
        "content": "\"\\F239\""
    },
    "mdi-fish:before": {
        "content": "\"\\F23A\""
    },
    "mdi-flag:before": {
        "content": "\"\\F23B\""
    },
    "mdi-flag-checkered:before": {
        "content": "\"\\F23C\""
    },
    "mdi-flag-outline:before": {
        "content": "\"\\F23D\""
    },
    "mdi-flag-outline-variant:before": {
        "content": "\"\\F23E\""
    },
    "mdi-flag-triangle:before": {
        "content": "\"\\F23F\""
    },
    "mdi-flag-variant:before": {
        "content": "\"\\F240\""
    },
    "mdi-flash:before": {
        "content": "\"\\F241\""
    },
    "mdi-flash-auto:before": {
        "content": "\"\\F242\""
    },
    "mdi-flash-off:before": {
        "content": "\"\\F243\""
    },
    "mdi-flash-outline:before": {
        "content": "\"\\F6D4\""
    },
    "mdi-flash-red-eye:before": {
        "content": "\"\\F67A\""
    },
    "mdi-flashlight:before": {
        "content": "\"\\F244\""
    },
    "mdi-flashlight-off:before": {
        "content": "\"\\F245\""
    },
    "mdi-flask:before": {
        "content": "\"\\F093\""
    },
    "mdi-flask-empty:before": {
        "content": "\"\\F094\""
    },
    "mdi-flask-empty-outline:before": {
        "content": "\"\\F095\""
    },
    "mdi-flask-outline:before": {
        "content": "\"\\F096\""
    },
    "mdi-flattr:before": {
        "content": "\"\\F246\""
    },
    "mdi-flip-to-back:before": {
        "content": "\"\\F247\""
    },
    "mdi-flip-to-front:before": {
        "content": "\"\\F248\""
    },
    "mdi-floppy:before": {
        "content": "\"\\F249\""
    },
    "mdi-flower:before": {
        "content": "\"\\F24A\""
    },
    "mdi-folder:before": {
        "content": "\"\\F24B\""
    },
    "mdi-folder-account:before": {
        "content": "\"\\F24C\""
    },
    "mdi-folder-download:before": {
        "content": "\"\\F24D\""
    },
    "mdi-folder-google-drive:before": {
        "content": "\"\\F24E\""
    },
    "mdi-folder-image:before": {
        "content": "\"\\F24F\""
    },
    "mdi-folder-lock:before": {
        "content": "\"\\F250\""
    },
    "mdi-folder-lock-open:before": {
        "content": "\"\\F251\""
    },
    "mdi-folder-move:before": {
        "content": "\"\\F252\""
    },
    "mdi-folder-multiple:before": {
        "content": "\"\\F253\""
    },
    "mdi-folder-multiple-image:before": {
        "content": "\"\\F254\""
    },
    "mdi-folder-multiple-outline:before": {
        "content": "\"\\F255\""
    },
    "mdi-folder-outline:before": {
        "content": "\"\\F256\""
    },
    "mdi-folder-plus:before": {
        "content": "\"\\F257\""
    },
    "mdi-folder-remove:before": {
        "content": "\"\\F258\""
    },
    "mdi-folder-star:before": {
        "content": "\"\\F69C\""
    },
    "mdi-folder-upload:before": {
        "content": "\"\\F259\""
    },
    "mdi-font-awesome:before": {
        "content": "\"\\F03A\""
    },
    "mdi-food:before": {
        "content": "\"\\F25A\""
    },
    "mdi-food-apple:before": {
        "content": "\"\\F25B\""
    },
    "mdi-food-fork-drink:before": {
        "content": "\"\\F5F2\""
    },
    "mdi-food-off:before": {
        "content": "\"\\F5F3\""
    },
    "mdi-food-variant:before": {
        "content": "\"\\F25C\""
    },
    "mdi-football:before": {
        "content": "\"\\F25D\""
    },
    "mdi-football-australian:before": {
        "content": "\"\\F25E\""
    },
    "mdi-football-helmet:before": {
        "content": "\"\\F25F\""
    },
    "mdi-format-align-center:before": {
        "content": "\"\\F260\""
    },
    "mdi-format-align-justify:before": {
        "content": "\"\\F261\""
    },
    "mdi-format-align-left:before": {
        "content": "\"\\F262\""
    },
    "mdi-format-align-right:before": {
        "content": "\"\\F263\""
    },
    "mdi-format-annotation-plus:before": {
        "content": "\"\\F646\""
    },
    "mdi-format-bold:before": {
        "content": "\"\\F264\""
    },
    "mdi-format-clear:before": {
        "content": "\"\\F265\""
    },
    "mdi-format-color-fill:before": {
        "content": "\"\\F266\""
    },
    "mdi-format-color-text:before": {
        "content": "\"\\F69D\""
    },
    "mdi-format-float-center:before": {
        "content": "\"\\F267\""
    },
    "mdi-format-float-left:before": {
        "content": "\"\\F268\""
    },
    "mdi-format-float-none:before": {
        "content": "\"\\F269\""
    },
    "mdi-format-float-right:before": {
        "content": "\"\\F26A\""
    },
    "mdi-format-font:before": {
        "content": "\"\\F6D5\""
    },
    "mdi-format-header-1:before": {
        "content": "\"\\F26B\""
    },
    "mdi-format-header-2:before": {
        "content": "\"\\F26C\""
    },
    "mdi-format-header-3:before": {
        "content": "\"\\F26D\""
    },
    "mdi-format-header-4:before": {
        "content": "\"\\F26E\""
    },
    "mdi-format-header-5:before": {
        "content": "\"\\F26F\""
    },
    "mdi-format-header-6:before": {
        "content": "\"\\F270\""
    },
    "mdi-format-header-decrease:before": {
        "content": "\"\\F271\""
    },
    "mdi-format-header-equal:before": {
        "content": "\"\\F272\""
    },
    "mdi-format-header-increase:before": {
        "content": "\"\\F273\""
    },
    "mdi-format-header-pound:before": {
        "content": "\"\\F274\""
    },
    "mdi-format-horizontal-align-center:before": {
        "content": "\"\\F61E\""
    },
    "mdi-format-horizontal-align-left:before": {
        "content": "\"\\F61F\""
    },
    "mdi-format-horizontal-align-right:before": {
        "content": "\"\\F620\""
    },
    "mdi-format-indent-decrease:before": {
        "content": "\"\\F275\""
    },
    "mdi-format-indent-increase:before": {
        "content": "\"\\F276\""
    },
    "mdi-format-italic:before": {
        "content": "\"\\F277\""
    },
    "mdi-format-line-spacing:before": {
        "content": "\"\\F278\""
    },
    "mdi-format-line-style:before": {
        "content": "\"\\F5C8\""
    },
    "mdi-format-line-weight:before": {
        "content": "\"\\F5C9\""
    },
    "mdi-format-list-bulleted:before": {
        "content": "\"\\F279\""
    },
    "mdi-format-list-bulleted-type:before": {
        "content": "\"\\F27A\""
    },
    "mdi-format-list-numbers:before": {
        "content": "\"\\F27B\""
    },
    "mdi-format-page-break:before": {
        "content": "\"\\F6D6\""
    },
    "mdi-format-paint:before": {
        "content": "\"\\F27C\""
    },
    "mdi-format-paragraph:before": {
        "content": "\"\\F27D\""
    },
    "mdi-format-pilcrow:before": {
        "content": "\"\\F6D7\""
    },
    "mdi-format-quote:before": {
        "content": "\"\\F27E\""
    },
    "mdi-format-rotate-90:before": {
        "content": "\"\\F6A9\""
    },
    "mdi-format-section:before": {
        "content": "\"\\F69E\""
    },
    "mdi-format-size:before": {
        "content": "\"\\F27F\""
    },
    "mdi-format-strikethrough:before": {
        "content": "\"\\F280\""
    },
    "mdi-format-strikethrough-variant:before": {
        "content": "\"\\F281\""
    },
    "mdi-format-subscript:before": {
        "content": "\"\\F282\""
    },
    "mdi-format-superscript:before": {
        "content": "\"\\F283\""
    },
    "mdi-format-text:before": {
        "content": "\"\\F284\""
    },
    "mdi-format-textdirection-l-to-r:before": {
        "content": "\"\\F285\""
    },
    "mdi-format-textdirection-r-to-l:before": {
        "content": "\"\\F286\""
    },
    "mdi-format-title:before": {
        "content": "\"\\F5F4\""
    },
    "mdi-format-underline:before": {
        "content": "\"\\F287\""
    },
    "mdi-format-vertical-align-bottom:before": {
        "content": "\"\\F621\""
    },
    "mdi-format-vertical-align-center:before": {
        "content": "\"\\F622\""
    },
    "mdi-format-vertical-align-top:before": {
        "content": "\"\\F623\""
    },
    "mdi-format-wrap-inline:before": {
        "content": "\"\\F288\""
    },
    "mdi-format-wrap-square:before": {
        "content": "\"\\F289\""
    },
    "mdi-format-wrap-tight:before": {
        "content": "\"\\F28A\""
    },
    "mdi-format-wrap-top-bottom:before": {
        "content": "\"\\F28B\""
    },
    "mdi-forum:before": {
        "content": "\"\\F28C\""
    },
    "mdi-forward:before": {
        "content": "\"\\F28D\""
    },
    "mdi-foursquare:before": {
        "content": "\"\\F28E\""
    },
    "mdi-fridge:before": {
        "content": "\"\\F28F\""
    },
    "mdi-fridge-filled:before": {
        "content": "\"\\F290\""
    },
    "mdi-fridge-filled-bottom:before": {
        "content": "\"\\F291\""
    },
    "mdi-fridge-filled-top:before": {
        "content": "\"\\F292\""
    },
    "mdi-fullscreen:before": {
        "content": "\"\\F293\""
    },
    "mdi-fullscreen-exit:before": {
        "content": "\"\\F294\""
    },
    "mdi-function:before": {
        "content": "\"\\F295\""
    },
    "mdi-gamepad:before": {
        "content": "\"\\F296\""
    },
    "mdi-gamepad-variant:before": {
        "content": "\"\\F297\""
    },
    "mdi-garage:before": {
        "content": "\"\\F6D8\""
    },
    "mdi-garage-open:before": {
        "content": "\"\\F6D9\""
    },
    "mdi-gas-cylinder:before": {
        "content": "\"\\F647\""
    },
    "mdi-gas-station:before": {
        "content": "\"\\F298\""
    },
    "mdi-gate:before": {
        "content": "\"\\F299\""
    },
    "mdi-gauge:before": {
        "content": "\"\\F29A\""
    },
    "mdi-gavel:before": {
        "content": "\"\\F29B\""
    },
    "mdi-gender-female:before": {
        "content": "\"\\F29C\""
    },
    "mdi-gender-male:before": {
        "content": "\"\\F29D\""
    },
    "mdi-gender-male-female:before": {
        "content": "\"\\F29E\""
    },
    "mdi-gender-transgender:before": {
        "content": "\"\\F29F\""
    },
    "mdi-ghost:before": {
        "content": "\"\\F2A0\""
    },
    "mdi-gift:before": {
        "content": "\"\\F2A1\""
    },
    "mdi-git:before": {
        "content": "\"\\F2A2\""
    },
    "mdi-github-box:before": {
        "content": "\"\\F2A3\""
    },
    "mdi-github-circle:before": {
        "content": "\"\\F2A4\""
    },
    "mdi-github-face:before": {
        "content": "\"\\F6DA\""
    },
    "mdi-glass-flute:before": {
        "content": "\"\\F2A5\""
    },
    "mdi-glass-mug:before": {
        "content": "\"\\F2A6\""
    },
    "mdi-glass-stange:before": {
        "content": "\"\\F2A7\""
    },
    "mdi-glass-tulip:before": {
        "content": "\"\\F2A8\""
    },
    "mdi-glassdoor:before": {
        "content": "\"\\F2A9\""
    },
    "mdi-glasses:before": {
        "content": "\"\\F2AA\""
    },
    "mdi-gmail:before": {
        "content": "\"\\F2AB\""
    },
    "mdi-gnome:before": {
        "content": "\"\\F2AC\""
    },
    "mdi-gondola:before": {
        "content": "\"\\F685\""
    },
    "mdi-google:before": {
        "content": "\"\\F2AD\""
    },
    "mdi-google-cardboard:before": {
        "content": "\"\\F2AE\""
    },
    "mdi-google-chrome:before": {
        "content": "\"\\F2AF\""
    },
    "mdi-google-circles:before": {
        "content": "\"\\F2B0\""
    },
    "mdi-google-circles-communities:before": {
        "content": "\"\\F2B1\""
    },
    "mdi-google-circles-extended:before": {
        "content": "\"\\F2B2\""
    },
    "mdi-google-circles-group:before": {
        "content": "\"\\F2B3\""
    },
    "mdi-google-controller:before": {
        "content": "\"\\F2B4\""
    },
    "mdi-google-controller-off:before": {
        "content": "\"\\F2B5\""
    },
    "mdi-google-drive:before": {
        "content": "\"\\F2B6\""
    },
    "mdi-google-earth:before": {
        "content": "\"\\F2B7\""
    },
    "mdi-google-glass:before": {
        "content": "\"\\F2B8\""
    },
    "mdi-google-keep:before": {
        "content": "\"\\F6DB\""
    },
    "mdi-google-maps:before": {
        "content": "\"\\F5F5\""
    },
    "mdi-google-nearby:before": {
        "content": "\"\\F2B9\""
    },
    "mdi-google-pages:before": {
        "content": "\"\\F2BA\""
    },
    "mdi-google-photos:before": {
        "content": "\"\\F6DC\""
    },
    "mdi-google-physical-web:before": {
        "content": "\"\\F2BB\""
    },
    "mdi-google-play:before": {
        "content": "\"\\F2BC\""
    },
    "mdi-google-plus:before": {
        "content": "\"\\F2BD\""
    },
    "mdi-google-plus-box:before": {
        "content": "\"\\F2BE\""
    },
    "mdi-google-translate:before": {
        "content": "\"\\F2BF\""
    },
    "mdi-google-wallet:before": {
        "content": "\"\\F2C0\""
    },
    "mdi-gradient:before": {
        "content": "\"\\F69F\""
    },
    "mdi-grease-pencil:before": {
        "content": "\"\\F648\""
    },
    "mdi-grid:before": {
        "content": "\"\\F2C1\""
    },
    "mdi-grid-off:before": {
        "content": "\"\\F2C2\""
    },
    "mdi-group:before": {
        "content": "\"\\F2C3\""
    },
    "mdi-guitar-electric:before": {
        "content": "\"\\F2C4\""
    },
    "mdi-guitar-pick:before": {
        "content": "\"\\F2C5\""
    },
    "mdi-guitar-pick-outline:before": {
        "content": "\"\\F2C6\""
    },
    "mdi-hackernews:before": {
        "content": "\"\\F624\""
    },
    "mdi-hamburger:before": {
        "content": "\"\\F684\""
    },
    "mdi-hand-pointing-right:before": {
        "content": "\"\\F2C7\""
    },
    "mdi-hanger:before": {
        "content": "\"\\F2C8\""
    },
    "mdi-hangouts:before": {
        "content": "\"\\F2C9\""
    },
    "mdi-harddisk:before": {
        "content": "\"\\F2CA\""
    },
    "mdi-headphones:before": {
        "content": "\"\\F2CB\""
    },
    "mdi-headphones-box:before": {
        "content": "\"\\F2CC\""
    },
    "mdi-headphones-settings:before": {
        "content": "\"\\F2CD\""
    },
    "mdi-headset:before": {
        "content": "\"\\F2CE\""
    },
    "mdi-headset-dock:before": {
        "content": "\"\\F2CF\""
    },
    "mdi-headset-off:before": {
        "content": "\"\\F2D0\""
    },
    "mdi-heart:before": {
        "content": "\"\\F2D1\""
    },
    "mdi-heart-box:before": {
        "content": "\"\\F2D2\""
    },
    "mdi-heart-box-outline:before": {
        "content": "\"\\F2D3\""
    },
    "mdi-heart-broken:before": {
        "content": "\"\\F2D4\""
    },
    "mdi-heart-half-outline:before": {
        "content": "\"\\F6DD\""
    },
    "mdi-heart-half-part:before": {
        "content": "\"\\F6DE\""
    },
    "mdi-heart-half-part-outline:before": {
        "content": "\"\\F6DF\""
    },
    "mdi-heart-outline:before": {
        "content": "\"\\F2D5\""
    },
    "mdi-heart-pulse:before": {
        "content": "\"\\F5F6\""
    },
    "mdi-help:before": {
        "content": "\"\\F2D6\""
    },
    "mdi-help-circle:before": {
        "content": "\"\\F2D7\""
    },
    "mdi-help-circle-outline:before": {
        "content": "\"\\F625\""
    },
    "mdi-hexagon:before": {
        "content": "\"\\F2D8\""
    },
    "mdi-hexagon-multiple:before": {
        "content": "\"\\F6E0\""
    },
    "mdi-hexagon-outline:before": {
        "content": "\"\\F2D9\""
    },
    "mdi-highway:before": {
        "content": "\"\\F5F7\""
    },
    "mdi-history:before": {
        "content": "\"\\F2DA\""
    },
    "mdi-hololens:before": {
        "content": "\"\\F2DB\""
    },
    "mdi-home:before": {
        "content": "\"\\F2DC\""
    },
    "mdi-home-map-marker:before": {
        "content": "\"\\F5F8\""
    },
    "mdi-home-modern:before": {
        "content": "\"\\F2DD\""
    },
    "mdi-home-outline:before": {
        "content": "\"\\F6A0\""
    },
    "mdi-home-variant:before": {
        "content": "\"\\F2DE\""
    },
    "mdi-hook:before": {
        "content": "\"\\F6E1\""
    },
    "mdi-hook-off:before": {
        "content": "\"\\F6E2\""
    },
    "mdi-hops:before": {
        "content": "\"\\F2DF\""
    },
    "mdi-hospital:before": {
        "content": "\"\\F2E0\""
    },
    "mdi-hospital-building:before": {
        "content": "\"\\F2E1\""
    },
    "mdi-hospital-marker:before": {
        "content": "\"\\F2E2\""
    },
    "mdi-hotel:before": {
        "content": "\"\\F2E3\""
    },
    "mdi-houzz:before": {
        "content": "\"\\F2E4\""
    },
    "mdi-houzz-box:before": {
        "content": "\"\\F2E5\""
    },
    "mdi-human:before": {
        "content": "\"\\F2E6\""
    },
    "mdi-human-child:before": {
        "content": "\"\\F2E7\""
    },
    "mdi-human-female:before": {
        "content": "\"\\F649\""
    },
    "mdi-human-greeting:before": {
        "content": "\"\\F64A\""
    },
    "mdi-human-handsdown:before": {
        "content": "\"\\F64B\""
    },
    "mdi-human-handsup:before": {
        "content": "\"\\F64C\""
    },
    "mdi-human-male:before": {
        "content": "\"\\F64D\""
    },
    "mdi-human-male-female:before": {
        "content": "\"\\F2E8\""
    },
    "mdi-human-pregnant:before": {
        "content": "\"\\F5CF\""
    },
    "mdi-image:before": {
        "content": "\"\\F2E9\""
    },
    "mdi-image-album:before": {
        "content": "\"\\F2EA\""
    },
    "mdi-image-area:before": {
        "content": "\"\\F2EB\""
    },
    "mdi-image-area-close:before": {
        "content": "\"\\F2EC\""
    },
    "mdi-image-broken:before": {
        "content": "\"\\F2ED\""
    },
    "mdi-image-broken-variant:before": {
        "content": "\"\\F2EE\""
    },
    "mdi-image-filter:before": {
        "content": "\"\\F2EF\""
    },
    "mdi-image-filter-black-white:before": {
        "content": "\"\\F2F0\""
    },
    "mdi-image-filter-center-focus:before": {
        "content": "\"\\F2F1\""
    },
    "mdi-image-filter-center-focus-weak:before": {
        "content": "\"\\F2F2\""
    },
    "mdi-image-filter-drama:before": {
        "content": "\"\\F2F3\""
    },
    "mdi-image-filter-frames:before": {
        "content": "\"\\F2F4\""
    },
    "mdi-image-filter-hdr:before": {
        "content": "\"\\F2F5\""
    },
    "mdi-image-filter-none:before": {
        "content": "\"\\F2F6\""
    },
    "mdi-image-filter-tilt-shift:before": {
        "content": "\"\\F2F7\""
    },
    "mdi-image-filter-vintage:before": {
        "content": "\"\\F2F8\""
    },
    "mdi-image-multiple:before": {
        "content": "\"\\F2F9\""
    },
    "mdi-import:before": {
        "content": "\"\\F2FA\""
    },
    "mdi-inbox:before": {
        "content": "\"\\F686\""
    },
    "mdi-inbox-arrow-down:before": {
        "content": "\"\\F2FB\""
    },
    "mdi-inbox-arrow-up:before": {
        "content": "\"\\F3D1\""
    },
    "mdi-incognito:before": {
        "content": "\"\\F5F9\""
    },
    "mdi-infinity:before": {
        "content": "\"\\F6E3\""
    },
    "mdi-information:before": {
        "content": "\"\\F2FC\""
    },
    "mdi-information-outline:before": {
        "content": "\"\\F2FD\""
    },
    "mdi-information-variant:before": {
        "content": "\"\\F64E\""
    },
    "mdi-instagram:before": {
        "content": "\"\\F2FE\""
    },
    "mdi-instapaper:before": {
        "content": "\"\\F2FF\""
    },
    "mdi-internet-explorer:before": {
        "content": "\"\\F300\""
    },
    "mdi-invert-colors:before": {
        "content": "\"\\F301\""
    },
    "mdi-itunes:before": {
        "content": "\"\\F676\""
    },
    "mdi-jeepney:before": {
        "content": "\"\\F302\""
    },
    "mdi-jira:before": {
        "content": "\"\\F303\""
    },
    "mdi-jsfiddle:before": {
        "content": "\"\\F304\""
    },
    "mdi-json:before": {
        "content": "\"\\F626\""
    },
    "mdi-keg:before": {
        "content": "\"\\F305\""
    },
    "mdi-kettle:before": {
        "content": "\"\\F5FA\""
    },
    "mdi-key:before": {
        "content": "\"\\F306\""
    },
    "mdi-key-change:before": {
        "content": "\"\\F307\""
    },
    "mdi-key-minus:before": {
        "content": "\"\\F308\""
    },
    "mdi-key-plus:before": {
        "content": "\"\\F309\""
    },
    "mdi-key-remove:before": {
        "content": "\"\\F30A\""
    },
    "mdi-key-variant:before": {
        "content": "\"\\F30B\""
    },
    "mdi-keyboard:before": {
        "content": "\"\\F30C\""
    },
    "mdi-keyboard-backspace:before": {
        "content": "\"\\F30D\""
    },
    "mdi-keyboard-caps:before": {
        "content": "\"\\F30E\""
    },
    "mdi-keyboard-close:before": {
        "content": "\"\\F30F\""
    },
    "mdi-keyboard-off:before": {
        "content": "\"\\F310\""
    },
    "mdi-keyboard-return:before": {
        "content": "\"\\F311\""
    },
    "mdi-keyboard-tab:before": {
        "content": "\"\\F312\""
    },
    "mdi-keyboard-variant:before": {
        "content": "\"\\F313\""
    },
    "mdi-kodi:before": {
        "content": "\"\\F314\""
    },
    "mdi-label:before": {
        "content": "\"\\F315\""
    },
    "mdi-label-outline:before": {
        "content": "\"\\F316\""
    },
    "mdi-lambda:before": {
        "content": "\"\\F627\""
    },
    "mdi-lamp:before": {
        "content": "\"\\F6B4\""
    },
    "mdi-lan:before": {
        "content": "\"\\F317\""
    },
    "mdi-lan-connect:before": {
        "content": "\"\\F318\""
    },
    "mdi-lan-disconnect:before": {
        "content": "\"\\F319\""
    },
    "mdi-lan-pending:before": {
        "content": "\"\\F31A\""
    },
    "mdi-language-c:before": {
        "content": "\"\\F671\""
    },
    "mdi-language-cpp:before": {
        "content": "\"\\F672\""
    },
    "mdi-language-csharp:before": {
        "content": "\"\\F31B\""
    },
    "mdi-language-css3:before": {
        "content": "\"\\F31C\""
    },
    "mdi-language-html5:before": {
        "content": "\"\\F31D\""
    },
    "mdi-language-javascript:before": {
        "content": "\"\\F31E\""
    },
    "mdi-language-php:before": {
        "content": "\"\\F31F\""
    },
    "mdi-language-python:before": {
        "content": "\"\\F320\""
    },
    "mdi-language-python-text:before": {
        "content": "\"\\F321\""
    },
    "mdi-language-swift:before": {
        "content": "\"\\F6E4\""
    },
    "mdi-language-typescript:before": {
        "content": "\"\\F6E5\""
    },
    "mdi-laptop:before": {
        "content": "\"\\F322\""
    },
    "mdi-laptop-chromebook:before": {
        "content": "\"\\F323\""
    },
    "mdi-laptop-mac:before": {
        "content": "\"\\F324\""
    },
    "mdi-laptop-off:before": {
        "content": "\"\\F6E6\""
    },
    "mdi-laptop-windows:before": {
        "content": "\"\\F325\""
    },
    "mdi-lastfm:before": {
        "content": "\"\\F326\""
    },
    "mdi-launch:before": {
        "content": "\"\\F327\""
    },
    "mdi-layers:before": {
        "content": "\"\\F328\""
    },
    "mdi-layers-off:before": {
        "content": "\"\\F329\""
    },
    "mdi-lead-pencil:before": {
        "content": "\"\\F64F\""
    },
    "mdi-leaf:before": {
        "content": "\"\\F32A\""
    },
    "mdi-led-off:before": {
        "content": "\"\\F32B\""
    },
    "mdi-led-on:before": {
        "content": "\"\\F32C\""
    },
    "mdi-led-outline:before": {
        "content": "\"\\F32D\""
    },
    "mdi-led-variant-off:before": {
        "content": "\"\\F32E\""
    },
    "mdi-led-variant-on:before": {
        "content": "\"\\F32F\""
    },
    "mdi-led-variant-outline:before": {
        "content": "\"\\F330\""
    },
    "mdi-library:before": {
        "content": "\"\\F331\""
    },
    "mdi-library-books:before": {
        "content": "\"\\F332\""
    },
    "mdi-library-music:before": {
        "content": "\"\\F333\""
    },
    "mdi-library-plus:before": {
        "content": "\"\\F334\""
    },
    "mdi-lightbulb:before": {
        "content": "\"\\F335\""
    },
    "mdi-lightbulb-on:before": {
        "content": "\"\\F6E7\""
    },
    "mdi-lightbulb-on-outline:before": {
        "content": "\"\\F6E8\""
    },
    "mdi-lightbulb-outline:before": {
        "content": "\"\\F336\""
    },
    "mdi-link:before": {
        "content": "\"\\F337\""
    },
    "mdi-link-off:before": {
        "content": "\"\\F338\""
    },
    "mdi-link-variant:before": {
        "content": "\"\\F339\""
    },
    "mdi-link-variant-off:before": {
        "content": "\"\\F33A\""
    },
    "mdi-linkedin:before": {
        "content": "\"\\F33B\""
    },
    "mdi-linkedin-box:before": {
        "content": "\"\\F33C\""
    },
    "mdi-linux:before": {
        "content": "\"\\F33D\""
    },
    "mdi-lock:before": {
        "content": "\"\\F33E\""
    },
    "mdi-lock-open:before": {
        "content": "\"\\F33F\""
    },
    "mdi-lock-open-outline:before": {
        "content": "\"\\F340\""
    },
    "mdi-lock-outline:before": {
        "content": "\"\\F341\""
    },
    "mdi-lock-pattern:before": {
        "content": "\"\\F6E9\""
    },
    "mdi-lock-plus:before": {
        "content": "\"\\F5FB\""
    },
    "mdi-login:before": {
        "content": "\"\\F342\""
    },
    "mdi-login-variant:before": {
        "content": "\"\\F5FC\""
    },
    "mdi-logout:before": {
        "content": "\"\\F343\""
    },
    "mdi-logout-variant:before": {
        "content": "\"\\F5FD\""
    },
    "mdi-looks:before": {
        "content": "\"\\F344\""
    },
    "mdi-loop:before": {
        "content": "\"\\F6EA\""
    },
    "mdi-loupe:before": {
        "content": "\"\\F345\""
    },
    "mdi-lumx:before": {
        "content": "\"\\F346\""
    },
    "mdi-magnet:before": {
        "content": "\"\\F347\""
    },
    "mdi-magnet-on:before": {
        "content": "\"\\F348\""
    },
    "mdi-magnify:before": {
        "content": "\"\\F349\""
    },
    "mdi-magnify-minus:before": {
        "content": "\"\\F34A\""
    },
    "mdi-magnify-minus-outline:before": {
        "content": "\"\\F6EB\""
    },
    "mdi-magnify-plus:before": {
        "content": "\"\\F34B\""
    },
    "mdi-magnify-plus-outline:before": {
        "content": "\"\\F6EC\""
    },
    "mdi-mail-ru:before": {
        "content": "\"\\F34C\""
    },
    "mdi-mailbox:before": {
        "content": "\"\\F6ED\""
    },
    "mdi-map:before": {
        "content": "\"\\F34D\""
    },
    "mdi-map-marker:before": {
        "content": "\"\\F34E\""
    },
    "mdi-map-marker-circle:before": {
        "content": "\"\\F34F\""
    },
    "mdi-map-marker-minus:before": {
        "content": "\"\\F650\""
    },
    "mdi-map-marker-multiple:before": {
        "content": "\"\\F350\""
    },
    "mdi-map-marker-off:before": {
        "content": "\"\\F351\""
    },
    "mdi-map-marker-plus:before": {
        "content": "\"\\F651\""
    },
    "mdi-map-marker-radius:before": {
        "content": "\"\\F352\""
    },
    "mdi-margin:before": {
        "content": "\"\\F353\""
    },
    "mdi-markdown:before": {
        "content": "\"\\F354\""
    },
    "mdi-marker:before": {
        "content": "\"\\F652\""
    },
    "mdi-marker-check:before": {
        "content": "\"\\F355\""
    },
    "mdi-martini:before": {
        "content": "\"\\F356\""
    },
    "mdi-material-ui:before": {
        "content": "\"\\F357\""
    },
    "mdi-math-compass:before": {
        "content": "\"\\F358\""
    },
    "mdi-matrix:before": {
        "content": "\"\\F628\""
    },
    "mdi-maxcdn:before": {
        "content": "\"\\F359\""
    },
    "mdi-medical-bag:before": {
        "content": "\"\\F6EE\""
    },
    "mdi-medium:before": {
        "content": "\"\\F35A\""
    },
    "mdi-memory:before": {
        "content": "\"\\F35B\""
    },
    "mdi-menu:before": {
        "content": "\"\\F35C\""
    },
    "mdi-menu-down:before": {
        "content": "\"\\F35D\""
    },
    "mdi-menu-down-outline:before": {
        "content": "\"\\F6B5\""
    },
    "mdi-menu-left:before": {
        "content": "\"\\F35E\""
    },
    "mdi-menu-right:before": {
        "content": "\"\\F35F\""
    },
    "mdi-menu-up:before": {
        "content": "\"\\F360\""
    },
    "mdi-menu-up-outline:before": {
        "content": "\"\\F6B6\""
    },
    "mdi-message:before": {
        "content": "\"\\F361\""
    },
    "mdi-message-alert:before": {
        "content": "\"\\F362\""
    },
    "mdi-message-bulleted:before": {
        "content": "\"\\F6A1\""
    },
    "mdi-message-bulleted-off:before": {
        "content": "\"\\F6A2\""
    },
    "mdi-message-draw:before": {
        "content": "\"\\F363\""
    },
    "mdi-message-image:before": {
        "content": "\"\\F364\""
    },
    "mdi-message-outline:before": {
        "content": "\"\\F365\""
    },
    "mdi-message-plus:before": {
        "content": "\"\\F653\""
    },
    "mdi-message-processing:before": {
        "content": "\"\\F366\""
    },
    "mdi-message-reply:before": {
        "content": "\"\\F367\""
    },
    "mdi-message-reply-text:before": {
        "content": "\"\\F368\""
    },
    "mdi-message-settings:before": {
        "content": "\"\\F6EF\""
    },
    "mdi-message-settings-variant:before": {
        "content": "\"\\F6F0\""
    },
    "mdi-message-text:before": {
        "content": "\"\\F369\""
    },
    "mdi-message-text-outline:before": {
        "content": "\"\\F36A\""
    },
    "mdi-message-video:before": {
        "content": "\"\\F36B\""
    },
    "mdi-meteor:before": {
        "content": "\"\\F629\""
    },
    "mdi-microphone:before": {
        "content": "\"\\F36C\""
    },
    "mdi-microphone-off:before": {
        "content": "\"\\F36D\""
    },
    "mdi-microphone-outline:before": {
        "content": "\"\\F36E\""
    },
    "mdi-microphone-settings:before": {
        "content": "\"\\F36F\""
    },
    "mdi-microphone-variant:before": {
        "content": "\"\\F370\""
    },
    "mdi-microphone-variant-off:before": {
        "content": "\"\\F371\""
    },
    "mdi-microscope:before": {
        "content": "\"\\F654\""
    },
    "mdi-microsoft:before": {
        "content": "\"\\F372\""
    },
    "mdi-minecraft:before": {
        "content": "\"\\F373\""
    },
    "mdi-minus:before": {
        "content": "\"\\F374\""
    },
    "mdi-minus-box:before": {
        "content": "\"\\F375\""
    },
    "mdi-minus-box-outline:before": {
        "content": "\"\\F6F1\""
    },
    "mdi-minus-circle:before": {
        "content": "\"\\F376\""
    },
    "mdi-minus-circle-outline:before": {
        "content": "\"\\F377\""
    },
    "mdi-minus-network:before": {
        "content": "\"\\F378\""
    },
    "mdi-mixcloud:before": {
        "content": "\"\\F62A\""
    },
    "mdi-monitor:before": {
        "content": "\"\\F379\""
    },
    "mdi-monitor-multiple:before": {
        "content": "\"\\F37A\""
    },
    "mdi-more:before": {
        "content": "\"\\F37B\""
    },
    "mdi-motorbike:before": {
        "content": "\"\\F37C\""
    },
    "mdi-mouse:before": {
        "content": "\"\\F37D\""
    },
    "mdi-mouse-off:before": {
        "content": "\"\\F37E\""
    },
    "mdi-mouse-variant:before": {
        "content": "\"\\F37F\""
    },
    "mdi-mouse-variant-off:before": {
        "content": "\"\\F380\""
    },
    "mdi-move-resize:before": {
        "content": "\"\\F655\""
    },
    "mdi-move-resize-variant:before": {
        "content": "\"\\F656\""
    },
    "mdi-movie:before": {
        "content": "\"\\F381\""
    },
    "mdi-multiplication:before": {
        "content": "\"\\F382\""
    },
    "mdi-multiplication-box:before": {
        "content": "\"\\F383\""
    },
    "mdi-music-box:before": {
        "content": "\"\\F384\""
    },
    "mdi-music-box-outline:before": {
        "content": "\"\\F385\""
    },
    "mdi-music-circle:before": {
        "content": "\"\\F386\""
    },
    "mdi-music-note:before": {
        "content": "\"\\F387\""
    },
    "mdi-music-note-bluetooth:before": {
        "content": "\"\\F5FE\""
    },
    "mdi-music-note-bluetooth-off:before": {
        "content": "\"\\F5FF\""
    },
    "mdi-music-note-eighth:before": {
        "content": "\"\\F388\""
    },
    "mdi-music-note-half:before": {
        "content": "\"\\F389\""
    },
    "mdi-music-note-off:before": {
        "content": "\"\\F38A\""
    },
    "mdi-music-note-quarter:before": {
        "content": "\"\\F38B\""
    },
    "mdi-music-note-sixteenth:before": {
        "content": "\"\\F38C\""
    },
    "mdi-music-note-whole:before": {
        "content": "\"\\F38D\""
    },
    "mdi-nature:before": {
        "content": "\"\\F38E\""
    },
    "mdi-nature-people:before": {
        "content": "\"\\F38F\""
    },
    "mdi-navigation:before": {
        "content": "\"\\F390\""
    },
    "mdi-near-me:before": {
        "content": "\"\\F5CD\""
    },
    "mdi-needle:before": {
        "content": "\"\\F391\""
    },
    "mdi-nest-protect:before": {
        "content": "\"\\F392\""
    },
    "mdi-nest-thermostat:before": {
        "content": "\"\\F393\""
    },
    "mdi-network:before": {
        "content": "\"\\F6F2\""
    },
    "mdi-network-download:before": {
        "content": "\"\\F6F3\""
    },
    "mdi-network-question:before": {
        "content": "\"\\F6F4\""
    },
    "mdi-network-upload:before": {
        "content": "\"\\F6F5\""
    },
    "mdi-new-box:before": {
        "content": "\"\\F394\""
    },
    "mdi-newspaper:before": {
        "content": "\"\\F395\""
    },
    "mdi-nfc:before": {
        "content": "\"\\F396\""
    },
    "mdi-nfc-tap:before": {
        "content": "\"\\F397\""
    },
    "mdi-nfc-variant:before": {
        "content": "\"\\F398\""
    },
    "mdi-nodejs:before": {
        "content": "\"\\F399\""
    },
    "mdi-note:before": {
        "content": "\"\\F39A\""
    },
    "mdi-note-multiple:before": {
        "content": "\"\\F6B7\""
    },
    "mdi-note-multiple-outline:before": {
        "content": "\"\\F6B8\""
    },
    "mdi-note-outline:before": {
        "content": "\"\\F39B\""
    },
    "mdi-note-plus:before": {
        "content": "\"\\F39C\""
    },
    "mdi-note-plus-outline:before": {
        "content": "\"\\F39D\""
    },
    "mdi-note-text:before": {
        "content": "\"\\F39E\""
    },
    "mdi-notification-clear-all:before": {
        "content": "\"\\F39F\""
    },
    "mdi-npm:before": {
        "content": "\"\\F6F6\""
    },
    "mdi-nuke:before": {
        "content": "\"\\F6A3\""
    },
    "mdi-numeric:before": {
        "content": "\"\\F3A0\""
    },
    "mdi-numeric-0-box:before": {
        "content": "\"\\F3A1\""
    },
    "mdi-numeric-0-box-multiple-outline:before": {
        "content": "\"\\F3A2\""
    },
    "mdi-numeric-0-box-outline:before": {
        "content": "\"\\F3A3\""
    },
    "mdi-numeric-1-box:before": {
        "content": "\"\\F3A4\""
    },
    "mdi-numeric-1-box-multiple-outline:before": {
        "content": "\"\\F3A5\""
    },
    "mdi-numeric-1-box-outline:before": {
        "content": "\"\\F3A6\""
    },
    "mdi-numeric-2-box:before": {
        "content": "\"\\F3A7\""
    },
    "mdi-numeric-2-box-multiple-outline:before": {
        "content": "\"\\F3A8\""
    },
    "mdi-numeric-2-box-outline:before": {
        "content": "\"\\F3A9\""
    },
    "mdi-numeric-3-box:before": {
        "content": "\"\\F3AA\""
    },
    "mdi-numeric-3-box-multiple-outline:before": {
        "content": "\"\\F3AB\""
    },
    "mdi-numeric-3-box-outline:before": {
        "content": "\"\\F3AC\""
    },
    "mdi-numeric-4-box:before": {
        "content": "\"\\F3AD\""
    },
    "mdi-numeric-4-box-multiple-outline:before": {
        "content": "\"\\F3AE\""
    },
    "mdi-numeric-4-box-outline:before": {
        "content": "\"\\F3AF\""
    },
    "mdi-numeric-5-box:before": {
        "content": "\"\\F3B0\""
    },
    "mdi-numeric-5-box-multiple-outline:before": {
        "content": "\"\\F3B1\""
    },
    "mdi-numeric-5-box-outline:before": {
        "content": "\"\\F3B2\""
    },
    "mdi-numeric-6-box:before": {
        "content": "\"\\F3B3\""
    },
    "mdi-numeric-6-box-multiple-outline:before": {
        "content": "\"\\F3B4\""
    },
    "mdi-numeric-6-box-outline:before": {
        "content": "\"\\F3B5\""
    },
    "mdi-numeric-7-box:before": {
        "content": "\"\\F3B6\""
    },
    "mdi-numeric-7-box-multiple-outline:before": {
        "content": "\"\\F3B7\""
    },
    "mdi-numeric-7-box-outline:before": {
        "content": "\"\\F3B8\""
    },
    "mdi-numeric-8-box:before": {
        "content": "\"\\F3B9\""
    },
    "mdi-numeric-8-box-multiple-outline:before": {
        "content": "\"\\F3BA\""
    },
    "mdi-numeric-8-box-outline:before": {
        "content": "\"\\F3BB\""
    },
    "mdi-numeric-9-box:before": {
        "content": "\"\\F3BC\""
    },
    "mdi-numeric-9-box-multiple-outline:before": {
        "content": "\"\\F3BD\""
    },
    "mdi-numeric-9-box-outline:before": {
        "content": "\"\\F3BE\""
    },
    "mdi-numeric-9-plus-box:before": {
        "content": "\"\\F3BF\""
    },
    "mdi-numeric-9-plus-box-multiple-outline:before": {
        "content": "\"\\F3C0\""
    },
    "mdi-numeric-9-plus-box-outline:before": {
        "content": "\"\\F3C1\""
    },
    "mdi-nut:before": {
        "content": "\"\\F6F7\""
    },
    "mdi-nutrition:before": {
        "content": "\"\\F3C2\""
    },
    "mdi-oar:before": {
        "content": "\"\\F67B\""
    },
    "mdi-octagon:before": {
        "content": "\"\\F3C3\""
    },
    "mdi-octagon-outline:before": {
        "content": "\"\\F3C4\""
    },
    "mdi-octagram:before": {
        "content": "\"\\F6F8\""
    },
    "mdi-odnoklassniki:before": {
        "content": "\"\\F3C5\""
    },
    "mdi-office:before": {
        "content": "\"\\F3C6\""
    },
    "mdi-oil:before": {
        "content": "\"\\F3C7\""
    },
    "mdi-oil-temperature:before": {
        "content": "\"\\F3C8\""
    },
    "mdi-omega:before": {
        "content": "\"\\F3C9\""
    },
    "mdi-onedrive:before": {
        "content": "\"\\F3CA\""
    },
    "mdi-opacity:before": {
        "content": "\"\\F5CC\""
    },
    "mdi-open-in-app:before": {
        "content": "\"\\F3CB\""
    },
    "mdi-open-in-new:before": {
        "content": "\"\\F3CC\""
    },
    "mdi-openid:before": {
        "content": "\"\\F3CD\""
    },
    "mdi-opera:before": {
        "content": "\"\\F3CE\""
    },
    "mdi-ornament:before": {
        "content": "\"\\F3CF\""
    },
    "mdi-ornament-variant:before": {
        "content": "\"\\F3D0\""
    },
    "mdi-owl:before": {
        "content": "\"\\F3D2\""
    },
    "mdi-package:before": {
        "content": "\"\\F3D3\""
    },
    "mdi-package-down:before": {
        "content": "\"\\F3D4\""
    },
    "mdi-package-up:before": {
        "content": "\"\\F3D5\""
    },
    "mdi-package-variant:before": {
        "content": "\"\\F3D6\""
    },
    "mdi-package-variant-closed:before": {
        "content": "\"\\F3D7\""
    },
    "mdi-page-first:before": {
        "content": "\"\\F600\""
    },
    "mdi-page-last:before": {
        "content": "\"\\F601\""
    },
    "mdi-page-layout-body:before": {
        "content": "\"\\F6F9\""
    },
    "mdi-page-layout-footer:before": {
        "content": "\"\\F6FA\""
    },
    "mdi-page-layout-header:before": {
        "content": "\"\\F6FB\""
    },
    "mdi-page-layout-sidebar-left:before": {
        "content": "\"\\F6FC\""
    },
    "mdi-page-layout-sidebar-right:before": {
        "content": "\"\\F6FD\""
    },
    "mdi-palette:before": {
        "content": "\"\\F3D8\""
    },
    "mdi-palette-advanced:before": {
        "content": "\"\\F3D9\""
    },
    "mdi-panda:before": {
        "content": "\"\\F3DA\""
    },
    "mdi-pandora:before": {
        "content": "\"\\F3DB\""
    },
    "mdi-panorama:before": {
        "content": "\"\\F3DC\""
    },
    "mdi-panorama-fisheye:before": {
        "content": "\"\\F3DD\""
    },
    "mdi-panorama-horizontal:before": {
        "content": "\"\\F3DE\""
    },
    "mdi-panorama-vertical:before": {
        "content": "\"\\F3DF\""
    },
    "mdi-panorama-wide-angle:before": {
        "content": "\"\\F3E0\""
    },
    "mdi-paper-cut-vertical:before": {
        "content": "\"\\F3E1\""
    },
    "mdi-paperclip:before": {
        "content": "\"\\F3E2\""
    },
    "mdi-parking:before": {
        "content": "\"\\F3E3\""
    },
    "mdi-pause:before": {
        "content": "\"\\F3E4\""
    },
    "mdi-pause-circle:before": {
        "content": "\"\\F3E5\""
    },
    "mdi-pause-circle-outline:before": {
        "content": "\"\\F3E6\""
    },
    "mdi-pause-octagon:before": {
        "content": "\"\\F3E7\""
    },
    "mdi-pause-octagon-outline:before": {
        "content": "\"\\F3E8\""
    },
    "mdi-paw:before": {
        "content": "\"\\F3E9\""
    },
    "mdi-paw-off:before": {
        "content": "\"\\F657\""
    },
    "mdi-pen:before": {
        "content": "\"\\F3EA\""
    },
    "mdi-pencil:before": {
        "content": "\"\\F3EB\""
    },
    "mdi-pencil-box:before": {
        "content": "\"\\F3EC\""
    },
    "mdi-pencil-box-outline:before": {
        "content": "\"\\F3ED\""
    },
    "mdi-pencil-circle:before": {
        "content": "\"\\F6FE\""
    },
    "mdi-pencil-lock:before": {
        "content": "\"\\F3EE\""
    },
    "mdi-pencil-off:before": {
        "content": "\"\\F3EF\""
    },
    "mdi-pentagon:before": {
        "content": "\"\\F6FF\""
    },
    "mdi-pentagon-outline:before": {
        "content": "\"\\F700\""
    },
    "mdi-percent:before": {
        "content": "\"\\F3F0\""
    },
    "mdi-pharmacy:before": {
        "content": "\"\\F3F1\""
    },
    "mdi-phone:before": {
        "content": "\"\\F3F2\""
    },
    "mdi-phone-bluetooth:before": {
        "content": "\"\\F3F3\""
    },
    "mdi-phone-classic:before": {
        "content": "\"\\F602\""
    },
    "mdi-phone-forward:before": {
        "content": "\"\\F3F4\""
    },
    "mdi-phone-hangup:before": {
        "content": "\"\\F3F5\""
    },
    "mdi-phone-in-talk:before": {
        "content": "\"\\F3F6\""
    },
    "mdi-phone-incoming:before": {
        "content": "\"\\F3F7\""
    },
    "mdi-phone-locked:before": {
        "content": "\"\\F3F8\""
    },
    "mdi-phone-log:before": {
        "content": "\"\\F3F9\""
    },
    "mdi-phone-minus:before": {
        "content": "\"\\F658\""
    },
    "mdi-phone-missed:before": {
        "content": "\"\\F3FA\""
    },
    "mdi-phone-outgoing:before": {
        "content": "\"\\F3FB\""
    },
    "mdi-phone-paused:before": {
        "content": "\"\\F3FC\""
    },
    "mdi-phone-plus:before": {
        "content": "\"\\F659\""
    },
    "mdi-phone-settings:before": {
        "content": "\"\\F3FD\""
    },
    "mdi-phone-voip:before": {
        "content": "\"\\F3FE\""
    },
    "mdi-pi:before": {
        "content": "\"\\F3FF\""
    },
    "mdi-pi-box:before": {
        "content": "\"\\F400\""
    },
    "mdi-piano:before": {
        "content": "\"\\F67C\""
    },
    "mdi-pig:before": {
        "content": "\"\\F401\""
    },
    "mdi-pill:before": {
        "content": "\"\\F402\""
    },
    "mdi-pillar:before": {
        "content": "\"\\F701\""
    },
    "mdi-pin:before": {
        "content": "\"\\F403\""
    },
    "mdi-pin-off:before": {
        "content": "\"\\F404\""
    },
    "mdi-pine-tree:before": {
        "content": "\"\\F405\""
    },
    "mdi-pine-tree-box:before": {
        "content": "\"\\F406\""
    },
    "mdi-pinterest:before": {
        "content": "\"\\F407\""
    },
    "mdi-pinterest-box:before": {
        "content": "\"\\F408\""
    },
    "mdi-pistol:before": {
        "content": "\"\\F702\""
    },
    "mdi-pizza:before": {
        "content": "\"\\F409\""
    },
    "mdi-plane-shield:before": {
        "content": "\"\\F6BA\""
    },
    "mdi-play:before": {
        "content": "\"\\F40A\""
    },
    "mdi-play-box-outline:before": {
        "content": "\"\\F40B\""
    },
    "mdi-play-circle:before": {
        "content": "\"\\F40C\""
    },
    "mdi-play-circle-outline:before": {
        "content": "\"\\F40D\""
    },
    "mdi-play-pause:before": {
        "content": "\"\\F40E\""
    },
    "mdi-play-protected-content:before": {
        "content": "\"\\F40F\""
    },
    "mdi-playlist-check:before": {
        "content": "\"\\F5C7\""
    },
    "mdi-playlist-minus:before": {
        "content": "\"\\F410\""
    },
    "mdi-playlist-play:before": {
        "content": "\"\\F411\""
    },
    "mdi-playlist-plus:before": {
        "content": "\"\\F412\""
    },
    "mdi-playlist-remove:before": {
        "content": "\"\\F413\""
    },
    "mdi-playstation:before": {
        "content": "\"\\F414\""
    },
    "mdi-plex:before": {
        "content": "\"\\F6B9\""
    },
    "mdi-plus:before": {
        "content": "\"\\F415\""
    },
    "mdi-plus-box:before": {
        "content": "\"\\F416\""
    },
    "mdi-plus-box-outline:before": {
        "content": "\"\\F703\""
    },
    "mdi-plus-circle:before": {
        "content": "\"\\F417\""
    },
    "mdi-plus-circle-multiple-outline:before": {
        "content": "\"\\F418\""
    },
    "mdi-plus-circle-outline:before": {
        "content": "\"\\F419\""
    },
    "mdi-plus-network:before": {
        "content": "\"\\F41A\""
    },
    "mdi-plus-one:before": {
        "content": "\"\\F41B\""
    },
    "mdi-plus-outline:before": {
        "content": "\"\\F704\""
    },
    "mdi-pocket:before": {
        "content": "\"\\F41C\""
    },
    "mdi-pokeball:before": {
        "content": "\"\\F41D\""
    },
    "mdi-polaroid:before": {
        "content": "\"\\F41E\""
    },
    "mdi-poll:before": {
        "content": "\"\\F41F\""
    },
    "mdi-poll-box:before": {
        "content": "\"\\F420\""
    },
    "mdi-polymer:before": {
        "content": "\"\\F421\""
    },
    "mdi-pool:before": {
        "content": "\"\\F606\""
    },
    "mdi-popcorn:before": {
        "content": "\"\\F422\""
    },
    "mdi-pot:before": {
        "content": "\"\\F65A\""
    },
    "mdi-pot-mix:before": {
        "content": "\"\\F65B\""
    },
    "mdi-pound:before": {
        "content": "\"\\F423\""
    },
    "mdi-pound-box:before": {
        "content": "\"\\F424\""
    },
    "mdi-power:before": {
        "content": "\"\\F425\""
    },
    "mdi-power-plug:before": {
        "content": "\"\\F6A4\""
    },
    "mdi-power-plug-off:before": {
        "content": "\"\\F6A5\""
    },
    "mdi-power-settings:before": {
        "content": "\"\\F426\""
    },
    "mdi-power-socket:before": {
        "content": "\"\\F427\""
    },
    "mdi-prescription:before": {
        "content": "\"\\F705\""
    },
    "mdi-presentation:before": {
        "content": "\"\\F428\""
    },
    "mdi-presentation-play:before": {
        "content": "\"\\F429\""
    },
    "mdi-printer:before": {
        "content": "\"\\F42A\""
    },
    "mdi-printer-3d:before": {
        "content": "\"\\F42B\""
    },
    "mdi-printer-alert:before": {
        "content": "\"\\F42C\""
    },
    "mdi-printer-settings:before": {
        "content": "\"\\F706\""
    },
    "mdi-priority-high:before": {
        "content": "\"\\F603\""
    },
    "mdi-priority-low:before": {
        "content": "\"\\F604\""
    },
    "mdi-professional-hexagon:before": {
        "content": "\"\\F42D\""
    },
    "mdi-projector:before": {
        "content": "\"\\F42E\""
    },
    "mdi-projector-screen:before": {
        "content": "\"\\F42F\""
    },
    "mdi-publish:before": {
        "content": "\"\\F6A6\""
    },
    "mdi-pulse:before": {
        "content": "\"\\F430\""
    },
    "mdi-puzzle:before": {
        "content": "\"\\F431\""
    },
    "mdi-qqchat:before": {
        "content": "\"\\F605\""
    },
    "mdi-qrcode:before": {
        "content": "\"\\F432\""
    },
    "mdi-qrcode-scan:before": {
        "content": "\"\\F433\""
    },
    "mdi-quadcopter:before": {
        "content": "\"\\F434\""
    },
    "mdi-quality-high:before": {
        "content": "\"\\F435\""
    },
    "mdi-quicktime:before": {
        "content": "\"\\F436\""
    },
    "mdi-radar:before": {
        "content": "\"\\F437\""
    },
    "mdi-radiator:before": {
        "content": "\"\\F438\""
    },
    "mdi-radio:before": {
        "content": "\"\\F439\""
    },
    "mdi-radio-handheld:before": {
        "content": "\"\\F43A\""
    },
    "mdi-radio-tower:before": {
        "content": "\"\\F43B\""
    },
    "mdi-radioactive:before": {
        "content": "\"\\F43C\""
    },
    "mdi-radiobox-blank:before": {
        "content": "\"\\F43D\""
    },
    "mdi-radiobox-marked:before": {
        "content": "\"\\F43E\""
    },
    "mdi-raspberrypi:before": {
        "content": "\"\\F43F\""
    },
    "mdi-ray-end:before": {
        "content": "\"\\F440\""
    },
    "mdi-ray-end-arrow:before": {
        "content": "\"\\F441\""
    },
    "mdi-ray-start:before": {
        "content": "\"\\F442\""
    },
    "mdi-ray-start-arrow:before": {
        "content": "\"\\F443\""
    },
    "mdi-ray-start-end:before": {
        "content": "\"\\F444\""
    },
    "mdi-ray-vertex:before": {
        "content": "\"\\F445\""
    },
    "mdi-rdio:before": {
        "content": "\"\\F446\""
    },
    "mdi-react:before": {
        "content": "\"\\F707\""
    },
    "mdi-read:before": {
        "content": "\"\\F447\""
    },
    "mdi-readability:before": {
        "content": "\"\\F448\""
    },
    "mdi-receipt:before": {
        "content": "\"\\F449\""
    },
    "mdi-record:before": {
        "content": "\"\\F44A\""
    },
    "mdi-record-rec:before": {
        "content": "\"\\F44B\""
    },
    "mdi-recycle:before": {
        "content": "\"\\F44C\""
    },
    "mdi-reddit:before": {
        "content": "\"\\F44D\""
    },
    "mdi-redo:before": {
        "content": "\"\\F44E\""
    },
    "mdi-redo-variant:before": {
        "content": "\"\\F44F\""
    },
    "mdi-refresh:before": {
        "content": "\"\\F450\""
    },
    "mdi-regex:before": {
        "content": "\"\\F451\""
    },
    "mdi-relative-scale:before": {
        "content": "\"\\F452\""
    },
    "mdi-reload:before": {
        "content": "\"\\F453\""
    },
    "mdi-remote:before": {
        "content": "\"\\F454\""
    },
    "mdi-rename-box:before": {
        "content": "\"\\F455\""
    },
    "mdi-reorder-horizontal:before": {
        "content": "\"\\F687\""
    },
    "mdi-reorder-vertical:before": {
        "content": "\"\\F688\""
    },
    "mdi-repeat:before": {
        "content": "\"\\F456\""
    },
    "mdi-repeat-off:before": {
        "content": "\"\\F457\""
    },
    "mdi-repeat-once:before": {
        "content": "\"\\F458\""
    },
    "mdi-replay:before": {
        "content": "\"\\F459\""
    },
    "mdi-reply:before": {
        "content": "\"\\F45A\""
    },
    "mdi-reply-all:before": {
        "content": "\"\\F45B\""
    },
    "mdi-reproduction:before": {
        "content": "\"\\F45C\""
    },
    "mdi-resize-bottom-right:before": {
        "content": "\"\\F45D\""
    },
    "mdi-responsive:before": {
        "content": "\"\\F45E\""
    },
    "mdi-restart:before": {
        "content": "\"\\F708\""
    },
    "mdi-restore:before": {
        "content": "\"\\F6A7\""
    },
    "mdi-rewind:before": {
        "content": "\"\\F45F\""
    },
    "mdi-rewind-outline:before": {
        "content": "\"\\F709\""
    },
    "mdi-rhombus:before": {
        "content": "\"\\F70A\""
    },
    "mdi-rhombus-outline:before": {
        "content": "\"\\F70B\""
    },
    "mdi-ribbon:before": {
        "content": "\"\\F460\""
    },
    "mdi-road:before": {
        "content": "\"\\F461\""
    },
    "mdi-road-variant:before": {
        "content": "\"\\F462\""
    },
    "mdi-robot:before": {
        "content": "\"\\F6A8\""
    },
    "mdi-rocket:before": {
        "content": "\"\\F463\""
    },
    "mdi-roomba:before": {
        "content": "\"\\F70C\""
    },
    "mdi-rotate-3d:before": {
        "content": "\"\\F464\""
    },
    "mdi-rotate-left:before": {
        "content": "\"\\F465\""
    },
    "mdi-rotate-left-variant:before": {
        "content": "\"\\F466\""
    },
    "mdi-rotate-right:before": {
        "content": "\"\\F467\""
    },
    "mdi-rotate-right-variant:before": {
        "content": "\"\\F468\""
    },
    "mdi-rounded-corner:before": {
        "content": "\"\\F607\""
    },
    "mdi-router-wireless:before": {
        "content": "\"\\F469\""
    },
    "mdi-routes:before": {
        "content": "\"\\F46A\""
    },
    "mdi-rowing:before": {
        "content": "\"\\F608\""
    },
    "mdi-rss:before": {
        "content": "\"\\F46B\""
    },
    "mdi-rss-box:before": {
        "content": "\"\\F46C\""
    },
    "mdi-ruler:before": {
        "content": "\"\\F46D\""
    },
    "mdi-run:before": {
        "content": "\"\\F70D\""
    },
    "mdi-run-fast:before": {
        "content": "\"\\F46E\""
    },
    "mdi-sale:before": {
        "content": "\"\\F46F\""
    },
    "mdi-satellite:before": {
        "content": "\"\\F470\""
    },
    "mdi-satellite-variant:before": {
        "content": "\"\\F471\""
    },
    "mdi-saxophone:before": {
        "content": "\"\\F609\""
    },
    "mdi-scale:before": {
        "content": "\"\\F472\""
    },
    "mdi-scale-balance:before": {
        "content": "\"\\F5D1\""
    },
    "mdi-scale-bathroom:before": {
        "content": "\"\\F473\""
    },
    "mdi-scanner:before": {
        "content": "\"\\F6AA\""
    },
    "mdi-school:before": {
        "content": "\"\\F474\""
    },
    "mdi-screen-rotation:before": {
        "content": "\"\\F475\""
    },
    "mdi-screen-rotation-lock:before": {
        "content": "\"\\F476\""
    },
    "mdi-screwdriver:before": {
        "content": "\"\\F477\""
    },
    "mdi-script:before": {
        "content": "\"\\F478\""
    },
    "mdi-sd:before": {
        "content": "\"\\F479\""
    },
    "mdi-seal:before": {
        "content": "\"\\F47A\""
    },
    "mdi-search-web:before": {
        "content": "\"\\F70E\""
    },
    "mdi-seat-flat:before": {
        "content": "\"\\F47B\""
    },
    "mdi-seat-flat-angled:before": {
        "content": "\"\\F47C\""
    },
    "mdi-seat-individual-suite:before": {
        "content": "\"\\F47D\""
    },
    "mdi-seat-legroom-extra:before": {
        "content": "\"\\F47E\""
    },
    "mdi-seat-legroom-normal:before": {
        "content": "\"\\F47F\""
    },
    "mdi-seat-legroom-reduced:before": {
        "content": "\"\\F480\""
    },
    "mdi-seat-recline-extra:before": {
        "content": "\"\\F481\""
    },
    "mdi-seat-recline-normal:before": {
        "content": "\"\\F482\""
    },
    "mdi-security:before": {
        "content": "\"\\F483\""
    },
    "mdi-security-home:before": {
        "content": "\"\\F689\""
    },
    "mdi-security-network:before": {
        "content": "\"\\F484\""
    },
    "mdi-select:before": {
        "content": "\"\\F485\""
    },
    "mdi-select-all:before": {
        "content": "\"\\F486\""
    },
    "mdi-select-inverse:before": {
        "content": "\"\\F487\""
    },
    "mdi-select-off:before": {
        "content": "\"\\F488\""
    },
    "mdi-selection:before": {
        "content": "\"\\F489\""
    },
    "mdi-send:before": {
        "content": "\"\\F48A\""
    },
    "mdi-serial-port:before": {
        "content": "\"\\F65C\""
    },
    "mdi-server:before": {
        "content": "\"\\F48B\""
    },
    "mdi-server-minus:before": {
        "content": "\"\\F48C\""
    },
    "mdi-server-network:before": {
        "content": "\"\\F48D\""
    },
    "mdi-server-network-off:before": {
        "content": "\"\\F48E\""
    },
    "mdi-server-off:before": {
        "content": "\"\\F48F\""
    },
    "mdi-server-plus:before": {
        "content": "\"\\F490\""
    },
    "mdi-server-remove:before": {
        "content": "\"\\F491\""
    },
    "mdi-server-security:before": {
        "content": "\"\\F492\""
    },
    "mdi-settings:before": {
        "content": "\"\\F493\""
    },
    "mdi-settings-box:before": {
        "content": "\"\\F494\""
    },
    "mdi-shape-circle-plus:before": {
        "content": "\"\\F65D\""
    },
    "mdi-shape-plus:before": {
        "content": "\"\\F495\""
    },
    "mdi-shape-polygon-plus:before": {
        "content": "\"\\F65E\""
    },
    "mdi-shape-rectangle-plus:before": {
        "content": "\"\\F65F\""
    },
    "mdi-shape-square-plus:before": {
        "content": "\"\\F660\""
    },
    "mdi-share:before": {
        "content": "\"\\F496\""
    },
    "mdi-share-variant:before": {
        "content": "\"\\F497\""
    },
    "mdi-shield:before": {
        "content": "\"\\F498\""
    },
    "mdi-shield-outline:before": {
        "content": "\"\\F499\""
    },
    "mdi-shopping:before": {
        "content": "\"\\F49A\""
    },
    "mdi-shopping-music:before": {
        "content": "\"\\F49B\""
    },
    "mdi-shovel:before": {
        "content": "\"\\F70F\""
    },
    "mdi-shovel-off:before": {
        "content": "\"\\F710\""
    },
    "mdi-shredder:before": {
        "content": "\"\\F49C\""
    },
    "mdi-shuffle:before": {
        "content": "\"\\F49D\""
    },
    "mdi-shuffle-disabled:before": {
        "content": "\"\\F49E\""
    },
    "mdi-shuffle-variant:before": {
        "content": "\"\\F49F\""
    },
    "mdi-sigma:before": {
        "content": "\"\\F4A0\""
    },
    "mdi-sigma-lower:before": {
        "content": "\"\\F62B\""
    },
    "mdi-sign-caution:before": {
        "content": "\"\\F4A1\""
    },
    "mdi-signal:before": {
        "content": "\"\\F4A2\""
    },
    "mdi-signal-2g:before": {
        "content": "\"\\F711\""
    },
    "mdi-signal-3g:before": {
        "content": "\"\\F712\""
    },
    "mdi-signal-4g:before": {
        "content": "\"\\F713\""
    },
    "mdi-signal-hspa:before": {
        "content": "\"\\F714\""
    },
    "mdi-signal-hspa-plus:before": {
        "content": "\"\\F715\""
    },
    "mdi-signal-variant:before": {
        "content": "\"\\F60A\""
    },
    "mdi-silverware:before": {
        "content": "\"\\F4A3\""
    },
    "mdi-silverware-fork:before": {
        "content": "\"\\F4A4\""
    },
    "mdi-silverware-spoon:before": {
        "content": "\"\\F4A5\""
    },
    "mdi-silverware-variant:before": {
        "content": "\"\\F4A6\""
    },
    "mdi-sim:before": {
        "content": "\"\\F4A7\""
    },
    "mdi-sim-alert:before": {
        "content": "\"\\F4A8\""
    },
    "mdi-sim-off:before": {
        "content": "\"\\F4A9\""
    },
    "mdi-sitemap:before": {
        "content": "\"\\F4AA\""
    },
    "mdi-skip-backward:before": {
        "content": "\"\\F4AB\""
    },
    "mdi-skip-forward:before": {
        "content": "\"\\F4AC\""
    },
    "mdi-skip-next:before": {
        "content": "\"\\F4AD\""
    },
    "mdi-skip-next-circle:before": {
        "content": "\"\\F661\""
    },
    "mdi-skip-next-circle-outline:before": {
        "content": "\"\\F662\""
    },
    "mdi-skip-previous:before": {
        "content": "\"\\F4AE\""
    },
    "mdi-skip-previous-circle:before": {
        "content": "\"\\F663\""
    },
    "mdi-skip-previous-circle-outline:before": {
        "content": "\"\\F664\""
    },
    "mdi-skull:before": {
        "content": "\"\\F68B\""
    },
    "mdi-skype:before": {
        "content": "\"\\F4AF\""
    },
    "mdi-skype-business:before": {
        "content": "\"\\F4B0\""
    },
    "mdi-slack:before": {
        "content": "\"\\F4B1\""
    },
    "mdi-sleep:before": {
        "content": "\"\\F4B2\""
    },
    "mdi-sleep-off:before": {
        "content": "\"\\F4B3\""
    },
    "mdi-smoking:before": {
        "content": "\"\\F4B4\""
    },
    "mdi-smoking-off:before": {
        "content": "\"\\F4B5\""
    },
    "mdi-snapchat:before": {
        "content": "\"\\F4B6\""
    },
    "mdi-snowflake:before": {
        "content": "\"\\F716\""
    },
    "mdi-snowman:before": {
        "content": "\"\\F4B7\""
    },
    "mdi-soccer:before": {
        "content": "\"\\F4B8\""
    },
    "mdi-sofa:before": {
        "content": "\"\\F4B9\""
    },
    "mdi-solid:before": {
        "content": "\"\\F68C\""
    },
    "mdi-sort:before": {
        "content": "\"\\F4BA\""
    },
    "mdi-sort-alphabetical:before": {
        "content": "\"\\F4BB\""
    },
    "mdi-sort-ascending:before": {
        "content": "\"\\F4BC\""
    },
    "mdi-sort-descending:before": {
        "content": "\"\\F4BD\""
    },
    "mdi-sort-numeric:before": {
        "content": "\"\\F4BE\""
    },
    "mdi-sort-variant:before": {
        "content": "\"\\F4BF\""
    },
    "mdi-soundcloud:before": {
        "content": "\"\\F4C0\""
    },
    "mdi-source-branch:before": {
        "content": "\"\\F62C\""
    },
    "mdi-source-commit:before": {
        "content": "\"\\F717\""
    },
    "mdi-source-commit-end:before": {
        "content": "\"\\F718\""
    },
    "mdi-source-commit-end-local:before": {
        "content": "\"\\F719\""
    },
    "mdi-source-commit-local:before": {
        "content": "\"\\F71A\""
    },
    "mdi-source-commit-next-local:before": {
        "content": "\"\\F71B\""
    },
    "mdi-source-commit-start:before": {
        "content": "\"\\F71C\""
    },
    "mdi-source-commit-start-next-local:before": {
        "content": "\"\\F71D\""
    },
    "mdi-source-fork:before": {
        "content": "\"\\F4C1\""
    },
    "mdi-source-merge:before": {
        "content": "\"\\F62D\""
    },
    "mdi-source-pull:before": {
        "content": "\"\\F4C2\""
    },
    "mdi-speaker:before": {
        "content": "\"\\F4C3\""
    },
    "mdi-speaker-off:before": {
        "content": "\"\\F4C4\""
    },
    "mdi-speaker-wireless:before": {
        "content": "\"\\F71E\""
    },
    "mdi-speedometer:before": {
        "content": "\"\\F4C5\""
    },
    "mdi-spellcheck:before": {
        "content": "\"\\F4C6\""
    },
    "mdi-spotify:before": {
        "content": "\"\\F4C7\""
    },
    "mdi-spotlight:before": {
        "content": "\"\\F4C8\""
    },
    "mdi-spotlight-beam:before": {
        "content": "\"\\F4C9\""
    },
    "mdi-spray:before": {
        "content": "\"\\F665\""
    },
    "mdi-square-inc:before": {
        "content": "\"\\F4CA\""
    },
    "mdi-square-inc-cash:before": {
        "content": "\"\\F4CB\""
    },
    "mdi-stackexchange:before": {
        "content": "\"\\F60B\""
    },
    "mdi-stackoverflow:before": {
        "content": "\"\\F4CC\""
    },
    "mdi-stadium:before": {
        "content": "\"\\F71F\""
    },
    "mdi-stairs:before": {
        "content": "\"\\F4CD\""
    },
    "mdi-star:before": {
        "content": "\"\\F4CE\""
    },
    "mdi-star-circle:before": {
        "content": "\"\\F4CF\""
    },
    "mdi-star-half:before": {
        "content": "\"\\F4D0\""
    },
    "mdi-star-off:before": {
        "content": "\"\\F4D1\""
    },
    "mdi-star-outline:before": {
        "content": "\"\\F4D2\""
    },
    "mdi-steam:before": {
        "content": "\"\\F4D3\""
    },
    "mdi-steering:before": {
        "content": "\"\\F4D4\""
    },
    "mdi-step-backward:before": {
        "content": "\"\\F4D5\""
    },
    "mdi-step-backward-2:before": {
        "content": "\"\\F4D6\""
    },
    "mdi-step-forward:before": {
        "content": "\"\\F4D7\""
    },
    "mdi-step-forward-2:before": {
        "content": "\"\\F4D8\""
    },
    "mdi-stethoscope:before": {
        "content": "\"\\F4D9\""
    },
    "mdi-sticker:before": {
        "content": "\"\\F5D0\""
    },
    "mdi-stocking:before": {
        "content": "\"\\F4DA\""
    },
    "mdi-stop:before": {
        "content": "\"\\F4DB\""
    },
    "mdi-stop-circle:before": {
        "content": "\"\\F666\""
    },
    "mdi-stop-circle-outline:before": {
        "content": "\"\\F667\""
    },
    "mdi-store:before": {
        "content": "\"\\F4DC\""
    },
    "mdi-store-24-hour:before": {
        "content": "\"\\F4DD\""
    },
    "mdi-stove:before": {
        "content": "\"\\F4DE\""
    },
    "mdi-subdirectory-arrow-left:before": {
        "content": "\"\\F60C\""
    },
    "mdi-subdirectory-arrow-right:before": {
        "content": "\"\\F60D\""
    },
    "mdi-subway:before": {
        "content": "\"\\F6AB\""
    },
    "mdi-subway-variant:before": {
        "content": "\"\\F4DF\""
    },
    "mdi-sunglasses:before": {
        "content": "\"\\F4E0\""
    },
    "mdi-surround-sound:before": {
        "content": "\"\\F5C5\""
    },
    "mdi-svg:before": {
        "content": "\"\\F720\""
    },
    "mdi-swap-horizontal:before": {
        "content": "\"\\F4E1\""
    },
    "mdi-swap-vertical:before": {
        "content": "\"\\F4E2\""
    },
    "mdi-swim:before": {
        "content": "\"\\F4E3\""
    },
    "mdi-switch:before": {
        "content": "\"\\F4E4\""
    },
    "mdi-sword:before": {
        "content": "\"\\F4E5\""
    },
    "mdi-sync:before": {
        "content": "\"\\F4E6\""
    },
    "mdi-sync-alert:before": {
        "content": "\"\\F4E7\""
    },
    "mdi-sync-off:before": {
        "content": "\"\\F4E8\""
    },
    "mdi-tab:before": {
        "content": "\"\\F4E9\""
    },
    "mdi-tab-unselected:before": {
        "content": "\"\\F4EA\""
    },
    "mdi-table:before": {
        "content": "\"\\F4EB\""
    },
    "mdi-table-column-plus-after:before": {
        "content": "\"\\F4EC\""
    },
    "mdi-table-column-plus-before:before": {
        "content": "\"\\F4ED\""
    },
    "mdi-table-column-remove:before": {
        "content": "\"\\F4EE\""
    },
    "mdi-table-column-width:before": {
        "content": "\"\\F4EF\""
    },
    "mdi-table-edit:before": {
        "content": "\"\\F4F0\""
    },
    "mdi-table-large:before": {
        "content": "\"\\F4F1\""
    },
    "mdi-table-row-height:before": {
        "content": "\"\\F4F2\""
    },
    "mdi-table-row-plus-after:before": {
        "content": "\"\\F4F3\""
    },
    "mdi-table-row-plus-before:before": {
        "content": "\"\\F4F4\""
    },
    "mdi-table-row-remove:before": {
        "content": "\"\\F4F5\""
    },
    "mdi-tablet:before": {
        "content": "\"\\F4F6\""
    },
    "mdi-tablet-android:before": {
        "content": "\"\\F4F7\""
    },
    "mdi-tablet-ipad:before": {
        "content": "\"\\F4F8\""
    },
    "mdi-tag:before": {
        "content": "\"\\F4F9\""
    },
    "mdi-tag-faces:before": {
        "content": "\"\\F4FA\""
    },
    "mdi-tag-heart:before": {
        "content": "\"\\F68A\""
    },
    "mdi-tag-multiple:before": {
        "content": "\"\\F4FB\""
    },
    "mdi-tag-outline:before": {
        "content": "\"\\F4FC\""
    },
    "mdi-tag-plus:before": {
        "content": "\"\\F721\""
    },
    "mdi-tag-remove:before": {
        "content": "\"\\F722\""
    },
    "mdi-tag-text-outline:before": {
        "content": "\"\\F4FD\""
    },
    "mdi-target:before": {
        "content": "\"\\F4FE\""
    },
    "mdi-taxi:before": {
        "content": "\"\\F4FF\""
    },
    "mdi-teamviewer:before": {
        "content": "\"\\F500\""
    },
    "mdi-telegram:before": {
        "content": "\"\\F501\""
    },
    "mdi-television:before": {
        "content": "\"\\F502\""
    },
    "mdi-television-guide:before": {
        "content": "\"\\F503\""
    },
    "mdi-temperature-celsius:before": {
        "content": "\"\\F504\""
    },
    "mdi-temperature-fahrenheit:before": {
        "content": "\"\\F505\""
    },
    "mdi-temperature-kelvin:before": {
        "content": "\"\\F506\""
    },
    "mdi-tennis:before": {
        "content": "\"\\F507\""
    },
    "mdi-tent:before": {
        "content": "\"\\F508\""
    },
    "mdi-terrain:before": {
        "content": "\"\\F509\""
    },
    "mdi-test-tube:before": {
        "content": "\"\\F668\""
    },
    "mdi-text-shadow:before": {
        "content": "\"\\F669\""
    },
    "mdi-text-to-speech:before": {
        "content": "\"\\F50A\""
    },
    "mdi-text-to-speech-off:before": {
        "content": "\"\\F50B\""
    },
    "mdi-textbox:before": {
        "content": "\"\\F60E\""
    },
    "mdi-texture:before": {
        "content": "\"\\F50C\""
    },
    "mdi-theater:before": {
        "content": "\"\\F50D\""
    },
    "mdi-theme-light-dark:before": {
        "content": "\"\\F50E\""
    },
    "mdi-thermometer:before": {
        "content": "\"\\F50F\""
    },
    "mdi-thermometer-lines:before": {
        "content": "\"\\F510\""
    },
    "mdi-thumb-down:before": {
        "content": "\"\\F511\""
    },
    "mdi-thumb-down-outline:before": {
        "content": "\"\\F512\""
    },
    "mdi-thumb-up:before": {
        "content": "\"\\F513\""
    },
    "mdi-thumb-up-outline:before": {
        "content": "\"\\F514\""
    },
    "mdi-thumbs-up-down:before": {
        "content": "\"\\F515\""
    },
    "mdi-ticket:before": {
        "content": "\"\\F516\""
    },
    "mdi-ticket-account:before": {
        "content": "\"\\F517\""
    },
    "mdi-ticket-confirmation:before": {
        "content": "\"\\F518\""
    },
    "mdi-ticket-percent:before": {
        "content": "\"\\F723\""
    },
    "mdi-tie:before": {
        "content": "\"\\F519\""
    },
    "mdi-tilde:before": {
        "content": "\"\\F724\""
    },
    "mdi-timelapse:before": {
        "content": "\"\\F51A\""
    },
    "mdi-timer:before": {
        "content": "\"\\F51B\""
    },
    "mdi-timer-10:before": {
        "content": "\"\\F51C\""
    },
    "mdi-timer-3:before": {
        "content": "\"\\F51D\""
    },
    "mdi-timer-off:before": {
        "content": "\"\\F51E\""
    },
    "mdi-timer-sand:before": {
        "content": "\"\\F51F\""
    },
    "mdi-timer-sand-empty:before": {
        "content": "\"\\F6AC\""
    },
    "mdi-timetable:before": {
        "content": "\"\\F520\""
    },
    "mdi-toggle-switch:before": {
        "content": "\"\\F521\""
    },
    "mdi-toggle-switch-off:before": {
        "content": "\"\\F522\""
    },
    "mdi-tooltip:before": {
        "content": "\"\\F523\""
    },
    "mdi-tooltip-edit:before": {
        "content": "\"\\F524\""
    },
    "mdi-tooltip-image:before": {
        "content": "\"\\F525\""
    },
    "mdi-tooltip-outline:before": {
        "content": "\"\\F526\""
    },
    "mdi-tooltip-outline-plus:before": {
        "content": "\"\\F527\""
    },
    "mdi-tooltip-text:before": {
        "content": "\"\\F528\""
    },
    "mdi-tooth:before": {
        "content": "\"\\F529\""
    },
    "mdi-tor:before": {
        "content": "\"\\F52A\""
    },
    "mdi-tower-beach:before": {
        "content": "\"\\F680\""
    },
    "mdi-tower-fire:before": {
        "content": "\"\\F681\""
    },
    "mdi-traffic-light:before": {
        "content": "\"\\F52B\""
    },
    "mdi-train:before": {
        "content": "\"\\F52C\""
    },
    "mdi-tram:before": {
        "content": "\"\\F52D\""
    },
    "mdi-transcribe:before": {
        "content": "\"\\F52E\""
    },
    "mdi-transcribe-close:before": {
        "content": "\"\\F52F\""
    },
    "mdi-transfer:before": {
        "content": "\"\\F530\""
    },
    "mdi-transit-transfer:before": {
        "content": "\"\\F6AD\""
    },
    "mdi-translate:before": {
        "content": "\"\\F5CA\""
    },
    "mdi-treasure-chest:before": {
        "content": "\"\\F725\""
    },
    "mdi-tree:before": {
        "content": "\"\\F531\""
    },
    "mdi-trello:before": {
        "content": "\"\\F532\""
    },
    "mdi-trending-down:before": {
        "content": "\"\\F533\""
    },
    "mdi-trending-neutral:before": {
        "content": "\"\\F534\""
    },
    "mdi-trending-up:before": {
        "content": "\"\\F535\""
    },
    "mdi-triangle:before": {
        "content": "\"\\F536\""
    },
    "mdi-triangle-outline:before": {
        "content": "\"\\F537\""
    },
    "mdi-trophy:before": {
        "content": "\"\\F538\""
    },
    "mdi-trophy-award:before": {
        "content": "\"\\F539\""
    },
    "mdi-trophy-outline:before": {
        "content": "\"\\F53A\""
    },
    "mdi-trophy-variant:before": {
        "content": "\"\\F53B\""
    },
    "mdi-trophy-variant-outline:before": {
        "content": "\"\\F53C\""
    },
    "mdi-truck:before": {
        "content": "\"\\F53D\""
    },
    "mdi-truck-delivery:before": {
        "content": "\"\\F53E\""
    },
    "mdi-truck-trailer:before": {
        "content": "\"\\F726\""
    },
    "mdi-tshirt-crew:before": {
        "content": "\"\\F53F\""
    },
    "mdi-tshirt-v:before": {
        "content": "\"\\F540\""
    },
    "mdi-tumblr:before": {
        "content": "\"\\F541\""
    },
    "mdi-tumblr-reblog:before": {
        "content": "\"\\F542\""
    },
    "mdi-tune:before": {
        "content": "\"\\F62E\""
    },
    "mdi-tune-vertical:before": {
        "content": "\"\\F66A\""
    },
    "mdi-twitch:before": {
        "content": "\"\\F543\""
    },
    "mdi-twitter:before": {
        "content": "\"\\F544\""
    },
    "mdi-twitter-box:before": {
        "content": "\"\\F545\""
    },
    "mdi-twitter-circle:before": {
        "content": "\"\\F546\""
    },
    "mdi-twitter-retweet:before": {
        "content": "\"\\F547\""
    },
    "mdi-ubuntu:before": {
        "content": "\"\\F548\""
    },
    "mdi-umbraco:before": {
        "content": "\"\\F549\""
    },
    "mdi-umbrella:before": {
        "content": "\"\\F54A\""
    },
    "mdi-umbrella-outline:before": {
        "content": "\"\\F54B\""
    },
    "mdi-undo:before": {
        "content": "\"\\F54C\""
    },
    "mdi-undo-variant:before": {
        "content": "\"\\F54D\""
    },
    "mdi-unfold-less:before": {
        "content": "\"\\F54E\""
    },
    "mdi-unfold-more:before": {
        "content": "\"\\F54F\""
    },
    "mdi-ungroup:before": {
        "content": "\"\\F550\""
    },
    "mdi-unity:before": {
        "content": "\"\\F6AE\""
    },
    "mdi-untappd:before": {
        "content": "\"\\F551\""
    },
    "mdi-update:before": {
        "content": "\"\\F6AF\""
    },
    "mdi-upload:before": {
        "content": "\"\\F552\""
    },
    "mdi-usb:before": {
        "content": "\"\\F553\""
    },
    "mdi-vector-arrange-above:before": {
        "content": "\"\\F554\""
    },
    "mdi-vector-arrange-below:before": {
        "content": "\"\\F555\""
    },
    "mdi-vector-circle:before": {
        "content": "\"\\F556\""
    },
    "mdi-vector-circle-variant:before": {
        "content": "\"\\F557\""
    },
    "mdi-vector-combine:before": {
        "content": "\"\\F558\""
    },
    "mdi-vector-curve:before": {
        "content": "\"\\F559\""
    },
    "mdi-vector-difference:before": {
        "content": "\"\\F55A\""
    },
    "mdi-vector-difference-ab:before": {
        "content": "\"\\F55B\""
    },
    "mdi-vector-difference-ba:before": {
        "content": "\"\\F55C\""
    },
    "mdi-vector-intersection:before": {
        "content": "\"\\F55D\""
    },
    "mdi-vector-line:before": {
        "content": "\"\\F55E\""
    },
    "mdi-vector-point:before": {
        "content": "\"\\F55F\""
    },
    "mdi-vector-polygon:before": {
        "content": "\"\\F560\""
    },
    "mdi-vector-polyline:before": {
        "content": "\"\\F561\""
    },
    "mdi-vector-rectangle:before": {
        "content": "\"\\F5C6\""
    },
    "mdi-vector-selection:before": {
        "content": "\"\\F562\""
    },
    "mdi-vector-square:before": {
        "content": "\"\\F001\""
    },
    "mdi-vector-triangle:before": {
        "content": "\"\\F563\""
    },
    "mdi-vector-union:before": {
        "content": "\"\\F564\""
    },
    "mdi-verified:before": {
        "content": "\"\\F565\""
    },
    "mdi-vibrate:before": {
        "content": "\"\\F566\""
    },
    "mdi-video:before": {
        "content": "\"\\F567\""
    },
    "mdi-video-off:before": {
        "content": "\"\\F568\""
    },
    "mdi-video-switch:before": {
        "content": "\"\\F569\""
    },
    "mdi-view-agenda:before": {
        "content": "\"\\F56A\""
    },
    "mdi-view-array:before": {
        "content": "\"\\F56B\""
    },
    "mdi-view-carousel:before": {
        "content": "\"\\F56C\""
    },
    "mdi-view-column:before": {
        "content": "\"\\F56D\""
    },
    "mdi-view-dashboard:before": {
        "content": "\"\\F56E\""
    },
    "mdi-view-day:before": {
        "content": "\"\\F56F\""
    },
    "mdi-view-grid:before": {
        "content": "\"\\F570\""
    },
    "mdi-view-headline:before": {
        "content": "\"\\F571\""
    },
    "mdi-view-list:before": {
        "content": "\"\\F572\""
    },
    "mdi-view-module:before": {
        "content": "\"\\F573\""
    },
    "mdi-view-parallel:before": {
        "content": "\"\\F727\""
    },
    "mdi-view-quilt:before": {
        "content": "\"\\F574\""
    },
    "mdi-view-sequential:before": {
        "content": "\"\\F728\""
    },
    "mdi-view-stream:before": {
        "content": "\"\\F575\""
    },
    "mdi-view-week:before": {
        "content": "\"\\F576\""
    },
    "mdi-vimeo:before": {
        "content": "\"\\F577\""
    },
    "mdi-vine:before": {
        "content": "\"\\F578\""
    },
    "mdi-violin:before": {
        "content": "\"\\F60F\""
    },
    "mdi-visualstudio:before": {
        "content": "\"\\F610\""
    },
    "mdi-vk:before": {
        "content": "\"\\F579\""
    },
    "mdi-vk-box:before": {
        "content": "\"\\F57A\""
    },
    "mdi-vk-circle:before": {
        "content": "\"\\F57B\""
    },
    "mdi-vlc:before": {
        "content": "\"\\F57C\""
    },
    "mdi-voice:before": {
        "content": "\"\\F5CB\""
    },
    "mdi-voicemail:before": {
        "content": "\"\\F57D\""
    },
    "mdi-volume-high:before": {
        "content": "\"\\F57E\""
    },
    "mdi-volume-low:before": {
        "content": "\"\\F57F\""
    },
    "mdi-volume-medium:before": {
        "content": "\"\\F580\""
    },
    "mdi-volume-off:before": {
        "content": "\"\\F581\""
    },
    "mdi-vpn:before": {
        "content": "\"\\F582\""
    },
    "mdi-walk:before": {
        "content": "\"\\F583\""
    },
    "mdi-wallet:before": {
        "content": "\"\\F584\""
    },
    "mdi-wallet-giftcard:before": {
        "content": "\"\\F585\""
    },
    "mdi-wallet-membership:before": {
        "content": "\"\\F586\""
    },
    "mdi-wallet-travel:before": {
        "content": "\"\\F587\""
    },
    "mdi-wan:before": {
        "content": "\"\\F588\""
    },
    "mdi-washing-machine:before": {
        "content": "\"\\F729\""
    },
    "mdi-watch:before": {
        "content": "\"\\F589\""
    },
    "mdi-watch-export:before": {
        "content": "\"\\F58A\""
    },
    "mdi-watch-import:before": {
        "content": "\"\\F58B\""
    },
    "mdi-watch-vibrate:before": {
        "content": "\"\\F6B0\""
    },
    "mdi-water:before": {
        "content": "\"\\F58C\""
    },
    "mdi-water-off:before": {
        "content": "\"\\F58D\""
    },
    "mdi-water-percent:before": {
        "content": "\"\\F58E\""
    },
    "mdi-water-pump:before": {
        "content": "\"\\F58F\""
    },
    "mdi-watermark:before": {
        "content": "\"\\F612\""
    },
    "mdi-weather-cloudy:before": {
        "content": "\"\\F590\""
    },
    "mdi-weather-fog:before": {
        "content": "\"\\F591\""
    },
    "mdi-weather-hail:before": {
        "content": "\"\\F592\""
    },
    "mdi-weather-lightning:before": {
        "content": "\"\\F593\""
    },
    "mdi-weather-lightning-rainy:before": {
        "content": "\"\\F67D\""
    },
    "mdi-weather-night:before": {
        "content": "\"\\F594\""
    },
    "mdi-weather-partlycloudy:before": {
        "content": "\"\\F595\""
    },
    "mdi-weather-pouring:before": {
        "content": "\"\\F596\""
    },
    "mdi-weather-rainy:before": {
        "content": "\"\\F597\""
    },
    "mdi-weather-snowy:before": {
        "content": "\"\\F598\""
    },
    "mdi-weather-snowy-rainy:before": {
        "content": "\"\\F67E\""
    },
    "mdi-weather-sunny:before": {
        "content": "\"\\F599\""
    },
    "mdi-weather-sunset:before": {
        "content": "\"\\F59A\""
    },
    "mdi-weather-sunset-down:before": {
        "content": "\"\\F59B\""
    },
    "mdi-weather-sunset-up:before": {
        "content": "\"\\F59C\""
    },
    "mdi-weather-windy:before": {
        "content": "\"\\F59D\""
    },
    "mdi-weather-windy-variant:before": {
        "content": "\"\\F59E\""
    },
    "mdi-web:before": {
        "content": "\"\\F59F\""
    },
    "mdi-webcam:before": {
        "content": "\"\\F5A0\""
    },
    "mdi-webhook:before": {
        "content": "\"\\F62F\""
    },
    "mdi-webpack:before": {
        "content": "\"\\F72A\""
    },
    "mdi-wechat:before": {
        "content": "\"\\F611\""
    },
    "mdi-weight:before": {
        "content": "\"\\F5A1\""
    },
    "mdi-weight-kilogram:before": {
        "content": "\"\\F5A2\""
    },
    "mdi-whatsapp:before": {
        "content": "\"\\F5A3\""
    },
    "mdi-wheelchair-accessibility:before": {
        "content": "\"\\F5A4\""
    },
    "mdi-white-balance-auto:before": {
        "content": "\"\\F5A5\""
    },
    "mdi-white-balance-incandescent:before": {
        "content": "\"\\F5A6\""
    },
    "mdi-white-balance-iridescent:before": {
        "content": "\"\\F5A7\""
    },
    "mdi-white-balance-sunny:before": {
        "content": "\"\\F5A8\""
    },
    "mdi-widgets:before": {
        "content": "\"\\F72B\""
    },
    "mdi-wifi:before": {
        "content": "\"\\F5A9\""
    },
    "mdi-wifi-off:before": {
        "content": "\"\\F5AA\""
    },
    "mdi-wii:before": {
        "content": "\"\\F5AB\""
    },
    "mdi-wiiu:before": {
        "content": "\"\\F72C\""
    },
    "mdi-wikipedia:before": {
        "content": "\"\\F5AC\""
    },
    "mdi-window-close:before": {
        "content": "\"\\F5AD\""
    },
    "mdi-window-closed:before": {
        "content": "\"\\F5AE\""
    },
    "mdi-window-maximize:before": {
        "content": "\"\\F5AF\""
    },
    "mdi-window-minimize:before": {
        "content": "\"\\F5B0\""
    },
    "mdi-window-open:before": {
        "content": "\"\\F5B1\""
    },
    "mdi-window-restore:before": {
        "content": "\"\\F5B2\""
    },
    "mdi-windows:before": {
        "content": "\"\\F5B3\""
    },
    "mdi-wordpress:before": {
        "content": "\"\\F5B4\""
    },
    "mdi-worker:before": {
        "content": "\"\\F5B5\""
    },
    "mdi-wrap:before": {
        "content": "\"\\F5B6\""
    },
    "mdi-wrench:before": {
        "content": "\"\\F5B7\""
    },
    "mdi-wunderlist:before": {
        "content": "\"\\F5B8\""
    },
    "mdi-xaml:before": {
        "content": "\"\\F673\""
    },
    "mdi-xbox:before": {
        "content": "\"\\F5B9\""
    },
    "mdi-xbox-controller:before": {
        "content": "\"\\F5BA\""
    },
    "mdi-xbox-controller-off:before": {
        "content": "\"\\F5BB\""
    },
    "mdi-xda:before": {
        "content": "\"\\F5BC\""
    },
    "mdi-xing:before": {
        "content": "\"\\F5BD\""
    },
    "mdi-xing-box:before": {
        "content": "\"\\F5BE\""
    },
    "mdi-xing-circle:before": {
        "content": "\"\\F5BF\""
    },
    "mdi-xml:before": {
        "content": "\"\\F5C0\""
    },
    "mdi-yeast:before": {
        "content": "\"\\F5C1\""
    },
    "mdi-yelp:before": {
        "content": "\"\\F5C2\""
    },
    "mdi-yin-yang:before": {
        "content": "\"\\F67F\""
    },
    "mdi-youtube-play:before": {
        "content": "\"\\F5C3\""
    },
    "mdi-zip-box:before": {
        "content": "\"\\F5C4\""
    },
    "mdi-18pxmdi-set": {
        "fontSize": 18
    },
    "mdi-18pxmdi:before": {
        "fontSize": 18
    },
    "mdi-18pxicon-lightbulb:before": {
        "fontSize": 18
    },
    "mdi-18pxicon-cards:before": {
        "fontSize": 18
    },
    "mdi-18pxicon-close:before": {
        "fontSize": 18
    },
    "mdi-18pxicon-minimize:before": {
        "fontSize": 18
    },
    "mdi-18pxicon-maximize:before": {
        "fontSize": 18
    },
    "mdi-18pxicon-restore:before": {
        "fontSize": 18
    },
    "mdi-18pxicon-bars:before": {
        "fontSize": 18
    },
    "mdi-18pxicon-arrow-left:before": {
        "fontSize": 18
    },
    "mdi-18pxicon-arrow-right:before": {
        "fontSize": 18
    },
    "mdi-18pxicon-search-plus:before": {
        "fontSize": 18
    },
    "mdi-18pxicon-search-minus:before": {
        "fontSize": 18
    },
    "mdi-18pxicon-folderview:before": {
        "fontSize": 18
    },
    "mdi-18pxicon-file-text:before": {
        "fontSize": 18
    },
    "mdi-24pxmdi-set": {
        "fontSize": 24
    },
    "mdi-24pxmdi:before": {
        "fontSize": 24
    },
    "mdi-24pxicon-lightbulb:before": {
        "fontSize": 24
    },
    "mdi-24pxicon-cards:before": {
        "fontSize": 24
    },
    "mdi-24pxicon-close:before": {
        "fontSize": 24
    },
    "mdi-24pxicon-minimize:before": {
        "fontSize": 24
    },
    "mdi-24pxicon-maximize:before": {
        "fontSize": 24
    },
    "mdi-24pxicon-restore:before": {
        "fontSize": 24
    },
    "mdi-24pxicon-bars:before": {
        "fontSize": 24
    },
    "mdi-24pxicon-arrow-left:before": {
        "fontSize": 24
    },
    "mdi-24pxicon-arrow-right:before": {
        "fontSize": 24
    },
    "mdi-24pxicon-search-plus:before": {
        "fontSize": 24
    },
    "mdi-24pxicon-search-minus:before": {
        "fontSize": 24
    },
    "mdi-24pxicon-folderview:before": {
        "fontSize": 24
    },
    "mdi-24pxicon-file-text:before": {
        "fontSize": 24
    },
    "mdi-36pxmdi-set": {
        "fontSize": 36
    },
    "mdi-36pxmdi:before": {
        "fontSize": 36
    },
    "mdi-36pxicon-lightbulb:before": {
        "fontSize": 36
    },
    "mdi-36pxicon-cards:before": {
        "fontSize": 36
    },
    "mdi-36pxicon-close:before": {
        "fontSize": 36
    },
    "mdi-36pxicon-minimize:before": {
        "fontSize": 36
    },
    "mdi-36pxicon-maximize:before": {
        "fontSize": 36
    },
    "mdi-36pxicon-restore:before": {
        "fontSize": 36
    },
    "mdi-36pxicon-bars:before": {
        "fontSize": 36
    },
    "mdi-36pxicon-arrow-left:before": {
        "fontSize": 36
    },
    "mdi-36pxicon-arrow-right:before": {
        "fontSize": 36
    },
    "mdi-36pxicon-search-plus:before": {
        "fontSize": 36
    },
    "mdi-36pxicon-search-minus:before": {
        "fontSize": 36
    },
    "mdi-36pxicon-folderview:before": {
        "fontSize": 36
    },
    "mdi-36pxicon-file-text:before": {
        "fontSize": 36
    },
    "mdi-48pxmdi-set": {
        "fontSize": 48
    },
    "mdi-48pxmdi:before": {
        "fontSize": 48
    },
    "mdi-48pxicon-lightbulb:before": {
        "fontSize": 48
    },
    "mdi-48pxicon-cards:before": {
        "fontSize": 48
    },
    "mdi-48pxicon-close:before": {
        "fontSize": 48
    },
    "mdi-48pxicon-minimize:before": {
        "fontSize": 48
    },
    "mdi-48pxicon-maximize:before": {
        "fontSize": 48
    },
    "mdi-48pxicon-restore:before": {
        "fontSize": 48
    },
    "mdi-48pxicon-bars:before": {
        "fontSize": 48
    },
    "mdi-48pxicon-arrow-left:before": {
        "fontSize": 48
    },
    "mdi-48pxicon-arrow-right:before": {
        "fontSize": 48
    },
    "mdi-48pxicon-search-plus:before": {
        "fontSize": 48
    },
    "mdi-48pxicon-search-minus:before": {
        "fontSize": 48
    },
    "mdi-48pxicon-folderview:before": {
        "fontSize": 48
    },
    "mdi-48pxicon-file-text:before": {
        "fontSize": 48
    },
    "mdi-dark": {
        "color": "rgba(0, 0, 0, 0.54)"
    },
    "mdi-darkmdi-inactive": {
        "color": "rgba(0, 0, 0, 0.26)"
    },
    "mdi-light": {
        "color": "white"
    },
    "mdi-lightmdi-inactive": {
        "color": "rgba(255, 255, 255, 0.3)"
    },
    "mdi-rotate-45": {
        "WebkitTransform": "rotate(45deg)",
        "MsTransform": "rotate(45deg)",
        "transform": "rotate(45deg)"
    },
    "mdi-rotate-90": {
        "WebkitTransform": "rotate(90deg)",
        "MsTransform": "rotate(90deg)",
        "transform": "rotate(90deg)"
    },
    "mdi-rotate-135": {
        "WebkitTransform": "rotate(135deg)",
        "MsTransform": "rotate(135deg)",
        "transform": "rotate(135deg)"
    },
    "mdi-rotate-180": {
        "WebkitTransform": "rotate(180deg)",
        "MsTransform": "rotate(180deg)",
        "transform": "rotate(180deg)"
    },
    "mdi-rotate-225": {
        "WebkitTransform": "rotate(225deg)",
        "MsTransform": "rotate(225deg)",
        "transform": "rotate(225deg)"
    },
    "mdi-rotate-270": {
        "WebkitTransform": "rotate(270deg)",
        "MsTransform": "rotate(270deg)",
        "transform": "rotate(270deg)"
    },
    "mdi-rotate-315": {
        "WebkitTransform": "rotate(315deg)",
        "MsTransform": "rotate(315deg)",
        "transform": "rotate(315deg)"
    },
    "mdi-flip-horizontal": {
        "WebkitTransform": "scaleX(-1)",
        "transform": "scaleX(-1)",
        "filter": "FlipH",
        "MsFilter": "\"FlipH\""
    },
    "mdi-flip-vertical": {
        "WebkitTransform": "scaleY(-1)",
        "transform": "scaleY(-1)",
        "filter": "FlipV",
        "MsFilter": "\"FlipV\""
    },
    "app-container": {
        "WebkitAppRegion": "no-drag"
    },
    "start-menu": {
        "position": "relative",
        "marginTop": 20,
        "align": "center",
        "WebkitAppRegion": "no-drag"
    },
    "menubar-custom": {
        "position": "relative",
        "top": 0,
        "left": 0,
        "height": 31,
        "width": 100,
        "WebkitBoxSizing": "border-box",
        "backgroundColor": "#303e4d",
        "WebkitAppRegion": "drag",
        "zIndex": 2
    },
    "menubar-tile": {
        "position": "relative",
        "textAlign": "center",
        "width": 47,
        "height": 100,
        "lineHeight": 31,
        "color": "#8bbf9f",
        "WebkitAppRegion": "no-drag"
    },
    "menubar-tile:hover": {
        "backgroundColor": "#4d5257"
    },
    "menubar-tilespan": {
        "fontFamily": "\"Arial Rounded MT Bold\"",
        "align": "center",
        "textVerticalAlign": "middle"
    },
    "menu-bars": {
        "float": "left"
    },
    "window-tile": {
        "float": "right"
    },
    "body": {
        "margin": 0,
        "boxShadow": "0 0.5px 0 rgba(0, 0, 0, 0.15), 0 -0.5px 0 rgba(0, 0, 0, 0.15), 0.5px 0 0 rgba(0, 0, 0, 0.15), -0.5px 0 0 rgba(0, 0, 0, 0.15), 0 1px 1px rgba(0, 0, 0, 0.15)",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": 100,
        "height": 100,
        "WebkitBoxSizing": "border-box",
        "fontFamily": "\"Verdana\", sans-serif",
        "backgroundColor": "#8bbf9f",
        "overflow": "hidden",
        "WebkitAppRegion": "drag",
        "WebkitUserSelect": "none",
        "::-webkit-scrollbar": {
            "width": 6,
            "backgroundColor": "transparent",
            "WebkitAppRegion": "no-drag"
        },
        "::-webkit-scrollbar-thumb": {
            "borderRadius": 10,
            "backgroundImage": "-webkit-gradient(linear, left bottom, left top, color-stop(0.44, #8bbf9f), color-stop(0.72, #8bbf9f))",
            "WebkitAppRegion": "no-drag"
        }
    }
});