import portfolioImg from "../assets/images/portfolio image.png";
import calculator from "../assets/images/calculator.png";

import clock from "../assets/images/clock.png";

import stopwatch from "../assets/images/stop-watch.png";
import todolist from "../assets/images/todo-list.png";
import rockpaper from "../assets/images/rocl-paper.png";
import weather from "../assets/images/weather app.png";





const ProjectsData = [
  {
    title: "Portfolio Website",
    description: "My personal website built with React showcasing my skills and projects.",
    image: portfolioImg,
    link: ""
  },
  {
    title: "Weather App",
    description: "Fetches real-time weather data using OpenWeatherMap API.",
    image: weather,
    link: "https://github.com/avishek-subedi05/js_projects/tree/main/jsp1/weather%20app"
  },
  {
    title: "Task Manager",
    description: "To-do list with CRUD operations and localStorage. It is a good app showcasing my JavaScript skills.",
    image: todolist,
    link: "https://github.com/avishek-subedi05/js_projects/tree/main/jsp1/todolist"
  }
  ,
   {
    title: "Digital Clock",
    description: "Digital clock is short app developed using js. It is a good app showcasing my JavaScript skills.",
    image: clock,
    link: "https://github.com/avishek-subedi05/js_projects/tree/main/jsp1/clock%20program"
  },
   {
    title: "Rock Paper Scissor",
    description: " As a basic in js, I buils a rock paper scissor game.Where a playe play a game with computer and a score is shown in screen.",
    image: rockpaper,
    link: "https://github.com/avishek-subedi05/js_projects/tree/main/jsp1/rock%20paper%20scissor%20game"
  },
   {
    title: "Stop-Watch(milli-sec)",
    description: "Just digital stop watch.",
    image: stopwatch,
    link: "https://github.com/avishek-subedi05/js_projects/tree/main/jsp1/stopwatch"
  },
   {
    title: "Calculator",
    description: "What Do you think about this.",
    image: calculator,
    link: "https://github.com/avishek-subedi05/js_projects/tree/main/jsp1/Calculator"
  }
];

export default ProjectsData;
