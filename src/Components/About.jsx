import Navbar from "./Layout/Navbar";


const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-24">
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://i.ibb.co.com/PDM5Qkq/346445735-2222312914634432-6794853400138435137-n.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <div className="space-y-2">
      <h1 className="text-5xl font-bold">I am Alauddin</h1>
      <h1 className="text-2xl font-bold">A junior web developer</h1>
      <h1 className="text-[16px] font-bold">BSMRSTU, Department of English.</h1>
      </div>
      <p className="py-6 text-justify pr-6">
      A passionate and motivated Junior Web Developer with hands-on experience in building responsive and user-friendly websites. Skilled in HTML, CSS, JavaScript, and popular frameworks like React and Bootstrap. Proficient in front-end development with a strong focus on creating dynamic, efficient, and visually appealing web pages. Able to collaborate with teams, troubleshoot issues, and continuously improve web applications. Eager to learn and adapt to new technologies to contribute to the success of the development team.
      </p>
      <button className="btn btn-primary">Hire Me</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default About;