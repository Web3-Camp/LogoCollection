import styled from "styled-components";
import {Container} from 'react-bootstrap';
import GithubImg from "../assets/github.png";
import TwitterImg from "../assets/Twitter.png";

const Footer = styled.div`
  height: 80px;
  margin-top: 60px;
  width: 100%;
  padding-top: 15px;
  background: #fff;
  font-size: 14px;
  .midBox{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img{
    width: 40px;
    height: 40px;
  }
  .lft{
    padding-left: 10px;
  }
  a{
    display: inline-block;
    margin-left: 20px;
  }
`
export default function footerBox(){
    return  <Footer>
        <Container>
            <div className="midBox">
                <a href="https://web3camp.us" target="_blank" rel="noreferrer">
                    <div className="lft">&copy; 2022 Web3camp.us</div>
                </a>

                <div>
                    <a href="https://github.com/Web3Camp-Labs/LogoCollection" target="_blank" rel="noreferrer">
                        <img src={GithubImg} alt=""/>
                    </a>
                    <a href="https://twitter.com/Web3Camp" target="_blank" rel="noreferrer">
                        <img src={TwitterImg} alt=""/>
                    </a>
                </div>
            </div>
        </Container>
    </Footer>
}
