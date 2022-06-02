function App() {
  return (
    <div className="App">
      <h1 className="text-primary">Cards</h1>
      <h2 className="text-3-light-primary">Card2</h2>
      <button className="btn-primary">Button</button>
      <div className="card">
        <h1 className="card-title">This is a card</h1>
        <p className="card-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          recusandae, <a href="#"> ipsam provident est suscipit</a> a autem iure
          nobis asperiores iusto.
        </p>
      </div>

      <h2 class="mb-2">Grid System</h2>
      <div class="row gap-2 justify-center">
        <div class="col-12-xs col-5-sm col-3-xl ">
          <div class="card">
            <h3 class="card-title">Hello, ninjas</h3>
            <p class="card-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="col-12-xs col-5-sm col-3-xl">
          <div class="card">
            <h3 class="card-title">Hello, ninjas</h3>
            <p class="card-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="col-12-xs col-5-sm col-3-xl">
          <div class="card">
            <h3 class="card-title">Hello, ninjas</h3>
            <p class="card-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="col-12-xs col-5-sm col-3-xl">
          <div class="card">
            <h3 class="card-title">Hello, ninjas</h3>
            <p class="card-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
