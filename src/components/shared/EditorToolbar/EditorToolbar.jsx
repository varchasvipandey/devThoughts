import Container, { Button } from "./EditorToolbar.styles";

const EditorToolbar = ({ elem }) => {
  const getCursorPosition = (elem) => {
    const posStart = elem?.selectionStart;
    const posEnd = elem?.selectionEnd;

    return { posStart, posEnd };
  };

  const getTag = (syntax) => {
    if (syntax === "h") return "<h2> </h2>";
    if (syntax === "p") return "<p> </p>";
    if (syntax === "img") return '<img src=" " alt=" "/>';
    if (syntax === "i") return "<i> </i>";
    if (syntax === "b") return "<strong> </strong>";
    if (syntax === "code") return "<code><pre> </pre></code>";
    if (syntax === "br") return "<br/>";
    if (syntax === "hr") return "<br/><hr/><br/>";
  };

  /* Add syntax handler */
  const addSyntax = (syntax) => {
    const position = getCursorPosition(elem?.current);

    console.log(position);

    const tag = getTag(syntax);

    if (position.posStart === position.posEnd) {
      elem.current.value =
        elem.current.value.slice(0, position.posStart) +
        tag +
        elem.current.value.slice(position.posEnd);
    } else if (position.posStart !== position.posEnd) {
      /* If image tag is requested */
      if (tag.includes("img")) {
        elem.current.value =
          elem.current.value.slice(0, position.posStart) +
          `<img src="${elem.current.value.slice(
            position.posStart,
            position.posEnd
          )}" alt=""/>`;

        return;
      }

      /* If not self tag */
      const [openingTag, closingTag] = tag.split(" ");

      if (openingTag && closingTag)
        elem.current.value =
          elem.current.value.slice(0, position.posStart) +
          openingTag +
          elem.current.value.slice(position.posStart, position.posEnd) +
          closingTag +
          elem.current.value.slice(position.posEnd, elem.current.value.length);
      else elem.current.value = elem.current.value + tag;
    }
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
        <Button style={{ fontWeight: "900" }} onClick={() => addSyntax("code")}>
          {"</>"}
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
