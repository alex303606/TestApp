import {
  NavigationAction,
  StackActions,
  useNavigationContainerRef,
} from '@react-navigation/native';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const navigationRef = useNavigationContainerRef();

type paramType<T> = T | object | any;

function navigate<T>(name: string, params?: paramType<T>): void {
  // @ts-expect-error
  navigationRef.current?.navigate(name, params);
}

function dispatch(action: NavigationAction): void {
  navigationRef.current?.dispatch(action);
}

function replace<T>(name: string, params?: paramType<T>): void {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

function push<T>(name: string, params?: paramType<T>): void {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

function pop(count: number): void {
  navigationRef.current?.dispatch(StackActions.pop(count));
}

function reset(routes?: any): void {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name: routes }],
  });
}

export const NavigationService = {
  navigate,
  dispatch,
  replace,
  push,
  reset,
  pop,
};
