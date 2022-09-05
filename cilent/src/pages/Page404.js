import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './css/Page404.css';

export const Page404 = () => {

    return (
        <>
            <div className="wrapper" id="wrapper">
                <Container>
                    <div className="scene" id="scene" >
                        <div className="circle" />
                            <div className="animation-circle">
                                <div className="content">
                                    <span className="piece"></span>
                                    <span className="piece"></span>
                                    <span className="piece"></span>
                                </div>
                            </div>

                            <div className="animation-line">
                                <div className="content">
                                    <span className="piece" />
                                    <span className="piece" />
                                    <span className="piece" />
                                </div>
                            </div>

                            <p className="p404">404</p>
                            <p className="p404">404</p>

                        </div>

                        <div className="text">
                            <article>
                                <h1>Ooops...</h1>
                                <p>Page not found, back to homepage!</p>
                                <Link to="/">
                                    <button>HOME</button>
                                </Link>
                            </article>
                        </div>
                </Container>
            </div>
        </>
    )
}