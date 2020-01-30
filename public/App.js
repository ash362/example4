const div1 = document.getElementById('contents');
const profile = React.createElement("article", null, React.createElement("fieldset", null, React.createElement("section", null, React.createElement("h2", null, "Ashwini Balikile")), React.createElement("section", null, React.createElement("img", {
  src: "image/IMG-1355 (1).JPG",
  width: "200",
  height: "180"
})), React.createElement("section", null, React.createElement("h2", null, "Profession"), React.createElement("p", null, " Computer Science student at SDSU College of Extended studies. Prior to this I did my Bachelor's in Computer Science from Visvesvaraya Technological University, India.  ")), React.createElement("section", null, React.createElement("p", null, React.createElement("a", {
  class: "btn-primary btn-lg",
  href: "https://github.com/ash362/example1"
}, "VIEW MY GITHUB REPO")))));
ReactDOM.render(profile, div1);