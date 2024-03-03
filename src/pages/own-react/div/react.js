// const element = {
//   type: "h1",
//   props: {
//     title: "foo",
//     children: "Hello",
//   },
// }

// const container = document.getElementById("root")

// const node = document.createElement(element.type)
// node["title"] = element.props.title
// ​
// const text = document.createTextNode("")
// text["nodeValue"] = element.props.children
// ​
// node.appendChild(text)
// container.appendChild(node)

(() => {
    function div(children) {
      const aDiv = document.createElement('div');
      aDiv.innerHTML = children.join(' ');
      return aDiv;
    }
  
    function createElement(el, props, ...children) {
      return div(children);
    }
  
    window.React = {
      createElement
    };
  
    window.ReactDOM = {
      render: (el, domEl) => {
        domEl.appendChild(el);
      }
    };
  })();