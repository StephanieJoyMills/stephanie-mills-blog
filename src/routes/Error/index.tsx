import styled from "@emotion/styled"
import React from "react"
import { Emoji } from "src/components/Emoji"
import { useRouter } from "next/router"
import Image from "next/image"

type Props = {}

const CustomError: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <StyledWrapper>
      <div className="wrapper">
          <Image
            src="/cat.png"
            alt={"Steph's Cat"}
            width={726/2.5}
            height={951/2.5}
          />
        <div className="top">
          <div>4</div>
          <Emoji>🤔</Emoji>
          <div>4</div>
        </div>
        <div className="text">Whoops! The page you were looking for does not exist</div>
        <div className="text-small">(Unless you were looking for a picture of my cat. If that's the case, it definitely exists and you definitely found it)</div>
        <div className="home"> <a onClick={() => router.push("/")}>Take me back to home →</a></div>
      </div>
    </StyledWrapper>
  )
}

export default CustomError

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 3rem;
  border-radius: 1.5rem;
  max-width: 56rem;
  .wrapper {
    display: flex;
    padding-top: 0rem;
    padding-bottom: 5rem;
    flex-direction: column;
    align-items: center;
    > .top {
      margin-top: 2.5rem;
      display: flex;
      align-items: center;
      font-size: 4.5rem;
      line-height: 1;
    }
    > .text {
      margin-top: 2rem;
      font-size: 1.875rem;
      line-height: 2.25rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
    > .text-small {
      margin-top: .5rem;
      text-align: center;
      font-size: 1.2rem;
      line-height: 1.8rem;
      font-style: italic;
      color: ${({ theme }) => theme.colors.gray10};
    }
    > .home {
      display:inline-block;
      color:white;
      // border:1px solid #CCC;
      background:#1E90FF;
      box-shadow: 0 0 5px -1px rgba(0,0,0,0.2);
      vertical-align:middle;
      padding: 10px 18px;
      text-align: center;
      margin-top: 1.5rem;
      font-size: 1.2rem;
      border-radius: 12px;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }
    > .home:hover {
      background:#0a85fc;
      box-shadow: 0 0 5px -1px rgba(0,0,0,0.4);
      -webkit-transition: background-color 200ms linear;
      -ms-transition: background-color 200ms linear;
      transition: background-color 200ms linear;
    }

  }

`
