const CustomRouter = ({ history, ...props }) => {
    const [state, setState] = useState({
      action: history.action,
      location: history.location
    });
  
    useLayoutEffect(() => history.listen(setState), [history]);
  
    return (
      <Router
        {...props}
        location={state.location}
        navigationType={state.action}
        navigator={history}
      />
    );
  };

export function BrowserRouter({
    basename,
    children,
    window
  }: BrowserRouterProps) {
    let historyRef = React.useRef<BrowserHistory>();
    if (historyRef.current == null) {
      historyRef.current = createBrowserHistory({ window });
    }
  
    let history = historyRef.current;
    let [state, setState] = React.useState({
      action: history.action,
      location: history.location
    });
  
    React.useLayoutEffect(() => history.listen(setState), [history]);
  
    return (
      <Router
        basename={basename}
        children={children}
        location={state.location}
        navigationType={state.action}
        navigator={history}
      />
    );
  }