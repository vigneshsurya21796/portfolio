/**
 * SplitWords — splits text into per-word spans for staggered reveal.
 * Parent must have className="reveal" + useReveal ref so .revealed gets added.
 * The .revealed class propagates via CSS: .revealed .split-word
 */
export function SplitWords({ text, delay = 0 }) {
  const words = text.split(" ");
  return (
    <span aria-label={text} className="split-words-wrap">
      {words.map((word, i) => (
        <span
          key={i}
          className="split-word"
          style={{ "--word-delay": `${delay + i * 0.1}s` }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
