window.CUGITest = {
    float:0,
    float2:0,
    int:0,
    vec2:{x:0, y:0},
    vec3:{x:0, y:0, z:0},
    vec4:{x:0, y:0, z:0, w:0},
    string:"Hello World!",
    multiline:"Hello\nWorld!",
    boolean:false,
    dropdown:"1",
    slider: 1,
    EnableBelow: true,
}

document.body.appendChild(CUGI.createList([
    {type: "label", text: "CUGI debug"},
    {target: CUGITest, key: "float", type: "float"},
    {target: CUGITest, key: "int", type: "int"},
    {target: CUGITest, key: "vec2", type: "vec2"},
    {target: CUGITest, key: "vec3", type: "vec3"},
    {target: CUGITest, key: "vec4", type: "vec4"},
    {target: CUGITest, key: "string", type: "string"},
    {target: CUGITest, key: "multiline", type: "multiline"},
    {target: CUGITest, key: "boolean", type: "boolean"},
    {target: CUGITest, key: "dropdown", type: "dropdown", items: ["hello", "hi"]},
    {type: "header", text: "HEADER!"},
    {target: CUGITest, key: "slider", type: "slider", min: 0, max: 5},
    "---",
    {type: "label", text: "Disabling"},
    {target: CUGITest, key: "EnableBelow", type: "boolean", onchange: (value, { refreshSelection }) => {
        alert("hi");
        try {
            refreshSelection();
        } catch (error) {
            alert(error);
        }
    }},
    {target: CUGITest, key: "float2", type: "float", disabled: () => {return !CUGITest.EnableBelow}},
    {target: CUGITest, key: "vec2", type: "vec2", disabled: () => {return !CUGITest.EnableBelow}},

    {type: "subMenu", items: [
        {target: CUGITest, key: "int", type: "int"},
        {target: CUGITest, key: "vec2", type: "vec2"},
        {target: CUGITest, key: "vec3", type: "vec3"},
        {target: CUGITest, key: "vec4", type: "vec4"},
        {type: "button", text:"Hello World!", onclick: () => {
            alert("Hello!");
        }}
    ]},

    { target: CUGITest, key: "date", type: "date" },
    { target: CUGITest, key: "datetime", type: "date", includeTime: true },
    { target: CUGITest, key: "time", type: "time" },
]));

const CONTEXT_DEMO = document.createElement("div");

CONTEXT_DEMO.CUGI_CONTEXT = () => {
    return [
        "Hello context menu"
    ];
}

CONTEXT_DEMO.innerText = "Context menu";
document.body.appendChild(CONTEXT_DEMO);