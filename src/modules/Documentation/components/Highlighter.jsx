function Highlighter({ code }) {
  return (
    <div className="mockup-code">
      <pre data-prefix="$">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default Highlighter;
