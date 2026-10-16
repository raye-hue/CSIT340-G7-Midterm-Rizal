import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import StatCard from "./components/StatCard"; 
import Repositories from "./components/Repositories";
import Footer from "./components/Footer";
import Bio from "./components/Bio";
import Hire from "./components/Hire";

function App() {
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);
  const [Hours, setHours] = useState(0);
  const [totalRate, setTotalRate] = useState(0);

  function handleFollow() {
    setFollowers(followers + 1);
  }

  function handleAddRate() {
    setRate(rate + 100);
  }

  function handleReset() {
    setFollowers(0);
    setRate(500);
  }

  function handleStarPortfolio() {
    setPortfolioStars(portfolioStars + 1);
  }

  function handleStarTodo() {
    setTodoStars(todoStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars(dotfilesStars + 1);
  }

  function handleAddHours() {
    setHours(Hours + 1);
  }

  function handleResetHours() {
    setHours(0);
  }
  function hourlyRate() {
    return rate * Hours;
  } 
  function handleHourlyRate() {
    const totalRate = hourlyRate();
    alert(`Total rate for ${Hours} hours is $${totalRate}`);
  }



  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />
      <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
        <div>
          <Bio />
          <Hire 
            handleAddHours={handleAddHours}
            handleResetHours={handleResetHours}
            handleHourlyRate={handleHourlyRate}
            Hours={Hours}
            />
          <StatCard followers={followers} rate={rate} />
        </div>
        <Profile
        handleFollow={handleFollow}
        handleAddRate={handleAddRate}
        handleReset={handleReset}
        />
        
      </div>
      <Repositories
        portfolioStars={portfolioStars}
        todoStars={todoStars}  
        dotfilesStars={dotfilesStars}
        handleStarPortfolio={handleStarPortfolio}
        handleStarTodo={handleStarTodo}
        handleStarDotfiles={handleStarDotfiles}
      />
      <Footer />
    </div>
  );
}

export default App;
