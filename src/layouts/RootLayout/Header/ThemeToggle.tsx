import styled from "@emotion/styled"
import React from "react"
import useScheme from "src/hooks/useScheme"
import { DarkModeSwitch } from 'react-toggle-dark-mode';


type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme()

  const handleClick = () => {
    setScheme(scheme === "light" ? "dark" : "light")
  }

  const toggleDarkMode = (checked: boolean) => {
    setScheme(checked === true ? "dark" : "light")
  };


  return (
    <StyledWrapper onClick={handleClick}>
      <DarkModeSwitch
        style={{ marginBottom: '0rem'}}
        checked={scheme === "light" ? false : true}
        onChange={toggleDarkMode}
        size={22}
        moonColor={"#FFB81C"}
        sunColor={"#f6b113"}
      />
    </StyledWrapper>
  )
}

export default ThemeToggle

const StyledWrapper = styled.div`
  cursor: pointer;
`
