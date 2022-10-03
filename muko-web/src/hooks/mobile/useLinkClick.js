import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { mobileLayoutContext, systemContext } from 'contexts';

const useLinkClick = () => {
  const {
    boardHeight,
    setTransitionAnimationFrom,
    setTransitionAnimationTo,
    setIsTransitionCompleted,
  } = useContext(mobileLayoutContext);
  const { setAppBarTitle } = useContext(systemContext);

  const navigate = useNavigate();

  const handleLinkClick = (path, title, direction, scrollY) => {
    navigate(path);

    if (title) {
      setAppBarTitle(title);
    }

    if (direction) {
      let from;
      let to;

      if (direction === 'top') {
        from = 56 + 48 + boardHeight + scrollY.current.scrollTop;
        to = 56;
      } else if (direction === 'down') {
        from = 56;
        to = 56 + 48 + boardHeight;
      }

      setTransitionAnimationFrom(from);
      setTransitionAnimationTo(to);
      setIsTransitionCompleted(false);
    }
  };

  return handleLinkClick;
};

export default useLinkClick;
