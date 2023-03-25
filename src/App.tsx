import { Button } from "./components/atoms"
function App() {
  return (
    <>
      <div className="flex  items-center justify-center min-h-screen py-2 gap-2">
        <h1 className="text-2xl font-bold">Buttons: </h1>

        <Button>Default</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="danger">Danger</Button>
        <Button size="small">Small</Button>
        <Button size="large">Large</Button>
        <Button loading>Default</Button>
        <Button loading color="secondary">
          Secondary
        </Button>
        <Button loading color="danger">
          Danger
        </Button>
        <Button loading size="small">
          Small
        </Button>
        <Button loading size="large">
          Large
        </Button>
        <Button loading loader={<p>Custom loader</p>} disabled>
          Disabled
        </Button>
      </div>
    </>
  )
}

export default App
