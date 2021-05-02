import { useState } from "react";
import Wrapper from "./SideNav.styles";
import { useHistory } from "react-router-dom";

/* compoennts */
import { Field, Option } from "components/shared";

const SideNav = ({ defaultSelected, options }) => {
  /* Local states */
  const [searchTerm, setSearchTerm] = useState("");

  /* Hooks init */
  const history = useHistory();

  /* Handlers */
  const handleInput = (e) => setSearchTerm(e.target.value);

  return (
    <Wrapper>
      <div className="language-search">
        <Field placeholder="Programming language" onChange={handleInput} />
      </div>

      <div className="language-select">
        {options?.map(
          (language) =>
            (!searchTerm ||
              (searchTerm &&
                language.name
                  .toLowerCase()
                  ?.includes(searchTerm.toLowerCase()))) && (
              <Option
                key={language.name}
                className="disabled-select"
                selected={language.name === defaultSelected}
                onClick={() => history.push(`/${language.name}`)}
              >
                {language.displayName}
              </Option>
            )
        )}
      </div>
    </Wrapper>
  );
};

export default SideNav;
