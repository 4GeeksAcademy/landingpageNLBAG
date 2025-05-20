import Navbar from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Jumbotron />
        <div className="row mt-4">
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <Card
              image="https://placehold.co/500x325"
              title="Card Title 1"
              text="Some quick example text to build on the card title."
              buttonUrl="#"
              buttonLabel="Find out more!"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <Card
              image="https://placehold.co/500x325"
              title="Card Title 2"
              text="Another piece of content with reusable component."
              buttonUrl="#"
              buttonLabel="Read more"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <Card
              image="https://placehold.co/500x325"
              title="Card Title 3"
              text="Here is another text to show variation."
              buttonUrl="#"
              buttonLabel="Details"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <Card
              image="https://placehold.co/500x325"
              title="Card title"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit..."
              buttonUrl="#"
              buttonLabel="Find out more!"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;