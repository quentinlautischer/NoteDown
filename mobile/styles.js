module.exports = require('react-native').StyleSheet.create({
    "menu-button": {
        "width": 85.71429,
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
        "backgroundColor": "rgba(255, 255, 255, 0.3)"
    },
    "markdown-input-editor": {
        "position": "absolute",
        "boxSizing": "border-box",
        "top": 5,
        "left": 5,
        "width": 45,
        "height": 90,
        "padding": 20,
        "borderRadius": 4,
        "boxShadow": "0 0 30px rgba(0, 0, 0, 0.1)",
        "resize": "none",
        "outline": "none",
        "fontSize": 1.3,
        "color": "#898989",
        "fontFamily": "'Source Code Pro'",
        "fontWeight": "300",
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "#ccc"
    },
    "markdown-output-renderer": {
        "position": "absolute",
        "top": 5,
        "left": 50,
        "width": 45,
        "height": 90,
        "padding": 20,
        "borderRadius": 4,
        "boxShadow": "0 0 30px rgba(0, 0, 0, 0.1)",
        "resize": "none",
        "outline": "none",
        "fontSize": 1.3,
        "color": "#cdcdcd",
        "backgroundColor": "#898989",
        "fontFamily": "'Source Code Pro'",
        "fontWeight": "300",
        "overflowX": "scroll",
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "#ccc"
    },
    "notedown-title-logo": {
        "fontFamily": "Chalkduster",
        "width": 85.71429,
        "float": "center",
        "textAlign": "center",
        "padding": 0,
        "fontSize": 0.75,
        "fontWeight": "400",
        "borderRadius": 0
    },
    "body": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": 100,
        "height": 100,
        "fontFamily": "\"Roboto\", sans-serif",
        "backgroundColor": "#0aaf82",
        "overflow": "hidden"
    }
});