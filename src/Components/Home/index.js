import tv from "../../assets/images/tv.png"
import menu from "../../assets/images/tv-video.m4v"
import devices from "../../assets/images/device-pile.png"
import kids from "../../assets/images/kids_profile.png"
import download from "../../assets/images/mobile-0819.jpg"
import "./index.scss"


const Home = () => {
    return <div id="homepage">
        <div id="first-block">
            <div id="nav-bar">
                <h1>Netflix</h1>
                <button className="sign-in">Sign In</button>
            </div>
            <div class="text">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <p>Watch anywhere. Cancel anytime.</p>
            </div>
            <form>
                    <label for="email">Ready to watch? Enter your email to create or restart your membership.</label><br></br>
                    <input type="email" id="email" name="email"></input>
                    <input type="submit" value="Get Started >"></input>
            </form>
        </div>
        <div id="block">
            <div class="text">
                <h1>Enjoy on your TV.</h1>
                <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple</p>
                <p>TV, Blu-ray players, and more.</p>
            </div>
            <img src={tv} alt='tv'></img>

        </div>
        <div id="block">
            <div class="text">
                <h1>Watch everywhere</h1>
                <p>Stream unlimited movies and TV shows on your phone,</p>
                <p> tablet, laptop, and TV without paying more.</p>
            </div>
            <img src={devices} alt='devices'></img>
        </div>
        <div id="block">
            <div class="text">
                <h1>Create profiles for kids.</h1>
                <p>Send kids on adventures with their favorite characters in a</p>
                <p> space made just for them-free with your membership</p>
            </div>
            <img src={kids} alt='kids'></img>
        </div>
        <div id="block">
            <div class="text">
                <h1>Download your shows to</h1>
                <h1>watch offline.</h1>
                <p>Only available on ad-free plans.</p>
            </div>
            <img src={download} alt='download'></img>
        </div>
        <div id="faq">
            <span>What is Netflix?</span>
            <div className="dropdown-content">
                <p>
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.  
                You can watch as much as you want, whenever you want - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                </p>
            </div>
            <span>How much does Netflix cost?</span>
            <div className="dropdown-content">
                <p>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts.
                </p>
            </div>
            <span>What's different on an ad-supported plan?</span>
            <div className="dropdown-content">
                <p>
                An ad-supported plan is a great way to enjoy movies and TV shows at a lower price. 
                You can stream your favorites with limited ad breaks (some location and device restrictions apply). 
                Downloads are not supported and a limited number of movies and TV shows are not available due to licensing restrictions.
                </p>
            </div>
            <span>Where can I watch?</span>
            <div className="dropdown-content">
                <p>
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                </p>
                <p>
                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                </p>
            </div>
            <span>How do I cancel?</span>
            <div className="dropdown-content">
                <p>
                Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                </p>
            </div>
            <span>What can I watch on Netflix?</span>
            <div className="dropdown-content">
                <p>
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                </p>
            </div>
            <span>Is Netflix good for kids?</span>
            <div className="dropdown-content">
                <p>
                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                </p>
                <p>
                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                </p>
            </div>
            <div id="email-signup">
                 <form>
                    <label for="email">Ready to watch? Enter your email to create or restart your membership.</label><br></br>
                    <input type="email" id="email" name="email"></input>
                    <input type="submit" value="Get Started >"></input>
                 </form>
            </div>

        </div>
    </div>
}

export default Home;