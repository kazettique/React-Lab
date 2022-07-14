export function useBlocker() {
  return false;
}

// import { useCallback, useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router';
// import { useBlocker } from './useBlocker';
// import { Blocker, History, Transition } from 'history';

// export function useCallbackPrompt(when: boolean): (boolean | (() => void))[] {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [showPrompt, setShowPrompt] = useState(false);
//   const [lastLocation, setLastLocation] = useState<any>(null);
//   const [confirmedNavigation, setConfirmedNavigation] = useState(false);

//   const cancelNavigation = useCallback(() => {
//     setShowPrompt(false);
//   }, []);

//   // handle blocking when user click on another route prompt will be shown
//   const handleBlockedNavigation = useCallback(
//     (nextLocation: any) => {
//       // in if condition we are checking next location and current location are equals or not
//       if (!confirmedNavigation && nextLocation.location.pathname !== location.pathname) {
//         setShowPrompt(true);
//         setLastLocation(nextLocation);
//         return false;
//       }
//       return true;
//     },
//     [confirmedNavigation]
//   );

//   const confirmNavigation = useCallback(() => {
//     setShowPrompt(false);
//     setConfirmedNavigation(true);
//   }, []);

//   useEffect(() => {
//     if (confirmedNavigation && lastLocation) {
//       navigate(lastLocation.location.pathname);
//     }
//   }, [confirmedNavigation, lastLocation]);

//   useBlocker(handleBlockedNavigation, when);

//   return [showPrompt, confirmNavigation, cancelNavigation];
// }

// /**
//  * Prompts the user with an Alert before they leave the current screen.
//  *
//  * @param  message
//  * @param  when
//  */
// export function usePrompt(message: string, when = true) {
//   const blocker = useCallback(
//     (tx: Transition) => {
//       if (window.confirm(message)) tx.retry();
//     },
//     [message]
//   );

//   useBlocker(blocker, when);
// }
