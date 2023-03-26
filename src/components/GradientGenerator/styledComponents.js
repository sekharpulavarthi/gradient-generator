import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
`

export const ChooseDirectionTxt = styled.h3`
  color: #ededed;
  font-family: 'Roboto';
`

export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: #334155;
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => props.bgColor};
`

export const PickTheColorsTxt = styled.h3`
  color: #ededed;
`

export const FromColorContainer = styled.h3`
  color: #ededed;
`

export const ToColorContainer = styled.h3`
  color: #ededed;
`

export const FromColor = styled.p`
  color: ${props => props.color};
`

export const ToColor = styled.p`
  color: ${props => props.color};
`

export const FromColorInputEl = styled.p`
  color: ${props => props.color};
`

export const ToColorInputEl = styled.p`
  color: ${props => props.color};
`

export const CustomButtonsContainer = styled.div`
  display: flex;
`
