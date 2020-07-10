import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Bubble from './Bubble';
import Image from './Image';
import ImageContainer from './ImageContainer';
import Loading from '../common/Loading';
import TextStepContainer from './TextStepContainer';

export const AvatarSvg = styled.svg`
  #eyes {
    animation: animateEyes 5s infinite alternate-reverse;
    transform-origin: center;
    overflow: hidden;
    @keyframes animateEyes {
      from {
        fill: green;
      }
      to {
        fill: blue;
      }
    }
  }
  #mouth {
    animation: animateMouth 0.5s infinite alternate-reverse;
    transform-origin: center;
    @keyframes animateMouth {
      from {
        transform: scaleX(1);
      }
      to {
        transform: scaleX(2);
      }
    }
  }
`;

// Avatar SVG
export const Avatar = () => (
  <AvatarSvg width="70px" viewBox="0 0 419 353" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M322.602 57.2358L312.195 196.683H366.309L355.903 57.2358H322.602Z" fill="#F4FBFF" />
    <path
      d="M366.309 300.748C395.046 300.748 418.342 277.452 418.342 248.715C418.342 219.978 395.046 196.682 366.309 196.682H355.903V300.747H366.309V300.748Z"
      fill="#A2AAE2"
    />
    <path
      d="M366.309 278.894H355.903V300.748H366.309C395.046 300.748 418.342 277.452 418.342 248.715C418.342 244.966 417.937 241.312 417.183 237.788C412.162 261.277 391.297 278.894 366.309 278.894Z"
      fill="#8993DA"
    />
    <path
      d="M320.748 82.0728C326.524 84.1808 332.755 85.3338 339.252 85.3338C345.748 85.3338 351.98 84.1808 357.756 82.0728L355.903 57.2358H322.602L320.748 82.0728Z"
      fill="#DDEAFB"
    />
    <path
      d="M339.252 62.44C356.494 62.44 370.472 48.4623 370.472 31.22C370.472 13.9777 356.494 0 339.252 0C322.01 0 308.032 13.9777 308.032 31.22C308.032 48.4623 322.01 62.44 339.252 62.44Z"
      fill="#95D6A4"
    />
    <path
      d="M355.295 4.43604C358.11 9.12504 359.731 14.612 359.731 20.479C359.731 37.721 345.753 51.699 328.511 51.699C322.644 51.699 317.157 50.078 312.468 47.263C317.925 56.354 327.876 62.44 339.252 62.44C356.494 62.44 370.472 48.463 370.472 31.22C370.472 19.844 364.386 9.89303 355.295 4.43604Z"
      fill="#78C2A4"
    />
    <path
      d="M317.001 132.291L312.196 196.683H366.31L364.155 167.802C351.514 152.557 335.383 140.312 317.001 132.291Z"
      fill="#DDEAFB"
    />
    <path d="M95.74 57.2358L106.147 196.683H52.033L62.439 57.2358H95.74Z" fill="#F4FBFF" />
    <path
      d="M52.033 300.748C23.296 300.748 0 277.452 0 248.715C0 219.978 23.296 196.682 52.033 196.682H62.44V300.747H52.033V300.748Z"
      fill="#A2AAE2"
    />
    <path
      d="M52.033 278.894H62.44V300.748H52.033C23.296 300.748 0 277.452 0 248.715C0 244.966 0.405 241.312 1.159 237.788C6.18 261.277 27.045 278.894 52.033 278.894Z"
      fill="#8993DA"
    />
    <path
      d="M97.5939 82.0728C91.8179 84.1808 85.5869 85.3338 79.0899 85.3338C72.5929 85.3338 66.3619 84.1808 60.5859 82.0728L62.4389 57.2358H95.7399L97.5939 82.0728Z"
      fill="#DDEAFB"
    />
    <path
      d="M79.0901 62.44C96.3325 62.44 110.31 48.4623 110.31 31.22C110.31 13.9777 96.3325 0 79.0901 0C61.8478 0 47.8701 13.9777 47.8701 31.22C47.8701 48.4623 61.8478 62.44 79.0901 62.44Z"
      fill="#95D6A4"
    />
    <path
      d="M52.3059 47.2621C56.9949 50.0771 62.4819 51.6981 68.3489 51.6981C85.5909 51.6981 99.5689 37.7201 99.5689 20.4781C99.5689 14.6111 97.9479 9.12406 95.1329 4.43506C104.224 9.89206 110.31 19.8431 110.31 31.2191C110.31 48.4611 96.3329 62.4391 79.0899 62.4391C67.7149 62.4391 57.7629 56.3531 52.3059 47.2621V47.2621Z"
      fill="#78C2A4"
    />
    <path
      d="M101.341 132.291L106.146 196.683H52.033L54.188 167.802C66.828 152.557 82.959 140.312 101.341 132.291Z"
      fill="#DDEAFB"
    />
    <path
      d="M266.407 352.78H151.935C94.4621 352.78 47.8701 306.189 47.8701 248.715C47.8701 191.242 94.4611 144.65 151.935 144.65H266.407C323.88 144.65 370.472 191.241 370.472 248.715C370.472 306.189 323.88 352.78 266.407 352.78Z"
      fill="#95D6A4"
    />
    <path
      d="M328.46 165.171C335.425 183.001 339.252 202.403 339.252 222.699C339.252 276.544 312.341 324.097 271.242 352.665C326.47 350.139 370.472 304.568 370.472 248.716C370.472 214.497 353.955 184.138 328.46 165.171V165.171Z"
      fill="#78C2A4"
    />
    <path
      d="M151.935 319.48C112.916 319.48 81.1709 287.735 81.1709 248.716C81.1709 209.697 112.916 177.952 151.935 177.952H266.407C305.426 177.952 337.171 209.697 337.171 248.716C337.171 287.735 305.426 319.48 266.407 319.48H151.935Z"
      fill="#A2AAE2"
      id="face"
    />
    <path
      d="M220.17 305H198.171C192.095 305 187.171 300.075 187.171 294C187.171 287.925 192.096 283 198.171 283H220.171C226.246 283 231.171 287.925 231.171 294C231.171 300.075 226.246 305 220.17 305V305Z"
      fill="#E9646C"
      id="mouth"
    />
    <path
      d="M262.164 248.666C273.946 248.666 283.497 239.115 283.497 227.333C283.497 215.551 273.946 206 262.164 206C250.382 206 240.831 215.551 240.831 227.333C240.831 239.115 250.382 248.666 262.164 248.666Z"
      fill="#0F3860"
      id="eyes"
    />
    <path
      d="M155.504 248.666C167.286 248.666 176.837 239.115 176.837 227.333C176.837 215.551 167.286 206 155.504 206C143.722 206 134.171 215.551 134.171 227.333C134.171 239.115 143.722 248.666 155.504 248.666Z"
      fill="#0F3860"
      id="eyes"
    />
  </AvatarSvg>
);
class TextStep extends Component {
  /* istanbul ignore next */
  state = {
    loading: true,
    animLowerMouth: false,
    animLeaf: false
  };

