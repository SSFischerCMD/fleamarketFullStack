import { useState } from "react";

function App() {

  const [getCount, setCount] = useState(0)

  function IncreaseCount(){
    setCount(getCount + 1);
  }

  return (
    <>
  
    <body>

        <header>
            <div class="logo">FleatMarket</div>
            <div class="menu-icons">
                <i class="fas fa-bars">
                  <cartIcon/>
                </i>
                <i class="fas fa-user">new test</i>
                <i class="icon">this is a test</i>
                <cartIcon class="icon"/>
            </div>
        </header>

        <main>
            <h1><span class="highlighted-text">Discover Hidden Treasures</span></h1>
            <p class="subtitle">
                Your online flea market where every item has a story. Find unique vintage pieces, antiques, and collectibles from sellers around the world.
            </p>

            <div class="search-bar-container">
                <input type="text" placeholder="What treasure are you looking for?"></input>
                <div>
                  <button>Search Treasures</button>
                </div>
                
            </div>

            <div class="stats">
                <div class="stat-item">1000+ Active Sellers</div>
                <div class="stat-item">50k+ Items Listed</div>
                <div class="stat-item">4.8/5 Average Rating</div>
            </div>
        </main>

    </body>
  

    <h1>hallo</h1>
    <div>{getCount}</div>
    <button onClick={IncreaseCount}>hinzufügen</button>
    </>
  );
}

export default App;
