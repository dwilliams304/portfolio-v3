import "./about.css";

export default function AboutCard(){
    return(
        <div className="ab-card">
            <div className="ab-card-content">
                <div>
                    <h2>My name is <span className="txt-highlight-p-cul">Davis</span></h2>
                    <h3>A Full-Stack Engineer based out of South Carolina</h3>
                    <p>Welcome to my portfolio! Here you can view some information about me, 
                        as well as information about some of the projects I've worked on.</p>

                </div>
                <div>
                    <img 
                        src="https://daviswilliams-portfolio.vercel.app/assets/coin-Q8Ml-U-z.jpg" 
                        alt="headshot" 
                        className="img-coin"
                    />
                </div>
            </div>
        </div>
    )
}