import {Button} from "./stories/Button";

function App() {
  return (
    <div>
        <Button
            backgroundColor="rgba(0, 94, 255, 1)"
            label="Button"
            onClick={() => {
                console.log('click!')}}
            primary
            size="large"
        />
    </div>
  );
}

export default App;
