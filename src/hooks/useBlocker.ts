export function useBlocker() {
  return false;
}

// import { useContext, useEffect } from 'react';
// import { UNSAFE_NavigationContext as NavigationContext, Navigator } from 'react-router-dom';
// import { Blocker, History } from 'history';

// /**
//  * Blocks all navigation attempts. This is useful for preventing the page from
//  * changing until some condition is met, like saving form data.
//  *
//  * @param  blocker
//  * @param  when
//  * @see https://reactrouter.com/api/useBlocker
//  */
// export function useBlocker(blocker: Blocker, when = true) {
//   const { navigator } = useContext(NavigationContext);

//   useEffect(() => {
//     if (!when) return;

//     const unblock = (navigator as Navigator & Pick<History, 'block'>).block((tx) => {
//       const autoUnblockingTx = {
//         ...tx,
//         retry() {
//           // Automatically unblock the transition so it can play all the way
//           // through before retrying it. TODO: Figure out how to re-enable
//           // this block if the transition is cancelled for some reason.
//           unblock();
//           tx.retry();
//         },
//       };

//       blocker(autoUnblockingTx);
//     });

//     return unblock;
//   }, [navigator, blocker, when]);
// }
// import { useContext, useEffect } from 'react';
// import { UNSAFE_NavigationContext as NavigationContext, Navigator } from 'react-router-dom';
// import { Blocker, History } from 'history';

// /**
//  * Blocks all navigation attempts. This is useful for preventing the page from
//  * changing until some condition is met, like saving form data.
//  *
//  * @param  blocker
//  * @param  when
//  * @see https://reactrouter.com/api/useBlocker
//  */
// export function useBlocker(blocker: Blocker, when = true) {
//   const { navigator } = useContext(NavigationContext);

//   useEffect(() => {
//     if (!when) return;

//     const unblock = (navigator as Navigator & Pick<History, 'block'>).block((tx) => {
//       const autoUnblockingTx = {
//         ...tx,
//         retry() {
//           // Automatically unblock the transition so it can play all the way
//           // through before retrying it. TODO: Figure out how to re-enable
//           // this block if the transition is cancelled for some reason.
//           unblock();
//           tx.retry();
//         },
//       };

//       blocker(autoUnblockingTx);
//     });

//     return unblock;
//   }, [navigator, blocker, when]);
// }
