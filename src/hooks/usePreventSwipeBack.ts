// ref: https://www.outsystems.com/forums/discussion/77514/disable-swipe-to-previous-screen-some-android-and-ios/
export default function usePreventSwipeBack() {
  // const [touch, setTouch] = useState()

  document.addEventListener('touchstart', function (event) {
    for (let i = 0; i < event.touches.length; i++) {
      console.log('i', i);
    }

    // is not near edge of view, exit
    // if (event.pageX > 10 && event.pageX < window.innerWidth - 10) return;

    // prevent swipe to navigate gesture
    event.preventDefault();
  });
}
