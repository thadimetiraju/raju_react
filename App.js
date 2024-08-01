// const heading = React.createElement("h1", {}, "HI this react H1 tag");
// const myroot = ReactDOM.createRoot(document.getElementById("root"));
// myroot.render(heading);


const parent = React.createElement(
    "div",
    {id:"parent"},[
        React.createElement(
            "div", 
            {id:"child1"},[
            React.createElement("h1", {}, "Hi Im child H1 Tag"),
            React.createElement("h2", {}, "Hi Im child H2 Tag")
        ]),
        React.createElement(
            "div", 
            {id:"child2"},[
            React.createElement("h1", {}, "Hi Im child H1 Tag"),
            React.createElement("h2", {}, "Hi Im child H2 Tag")
        ])
    ]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);