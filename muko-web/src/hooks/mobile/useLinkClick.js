import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { mobileLayoutContext, systemContext } from 'contexts';

const useLinkClick = () => {
  const { setIsClosing } = useContext(mobileLayoutContext);
  const { setAppBarTitle } = useContext(systemContext);

  const navigate = useNavigate();

  const handleLinkClick = (path, title, isClosing) => {
    navigate(path);
    setAppBarTitle(title);

    if (isClosing) {
      setIsClosing(true);
    }
  };

  return handleLinkClick;
};

export default useLinkClick;
