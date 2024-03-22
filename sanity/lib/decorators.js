// Highlight
const Highlight = props => (
    <span style={{ backgroundColor: '#e53e3e' }}>{props.children}</span>
  );
  
  const HighlightIcon = () => (
    <span style={{ fontWeight: 'bold' }}>H</span>
  );
  
  // Color
  const Color = props => (
    <span style={{ color: '#e53e3e' }}>{props.children}</span>
  );
  
  export { Color, HighlightIcon, Highlight };
  