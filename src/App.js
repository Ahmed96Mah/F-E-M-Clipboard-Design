import Button from './components/Button.js';
import TextDiv from './components/TextDiv.js';
import Feature from './components/Feature.js';
import Image from './components/Image.js';
import logo from './images/logo.svg';
import screen from './images/image-computer.png';
import device from './images/image-devices.png';
import blackList from './images/icon-blacklist.svg';
import textIcon from './images/icon-text.svg';
import preview from './images/icon-preview.svg';
import Google from './images/logo-google.png';
import IBM from './images/logo-ibm.png';
import MS from './images/logo-microsoft.png';
import HP from './images/logo-hp.png';
import VG from './images/logo-vector-graphics.png';
import F from './images/icon-facebook.svg';
import T from './images/icon-twitter.svg';
import I from './images/icon-instagram.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Clipboard Logo" />
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="download">
          <Button text="Download for iOS" Class="button-cyan" />
          <Button text="Download for Mac" Class="button-blue" />
        </div>
      </header>
      <main>
        <TextDiv
          title="Keep track of your snippets"
          text="Clipboard instantly stores any item you copy in the cloud, 
        meaning you can access your snippets immediately on all your devices. 
        Our Mac and iOS apps will help you organize everything."
          Class="mainText"
        />
        <div className="middle">
          <Image src={screen} alt="Clipboard for Desktop" />
          <div className="middleDiv">
            <TextDiv
              title="Quick Search"
              text="Easily search your snippets by content, category, web address, application, and more."
              Class="middleText"
            />
            <TextDiv
              title="iCloud Sync"
              text="Instantly saves and syncs snippets across all your devices."
              Class="middleText"
            />
            <TextDiv
              title="Complete History"
              text="Retrieve any snippets from the first moment you started using the app."
              Class="middleText"
            />
          </div>
        </div>
        <TextDiv
          title="Access Clipboard anywhere"
          text="Whether you're on the go, or at your computer, 
        you can access all your Clipboard snippets in a few simple clicks."
          Class="mainText second"
        />
        <Image src={device} alt="Clipboard for Tablet and Mobile" />
        <TextDiv
          title="Supercharge your workflow"
          text="We've got the tools to boost your productivity."
          Class="mainText third"
        />
        <div className="features">
          <Feature
            img={blackList}
            title="Create blacklists"
            text="Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
            Class="feature"
          />
          <Feature
            img={textIcon}
            title="Plain text snippets"
            text="Remove unwanted formatting from copied text for a consistent look."
            Class="feature"
          />
          <Feature
            img={preview}
            title="Sneak preview"
            text="Quick preview of all snippets on your Clipboard for easy access."
            Class="feature"
          />
        </div>
        <div className="companies">
          <Image src={Google} alt="" />
          <Image src={IBM} alt="" />
          <Image src={MS} alt="" />
          <Image src={HP} alt="" />
          <Image src={VG} alt="" />
        </div>
        <TextDiv
          title="Clipboard for iOS and Mac OS"
          text="Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
        and you're ready to start adding to your clipboard."
          Class="mainText last"
        />
        <div className="download">
          <Button text="Download for iOS" Class="button-cyan" />
          <Button text="Download for Mac" Class="button-blue" />
        </div>
      </main>
      <footer>
        <div id="top">
          <img src={logo} alt="Clipboard Logo" />
          <nav>
            <ul>
              <li>
                <a href="https://www.instagram.com/">FAQs</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Contact Us</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Privacy Policy</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Press Kit</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Install Guide</a>
              </li>
            </ul>
          </nav>
          <div className="social">
            <a
              href="https://web.facebook.com/frontendmentor"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={F} alt="facebook page" />
            </a>
            <a
              href="https://twitter.com/frontendmentor"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={T} alt="twitter page" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={I} alt="instagram page" />
            </a>
          </div>
        </div>
        <div id="bottom">
          <p>
            Challenge by
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by
            <a
              href="https://www.frontendmentor.io/profile/Ahmed96Mah"
              target="_blank"
              rel="noreferrer"
            >
              Ahmed Mahmoud Abdalwahab
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
