import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bubble from './Bubble';
import Image from './Image';
import ImageContainer from './ImageContainer';
import Loading from '../common/Loading';
import TextStepContainer from './TextStepContainer';

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
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 -60 239 453">
                <path
                  d="M77.73 230.96c9.756 0 17.648-7.919 17.648-17.663 0-9.756-7.892-17.662-17.648-17.662-.69 0-1.365.054-2.041.135 1.27 1.744 2.04 3.879 2.04 6.203 0 5.865-4.756 10.608-10.594 10.608-2.581 0-4.919-.959-6.757-2.486-.175 1.04-.297 2.108-.297 3.189-.014 9.77 7.892 17.676 17.648 17.676z"
                  fill="#2BB741"
                  id="bot-eye"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 240.66c0 10.175 1.446 20.013 4.135 29.419h115.203v.054h115.527A106.403 106.403 0 00239 240.727c0-48.756-32.905-90.283-79.027-106.229-44.401-5.962-72.464-2.538-80.946-.081C32.892 150.376 0 191.917 0 240.66zm161.257 6.473c18.662 0 33.757-15.122 33.757-33.757 0-18.649-15.095-33.757-33.757-33.757-18.649 0-33.757 15.108-33.757 33.757 0 18.649 15.108 33.757 33.757 33.757zm-49.771-33.825c0-18.648-15.121-33.756-33.756-33.756-18.649 0-33.757 15.121-33.757 33.756 0 18.636 15.108 33.757 33.757 33.757 18.648 0 33.756-15.094 33.756-33.757z"
                  fill="url(#paint0_radial)"
                />
                <path
                  d="M161.284 231.012c9.743 0 17.635-7.892 17.635-17.635 0-1.095-.108-2.163-.284-3.203-1.837 1.527-4.175 2.486-6.756 2.486-5.865 0-10.581-4.743-10.581-10.608 0-2.324.77-4.473 2.027-6.216a21.038 21.038 0 00-2.027-.122c-9.771 0-17.663 7.906-17.663 17.663 0 9.743 7.892 17.635 17.649 17.635z"
                  fill="#2BB741"
                  id="bot-eye"
                />
                <path
                  d="M231.485 288.581c0 8.41-2.877 16.739-8.467 24.509-5.59 7.771-13.784 14.831-24.114 20.778-10.329 5.947-22.592 10.665-36.088 13.884-13.496 3.218-27.961 4.875-42.569 4.875-14.608 0-29.073-1.657-42.569-4.875-13.496-3.219-25.758-7.937-36.088-13.884-10.33-5.947-18.523-13.007-24.113-20.778-5.59-7.77-8.468-16.099-8.468-24.509h222.476z"
                  fill="url(#paint1_radial)"
                  id="lower-mouth"
                />
                <path
                  d="M189.935 32.061C164.4 45.733 126.335 77.112 111 108h14.695c4.095-9.921 12.61-22.268 19.255-28.974C186.88 97.421 231 65.404 231 23.343c0-7.536-1.51-15.395-4.6-23.343-11.735 15.312-28.235 5.164-54.255 7.977-38.285 4.143-55.81 33.367-43.82 56.651 17.53-16.764 47.615-31.32 61.61-32.567z"
                  fill="#2E9B27"
                  id="bot-leaf"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-33.70543 65.00492 -91.87064 -47.63546 153.205 205.128)"
                  >
                    <stop stopColor="#2BB741" />
                    <stop offset="1" stopColor="#2E9B27" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(117.635 -12.76 192.232) scale(67.6426 96.1313)"
                  >
                    <stop stopColor="#2BB741" />
                    <stop offset="1" stopColor="#2E9B27" />
                  </radialGradient>
                </defs>
              </svg>
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
