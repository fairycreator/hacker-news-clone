import { useSelector, useDispatch } from "react-redux";
import actions from "../../store/app/actions";

export const useNav = () => {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.app.layout);
  const theme = useSelector((state) => state.app.theme);

  const setLayout = (layout) => dispatch(actions.setLayout({ layout }));
  const setTheme = (theme) => dispatch(actions.setTheme({ theme }));

  return {
    layout,
    theme,
    setLayout,
    setTheme,
  };
};
