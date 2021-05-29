import { Button } from "components/shared";

const ConfirmDelete = ({ cta = () => {}, thoughtTitle = "" }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <p
        style={{
          fontSize: "1.6rem",
          marginBottom: "2rem",
          color: "var(--color-text)",
        }}
      >
        You are about to delete
        <span style={{ color: "var(--color-logo-1)", fontWeight: "700" }}>
          {" "}
          "{thoughtTitle}"
        </span>
        . Once deleted, the thought can't be restored.
      </p>
      <Button variant="secondary" label="Yes, delete thought" cta={cta} />
    </div>
  );
};

export default ConfirmDelete;
