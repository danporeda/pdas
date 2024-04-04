import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard 
                image={AlexaImage} 
                title="alexa" 
                handle="@alexa69" 
                description="Alexa was created by Amazon and helps you buy things"
              />
            </div>
            <div className="column is-4">
              <ProfileCard 
                image={CortanaImage} 
                title="Cotana" 
                handle="@cuntyC" 
                description="Cortana is a basic bitch by Microsoft"
              />
            </div>
            <div className="column is-4">
              <ProfileCard 
                image={SiriImage} 
                title="Siri" 
                handle="@SuckySiri" 
                description="Siri can suck it"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;