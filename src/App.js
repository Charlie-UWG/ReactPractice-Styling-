import { CssModules } from "./components/CssModules";
import { InlineStlyle } from "./components/InlineStyle";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStlyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}