  componentDidMount() {
    const { step, speak, previousValue, triggerNextStep } = this.props;
    const { component, delay, waitAction } = step;
    const isComponentWatingUser = component && waitAction;

    setTimeout(() => {
      this.setState({ loading: false }, () => {
        if (!isComponentWatingUser && !step.rendered) {
          triggerNextStep();
        }
        speak(step, previousValue);
      });
    }, delay);
  }

  getMessage = () => {
    const { previousValue, step } = this.props;
    const { message } = step;

    return message ? message.replace(/{previousValue}/g, previousValue) : '';
  };

  renderMessage = () => {
    const { step, steps, previousStep, triggerNextStep } = this.props;
    const { component } = step;

    if (component) {
      return React.cloneElement(component, {
        step,
        steps,
        previousStep,
        triggerNextStep
      });
    }

    return this.getMessage();
  };

  render() {
    const {
      step,
      isFirst,
      isLast,
      avatarStyle,
      bubbleStyle,
      hideBotAvatar,
      hideUserAvatar
    } = this.props;
    const { loading } = this.state;
    const { avatar, user, botName } = step;

    const showAvatar = user ? !hideUserAvatar : !hideBotAvatar;

    const imageAltText = user ? 'Your avatar' : `${botName}'s avatar`;

    return (
      <TextStepContainer className={`rsc-ts ${user ? 'rsc-ts-user' : 'rsc-ts-bot'}`} user={user}>
        <ImageContainer className="rsc-ts-image-container" user={user}>
          {isFirst && showAvatar && (
            // <Image
            //   className="rsc-ts-image"
            //   style={avatarStyle}
            //   showAvatar={showAvatar}
            //   user={user}
            //   src={avatar}
            //   alt={imageAltText}
            // />
            <Image
              animLowerMouth={this.state.animLowerMouth}
              animLeaf={this.state.animLeaf}
              onMouseEnter={() => {
                this.setState({
                  animLowerMouth: !this.state.animLowerMouth,
                  animLeaf: !this.state.animLeaf
                });
              }}
              onMouseLeave={() => {
                this.setState({
                  animLowerMouth: !this.state.animLowerMouth,
                  animLeaf: !this.state.animLeaf
                });
              }}
            >
              <Avatar />
            </Image>
          )}
        </ImageContainer>
        <Bubble
          className="rsc-ts-bubble"
          style={bubbleStyle}
          user={user}
          showAvatar={showAvatar}
          isFirst={isFirst}
          isLast={isLast}
        >
          {loading ? <Loading /> : this.renderMessage()}
        </Bubble>
      </TextStepContainer>
    );
  }
}

TextStep.propTypes = {
  avatarStyle: PropTypes.objectOf(PropTypes.any).isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  bubbleStyle: PropTypes.objectOf(PropTypes.any).isRequired,
  hideBotAvatar: PropTypes.bool.isRequired,
  hideUserAvatar: PropTypes.bool.isRequired,
  previousStep: PropTypes.objectOf(PropTypes.any),
  previousValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array
  ]),
  speak: PropTypes.func,
  step: PropTypes.objectOf(PropTypes.any).isRequired,
  steps: PropTypes.objectOf(PropTypes.any),
  triggerNextStep: PropTypes.func.isRequired
};

TextStep.defaultProps = {
  previousStep: {},
  previousValue: '',
  speak: () => {},
  steps: {}
};

export default TextStep;
