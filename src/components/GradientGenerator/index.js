import {Component} from 'react'
import {
  GradientGeneratorContainer,
  Heading,
  ChooseDirectionTxt,
  CustomButton,
  PickTheColorsTxt,
  FromColorContainer,
  ToColorContainer,
  FromColor,
  ToColor,
  FromColorInputEl,
  ToColorInputEl,
  CustomButtonsContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {activeButton: 'top', fromColor: '', toColor: ''}

  onClickButton = event => {
    this.setState({activeButton: event.target.value})
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  render() {
    const {activeButton, fromColor, toColor} = this.state
    return (
      <GradientGeneratorContainer>
        <Heading>Generate a CSS color Gradient</Heading>
        <ChooseDirectionTxt>Choose Direction</ChooseDirectionTxt>
        <CustomButtonsContainer>
          {gradientDirectionsList.map(item => (
            <CustomButton
              isActive={activeButton === item.value}
              key={item.directionId}
              value={item.value}
              onClick={this.onClickButton}
            >
              {item.displayText}
            </CustomButton>
          ))}
        </CustomButtonsContainer>
        <PickTheColorsTxt>Pick the Colors</PickTheColorsTxt>
        <FromColorContainer>
          <FromColor>{fromColor}</FromColor>
          <FromColorInputEl onChange={this.onChangeFromColor} />
        </FromColorContainer>
        <ToColorContainer>
          <ToColor>{toColor}</ToColor>
          <ToColorInputEl onChange={this.onChangeToColor} />
        </ToColorContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
