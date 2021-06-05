import Container, { Button } from "./EditorToolbar.styles";

const EditorToolbar = ({ elem }) => {
  /* Add syntax handler */
  const addSyntax = (syntax) => {
    if (syntax === "h") elem.current.value = elem.current.value + "<h2></h2>";
    if (syntax === "p") elem.current.value = elem.current.value + "<p></p>";
    if (syntax === "img")
      elem.current.value = elem.current.value + '<img src=" " alt=" "/>';
    if (syntax === "i") elem.current.value = elem.current.value + "<i></i>";
    if (syntax === "b")
      elem.current.value = elem.current.value + "<strong></strong>";

    if (syntax === "br") elem.current.value = elem.current.value + "<br/>";
    if (syntax === "hr")
      elem.current.value = elem.current.value + "<br/><hr/><br/>";
  };

  return (
    <Container className="disabled-select">
      <div className="buttons">
        <Button style={{ fontWeight: "900" }} onClick={() => addSyntax("h")}>
          H
        </Button>
        <Button onClick={() => addSyntax("p")}>P</Button>
        <Button onClick={() => addSyntax("img")}>IMG</Button>
        <Button style={{ fontStyle: "italic" }} onClick={() => addSyntax("i")}>
          I
        </Button>
        <Button style={{ fontWeight: "900" }} onClick={() => addSyntax("b")}>
          B
        </Button>
      </div>

      <div className="buttons">
        <Button onClick={() => addSyntax("br")}>Br</Button>
        <Button onClick={() => addSyntax("hr")}>Hr</Button>
      </div>
    </Container>
  );
};

export default EditorToolbar;
