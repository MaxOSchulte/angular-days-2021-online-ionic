import { AnimationController } from '@ionic/angular';
const animationCtrl = new AnimationController();

// https://github.com/mhartington/v5-animations/blob/master/src/app/animations/index.ts
export const getIonPageElement = (element: HTMLElement) => {
  if (element.classList.contains('ion-page')) {
    return element;
  }

  const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
  if (ionPage) {
    return ionPage;
  }
  // idk, return the original element so at least something animates and we don't have a null pointer
  return element;
};

export interface AnimationOptions {
  mode: 'md' | 'ios';
  animated: boolean;
  direction: 'root' | 'forward' | 'back';
  enteringEl: HTMLElement;
  leavingEl: HTMLElement;
  baseEl: HTMLElement;
  progressAnimation: boolean;
  showGoBack: boolean;
  animationBuilder: (_, opts) => {}
  progressionCallback?: () => {};
  duration?: number;
}

export const customAnimation = (_: HTMLElement, opts: AnimationOptions) => {
  console.log(opts);

  // create root transition
  const rootTransition = animationCtrl
    .create();

  return rootTransition;
};
